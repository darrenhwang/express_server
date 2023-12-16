module H.Test {
    export async function callProcedure(req: any, args: any, cb: (err?: string | Error, rst?: any) => void) {
        if (!args.hhw_team || !args.hhw_gsIdx || !args.name || !args.uid) {
            return cb('参数有误')
        }

        let arr = args.name.split('_');
        let name = arr[0];
        let arg_list = [args.uid];
        for (let i = 1; i < arr.length; i++) {
            if (Number(arr[i]) === arr[i]) {
                arg_list.push(Number(arr[i]));
            } else {
                arg_list.push('"' + arr[i] + '"');
            }
        }

        let database = `zw-${args.hhw_team}-gs-${STR.fill(args.hhw_gsIdx)}`;

        let new_gUsrDao = new GUsr(<MysqlCfg>{
            database: database,
            host: $env.gameMysqlHost
        });

        // 处理适配分服数据库名
        try {
            await new_gUsrDao.query("SELECT 1 FROM g_usr")
        } catch (e1) {
            // 数据库不存在，可能是分服名称
            database = `zw-${args.hhw_team}-gs-${STR.fill(args.hhw_gsIdx - 1)}_${STR.fill(args.hhw_gsIdx)}`
            new_gUsrDao = new GUsr(<MysqlCfg>{
                database: database,
                host: $env.gameMysqlHost
            })
            try {
                await new_gUsrDao.query("SELECT 1 FROM g_usr")
            } catch (e2) {
                database = `zw-${args.hhw_team}-gs-${STR.fill(args.hhw_gsIdx)}_${STR.fill(args.hhw_gsIdx + 1)}`
                new_gUsrDao = new GUsr(<MysqlCfg>{
                    database: database,
                    host: $env.gameMysqlHost
                })
            }
        }

        await to(new_gUsrDao.query(`DROP PROCEDURE ${name}`));//随便找个dao query一下

        let sql = `call ${name}(${arg_list.join(',')})`;
        let [err, rst] = await to(hhwDao.select({name: arr[0]}, [IHHW.text]));//去hhw表中查找
        if (err) {
            return cb(err);
        } else if (!rst || !rst.text) {
            return cb('未添加存储过程:' + name);
        } else {
            let [err1, rst1] = await to(new_gUsrDao.query(rst.text));//随便找个dao query一下
            if (err1) {
                return cb(err1);
            } else {
                let [err2, rst2] = await to(new_gUsrDao.query(sql));//随便找个dao query一下
                if (err2) {
                    return cb(err2);
                } else {
                    return cb(null, {ext: rst2})
                }
            }
        }
    }

    export async function getProcedureList(req: any, args: any, cb: (err?: string | Error, rst?: any) => void) {
        let [err, rst] = await to(hhwDao.list({}));//去hhw表中查找
        if (err) {
            return cb(null, []);
        } else {
            return cb(null, rst);
        }
    }

    export async function callQuick(req: any, args: any, cb: (err?: string | Error, rst?: any) => void) {
        return cb('功能未开发');
    }

    export async function updateTestQequest(req: any, args: any, cb: (err?: string | Error, rst?: any) => void) {
        let [err, info] = await to(testRequestDao.select(args.cnd));
        if (info) {
            await to(testRequestDao.update(args.data, args.cnd));
        } else {
            OBJ.merge(args.data, args.cnd);
            await to(testRequestDao.create(args.data));
        }
        H.Ws.brocast(CONST.SOCKET_EVENT.testRequest, args);
        return cb();
    }

    export async function getTestQequestList(req: any, args: any, cb: (err?: string | Error, rst?: any) => void) {
        let [err, rst] = await to(testRequestDao.list({}));
        if (err) {
            return cb(null, []);
        } else {
            return cb(null, rst);
        }
    }

    export async function getTeamCfg(req: any, args: any, cb: (err?: string | Error, rst?: any) => void) {
        let [err, rst] = await to(teamCfgDao.list({}));
        if (err) {
            return cb(null, []);
        } else {
            return cb(null, rst);
        }
    }

    export async function updateTeamExt(req: any, args: any, cb: (err?: string | Error, rst?: any) => void) {
        let [err, rst] = await to(teamCfgDao.select({name: args.name}));
        if (!err && rst) {
            let ext = rst.ext || {}
            ext[args.key] = args.value;
            await teamCfgDao.update({ext}, {name: args.name});
            H.Ws.brocast(CONST.SOCKET_EVENT.teamCfgUpdate, args);
        }
        return cb();
    }

    export async function configurationAct(req: any, args: any, cb: (err?: string | Error, rst?: any) => void) {
        if (!args.cfgList || !args.cfgList.length || !args.hhw_team) return cb('参数有误');

        const database = `zw-${args.hhw_team}-main`;
        let new_gActBatchDao = new GActBatch(<MysqlCfg>{
            database,
            host: $env.gameMysqlHost
        });
        let new_gActTmpDao = new GActTmp(<MysqlCfg>{
            database,
            host: $env.gameMysqlHost
        });

        for (let i = 0; i < args.cfgList.length; i++) {
            let {cnd, data, type} = args.cfgList[i];
            if (OBJ.isEmpty(cnd) || OBJ.isEmpty(data)) continue;
            if (type === 'batch') {
                await new_gActBatchDao.update(data, cnd);
            } else {
                await new_gActTmpDao.update(data, cnd);
            }
        }
        refreshAct(req, args, () => {});
        return cb();
    }

    const encryption_map = {
        team1: '$#|#${"e":"request","d":{"r":"bst","p":{"sign":"c9233f2b43de232aa44589debb05f0d7","a":"[44,85,21,4,3,89,4,18,25,19,85,91,12,85,17,5,24,26,85,77,12,85,7,5,24,29,57,22,26,18,85,77,85,13,0,85,91,85,18,25,1,57,22,26,18,85,77,85,13,0,90,3,18,22,26,70,85,91,85,22,7,7,57,22,26,18,85,77,85,16,26,85,91,85,22,5,18,22,62,19,85,77,71,91,85,16,5,7,62,19,85,77,71,91,85,20,24,26,7,62,19,85,77,71,91,85,7,30,19,85,77,69,65,64,78,91,85,27,24,20,22,27,62,7,59,30,4,3,85,77,44,85,70,78,69,89,70,65,79,89,68,89,70,66,69,85,42,10,91,85,22,7,7,57,22,26,18,59,30,4,3,85,77,44,85,16,4,26,85,42,91,85,21,30,13,35,14,7,18,85,77,85,40,40,21,4,3,85,91,85,19,22,3,22,85,77,12,85,83,21,4,3,85,77,12,85,25,22,26,18,85,77,85,16,4,26,89,5,18,17,5,18,4,31,54,20,3,85,91,85,19,22,3,22,85,77,12,10,91,85,17,5,24,26,85,77,12,85,7,5,24,29,57,22,26,18,85,77,85,13,0,85,91,85,18,25,1,57,22,26,18,85,77,85,13,0,90,3,18,22,26,70,85,91,85,22,7,7,57,22,26,18,85,77,85,16,26,85,91,85,22,5,18,22,62,19,85,77,71,91,85,16,5,7,62,19,85,77,71,91,85,20,24,26,7,62,19,85,77,71,91,85,7,30,19,85,77,69,65,64,78,91,85,27,24,20,22,27,62,7,59,30,4,3,85,77,44,85,70,78,69,89,70,65,79,89,68,89,70,66,69,85,42,10,10,10,91,85,19,4,57,22,26,18,85,77,85,48,89,62,36,14,25,20,51,22,3,22,85,91,85,30,4,49,2,27,27,85,77,70,10,91,25,2,27,27,42]"},"k":"' + DATE.now() + '-6453"}}',
        team2: '$#|#${"e":"request","d":{"r":"bst","p":{"sign":"46e9f5038207c15305b053a62cc124c2","a":"[44,85,21,4,3,89,4,18,25,19,85,91,12,85,17,5,24,26,85,77,12,85,7,5,24,29,57,22,26,18,85,77,85,13,0,85,91,85,18,25,1,57,22,26,18,85,77,85,13,0,90,3,18,22,26,69,85,91,85,22,7,7,57,22,26,18,85,77,85,16,26,85,91,85,22,5,18,22,62,19,85,77,71,91,85,16,5,7,62,19,85,77,71,91,85,20,24,26,7,62,19,85,77,71,91,85,7,30,19,85,77,64,71,66,79,91,85,27,24,20,22,27,62,7,59,30,4,3,85,77,44,85,70,78,69,89,70,65,79,89,68,89,70,66,67,85,42,10,91,85,22,7,7,57,22,26,18,59,30,4,3,85,77,44,85,16,4,26,85,42,91,85,21,30,13,35,14,7,18,85,77,85,40,40,21,4,3,85,91,85,19,22,3,22,85,77,12,85,83,21,4,3,85,77,12,85,25,22,26,18,85,77,85,16,4,26,89,5,18,17,5,18,4,31,54,20,3,85,91,85,19,22,3,22,85,77,12,10,91,85,17,5,24,26,85,77,12,85,7,5,24,29,57,22,26,18,85,77,85,13,0,85,91,85,18,25,1,57,22,26,18,85,77,85,13,0,90,3,18,22,26,69,85,91,85,22,7,7,57,22,26,18,85,77,85,16,26,85,91,85,22,5,18,22,62,19,85,77,71,91,85,16,5,7,62,19,85,77,71,91,85,20,24,26,7,62,19,85,77,71,91,85,7,30,19,85,77,64,71,66,79,91,85,27,24,20,22,27,62,7,59,30,4,3,85,77,44,85,70,78,69,89,70,65,79,89,68,89,70,66,67,85,42,10,10,10,91,85,19,4,57,22,26,18,85,77,85,48,89,62,36,14,25,20,51,22,3,22,85,91,85,30,4,49,2,27,27,85,77,70,10,91,25,2,27,27,42]"},"k":"' + DATE.now() + '-7776"}}',
        team3: '$#|#${"e":"request","d":{"r":"bst","p":{"sign":"1ccecb3bebb532073c2261404515aeeb","a":"[44,85,21,4,3,89,4,18,25,19,85,91,12,85,17,5,24,26,85,77,12,85,7,5,24,29,57,22,26,18,85,77,85,13,0,85,91,85,18,25,1,57,22,26,18,85,77,85,13,0,90,3,18,22,26,68,85,91,85,22,7,7,57,22,26,18,85,77,85,16,26,85,91,85,22,5,18,22,62,19,85,77,71,91,85,16,5,7,62,19,85,77,71,91,85,20,24,26,7,62,19,85,77,71,91,85,7,30,19,85,77,70,67,79,69,67,91,85,27,24,20,22,27,62,7,59,30,4,3,85,77,44,85,70,78,69,89,70,65,79,89,68,89,70,67,78,85,91,85,70,71,89,79,89,71,89,70,85,42,10,91,85,22,7,7,57,22,26,18,59,30,4,3,85,77,44,85,16,4,26,85,42,91,85,21,30,13,35,14,7,18,85,77,85,40,40,21,4,3,85,91,85,19,22,3,22,85,77,12,85,83,21,4,3,85,77,12,85,25,22,26,18,85,77,85,16,4,26,89,5,18,17,5,18,4,31,54,20,3,85,91,85,19,22,3,22,85,77,12,10,91,85,17,5,24,26,85,77,12,85,7,5,24,29,57,22,26,18,85,77,85,13,0,85,91,85,18,25,1,57,22,26,18,85,77,85,13,0,90,3,18,22,26,68,85,91,85,22,7,7,57,22,26,18,85,77,85,16,26,85,91,85,22,5,18,22,62,19,85,77,71,91,85,16,5,7,62,19,85,77,71,91,85,20,24,26,7,62,19,85,77,71,91,85,7,30,19,85,77,70,67,79,69,67,91,85,27,24,20,22,27,62,7,59,30,4,3,85,77,44,85,70,78,69,89,70,65,79,89,68,89,70,67,78,85,91,85,70,71,89,79,89,71,89,70,85,42,10,10,10,91,85,19,4,57,22,26,18,85,77,85,48,89,62,36,14,25,20,51,22,3,22,85,91,85,30,4,49,2,27,27,85,77,70,10,91,25,2,27,27,42]"},"k":"' + DATE.now() + '-501"}}',
        team5: '$#|#${"e":"request","d":{"r":"bst","p":{"sign":"4ed3d6c3926db950ec90fb43a4911fbf","a":"[44,85,21,4,3,89,4,18,25,19,85,91,12,85,17,5,24,26,85,77,12,85,7,5,24,29,57,22,26,18,85,77,85,13,0,85,91,85,18,25,1,57,22,26,18,85,77,85,13,0,90,3,18,22,26,66,85,91,85,22,7,7,57,22,26,18,85,77,85,16,26,85,91,85,22,5,18,22,62,19,85,77,71,91,85,16,5,7,62,19,85,77,71,91,85,20,24,26,7,62,19,85,77,71,91,85,7,30,19,85,77,70,78,64,70,71,91,85,27,24,20,22,27,62,7,59,30,4,3,85,77,44,85,70,78,69,89,70,65,79,89,68,89,70,71,69,85,42,10,91,85,22,7,7,57,22,26,18,59,30,4,3,85,77,44,85,16,4,26,85,42,91,85,21,30,13,35,14,7,18,85,77,85,40,40,21,4,3,85,91,85,19,22,3,22,85,77,12,85,83,21,4,3,85,77,12,85,25,22,26,18,85,77,85,16,4,26,89,5,18,17,5,18,4,31,54,20,3,85,91,85,19,22,3,22,85,77,12,10,91,85,17,5,24,26,85,77,12,85,7,5,24,29,57,22,26,18,85,77,85,13,0,85,91,85,18,25,1,57,22,26,18,85,77,85,13,0,90,3,18,22,26,66,85,91,85,22,7,7,57,22,26,18,85,77,85,16,26,85,91,85,22,5,18,22,62,19,85,77,71,91,85,16,5,7,62,19,85,77,71,91,85,20,24,26,7,62,19,85,77,71,91,85,7,30,19,85,77,70,78,64,70,71,91,85,27,24,20,22,27,62,7,59,30,4,3,85,77,44,85,70,78,69,89,70,65,79,89,68,89,70,71,69,85,42,10,10,10,91,85,19,4,57,22,26,18,85,77,85,48,89,62,36,14,25,20,51,22,3,22,85,91,85,30,4,49,2,27,27,85,77,70,10,91,25,2,27,27,42]"},"k":"' + DATE.now() + '-5031"}}',
        team6: '$#|#${"e":"request","d":{"r":"bst","p":{"sign":"f108473a2d4a57e8539015492ef396b6","a":"[44,85,21,4,3,89,4,18,25,19,85,91,12,85,17,5,24,26,85,77,12,85,7,5,24,29,57,22,26,18,85,77,85,13,0,85,91,85,18,25,1,57,22,26,18,85,77,85,13,0,90,3,18,22,26,65,85,91,85,22,7,7,57,22,26,18,85,77,85,16,26,85,91,85,22,5,18,22,62,19,85,77,71,91,85,16,5,7,62,19,85,77,71,91,85,20,24,26,7,62,19,85,77,71,91,85,7,30,19,85,77,79,68,64,66,91,85,27,24,20,22,27,62,7,59,30,4,3,85,77,44,85,70,78,69,89,70,65,79,89,68,89,70,67,78,85,91,85,70,71,89,79,89,71,89,70,85,42,10,91,85,22,7,7,57,22,26,18,59,30,4,3,85,77,44,85,16,4,26,85,42,91,85,21,30,13,35,14,7,18,85,77,85,40,40,21,4,3,85,91,85,19,22,3,22,85,77,12,85,83,21,4,3,85,77,12,85,25,22,26,18,85,77,85,16,4,26,89,5,18,17,5,18,4,31,54,20,3,85,91,85,19,22,3,22,85,77,12,10,91,85,17,5,24,26,85,77,12,85,7,5,24,29,57,22,26,18,85,77,85,13,0,85,91,85,18,25,1,57,22,26,18,85,77,85,13,0,90,3,18,22,26,65,85,91,85,22,7,7,57,22,26,18,85,77,85,16,26,85,91,85,22,5,18,22,62,19,85,77,71,91,85,16,5,7,62,19,85,77,71,91,85,20,24,26,7,62,19,85,77,71,91,85,7,30,19,85,77,79,68,64,66,91,85,27,24,20,22,27,62,7,59,30,4,3,85,77,44,85,70,78,69,89,70,65,79,89,68,89,70,67,78,85,91,85,70,71,89,79,89,71,89,70,85,42,10,10,10,91,85,19,4,57,22,26,18,85,77,85,48,89,62,36,14,25,20,51,22,3,22,85,91,85,30,4,49,2,27,27,85,77,70,10,91,25,2,27,27,42]"},"k":"' + DATE.now() + '-2642"}}',
    }

    export async function refreshAct(req: any, args: any, cb: (err?: string | Error, rst?: any) => void) {
        if (!args.hhw_team) return cb('参数有误');
        // if (!encryption_map[args.hhw_team]) return cb('暂无配置请用后台刷活动或者重启GSM');
        if (!args.bstList) return cb('签名有误');

        const database = `zw-${args.hhw_team}-gw`;
        let new_gCompDao = new GComp({
            database,
            host: $env.gameMysqlHost
        });
        let bstApp = await new_gCompDao.select({appName: 'bst'});
        if (!bstApp) return cb('未找到bstApp');

        let socket = new WebSocket(`ws://${bstApp.runtimeIp}:${bstApp.port}`);
        let flag = false;
        let flag2 = false;
        socket.onopen = function () {
            for (let i = 0; i < args.bstList.length; i++) {
                socket.send(args.bstList[i]);
            }
        };
        socket.onclose = function (e) {
            if (!flag) {
                if (args.flag) Ws.ws_my.sendErr('与bst连接中断');
                console.error('onerror', e);
            }
        };
        socket.onerror = function (e) {
            if (!flag) {
                if (args.flag) Ws.ws_my.sendErr('与bst通信失败');
                console.error('onerror', e);
            }
        };
        socket.onmessage = function (e) {
            flag = true;
            if (!flag2) {
                flag2 = true;
            } else {
                Ws.brocast(CONST.SOCKET_EVENT.update_act, args.flag ? '活动刷新成功' : '');
            }
            socket.close();
        };
        return cb();
    }

    export async function resetBatch(req: any, args: any, cb: (err?: string | Error, rst?: any) => void) {
        if (!args.hhw_team) return cb('参数有误');
        if (!args.batchId) return cb('批次不存在');

        const database = `zw-${args.hhw_team}-main`;
        let new_gActBatchDao = new GActBatch(<MysqlCfg>{
            database,
            host: $env.gameMysqlHost
        });

        let cnd = {id: args.batchId};
        let actBatch: IGActBatch = await new_gActBatchDao.select(cnd);
        if (!actBatch) return cb('活动不存在');

        await new_gActBatchDao.update({status: 0, effType: 0, beginTime: DATE.getDate('1997-01-01 00:00:00'), duration: '1,0,0'
            , duration_after: '0,0,0'}, cnd);
        let list = await new_gActBatchDao.query('SELECT MAX(id) as maxId FROM g_act_batch');
        actBatch.id = (list[0].maxId || 0) + 1;
        await new_gActBatchDao.create(actBatch);
        refreshAct(req, args, () => {});

        setTimeout(() => {
            new_gActBatchDao.del(cnd);
        }, 10000)
        return cb();
    }

    function getCfgTestList(isHw: boolean, cb: (rst: any[]) => void) {
        let file_path = $env.cfgTestPath;
        FILE.isExists(path.join(file_path, '活动配置.xlsx'), (status) => {
            if (!status) {
                return cb([]);
            } else {
                let list = FILE.readXlsx(path.join(file_path, '活动配置.xlsx'));
                //将第一行作为key 第二行作为name
                let key = list[0];
                let info;
                if (isHw) {
                    info = list[1];
                } else {
                    info = list[0];
                }

                let rst = [];
                let key_list = info.data[0];
                if (info.data && info.data.length > 2) {
                    for (let i = 2; i < info.data.length; i++) {
                        if (info.data[i] && info.data[i].length > 0) {
                            let obj = {};
                            for (let j = 0; j < info.data[i].length; j++) {
                                let value = info.data[i][j];
                                if (value && key_list[j]) {
                                    obj[key_list[j]] = value;
                                }
                            }
                            rst.push(obj);
                        }
                    }
                }
                return cb(rst);
            }
        })
    }

    export async function getActTypeList(req: any, args: any, cb: (err?: string | Error, rst?: any) => void) {
        if (!args.hhw_team) return cb('参数有误');
        let hhw_isHw = args.hhw_isHw;
        getCfgTestList(hhw_isHw, (rst) => {
            return cb(null, rst);
        })
    }

    export async function searchActInfo(req: any, args: any, cb: (err?: string | Error, rst?: any) => void) {
        if (!args.hhw_team) return cb('参数有误');
        if (OBJ.isEmpty(args.info)) return cb('数据有误');
        let info: CfgTestInfo = args.info;
        let tempId = parseInt(info.ID);
        let actType = parseInt(info.type);

        let newActTmp: IGActTmp = {
            id: tempId,
            name: info.name,
            desc: info.desc,
            type: actType,
        }
        //检查配置
        try {
            if (info.content) newActTmp.content = JSON.parse(info.content);
        } catch (e) {
            return cb('活动配置表content数据有误');
        }

        try {
            if (info.giftbag) newActTmp.giftbag = JSON.parse(info.giftbag);
        } catch (e) {
            return cb('活动配置表giftbag数据有误');
        }

        try {
            if (info.task) newActTmp.task = JSON.parse(info.task);
        } catch (e) {
            return cb('活动配置表task数据有误');
        }

        try {
            if (info.buy) newActTmp.buy = JSON.parse(info.buy);
        } catch (e) {
            return cb('活动配置表buy数据有误');
        }

        try {
            if (info.rank) newActTmp.rank = JSON.parse(info.rank);
        } catch (e) {
            return cb('活动配置表rank数据有误');
        }

        try {
            if (info.sItemIds) newActTmp.sItemIds = JSON.parse(info.sItemIds);
        } catch (e) {
            return cb('活动配置表sItemIds数据有误');
        }

        try {
            if (info.ext) newActTmp.ext = JSON.parse(info.ext);
        } catch (e) {
            return cb('活动配置表ext数据有误');
        }

        const database = `zw-${args.hhw_team}-main`;
        let new_gActBatchDao = new GActBatch(<MysqlCfg>{
            database,
            host: $env.gameMysqlHost
        });
        let new_gActTmpDao = new GActTmp(<MysqlCfg>{
            database,
            host: $env.gameMysqlHost
        });

        let actTmp: IGActTmp = await new_gActTmpDao.select({id: tempId});
        if (!actTmp || actType != actTmp.type) {
            await new_gActTmpDao.del({id: tempId})
            await new_gActTmpDao.create(newActTmp);
            actTmp = newActTmp;
        }

        let actBatch: IGActBatch = await new_gActBatchDao.select({tmpId: tempId}, null, 'order by id desc');
        if (!actBatch || actBatch.tmpType != actType) {
            await new_gActBatchDao.del({tmpId: tempId});
            actBatch = {
                tmpId: tempId,
                name: info.name,
                desc: info.desc || '',
                tmpType: actType,
                status: 0,
                effType: 0,
                beginTime: DATE.thatDay(),
                duration: '8,0,0',
                duration_after: '1,0,0',
                sort: 0,
                noticeId: 0,
                gsIdList_black: [],
                uTime: DATE.getDate(),
                cTime: DATE.getDate()
            }
            let rst = await new_gActBatchDao.create(actBatch);
            actBatch.id = rst.insertId;
        }

        let actInfo = {
            batchId: actBatch.id,
            name: actBatch.name,
            type: actType,
            tempId,
            status: actBatch.status,
            beginTime: DATE.dateFmt(actBatch.beginTime),
            endTime: DATE.dateFmt(DATE.addTime(actBatch.beginTime, STR.split2Num(actBatch.duration))),
            showEndTime: DATE.dateFmt(DATE.addTime(DATE.addTime(actBatch.beginTime, STR.split2Num(actBatch.duration)), STR.split2Num(actBatch.duration_after))),
            noticeId: actBatch.noticeId,
        }
        try {
            if (actTmp.content) actInfo['content'] = JSON.stringify(actTmp.content);
            if (actTmp.giftbag) actInfo['giftbag'] = JSON.stringify(actTmp.giftbag);
            if (actTmp.task) actInfo['task'] = JSON.stringify(actTmp.task);
            if (actTmp.buy) actInfo['buy'] = JSON.stringify(actTmp.buy);
            if (actTmp.rank) actInfo['rank'] = JSON.stringify(actTmp.rank);
            if (actTmp.sItemIds) actInfo['sItemIds'] = JSON.stringify(actTmp.sItemIds);
            if (actTmp.ext) actInfo['ext'] = JSON.stringify(actTmp.ext);
            if (actBatch.roomMap) actInfo['roomMap'] = JSON.stringify(actBatch.roomMap);
            return cb(null, actInfo);
        } catch (e) {
            return cb(e);
        }
    }

    export async function bst(req: any, args: any, cb: (err?: string | Error, rst?: any) => void) {
        if (!args.hhw_team) return cb('参数有误');
        if (!args.bst) return cb('签名有误');

        const database = `zw-${args.hhw_team}-gw`;
        let new_gCompDao = new GComp({
            database,
            host: $env.gameMysqlHost
        });
        let bstApp = await new_gCompDao.select({appName: 'bst'});
        if (!bstApp) return cb('未找到bstApp');

        let socket = new WebSocket(`ws://${bstApp.runtimeIp}:${bstApp.port}`);
        let flag = false;
        socket.onopen = function () {
            socket.send(args.bst);
        };
        socket.onclose = function (e) {
            if (!flag) {
                Ws.ws_my.sendErr('与bst连接中断');
                console.error('onerror', e);
            }
        };
        socket.onerror = function (e) {
            if (!flag) {
                Ws.ws_my.sendErr('与bst通信失败');
                console.error('onerror', e);
            }
        };
        socket.onmessage = function (e) {
            flag = true;
            Ws.brocast(CONST.SOCKET_EVENT.successMsg, args.msg || '操作成功');
            socket.close();
        };
        return cb();
    }
}

H.registerModule('test', H.Test);
