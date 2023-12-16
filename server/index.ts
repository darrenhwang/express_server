/// <reference path="./define.ts" />
/// <reference path="./base/module.ts" />
/// <reference path="./auto_dao/module.ts" />
/// <reference path="./work/module.ts" />
/// <reference path="./cron/module.ts" />
/// <reference path="./module/module.ts" />
module H {
    mysql_hhw = initPool({
        "host": $env.gameMysqlHost,
        "database": "hhw"
    });
    console.log("_yumi")
}
