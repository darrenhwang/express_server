/**
*  author: hhw
*  time: 2023/2/24
*  note:
 *      配置项：
 *          pm2: 是否开启pm2的功能
 *          pm2_path: pm2的全局路径
 *
 *          pm2_watch： 是否开启日志监控
 *          wxKey_pm2Log: pm2错误日志推送的企业key
 *          pm2_ignore_name_list： pm2日志过滤进程
 *          pm2_include_list: pm2日志内容包含
 *          pm2_ignore_list: pm2日志内容过滤
 *
 *          pm2_monit: pm2的性能监控
 *          monitList_limit: 性能监控的最大条数
 *
*/
module H {
    interface MonitInfo {
        name?: string;
        /** 进程状态 */
        status?: string;
        /** 进程号 */
        pid?: string;
        /** 进程重启次数 */
        restart_time?: string;
        node_version?: string;
        node_args?: string;
        pm_exec_path?: string;
        pm_pid_path?: string;
        pm_uptime?: string;
        version?: string;
        list?: {mem?: number, cpu?: number, time: string}[]
    }

    class Pm2_tool extends EventEmitter {
        private _pm2: any;
        private _pm2_path: string;
        private _monit_map: {[name: string]: MonitInfo};
        constructor() {
            super();
            this._pm2_path = $env.pm2_path ||  "";//pm2路径不存在就从全局nodeModule下取
            this._monit_map = {};
            this.init();
        }

        public init() {
            let self = this;
            const path = require("path");
            let promise: Promise<string> = new Promise(function (resolve, reject) {
                if (self._pm2_path) {
                    resolve(self._pm2_path);
                } else {
                    exec2("npm root -g", function(err, rst) {
                        if (!err) {
                            rst = rst.split('\n')[0];
                            self._pm2_path = path.join(rst, 'pm2');
                            resolve(self._pm2_path);
                        } else {
                            reject(err);
                        }
                    })
                }
            });

            promise.then((rst: string) => {
                try {
                    const API = require(path.join(rst, "lib/API.js"));
                    let pm2 = self._pm2 = new API();
                    pm2.connect(function () {
                        self._inject(pm2);
                    });
                    self._loopMonit();
                } catch (err) {
                    console.warn('全局未正确安装pm2', err);
                }
            }, (err) => {
                console.error(err);
            })

        }

        // 监听日志
        private _inject(pm2: any) {
            let self = this;
            if (!$env.pm2_watch) return;

            //pm2 logs
            pm2.Client.launchBus(function (err: any, bus: any, socket: any) {
                bus.on('log:*', function (type: string, packet: any) {
                    let errData = packet.data || ''
                    if (type == 'err' && self._filter(errData, packet.process.name)) {
                        let msg = 'pm2报错日志：\n' +
                            `>[进程信息]:<font color="info">** ${packet.process.name}**</font>\n` +
                            ` >[发生时间]:<font color="info">** ${new Date().toLocaleString()}**</font>\n` +
                            ` >[错误日志]:<font color="warning">**${errData}**</font>`;

                        pushWx_markdown(msg, $env.wxKey_pm2Log || '');
                    }
                });
            });
        }

        // 过滤
        private _filter(errData: string, name: string): boolean {
            if (!errData)
                return false;
            if ($env.pm2_ignore_name_list && $env.pm2_ignore_name_list.indexOf(name) > -1) {
                return false;
            }
            if ($env.pm2_include_list) {//先看包含
                for (let include_data of $env.pm2_include_list) {
                    if (errData.indexOf(include_data) > -1) {
                        return true;
                    }
                }
            }
            if ($env.pm2_ignore_list && $env.pm2_ignore_list.length) {//再看过滤
                for (let ignore_data of $env.pm2_ignore_list) {
                    if (errData.indexOf(ignore_data) > -1) {
                        return false;
                    }
                }
            }
            return true;
        }

        public getMonitorData(cb?: (err?: any, list?: any[]) => void) {
            if (!this._pm2) {
                if (cb) cb(null, []);
                return;
            }
            this._pm2.Client.executeRemote('getMonitorData', {}, function(err: any, list: any[]) {
                if (cb) cb(err, list)
            });
        }

        private _loopMonit() {
            let self = this;
            if (!$env.pm2_monit || !self._pm2) return;
            let currentTime = new Date();
            let limit = $env.monitList_limit ? Number($env.monitList_limit) : 864;//12*24*3
            self._pm2.Client.executeRemote('getMonitorData', {}, function(err: any, list: any[]) {
                let socket_list: MonitInfo[] = [];
                list.forEach((info) => {
                    let name = info.pm2_env.name;
                    let map: MonitInfo = self._monit_map[name] = self._monit_map[name] || {};
                    let monit_list = map.list = map.list || [];
                    map.name = name;
                    map.status = info.pm2_env.status;
                    map.pid = info.pm2_env.pid;
                    map.restart_time = info.pm2_env.restart_time;
                    map.node_version = info.pm2_env.node_version;
                    map.node_args = info.pm2_env.node_args;
                    map.pm_exec_path = info.pm2_env.pm_exec_path;
                    map.pm_pid_path = info.pm2_env.pm_pid_path;
                    map.pm_uptime = info.pm2_env.pm_uptime;
                    map.version = info.pm2_env.version;

                    let copy_map = Object.assign({}, map);
                    copy_map.list = [{
                        cpu: Number(info.monit.cpu),//%
                        mem: Number((info.monit.memory / 1048576).toFixed(2)),//'MB',
                        time: DATE.moment(currentTime).format('MM-DD HH:mm')
                    }]
                    socket_list.push(copy_map);

                    monit_list.push(...copy_map.list);
                    if (monit_list.length > limit) monit_list.shift();
                })

                H.Ws.brocast(CONST.SOCKET_EVENT.pm2Monit, socket_list);
                setTimeout(function () {
                    pm2_tool._loopMonit();
                }, 300000);//5分钟执行一次
            });
        }

        /** 获取所有进程信息 */
        public getAll() {
            let list = [];
            for (let key in this._monit_map) {
                list.push(this._monit_map[key]);
            }
            return list;
        }
    }

    export let pm2_tool: Pm2_tool;
    if ($env.pm2) pm2_tool = new Pm2_tool();
}