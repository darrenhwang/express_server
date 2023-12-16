/// <reference path="../base/mysql/Dao.ts" />
module H {
    export let mysql_peak = initPool({"database":"peak"});          
    export class Dao_peak<S, U> extends Dao<S, U> {
        constructor(cfg ? : MysqlCfg) {
            super(cfg);
        }

        get client(): any {
            return this._promisePool || mysql_peak;
        }
    }
    export const enum IGCPEAKROOM {
        /** 活动批次ID */
        batchId = "batchId",
        /** 房间ID */
        roomId = "roomId",
        /** 当前阶段 */
        step = "step",
        /** 房间状态 */
        status = "status",
        /** 海选赛分组数量 3还是5 */
        selectNum = "selectNum",
        /** 淘汰赛开启分组数量 */
        roundNum = "roundNum",
        /** 第一组海选赛剩余人数 */
        select1Num = "select1Num",
        /** 第二组海选赛剩余人数 */
        select2Num = "select2Num",
        /** 第三组海选赛剩余人数 */
        select3Num = "select3Num",
        /** 第四组海选赛剩余人数 */
        select4Num = "select4Num",
        /** 第五组海选赛剩余人数 */
        select5Num = "select5Num",
        /** 海选赛第一组的结算时间 */
        select1Time = "select1Time",
        /** 海选赛第二组的结算时间 */
        select2Time = "select2Time",
        /** 海选赛第三组的结算时间 */
        select3Time = "select3Time",
        /** 海选赛第四组的结算时间 */
        select4Time = "select4Time",
        /** 海选赛第五组的结算时间 */
        select5Time = "select5Time",
        /** 更新时间 */
        uTime = "uTime",
        /** 创建时间 */
        cTime = "cTime",
    } 
    export interface IGCPeakRoom {
        /** 活动批次ID */       
        batchId?: number;
        /** 房间ID */       
        roomId?: number;
        /** 当前阶段 */       
        step?: number;
        /** 房间状态 */       
        status?: number;
        /** 海选赛分组数量 3还是5 */       
        selectNum?: number;
        /** 淘汰赛开启分组数量 */       
        roundNum?: number;
        /** 第一组海选赛剩余人数 */       
        select1Num?: number;
        /** 第二组海选赛剩余人数 */       
        select2Num?: number;
        /** 第三组海选赛剩余人数 */       
        select3Num?: number;
        /** 第四组海选赛剩余人数 */       
        select4Num?: number;
        /** 第五组海选赛剩余人数 */       
        select5Num?: number;
        /** 海选赛第一组的结算时间 */       
        select1Time?: Date;
        /** 海选赛第二组的结算时间 */       
        select2Time?: Date;
        /** 海选赛第三组的结算时间 */       
        select3Time?: Date;
        /** 海选赛第四组的结算时间 */       
        select4Time?: Date;
        /** 海选赛第五组的结算时间 */       
        select5Time?: Date;
        /** 更新时间 */       
        uTime?: Date;
        /** 创建时间 */       
        cTime?: Date;
    }
    export const enum IGCPEAKUSR {
        /** 玩家ID */
        uid = "uid",
        /** 活动批次 */
        batchId = "batchId",
        /** 房间ID */
        roomId = "roomId",
        /** 所在分服ID */
        gsIdx = "gsIdx",
        /** 等级 */
        lvl = "lvl",
        /** 等级经验 */
        lvlExp = "lvlExp",
        /** 公会id */
        fmlId = "fmlId",
        /** 淘汰赛分组 */
        groupId = "groupId",
        /** 实力 */
        power = "power",
        /** 当前使用的方案id */
        usePlan = "usePlan",
        /** 根据规则生成1-128的数字 */
        pos = "pos",
        /** undefined */
        round = "round",
        /** 被拥护的次数 */
        hold = "hold",
        /** 被竞猜的次数 */
        bet = "bet",
        /** 海选赛 第一组的失败次数 */
        fail1Num = "fail1Num",
        /** 海选赛 第二组的失败次数 */
        fail2Num = "fail2Num",
        /** 海选赛 第三组的失败次数 */
        fail3Num = "fail3Num",
        /** 海选赛 第四组的失败次数 */
        fail4Num = "fail4Num",
        /** 海选赛 第五组的失败次数 */
        fail5Num = "fail5Num",
        /** 海选赛 第一组的战斗次数 */
        select1FNum = "select1FNum",
        /** 海选赛 第二组的战斗次数 */
        select2FNum = "select2FNum",
        /** 海选赛 第三组的战斗次数 */
        select3FNum = "select3FNum",
        /** 海选赛 第四组的战斗次数 */
        select4FNum = "select4FNum",
        /** 海选赛 第五组的战斗次数 */
        select5FNum = "select5FNum",
        /** 是否已领取排行奖励 */
        isRecv = "isRecv",
        /** 玩家名字 */
        name = "name",
        /** 头像 */
        ico = "ico",
        /** 公会名 */
        fmlName = "fmlName",
        /** 使用的方案id列表 */
        planSet = "planSet",
        /** Md5值,值一样不更新 */
        md5 = "md5",
        /** 方案详情map */
        planDetailMap = "planDetailMap",
        /** 方案详情map */
        planDetailMap_bak = "planDetailMap_bak",
        /** 更新时间 */
        uTime = "uTime",
        /** 创建时间 */
        cTime = "cTime",
    } 
    export interface IGCPeakUsr {
        /** 玩家ID */       
        uid?: number;
        /** 活动批次 */       
        batchId?: number;
        /** 房间ID */       
        roomId?: number;
        /** 所在分服ID */       
        gsIdx?: number;
        /** 等级 */       
        lvl?: number;
        /** 等级经验 */       
        lvlExp?: number;
        /** 公会id */       
        fmlId?: number;
        /** 淘汰赛分组 */       
        groupId?: number;
        /** 实力 */       
        power?: number;
        /** 当前使用的方案id */       
        usePlan?: number;
        /** 根据规则生成1-128的数字 */       
        pos?: number;
        /** undefined */       
        round?: number;
        /** 被拥护的次数 */       
        hold?: number;
        /** 被竞猜的次数 */       
        bet?: number;
        /** 海选赛 第一组的失败次数 */       
        fail1Num?: number;
        /** 海选赛 第二组的失败次数 */       
        fail2Num?: number;
        /** 海选赛 第三组的失败次数 */       
        fail3Num?: number;
        /** 海选赛 第四组的失败次数 */       
        fail4Num?: number;
        /** 海选赛 第五组的失败次数 */       
        fail5Num?: number;
        /** 海选赛 第一组的战斗次数 */       
        select1FNum?: number;
        /** 海选赛 第二组的战斗次数 */       
        select2FNum?: number;
        /** 海选赛 第三组的战斗次数 */       
        select3FNum?: number;
        /** 海选赛 第四组的战斗次数 */       
        select4FNum?: number;
        /** 海选赛 第五组的战斗次数 */       
        select5FNum?: number;
        /** 是否已领取排行奖励 */       
        isRecv?: number;
        /** 玩家名字 */       
        name?: string;
        /** 头像 */       
        ico?: string;
        /** 公会名 */       
        fmlName?: string;
        /** 使用的方案id列表 */       
        planSet?: number[];
        /** Md5值,值一样不更新 */       
        md5?: string;
        /** 方案详情map */       
        planDetailMap?: {[planId:number]:any};
        /** 方案详情map */       
        planDetailMap_bak?: {[planId:number]:any};
        /** 更新时间 */       
        uTime?: Date;
        /** 创建时间 */       
        cTime?: Date;
    }
    export const enum IGCPEAKROUND {
        /** 主键序号 */
        id = "id",
        /** 批次ID */
        batchId = "batchId",
        /** 房间ID */
        roomId = "roomId",
        /** 淘汰赛分组 */
        groupId = "groupId",
        /** undefined */
        round = "round",
        /** A玩家ID */
        aUid = "aUid",
        /** A玩家得分 */
        aScore = "aScore",
        /** B玩家ID */
        bUid = "bUid",
        /** B玩家得分 */
        bScore = "bScore",
        /** 赢家ID */
        winnerId = "winnerId",
        /** 同一轮里的第几个配对 */
        idx = "idx",
        /** A实力 */
        aPower = "aPower",
        /** B实力 */
        bPower = "bPower",
        /** 下注的玩家 */
        betOnUid = "betOnUid",
        /** 更新时间 */
        uTime = "uTime",
        /** 创建时间 */
        cTime = "cTime",
        /** A */
        aMap = "aMap",
        /** B */
        bMap = "bMap",
    } 
    export interface IGCPeakRound {
        /** 主键序号 */       
        id?: number;
        /** 批次ID */       
        batchId?: number;
        /** 房间ID */       
        roomId?: number;
        /** 淘汰赛分组 */       
        groupId?: number;
        /** undefined */       
        round?: number;
        /** A玩家ID */       
        aUid?: number;
        /** A玩家得分 */       
        aScore?: number;
        /** B玩家ID */       
        bUid?: number;
        /** B玩家得分 */       
        bScore?: number;
        /** 赢家ID */       
        winnerId?: number;
        /** 同一轮里的第几个配对 */       
        idx?: number;
        /** A实力 */       
        aPower?: number;
        /** B实力 */       
        bPower?: number;
        /** 下注的玩家 */       
        betOnUid?: number;
        /** 更新时间 */       
        uTime?: Date;
        /** 创建时间 */       
        cTime?: Date;
        /** A */       
        aMap?: {uid:number,score:number,name:string,ico:string,sId:number,power:number,fmlName:string};
        /** B */       
        bMap?: {uid:number,score:number,name:string,ico:string,sId:number,power:number,fmlName:string};
    }
    export const enum IGCPEAKSELECTFIGHT {
        /** 序号 */
        id = "id",
        /** 活动批次 */
        batchId = "batchId",
        /** 房间ID */
        roomId = "roomId",
        /** 淘汰赛分组 */
        groupId = "groupId",
        /** 打的玩家ID */
        uid = "uid",
        /** 目标玩家ID */
        dstUid = "dstUid",
        /** 是否胜利 */
        isWin = "isWin",
        /** 战斗参数 */
        fightRst = "fightRst",
        /** 创建时间 */
        cTime = "cTime",
    } 
    export interface IGCPeakSelectFight {
        /** 序号 */       
        id?: number;
        /** 活动批次 */       
        batchId?: number;
        /** 房间ID */       
        roomId?: number;
        /** 淘汰赛分组 */       
        groupId?: number;
        /** 打的玩家ID */       
        uid?: number;
        /** 目标玩家ID */       
        dstUid?: number;
        /** 是否胜利 */       
        isWin?: number;
        /** 战斗参数 */       
        fightRst?: any;
        /** 创建时间 */       
        cTime?: Date;
    }
    export const enum IGCPEAKROUNDFIGHT {
        /** 序号 */
        id = "id",
        /** 活动批次 */
        batchId = "batchId",
        /** 房间ID */
        roomId = "roomId",
        /** 淘汰赛分组 */
        groupId = "groupId",
        /** undefined */
        round = "round",
        /** 对战场标识 */
        idx = "idx",
        /** 第几场 */
        session = "session",
        /** A玩家ID */
        aUid = "aUid",
        /** B玩家ID */
        bUid = "bUid",
        /** 赢家玩家ID */
        winnerId = "winnerId",
        /** 战斗参数 */
        fightRst = "fightRst",
        /** 创建时间 */
        cTime = "cTime",
    } 
    export interface IGCPeakRoundFight {
        /** 序号 */       
        id?: number;
        /** 活动批次 */       
        batchId?: number;
        /** 房间ID */       
        roomId?: number;
        /** 淘汰赛分组 */       
        groupId?: number;
        /** undefined */       
        round?: number;
        /** 对战场标识 */       
        idx?: number;
        /** 第几场 */       
        session?: number;
        /** A玩家ID */       
        aUid?: number;
        /** B玩家ID */       
        bUid?: number;
        /** 赢家玩家ID */       
        winnerId?: number;
        /** 战斗参数 */       
        fightRst?: any;
        /** 创建时间 */       
        cTime?: Date;
    }
    export const enum IGCPEAKLOG {
        /** 序号 */
        id = "id",
        /** 活动批次 */
        batchId = "batchId",
        /** 房间ID */
        roomId = "roomId",
        /** 操作类型 */
        opType = "opType",
        /** 消息类型 */
        msgType = "msgType",
        /** 创建时间 */
        cTime = "cTime",
    } 
    export interface IGCPeakLog {
        /** 序号 */       
        id?: number;
        /** 活动批次 */       
        batchId?: number;
        /** 房间ID */       
        roomId?: number;
        /** 操作类型 */       
        opType?: number;
        /** 消息类型 */       
        msgType?: string;
        /** 创建时间 */       
        cTime?: Date;
    }
    export class GCPeakRoom extends Dao_peak<IGCPeakRoom, IGCPEAKROOM>{
        constructor(cfg ? : MysqlCfg) {
            super(cfg);
            this.needToList = [];
            this.needToDate = ["select1Time","select2Time","select3Time","select4Time","select5Time","uTime","cTime"];
            this.tableName = 'g_c_peak_room';
        }
    }
    export class GCPeakUsr extends Dao_peak<IGCPeakUsr, IGCPEAKUSR>{
        constructor(cfg ? : MysqlCfg) {
            super(cfg);
            this.needToList = ["planSet","planDetailMap","planDetailMap_bak"];
            this.needToDate = ["uTime","cTime"];
            this.tableName = 'g_c_peak_usr';
        }
    }
    export class GCPeakRound extends Dao_peak<IGCPeakRound, IGCPEAKROUND>{
        constructor(cfg ? : MysqlCfg) {
            super(cfg);
            this.needToList = ["aMap","bMap"];
            this.needToDate = ["uTime","cTime"];
            this.tableName = 'g_c_peak_round';
        }
    }
    export class GCPeakSelectFight extends Dao_peak<IGCPeakSelectFight, IGCPEAKSELECTFIGHT>{
        constructor(cfg ? : MysqlCfg) {
            super(cfg);
            this.needToList = ["fightRst"];
            this.needToDate = ["cTime"];
            this.tableName = 'g_c_peak_select_fight';
        }
    }
    export class GCPeakRoundFight extends Dao_peak<IGCPeakRoundFight, IGCPEAKROUNDFIGHT>{
        constructor(cfg ? : MysqlCfg) {
            super(cfg);
            this.needToList = ["fightRst"];
            this.needToDate = ["cTime"];
            this.tableName = 'g_c_peak_round_fight';
        }
    }
    export class GCPeakLog extends Dao_peak<IGCPeakLog, IGCPEAKLOG>{
        constructor(cfg ? : MysqlCfg) {
            super(cfg);
            this.needToList = [];
            this.needToDate = ["cTime"];
            this.tableName = 'g_c_peak_log';
        }
    }
    export let gCPeakRoomDao: GCPeakRoom = new GCPeakRoom();
    export let gCPeakUsrDao: GCPeakUsr = new GCPeakUsr();
    export let gCPeakRoundDao: GCPeakRound = new GCPeakRound();
    export let gCPeakSelectFightDao: GCPeakSelectFight = new GCPeakSelectFight();
    export let gCPeakRoundFightDao: GCPeakRoundFight = new GCPeakRoundFight();
    export let gCPeakLogDao: GCPeakLog = new GCPeakLog();
}