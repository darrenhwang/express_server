/// <reference path="../base/mysql/Dao.ts" />
module H {
    export let mysql_hhw = initPool({"database":"hhw"});          
    export class Dao_hhw<S, U> extends Dao<S, U> {
        constructor(cfg ? : MysqlCfg) {
            super(cfg);
        }

        get client(): any {
            return this._promisePool || mysql_hhw;
        }
    }
    export const enum IHHW {
        /** 存储器名 */
        name = "name",
        /** 描述 */
        ext = "ext",
        /** 存储过程 */
        text = "text",
    } 
    export interface IHhw {
        /** 存储器名 */       
        name?: string;
        /** 描述 */       
        ext?: string;
        /** 存储过程 */       
        text?: string;
    }
    export const enum ITESTREQUEST {
        /** 接口名 */
        name = "name",
        /** 参数 */
        args = "args",
        /** 备注 */
        ext = "ext",
    } 
    export interface ITestRequest {
        /** 接口名 */       
        name?: string;
        /** 参数 */       
        args?: any;
        /** 备注 */       
        ext?: string;
    }
    export const enum ITEAMCFG {
        /** team名字 */
        name = "name",
        /** 拓展 */
        ext = "ext",
        /** url和描述配置 */
        cfgList = "cfgList",
    } 
    export interface ITeamCfg {
        /** team名字 */       
        name?: string;
        /** 拓展 */       
        ext?: any;
        /** url和描述配置 */       
        cfgList?: any[];
    }
    export class Hhw extends Dao_hhw<IHhw, IHHW>{
        constructor(cfg ? : MysqlCfg) {
            super(cfg);
            this.needToList = [];
            this.needToDate = [];
            this.tableName = 'hhw';
        }
    }
    export class TestRequest extends Dao_hhw<ITestRequest, ITESTREQUEST>{
        constructor(cfg ? : MysqlCfg) {
            super(cfg);
            this.needToList = ["args"];
            this.needToDate = [];
            this.tableName = 'testRequest';
        }
    }
    export class TeamCfg extends Dao_hhw<ITeamCfg, ITEAMCFG>{
        constructor(cfg ? : MysqlCfg) {
            super(cfg);
            this.needToList = ["ext","cfgList"];
            this.needToDate = [];
            this.tableName = 'teamCfg';
        }
    }
    export let hhwDao: Hhw = new Hhw();
    export let testRequestDao: TestRequest = new TestRequest();
    export let teamCfgDao: TeamCfg = new TeamCfg();
}