/**
 * 2.0 新增接口入口，与 test.ts 相同
 * yumi: 这里写接口
 */
module H.Iface2_0 {

    export async function execSql2GS(req: any, args: any, cb: (err?: string | Error, rst?: any) => void) {
        if (! args || !args.hhw_team || !args.hhw_gsIdx || !args.sql) {
            return cb('参数有误')
        }

        let sql = args.sql
        let data = args.data || [];

        /**
         * 找到对应数据库，处理适配分服数据库名
         */
        let database = `zw-${args.hhw_team}-gs-${STR.fill(args.hhw_gsIdx)}`;
        let dao = new GUsr(<MysqlCfg>{
            database: database,
            host: $env.gameMysqlHost
        });
        try {
            await dao.query("SELECT 1 FROM g_usr")
        } catch (e1) {
            // 数据库不存在，可能是分服名称
            database = `zw-${args.hhw_team}-gs-${STR.fill(args.hhw_gsIdx - 1)}_${STR.fill(args.hhw_gsIdx)}`
            dao = new GUsr(<MysqlCfg>{
                database: database,
                host: $env.gameMysqlHost
            })
            try {
                await dao.query("SELECT 1 FROM g_usr")
            } catch (e2) {
                database = `zw-${args.hhw_team}-gs-${STR.fill(args.hhw_gsIdx)}_${STR.fill(args.hhw_gsIdx + 1)}`
                dao = new GUsr(<MysqlCfg>{
                    database: database,
                    host: $env.gameMysqlHost
                })
                await dao.query("SELECT 1 FROM g_usr")
            }
        }

        /**
         * 执行 sql
         */
        try {
            await dao.query(sql, data)
        } catch (e) {
            return cb(e);
        }

        return cb();
    }

}

H.registerModule('iface2_0', H.Iface2_0);
