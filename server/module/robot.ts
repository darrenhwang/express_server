namespace H.Robot {
    function getUid(accId: number, gsIdx: number) {
        return accId * 1000000 + 100000 + gsIdx;
    }

    export async function addRobot(req: any, args: any, cb?: (err?: string | Error, rst?: any) => void): Promise<[any, number[]]> {
        if (!args.hhw_team || !args.hhw_gsIdx) {
            if (cb) cb('参数有误');
            return ['参数有误', []];
        }

        if (!args.num) {
            if (cb) cb('请选择添加机器人数量');
            return ['请选择添加机器人数量', []];
        }

        const gsIdx = args.hhw_gsIdx;
        const nowDate = DATE.getDate();
        const database_gs = `zw-${args.hhw_team}-gs-${STR.fill(gsIdx)}`;
        const database_gw = `zw-${args.hhw_team}-gw`;

        let new_gUsrDao = new GUsr(<MysqlCfg>{
            database: database_gs,
            host: $env.gameMysqlHost
        });

        //确保有auto2存储过程
        await to(new_gUsrDao.query(`DROP PROCEDURE auto2`));//随便找个dao query一下
        let [err, rst] = await to(hhwDao.select({name: 'auto2'}, [IHHW.text]));//去hhw表中查找
        if (err) {
            if (cb) cb(err);
            return [err, []];
        } else if (!rst || !rst.text) {
            if (cb) cb('未添加存储过程: auto2');
            return ['未添加存储过程: auto2', []];
        } else {
            let [err1, rst1] = await to(new_gUsrDao.query(rst.text));//随便找个dao query一下
            if (err1) {
                if (cb) cb(err1);
                return [err1, []];
            }
        }

        let new_gAccDao = new GAcc(<MysqlCfg>{
            database: database_gw,
            host: $env.gameMysqlHost
        })

        let uidList = [];
        for (let i = 0; i < args.num; i++) {
            let name = 'hRobot' + i;
            let acc: IGAcc = await new_gAccDao.select({name});
            if (!acc) {
                acc = {
                    name,
                    status: 1,
                    sdkId: 99999,
                    chnId: 99999,
                    sdkArea: 1,
                    sdkData: '{}',
                    cTime: nowDate,
                    lCount: 0,
                    lastGsIdx: gsIdx,
                    gsIdxList: [gsIdx],
                    packageId: 0,
                }
                let rst = await new_gAccDao.create(acc);
                acc.id = rst.insertId;
            }

            let uid = getUid(acc.id, gsIdx);
            uidList.push(uid);
            let usr: IGUsr = await new_gUsrDao.select({id: uid});
            if (!usr) {
                usr = {
                    id: uid,
                    did: gsIdx + STR.fill(uid.toString(32), '00000000'),
                    sdkId: 99999,
                    chnId: 99999,
                    accName: name,
                    name: 'g' + gsIdx + '机器人' + i,
                    titleId: 0,
                    bubbleId: 0,
                    fashion: 0,
                    sex: 0,
                    lvl: 100,
                    lvlExp: 100000,
                    vip: 0,
                    vipExp: 0,
                    cmt: 0,
                    cmt_hist: 0,
                    cLang: 'zh',
                    cRtType: 0,
                    cTime: nowDate,
                    refundTime: DATE.getDate('2021-01-01 00:00:00'),
                    rchgCnt: 0,
                    lLang: 'zh',
                    lRtType: 0,
                    lTime: nowDate,
                    inviteesId: 0,
                    bag: {},
                    histDmd: 0,
                    histDmd_c: 0,
                    dmd: 0,
                    histGld: 0,
                    gldTime: nowDate,
                    gld: 0,
                    gldSp: 0,
                    rufMsId: 0,
                    wingId: 0,
                    sacraId: 0,
                    gemSchemeNo: 0,
                    attr: {},
                    attrDirty: 0,
                    roleCnt: 0,
                    aIntgr: 0,
                    isDel: 0,
                    faceId: 0,
                }
                await new_gUsrDao.create(usr);
                //机器人刷号
                await new_gUsrDao.query(`call auto2(${uid})`);//刷号
            };
        }

        if (cb) cb(null, uidList);
        return [null, uidList];
    }

    export async function addRobotToRb(req: any, args: any, cb: (err?: string | Error, rst?: any) => void) {
        if (!args.hhw_team || !args.hhw_gsIdx) {
            return cb('参数有误');
        }

        function rand(): number {
            let begin = parseInt(args.list[0]) || 0;
            let end = parseInt(args.list[1]) || 0;
            return NUM.rand(begin, end);
        }

        let ecycId = DATE.getDayInt(DATE.thisWeekTime(1));
        let [err, uidList] = await addRobot(req, args);
        if (err) {
            return cb(err);
        }

        const database_rb = `zw-${args.hhw_team}-rb`;
        const database_gs = `zw-${args.hhw_team}-gs-${STR.fill(args.hhw_gsIdx)}`;

        let new_gCRbUsrDao = new GCRbUsr(<MysqlCfg>{
            database: database_rb,
            host: $env.gameMysqlHost
        });

        let new_gRbPerDao = new GRbPer(<MysqlCfg>{
            database: database_gs,
            host: $env.gameMysqlHost
        });

        let new_gUsrDao = new GUsr(<MysqlCfg>{
            database: database_gs,
            host: $env.gameMysqlHost
        });

        for (let uid of uidList) {
            let rb_per: IGRbPer = await new_gRbPerDao.select({uid});
            let intgr = rand();
            if (!rb_per) {
                rb_per = {
                    uid,
                    ecycId,
                    intgr,
                    tdyBattleCnt: 0,
                    tdyBuyCnt: 0,
                    tdyTopBattleCnt: 0,
                    tdyBuyTopCnt: 0,
                    cTime: DATE.getDate(),
                    uTime: DATE.getDate(),
                    fTime: DATE.getDate(),
                }
                await new_gRbPerDao.create(rb_per);
            } else {
                let updateData: IGRbPer = {
                    ecycId,
                    intgr,
                    fTime: DATE.getDate(),
                }
                await new_gRbPerDao.update(updateData, {uid});
            }

            let crb: IGCRbUsr = await new_gCRbUsrDao.select({uid});
            if (!crb) {
                let usr: IGUsr = await new_gUsrDao.select({id: uid});
                crb = {
                    uid,
                    name: usr.name,
                    roomId: parseInt(args.roomId) || 1,
                    gsIdx: args.hhw_gsIdx,
                    lvl: usr.lvl,
                    fmlId: 0,
                    rank: 0,
                    intgr,
                    totIntgr: intgr,
                    lastIntgr: intgr,
                    fTime: DATE.addMillisecond(DATE.getDate(), NUM.rand(0, 1000 * 60 * 5)),//相差5分钟
                }
                await new_gCRbUsrDao.create(crb);
            } else {
                let updateData: IGCRbUsr = {
                    roomId: parseInt(args.roomId) || 1,
                    intgr,
                    lastIntgr: intgr,
                    totIntgr: crb.totIntgr + crb.intgr,
                    fTime: DATE.addMillisecond(DATE.getDate(), NUM.rand(0, 1000 * 60 * 5)),//相差5分钟
                }
                await new_gCRbUsrDao.update(updateData, {uid});
            }
        }
        return cb();
    }

    export async function addRobotToPeak(req: any, args: any, cb: (err?: string | Error, rst?: any) => void) {
        if (!args.hhw_team || !args.hhw_gsIdx) {
            return cb('参数有误');
        }

        if (!args.batchId || !args.roomId) {
            return cb('活动参数有误');
        }

        let [err, uidList] = await addRobot(req, args);
        if (err) {
            return cb(err);
        }

        const database_peak = `zw-${args.hhw_team}-peak`;
        const database_gs = `zw-${args.hhw_team}-gs-${STR.fill(args.hhw_gsIdx)}`;
        let new_gCPeakUsrDao = new GCPeakUsr(<MysqlCfg>{
            database: database_peak,
            host: $env.gameMysqlHost
        });

        let new_gUsrDao = new GUsr(<MysqlCfg>{
            database: database_gs,
            host: $env.gameMysqlHost
        });

        let new_gFmlDao = new GFml(<MysqlCfg>{
            database: database_gs,
            host: $env.gameMysqlHost
        });

        let new_gFmlMbDao = new GFmlMb(<MysqlCfg>{
            database: database_gs,
            host: $env.gameMysqlHost
        });


        for (let uid of uidList) {
            let usr: IGUsr = await new_gUsrDao.select({id: uid});
            let peakUsr: IGCPeakUsr = await new_gCPeakUsrDao.select({uid: usr.id, batchId: args.batchId});
            if (peakUsr) continue;

            peakUsr = {
                uid: usr.id,
                name: usr.name,
                ico: usr.ico,
                lvl: usr.lvl,
                lvlExp: usr.lvlExp,
                gsIdx: getGsIdx(uid),
                batchId: args.batchId,
                roomId: args.roomId,
                planDetailMap_bak: {},
                planDetailMap: getRobotAttr(usr),
                usePlan: 1,
                planSet: [1, 1, 1, 1, 1],//默认五场都是方案1
                cTime: DATE.getDate(),
                power: calPeakPower(usr.attr)
            }
            // 商会名
            let fmlMb: IGFmlMb = await new_gFmlMbDao.select({uid});
            if (fmlMb && fmlMb.fid) {
                let fml: IGFml = await new_gFmlDao.select({id: fmlMb.fid});
                if (fml) {
                    peakUsr.fmlId = fmlMb.fid;
                    peakUsr.fmlName = fml.name;
                }
            }
            await new_gCPeakUsrDao.create(peakUsr);
        }
        return cb();
    }

    /**
     * 计算玩家巅峰赛实力
     * @param attr
     */
    function calPeakPower(attr: any): number {
        let roleAttr: IRoleAttr = attrMap2RoleAttr(attr);
        calDisplayAttr(roleAttr);
        //生命/5+攻击/1+防御/1+魔力/0.5
        let power = roleAttr.hp / 5 + roleAttr.atk + roleAttr.def + roleAttr.magic / 0.5;
        return power;
    }

    function getRobotAttr(usr: IGUsr) {
        return {
            "1": {
                "usr": {
                    "id": usr.id,
                    "name": usr.name,
                    "ico": usr.ico,
                    "lvl": 116,
                    "titleId": 6201,
                    "rufMsId": 167298681306585,
                    "wingId": 6106,
                    "sacraId": 6014,
                    "gemSchemeNo": 1,
                    "faceId": 130002,
                    "attr": {
                        "1": 184736,
                        "2": 69597,
                        "3": 54161,
                        "4": 14166,
                        "11": 4400,
                        "12": 4400,
                        "13": 4400,
                        "21": 1800,
                        "22": 8589,
                        "23": 1750,
                        "24": 6618,
                        "25": 1975,
                        "41": 1493,
                        "42": 14016,
                        "43": 1541,
                        "44": 2639,
                        "45": 1601,
                        "61": 4297,
                        "62": 3240,
                        "66": 589,
                        "67": 408,
                        "68": 870,
                        "101": 5928,
                        "102": 4500,
                        "402": 1000350
                    },
                    "attrRecalTime": null
                },
                "ms": 1683295554987,
                "wing": {
                    "uid": usr.id,
                    "tmpId": 6106,
                    "lvl": 10,
                    "lvlExp": 0,
                    "grade": 6,
                    "wingList": [6101, 6102, 6106, 6105, 6103, 6104],
                    "attr": {},
                    "uTime": "2023-05-05T14:05:05.000Z",
                    "cTime": "2023-05-05T14:05:05.000Z",
                    "enhanceLvl": 0,
                    "enhanceAttr": {}
                },
                "ruf": {
                    "tmpId": 5017,
                    "lvl": 45,
                    "grade": 15,
                    "spAttr": {"21": 450, "23": 225, "24": 900},
                    "fuseAttr": [],
                    "fuseCnt": 0
                },
                "equipList": [{
                    "uid": usr.id,
                    "msId": 167565831901186,
                    "tmpId": 10908,
                    "icoId": 90033,
                    "skinId": 0,
                    "lvl": 115,
                    "baseAttr": {"1": 12543, "2": 3446, "3": 2397, "4": 955, "22": 745, "42": 215},
                    "potLvl": 5,
                    "potExp": 17,
                    "potEftTime": "2023-01-25T04:29:05.637Z",
                    "isEquip": 1,
                    "isNew": 0,
                    "uTime": "2023-02-17T04:09:17.251Z",
                    "cTime": "2023-02-06T04:38:39.011Z",
                    "plan": 1,
                    "mutil": 0
                }, {
                    "uid": usr.id,
                    "msId": 167668474579446,
                    "tmpId": 10108,
                    "icoId": 10419,
                    "skinId": 10014,
                    "lvl": 115,
                    "baseAttr": {"1": 12489, "2": 3424, "3": 2388, "4": 957, "25": 625, "68": 463},
                    "potLvl": 10,
                    "potExp": 0,
                    "potEftTime": "2023-02-23T09:22:02.522Z",
                    "isEquip": 1,
                    "isNew": 0,
                    "uTime": "2023-02-18T07:43:57.988Z",
                    "cTime": "2023-02-18T01:45:45.794Z",
                    "plan": 1,
                    "mutil": 0
                }, {
                    "uid": usr.id,
                    "msId": 167688355876310,
                    "tmpId": 11208,
                    "icoId": 120040,
                    "skinId": 0,
                    "lvl": 114,
                    "baseAttr": {"1": 12427, "2": 3420, "3": 2362, "4": 942, "22": 561, "43": 241},
                    "potLvl": 1,
                    "potExp": 5,
                    "potEftTime": "2023-01-01T09:38:33.139Z",
                    "isEquip": 1,
                    "isNew": 0,
                    "uTime": "2023-02-20T09:08:30.246Z",
                    "cTime": "2023-02-20T08:59:18.763Z",
                    "plan": 1,
                    "mutil": 0
                }, {
                    "uid": usr.id,
                    "msId": 167711989707346,
                    "tmpId": 10308,
                    "icoId": 30034,
                    "skinId": 30050,
                    "lvl": 115,
                    "baseAttr": {"1": 12537, "2": 3447, "3": 2395, "4": 957, "22": 670, "67": 408},
                    "potLvl": 0,
                    "potExp": 3,
                    "potEftTime": "2022-12-25T09:42:23.280Z",
                    "isEquip": 1,
                    "isNew": 0,
                    "uTime": "2023-02-23T03:13:27.464Z",
                    "cTime": "2023-02-23T02:38:17.073Z",
                    "plan": 1,
                    "mutil": 0
                }, {
                    "uid": usr.id,
                    "msId": 167720101801542,
                    "tmpId": 10208,
                    "icoId": 20009,
                    "skinId": 20014,
                    "lvl": 115,
                    "baseAttr": {"1": 12565, "2": 3437, "3": 2392, "4": 947, "22": 610, "45": 201},
                    "potLvl": 4,
                    "potExp": 0,
                    "potEftTime": "2022-12-25T07:12:16.244Z",
                    "isEquip": 1,
                    "isNew": 0,
                    "uTime": "2023-02-24T01:16:03.543Z",
                    "cTime": "2023-02-24T01:10:18.015Z",
                    "plan": 1,
                    "mutil": 0
                }, {
                    "uid": usr.id,
                    "msId": 167720263968065,
                    "tmpId": 10608,
                    "icoId": 60034,
                    "skinId": 0,
                    "lvl": 115,
                    "baseAttr": {"1": 12478, "2": 3444, "3": 2396, "4": 951, "22": 595, "62": 342},
                    "potLvl": 4,
                    "potExp": 1,
                    "potEftTime": "2022-12-28T10:22:21.918Z",
                    "isEquip": 1,
                    "isNew": 0,
                    "uTime": "2023-02-24T01:49:33.557Z",
                    "cTime": "2023-02-24T01:37:19.680Z",
                    "plan": 1,
                    "mutil": 0
                }, {
                    "uid": usr.id,
                    "msId": 167721181350531,
                    "tmpId": 10508,
                    "icoId": 50034,
                    "skinId": 0,
                    "lvl": 115,
                    "baseAttr": {"1": 12484, "2": 3452, "3": 2391, "4": 956, "22": 700, "68": 407},
                    "potLvl": 20,
                    "potExp": 0,
                    "potEftTime": "2024-07-24T09:14:17.518Z",
                    "isEquip": 1,
                    "isNew": 0,
                    "uTime": "2024-07-24T06:44:17.518Z",
                    "cTime": "2023-02-24T04:10:13.505Z",
                    "plan": 1,
                    "mutil": 0
                }, {
                    "uid": usr.id,
                    "msId": 167732000593443,
                    "tmpId": 10808,
                    "icoId": 80040,
                    "skinId": 0,
                    "lvl": 115,
                    "baseAttr": {"1": 12540, "2": 3434, "3": 2390, "4": 955, "22": 717, "42": 196},
                    "potLvl": 0,
                    "potExp": 0,
                    "potEftTime": null,
                    "isEquip": 1,
                    "isNew": 0,
                    "uTime": "2023-02-25T10:14:18.772Z",
                    "cTime": "2023-02-25T10:13:25.934Z",
                    "plan": 1,
                    "mutil": 0
                }, {
                    "uid": usr.id,
                    "msId": 167732479315553,
                    "tmpId": 11108,
                    "icoId": 110035,
                    "skinId": 0,
                    "lvl": 115,
                    "baseAttr": {"1": 12496, "2": 3436, "3": 2394, "4": 954, "22": 734, "66": 325},
                    "potLvl": 20,
                    "potExp": 0,
                    "potEftTime": "2023-02-27T04:21:05.243Z",
                    "isEquip": 1,
                    "isNew": 0,
                    "uTime": "2023-02-26T08:21:06.459Z",
                    "cTime": "2023-02-25T11:33:13.155Z",
                    "plan": 1,
                    "mutil": 0
                }, {
                    "uid": usr.id,
                    "msId": 167732573931980,
                    "tmpId": 10408,
                    "icoId": 40036,
                    "skinId": 0,
                    "lvl": 115,
                    "baseAttr": {"1": 12565, "2": 3443, "3": 2395, "4": 954, "22": 707, "41": 193},
                    "potLvl": 0,
                    "potExp": 19,
                    "potEftTime": "2023-01-15T15:49:17.151Z",
                    "isEquip": 1,
                    "isNew": 0,
                    "uTime": "2023-02-25T11:51:34.674Z",
                    "cTime": "2023-02-25T11:48:59.319Z",
                    "plan": 1,
                    "mutil": 0
                }, {
                    "uid": usr.id,
                    "msId": 167732613937483,
                    "tmpId": 11008,
                    "icoId": 100033,
                    "skinId": 0,
                    "lvl": 114,
                    "baseAttr": {"1": 12381, "2": 3394, "3": 2361, "4": 944, "22": 563, "42": 237},
                    "potLvl": 0,
                    "potExp": 3,
                    "potEftTime": "2023-01-25T04:29:28.202Z",
                    "isEquip": 1,
                    "isNew": 0,
                    "uTime": "2023-02-25T12:00:49.426Z",
                    "cTime": "2023-02-25T11:55:39.374Z",
                    "plan": 1,
                    "mutil": 0
                }, {
                    "uid": usr.id,
                    "msId": 167740321227873,
                    "tmpId": 10708,
                    "icoId": 70036,
                    "skinId": 70007,
                    "lvl": 115,
                    "baseAttr": {"1": 12571, "2": 3443, "3": 2385, "4": 950, "22": 637, "66": 264},
                    "potLvl": 2,
                    "potExp": 5,
                    "potEftTime": "2023-02-04T13:34:07.976Z",
                    "isEquip": 1,
                    "isNew": 0,
                    "uTime": "2023-02-26T09:21:39.368Z",
                    "cTime": "2023-02-26T09:20:12.278Z",
                    "plan": 1,
                    "mutil": 0
                }],
                "equipBase": {
                    "uid": usr.id,
                    "curPlan": 1,
                    "planMap": {},
                    "skinMap": {"1": 10014, "2": 20014, "3": 30050, "7": 70007},
                    "potMap": {
                        "1": {"lvl": 10, "expc": 0, "eftTime": "2023-02-23T09:22:02.522Z"},
                        "2": {"lvl": 4, "expc": 0, "eftTime": "2022-12-25T07:12:16.244Z"},
                        "3": {"lvl": 0, "expc": 3, "eftTime": "2022-12-25T09:42:23.280Z"},
                        "4": {"lvl": 0, "expc": 19, "eftTime": "2023-01-15T15:49:17.151Z"},
                        "5": {"lvl": 20, "expc": 0, "eftTime": "2024-07-24T09:14:17.518Z"},
                        "6": {"lvl": 4, "expc": 1, "eftTime": "2022-12-28T10:22:21.918Z"},
                        "7": {"lvl": 2, "expc": 5, "eftTime": "2023-02-04T13:34:07.976Z"},
                        "9": {"lvl": 5, "expc": 17, "eftTime": "2023-01-25T04:29:05.637Z"},
                        "10": {"lvl": 0, "expc": 3, "eftTime": "2023-01-25T04:29:28.202Z"},
                        "11": {"lvl": 20, "expc": 0, "eftTime": "2023-02-27T04:21:05.243Z"},
                        "12": {"lvl": 1, "expc": 5, "eftTime": "2023-01-01T09:38:33.139Z"}
                    },
                    "uTime": "2023-05-04T08:12:50.834Z",
                    "cTime": "2023-04-28T07:49:37.350Z"
                },
                "gem": {
                    "uid": usr.id,
                    "sNo": 1,
                    "name": "反击躲避抵抗",
                    "paperId": 1128,
                    "inlayList": [167527412099651, 167553312757348, 167604857689265, 167298747859033, 167161144335374, 167430076549529, 167462482447508, 167682715317596, 167239567700300, 167587716418941, 167743776240407, 167622043029778],
                    "gemIdList": [5554, 5563, 5562, 5551, 5555, 5556, 5555, 5561, 5553, 5554, 5556, 5562],
                    "attr": {"21": 300, "22": 300, "23": 375, "24": 2625, "25": 300, "42": 9360},
                    "uTime": "2023-02-26T18:56:07.546Z",
                    "cTime": "2022-12-11T14:50:25.865Z"
                },
                "godImprintList": [],
                "sacra": {
                    "uid": usr.id,
                    "tmpId": 6014,
                    "lvl": 6,
                    "attr": {"402": 1000350},
                    "uTime": "2023-02-25T16:09:03.371Z",
                    "cTime": "2022-12-16T17:52:54.429Z"
                },
                "runeBase": {
                    "bookAttr": {
                        "11": 4400,
                        "12": 4400,
                        "13": 4400,
                        "21": 1000,
                        "22": 1000,
                        "23": 1000,
                        "24": 1000,
                        "25": 1000,
                        "41": 1300,
                        "42": 1300,
                        "43": 1300,
                        "44": 1300,
                        "45": 1300,
                        "61": 1500,
                        "62": 1950
                    },
                    "boxAttr": {
                        "2": 15697,
                        "3": 17386,
                        "4": 1048,
                        "24": 1243,
                        "42": 2708,
                        "44": 1239,
                        "61": 2797,
                        "62": 848,
                        "101": 1428
                    },
                    "elvesAttr": {},
                    "unlockManuals": [1, 2, 3, 4, 5],
                    "curManual": 5
                },
                "orignalAttr": {
                    "1": 184736,
                    "2": 69597,
                    "3": 54161,
                    "4": 14166,
                    "11": 4400,
                    "12": 4400,
                    "13": 4400,
                    "21": 1800,
                    "22": 8589,
                    "23": 1750,
                    "24": 6618,
                    "25": 1975,
                    "41": 1493,
                    "42": 14016,
                    "43": 1541,
                    "44": 2639,
                    "45": 1601,
                    "61": 4297,
                    "62": 3240,
                    "66": 589,
                    "67": 408,
                    "68": 870,
                    "101": 5928,
                    "102": 4500,
                    "402": 1000350
                },
                "attr": {
                    "1": 184736,
                    "2": 69597,
                    "3": 54161,
                    "4": 14166,
                    "11": 4400,
                    "12": 4400,
                    "13": 4400,
                    "21": 1800,
                    "22": 8589,
                    "23": 1750,
                    "24": 6618,
                    "25": 1975,
                    "41": 1493,
                    "42": 14016,
                    "43": 1541,
                    "44": 2639,
                    "45": 1601,
                    "61": 4297,
                    "62": 3240,
                    "66": 589,
                    "67": 408,
                    "68": 870,
                    "101": 5928,
                    "102": 4500,
                    "402": 1000350,
                    "-1": 266019,
                    "-2": 100219,
                    "-3": 77991,
                    "-4": 14166
                },
                "arenaIntegral": 1200
            },
            "2": {
                "usr": {
                    "id": usr.id,
                    "name": usr.name,
                    "ico": usr.ico,
                    "lvl": 116,
                    "titleId": 6201,
                    "rufMsId": 167298681306585,
                    "wingId": 6106,
                    "sacraId": 6014,
                    "gemSchemeNo": 1,
                    "faceId": 130002,
                    "attr": {
                        "1": 184736,
                        "2": 69597,
                        "3": 54161,
                        "4": 14166,
                        "11": 4400,
                        "12": 4400,
                        "13": 4400,
                        "21": 1800,
                        "22": 8589,
                        "23": 1750,
                        "24": 6618,
                        "25": 1975,
                        "41": 1493,
                        "42": 14016,
                        "43": 1541,
                        "44": 2639,
                        "45": 1601,
                        "61": 4297,
                        "62": 3240,
                        "66": 589,
                        "67": 408,
                        "68": 870,
                        "101": 5928,
                        "102": 4500,
                        "402": 1000350
                    },
                    "attrRecalTime": null
                },
                "ms": 1683295554987,
                "wing": {
                    "uid": usr.id,
                    "tmpId": 6106,
                    "lvl": 10,
                    "lvlExp": 0,
                    "grade": 6,
                    "wingList": [6101, 6102, 6106, 6105, 6103, 6104],
                    "attr": {},
                    "uTime": "2023-05-05T14:05:05.000Z",
                    "cTime": "2023-05-05T14:05:05.000Z",
                    "enhanceLvl": 0,
                    "enhanceAttr": {}
                },
                "ruf": {
                    "tmpId": 5017,
                    "lvl": 45,
                    "grade": 15,
                    "spAttr": {"21": 450, "23": 225, "24": 900},
                    "fuseAttr": [],
                    "fuseCnt": 0
                },
                "equipList": [{
                    "uid": usr.id,
                    "msId": 167565831901186,
                    "tmpId": 10908,
                    "icoId": 90033,
                    "skinId": 0,
                    "lvl": 115,
                    "baseAttr": {"1": 12543, "2": 3446, "3": 2397, "4": 955, "22": 745, "42": 215},
                    "potLvl": 5,
                    "potExp": 17,
                    "potEftTime": "2023-01-25T04:29:05.637Z",
                    "isEquip": 1,
                    "isNew": 0,
                    "uTime": "2023-02-17T04:09:17.251Z",
                    "cTime": "2023-02-06T04:38:39.011Z",
                    "plan": 1,
                    "mutil": 0
                }, {
                    "uid": usr.id,
                    "msId": 167668474579446,
                    "tmpId": 10108,
                    "icoId": 10419,
                    "skinId": 10014,
                    "lvl": 115,
                    "baseAttr": {"1": 12489, "2": 3424, "3": 2388, "4": 957, "25": 625, "68": 463},
                    "potLvl": 10,
                    "potExp": 0,
                    "potEftTime": "2023-02-23T09:22:02.522Z",
                    "isEquip": 1,
                    "isNew": 0,
                    "uTime": "2023-02-18T07:43:57.988Z",
                    "cTime": "2023-02-18T01:45:45.794Z",
                    "plan": 1,
                    "mutil": 0
                }, {
                    "uid": usr.id,
                    "msId": 167688355876310,
                    "tmpId": 11208,
                    "icoId": 120040,
                    "skinId": 0,
                    "lvl": 114,
                    "baseAttr": {"1": 12427, "2": 3420, "3": 2362, "4": 942, "22": 561, "43": 241},
                    "potLvl": 1,
                    "potExp": 5,
                    "potEftTime": "2023-01-01T09:38:33.139Z",
                    "isEquip": 1,
                    "isNew": 0,
                    "uTime": "2023-02-20T09:08:30.246Z",
                    "cTime": "2023-02-20T08:59:18.763Z",
                    "plan": 1,
                    "mutil": 0
                }, {
                    "uid": usr.id,
                    "msId": 167711989707346,
                    "tmpId": 10308,
                    "icoId": 30034,
                    "skinId": 30050,
                    "lvl": 115,
                    "baseAttr": {"1": 12537, "2": 3447, "3": 2395, "4": 957, "22": 670, "67": 408},
                    "potLvl": 0,
                    "potExp": 3,
                    "potEftTime": "2022-12-25T09:42:23.280Z",
                    "isEquip": 1,
                    "isNew": 0,
                    "uTime": "2023-02-23T03:13:27.464Z",
                    "cTime": "2023-02-23T02:38:17.073Z",
                    "plan": 1,
                    "mutil": 0
                }, {
                    "uid": usr.id,
                    "msId": 167720101801542,
                    "tmpId": 10208,
                    "icoId": 20009,
                    "skinId": 20014,
                    "lvl": 115,
                    "baseAttr": {"1": 12565, "2": 3437, "3": 2392, "4": 947, "22": 610, "45": 201},
                    "potLvl": 4,
                    "potExp": 0,
                    "potEftTime": "2022-12-25T07:12:16.244Z",
                    "isEquip": 1,
                    "isNew": 0,
                    "uTime": "2023-02-24T01:16:03.543Z",
                    "cTime": "2023-02-24T01:10:18.015Z",
                    "plan": 1,
                    "mutil": 0
                }, {
                    "uid": usr.id,
                    "msId": 167720263968065,
                    "tmpId": 10608,
                    "icoId": 60034,
                    "skinId": 0,
                    "lvl": 115,
                    "baseAttr": {"1": 12478, "2": 3444, "3": 2396, "4": 951, "22": 595, "62": 342},
                    "potLvl": 4,
                    "potExp": 1,
                    "potEftTime": "2022-12-28T10:22:21.918Z",
                    "isEquip": 1,
                    "isNew": 0,
                    "uTime": "2023-02-24T01:49:33.557Z",
                    "cTime": "2023-02-24T01:37:19.680Z",
                    "plan": 1,
                    "mutil": 0
                }, {
                    "uid": usr.id,
                    "msId": 167721181350531,
                    "tmpId": 10508,
                    "icoId": 50034,
                    "skinId": 0,
                    "lvl": 115,
                    "baseAttr": {"1": 12484, "2": 3452, "3": 2391, "4": 956, "22": 700, "68": 407},
                    "potLvl": 20,
                    "potExp": 0,
                    "potEftTime": "2024-07-24T09:14:17.518Z",
                    "isEquip": 1,
                    "isNew": 0,
                    "uTime": "2024-07-24T06:44:17.518Z",
                    "cTime": "2023-02-24T04:10:13.505Z",
                    "plan": 1,
                    "mutil": 0
                }, {
                    "uid": usr.id,
                    "msId": 167732000593443,
                    "tmpId": 10808,
                    "icoId": 80040,
                    "skinId": 0,
                    "lvl": 115,
                    "baseAttr": {"1": 12540, "2": 3434, "3": 2390, "4": 955, "22": 717, "42": 196},
                    "potLvl": 0,
                    "potExp": 0,
                    "potEftTime": null,
                    "isEquip": 1,
                    "isNew": 0,
                    "uTime": "2023-02-25T10:14:18.772Z",
                    "cTime": "2023-02-25T10:13:25.934Z",
                    "plan": 1,
                    "mutil": 0
                }, {
                    "uid": usr.id,
                    "msId": 167732479315553,
                    "tmpId": 11108,
                    "icoId": 110035,
                    "skinId": 0,
                    "lvl": 115,
                    "baseAttr": {"1": 12496, "2": 3436, "3": 2394, "4": 954, "22": 734, "66": 325},
                    "potLvl": 20,
                    "potExp": 0,
                    "potEftTime": "2023-02-27T04:21:05.243Z",
                    "isEquip": 1,
                    "isNew": 0,
                    "uTime": "2023-02-26T08:21:06.459Z",
                    "cTime": "2023-02-25T11:33:13.155Z",
                    "plan": 1,
                    "mutil": 0
                }, {
                    "uid": usr.id,
                    "msId": 167732573931980,
                    "tmpId": 10408,
                    "icoId": 40036,
                    "skinId": 0,
                    "lvl": 115,
                    "baseAttr": {"1": 12565, "2": 3443, "3": 2395, "4": 954, "22": 707, "41": 193},
                    "potLvl": 0,
                    "potExp": 19,
                    "potEftTime": "2023-01-15T15:49:17.151Z",
                    "isEquip": 1,
                    "isNew": 0,
                    "uTime": "2023-02-25T11:51:34.674Z",
                    "cTime": "2023-02-25T11:48:59.319Z",
                    "plan": 1,
                    "mutil": 0
                }, {
                    "uid": usr.id,
                    "msId": 167732613937483,
                    "tmpId": 11008,
                    "icoId": 100033,
                    "skinId": 0,
                    "lvl": 114,
                    "baseAttr": {"1": 12381, "2": 3394, "3": 2361, "4": 944, "22": 563, "42": 237},
                    "potLvl": 0,
                    "potExp": 3,
                    "potEftTime": "2023-01-25T04:29:28.202Z",
                    "isEquip": 1,
                    "isNew": 0,
                    "uTime": "2023-02-25T12:00:49.426Z",
                    "cTime": "2023-02-25T11:55:39.374Z",
                    "plan": 1,
                    "mutil": 0
                }, {
                    "uid": usr.id,
                    "msId": 167740321227873,
                    "tmpId": 10708,
                    "icoId": 70036,
                    "skinId": 70007,
                    "lvl": 115,
                    "baseAttr": {"1": 12571, "2": 3443, "3": 2385, "4": 950, "22": 637, "66": 264},
                    "potLvl": 2,
                    "potExp": 5,
                    "potEftTime": "2023-02-04T13:34:07.976Z",
                    "isEquip": 1,
                    "isNew": 0,
                    "uTime": "2023-02-26T09:21:39.368Z",
                    "cTime": "2023-02-26T09:20:12.278Z",
                    "plan": 1,
                    "mutil": 0
                }],
                "equipBase": {
                    "uid": usr.id,
                    "curPlan": 1,
                    "planMap": {},
                    "skinMap": {"1": 10014, "2": 20014, "3": 30050, "7": 70007},
                    "potMap": {
                        "1": {"lvl": 10, "expc": 0, "eftTime": "2023-02-23T09:22:02.522Z"},
                        "2": {"lvl": 4, "expc": 0, "eftTime": "2022-12-25T07:12:16.244Z"},
                        "3": {"lvl": 0, "expc": 3, "eftTime": "2022-12-25T09:42:23.280Z"},
                        "4": {"lvl": 0, "expc": 19, "eftTime": "2023-01-15T15:49:17.151Z"},
                        "5": {"lvl": 20, "expc": 0, "eftTime": "2024-07-24T09:14:17.518Z"},
                        "6": {"lvl": 4, "expc": 1, "eftTime": "2022-12-28T10:22:21.918Z"},
                        "7": {"lvl": 2, "expc": 5, "eftTime": "2023-02-04T13:34:07.976Z"},
                        "9": {"lvl": 5, "expc": 17, "eftTime": "2023-01-25T04:29:05.637Z"},
                        "10": {"lvl": 0, "expc": 3, "eftTime": "2023-01-25T04:29:28.202Z"},
                        "11": {"lvl": 20, "expc": 0, "eftTime": "2023-02-27T04:21:05.243Z"},
                        "12": {"lvl": 1, "expc": 5, "eftTime": "2023-01-01T09:38:33.139Z"}
                    },
                    "uTime": "2023-05-04T08:12:50.834Z",
                    "cTime": "2023-04-28T07:49:37.350Z"
                },
                "gem": {
                    "uid": usr.id,
                    "sNo": 1,
                    "name": "反击躲避抵抗",
                    "paperId": 1128,
                    "inlayList": [167527412099651, 167553312757348, 167604857689265, 167298747859033, 167161144335374, 167430076549529, 167462482447508, 167682715317596, 167239567700300, 167587716418941, 167743776240407, 167622043029778],
                    "gemIdList": [5554, 5563, 5562, 5551, 5555, 5556, 5555, 5561, 5553, 5554, 5556, 5562],
                    "attr": {"21": 300, "22": 300, "23": 375, "24": 2625, "25": 300, "42": 9360},
                    "uTime": "2023-02-26T18:56:07.546Z",
                    "cTime": "2022-12-11T14:50:25.865Z"
                },
                "godImprintList": [],
                "sacra": {
                    "uid": usr.id,
                    "tmpId": 6014,
                    "lvl": 6,
                    "attr": {"402": 1000350},
                    "uTime": "2023-02-25T16:09:03.371Z",
                    "cTime": "2022-12-16T17:52:54.429Z"
                },
                "runeBase": {
                    "bookAttr": {
                        "11": 4400,
                        "12": 4400,
                        "13": 4400,
                        "21": 1000,
                        "22": 1000,
                        "23": 1000,
                        "24": 1000,
                        "25": 1000,
                        "41": 1300,
                        "42": 1300,
                        "43": 1300,
                        "44": 1300,
                        "45": 1300,
                        "61": 1500,
                        "62": 1950
                    },
                    "boxAttr": {
                        "2": 15697,
                        "3": 17386,
                        "4": 1048,
                        "24": 1243,
                        "42": 2708,
                        "44": 1239,
                        "61": 2797,
                        "62": 848,
                        "101": 1428
                    },
                    "elvesAttr": {},
                    "unlockManuals": [1, 2, 3, 4, 5],
                    "curManual": 5
                },
                "orignalAttr": {
                    "1": 184736,
                    "2": 69597,
                    "3": 54161,
                    "4": 14166,
                    "11": 4400,
                    "12": 4400,
                    "13": 4400,
                    "21": 1800,
                    "22": 8589,
                    "23": 1750,
                    "24": 6618,
                    "25": 1975,
                    "41": 1493,
                    "42": 14016,
                    "43": 1541,
                    "44": 2639,
                    "45": 1601,
                    "61": 4297,
                    "62": 3240,
                    "66": 589,
                    "67": 408,
                    "68": 870,
                    "101": 5928,
                    "102": 4500,
                    "402": 1000350
                },
                "attr": {
                    "1": 184736,
                    "2": 69597,
                    "3": 54161,
                    "4": 14166,
                    "11": 4400,
                    "12": 4400,
                    "13": 4400,
                    "21": 1800,
                    "22": 8589,
                    "23": 1750,
                    "24": 6618,
                    "25": 1975,
                    "41": 1493,
                    "42": 14016,
                    "43": 1541,
                    "44": 2639,
                    "45": 1601,
                    "61": 4297,
                    "62": 3240,
                    "66": 589,
                    "67": 408,
                    "68": 870,
                    "101": 5928,
                    "102": 4500,
                    "402": 1000350,
                    "-1": 266019,
                    "-2": 100219,
                    "-3": 77991,
                    "-4": 14166
                },
                "arenaIntegral": 1200
            },
            "3": {
                "usr": {
                    "id": usr.id,
                    "name": usr.name,
                    "ico": usr.ico,
                    "lvl": 116,
                    "titleId": 6201,
                    "rufMsId": 167298681306585,
                    "wingId": 6106,
                    "sacraId": 6014,
                    "gemSchemeNo": 1,
                    "faceId": 130002,
                    "attr": {
                        "1": 184736,
                        "2": 69597,
                        "3": 54161,
                        "4": 14166,
                        "11": 4400,
                        "12": 4400,
                        "13": 4400,
                        "21": 1800,
                        "22": 8589,
                        "23": 1750,
                        "24": 6618,
                        "25": 1975,
                        "41": 1493,
                        "42": 14016,
                        "43": 1541,
                        "44": 2639,
                        "45": 1601,
                        "61": 4297,
                        "62": 3240,
                        "66": 589,
                        "67": 408,
                        "68": 870,
                        "101": 5928,
                        "102": 4500,
                        "402": 1000350
                    },
                    "attrRecalTime": null
                },
                "ms": 1683295554987,
                "wing": {
                    "uid": usr.id,
                    "tmpId": 6106,
                    "lvl": 10,
                    "lvlExp": 0,
                    "grade": 6,
                    "wingList": [6101, 6102, 6106, 6105, 6103, 6104],
                    "attr": {},
                    "uTime": "2023-05-05T14:05:05.000Z",
                    "cTime": "2023-05-05T14:05:05.000Z",
                    "enhanceLvl": 0,
                    "enhanceAttr": {}
                },
                "ruf": {
                    "tmpId": 5017,
                    "lvl": 45,
                    "grade": 15,
                    "spAttr": {"21": 450, "23": 225, "24": 900},
                    "fuseAttr": [],
                    "fuseCnt": 0
                },
                "equipList": [{
                    "uid": usr.id,
                    "msId": 167565831901186,
                    "tmpId": 10908,
                    "icoId": 90033,
                    "skinId": 0,
                    "lvl": 115,
                    "baseAttr": {"1": 12543, "2": 3446, "3": 2397, "4": 955, "22": 745, "42": 215},
                    "potLvl": 5,
                    "potExp": 17,
                    "potEftTime": "2023-01-25T04:29:05.637Z",
                    "isEquip": 1,
                    "isNew": 0,
                    "uTime": "2023-02-17T04:09:17.251Z",
                    "cTime": "2023-02-06T04:38:39.011Z",
                    "plan": 1,
                    "mutil": 0
                }, {
                    "uid": usr.id,
                    "msId": 167668474579446,
                    "tmpId": 10108,
                    "icoId": 10419,
                    "skinId": 10014,
                    "lvl": 115,
                    "baseAttr": {"1": 12489, "2": 3424, "3": 2388, "4": 957, "25": 625, "68": 463},
                    "potLvl": 10,
                    "potExp": 0,
                    "potEftTime": "2023-02-23T09:22:02.522Z",
                    "isEquip": 1,
                    "isNew": 0,
                    "uTime": "2023-02-18T07:43:57.988Z",
                    "cTime": "2023-02-18T01:45:45.794Z",
                    "plan": 1,
                    "mutil": 0
                }, {
                    "uid": usr.id,
                    "msId": 167688355876310,
                    "tmpId": 11208,
                    "icoId": 120040,
                    "skinId": 0,
                    "lvl": 114,
                    "baseAttr": {"1": 12427, "2": 3420, "3": 2362, "4": 942, "22": 561, "43": 241},
                    "potLvl": 1,
                    "potExp": 5,
                    "potEftTime": "2023-01-01T09:38:33.139Z",
                    "isEquip": 1,
                    "isNew": 0,
                    "uTime": "2023-02-20T09:08:30.246Z",
                    "cTime": "2023-02-20T08:59:18.763Z",
                    "plan": 1,
                    "mutil": 0
                }, {
                    "uid": usr.id,
                    "msId": 167711989707346,
                    "tmpId": 10308,
                    "icoId": 30034,
                    "skinId": 30050,
                    "lvl": 115,
                    "baseAttr": {"1": 12537, "2": 3447, "3": 2395, "4": 957, "22": 670, "67": 408},
                    "potLvl": 0,
                    "potExp": 3,
                    "potEftTime": "2022-12-25T09:42:23.280Z",
                    "isEquip": 1,
                    "isNew": 0,
                    "uTime": "2023-02-23T03:13:27.464Z",
                    "cTime": "2023-02-23T02:38:17.073Z",
                    "plan": 1,
                    "mutil": 0
                }, {
                    "uid": usr.id,
                    "msId": 167720101801542,
                    "tmpId": 10208,
                    "icoId": 20009,
                    "skinId": 20014,
                    "lvl": 115,
                    "baseAttr": {"1": 12565, "2": 3437, "3": 2392, "4": 947, "22": 610, "45": 201},
                    "potLvl": 4,
                    "potExp": 0,
                    "potEftTime": "2022-12-25T07:12:16.244Z",
                    "isEquip": 1,
                    "isNew": 0,
                    "uTime": "2023-02-24T01:16:03.543Z",
                    "cTime": "2023-02-24T01:10:18.015Z",
                    "plan": 1,
                    "mutil": 0
                }, {
                    "uid": usr.id,
                    "msId": 167720263968065,
                    "tmpId": 10608,
                    "icoId": 60034,
                    "skinId": 0,
                    "lvl": 115,
                    "baseAttr": {"1": 12478, "2": 3444, "3": 2396, "4": 951, "22": 595, "62": 342},
                    "potLvl": 4,
                    "potExp": 1,
                    "potEftTime": "2022-12-28T10:22:21.918Z",
                    "isEquip": 1,
                    "isNew": 0,
                    "uTime": "2023-02-24T01:49:33.557Z",
                    "cTime": "2023-02-24T01:37:19.680Z",
                    "plan": 1,
                    "mutil": 0
                }, {
                    "uid": usr.id,
                    "msId": 167721181350531,
                    "tmpId": 10508,
                    "icoId": 50034,
                    "skinId": 0,
                    "lvl": 115,
                    "baseAttr": {"1": 12484, "2": 3452, "3": 2391, "4": 956, "22": 700, "68": 407},
                    "potLvl": 20,
                    "potExp": 0,
                    "potEftTime": "2024-07-24T09:14:17.518Z",
                    "isEquip": 1,
                    "isNew": 0,
                    "uTime": "2024-07-24T06:44:17.518Z",
                    "cTime": "2023-02-24T04:10:13.505Z",
                    "plan": 1,
                    "mutil": 0
                }, {
                    "uid": usr.id,
                    "msId": 167732000593443,
                    "tmpId": 10808,
                    "icoId": 80040,
                    "skinId": 0,
                    "lvl": 115,
                    "baseAttr": {"1": 12540, "2": 3434, "3": 2390, "4": 955, "22": 717, "42": 196},
                    "potLvl": 0,
                    "potExp": 0,
                    "potEftTime": null,
                    "isEquip": 1,
                    "isNew": 0,
                    "uTime": "2023-02-25T10:14:18.772Z",
                    "cTime": "2023-02-25T10:13:25.934Z",
                    "plan": 1,
                    "mutil": 0
                }, {
                    "uid": usr.id,
                    "msId": 167732479315553,
                    "tmpId": 11108,
                    "icoId": 110035,
                    "skinId": 0,
                    "lvl": 115,
                    "baseAttr": {"1": 12496, "2": 3436, "3": 2394, "4": 954, "22": 734, "66": 325},
                    "potLvl": 20,
                    "potExp": 0,
                    "potEftTime": "2023-02-27T04:21:05.243Z",
                    "isEquip": 1,
                    "isNew": 0,
                    "uTime": "2023-02-26T08:21:06.459Z",
                    "cTime": "2023-02-25T11:33:13.155Z",
                    "plan": 1,
                    "mutil": 0
                }, {
                    "uid": usr.id,
                    "msId": 167732573931980,
                    "tmpId": 10408,
                    "icoId": 40036,
                    "skinId": 0,
                    "lvl": 115,
                    "baseAttr": {"1": 12565, "2": 3443, "3": 2395, "4": 954, "22": 707, "41": 193},
                    "potLvl": 0,
                    "potExp": 19,
                    "potEftTime": "2023-01-15T15:49:17.151Z",
                    "isEquip": 1,
                    "isNew": 0,
                    "uTime": "2023-02-25T11:51:34.674Z",
                    "cTime": "2023-02-25T11:48:59.319Z",
                    "plan": 1,
                    "mutil": 0
                }, {
                    "uid": usr.id,
                    "msId": 167732613937483,
                    "tmpId": 11008,
                    "icoId": 100033,
                    "skinId": 0,
                    "lvl": 114,
                    "baseAttr": {"1": 12381, "2": 3394, "3": 2361, "4": 944, "22": 563, "42": 237},
                    "potLvl": 0,
                    "potExp": 3,
                    "potEftTime": "2023-01-25T04:29:28.202Z",
                    "isEquip": 1,
                    "isNew": 0,
                    "uTime": "2023-02-25T12:00:49.426Z",
                    "cTime": "2023-02-25T11:55:39.374Z",
                    "plan": 1,
                    "mutil": 0
                }, {
                    "uid": usr.id,
                    "msId": 167740321227873,
                    "tmpId": 10708,
                    "icoId": 70036,
                    "skinId": 70007,
                    "lvl": 115,
                    "baseAttr": {"1": 12571, "2": 3443, "3": 2385, "4": 950, "22": 637, "66": 264},
                    "potLvl": 2,
                    "potExp": 5,
                    "potEftTime": "2023-02-04T13:34:07.976Z",
                    "isEquip": 1,
                    "isNew": 0,
                    "uTime": "2023-02-26T09:21:39.368Z",
                    "cTime": "2023-02-26T09:20:12.278Z",
                    "plan": 1,
                    "mutil": 0
                }],
                "equipBase": {
                    "uid": usr.id,
                    "curPlan": 1,
                    "planMap": {},
                    "skinMap": {"1": 10014, "2": 20014, "3": 30050, "7": 70007},
                    "potMap": {
                        "1": {"lvl": 10, "expc": 0, "eftTime": "2023-02-23T09:22:02.522Z"},
                        "2": {"lvl": 4, "expc": 0, "eftTime": "2022-12-25T07:12:16.244Z"},
                        "3": {"lvl": 0, "expc": 3, "eftTime": "2022-12-25T09:42:23.280Z"},
                        "4": {"lvl": 0, "expc": 19, "eftTime": "2023-01-15T15:49:17.151Z"},
                        "5": {"lvl": 20, "expc": 0, "eftTime": "2024-07-24T09:14:17.518Z"},
                        "6": {"lvl": 4, "expc": 1, "eftTime": "2022-12-28T10:22:21.918Z"},
                        "7": {"lvl": 2, "expc": 5, "eftTime": "2023-02-04T13:34:07.976Z"},
                        "9": {"lvl": 5, "expc": 17, "eftTime": "2023-01-25T04:29:05.637Z"},
                        "10": {"lvl": 0, "expc": 3, "eftTime": "2023-01-25T04:29:28.202Z"},
                        "11": {"lvl": 20, "expc": 0, "eftTime": "2023-02-27T04:21:05.243Z"},
                        "12": {"lvl": 1, "expc": 5, "eftTime": "2023-01-01T09:38:33.139Z"}
                    },
                    "uTime": "2023-05-04T08:12:50.834Z",
                    "cTime": "2023-04-28T07:49:37.350Z"
                },
                "gem": {
                    "uid": usr.id,
                    "sNo": 1,
                    "name": "反击躲避抵抗",
                    "paperId": 1128,
                    "inlayList": [167527412099651, 167553312757348, 167604857689265, 167298747859033, 167161144335374, 167430076549529, 167462482447508, 167682715317596, 167239567700300, 167587716418941, 167743776240407, 167622043029778],
                    "gemIdList": [5554, 5563, 5562, 5551, 5555, 5556, 5555, 5561, 5553, 5554, 5556, 5562],
                    "attr": {"21": 300, "22": 300, "23": 375, "24": 2625, "25": 300, "42": 9360},
                    "uTime": "2023-02-26T18:56:07.546Z",
                    "cTime": "2022-12-11T14:50:25.865Z"
                },
                "godImprintList": [],
                "sacra": {
                    "uid": usr.id,
                    "tmpId": 6014,
                    "lvl": 6,
                    "attr": {"402": 1000350},
                    "uTime": "2023-02-25T16:09:03.371Z",
                    "cTime": "2022-12-16T17:52:54.429Z"
                },
                "runeBase": {
                    "bookAttr": {
                        "11": 4400,
                        "12": 4400,
                        "13": 4400,
                        "21": 1000,
                        "22": 1000,
                        "23": 1000,
                        "24": 1000,
                        "25": 1000,
                        "41": 1300,
                        "42": 1300,
                        "43": 1300,
                        "44": 1300,
                        "45": 1300,
                        "61": 1500,
                        "62": 1950
                    },
                    "boxAttr": {
                        "2": 15697,
                        "3": 17386,
                        "4": 1048,
                        "24": 1243,
                        "42": 2708,
                        "44": 1239,
                        "61": 2797,
                        "62": 848,
                        "101": 1428
                    },
                    "elvesAttr": {},
                    "unlockManuals": [1, 2, 3, 4, 5],
                    "curManual": 5
                },
                "orignalAttr": {
                    "1": 184736,
                    "2": 69597,
                    "3": 54161,
                    "4": 14166,
                    "11": 4400,
                    "12": 4400,
                    "13": 4400,
                    "21": 1800,
                    "22": 8589,
                    "23": 1750,
                    "24": 6618,
                    "25": 1975,
                    "41": 1493,
                    "42": 14016,
                    "43": 1541,
                    "44": 2639,
                    "45": 1601,
                    "61": 4297,
                    "62": 3240,
                    "66": 589,
                    "67": 408,
                    "68": 870,
                    "101": 5928,
                    "102": 4500,
                    "402": 1000350
                },
                "attr": {
                    "1": 184736,
                    "2": 69597,
                    "3": 54161,
                    "4": 14166,
                    "11": 4400,
                    "12": 4400,
                    "13": 4400,
                    "21": 1800,
                    "22": 8589,
                    "23": 1750,
                    "24": 6618,
                    "25": 1975,
                    "41": 1493,
                    "42": 14016,
                    "43": 1541,
                    "44": 2639,
                    "45": 1601,
                    "61": 4297,
                    "62": 3240,
                    "66": 589,
                    "67": 408,
                    "68": 870,
                    "101": 5928,
                    "102": 4500,
                    "402": 1000350,
                    "-1": 266019,
                    "-2": 100219,
                    "-3": 77991,
                    "-4": 14166
                },
                "arenaIntegral": 1200
            },
        }
    }

    /**
     * 根据uid获取到分服下标
     * @param {number} uid
     * @returns {number}
     */
    function getGsIdx(uid: number): number {
        return uid % 100000;
    }

    /**
     * 数字下标的attr转换成IRoleAttr结构的对象
     * @param attr
     * @returns {G.IRoleAttr}
     */
    function attrMap2RoleAttr(attr: any): IRoleAttr {
        attr = attr || {};
        let roleAttr: IRoleAttr = {};

        roleAttr.hp = attr[CONST.roleAttr.hp] || 0;
        roleAttr.atk = attr[CONST.roleAttr.atk] || 0;
        roleAttr.def = attr[CONST.roleAttr.def] || 0;
        roleAttr.magic = attr[CONST.roleAttr.magic] || 0;

        roleAttr.baseHp = attr[CONST.roleAttr.baseHp] || 0;
        roleAttr.baseAtk = attr[CONST.roleAttr.baseAtk] || 0;
        roleAttr.baseDef = attr[CONST.roleAttr.baseDef] || 0;
        roleAttr.baseMagic = attr[CONST.roleAttr.baseMagic] || 0;

        roleAttr.hpPer = attr[CONST.roleAttr.hpPer] || 0;
        roleAttr.atkPer = attr[CONST.roleAttr.atkPer] || 0;
        roleAttr.defPer = attr[CONST.roleAttr.defPer] || 0;
        roleAttr.magicPer = attr[CONST.roleAttr.magicPer] || 0;

        roleAttr.stun = attr[CONST.roleAttr.stun] || 0;
        roleAttr.dodge = attr[CONST.roleAttr.dodge] || 0;
        roleAttr.batter = attr[CONST.roleAttr.batter] || 0;
        roleAttr.back = attr[CONST.roleAttr.back] || 0;
        roleAttr.crit = attr[CONST.roleAttr.crit] || 0;

        roleAttr.stunDef = attr[CONST.roleAttr.stunDef] || 0;
        roleAttr.dodgeDef = attr[CONST.roleAttr.dodgeDef] || 0;
        roleAttr.batterDef = attr[CONST.roleAttr.batterDef] || 0;
        roleAttr.backDef = attr[CONST.roleAttr.backDef] || 0;
        roleAttr.critDef = attr[CONST.roleAttr.critDef] || 0;

        roleAttr.suck = attr[CONST.roleAttr.suck] || 0;
        roleAttr.suckDef = attr[CONST.roleAttr.suckDef] || 0;
        roleAttr.critDmgInc = attr[CONST.roleAttr.critDmgInc] || 0;
        roleAttr.critDmgRed = attr[CONST.roleAttr.critDmgRed] || 0;
        roleAttr.recoverRed = attr[CONST.roleAttr.recoverRed] || 0;
        roleAttr.recover5 = attr[CONST.roleAttr.recover5] || 0;
        roleAttr.magicRed = attr[CONST.roleAttr.magicRed] || 0;
        roleAttr.magicInc = attr[CONST.roleAttr.magicInc] || 0;

        roleAttr.dmgInc = attr[CONST.roleAttr.dmgInc] || 0;
        roleAttr.dmgRed = attr[CONST.roleAttr.dmgRed] || 0;

        roleAttr.sp_hpMaxInc = attr[CONST.roleAttr.sp_hpMaxInc] || 0;
        roleAttr.sp_roundRecover = attr[CONST.roleAttr.sp_roundRecover] || 0;
        roleAttr.sp_magicInc = attr[CONST.roleAttr.sp_magicInc] || 0;
        roleAttr.sp_topInc = attr[CONST.roleAttr.sp_topInc] || 0;

        roleAttr.sp_stunDmgInc = attr[CONST.roleAttr.sp_stunDmgInc] || 0;
        roleAttr.sp_stunDodge = attr[CONST.roleAttr.sp_stunDodge] || 0;
        roleAttr.sp_batterContinue = attr[CONST.roleAttr.sp_batterContinue] || 0;
        roleAttr.sp_stunBack = attr[CONST.roleAttr.sp_stunBack] || 0;
        roleAttr.sp_everyCritDmgInc = attr[CONST.roleAttr.sp_everyCritDmgInc] || 0;
        roleAttr.sp_suckInc = attr[CONST.roleAttr.sp_suckInc] || 0;
        roleAttr.sp_back2batter = attr[CONST.roleAttr.sp_back2batter] || 0;
        roleAttr.sp_relive = attr[CONST.roleAttr.sp_relive] || 0;

        roleAttr.sp_defAvg5 = attr[CONST.roleAttr.sp_defAvg5] || 0;
        roleAttr.sp_magicHighDmgInc = attr[CONST.roleAttr.sp_magicHighDmgInc] || 0;
        roleAttr.sp_hpLowDngInc = attr[CONST.roleAttr.sp_hpLowDngInc] || 0;
        roleAttr.sp_avg5 = attr[CONST.roleAttr.sp_avg5] || 0;

        roleAttr.earnCoin = attr[CONST.roleAttr.earnCoin] || 0;
        roleAttr.winCoin = attr[CONST.roleAttr.winCoin] || 0;
        roleAttr.challenger = attr[CONST.roleAttr.challenger] || 0;
        roleAttr.explore = attr[CONST.roleAttr.explore] || 0;
        roleAttr.rbNormalBuy = attr[CONST.roleAttr.rbNormalBuy] || 0;

        roleAttr.oneKill = attr[CONST.roleAttr.oneKill] || 0;

        return roleAttr;
    }

    /**
     * 获取展示属性
     * @param {G.IRoleAttr} attr
     * @returns {G.IRoleAttr}
     */
    function calDisplayAttr(attr: IRoleAttr) {
        //最终四维算上加成的
        attr.hp = Math.floor(attr.baseHp * (1 + (attr.hpPer + attr.sp_hpMaxInc) / 10000));
        attr.atk = Math.floor(attr.baseAtk * (1 + attr.atkPer / 10000));
        attr.def = Math.floor(attr.baseDef * (1 + attr.defPer / 10000));
        attr.magic = Math.floor(attr.baseMagic * (1 + (attr.magicPer + attr.sp_magicInc) / 10000));

        //五项属性中最高项提升%s(万分比)
        if (attr.sp_topInc) {
            let attrs = [attr.stun, attr.dodge, attr.batter, attr.back, attr.crit];
            let top = Math.max(...attrs);
            if (attr.stun == top) {
                attr.stun = attr.stun + attr.sp_topInc
            }
            else if (attr.dodge == top) {
                attr.dodge = attr.dodge + attr.sp_topInc
            }
            else if (attr.batter == top) {
                attr.batter = attr.batter + attr.sp_topInc
            }
            else if (attr.back == top) {
                attr.back = attr.back + attr.sp_topInc
            }
            else if (attr.crit == top) {
                attr.crit = attr.crit + attr.sp_topInc
            }
        }

        //平均五项特殊属性,并提高%s(万分比)
        if (attr.sp_avg5) {
            let avg = Math.floor((attr.stun + attr.dodge + attr.batter + attr.back + attr.crit) / 5);
            attr.stun = attr.dodge = attr.batter = attr.back = attr.crit = avg + attr.sp_avg5;
        }

        //平均五项抵抗属性，并提高%s(万分比)
        if (attr.sp_defAvg5) {
            let avg = Math.floor((attr.stunDef + attr.dodgeDef + attr.batterDef + attr.backDef + attr.critDef) / 5);
            attr.stunDef = attr.dodgeDef = attr.batterDef = attr.backDef = attr.critDef = avg + attr.sp_defAvg5;
        }

        //反击转化为连击，且连击额外提高%s(万分比)
        if (attr.sp_back2batter) {
            attr.batter = attr.batter + attr.back + attr.sp_back2batter;
            attr.back = 0
        }

        attr.suck = attr.suck + attr.sp_suckInc;
    }
}
H.registerModule('robot', H.Robot);
