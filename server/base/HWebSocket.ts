/**
 * https://socket.io/docs/v4/server-options/
 */
module H.Ws {
    let server_ws: any;
    export let ws_my: HWebSocket;
    let wsCollectList: HWebSocket[] = [];//记入所有ws连接

    /**
     * 获取我的socket
     * @param userid
     */
    export function getMyWs(userid: string): HWebSocket {
        if (ws_my) return ws_my;

        for (let ws of wsCollectList) {
            if (ws.userid == userid) {
                return ws;
            }
        }
        return null;
    }

    /**
     * socket进行广播推送
     * @param type
     * @param message
     * @param userid_list
     */
    export function brocast(type: CONST.SOCKET_EVENT, message: any, userid_list?: string[]) {
        wsCollectList.forEach(function (ws: HWebSocket) {
            if (!userid_list || (ws.userid && userid_list.indexOf(ws.userid) > -1)) {
                ws.send(setSocketData(type, message));
            }
        })
    }

    export function setSocketData(type: CONST.SOCKET_EVENT, data: any) {
        let obj: any = {};
        obj[type] = data;
        return obj;
    }

    /** 创建socket服务 */
    export function createWs(server_http: any) {
        const { Server } = require("socket.io");
        server_ws = new Server(server_http, {
            // allowRequest: async (req: any, cb: (err?: any, rst?: any) => void) => {
            //     cb(null, true);
            // },
            cors: true
        });
        server_ws.on('connection', function (client: any) {
            //client.handshake.query;
            let query = client.handshake.query || {};
            let userInfo: UserInfo = {};
            if (query.userInfo) {
                userInfo = decryptToObj(query.userInfo, 'userInfo');
            }
            ws_my = new H.Ws.HWebSocket(client, userInfo);
        });
    }

    function getClientIp(client: any): IpInfo {
        let ip: string;
        let handshake = client.handshake;
        // if (handshake.headers["x-forwarded-for"] != null) {
        //     ip = handshake.headers["x-forwarded-for"];
        // } else {
        //     ip = handshake.address;
        // }
        ip = handshake.address;
        //::ffff:127.0.0.1
        let arr = ip.split(":");
        let ipv4 = arr.pop();
        let ipv6 = arr.join(":");
        let origin = handshake.headers.origin;
        return {
            ip,
            ipv4,
            ipv6,
            origin,
        }
    }

    /** 创建WebSocket类并继承事件类 */
    export class HWebSocket extends EventEmitter {
        private _client: any;
        public ipInfo: IpInfo;
        userInfo: UserInfo;
        userid: string;
        constructor(client: any, userInfo: UserInfo) {
            super();
            this._client = client;
            this.ipInfo = getClientIp(client);

            if (userInfo && userInfo.userid) {
                this.userid = userInfo.userid;
                this.userInfo = userInfo;
            }
            wsCollectList.push(this);

            let self = this;
            client.on('message', function (msg: string) {
                self.dataHandle(msg);
            });
            client.on('disconnect', function (msg: string) {
                self.close();
            });
            client.on('error', function (msg: string) {
                self.close();
            });
        }

        //发送错误日志
        sendErr(msg: any) {
            let arg: any = {};
            arg[CONST.SOCKET_EVENT.errMsg] = msg;
            this.send(JSON.stringify(arg));
        }

        sendSuccess(msg: any) {
            let arg: any = {};
            arg[CONST.SOCKET_EVENT.successMsg] = msg;
            this.send(JSON.stringify(arg));
        }

        /**
         * 发送数据
        */
        send(message: any) {
            if (message && typeof message == 'object') {
                message = JSON.stringify(message);
            }
            this._client.emit("message", message);
        }

        /** 删除断开连接 */
        close() {
            let idx = wsCollectList.indexOf(this);
            if (idx > -1) {
                wsCollectList.splice(idx, 1);
            }
        }

        /**
         * socket有数据过来的处理
         */
        dataHandle(data: any) {
            let self = this;
            if (data) {//处理前端的请求数据
                try {
                    data = JSON.parse(data);
                    if (data["module"] && data["method"]) {
                        if (!self.req) self.req = {};
                        doModuleMethod(self.req, data["module"], data["method"], data["args"], (err?: string | Error, rst?) => {
                            if (err) {
                                console.error('socket', err);
                                self.sendErr(err);
                            } else {

                            }
                        })
                    } else {

                    }
                } catch (e) {
                    console.error('socket', e.message || e);
                    self.sendErr(e.message || e);
                }
            } else {

            }
        }
    }
}
