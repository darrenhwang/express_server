/// <reference path="../base/mysql/Dao.ts" />
module H {
    export let mysql_rb = initPool({"database":"rb"});          
    export class Dao_rb<S, U> extends Dao<S, U> {
        constructor(cfg ? : MysqlCfg) {
            super(cfg);
        }

        get client(): any {
            return this._promisePool || mysql_rb;
        }
    }
    export const enum IGCRBACTIVE {
        /** 区服全ID */
        grpId = "grpId",
        /** 活跃数 */
        activeNum = "activeNum",
        /** 更新时间 */
        uTime = "uTime",
        /** 创建时间 */
        cTime = "cTime",
    } 
    export interface IGCRbActive {
        /** 区服全ID */       
        grpId?: number;
        /** 活跃数 */       
        activeNum?: number;
        /** 更新时间 */       
        uTime?: Date;
        /** 创建时间 */       
        cTime?: Date;
    }
    export const enum IGCRBUSR {
        /** 玩家ID */
        uid = "uid",
        /** 跨服分组ID */
        roomId = "roomId",
        /** 所在分服 */
        gsIdx = "gsIdx",
        /** 等级 */
        lvl = "lvl",
        /** 公会id */
        fmlId = "fmlId",
        /** 玩家排名 */
        rank = "rank",
        /** 本轮积分 */
        intgr = "intgr",
        /** 排位赛结束后，同步该值为intgr，因为周六会清空intgr，保留积分，方便查询 */
        lastIntgr = "lastIntgr",
        /** 玩家总积分 */
        totIntgr = "totIntgr",
        /** 晋级云巅王者赛次数 */
        inTopCnt = "inTopCnt",
        /** 玩家名称 */
        name = "name",
        /** 头像 */
        ico = "ico",
        /** 公会名 */
        fmlName = "fmlName",
        /** 最近一次战斗时间 */
        fTime = "fTime",
        /** 更新时间 */
        uTime = "uTime",
        /** 创建时间 */
        cTime = "cTime",
    } 
    export interface IGCRbUsr {
        /** 玩家ID */       
        uid?: number;
        /** 跨服分组ID */       
        roomId?: number;
        /** 所在分服 */       
        gsIdx?: number;
        /** 等级 */       
        lvl?: number;
        /** 公会id */       
        fmlId?: number;
        /** 玩家排名 */       
        rank?: number;
        /** 本轮积分 */       
        intgr?: number;
        /** 排位赛结束后，同步该值为intgr，因为周六会清空intgr，保留积分，方便查询 */       
        lastIntgr?: number;
        /** 玩家总积分 */       
        totIntgr?: number;
        /** 晋级云巅王者赛次数 */       
        inTopCnt?: number;
        /** 玩家名称 */       
        name?: string;
        /** 头像 */       
        ico?: string;
        /** 公会名 */       
        fmlName?: string;
        /** 最近一次战斗时间 */       
        fTime?: Date;
        /** 更新时间 */       
        uTime?: Date;
        /** 创建时间 */       
        cTime?: Date;
    }
    export const enum IGCRBFINAL {
        /** 参与周期ID */
        ecycId = "ecycId",
        /** 跨服分组ID */
        roomId = "roomId",
        /** 玩家ID */
        uid = "uid",
        /** 天梯赛排名 */
        rank = "rank",
        /** 排位赛积分 */
        intgr = "intgr",
        /** 所在分服 */
        gsIdx = "gsIdx",
        /** 等级 */
        lvl = "lvl",
        /** 公会id */
        fmlId = "fmlId",
        /** 玩家名称 */
        name = "name",
        /** 头像 */
        ico = "ico",
        /** 公会名 */
        fmlName = "fmlName",
        /** 更新时间 */
        uTime = "uTime",
        /** 创建时间 */
        cTime = "cTime",
    } 
    export interface IGCRbFinal {
        /** 参与周期ID */       
        ecycId?: number;
        /** 跨服分组ID */       
        roomId?: number;
        /** 玩家ID */       
        uid?: number;
        /** 天梯赛排名 */       
        rank?: number;
        /** 排位赛积分 */       
        intgr?: number;
        /** 所在分服 */       
        gsIdx?: number;
        /** 等级 */       
        lvl?: number;
        /** 公会id */       
        fmlId?: number;
        /** 玩家名称 */       
        name?: string;
        /** 头像 */       
        ico?: string;
        /** 公会名 */       
        fmlName?: string;
        /** 更新时间 */       
        uTime?: Date;
        /** 创建时间 */       
        cTime?: Date;
    }
    export const enum IGCRBRECORD {
        /** 主键ID */
        id = "id",
        /** 玩家ID */
        uid = "uid",
        /** 玩家新排名 */
        newRank = "newRank",
        /** 对手用户ID */
        eUid = "eUid",
        /** 对手新排名 */
        eNewRank = "eNewRank",
        /** 挑战是否成功 */
        isWin = "isWin",
        /** 是否阅读过 */
        isRead = "isRead",
        /** 玩家名称 */
        name = "name",
        /** 玩家头像 */
        ico = "ico",
        /** 对手名称 */
        eName = "eName",
        /** 对手头像 */
        eIco = "eIco",
        /** 额外数据 */
        ext = "ext",
        /** 战斗记录 */
        record = "record",
        /** 创建时间 */
        cTime = "cTime",
    } 
    export interface IGCRbRecord {
        /** 主键ID */       
        id?: number;
        /** 玩家ID */       
        uid?: number;
        /** 玩家新排名 */       
        newRank?: number;
        /** 对手用户ID */       
        eUid?: number;
        /** 对手新排名 */       
        eNewRank?: number;
        /** 挑战是否成功 */       
        isWin?: number;
        /** 是否阅读过 */       
        isRead?: number;
        /** 玩家名称 */       
        name?: string;
        /** 玩家头像 */       
        ico?: string;
        /** 对手名称 */       
        eName?: string;
        /** 对手头像 */       
        eIco?: string;
        /** 额外数据 */       
        ext?: any;
        /** 战斗记录 */       
        record?: any;
        /** 创建时间 */       
        cTime?: Date;
    }
    export const enum IGCRBTOP {
        /** 参与周期ID */
        ecycId = "ecycId",
        /** 跨服分组ID */
        roomId = "roomId",
        /** 玩家排名 */
        rank = "rank",
        /** 玩家ID */
        uid = "uid",
        /** 所在分服 */
        gsIdx = "gsIdx",
        /** 等级 */
        lvl = "lvl",
        /** 公会id */
        fmlId = "fmlId",
        /** 玩家名称 */
        name = "name",
        /** 头像 */
        ico = "ico",
        /** 公会名 */
        fmlName = "fmlName",
        /** 属性 */
        attr = "attr",
        /** 更新时间 */
        uTime = "uTime",
        /** 创建时间 */
        cTime = "cTime",
    } 
    export interface IGCRbTop {
        /** 参与周期ID */       
        ecycId?: number;
        /** 跨服分组ID */       
        roomId?: number;
        /** 玩家排名 */       
        rank?: number;
        /** 玩家ID */       
        uid?: number;
        /** 所在分服 */       
        gsIdx?: number;
        /** 等级 */       
        lvl?: number;
        /** 公会id */       
        fmlId?: number;
        /** 玩家名称 */       
        name?: string;
        /** 头像 */       
        ico?: string;
        /** 公会名 */       
        fmlName?: string;
        /** 属性 */       
        attr?: any;
        /** 更新时间 */       
        uTime?: Date;
        /** 创建时间 */       
        cTime?: Date;
    }
    export const enum IGCRBLOG {
        /** 周期ID */
        ecycId = "ecycId",
        /** 组件ID */
        compId = "compId",
        /** 操作类型 */
        opType = "opType",
        /** 消息类型 */
        msgType = "msgType",
        /** 更新时间 */
        uTime = "uTime",
        /** 创建时间 */
        cTime = "cTime",
    } 
    export interface IGCRbLog {
        /** 周期ID */       
        ecycId?: number;
        /** 组件ID */       
        compId?: number;
        /** 操作类型 */       
        opType?: number;
        /** 消息类型 */       
        msgType?: string;
        /** 更新时间 */       
        uTime?: Date;
        /** 创建时间 */       
        cTime?: Date;
    }
    export class GCRbActive extends Dao_rb<IGCRbActive, IGCRBACTIVE>{
        constructor(cfg ? : MysqlCfg) {
            super(cfg);
            this.needToList = [];
            this.needToDate = ["uTime","cTime"];
            this.tableName = 'g_c_rb_active';
        }
    }
    export class GCRbUsr extends Dao_rb<IGCRbUsr, IGCRBUSR>{
        constructor(cfg ? : MysqlCfg) {
            super(cfg);
            this.needToList = [];
            this.needToDate = ["fTime","uTime","cTime"];
            this.tableName = 'g_c_rb_usr';
        }
    }
    export class GCRbFinal extends Dao_rb<IGCRbFinal, IGCRBFINAL>{
        constructor(cfg ? : MysqlCfg) {
            super(cfg);
            this.needToList = [];
            this.needToDate = ["uTime","cTime"];
            this.tableName = 'g_c_rb_final';
        }
    }
    export class GCRbRecord extends Dao_rb<IGCRbRecord, IGCRBRECORD>{
        constructor(cfg ? : MysqlCfg) {
            super(cfg);
            this.needToList = ["ext","record"];
            this.needToDate = ["cTime"];
            this.tableName = 'g_c_rb_record';
        }
    }
    export class GCRbTop extends Dao_rb<IGCRbTop, IGCRBTOP>{
        constructor(cfg ? : MysqlCfg) {
            super(cfg);
            this.needToList = ["attr"];
            this.needToDate = ["uTime","cTime"];
            this.tableName = 'g_c_rb_top';
        }
    }
    export class GCRbLog extends Dao_rb<IGCRbLog, IGCRBLOG>{
        constructor(cfg ? : MysqlCfg) {
            super(cfg);
            this.needToList = [];
            this.needToDate = ["uTime","cTime"];
            this.tableName = 'g_c_rb_log';
        }
    }
    export let gCRbActiveDao: GCRbActive = new GCRbActive();
    export let gCRbUsrDao: GCRbUsr = new GCRbUsr();
    export let gCRbFinalDao: GCRbFinal = new GCRbFinal();
    export let gCRbRecordDao: GCRbRecord = new GCRbRecord();
    export let gCRbTopDao: GCRbTop = new GCRbTop();
    export let gCRbLogDao: GCRbLog = new GCRbLog();
}