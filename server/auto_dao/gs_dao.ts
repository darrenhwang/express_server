/// <reference path="../base/mysql/Dao.ts" />
module H {
    export let mysql_gs = initPool({"database":"gs"});          
    export class Dao_gs<S, U> extends Dao<S, U> {
        constructor(cfg ? : MysqlCfg) {
            super(cfg);
        }

        get client(): any {
            return this._promisePool || mysql_gs;
        }
    }
    export const enum IGDIDPOOL {
        /** 分服下标 */
        gsIdx = "gsIdx",
        /** 后缀，1-9999 */
        suffix = "suffix",
        /** 已经完成的数量 */
        count = "count",
        /** 乐观锁失效时间 */
        lockExpiredMs = "lockExpiredMs",
        /** 已经完成的段的数量 */
        finishedRangeCount = "finishedRangeCount",
        /** 已经生成过的段信息 */
        nums = "nums",
    } 
    export interface IGDidPool {
        /** 分服下标 */       
        gsIdx?: number;
        /** 后缀，1-9999 */       
        suffix?: number;
        /** 已经完成的数量 */       
        count?: number;
        /** 乐观锁失效时间 */       
        lockExpiredMs?: number;
        /** 已经完成的段的数量 */       
        finishedRangeCount?: number;
        /** 已经生成过的段信息 */       
        nums?: number[];
    }
    export const enum IGUSR {
        /** 玩家ID */
        id = "id",
        /** 平台ID */
        sdkId = "sdkId",
        /** 渠道ID */
        chnId = "chnId",
        /** 佩戴称号ID */
        titleId = "titleId",
        /** 佩戴的聊天气泡框 */
        bubbleId = "bubbleId",
        /** 穿戴时装(fashionId*10000+lvl) */
        fashion = "fashion",
        /** 性别 */
        sex = "sex",
        /** 等级 */
        lvl = "lvl",
        /** 等级经验 */
        lvlExp = "lvlExp",
        /** vip等级 */
        vip = "vip",
        /** vip经验 */
        vipExp = "vipExp",
        /** 总属性 */
        cmt = "cmt",
        /** 历史最高总属性 */
        cmt_hist = "cmt_hist",
        /** 创建时候的设备系统类型 */
        cOsType = "cOsType",
        /** 创建时候的runtime类型 */
        cRtType = "cRtType",
        /** 充值次数 */
        rchgCnt = "rchgCnt",
        /** 登录时候的设备系统类型 */
        lOsType = "lOsType",
        /** 登录时候的runtime类型 */
        lRtType = "lRtType",
        /** 邀请者玩家ID */
        inviteesId = "inviteesId",
        /** 只会累加 */
        histDmd = "histDmd",
        /** 只会累加，c表示consume */
        histDmd_c = "histDmd_c",
        /** 钻石 */
        dmd = "dmd",
        /** 只统计离线和在线15秒生成 */
        histGld = "histGld",
        /** 金币 */
        gld = "gld",
        /** 金币增长速度 */
        gldSp = "gldSp",
        /** 开启魔法阵MsId */
        rufMsId = "rufMsId",
        /** 穿戴的翅膀ID */
        wingId = "wingId",
        /** 穿戴的圣器ID */
        sacraId = "sacraId",
        /** 宝石方案编号 */
        gemSchemeNo = "gemSchemeNo",
        /** 佩戴脸部ID */
        faceId = "faceId",
        /** 属性是否dirty */
        attrDirty = "attrDirty",
        /** 角色数量 */
        roleCnt = "roleCnt",
        /** 竞技场积分 */
        aIntgr = "aIntgr",
        /** 玩家标记 */
        flag = "flag",
        /** 是否待删 */
        isDel = "isDel",
        /** 上阵宠物MsId */
        petMsId = "petMsId",
        /** 这个主要用户前端显示用，今后的前端显示将不能用原来的id，因为里面暴露了太多规则信息了，所以新增了这个显示ID */
        did = "did",
        /** 账号名(openId) */
        accName = "accName",
        /** 名称 */
        name = "name",
        /** 头像 */
        ico = "ico",
        /** 头像框 */
        icoFrm = "icoFrm",
        /** 创建的时候的语言 */
        cLang = "cLang",
        /** 创建IP */
        cIp = "cIp",
        /** 登录的时候的语言 */
        lLang = "lLang",
        /** 登录IP */
        lIp = "lIp",
        /** 定位信息 */
        loc = "loc",
        /** 第三方的平台标记 */
        thirdPf = "thirdPf",
        /** 第三方openId */
        thirdOpenId = "thirdOpenId",
        /** 第三方名字 */
        thirdName = "thirdName",
        /** 第三方头像 */
        thirdIco = "thirdIco",
        /** 属性 */
        attr = "attr",
        /** 创建时间 */
        cTime = "cTime",
        /** 默认为2021-01-01，欠款时设为2099-01-01，还款时设为当前时间 */
        refundTime = "refundTime",
        /** 首充重置使用 */
        rchgResetTime = "rchgResetTime",
        /** 登录时间 */
        lTime = "lTime",
        /** 授权时间 */
        authTime = "authTime",
        /** 上次计算金币时间 */
        gldTime = "gldTime",
        /** 属性重新计算时间 */
        attrRecalTime = "attrRecalTime",
        /** 只存放静态物品，格式：{"物品id":数量,"物品id":数量,...} */
        bag = "bag",
    } 
    export interface IGUsr {
        /** 玩家ID */       
        id?: number;
        /** 平台ID */       
        sdkId?: number;
        /** 渠道ID */       
        chnId?: number;
        /** 佩戴称号ID */       
        titleId?: number;
        /** 佩戴的聊天气泡框 */       
        bubbleId?: number;
        /** 穿戴时装(fashionId*10000+lvl) */       
        fashion?: number;
        /** 性别 */       
        sex?: number;
        /** 等级 */       
        lvl?: number;
        /** 等级经验 */       
        lvlExp?: number;
        /** vip等级 */       
        vip?: number;
        /** vip经验 */       
        vipExp?: number;
        /** 总属性 */       
        cmt?: number;
        /** 历史最高总属性 */       
        cmt_hist?: number;
        /** 创建时候的设备系统类型 */       
        cOsType?: number;
        /** 创建时候的runtime类型 */       
        cRtType?: number;
        /** 充值次数 */       
        rchgCnt?: number;
        /** 登录时候的设备系统类型 */       
        lOsType?: number;
        /** 登录时候的runtime类型 */       
        lRtType?: number;
        /** 邀请者玩家ID */       
        inviteesId?: number;
        /** 只会累加 */       
        histDmd?: number;
        /** 只会累加，c表示consume */       
        histDmd_c?: number;
        /** 钻石 */       
        dmd?: number;
        /** 只统计离线和在线15秒生成 */       
        histGld?: number;
        /** 金币 */       
        gld?: number;
        /** 金币增长速度 */       
        gldSp?: number;
        /** 开启魔法阵MsId */       
        rufMsId?: number;
        /** 穿戴的翅膀ID */       
        wingId?: number;
        /** 穿戴的圣器ID */       
        sacraId?: number;
        /** 宝石方案编号 */       
        gemSchemeNo?: number;
        /** 佩戴脸部ID */       
        faceId?: number;
        /** 属性是否dirty */       
        attrDirty?: number;
        /** 角色数量 */       
        roleCnt?: number;
        /** 竞技场积分 */       
        aIntgr?: number;
        /** 玩家标记 */       
        flag?: number;
        /** 是否待删 */       
        isDel?: number;
        /** 上阵宠物MsId */       
        petMsId?: number;
        /** 这个主要用户前端显示用，今后的前端显示将不能用原来的id，因为里面暴露了太多规则信息了，所以新增了这个显示ID */       
        did?: string;
        /** 账号名(openId) */       
        accName?: string;
        /** 名称 */       
        name?: string;
        /** 头像 */       
        ico?: string;
        /** 头像框 */       
        icoFrm?: string;
        /** 创建的时候的语言 */       
        cLang?: string;
        /** 创建IP */       
        cIp?: string;
        /** 登录的时候的语言 */       
        lLang?: string;
        /** 登录IP */       
        lIp?: string;
        /** 定位信息 */       
        loc?: any;
        /** 第三方的平台标记 */       
        thirdPf?: string;
        /** 第三方openId */       
        thirdOpenId?: string;
        /** 第三方名字 */       
        thirdName?: string;
        /** 第三方头像 */       
        thirdIco?: string;
        /** 属性 */       
        attr?: any;
        /** 创建时间 */       
        cTime?: Date;
        /** 默认为2021-01-01，欠款时设为2099-01-01，还款时设为当前时间 */       
        refundTime?: Date;
        /** 首充重置使用 */       
        rchgResetTime?: Date;
        /** 登录时间 */       
        lTime?: Date;
        /** 授权时间 */       
        authTime?: Date;
        /** 上次计算金币时间 */       
        gldTime?: Date;
        /** 属性重新计算时间 */       
        attrRecalTime?: Date;
        /** 只存放静态物品，格式：{"物品id":数量,"物品id":数量,...} */       
        bag?: any;
    }
    export const enum IGUSROL {
        /** 玩家ID */
        uid = "uid",
        /** 是否在线 */
        isOl = "isOl",
        /** 今日在线时长(毫秒级) */
        tdyMs = "tdyMs",
        /** 今日登录次数 */
        tdyCount = "tdyCount",
        /** 历史登录次数 */
        histCount = "histCount",
        /** 历史在线秒数 */
        histSec = "histSec",
        /** 历史登录天数 */
        histDays = "histDays",
        /** 连续登陆天数 */
        contDays = "contDays",
        /** 最大连续登陆天数 */
        histContDays = "histContDays",
        /** 当前所在进程ID */
        pid = "pid",
        /** 心跳时间 */
        hTime = "hTime",
        /** 登录时间 */
        lTime = "lTime",
        /** 登出时间 */
        oTime = "oTime",
        /** 最后一次登录时间 */
        lLTime = "lLTime",
        /** 最后一次登出时间 */
        lOTime = "lOTime",
        /** 登录后的token值 */
        token = "token",
        /** 因为断线重连的时候，我们会将token保持和原来一样，所以不能用token字段进行区分 */
        updateKey = "updateKey",
    } 
    export interface IGUsrOl {
        /** 玩家ID */       
        uid?: number;
        /** 是否在线 */       
        isOl?: number;
        /** 今日在线时长(毫秒级) */       
        tdyMs?: number;
        /** 今日登录次数 */       
        tdyCount?: number;
        /** 历史登录次数 */       
        histCount?: number;
        /** 历史在线秒数 */       
        histSec?: number;
        /** 历史登录天数 */       
        histDays?: number;
        /** 连续登陆天数 */       
        contDays?: number;
        /** 最大连续登陆天数 */       
        histContDays?: number;
        /** 当前所在进程ID */       
        pid?: number;
        /** 心跳时间 */       
        hTime?: Date;
        /** 登录时间 */       
        lTime?: Date;
        /** 登出时间 */       
        oTime?: Date;
        /** 最后一次登录时间 */       
        lLTime?: Date;
        /** 最后一次登出时间 */       
        lOTime?: Date;
        /** 登录后的token值 */       
        token?: string;
        /** 因为断线重连的时候，我们会将token保持和原来一样，所以不能用token字段进行区分 */       
        updateKey?: string;
    }
    export const enum IGUSREXT {
        /** 玩家ID */
        uid = "uid",
        /** key */
        k = "k",
        /** {"v":....} */
        v = "v",
    } 
    export interface IGUsrExt {
        /** 玩家ID */       
        uid?: number;
        /** key */       
        k?: string;
        /** {"v":....} */       
        v?: any;
    }
    export const enum IGUSRCOUNT {
        /** 玩家ID */
        uid = "uid",
        /** 类型 */
        type = "type",
        /** 每日次数 */
        tdyCnt = "tdyCnt",
        /** 累计次数 */
        totCnt = "totCnt",
        /** 刷新时间 */
        rTime = "rTime",
        /** 更新时间 */
        uTime = "uTime",
        /** 创建时间 */
        cTime = "cTime",
    } 
    export interface IGUsrCount {
        /** 玩家ID */       
        uid?: number;
        /** 类型 */       
        type?: number;
        /** 每日次数 */       
        tdyCnt?: number;
        /** 累计次数 */       
        totCnt?: number;
        /** 刷新时间 */       
        rTime?: Date;
        /** 更新时间 */       
        uTime?: Date;
        /** 创建时间 */       
        cTime?: Date;
    }
    export const enum IGUSRRCD {
        /** 玩家ID */
        uid = "uid",
        /** 记录类型 */
        type = "type",
        /** 本日记录数值 */
        tdyValue = "tdyValue",
        /** 本周记录数值 */
        weekValue = "weekValue",
        /** 本月记录数值 */
        monthValue = "monthValue",
        /** 历史记录数据 */
        histValue = "histValue",
        /** 值映射 */
        valueMap = "valueMap",
        /** 刷新时间 */
        rTime = "rTime",
        /** 更新时间 */
        uTime = "uTime",
        /** 创建时间 */
        cTime = "cTime",
    } 
    export interface IGUsrRcd {
        /** 玩家ID */       
        uid?: number;
        /** 记录类型 */       
        type?: number;
        /** 本日记录数值 */       
        tdyValue?: number;
        /** 本周记录数值 */       
        weekValue?: number;
        /** 本月记录数值 */       
        monthValue?: number;
        /** 历史记录数据 */       
        histValue?: number;
        /** 值映射 */       
        valueMap?: any;
        /** 刷新时间 */       
        rTime?: Date;
        /** 更新时间 */       
        uTime?: Date;
        /** 创建时间 */       
        cTime?: Date;
    }
    export const enum IGUSRSET {
        /** 玩家ID */
        uid = "uid",
        /** undefined */
        type = "type",
        /** 是否开启 */
        isOpen = "isOpen",
        /** 设置值 */
        value = "value",
        /** 更新时间 */
        uTime = "uTime",
        /** 创建时间 */
        cTime = "cTime",
    } 
    export interface IGUsrSet {
        /** 玩家ID */       
        uid?: number;
        /** undefined */       
        type?: number;
        /** 是否开启 */       
        isOpen?: number;
        /** 设置值 */       
        value?: any;
        /** 更新时间 */       
        uTime?: Date;
        /** 创建时间 */       
        cTime?: Date;
    }
    export const enum IGUSRSDKRWD {
        /** 玩家ID */
        uid = "uid",
        /** undefined */
        type = "type",
        /** 是否开启 */
        isOpen = "isOpen",
        /** 是否领取 */
        isRecv = "isRecv",
        /** 更新时间 */
        uTime = "uTime",
        /** 创建时间 */
        cTime = "cTime",
    } 
    export interface IGUsrSdkRwd {
        /** 玩家ID */       
        uid?: number;
        /** undefined */       
        type?: number;
        /** 是否开启 */       
        isOpen?: number;
        /** 是否领取 */       
        isRecv?: number;
        /** 更新时间 */       
        uTime?: Date;
        /** 创建时间 */       
        cTime?: Date;
    }
    export const enum IGUSRLOGINHIST {
        /** 玩家ID */
        uid = "uid",
        /** msId */
        msId = "msId",
        /** 用户登录时间 */
        time = "time",
        /** 创建ip */
        ip = "ip",
        /** 登录时候的token */
        token = "token",
    } 
    export interface IGUsrLoginHist {
        /** 玩家ID */       
        uid?: number;
        /** msId */       
        msId?: number;
        /** 用户登录时间 */       
        time?: Date;
        /** 创建ip */       
        ip?: string;
        /** 登录时候的token */       
        token?: string;
    }
    export const enum IGUSRSS {
        /** 用户uid */
        uid = "uid",
        /** 圣器今日抽奖次数 */
        tdySacraDraw = "tdySacraDraw",
        /** 圣器总计抽奖次数 */
        totSacraDraw = "totSacraDraw",
        /** 宝石数量 */
        gemNum = "gemNum",
        /** VIP领取记录 */
        vipRecv = "vipRecv",
        /** 绑定的bonbon码 */
        bindBonbon = "bindBonbon",
        /** 今日已领取兑换码列表 */
        redeemCodes = "redeemCodes",
        /** {"id":num} */
        sacraDrawRcd = "sacraDrawRcd",
        /** 格式：[[日期,数量],[日期,数量],...} */
        actives = "actives",
        /** 符石方案信息 */
        runePlan = "runePlan",
        /** 刷新时间 */
        rTime = "rTime",
        /** 更新时间 */
        uTime = "uTime",
        /** 创建时间 */
        cTime = "cTime",
    } 
    export interface IGUsrSs {
        /** 用户uid */       
        uid?: number;
        /** 圣器今日抽奖次数 */       
        tdySacraDraw?: number;
        /** 圣器总计抽奖次数 */       
        totSacraDraw?: number;
        /** 宝石数量 */       
        gemNum?: number;
        /** VIP领取记录 */       
        vipRecv?: number[];
        /** 绑定的bonbon码 */       
        bindBonbon?: string;
        /** 今日已领取兑换码列表 */       
        redeemCodes?: string[];
        /** {"id":num} */       
        sacraDrawRcd?: any;
        /** 格式：[[日期,数量],[日期,数量],...} */       
        actives?: any[];
        /** 符石方案信息 */       
        runePlan?: any[];
        /** 刷新时间 */       
        rTime?: Date;
        /** 更新时间 */       
        uTime?: Date;
        /** 创建时间 */       
        cTime?: Date;
    }
    export const enum IGBOX {
        /** 用户uid */
        uid = "uid",
        /** 类型 */
        type = "type",
        /** 等级 */
        lvl = "lvl",
        /** 经验 */
        exp = "exp",
        /** 例如宝箱的时候，指的是挑战券数量 */
        tdyCount = "tdyCount",
        /** 冷却时间时间戳 */
        cdTime = "cdTime",
        /** 最后一次抽到挑战券的时间 */
        countTime = "countTime",
        /** 视频加速冷却结束时间 */
        eTime_video = "eTime_video",
        /** 等级升级结束时间 */
        eTime_up = "eTime_up",
        /** 更新时间 */
        uTime = "uTime",
        /** 创建时间 */
        cTime = "cTime",
    } 
    export interface IGBox {
        /** 用户uid */       
        uid?: number;
        /** 类型 */       
        type?: number;
        /** 等级 */       
        lvl?: number;
        /** 经验 */       
        exp?: number;
        /** 例如宝箱的时候，指的是挑战券数量 */       
        tdyCount?: number;
        /** 冷却时间时间戳 */       
        cdTime?: number;
        /** 最后一次抽到挑战券的时间 */       
        countTime?: Date;
        /** 视频加速冷却结束时间 */       
        eTime_video?: Date;
        /** 等级升级结束时间 */       
        eTime_up?: Date;
        /** 更新时间 */       
        uTime?: Date;
        /** 创建时间 */       
        cTime?: Date;
    }
    export const enum IGEQUIPBASE {
        /** 用户id */
        uid = "uid",
        /** 当前使用方案 */
        curPlan = "curPlan",
        /** 方案信息 */
        planMap = "planMap",
        /** 皮肤幻化信息 */
        skinMap = "skinMap",
        /** 潜能信息 */
        potMap = "potMap",
        /** 更新时间 */
        uTime = "uTime",
        /** 创建时间 */
        cTime = "cTime",
    } 
    export interface IGEquipBase {
        /** 用户id */       
        uid?: number;
        /** 当前使用方案 */       
        curPlan?: number;
        /** 方案信息 */       
        planMap?: any;
        /** 皮肤幻化信息 */       
        skinMap?: {[partId:number]:number};
        /** 潜能信息 */       
        potMap?: {[partId:number]:any};
        /** 更新时间 */       
        uTime?: Date;
        /** 创建时间 */       
        cTime?: Date;
    }
    export const enum IGEQUIP {
        /** 用户uid */
        uid = "uid",
        /** msId */
        msId = "msId",
        /** 模板id */
        tmpId = "tmpId",
        /** 图标id */
        icoId = "icoId",
        /** 皮肤id */
        skinId = "skinId",
        /** 等级 */
        lvl = "lvl",
        /** 潜能等级 */
        potLvl = "potLvl",
        /** 潜能经验 */
        potExp = "potExp",
        /** 是否装备 */
        isEquip = "isEquip",
        /** 是否是新装备 */
        isNew = "isNew",
        /** 方案 */
        plan = "plan",
        /** 开卡倍数 */
        mutil = "mutil",
        /** 基础属性 */
        baseAttr = "baseAttr",
        /** 潜能生效时间 */
        potEftTime = "potEftTime",
        /** 更新时间 */
        uTime = "uTime",
        /** 创建时间 */
        cTime = "cTime",
    } 
    export interface IGEquip {
        /** 用户uid */       
        uid?: number;
        /** msId */       
        msId?: number;
        /** 模板id */       
        tmpId?: number;
        /** 图标id */       
        icoId?: number;
        /** 皮肤id */       
        skinId?: number;
        /** 等级 */       
        lvl?: number;
        /** 潜能等级 */       
        potLvl?: number;
        /** 潜能经验 */       
        potExp?: number;
        /** 是否装备 */       
        isEquip?: number;
        /** 是否是新装备 */       
        isNew?: number;
        /** 方案 */       
        plan?: number;
        /** 开卡倍数 */       
        mutil?: number;
        /** 基础属性 */       
        baseAttr?: any;
        /** 潜能生效时间 */       
        potEftTime?: Date;
        /** 更新时间 */       
        uTime?: Date;
        /** 创建时间 */       
        cTime?: Date;
    }
    export const enum IGHANDBOOK {
        /** 用户uid */
        uid = "uid",
        /** 类型 */
        type = "type",
        /** 图鉴列表 */
        list = "list",
        /** 特殊图鉴列表 */
        spList = "spList",
        /** 更新时间 */
        uTime = "uTime",
        /** 创建时间 */
        cTime = "cTime",
    } 
    export interface IGHandbook {
        /** 用户uid */       
        uid?: number;
        /** 类型 */       
        type?: number;
        /** 图鉴列表 */       
        list?: number[];
        /** 特殊图鉴列表 */       
        spList?: number[];
        /** 更新时间 */       
        uTime?: Date;
        /** 创建时间 */       
        cTime?: Date;
    }
    export const enum IGWING {
        /** 用户uid */
        uid = "uid",
        /** 佩戴模板ID */
        tmpId = "tmpId",
        /** 等级 */
        lvl = "lvl",
        /** 经验 */
        lvlExp = "lvlExp",
        /** 阶级 */
        grade = "grade",
        /** 强化等级 */
        enhanceLvl = "enhanceLvl",
        /** 已获得列表 */
        wingList = "wingList",
        /** 属性 */
        attr = "attr",
        /** 强化属性 */
        enhanceAttr = "enhanceAttr",
        /** 更新时间 */
        uTime = "uTime",
        /** 创建时间 */
        cTime = "cTime",
    } 
    export interface IGWing {
        /** 用户uid */       
        uid?: number;
        /** 佩戴模板ID */       
        tmpId?: number;
        /** 等级 */       
        lvl?: number;
        /** 经验 */       
        lvlExp?: number;
        /** 阶级 */       
        grade?: number;
        /** 强化等级 */       
        enhanceLvl?: number;
        /** 已获得列表 */       
        wingList?: number[];
        /** 属性 */       
        attr?: any;
        /** 强化属性 */       
        enhanceAttr?: any;
        /** 更新时间 */       
        uTime?: Date;
        /** 创建时间 */       
        cTime?: Date;
    }
    export const enum IGRUFBASE {
        /** 用户ID */
        uid = "uid",
        /** 格子数 */
        volume = "volume",
        /** 收益 */
        income = "income",
        /** 是否初始 */
        isInit = "isInit",
        /** 总计获得 */
        totGet = "totGet",
        /** 探索列表 */
        travelList = "travelList",
        /** 探索时间 */
        travelTime = "travelTime",
        /** 更新时间 */
        uTime = "uTime",
        /** 创建时间 */
        cTime = "cTime",
    } 
    export interface IGRufBase {
        /** 用户ID */       
        uid?: number;
        /** 格子数 */       
        volume?: number;
        /** 收益 */       
        income?: number;
        /** 是否初始 */       
        isInit?: number;
        /** 总计获得 */       
        totGet?: number;
        /** 探索列表 */       
        travelList?: number[];
        /** 探索时间 */       
        travelTime?: Date;
        /** 更新时间 */       
        uTime?: Date;
        /** 创建时间 */       
        cTime?: Date;
    }
    export const enum IGRUF {
        /** 用户uid */
        uid = "uid",
        /** msId */
        msId = "msId",
        /** 模板id */
        tmpId = "tmpId",
        /** 等级 */
        lvl = "lvl",
        /** 等阶 */
        grade = "grade",
        /** 进阶随到主属性的次数 */
        rollMainCount = "rollMainCount",
        /** 融合次数 */
        fuseCnt = "fuseCnt",
        /** 被融合法阵总消耗 */
        beFuseCost = "beFuseCost",
        /** 特殊属性 */
        spAttr = "spAttr",
        /** 融合属性 */
        fuseAttr = "fuseAttr",
        /** 更新时间 */
        uTime = "uTime",
        /** 创建时间 */
        cTime = "cTime",
    } 
    export interface IGRuf {
        /** 用户uid */       
        uid?: number;
        /** msId */       
        msId?: number;
        /** 模板id */       
        tmpId?: number;
        /** 等级 */       
        lvl?: number;
        /** 等阶 */       
        grade?: number;
        /** 进阶随到主属性的次数 */       
        rollMainCount?: number;
        /** 融合次数 */       
        fuseCnt?: number;
        /** 被融合法阵总消耗 */       
        beFuseCost?: number;
        /** 特殊属性 */       
        spAttr?: any;
        /** 融合属性 */       
        fuseAttr?: any[];
        /** 更新时间 */       
        uTime?: Date;
        /** 创建时间 */       
        cTime?: Date;
    }
    export const enum IGHONOUR {
        /** 用户uid */
        uid = "uid",
        /** 阶段 */
        step = "step",
        /** 任务进度 */
        progress = "progress",
        /** 更新时间 */
        uTime = "uTime",
        /** 创建时间 */
        cTime = "cTime",
    } 
    export interface IGHonour {
        /** 用户uid */       
        uid?: number;
        /** 阶段 */       
        step?: number;
        /** 任务进度 */       
        progress?: any;
        /** 更新时间 */       
        uTime?: Date;
        /** 创建时间 */       
        cTime?: Date;
    }
    export const enum IGTITLE {
        /** 用户uid */
        uid = "uid",
        /** 模板id */
        tmpId = "tmpId",
        /** 等级 */
        lvl = "lvl",
        /** 属性 */
        attr = "attr",
        /** 更新时间 */
        uTime = "uTime",
        /** 创建时间 */
        cTime = "cTime",
    } 
    export interface IGTitle {
        /** 用户uid */       
        uid?: number;
        /** 模板id */       
        tmpId?: number;
        /** 等级 */       
        lvl?: number;
        /** 属性 */       
        attr?: any;
        /** 更新时间 */       
        uTime?: Date;
        /** 创建时间 */       
        cTime?: Date;
    }
    export const enum IGTITLEHIST {
        /** 用户uid */
        uid = "uid",
        /** 时间戳 */
        msId = "msId",
        /** 模板id */
        tmpId = "tmpId",
        /** 等级 */
        lvl = "lvl",
        /** 属性 */
        attr = "attr",
        /** 更新时间 */
        uTime = "uTime",
        /** 创建时间 */
        cTime = "cTime",
    } 
    export interface IGTitleHist {
        /** 用户uid */       
        uid?: number;
        /** 时间戳 */       
        msId?: number;
        /** 模板id */       
        tmpId?: number;
        /** 等级 */       
        lvl?: number;
        /** 属性 */       
        attr?: any;
        /** 更新时间 */       
        uTime?: Date;
        /** 创建时间 */       
        cTime?: Date;
    }
    export const enum IGGEM {
        /** 用户uid */
        uid = "uid",
        /** msId */
        msId = "msId",
        /** 模板ID */
        tmpId = "tmpId",
        /** 属性 */
        attr = "attr",
        /** 更新时间 */
        uTime = "uTime",
        /** 创建时间 */
        cTime = "cTime",
    } 
    export interface IGGem {
        /** 用户uid */       
        uid?: number;
        /** msId */       
        msId?: number;
        /** 模板ID */       
        tmpId?: number;
        /** 属性 */       
        attr?: any;
        /** 更新时间 */       
        uTime?: Date;
        /** 创建时间 */       
        cTime?: Date;
    }
    export const enum IGGEMPAPER {
        /** 用户uid */
        uid = "uid",
        /** 已获得图纸列表 */
        paperList = "paperList",
        /** 更新时间 */
        uTime = "uTime",
        /** 创建时间 */
        cTime = "cTime",
    } 
    export interface IGGemPaper {
        /** 用户uid */       
        uid?: number;
        /** 已获得图纸列表 */       
        paperList?: number[];
        /** 更新时间 */       
        uTime?: Date;
        /** 创建时间 */       
        cTime?: Date;
    }
    export const enum IGGEMSCHEME {
        /** 用户uid */
        uid = "uid",
        /** 方案编号ID */
        sNo = "sNo",
        /** 图纸ID */
        paperId = "paperId",
        /** 方案名字 */
        name = "name",
        /** 镶嵌列表 */
        inlayList = "inlayList",
        /** 宝石列表(模板ID) */
        gemIdList = "gemIdList",
        /** 属性 */
        attr = "attr",
        /** 更新时间 */
        uTime = "uTime",
        /** 创建时间 */
        cTime = "cTime",
    } 
    export interface IGGemScheme {
        /** 用户uid */       
        uid?: number;
        /** 方案编号ID */       
        sNo?: number;
        /** 图纸ID */       
        paperId?: number;
        /** 方案名字 */       
        name?: string;
        /** 镶嵌列表 */       
        inlayList?: number[];
        /** 宝石列表(模板ID) */       
        gemIdList?: number[];
        /** 属性 */       
        attr?: any;
        /** 更新时间 */       
        uTime?: Date;
        /** 创建时间 */       
        cTime?: Date;
    }
    export const enum IGSACRA {
        /** 用户uid */
        uid = "uid",
        /** 模板id */
        tmpId = "tmpId",
        /** 等级 */
        lvl = "lvl",
        /** 属性 */
        attr = "attr",
        /** 更新时间 */
        uTime = "uTime",
        /** 创建时间 */
        cTime = "cTime",
    } 
    export interface IGSacra {
        /** 用户uid */       
        uid?: number;
        /** 模板id */       
        tmpId?: number;
        /** 等级 */       
        lvl?: number;
        /** 属性 */       
        attr?: any;
        /** 更新时间 */       
        uTime?: Date;
        /** 创建时间 */       
        cTime?: Date;
    }
    export const enum IGSACRADRAWLOG {
        /** 用户uid */
        uid = "uid",
        /** msId */
        msId = "msId",
        /** 圣器抽奖表ID */
        tmpId = "tmpId",
        /** 道具列表[[圣器碎片ID,奖券数量],....] */
        items = "items",
        /** 创建时间 */
        cTime = "cTime",
    } 
    export interface IGSacraDrawLog {
        /** 用户uid */       
        uid?: number;
        /** msId */       
        msId?: number;
        /** 圣器抽奖表ID */       
        tmpId?: number;
        /** 道具列表[[圣器碎片ID,奖券数量],....] */       
        items?: number[][];
        /** 创建时间 */       
        cTime?: Date;
    }
    export const enum IGLUCKYLABA {
        /** 用户uid */
        uid = "uid",
        /** 下次抽奖倍数 */
        nextMulti = "nextMulti",
        /** 免费抽奖次数 */
        freeDraw = "freeDraw",
        /** 今日抽奖 */
        tdyDraw = "tdyDraw",
        /** 累计抽奖 */
        totDraw = "totDraw",
        /** 自选道具{id:num} */
        selectItems = "selectItems",
        /** 更新时间 */
        rTime = "rTime",
        /** 更新时间 */
        uTime = "uTime",
        /** 创建时间 */
        cTime = "cTime",
    } 
    export interface IGLuckyLaba {
        /** 用户uid */       
        uid?: number;
        /** 下次抽奖倍数 */       
        nextMulti?: number;
        /** 免费抽奖次数 */       
        freeDraw?: number;
        /** 今日抽奖 */       
        tdyDraw?: number;
        /** 累计抽奖 */       
        totDraw?: number;
        /** 自选道具{id:num} */       
        selectItems?: any;
        /** 更新时间 */       
        rTime?: Date;
        /** 更新时间 */       
        uTime?: Date;
        /** 创建时间 */       
        cTime?: Date;
    }
    export const enum IGLUCKYLABADRAWLOG {
        /** 用户uid */
        uid = "uid",
        /** msId */
        msId = "msId",
        /** 拉霸表ID */
        tmpId = "tmpId",
        /** 奖励类型 */
        rwdType = "rwdType",
        /** 道具列表 */
        items = "items",
        /** 创建时间 */
        cTime = "cTime",
    } 
    export interface IGLuckyLabaDrawLog {
        /** 用户uid */       
        uid?: number;
        /** msId */       
        msId?: number;
        /** 拉霸表ID */       
        tmpId?: number;
        /** 奖励类型 */       
        rwdType?: number;
        /** 道具列表 */       
        items?: any;
        /** 创建时间 */       
        cTime?: Date;
    }
    export const enum IGMINE {
        /** 用户uid */
        uid = "uid",
        /** 矿场等级 */
        lvl = "lvl",
        /** 矿洞等级 */
        holeLvl = "holeLvl",
        /** 矿洞数量 */
        holeCnt = "holeCnt",
        /** 哥布林心情值 */
        mood = "mood",
        /** 哥布林总数 */
        totMiner = "totMiner",
        /** 附近的人权重 */
        nearWgt = "nearWgt",
        /** 总采集次数 */
        totColCnt = "totColCnt",
        /** 总掠夺次数 */
        totRobCnt = "totRobCnt",
        /** 被掠夺次数 */
        beRobCnt = "beRobCnt",
        /** 今日拉取次数(采集和掠夺) */
        tdyPullCnt = "tdyPullCnt",
        /** 验证失败次数 */
        verifyFailCnt = "verifyFailCnt",
        /** 昨日心情值 */
        yesMood = "yesMood",
        /** 海岛皮肤 */
        skinId = "skinId",
        /** 哥布林皮肤 */
        minerSkinId = "minerSkinId",
        /** 用户名字 */
        uName = "uName",
        /** 用户头像 */
        uIco = "uIco",
        /** 雇佣哥布林信息 */
        employMiners = "employMiners",
        /** 掠夺的矿产编号列表 */
        rhGNoList = "rhGNoList",
        /** 矿产列表 */
        goodsList = "goodsList",
        /** 掠夺的矿石编号列表 */
        rhRNoList = "rhRNoList",
        /** 矿石列表 */
        rockList = "rockList",
        /** 索引ID列表 */
        idxList = "idxList",
        /** 上一次附近的玩家列表 */
        nearUids = "nearUids",
        /** 验证请求参数,有则表示需要验证 */
        verifyReqId = "verifyReqId",
        /** 属性 */
        attr = "attr",
        /** 刷新附近矿场时间,r=refresh */
        rNearTime = "rNearTime",
        /** 保护罩的过期时间,g=guard */
        gOverTime = "gOverTime",
        /** 产生日志的时间 */
        nLogTime = "nLogTime",
        /** 阅读日志的时间 */
        oLogTime = "oLogTime",
        /** 验证失败时间 */
        verifyFailTime = "verifyFailTime",
        /** 验证时间 */
        verifyTime = "verifyTime",
        /** 刷新时间 */
        rTime = "rTime",
        /** 更新时间 */
        uTime = "uTime",
        /** 创建时间 */
        cTime = "cTime",
        /** 驱逐成功的时间，以uid为key */
        deportSucMap = "deportSucMap",
        /** 驱逐失败的时间，以uid为key */
        deportFailMap = "deportFailMap",
    } 
    export interface IGMine {
        /** 用户uid */       
        uid?: number;
        /** 矿场等级 */       
        lvl?: number;
        /** 矿洞等级 */       
        holeLvl?: number;
        /** 矿洞数量 */       
        holeCnt?: number;
        /** 哥布林心情值 */       
        mood?: number;
        /** 哥布林总数 */       
        totMiner?: number;
        /** 附近的人权重 */       
        nearWgt?: number;
        /** 总采集次数 */       
        totColCnt?: number;
        /** 总掠夺次数 */       
        totRobCnt?: number;
        /** 被掠夺次数 */       
        beRobCnt?: number;
        /** 今日拉取次数(采集和掠夺) */       
        tdyPullCnt?: number;
        /** 验证失败次数 */       
        verifyFailCnt?: number;
        /** 昨日心情值 */       
        yesMood?: number;
        /** 海岛皮肤 */       
        skinId?: number;
        /** 哥布林皮肤 */       
        minerSkinId?: number;
        /** 用户名字 */       
        uName?: string;
        /** 用户头像 */       
        uIco?: string;
        /** 雇佣哥布林信息 */       
        employMiners?: any;
        /** 掠夺的矿产编号列表 */       
        rhGNoList?: any[];
        /** 矿产列表 */       
        goodsList?: any[];
        /** 掠夺的矿石编号列表 */       
        rhRNoList?: any[];
        /** 矿石列表 */       
        rockList?: any[];
        /** 索引ID列表 */       
        idxList?: number[];
        /** 上一次附近的玩家列表 */       
        nearUids?: number[];
        /** 验证请求参数,有则表示需要验证 */       
        verifyReqId?: string;
        /** 属性 */       
        attr?: any;
        /** 刷新附近矿场时间,r=refresh */       
        rNearTime?: Date;
        /** 保护罩的过期时间,g=guard */       
        gOverTime?: Date;
        /** 产生日志的时间 */       
        nLogTime?: Date;
        /** 阅读日志的时间 */       
        oLogTime?: Date;
        /** 验证失败时间 */       
        verifyFailTime?: Date;
        /** 验证时间 */       
        verifyTime?: Date;
        /** 刷新时间 */       
        rTime?: Date;
        /** 更新时间 */       
        uTime?: Date;
        /** 创建时间 */       
        cTime?: Date;
        /** 驱逐成功的时间，以uid为key */       
        deportSucMap?: any;
        /** 驱逐失败的时间，以uid为key */       
        deportFailMap?: any;
    }
    export const enum IGMINEGOODS {
        /** 矿产编号 */
        goodsNo = "goodsNo",
        /** 采集信息 */
        collect = "collect",
        /** 掠夺信息 */
        rob = "rob",
        /** 矿产模板ID */
        tmpId = "tmpId",
        /** 用户uid */
        uid = "uid",
        /** 索引位置 */
        idx = "idx",
        /** 当前位置 */
        pos = "pos",
        /** 总距离[方便查看] */
        dist = "dist",
        /** 是否预结算，为1表示预结算则会重新刷出矿产 */
        isPreEnd = "isPreEnd",
        /** 状态，由矿产拥有者设置 */
        status = "status",
        /** 是否被掠夺 */
        isBeRob = "isBeRob",
        /** 海岛皮肤 */
        skinId = "skinId",
        /** 操作时间 */
        opTime = "opTime",
        /** 领取时间 */
        recvTime = "recvTime",
        /** 结束时间 */
        eTime = "eTime",
        /** 更新时间 */
        uTime = "uTime",
        /** 创建时间 */
        cTime = "cTime",
    } 
    export interface IGMineGoods {
        /** 矿产编号 */       
        goodsNo?: string;
        /** 采集信息 */       
        collect?: any;
        /** 掠夺信息 */       
        rob?: any;
        /** 矿产模板ID */       
        tmpId?: number;
        /** 用户uid */       
        uid?: number;
        /** 索引位置 */       
        idx?: number;
        /** 当前位置 */       
        pos?: number;
        /** 总距离[方便查看] */       
        dist?: number;
        /** 是否预结算，为1表示预结算则会重新刷出矿产 */       
        isPreEnd?: number;
        /** 状态，由矿产拥有者设置 */       
        status?: number;
        /** 是否被掠夺 */       
        isBeRob?: number;
        /** 海岛皮肤 */       
        skinId?: number;
        /** 操作时间 */       
        opTime?: Date;
        /** 领取时间 */       
        recvTime?: Date;
        /** 结束时间 */       
        eTime?: Date;
        /** 更新时间 */       
        uTime?: Date;
        /** 创建时间 */       
        cTime?: Date;
    }
    export const enum IGMINEROCK {
        /** 矿石编号 */
        rockNo = "rockNo",
        /** 开采信息 */
        collect = "collect",
        /** 掠夺信息 */
        rob = "rob",
        /** 用户uid */
        uid = "uid",
        /** 索引位置 */
        idx = "idx",
        /** 矿石等级 */
        lvl = "lvl",
        /** 当前数量 */
        amount = "amount",
        /** 总数量 */
        totAmount = "totAmount",
        /** 是否开采中 */
        isOper = "isOper",
        /** 矿石状态 */
        status = "status",
        /** 是否已领,拥有者设置 */
        isRecv = "isRecv",
        /** 是否结束 */
        isEnd = "isEnd",
        /** 海岛皮肤 */
        skinId = "skinId",
        /** 领取时间 */
        recvTime = "recvTime",
        /** 结束时间 */
        eTime = "eTime",
        /** 更新时间 */
        uTime = "uTime",
        /** 创建时间 */
        cTime = "cTime",
    } 
    export interface IGMineRock {
        /** 矿石编号 */       
        rockNo?: string;
        /** 开采信息 */       
        collect?: any;
        /** 掠夺信息 */       
        rob?: any;
        /** 用户uid */       
        uid?: number;
        /** 索引位置 */       
        idx?: number;
        /** 矿石等级 */       
        lvl?: number;
        /** 当前数量 */       
        amount?: number;
        /** 总数量 */       
        totAmount?: number;
        /** 是否开采中 */       
        isOper?: number;
        /** 矿石状态 */       
        status?: number;
        /** 是否已领,拥有者设置 */       
        isRecv?: number;
        /** 是否结束 */       
        isEnd?: number;
        /** 海岛皮肤 */       
        skinId?: number;
        /** 领取时间 */       
        recvTime?: Date;
        /** 结束时间 */       
        eTime?: Date;
        /** 更新时间 */       
        uTime?: Date;
        /** 创建时间 */       
        cTime?: Date;
    }
    export const enum IGMINEINCOME {
        /** 玩家ID */
        uid = "uid",
        /** 时间戳 */
        msId = "msId",
        /** 被抢玩家ID */
        bUid = "bUid",
        /** 当前收益 */
        income = "income",
        /** 创建时间 */
        cTime = "cTime",
    } 
    export interface IGMineIncome {
        /** 玩家ID */       
        uid?: number;
        /** 时间戳 */       
        msId?: number;
        /** 被抢玩家ID */       
        bUid?: number;
        /** 当前收益 */       
        income?: number;
        /** 创建时间 */       
        cTime?: Date;
    }
    export const enum IGMINEENEMY {
        /** 用户uid */
        uid = "uid",
        /** 仇人uid */
        eUid = "eUid",
        /** 更新时间 */
        uTime = "uTime",
        /** 创建时间 */
        cTime = "cTime",
    } 
    export interface IGMineEnemy {
        /** 用户uid */       
        uid?: number;
        /** 仇人uid */       
        eUid?: number;
        /** 更新时间 */       
        uTime?: Date;
        /** 创建时间 */       
        cTime?: Date;
    }
    export const enum IGMINELOG {
        /** 用户uid */
        uid = "uid",
        /** msId */
        msId = "msId",
        /** 日志表ID */
        diaryId = "diaryId",
        /** 数据参数 */
        data = "data",
        /** 更新时间 */
        uTime = "uTime",
        /** 创建时间 */
        cTime = "cTime",
    } 
    export interface IGMineLog {
        /** 用户uid */       
        uid?: number;
        /** msId */       
        msId?: number;
        /** 日志表ID */       
        diaryId?: number;
        /** 数据参数 */       
        data?: any;
        /** 更新时间 */       
        uTime?: Date;
        /** 创建时间 */       
        cTime?: Date;
    }
    export const enum IGMINESKIN {
        /** 用户ID */
        uid = "uid",
        /** 皮肤ID */
        tmpId = "tmpId",
        /** 等级 */
        lvl = "lvl",
        /** 属性 */
        attr = "attr",
        /** 更新时间 */
        uTime = "uTime",
        /** 创建时间 */
        cTime = "cTime",
    } 
    export interface IGMineSkin {
        /** 用户ID */       
        uid?: number;
        /** 皮肤ID */       
        tmpId?: number;
        /** 等级 */       
        lvl?: number;
        /** 属性 */       
        attr?: any;
        /** 更新时间 */       
        uTime?: Date;
        /** 创建时间 */       
        cTime?: Date;
    }
    export const enum IGSUBSCRIBE {
        /** 用户uid */
        uid = "uid",
        /** 类型 */
        type = "type",
        /** 订阅次数 */
        subscribeNum = "subscribeNum",
        /** 更新时间 */
        uTime = "uTime",
        /** 创建时间 */
        cTime = "cTime",
    } 
    export interface IGSubscribe {
        /** 用户uid */       
        uid?: number;
        /** 类型 */       
        type?: number;
        /** 订阅次数 */       
        subscribeNum?: number;
        /** 更新时间 */       
        uTime?: Date;
        /** 创建时间 */       
        cTime?: Date;
    }
    export const enum IGSUBSCRIBEJOB {
        /** 玩家ID */
        uid = "uid",
        /** 渠道ID */
        chnId = "chnId",
        /** 订阅类型 */
        type = "type",
        /** 开放者ID */
        openId = "openId",
        /** 订阅参数 */
        param = "param",
        /** 推送时间 */
        pTime = "pTime",
        /** 更新时间 */
        uTime = "uTime",
        /** 创建时间 */
        cTime = "cTime",
    } 
    export interface IGSubscribeJob {
        /** 玩家ID */       
        uid?: number;
        /** 渠道ID */       
        chnId?: number;
        /** 订阅类型 */       
        type?: number;
        /** 开放者ID */       
        openId?: string;
        /** 订阅参数 */       
        param?: any;
        /** 推送时间 */       
        pTime?: Date;
        /** 更新时间 */       
        uTime?: Date;
        /** 创建时间 */       
        cTime?: Date;
    }
    export const enum IGMSGNOTIFYJOB {
        /** 玩家ID */
        uid = "uid",
        /** 渠道ID */
        chnId = "chnId",
        /** 推送类型 */
        type = "type",
        /** 开放者ID */
        openId = "openId",
        /** 玩家语言 */
        lang = "lang",
        /** 模板名称 */
        tmpName = "tmpName",
        /** 订阅参数 */
        param = "param",
        /** 推送时间 */
        pTime = "pTime",
        /** 更新时间 */
        uTime = "uTime",
        /** 创建时间 */
        cTime = "cTime",
    } 
    export interface IGMsgNotifyJob {
        /** 玩家ID */       
        uid?: number;
        /** 渠道ID */       
        chnId?: number;
        /** 推送类型 */       
        type?: number;
        /** 开放者ID */       
        openId?: string;
        /** 玩家语言 */       
        lang?: string;
        /** 模板名称 */       
        tmpName?: string;
        /** 订阅参数 */       
        param?: any;
        /** 推送时间 */       
        pTime?: Date;
        /** 更新时间 */       
        uTime?: Date;
        /** 创建时间 */       
        cTime?: Date;
    }
    export const enum IGCHATREPORT {
        /** 用户ID */
        uid = "uid",
        /** 值 */
        value = "value",
        /** 举报时间 */
        uTime = "uTime",
    } 
    export interface IGChatReport {
        /** 用户ID */       
        uid?: number;
        /** 值 */       
        value?: string;
        /** 举报时间 */       
        uTime?: Date;
    }
    export const enum IGICOFRM {
        /** 用户ID */
        uid = "uid",
        /** 历史激活头像框列表 */
        icoFrmList = "icoFrmList",
        /** 激活头像框映射{头像框ID:等级} */
        icoFrmMap = "icoFrmMap",
        /** 更新时间 */
        uTime = "uTime",
        /** 创建时间 */
        cTime = "cTime",
    } 
    export interface IGIcoFrm {
        /** 用户ID */       
        uid?: number;
        /** 历史激活头像框列表 */       
        icoFrmList?: string[];
        /** 激活头像框映射{头像框ID:等级} */       
        icoFrmMap?: any;
        /** 更新时间 */       
        uTime?: Date;
        /** 创建时间 */       
        cTime?: Date;
    }
    export const enum IGBUBBLE {
        /** 用户ID */
        uid = "uid",
        /** 历史激活聊天气泡框列表 */
        bubbleList = "bubbleList",
        /** 激活聊天气泡框映射{气泡框ID:等级} */
        bubbleMap = "bubbleMap",
        /** 更新时间 */
        uTime = "uTime",
        /** 创建时间 */
        cTime = "cTime",
    } 
    export interface IGBubble {
        /** 用户ID */       
        uid?: number;
        /** 历史激活聊天气泡框列表 */       
        bubbleList?: number[];
        /** 激活聊天气泡框映射{气泡框ID:等级} */       
        bubbleMap?: any;
        /** 更新时间 */       
        uTime?: Date;
        /** 创建时间 */       
        cTime?: Date;
    }
    export const enum IGTASKMAIN {
        /** 玩家ID */
        uid = "uid",
        /** 主线任务版本 */
        ver = "ver",
        /** 主线进度 */
        progress = "progress",
        /** 领取结果 */
        recvMap = "recvMap",
        /** 更新时间 */
        uTime = "uTime",
        /** 创建时间 */
        cTime = "cTime",
    } 
    export interface IGTaskMain {
        /** 玩家ID */       
        uid?: number;
        /** 主线任务版本 */       
        ver?: number;
        /** 主线进度 */       
        progress?: {[taskId:number]:number};
        /** 领取结果 */       
        recvMap?: {[taskId:number]:number};
        /** 更新时间 */       
        uTime?: Date;
        /** 创建时间 */       
        cTime?: Date;
    }
    export const enum IGTASKDLY {
        /** 玩家ID */
        uid = "uid",
        /** 任务活跃值 */
        vital = "vital",
        /** 日常进度 */
        progress = "progress",
        /** 领取结果 */
        recvMap = "recvMap",
        /** 任务活跃值宝箱领取记录 */
        vitalBoxs = "vitalBoxs",
        /** 任务活跃值获得映射{YYYYMMDD:100} */
        vitalGotMap = "vitalGotMap",
        /** 更新时间 */
        uTime = "uTime",
        /** 创建时间 */
        cTime = "cTime",
    } 
    export interface IGTaskDly {
        /** 玩家ID */       
        uid?: number;
        /** 任务活跃值 */       
        vital?: number;
        /** 日常进度 */       
        progress?: {[bizType:number]:number};
        /** 领取结果 */       
        recvMap?: {[bizType:number]:any};
        /** 任务活跃值宝箱领取记录 */       
        vitalBoxs?: any[];
        /** 任务活跃值获得映射{YYYYMMDD:100} */       
        vitalGotMap?: {[day:number]:number};
        /** 更新时间 */       
        uTime?: Date;
        /** 创建时间 */       
        cTime?: Date;
    }
    export const enum IGTASKACH {
        /** 玩家ID */
        uid = "uid",
        /** 成就进度 */
        progress = "progress",
        /** 领取结果 */
        recvMap = "recvMap",
        /** 更新时间 */
        uTime = "uTime",
        /** 创建时间 */
        cTime = "cTime",
    } 
    export interface IGTaskAch {
        /** 玩家ID */       
        uid?: number;
        /** 成就进度 */       
        progress?: {[bizType:number]:number};
        /** 领取结果 */       
        recvMap?: {[bizType:number]:any};
        /** 更新时间 */       
        uTime?: Date;
        /** 创建时间 */       
        cTime?: Date;
    }
    export const enum IGTASKINV {
        /** 玩家ID */
        uid = "uid",
        /** 投资进度 */
        progress = "progress",
        /** 领取结果 */
        recvMap = "recvMap",
        /** 付费领取结果 */
        payRecvMap = "payRecvMap",
        /** 更新时间 */
        uTime = "uTime",
        /** 创建时间 */
        cTime = "cTime",
    } 
    export interface IGTaskInv {
        /** 玩家ID */       
        uid?: number;
        /** 投资进度 */       
        progress?: {[type:number]:number};
        /** 领取结果 */       
        recvMap?: {[taskId:number]:number};
        /** 付费领取结果 */       
        payRecvMap?: {[taskId:number]:number};
        /** 更新时间 */       
        uTime?: Date;
        /** 创建时间 */       
        cTime?: Date;
    }
    export const enum IGSHOP {
        /** 玩家ID */
        uid = "uid",
        /** 商店类型 */
        type = "type",
        /** 物品刷新次数 */
        itemRCnt = "itemRCnt",
        /** 物品刷新次数 */
        itemRCnt_pro = "itemRCnt_pro",
        /** 批次ID */
        batchId = "batchId",
        /** 物品列表(部分商店的购买列表为服务端生成) */
        items = "items",
        /** 每日购买记录 */
        buyRecord = "buyRecord",
        /** 每周购买记录 */
        weekRecord = "weekRecord",
        /** 每月购买记录 */
        monthRecord = "monthRecord",
        /** 总计购买记录 */
        totRecord = "totRecord",
        /** 批次购买记录 */
        batchRecord = "batchRecord",
        /** 物品免费刷新时间 */
        itemRFTime = "itemRFTime",
        /** 物品免费刷新时间 */
        itemRFTime_pro = "itemRFTime_pro",
        /** 刷新时间 */
        rTime = "rTime",
        /** 更新时间 */
        uTime = "uTime",
        /** 创建时间 */
        cTime = "cTime",
    } 
    export interface IGShop {
        /** 玩家ID */       
        uid?: number;
        /** 商店类型 */       
        type?: number;
        /** 物品刷新次数 */       
        itemRCnt?: number;
        /** 物品刷新次数 */       
        itemRCnt_pro?: number;
        /** 批次ID */       
        batchId?: number;
        /** 物品列表(部分商店的购买列表为服务端生成) */       
        items?: any[];
        /** 每日购买记录 */       
        buyRecord?: any;
        /** 每周购买记录 */       
        weekRecord?: any;
        /** 每月购买记录 */       
        monthRecord?: any;
        /** 总计购买记录 */       
        totRecord?: any;
        /** 批次购买记录 */       
        batchRecord?: any;
        /** 物品免费刷新时间 */       
        itemRFTime?: Date;
        /** 物品免费刷新时间 */       
        itemRFTime_pro?: Date;
        /** 刷新时间 */       
        rTime?: Date;
        /** 更新时间 */       
        uTime?: Date;
        /** 创建时间 */       
        cTime?: Date;
    }
    export const enum IGRCHG {
        /** 游戏订单号 */
        orderNo = "orderNo",
        /** type指定模式下对应的值，例如type为活动类型，那么这个值表示的就是活动的id */
        value = "value",
        /** 获得的物品 */
        gain = "gain",
        /** 玩家ID */
        uid = "uid",
        /** 充值项ID */
        rid = "rid",
        /** 目的是为了做折扣模式的时候，在实际支付是会切换为其他的充值项的需求 */
        rid_pay = "rid_pay",
        /** 在折扣模式下的时候，这个值会按照实际充值时候的折扣充值项的来走 */
        cny = "cny",
        /** 暴击类型 */
        critType = "critType",
        /** 为了方便统计累天充值 */
        sendYMD = "sendYMD",
        /** 用户拉起充值请求的时间 */
        reqTime = "reqTime",
        /** cp接收到平台的支付回调的时间 */
        sdkTime = "sdkTime",
        /** 游戏进行发货的时间 */
        sendTime = "sendTime",
    } 
    export interface IGRchg {
        /** 游戏订单号 */       
        orderNo?: string;
        /** type指定模式下对应的值，例如type为活动类型，那么这个值表示的就是活动的id */       
        value?: string;
        /** 获得的物品 */       
        gain?: any;
        /** 玩家ID */       
        uid?: number;
        /** 充值项ID */       
        rid?: number;
        /** 目的是为了做折扣模式的时候，在实际支付是会切换为其他的充值项的需求 */       
        rid_pay?: number;
        /** 在折扣模式下的时候，这个值会按照实际充值时候的折扣充值项的来走 */       
        cny?: number;
        /** 暴击类型 */       
        critType?: number;
        /** 为了方便统计累天充值 */       
        sendYMD?: number;
        /** 用户拉起充值请求的时间 */       
        reqTime?: Date;
        /** cp接收到平台的支付回调的时间 */       
        sdkTime?: Date;
        /** 游戏进行发货的时间 */       
        sendTime?: Date;
    }
    export const enum IGRCHGCARD {
        /** 玩家ID */
        uid = "uid",
        /** 复用g_rechg_req中的type中的card_xxx部分的类型 */
        type = "type",
        /** 是否已经充值过了主卡(永久卡) */
        isMain = "isMain",
        /** 是否充值获得 */
        isPay = "isPay",
        /** 是一个数组格式，里面每个元素记录的是领取的时间点。如：["2016-06-01 10:00:00",1] */
        receiveList = "receiveList",
        /** 最后一次领取时间 */
        receiveTime = "receiveTime",
        /** 充值卡到期时间 */
        invalidTime = "invalidTime",
        /** 创建时间 */
        cTime = "cTime",
    } 
    export interface IGRchgCard {
        /** 玩家ID */       
        uid?: number;
        /** 复用g_rechg_req中的type中的card_xxx部分的类型 */       
        type?: number;
        /** 是否已经充值过了主卡(永久卡) */       
        isMain?: number;
        /** 是否充值获得 */       
        isPay?: number;
        /** 是一个数组格式，里面每个元素记录的是领取的时间点。如：["2016-06-01 10:00:00",1] */       
        receiveList?: any[];
        /** 最后一次领取时间 */       
        receiveTime?: Date;
        /** 充值卡到期时间 */       
        invalidTime?: Date;
        /** 创建时间 */       
        cTime?: Date;
    }
    export const enum IGRCHGDAY {
        /** 玩家ID */
        uid = "uid",
        /** 充值天数 */
        totDays = "totDays",
        /** 领取进度 */
        progress = "progress",
        /** 充值天数列表 */
        rchgLog = "rchgLog",
        /** 开始时间 */
        sTime = "sTime",
        /** 结束时间 */
        eTime = "eTime",
        /** 更新时间 */
        uTime = "uTime",
        /** 创建时间 */
        cTime = "cTime",
    } 
    export interface IGRchgDay {
        /** 玩家ID */       
        uid?: number;
        /** 充值天数 */       
        totDays?: number;
        /** 领取进度 */       
        progress?: any;
        /** 充值天数列表 */       
        rchgLog?: string[];
        /** 开始时间 */       
        sTime?: Date;
        /** 结束时间 */       
        eTime?: Date;
        /** 更新时间 */       
        uTime?: Date;
        /** 创建时间 */       
        cTime?: Date;
    }
    export const enum IGRCHGDAYHIST {
        /** 玩家ID */
        uid = "uid",
        /** 记录时间戳 */
        msId = "msId",
        /** 充值天数 */
        totDays = "totDays",
        /** 是否已经发放邮件 */
        isMail = "isMail",
        /** 领取进度 */
        progress = "progress",
        /** 充值天数列表 */
        rchgLog = "rchgLog",
        /** 开始时间 */
        sTime = "sTime",
        /** 结束时间 */
        eTime = "eTime",
        /** 更新时间 */
        uTime = "uTime",
        /** 创建时间 */
        cTime = "cTime",
    } 
    export interface IGRchgDayHist {
        /** 玩家ID */       
        uid?: number;
        /** 记录时间戳 */       
        msId?: number;
        /** 充值天数 */       
        totDays?: number;
        /** 是否已经发放邮件 */       
        isMail?: number;
        /** 领取进度 */       
        progress?: any;
        /** 充值天数列表 */       
        rchgLog?: string[];
        /** 开始时间 */       
        sTime?: Date;
        /** 结束时间 */       
        eTime?: Date;
        /** 更新时间 */       
        uTime?: Date;
        /** 创建时间 */       
        cTime?: Date;
    }
    export const enum IGRCHGPOPBAG {
        /** 用户uid */
        uid = "uid",
        /** 礼包待购买记录 */
        buyMap = "buyMap",
        /** 拉起礼包列表 */
        pullBagList = "pullBagList",
        /** 刷新时间 */
        rTime = "rTime",
        /** 更新时间 */
        uTime = "uTime",
        /** 创建时间 */
        cTime = "cTime",
    } 
    export interface IGRchgPopBag {
        /** 用户uid */       
        uid?: number;
        /** 礼包待购买记录 */       
        buyMap?: any;
        /** 拉起礼包列表 */       
        pullBagList?: any[];
        /** 刷新时间 */       
        rTime?: Date;
        /** 更新时间 */       
        uTime?: Date;
        /** 创建时间 */       
        cTime?: Date;
    }
    export const enum IGRCHGEXT {
        /** 玩家ID */
        uid = "uid",
        /** 领取类型 */
        type = "type",
        /** 领取进度 */
        progress = "progress",
        /** 已领取的ID列表 */
        recvIds = "recvIds",
        /** 拓展字段 */
        ext = "ext",
        /** 更新时间 */
        uTime = "uTime",
        /** 创建时间 */
        cTime = "cTime",
    } 
    export interface IGRchgExt {
        /** 玩家ID */       
        uid?: number;
        /** 领取类型 */       
        type?: number;
        /** 领取进度 */       
        progress?: any;
        /** 已领取的ID列表 */       
        recvIds?: number[];
        /** 拓展字段 */       
        ext?: any;
        /** 更新时间 */       
        uTime?: Date;
        /** 创建时间 */       
        cTime?: Date;
    }
    export const enum IGMAIL {
        /** 玩家ID */
        uid = "uid",
        /** msId */
        msId = "msId",
        /** g_mail_all的ID */
        allId = "allId",
        /** 模式 */
        mode = "mode",
        /** 邮件模板ID */
        tmpId = "tmpId",
        /** 0表示全渠道 */
        chnId = "chnId",
        /** 玩家等级 */
        lvl = "lvl",
        /** 玩家vip等级 */
        vip = "vip",
        /** 设备系统类型 */
        osType = "osType",
        /** runtime类型 */
        rtType = "rtType",
        /** 阅读后几分钟删除 */
        readDelHours = "readDelHours",
        /** 是否自己删除了邮件 */
        isDel = "isDel",
        /** 是否已读 */
        isRead = "isRead",
        /** 是否操作 */
        isOper = "isOper",
        /** 是否已领 */
        isPick = "isPick",
        /** 邮件名称 */
        tmpName = "tmpName",
        /** 参数 */
        param = "param",
        /** 物品 */
        items = "items",
        /** 限时称号在邮件添加时实时保存到称号表中 */
        tTitle = "tTitle",
        /** 阅读后存活时间, ST是Survival Time的缩写，意思是生存时间 */
        read_st = "read_st",
        /** 操作后存活时间, ST是Survival Time的缩写，意思是生存时间 */
        oper_st = "oper_st",
        /** 拓展字段 */
        ext = "ext",
        /** 添加时间 */
        cTime = "cTime",
        /** 结束时间 */
        eTime = "eTime",
        /** 被玩家删除的时间 */
        dTime = "dTime",
        /** 邮件读取时间 */
        rTime = "rTime",
        /** 点击了详情按钮之类的 */
        oTime = "oTime",
        /** 附件领取时间 */
        pTime = "pTime",
    } 
    export interface IGMail {
        /** 玩家ID */       
        uid?: number;
        /** msId */       
        msId?: number;
        /** g_mail_all的ID */       
        allId?: number;
        /** 模式 */       
        mode?: number;
        /** 邮件模板ID */       
        tmpId?: number;
        /** 0表示全渠道 */       
        chnId?: number;
        /** 玩家等级 */       
        lvl?: number;
        /** 玩家vip等级 */       
        vip?: number;
        /** 设备系统类型 */       
        osType?: number;
        /** runtime类型 */       
        rtType?: number;
        /** 阅读后几分钟删除 */       
        readDelHours?: number;
        /** 是否自己删除了邮件 */       
        isDel?: number;
        /** 是否已读 */       
        isRead?: number;
        /** 是否操作 */       
        isOper?: number;
        /** 是否已领 */       
        isPick?: number;
        /** 邮件名称 */       
        tmpName?: string;
        /** 参数 */       
        param?: any;
        /** 物品 */       
        items?: any;
        /** 限时称号在邮件添加时实时保存到称号表中 */       
        tTitle?: number[];
        /** 阅读后存活时间, ST是Survival Time的缩写，意思是生存时间 */       
        read_st?: string;
        /** 操作后存活时间, ST是Survival Time的缩写，意思是生存时间 */       
        oper_st?: string;
        /** 拓展字段 */       
        ext?: any;
        /** 添加时间 */       
        cTime?: Date;
        /** 结束时间 */       
        eTime?: Date;
        /** 被玩家删除的时间 */       
        dTime?: Date;
        /** 邮件读取时间 */       
        rTime?: Date;
        /** 点击了详情按钮之类的 */       
        oTime?: Date;
        /** 附件领取时间 */       
        pTime?: Date;
    }
    export const enum IGFML {
        /** 家族ID */
        id = "id",
        /** 创建者的uid */
        cuid = "cuid",
        /** 创建者对应的分服下标 */
        gsIdx = "gsIdx",
        /** 是否允许申请自动加入 */
        autoJoin = "autoJoin",
        /** 是否允许搜索 */
        canSearch = "canSearch",
        /** 状态 */
        status = "status",
        /** 等级 */
        lvl = "lvl",
        /** 经验 */
        lvlExp = "lvlExp",
        /** 商会总贡献 */
        ctb = "ctb",
        /** 商会总属性 */
        cmt = "cmt",
        /** 成员人数 */
        mbCnt = "mbCnt",
        /** 商会7日活跃 */
        active = "active",
        /** 会长id */
        mstUid = "mstUid",
        /** 会长等级 */
        mstLvl = "mstLvl",
        /** 是否需要改变会长 */
        needChgMaster = "needChgMaster",
        /** boss开启次数 */
        bossOpenNum = "bossOpenNum",
        /** 击败的最大副本ID */
        maxKilledCopyId = "maxKilledCopyId",
        /** 是否处于封禁状态 */
        isBan = "isBan",
        /** 商会名称 */
        name = "name",
        /** 商会解散密码 */
        pwd = "pwd",
        /** 商会旗帜 */
        ico = "ico",
        /** 商会公告-对内 */
        iNotice = "iNotice",
        /** 商会公告-对外 */
        oNotice = "oNotice",
        /** 表达式：cnd|jsonStr */
        joinCnd = "joinCnd",
        /** 会长名字 */
        mstName = "mstName",
        /** 会长头像 */
        mstIco = "mstIco",
        /** 建设类型作为key */
        bldCountMap = "bldCountMap",
        /** 临时字段避免建立过多的数据结构 */
        ext = "ext",
        /** 创建时间 */
        cTime = "cTime",
        /** 解散时间 */
        dTime = "dTime",
        /** 建设时间 */
        bldTime = "bldTime",
        /** 手动转让会长CD时间 */
        chgMasterTime = "chgMasterTime",
        /** 火热招募结束时间 */
        hotRecTime = "hotRecTime",
        /** boss开启时间 */
        bossOpenTime = "bossOpenTime",
        /** 自动开启副本重置时间 */
        copyResetTime = "copyResetTime",
    } 
    export interface IGFml {
        /** 家族ID */       
        id?: number;
        /** 创建者的uid */       
        cuid?: number;
        /** 创建者对应的分服下标 */       
        gsIdx?: number;
        /** 是否允许申请自动加入 */       
        autoJoin?: number;
        /** 是否允许搜索 */       
        canSearch?: number;
        /** 状态 */       
        status?: number;
        /** 等级 */       
        lvl?: number;
        /** 经验 */       
        lvlExp?: number;
        /** 商会总贡献 */       
        ctb?: number;
        /** 商会总属性 */       
        cmt?: number;
        /** 成员人数 */       
        mbCnt?: number;
        /** 商会7日活跃 */       
        active?: number;
        /** 会长id */       
        mstUid?: number;
        /** 会长等级 */       
        mstLvl?: number;
        /** 是否需要改变会长 */       
        needChgMaster?: number;
        /** boss开启次数 */       
        bossOpenNum?: number;
        /** 击败的最大副本ID */       
        maxKilledCopyId?: number;
        /** 是否处于封禁状态 */       
        isBan?: number;
        /** 商会名称 */       
        name?: string;
        /** 商会解散密码 */       
        pwd?: string;
        /** 商会旗帜 */       
        ico?: string;
        /** 商会公告-对内 */       
        iNotice?: string;
        /** 商会公告-对外 */       
        oNotice?: string;
        /** 表达式：cnd|jsonStr */       
        joinCnd?: string;
        /** 会长名字 */       
        mstName?: string;
        /** 会长头像 */       
        mstIco?: string;
        /** 建设类型作为key */       
        bldCountMap?: any;
        /** 临时字段避免建立过多的数据结构 */       
        ext?: any;
        /** 创建时间 */       
        cTime?: Date;
        /** 解散时间 */       
        dTime?: Date;
        /** 建设时间 */       
        bldTime?: Date;
        /** 手动转让会长CD时间 */       
        chgMasterTime?: Date;
        /** 火热招募结束时间 */       
        hotRecTime?: Date;
        /** boss开启时间 */       
        bossOpenTime?: Date;
        /** 自动开启副本重置时间 */       
        copyResetTime?: Date;
    }
    export const enum IGFMLEXT {
        /** 家族ID */
        fid = "fid",
        /** key */
        k = "k",
        /** value */
        v = "v",
    } 
    export interface IGFmlExt {
        /** 家族ID */       
        fid?: number;
        /** key */       
        k?: string;
        /** value */       
        v?: any;
    }
    export const enum IGFMLCHGHIST {
        /** 家族ID */
        fid = "fid",
        /** 操作用户的uid */
        operUid = "operUid",
        /** msId */
        msId = "msId",
        /** 被操作的目标用户的uid */
        dstUid = "dstUid",
        /** 变更类型 */
        type = "type",
        /** 操作用户名字 */
        operUname = "operUname",
        /** 被操作的目标用户名字 */
        dstUname = "dstUname",
        /** 格式为{bldName:?, itemDesc:?, copyName:?...} */
        data = "data",
        /** 记录时间 */
        cTime = "cTime",
    } 
    export interface IGFmlChgHist {
        /** 家族ID */       
        fid?: number;
        /** 操作用户的uid */       
        operUid?: number;
        /** msId */       
        msId?: number;
        /** 被操作的目标用户的uid */       
        dstUid?: number;
        /** 变更类型 */       
        type?: number;
        /** 操作用户名字 */       
        operUname?: string;
        /** 被操作的目标用户名字 */       
        dstUname?: string;
        /** 格式为{bldName:?, itemDesc:?, copyName:?...} */       
        data?: any;
        /** 记录时间 */       
        cTime?: Date;
    }
    export const enum IGFMLAPPLY {
        /** 玩家ID */
        uid = "uid",
        /** 家族ID */
        fid = "fid",
        /** msId */
        msId = "msId",
        /** 状态 */
        status = "status",
        /** 操作者的uid */
        operUid = "operUid",
        /** 申请理由 */
        reason = "reason",
        /** 操作时间 */
        operTime = "operTime",
    } 
    export interface IGFmlApply {
        /** 玩家ID */       
        uid?: number;
        /** 家族ID */       
        fid?: number;
        /** msId */       
        msId?: number;
        /** 状态 */       
        status?: number;
        /** 操作者的uid */       
        operUid?: number;
        /** 申请理由 */       
        reason?: string;
        /** 操作时间 */       
        operTime?: Date;
    }
    export const enum IGFMLMB {
        /** 玩家ID */
        uid = "uid",
        /** 家族ID */
        fid = "fid",
        /** 职位 */
        pos = "pos",
        /** 用于家族商店相关物品的购买 */
        ctb = "ctb",
        /** 对于当前的家族而言，重进其他家族的时候会清空掉 */
        curCtb = "curCtb",
        /** 对于当前的家族而言，重进其他家族的时候会清空掉 */
        tdyCtb = "tdyCtb",
        /** 退出类型 */
        qType = "qType",
        /** 7日活跃值 */
        active = "active",
        /** 加入时间 */
        jTime = "jTime",
        /** 退出时间 */
        qTime = "qTime",
        /** 建设时间 */
        bldTime = "bldTime",
        /** 建设id作为key */
        bldCountMap = "bldCountMap",
    } 
    export interface IGFmlMb {
        /** 玩家ID */       
        uid?: number;
        /** 家族ID */       
        fid?: number;
        /** 职位 */       
        pos?: number;
        /** 用于家族商店相关物品的购买 */       
        ctb?: number;
        /** 对于当前的家族而言，重进其他家族的时候会清空掉 */       
        curCtb?: number;
        /** 对于当前的家族而言，重进其他家族的时候会清空掉 */       
        tdyCtb?: number;
        /** 退出类型 */       
        qType?: number;
        /** 7日活跃值 */       
        active?: number;
        /** 加入时间 */       
        jTime?: Date;
        /** 退出时间 */       
        qTime?: Date;
        /** 建设时间 */       
        bldTime?: Date;
        /** 建设id作为key */       
        bldCountMap?: any;
    }
    export const enum IGFMLCOPY {
        /** 家族ID */
        fid = "fid",
        /** 副本模板ID */
        tmpId = "tmpId",
        /** 副本初始血量 */
        initHp = "initHp",
        /** 副本血量 */
        hp = "hp",
        /** 副本状态 */
        status = "status",
        /** 是否是最后一个副本 */
        isLast = "isLast",
        /** 是否自动开启 */
        isAuto = "isAuto",
        /** 伤害记录 */
        hurtRecord = "hurtRecord",
        /** 上次伤害记录 */
        hurtRecord_last = "hurtRecord_last",
        /** 开启时间 */
        openTime = "openTime",
        /** 用于判断是否更新成功 */
        __uk = "__uk",
    } 
    export interface IGFmlCopy {
        /** 家族ID */       
        fid?: number;
        /** 副本模板ID */       
        tmpId?: number;
        /** 副本初始血量 */       
        initHp?: number;
        /** 副本血量 */       
        hp?: number;
        /** 副本状态 */       
        status?: number;
        /** 是否是最后一个副本 */       
        isLast?: number;
        /** 是否自动开启 */       
        isAuto?: number;
        /** 伤害记录 */       
        hurtRecord?: {[uid: number]: any};
        /** 上次伤害记录 */       
        hurtRecord_last?: {[uid: number]: any};
        /** 开启时间 */       
        openTime?: Date;
        /** 用于判断是否更新成功 */       
        __uk?: string;
    }
    export const enum IGASSIST {
        /** 玩家ID */
        uid = "uid",
        /** 类型 */
        type = "type",
        /** 日期(天)20220325 */
        day = "day",
        /** 公会ID */
        fid = "fid",
        /** 名称 */
        name = "name",
        /** 头像 */
        ico = "ico",
        /** 协助者信息 */
        assistInfoList = "assistInfoList",
        /** 更新时间 */
        uTime = "uTime",
        /** 创建时间 */
        cTime = "cTime",
    } 
    export interface IGAssist {
        /** 玩家ID */       
        uid?: number;
        /** 类型 */       
        type?: number;
        /** 日期(天)20220325 */       
        day?: number;
        /** 公会ID */       
        fid?: number;
        /** 名称 */       
        name?: string;
        /** 头像 */       
        ico?: string;
        /** 协助者信息 */       
        assistInfoList?: number[][];
        /** 更新时间 */       
        uTime?: Date;
        /** 创建时间 */       
        cTime?: Date;
    }
    export const enum IGINVITE {
        /** 玩家ID */
        uid = "uid",
        /** 邀请的好友人数 */
        frdNum = "frdNum",
        /** 领取好友数量奖励映射 */
        recvFrdNum = "recvFrdNum",
        /** 更新时间 */
        uTime = "uTime",
        /** 创建时间 */
        cTime = "cTime",
    } 
    export interface IGInvite {
        /** 玩家ID */       
        uid?: number;
        /** 邀请的好友人数 */       
        frdNum?: number;
        /** 领取好友数量奖励映射 */       
        recvFrdNum?: any;
        /** 更新时间 */       
        uTime?: Date;
        /** 创建时间 */       
        cTime?: Date;
    }
    export const enum IGBLESS {
        /** 玩家id */
        uid = "uid",
        /** 祝福类型 */
        type = "type",
        /** 每天发送珠子数量 */
        send = "send",
        /** 每天接受珠子数量 */
        rec = "rec",
        /** 历史接受珠子数量 */
        histRec = "histRec",
        /** 与接受时间区分开来，发送是玩家行为，无需UK操作 */
        sendTime = "sendTime",
        /** 记录接受珠子的时间，涉及多人同时操作，需要UK处理 */
        recTime = "recTime",
        /** 更新时间 */
        uTime = "uTime",
        /** 创建时间 */
        cTime = "cTime",
        /** 受赠珠子列表 */
        pearlArr = "pearlArr",
    } 
    export interface IGBless {
        /** 玩家id */       
        uid?: number;
        /** 祝福类型 */       
        type?: number;
        /** 每天发送珠子数量 */       
        send?: number;
        /** 每天接受珠子数量 */       
        rec?: number;
        /** 历史接受珠子数量 */       
        histRec?: number;
        /** 与接受时间区分开来，发送是玩家行为，无需UK操作 */       
        sendTime?: Date;
        /** 记录接受珠子的时间，涉及多人同时操作，需要UK处理 */       
        recTime?: Date;
        /** 更新时间 */       
        uTime?: Date;
        /** 创建时间 */       
        cTime?: Date;
        /** 受赠珠子列表 */       
        pearlArr?: any[];
    }
    export const enum IGBLESSHIST {
        /** 玩家uid */
        uid = "uid",
        /** 发送者uid */
        sUid = "sUid",
        /** 身份等级 */
        lvl = "lvl",
        /** VIp等级 */
        vip = "vip",
        /** 祝福类型 */
        type = "type",
        /** 是否有效 */
        isEff = "isEff",
        /** 当前日期[20201010] */
        cDate = "cDate",
        /** 昵称 */
        name = "name",
        /** 我的头像 */
        ico = "ico",
        /** 创建时间 */
        cTime = "cTime",
    } 
    export interface IGBlessHist {
        /** 玩家uid */       
        uid?: number;
        /** 发送者uid */       
        sUid?: number;
        /** 身份等级 */       
        lvl?: number;
        /** VIp等级 */       
        vip?: number;
        /** 祝福类型 */       
        type?: number;
        /** 是否有效 */       
        isEff?: number;
        /** 当前日期[20201010] */       
        cDate?: number;
        /** 昵称 */       
        name?: string;
        /** 我的头像 */       
        ico?: string;
        /** 创建时间 */       
        cTime?: Date;
    }
    export const enum IGACTRANK {
        /** 玩家ID */
        uid = "uid",
        /** 批次ID */
        batchId = "batchId",
        /** 批次阶段 */
        step = "step",
        /** 商会ID */
        fmlId = "fmlId",
        /** 商会职位 */
        fmlPos = "fmlPos",
        /** 榜单排名 */
        rank = "rank",
        /** 累计排行榜值 */
        rankValue = "rankValue",
        /** 是否已领取个人奖励 */
        isUsrRecv = "isUsrRecv",
        /** 是否已领取商会奖励 */
        isFmlRecv = "isFmlRecv",
        /** 是否隐藏排行 */
        isHide = "isHide",
        /** 更新时间 */
        uTime = "uTime",
        /** 创建时间 */
        cTime = "cTime",
    } 
    export interface IGActRank {
        /** 玩家ID */       
        uid?: number;
        /** 批次ID */       
        batchId?: number;
        /** 批次阶段 */       
        step?: number;
        /** 商会ID */       
        fmlId?: number;
        /** 商会职位 */       
        fmlPos?: number;
        /** 榜单排名 */       
        rank?: number;
        /** 累计排行榜值 */       
        rankValue?: number;
        /** 是否已领取个人奖励 */       
        isUsrRecv?: number;
        /** 是否已领取商会奖励 */       
        isFmlRecv?: number;
        /** 是否隐藏排行 */       
        isHide?: number;
        /** 更新时间 */       
        uTime?: Date;
        /** 创建时间 */       
        cTime?: Date;
    }
    export const enum IGACTRECORD {
        /** 玩家ID */
        uid = "uid",
        /** 活动批次ID */
        batchId = "batchId",
        /** 今日参与次数 */
        tdyCount = "tdyCount",
        /** 总计参与次数 */
        totCount = "totCount",
        /** 活动期间登录天数 */
        loginDays = "loginDays",
        /** 活动积分 */
        totIntgr = "totIntgr",
        /** 是否已经购买 */
        hasBuy = "hasBuy",
        /** 是否全部领取 */
        allRecv = "allRecv",
        /** 活动背包 */
        bag = "bag",
        /** 额外掉落信息 */
        drops = "drops",
        /** 达标领取记录 */
        reachRec = "reachRec",
        /** 礼包购买记录 */
        giftBuy = "giftBuy",
        /** 商店兑换记录 */
        exShopLog = "exShopLog",
        /** 上次重置时间(一般用在任务监听，监听隔天变更) */
        lastResetTime = "lastResetTime",
        /** 体力结算时间 */
        powerTime = "powerTime",
        /** 更新时间 */
        uTime = "uTime",
        /** 创建时间 */
        cTime = "cTime",
        /** 小游戏进度 */
        gamePro = "gamePro",
        /** 活动任务记录 */
        taskRcd = "taskRcd",
    } 
    export interface IGActRecord {
        /** 玩家ID */       
        uid?: number;
        /** 活动批次ID */       
        batchId?: number;
        /** 今日参与次数 */       
        tdyCount?: number;
        /** 总计参与次数 */       
        totCount?: number;
        /** 活动期间登录天数 */       
        loginDays?: number;
        /** 活动积分 */       
        totIntgr?: number;
        /** 是否已经购买 */       
        hasBuy?: number;
        /** 是否全部领取 */       
        allRecv?: number;
        /** 活动背包 */       
        bag?: any;
        /** 额外掉落信息 */       
        drops?: any;
        /** 达标领取记录 */       
        reachRec?: any;
        /** 礼包购买记录 */       
        giftBuy?: any;
        /** 商店兑换记录 */       
        exShopLog?: any;
        /** 上次重置时间(一般用在任务监听，监听隔天变更) */       
        lastResetTime?: Date;
        /** 体力结算时间 */       
        powerTime?: Date;
        /** 更新时间 */       
        uTime?: Date;
        /** 创建时间 */       
        cTime?: Date;
        /** 小游戏进度 */       
        gamePro?: any;
        /** 活动任务记录 */       
        taskRcd?: any;
    }
    export const enum IGACTRWD {
        /** 玩家ID */
        uid = "uid",
        /** 获得时间戳 */
        msId = "msId",
        /** 批次ID */
        batchId = "batchId",
        /** 物品ID */
        itemId = "itemId",
        /** 物品数量 */
        num = "num",
        /** 是否大奖 */
        isTop = "isTop",
        /** 玩家名字 */
        name = "name",
        /** 扩展信息 */
        ext = "ext",
        /** 创建时间 */
        cTime = "cTime",
    } 
    export interface IGActRwd {
        /** 玩家ID */       
        uid?: number;
        /** 获得时间戳 */       
        msId?: number;
        /** 批次ID */       
        batchId?: number;
        /** 物品ID */       
        itemId?: number;
        /** 物品数量 */       
        num?: number;
        /** 是否大奖 */       
        isTop?: number;
        /** 玩家名字 */       
        name?: string;
        /** 扩展信息 */       
        ext?: any;
        /** 创建时间 */       
        cTime?: Date;
    }
    export const enum IGACTSUM {
        /** 批次ID */
        batchId = "batchId",
        /** 全服累计值 */
        totCount = "totCount",
        /** 全服其他值(活动自己定义) */
        otherCount = "otherCount",
        /** 全服进度 */
        progress = "progress",
        /** 全服内容 */
        content = "content",
        /** 扩展信息 */
        ext = "ext",
        /** 更新时间 */
        uTime = "uTime",
        /** 创建时间 */
        cTime = "cTime",
    } 
    export interface IGActSum {
        /** 批次ID */       
        batchId?: number;
        /** 全服累计值 */       
        totCount?: number;
        /** 全服其他值(活动自己定义) */       
        otherCount?: number;
        /** 全服进度 */       
        progress?: any;
        /** 全服内容 */       
        content?: any[];
        /** 扩展信息 */       
        ext?: any;
        /** 更新时间 */       
        uTime?: Date;
        /** 创建时间 */       
        cTime?: Date;
    }
    export const enum IGACTMEMORYLOG {
        /** 游戏房间id */
        mroomId = "mroomId",
        /** 用户id */
        uid = "uid",
        /** 几轮结束 */
        round = "round",
        /** 比赛结果 */
        result = "result",
        /** 类型 */
        type = "type",
        /** 难度等级 */
        level = "level",
        /** 倍数 */
        score = "score",
        /** 匹配秒数 */
        matchsec = "matchsec",
        /** 成功翻牌个数 */
        flipnum = "flipnum",
        /** 我的排名 */
        myrank = "myrank",
        /** 对手排名 */
        enemyrank = "enemyrank",
        /** 对手uid */
        enemyuid = "enemyuid",
        /** 创建时间 */
        cTime = "cTime",
    } 
    export interface IGActMemoryLog {
        /** 游戏房间id */       
        mroomId?: number;
        /** 用户id */       
        uid?: number;
        /** 几轮结束 */       
        round?: number;
        /** 比赛结果 */       
        result?: number;
        /** 类型 */       
        type?: number;
        /** 难度等级 */       
        level?: number;
        /** 倍数 */       
        score?: number;
        /** 匹配秒数 */       
        matchsec?: number;
        /** 成功翻牌个数 */       
        flipnum?: number;
        /** 我的排名 */       
        myrank?: number;
        /** 对手排名 */       
        enemyrank?: number;
        /** 对手uid */       
        enemyuid?: number;
        /** 创建时间 */       
        cTime?: Date;
    }
    export const enum IGSIGN {
        /** 玩家ID */
        uid = "uid",
        /** 总签到天数 */
        totSign = "totSign",
        /** 当前周期 */
        cycle = "cycle",
        /** 当前周期内可签最大天数 */
        cycleMaxDay = "cycleMaxDay",
        /** 当前周期内的可补签天数 */
        cycleFetchUp = "cycleFetchUp",
        /** 签到记录[1,2,...] */
        signRecord = "signRecord",
        /** 七日签到记录[[1,2,...]] */
        sevenRecord = "sevenRecord",
        /** 上次签到时间 */
        lTime = "lTime",
        /** 上次七日签到时间 */
        sevenLTime = "sevenLTime",
        /** 创建时间 */
        cTime = "cTime",
    } 
    export interface IGSign {
        /** 玩家ID */       
        uid?: number;
        /** 总签到天数 */       
        totSign?: number;
        /** 当前周期 */       
        cycle?: number;
        /** 当前周期内可签最大天数 */       
        cycleMaxDay?: number;
        /** 当前周期内的可补签天数 */       
        cycleFetchUp?: number;
        /** 签到记录[1,2,...] */       
        signRecord?: number[];
        /** 七日签到记录[[1,2,...]] */       
        sevenRecord?: number[];
        /** 上次签到时间 */       
        lTime?: Date;
        /** 上次七日签到时间 */       
        sevenLTime?: Date;
        /** 创建时间 */       
        cTime?: Date;
    }
    export const enum IGKINGORDER {
        /** 用户ID */
        uid = "uid",
        /** 批次ID */
        batchId = "batchId",
        /** 当前周数 */
        week = "week",
        /** 购买的等级 */
        buyLvl = "buyLvl",
        /** 充值的等级 */
        rchgLvl = "rchgLvl",
        /** 密令任务经验 */
        exp = "exp",
        /** 密令等级=初始等级+购买等级+充值等级+任务等级 */
        lvl = "lvl",
        /** 是否已充值购买 */
        isBuy = "isBuy",
        /** 本期登录总天数 */
        loginDay = "loginDay",
        /** 是否全部领取 */
        allRecv = "allRecv",
        /** 免费领取记录 */
        freeRecv = "freeRecv",
        /** 付费领取记录 */
        payRecv = "payRecv",
        /** {taskId:IActTaskDone} */
        taskRcd = "taskRcd",
        /** 更新时间 */
        uTime = "uTime",
        /** 创建时间 */
        cTime = "cTime",
    } 
    export interface IGKingOrder {
        /** 用户ID */       
        uid?: number;
        /** 批次ID */       
        batchId?: number;
        /** 当前周数 */       
        week?: number;
        /** 购买的等级 */       
        buyLvl?: number;
        /** 充值的等级 */       
        rchgLvl?: number;
        /** 密令任务经验 */       
        exp?: number;
        /** 密令等级=初始等级+购买等级+充值等级+任务等级 */       
        lvl?: number;
        /** 是否已充值购买 */       
        isBuy?: number;
        /** 本期登录总天数 */       
        loginDay?: number;
        /** 是否全部领取 */       
        allRecv?: number;
        /** 免费领取记录 */       
        freeRecv?: number[];
        /** 付费领取记录 */       
        payRecv?: number[];
        /** {taskId:IActTaskDone} */       
        taskRcd?: any;
        /** 更新时间 */       
        uTime?: Date;
        /** 创建时间 */       
        cTime?: Date;
    }
    export const enum IGCOPY {
        /** 玩家ID */
        uid = "uid",
        /** 当前副本ID */
        copyId = "copyId",
        /** 已通关副本ID */
        passCopyId = "passCopyId",
        /** 要领取奖励的章节ID */
        chapterRwdId = "chapterRwdId",
        /** 创建日期 */
        cTime = "cTime",
        /** 更新时间 */
        uTime = "uTime",
        /** 创建日期 */
        fTime = "fTime",
    } 
    export interface IGCopy {
        /** 玩家ID */       
        uid?: number;
        /** 当前副本ID */       
        copyId?: number;
        /** 已通关副本ID */       
        passCopyId?: number;
        /** 要领取奖励的章节ID */       
        chapterRwdId?: number;
        /** 创建日期 */       
        cTime?: Date;
        /** 更新时间 */       
        uTime?: Date;
        /** 创建日期 */       
        fTime?: Date;
    }
    export const enum IGCOPYELITE {
        /** 玩家ID */
        uid = "uid",
        /** 当前副本ID */
        copyId = "copyId",
        /** 是否通关 */
        isPass = "isPass",
        /** 扫荡次数 */
        sweepCount = "sweepCount",
        /** 扫荡时间 */
        sweepTime = "sweepTime",
        /** 创建日期 */
        cTime = "cTime",
        /** 更新时间 */
        uTime = "uTime",
        /** 创建日期 */
        fTime = "fTime",
    } 
    export interface IGCopyElite {
        /** 玩家ID */       
        uid?: number;
        /** 当前副本ID */       
        copyId?: number;
        /** 是否通关 */       
        isPass?: number;
        /** 扫荡次数 */       
        sweepCount?: number;
        /** 扫荡时间 */       
        sweepTime?: Date;
        /** 创建日期 */       
        cTime?: Date;
        /** 更新时间 */       
        uTime?: Date;
        /** 创建日期 */       
        fTime?: Date;
    }
    export const enum IGCOPYABYSS {
        /** 玩家ID */
        uid = "uid",
        /** 关卡类型 */
        type = "type",
        /** 当前副本ID */
        copyId = "copyId",
        /** 创建日期 */
        fTime = "fTime",
        /** 创建日期 */
        cTime = "cTime",
        /** 更新时间 */
        uTime = "uTime",
    } 
    export interface IGCopyAbyss {
        /** 玩家ID */       
        uid?: number;
        /** 关卡类型 */       
        type?: number;
        /** 当前副本ID */       
        copyId?: number;
        /** 创建日期 */       
        fTime?: Date;
        /** 创建日期 */       
        cTime?: Date;
        /** 更新时间 */       
        uTime?: Date;
    }
    export const enum IGSHARE {
        /** 用户uid */
        uid = "uid",
        /** 分享ID */
        tmpId = "tmpId",
        /** 已分享次数 */
        shareCnt = "shareCnt",
        /** 已领取次数 */
        recvCnt = "recvCnt",
        /** 总计分享次数 */
        totCnt = "totCnt",
        /** 领奖时间 */
        recvTime = "recvTime",
        /** 更新时间 */
        uTime = "uTime",
        /** 创建时间 */
        cTime = "cTime",
    } 
    export interface IGShare {
        /** 用户uid */       
        uid?: number;
        /** 分享ID */       
        tmpId?: number;
        /** 已分享次数 */       
        shareCnt?: number;
        /** 已领取次数 */       
        recvCnt?: number;
        /** 总计分享次数 */       
        totCnt?: number;
        /** 领奖时间 */       
        recvTime?: Date;
        /** 更新时间 */       
        uTime?: Date;
        /** 创建时间 */       
        cTime?: Date;
    }
    export const enum IGREDEEMUSR {
        /** 玩家ID */
        uid = "uid",
        /** 使用的兑换码 */
        useCode = "useCode",
        /** 使用时间 */
        useTime = "useTime",
    } 
    export interface IGRedeemUsr {
        /** 玩家ID */       
        uid?: number;
        /** 使用的兑换码 */       
        useCode?: string;
        /** 使用时间 */       
        useTime?: Date;
    }
    export const enum IGARENA {
        /** 玩家ID */
        uid = "uid",
        /** 玩家等级 */
        lvl = "lvl",
        /** 称号 */
        titleId = "titleId",
        /** 积分 */
        integral = "integral",
        /** 排行 */
        rank = "rank",
        /** 每日排行奖励领取 */
        dayRecieve = "dayRecieve",
        /** 每日排行 */
        dayRank = "dayRank",
        /** 每日结算积分 */
        dayInt = "dayInt",
        /** 每周排行奖励领取 */
        weekRecieve = "weekRecieve",
        /** 每周排行 */
        weekRank = "weekRank",
        /** 每周结算积分 */
        weekInt = "weekInt",
        /** 名称 */
        name = "name",
        /** 匹配到玩家id列表 */
        mateOpptUids = "mateOpptUids",
        /** 匹配到玩家竞技场数据列表 */
        mateOpptList = "mateOpptList",
        /** 头像ico */
        ico = "ico",
        /** 积分变化时间 */
        sTime = "sTime",
        /** 保护时间 */
        pTime = "pTime",
        /** 刷新时间 */
        rTime = "rTime",
        /** 更新时间 */
        uTime = "uTime",
        /** 创建时间 */
        cTime = "cTime",
        /** 战斗时间 */
        fTime = "fTime",
    } 
    export interface IGArena {
        /** 玩家ID */       
        uid?: number;
        /** 玩家等级 */       
        lvl?: number;
        /** 称号 */       
        titleId?: number;
        /** 积分 */       
        integral?: number;
        /** 排行 */       
        rank?: number;
        /** 每日排行奖励领取 */       
        dayRecieve?: number;
        /** 每日排行 */       
        dayRank?: number;
        /** 每日结算积分 */       
        dayInt?: number;
        /** 每周排行奖励领取 */       
        weekRecieve?: number;
        /** 每周排行 */       
        weekRank?: number;
        /** 每周结算积分 */       
        weekInt?: number;
        /** 名称 */       
        name?: string;
        /** 匹配到玩家id列表 */       
        mateOpptUids?: number[];
        /** 匹配到玩家竞技场数据列表 */       
        mateOpptList?: any[];
        /** 头像ico */       
        ico?: string;
        /** 积分变化时间 */       
        sTime?: Date;
        /** 保护时间 */       
        pTime?: Date;
        /** 刷新时间 */       
        rTime?: Date;
        /** 更新时间 */       
        uTime?: Date;
        /** 创建时间 */       
        cTime?: Date;
        /** 战斗时间 */       
        fTime?: Date;
    }
    export const enum IGARENARECORD {
        /** 用户ID */
        uid = "uid",
        /** 记录时间戳 */
        msId = "msId",
        /** 玩家等级 */
        lvl = "lvl",
        /** 对手用户ID(战报上eUid其实是我的玩家ID) */
        eUid = "eUid",
        /** 玩家等级 */
        eLvl = "eLvl",
        /** 是否胜利 */
        isWin = "isWin",
        /** 积分变化 */
        intChg = "intChg",
        /** 对方积分变化 */
        eIntChg = "eIntChg",
        /** 是否已经复仇 */
        isRevenge = "isRevenge",
        /** 战斗类型 */
        fightType = "fightType",
        /** 我的名称 */
        name = "name",
        /** 我的头像 */
        ico = "ico",
        /** 对手名称 */
        eName = "eName",
        /** 对手头像 */
        eIco = "eIco",
        /** 创建时间 */
        cTime = "cTime",
        /** 更新时间 */
        uTime = "uTime",
        /** 战斗数据 */
        fightResult = "fightResult",
    } 
    export interface IGArenaRecord {
        /** 用户ID */       
        uid?: number;
        /** 记录时间戳 */       
        msId?: number;
        /** 玩家等级 */       
        lvl?: number;
        /** 对手用户ID(战报上eUid其实是我的玩家ID) */       
        eUid?: number;
        /** 玩家等级 */       
        eLvl?: number;
        /** 是否胜利 */       
        isWin?: number;
        /** 积分变化 */       
        intChg?: number;
        /** 对方积分变化 */       
        eIntChg?: number;
        /** 是否已经复仇 */       
        isRevenge?: number;
        /** 战斗类型 */       
        fightType?: number;
        /** 我的名称 */       
        name?: string;
        /** 我的头像 */       
        ico?: string;
        /** 对手名称 */       
        eName?: string;
        /** 对手头像 */       
        eIco?: string;
        /** 创建时间 */       
        cTime?: Date;
        /** 更新时间 */       
        uTime?: Date;
        /** 战斗数据 */       
        fightResult?: any;
    }
    export const enum IGARENAWEEKHIS {
        /** 用户ID */
        uid = "uid",
        /** 批次ID,即每周天的时间YYDDSS */
        batchId = "batchId",
        /** 每周结算积分 */
        weekInt = "weekInt",
        /** 创建时间 */
        uTime = "uTime",
        /** 创建时间 */
        cTime = "cTime",
    } 
    export interface IGArenaWeekhis {
        /** 用户ID */       
        uid?: number;
        /** 批次ID,即每周天的时间YYDDSS */       
        batchId?: number;
        /** 每周结算积分 */       
        weekInt?: number;
        /** 创建时间 */       
        uTime?: Date;
        /** 创建时间 */       
        cTime?: Date;
    }
    export const enum IGTOWER {
        /** 用户ID */
        uid = "uid",
        /** 当前楼层ID */
        curFloor = "curFloor",
        /** 本周最高楼层ID */
        histFloor = "histFloor",
        /** 本周最高楼层达成时间戳 */
        histMs = "histMs",
        /** 当前怪物ID */
        monsterId = "monsterId",
        /** 格子数 */
        volume = "volume",
        /** 排名 */
        rank = "rank",
        /** 上周最高楼层ID */
        histFloor_back = "histFloor_back",
        /** 是否快速挑战过 */
        isFast = "isFast",
        /** 是否重置过 */
        isReset = "isReset",
        /** 已选择装备的楼层 */
        equipFloor = "equipFloor",
        /** 历史最高楼层ID */
        histBestFloor = "histBestFloor",
        /** 是否隐藏排行 */
        isHide = "isHide",
        /** 随机道具列表 */
        randList = "randList",
        /** 装备背包列表 */
        equipList = "equipList",
        /** 属性加成 */
        attr = "attr",
        /** 战斗时间 */
        fTime = "fTime",
        /** 更新时间 */
        uTime = "uTime",
        /** 创建时间 */
        cTime = "cTime",
    } 
    export interface IGTower {
        /** 用户ID */       
        uid?: number;
        /** 当前楼层ID */       
        curFloor?: number;
        /** 本周最高楼层ID */       
        histFloor?: number;
        /** 本周最高楼层达成时间戳 */       
        histMs?: number;
        /** 当前怪物ID */       
        monsterId?: number;
        /** 格子数 */       
        volume?: number;
        /** 排名 */       
        rank?: number;
        /** 上周最高楼层ID */       
        histFloor_back?: number;
        /** 是否快速挑战过 */       
        isFast?: number;
        /** 是否重置过 */       
        isReset?: number;
        /** 已选择装备的楼层 */       
        equipFloor?: number;
        /** 历史最高楼层ID */       
        histBestFloor?: number;
        /** 是否隐藏排行 */       
        isHide?: number;
        /** 随机道具列表 */       
        randList?: number[];
        /** 装备背包列表 */       
        equipList?: number[][];
        /** 属性加成 */       
        attr?: any;
        /** 战斗时间 */       
        fTime?: Date;
        /** 更新时间 */       
        uTime?: Date;
        /** 创建时间 */       
        cTime?: Date;
    }
    export const enum IGTOWERHISTTOP20 {
        /** 用户ID */
        uid = "uid",
        /** 批次ID,即每周天的时间 */
        batchId = "batchId",
        /** 排名 */
        rank = "rank",
        /** 排行榜值 */
        rankValue = "rankValue",
        /** 创建时间 */
        uTime = "uTime",
        /** 创建时间 */
        cTime = "cTime",
    } 
    export interface IGTowerHistTop20 {
        /** 用户ID */       
        uid?: number;
        /** 批次ID,即每周天的时间 */       
        batchId?: number;
        /** 排名 */       
        rank?: number;
        /** 排行榜值 */       
        rankValue?: number;
        /** 创建时间 */       
        uTime?: Date;
        /** 创建时间 */       
        cTime?: Date;
    }
    export const enum IGRUNEBASE {
        /** 用户ID */
        uid = "uid",
        /** 体力 */
        power = "power",
        /** 当前手册id */
        curManual = "curManual",
        /** 使用的体力 */
        usedPower = "usedPower",
        /** 解锁手册列表 */
        unlockManuals = "unlockManuals",
        /** 图鉴属性 */
        bookAttr = "bookAttr",
        /** 符石库(废弃) */
        boxList = "boxList",
        /** 符石库属性 */
        boxAttr = "boxAttr",
        /** 祭坛属性 */
        altarAttr = "altarAttr",
        /** 元素精灵map */
        elvesMap = "elvesMap",
        /** 元素精灵属性 */
        elvesAttr = "elvesAttr",
        /** 符石板方案列表 */
        planList = "planList",
        /** 符石板方案列表信息 */
        planInfoList = "planInfoList",
        /** 符石图鉴 */
        handbook = "handbook",
        /** 体力结算时间 */
        powerTime = "powerTime",
        /** 召唤符石时间 */
        callTime = "callTime",
        /** 符石开始时间 */
        sTime = "sTime",
        /** 创建时间 */
        uTime = "uTime",
        /** 创建时间 */
        cTime = "cTime",
    } 
    export interface IGRuneBase {
        /** 用户ID */       
        uid?: number;
        /** 体力 */       
        power?: number;
        /** 当前手册id */       
        curManual?: number;
        /** 使用的体力 */       
        usedPower?: number;
        /** 解锁手册列表 */       
        unlockManuals?: number[];
        /** 图鉴属性 */       
        bookAttr?: any;
        /** 符石库(废弃) */       
        boxList?: number[][];
        /** 符石库属性 */       
        boxAttr?: any;
        /** 祭坛属性 */       
        altarAttr?: any;
        /** 元素精灵map */       
        elvesMap?: {[runeId:number]:any};
        /** 元素精灵属性 */       
        elvesAttr?: any;
        /** 符石板方案列表 */       
        planList?: number[];
        /** 符石板方案列表信息 */       
        planInfoList?: any[];
        /** 符石图鉴 */       
        handbook?: {[runeId:number]:any};
        /** 体力结算时间 */       
        powerTime?: Date;
        /** 召唤符石时间 */       
        callTime?: Date;
        /** 符石开始时间 */       
        sTime?: Date;
        /** 创建时间 */       
        uTime?: Date;
        /** 创建时间 */       
        cTime?: Date;
    }
    export const enum IGRUNEPART {
        /** 用户ID */
        uid = "uid",
        /** 祭坛部位id */
        partId = "partId",
        /** 部位等级 */
        lvl = "lvl",
        /** 部位品阶 */
        grade = "grade",
        /** 部位基础属性 */
        baseAttr = "baseAttr",
        /** 部位附灵属性列表 */
        extAttrList = "extAttrList",
        /** 临时附灵属性列表 */
        tempAttrList = "tempAttrList",
        /** 建筑属性 */
        attrs = "attrs",
        /** 创建时间 */
        uTime = "uTime",
        /** 创建时间 */
        cTime = "cTime",
    } 
    export interface IGRunePart {
        /** 用户ID */       
        uid?: number;
        /** 祭坛部位id */       
        partId?: number;
        /** 部位等级 */       
        lvl?: number;
        /** 部位品阶 */       
        grade?: number;
        /** 部位基础属性 */       
        baseAttr?: any;
        /** 部位附灵属性列表 */       
        extAttrList?: any[];
        /** 临时附灵属性列表 */       
        tempAttrList?: any[];
        /** 建筑属性 */       
        attrs?: any;
        /** 创建时间 */       
        uTime?: Date;
        /** 创建时间 */       
        cTime?: Date;
    }
    export const enum IGRUNE {
        /** 用户ID */
        uid = "uid",
        /** 符石id */
        msId = "msId",
        /** 模板id */
        tmpId = "tmpId",
        /** 符石评分 */
        score = "score",
        /** 是否放进符石库 */
        isInBox = "isInBox",
        /** 是否新获得 */
        isNew = "isNew",
        /** 是否是最高纪录 */
        isBest = "isBest",
        /** 方案 */
        plan = "plan",
        /** 属性加成 */
        attr = "attr",
    } 
    export interface IGRune {
        /** 用户ID */       
        uid?: number;
        /** 符石id */       
        msId?: number;
        /** 模板id */       
        tmpId?: number;
        /** 符石评分 */       
        score?: number;
        /** 是否放进符石库 */       
        isInBox?: number;
        /** 是否新获得 */       
        isNew?: number;
        /** 是否是最高纪录 */       
        isBest?: number;
        /** 方案 */       
        plan?: number;
        /** 属性加成 */       
        attr?: any;
    }
    export const enum IGRUNERCD {
        /** 用户ID */
        uid = "uid",
        /** 符石id */
        msId = "msId",
        /** 模板id */
        tmpId = "tmpId",
        /** 符石评分 */
        score = "score",
        /** 属性加成 */
        attr = "attr",
    } 
    export interface IGRuneRcd {
        /** 用户ID */       
        uid?: number;
        /** 符石id */       
        msId?: number;
        /** 模板id */       
        tmpId?: number;
        /** 符石评分 */       
        score?: number;
        /** 属性加成 */       
        attr?: any;
    }
    export const enum IGRUNETASK {
        /** 用户ID */
        uid = "uid",
        /** 解锁任务进度 */
        progress = "progress",
        /** 每日订单列表 */
        orders = "orders",
        /** 开服礼包购买记录 */
        openGifts = "openGifts",
        /** 开服限时任务成就 */
        openLTasks = "openLTasks",
        /** 更新时间 */
        rTime = "rTime",
        /** 创建时间 */
        uTime = "uTime",
        /** 创建时间 */
        cTime = "cTime",
    } 
    export interface IGRuneTask {
        /** 用户ID */       
        uid?: number;
        /** 解锁任务进度 */       
        progress?: {[taskId:number]:number};
        /** 每日订单列表 */       
        orders?: any[];
        /** 开服礼包购买记录 */       
        openGifts?: any;
        /** 开服限时任务成就 */       
        openLTasks?: {[taskId:number]:any};
        /** 更新时间 */       
        rTime?: Date;
        /** 创建时间 */       
        uTime?: Date;
        /** 创建时间 */       
        cTime?: Date;
    }
    export const enum IGATTRCHG {
        /** 用户ID */
        uid = "uid",
        /** 时间戳 */
        msId = "msId",
        /** 相关接口 */
        ifaceName = "ifaceName",
        /** 接口相关参数 */
        ifaceArgs = "ifaceArgs",
        /** 变化前属性 */
        beforeAttr = "beforeAttr",
        /** 变化后属性 */
        afterAttr = "afterAttr",
        /** 属性变化 */
        deltaAttr = "deltaAttr",
        /** 创建时间 */
        cTime = "cTime",
    } 
    export interface IGAttrChg {
        /** 用户ID */       
        uid?: number;
        /** 时间戳 */       
        msId?: number;
        /** 相关接口 */       
        ifaceName?: string;
        /** 接口相关参数 */       
        ifaceArgs?: any;
        /** 变化前属性 */       
        beforeAttr?: {[attrId:number]:number};
        /** 变化后属性 */       
        afterAttr?: {[attrId:number]:number};
        /** 属性变化 */       
        deltaAttr?: {[attrId:number]:number};
        /** 创建时间 */       
        cTime?: Date;
    }
    export const enum IGMAZEUSR {
        /** 用户ID */
        uid = "uid",
        /** 体力 */
        power = "power",
        /** 体力道具数量 */
        powerItemNum = "powerItemNum",
        /** 层数 */
        floor = "floor",
        /** 积分 */
        score = "score",
        /** 解锁数量 */
        unLockNum = "unLockNum",
        /** 是否需要重置 */
        reset = "reset",
        /** 是否击杀boss */
        isKilledBoss = "isKilledBoss",
        /** 上期排行 */
        lastRank = "lastRank",
        /** 历史最高层数 */
        histBestFloor = "histBestFloor",
        /** 金宝箱数量 */
        goldBoxNum = "goldBoxNum",
        /** 银宝箱数量 */
        silverBoxNum = "silverBoxNum",
        /** 是否隐藏排行 */
        isHide = "isHide",
        /** 体力回复时间 */
        powerTime = "powerTime",
        /** 积分变更时间 */
        sTime = "sTime",
        /** 更新时间 */
        uTime = "uTime",
        /** 创建时间 */
        cTime = "cTime",
        /** 任务位置 */
        pos = "pos",
        /** 已解锁的事件列表 */
        unLockEventList = "unLockEventList",
        /** 未击杀的玩家列表 */
        unKilledUids = "unKilledUids",
        /** 地图 */
        mapInfo = "mapInfo",
    } 
    export interface IGMazeUsr {
        /** 用户ID */       
        uid?: number;
        /** 体力 */       
        power?: number;
        /** 体力道具数量 */       
        powerItemNum?: number;
        /** 层数 */       
        floor?: number;
        /** 积分 */       
        score?: number;
        /** 解锁数量 */       
        unLockNum?: number;
        /** 是否需要重置 */       
        reset?: number;
        /** 是否击杀boss */       
        isKilledBoss?: number;
        /** 上期排行 */       
        lastRank?: number;
        /** 历史最高层数 */       
        histBestFloor?: number;
        /** 金宝箱数量 */       
        goldBoxNum?: number;
        /** 银宝箱数量 */       
        silverBoxNum?: number;
        /** 是否隐藏排行 */       
        isHide?: number;
        /** 体力回复时间 */       
        powerTime?: Date;
        /** 积分变更时间 */       
        sTime?: Date;
        /** 更新时间 */       
        uTime?: Date;
        /** 创建时间 */       
        cTime?: Date;
        /** 任务位置 */       
        pos?: number[];
        /** 已解锁的事件列表 */       
        unLockEventList?: number[];
        /** 未击杀的玩家列表 */       
        unKilledUids?: number[];
        /** 地图 */       
        mapInfo?: any[][];
    }
    export const enum IGMAZERCD {
        /** 用户ID */
        uid = "uid",
        /** 时间戳 */
        msId = "msId",
        /** 类型 */
        type = "type",
        /** 内容 */
        content = "content",
    } 
    export interface IGMazeRcd {
        /** 用户ID */       
        uid?: number;
        /** 时间戳 */       
        msId?: number;
        /** 类型 */       
        type?: number;
        /** 内容 */       
        content?: any;
    }
    export const enum IGGODIMPRINT {
        /** 用户ID */
        uid = "uid",
        /** 神印ID */
        tmpId = "tmpId",
        /** 等级 */
        lvl = "lvl",
        /** 格式:{id:lvl,...} */
        skills = "skills",
        /** 属性 */
        attr = "attr",
        /** 更新时间 */
        uTime = "uTime",
        /** 创建时间 */
        cTime = "cTime",
    } 
    export interface IGGodImprint {
        /** 用户ID */       
        uid?: number;
        /** 神印ID */       
        tmpId?: number;
        /** 等级 */       
        lvl?: number;
        /** 格式:{id:lvl,...} */       
        skills?: any;
        /** 属性 */       
        attr?: any;
        /** 更新时间 */       
        uTime?: Date;
        /** 创建时间 */       
        cTime?: Date;
    }
    export const enum IGPETBASE {
        /** 用户ID */
        uid = "uid",
        /** 免费套索 */
        freeLasso = "freeLasso",
        /** 宠物图鉴 */
        handbook = "handbook",
        /** 刷新时间 */
        rTime = "rTime",
        /** 创建时间 */
        uTime = "uTime",
        /** 创建时间 */
        cTime = "cTime",
    } 
    export interface IGPetBase {
        /** 用户ID */       
        uid?: number;
        /** 免费套索 */       
        freeLasso?: number;
        /** 宠物图鉴 */       
        handbook?: any;
        /** 刷新时间 */       
        rTime?: Date;
        /** 创建时间 */       
        uTime?: Date;
        /** 创建时间 */       
        cTime?: Date;
    }
    export const enum IGPET {
        /** 用户uid */
        uid = "uid",
        /** msId */
        msId = "msId",
        /** 模板id */
        tmpId = "tmpId",
        /** 等级 */
        lvl = "lvl",
        /** 星级 */
        star = "star",
        /** 天赋ID */
        talentId = "talentId",
        /** 属性 */
        attr = "attr",
        /** 更新时间 */
        uTime = "uTime",
        /** 创建时间 */
        cTime = "cTime",
    } 
    export interface IGPet {
        /** 用户uid */       
        uid?: number;
        /** msId */       
        msId?: number;
        /** 模板id */       
        tmpId?: number;
        /** 等级 */       
        lvl?: number;
        /** 星级 */       
        star?: number;
        /** 天赋ID */       
        talentId?: number;
        /** 属性 */       
        attr?: any;
        /** 更新时间 */       
        uTime?: Date;
        /** 创建时间 */       
        cTime?: Date;
    }
    export const enum IGRBPER {
        /** 玩家ID */
        uid = "uid",
        /** 每周周期ID */
        ecycId = "ecycId",
        /** 段位积分 */
        intgr = "intgr",
        /** 今日排位赛已挑战次数 */
        tdyBattleCnt = "tdyBattleCnt",
        /** 今日排位赛已购买次数 */
        tdyBuyCnt = "tdyBuyCnt",
        /** 今日天梯赛已挑战次数 */
        tdyTopBattleCnt = "tdyTopBattleCnt",
        /** 今日购买天梯赛次数 */
        tdyBuyTopCnt = "tdyBuyTopCnt",
        /** 匹配的玩家id */
        matchUid = "matchUid",
        /** 匹配的玩家积分 */
        matchIntgr = "matchIntgr",
        /** 可找回挑战总次数 */
        lastChallengeNum = "lastChallengeNum",
        /** 已找回挑战次数 */
        findChallengeNum = "findChallengeNum",
        /** 匹配的玩家战斗数据 */
        matchUsrDisplay = "matchUsrDisplay",
        /** 匹配的玩家详情 */
        matchUsrDetail = "matchUsrDetail",
        /** 战斗时间 */
        fTime = "fTime",
        /** 战斗失败时间 */
        failTime = "failTime",
        /** 更新时间 */
        uTime = "uTime",
        /** 创建时间 */
        cTime = "cTime",
    } 
    export interface IGRbPer {
        /** 玩家ID */       
        uid?: number;
        /** 每周周期ID */       
        ecycId?: number;
        /** 段位积分 */       
        intgr?: number;
        /** 今日排位赛已挑战次数 */       
        tdyBattleCnt?: number;
        /** 今日排位赛已购买次数 */       
        tdyBuyCnt?: number;
        /** 今日天梯赛已挑战次数 */       
        tdyTopBattleCnt?: number;
        /** 今日购买天梯赛次数 */       
        tdyBuyTopCnt?: number;
        /** 匹配的玩家id */       
        matchUid?: number;
        /** 匹配的玩家积分 */       
        matchIntgr?: number;
        /** 可找回挑战总次数 */       
        lastChallengeNum?: number;
        /** 已找回挑战次数 */       
        findChallengeNum?: number;
        /** 匹配的玩家战斗数据 */       
        matchUsrDisplay?: any;
        /** 匹配的玩家详情 */       
        matchUsrDetail?: any;
        /** 战斗时间 */       
        fTime?: Date;
        /** 战斗失败时间 */       
        failTime?: Date;
        /** 更新时间 */       
        uTime?: Date;
        /** 创建时间 */       
        cTime?: Date;
    }
    export const enum IGRBLOG {
        /** 周期ID */
        ecycId = "ecycId",
        /** 区服ID(避免合服时冲突) */
        grpId = "grpId",
        /** 操作类型 */
        opType = "opType",
        /** 记录日期YYYYMMDD */
        day = "day",
        /** 消息类型 */
        msgType = "msgType",
        /** 扩展信息 */
        ext = "ext",
        /** 更新时间 */
        uTime = "uTime",
        /** 创建时间 */
        cTime = "cTime",
    } 
    export interface IGRbLog {
        /** 周期ID */       
        ecycId?: number;
        /** 区服ID(避免合服时冲突) */       
        grpId?: number;
        /** 操作类型 */       
        opType?: number;
        /** 记录日期YYYYMMDD */       
        day?: number;
        /** 消息类型 */       
        msgType?: string;
        /** 扩展信息 */       
        ext?: any;
        /** 更新时间 */       
        uTime?: Date;
        /** 创建时间 */       
        cTime?: Date;
    }
    export const enum IGACTPEAKBET {
        /** 玩家ID */
        uid = "uid",
        /** 巅峰赛淘汰赛回合表的id */
        prId = "prId",
        /** 活动批次 */
        batchId = "batchId",
        /** 淘汰赛分组 */
        groupId = "groupId",
        /** 几轮竞猜,DS_V.ICPeakRound.round */
        round = "round",
        /** 下注玩家ID */
        betOnUid = "betOnUid",
        /** 花费奖券数量 */
        ticket = "ticket",
        /** 领取奖励类型 */
        recv = "recv",
        /** 只有玩家领取后，才会有值 */
        score = "score",
        /** 是否已读 */
        isRead = "isRead",
        /** 下注玩家名字 */
        betOnName = "betOnName",
        /** 更新时间 */
        uTime = "uTime",
        /** 创建时间 */
        cTime = "cTime",
    } 
    export interface IGActPeakBet {
        /** 玩家ID */       
        uid?: number;
        /** 巅峰赛淘汰赛回合表的id */       
        prId?: number;
        /** 活动批次 */       
        batchId?: number;
        /** 淘汰赛分组 */       
        groupId?: number;
        /** 几轮竞猜,DS_V.ICPeakRound.round */       
        round?: number;
        /** 下注玩家ID */       
        betOnUid?: number;
        /** 花费奖券数量 */       
        ticket?: number;
        /** 领取奖励类型 */       
        recv?: number;
        /** 只有玩家领取后，才会有值 */       
        score?: number;
        /** 是否已读 */       
        isRead?: number;
        /** 下注玩家名字 */       
        betOnName?: string;
        /** 更新时间 */       
        uTime?: Date;
        /** 创建时间 */       
        cTime?: Date;
    }
    export class GDidPool extends Dao_gs<IGDidPool, IGDIDPOOL>{
        constructor(cfg ? : MysqlCfg) {
            super(cfg);
            this.needToList = ["nums"];
            this.needToDate = [];
            this.tableName = 'g_did_pool';
        }
    }
    export class GUsr extends Dao_gs<IGUsr, IGUSR>{
        constructor(cfg ? : MysqlCfg) {
            super(cfg);
            this.needToList = ["loc","attr","bag"];
            this.needToDate = ["cTime","refundTime","rchgResetTime","lTime","authTime","gldTime","attrRecalTime"];
            this.tableName = 'g_usr';
        }
    }
    export class GUsrOl extends Dao_gs<IGUsrOl, IGUSROL>{
        constructor(cfg ? : MysqlCfg) {
            super(cfg);
            this.needToList = [];
            this.needToDate = ["hTime","lTime","oTime","lLTime","lOTime"];
            this.tableName = 'g_usr_ol';
        }
    }
    export class GUsrExt extends Dao_gs<IGUsrExt, IGUSREXT>{
        constructor(cfg ? : MysqlCfg) {
            super(cfg);
            this.needToList = ["v"];
            this.needToDate = [];
            this.tableName = 'g_usr_ext';
        }
    }
    export class GUsrCount extends Dao_gs<IGUsrCount, IGUSRCOUNT>{
        constructor(cfg ? : MysqlCfg) {
            super(cfg);
            this.needToList = [];
            this.needToDate = ["rTime","uTime","cTime"];
            this.tableName = 'g_usr_count';
        }
    }
    export class GUsrRcd extends Dao_gs<IGUsrRcd, IGUSRRCD>{
        constructor(cfg ? : MysqlCfg) {
            super(cfg);
            this.needToList = ["valueMap"];
            this.needToDate = ["rTime","uTime","cTime"];
            this.tableName = 'g_usr_rcd';
        }
    }
    export class GUsrSet extends Dao_gs<IGUsrSet, IGUSRSET>{
        constructor(cfg ? : MysqlCfg) {
            super(cfg);
            this.needToList = ["value"];
            this.needToDate = ["uTime","cTime"];
            this.tableName = 'g_usr_set';
        }
    }
    export class GUsrSdkRwd extends Dao_gs<IGUsrSdkRwd, IGUSRSDKRWD>{
        constructor(cfg ? : MysqlCfg) {
            super(cfg);
            this.needToList = [];
            this.needToDate = ["uTime","cTime"];
            this.tableName = 'g_usr_sdk_rwd';
        }
    }
    export class GUsrLoginHist extends Dao_gs<IGUsrLoginHist, IGUSRLOGINHIST>{
        constructor(cfg ? : MysqlCfg) {
            super(cfg);
            this.needToList = [];
            this.needToDate = ["time"];
            this.tableName = 'g_usr_login_hist';
        }
    }
    export class GUsrSs extends Dao_gs<IGUsrSs, IGUSRSS>{
        constructor(cfg ? : MysqlCfg) {
            super(cfg);
            this.needToList = ["vipRecv","redeemCodes","sacraDrawRcd","actives","runePlan"];
            this.needToDate = ["rTime","uTime","cTime"];
            this.tableName = 'g_usr_ss';
        }
    }
    export class GBox extends Dao_gs<IGBox, IGBOX>{
        constructor(cfg ? : MysqlCfg) {
            super(cfg);
            this.needToList = [];
            this.needToDate = ["countTime","eTime_video","eTime_up","uTime","cTime"];
            this.tableName = 'g_box';
        }
    }
    export class GEquipBase extends Dao_gs<IGEquipBase, IGEQUIPBASE>{
        constructor(cfg ? : MysqlCfg) {
            super(cfg);
            this.needToList = ["planMap","skinMap","potMap"];
            this.needToDate = ["uTime","cTime"];
            this.tableName = 'g_equip_base';
        }
    }
    export class GEquip extends Dao_gs<IGEquip, IGEQUIP>{
        constructor(cfg ? : MysqlCfg) {
            super(cfg);
            this.needToList = ["baseAttr"];
            this.needToDate = ["potEftTime","uTime","cTime"];
            this.tableName = 'g_equip';
        }
    }
    export class GHandbook extends Dao_gs<IGHandbook, IGHANDBOOK>{
        constructor(cfg ? : MysqlCfg) {
            super(cfg);
            this.needToList = ["list","spList"];
            this.needToDate = ["uTime","cTime"];
            this.tableName = 'g_handbook';
        }
    }
    export class GWing extends Dao_gs<IGWing, IGWING>{
        constructor(cfg ? : MysqlCfg) {
            super(cfg);
            this.needToList = ["wingList","attr","enhanceAttr"];
            this.needToDate = ["uTime","cTime"];
            this.tableName = 'g_wing';
        }
    }
    export class GRufBase extends Dao_gs<IGRufBase, IGRUFBASE>{
        constructor(cfg ? : MysqlCfg) {
            super(cfg);
            this.needToList = ["travelList"];
            this.needToDate = ["travelTime","uTime","cTime"];
            this.tableName = 'g_ruf_base';
        }
    }
    export class GRuf extends Dao_gs<IGRuf, IGRUF>{
        constructor(cfg ? : MysqlCfg) {
            super(cfg);
            this.needToList = ["spAttr","fuseAttr"];
            this.needToDate = ["uTime","cTime"];
            this.tableName = 'g_ruf';
        }
    }
    export class GHonour extends Dao_gs<IGHonour, IGHONOUR>{
        constructor(cfg ? : MysqlCfg) {
            super(cfg);
            this.needToList = ["progress"];
            this.needToDate = ["uTime","cTime"];
            this.tableName = 'g_honour';
        }
    }
    export class GTitle extends Dao_gs<IGTitle, IGTITLE>{
        constructor(cfg ? : MysqlCfg) {
            super(cfg);
            this.needToList = ["attr"];
            this.needToDate = ["uTime","cTime"];
            this.tableName = 'g_title';
        }
    }
    export class GTitleHist extends Dao_gs<IGTitleHist, IGTITLEHIST>{
        constructor(cfg ? : MysqlCfg) {
            super(cfg);
            this.needToList = ["attr"];
            this.needToDate = ["uTime","cTime"];
            this.tableName = 'g_title_hist';
        }
    }
    export class GGem extends Dao_gs<IGGem, IGGEM>{
        constructor(cfg ? : MysqlCfg) {
            super(cfg);
            this.needToList = ["attr"];
            this.needToDate = ["uTime","cTime"];
            this.tableName = 'g_gem';
        }
    }
    export class GGemPaper extends Dao_gs<IGGemPaper, IGGEMPAPER>{
        constructor(cfg ? : MysqlCfg) {
            super(cfg);
            this.needToList = ["paperList"];
            this.needToDate = ["uTime","cTime"];
            this.tableName = 'g_gem_paper';
        }
    }
    export class GGemScheme extends Dao_gs<IGGemScheme, IGGEMSCHEME>{
        constructor(cfg ? : MysqlCfg) {
            super(cfg);
            this.needToList = ["inlayList","gemIdList","attr"];
            this.needToDate = ["uTime","cTime"];
            this.tableName = 'g_gem_scheme';
        }
    }
    export class GSacra extends Dao_gs<IGSacra, IGSACRA>{
        constructor(cfg ? : MysqlCfg) {
            super(cfg);
            this.needToList = ["attr"];
            this.needToDate = ["uTime","cTime"];
            this.tableName = 'g_sacra';
        }
    }
    export class GSacraDrawLog extends Dao_gs<IGSacraDrawLog, IGSACRADRAWLOG>{
        constructor(cfg ? : MysqlCfg) {
            super(cfg);
            this.needToList = ["items"];
            this.needToDate = ["cTime"];
            this.tableName = 'g_sacra_draw_log';
        }
    }
    export class GLuckyLaba extends Dao_gs<IGLuckyLaba, IGLUCKYLABA>{
        constructor(cfg ? : MysqlCfg) {
            super(cfg);
            this.needToList = ["selectItems"];
            this.needToDate = ["rTime","uTime","cTime"];
            this.tableName = 'g_lucky_laba';
        }
    }
    export class GLuckyLabaDrawLog extends Dao_gs<IGLuckyLabaDrawLog, IGLUCKYLABADRAWLOG>{
        constructor(cfg ? : MysqlCfg) {
            super(cfg);
            this.needToList = ["items"];
            this.needToDate = ["cTime"];
            this.tableName = 'g_lucky_laba_draw_log';
        }
    }
    export class GMine extends Dao_gs<IGMine, IGMINE>{
        constructor(cfg ? : MysqlCfg) {
            super(cfg);
            this.needToList = ["employMiners","rhGNoList","goodsList","rhRNoList","rockList","idxList","nearUids","attr","deportSucMap","deportFailMap"];
            this.needToDate = ["rNearTime","gOverTime","nLogTime","oLogTime","verifyFailTime","verifyTime","rTime","uTime","cTime"];
            this.tableName = 'g_mine';
        }
    }
    export class GMineGoods extends Dao_gs<IGMineGoods, IGMINEGOODS>{
        constructor(cfg ? : MysqlCfg) {
            super(cfg);
            this.needToList = ["collect","rob"];
            this.needToDate = ["opTime","recvTime","eTime","uTime","cTime"];
            this.tableName = 'g_mine_goods';
        }
    }
    export class GMineRock extends Dao_gs<IGMineRock, IGMINEROCK>{
        constructor(cfg ? : MysqlCfg) {
            super(cfg);
            this.needToList = ["collect","rob"];
            this.needToDate = ["recvTime","eTime","uTime","cTime"];
            this.tableName = 'g_mine_rock';
        }
    }
    export class GMineIncome extends Dao_gs<IGMineIncome, IGMINEINCOME>{
        constructor(cfg ? : MysqlCfg) {
            super(cfg);
            this.needToList = [];
            this.needToDate = ["cTime"];
            this.tableName = 'g_mine_income';
        }
    }
    export class GMineEnemy extends Dao_gs<IGMineEnemy, IGMINEENEMY>{
        constructor(cfg ? : MysqlCfg) {
            super(cfg);
            this.needToList = [];
            this.needToDate = ["uTime","cTime"];
            this.tableName = 'g_mine_enemy';
        }
    }
    export class GMineLog extends Dao_gs<IGMineLog, IGMINELOG>{
        constructor(cfg ? : MysqlCfg) {
            super(cfg);
            this.needToList = ["data"];
            this.needToDate = ["uTime","cTime"];
            this.tableName = 'g_mine_log';
        }
    }
    export class GMineSkin extends Dao_gs<IGMineSkin, IGMINESKIN>{
        constructor(cfg ? : MysqlCfg) {
            super(cfg);
            this.needToList = ["attr"];
            this.needToDate = ["uTime","cTime"];
            this.tableName = 'g_mine_skin';
        }
    }
    export class GSubscribe extends Dao_gs<IGSubscribe, IGSUBSCRIBE>{
        constructor(cfg ? : MysqlCfg) {
            super(cfg);
            this.needToList = [];
            this.needToDate = ["uTime","cTime"];
            this.tableName = 'g_subscribe';
        }
    }
    export class GSubscribeJob extends Dao_gs<IGSubscribeJob, IGSUBSCRIBEJOB>{
        constructor(cfg ? : MysqlCfg) {
            super(cfg);
            this.needToList = ["param"];
            this.needToDate = ["pTime","uTime","cTime"];
            this.tableName = 'g_subscribe_job';
        }
    }
    export class GMsgNotifyJob extends Dao_gs<IGMsgNotifyJob, IGMSGNOTIFYJOB>{
        constructor(cfg ? : MysqlCfg) {
            super(cfg);
            this.needToList = ["param"];
            this.needToDate = ["pTime","uTime","cTime"];
            this.tableName = 'g_msg_notify_job';
        }
    }
    export class GChatReport extends Dao_gs<IGChatReport, IGCHATREPORT>{
        constructor(cfg ? : MysqlCfg) {
            super(cfg);
            this.needToList = ["value"];
            this.needToDate = ["uTime"];
            this.tableName = 'g_chat_report';
        }
    }
    export class GIcoFrm extends Dao_gs<IGIcoFrm, IGICOFRM>{
        constructor(cfg ? : MysqlCfg) {
            super(cfg);
            this.needToList = ["icoFrmList","icoFrmMap"];
            this.needToDate = ["uTime","cTime"];
            this.tableName = 'g_ico_frm';
        }
    }
    export class GBubble extends Dao_gs<IGBubble, IGBUBBLE>{
        constructor(cfg ? : MysqlCfg) {
            super(cfg);
            this.needToList = ["bubbleList","bubbleMap"];
            this.needToDate = ["uTime","cTime"];
            this.tableName = 'g_bubble';
        }
    }
    export class GTaskMain extends Dao_gs<IGTaskMain, IGTASKMAIN>{
        constructor(cfg ? : MysqlCfg) {
            super(cfg);
            this.needToList = ["progress","recvMap"];
            this.needToDate = ["uTime","cTime"];
            this.tableName = 'g_task_main';
        }
    }
    export class GTaskDly extends Dao_gs<IGTaskDly, IGTASKDLY>{
        constructor(cfg ? : MysqlCfg) {
            super(cfg);
            this.needToList = ["progress","recvMap","vitalBoxs","vitalGotMap"];
            this.needToDate = ["uTime","cTime"];
            this.tableName = 'g_task_dly';
        }
    }
    export class GTaskAch extends Dao_gs<IGTaskAch, IGTASKACH>{
        constructor(cfg ? : MysqlCfg) {
            super(cfg);
            this.needToList = ["progress","recvMap"];
            this.needToDate = ["uTime","cTime"];
            this.tableName = 'g_task_ach';
        }
    }
    export class GTaskInv extends Dao_gs<IGTaskInv, IGTASKINV>{
        constructor(cfg ? : MysqlCfg) {
            super(cfg);
            this.needToList = ["progress","recvMap","payRecvMap"];
            this.needToDate = ["uTime","cTime"];
            this.tableName = 'g_task_inv';
        }
    }
    export class GShop extends Dao_gs<IGShop, IGSHOP>{
        constructor(cfg ? : MysqlCfg) {
            super(cfg);
            this.needToList = ["items","buyRecord","weekRecord","monthRecord","totRecord","batchRecord"];
            this.needToDate = ["itemRFTime","itemRFTime_pro","rTime","uTime","cTime"];
            this.tableName = 'g_shop';
        }
    }
    export class GRchg extends Dao_gs<IGRchg, IGRCHG>{
        constructor(cfg ? : MysqlCfg) {
            super(cfg);
            this.needToList = ["gain"];
            this.needToDate = ["reqTime","sdkTime","sendTime"];
            this.tableName = 'g_rchg';
        }
    }
    export class GRchgCard extends Dao_gs<IGRchgCard, IGRCHGCARD>{
        constructor(cfg ? : MysqlCfg) {
            super(cfg);
            this.needToList = ["receiveList"];
            this.needToDate = ["receiveTime","invalidTime","cTime"];
            this.tableName = 'g_rchg_card';
        }
    }
    export class GRchgDay extends Dao_gs<IGRchgDay, IGRCHGDAY>{
        constructor(cfg ? : MysqlCfg) {
            super(cfg);
            this.needToList = ["progress","rchgLog"];
            this.needToDate = ["sTime","eTime","uTime","cTime"];
            this.tableName = 'g_rchg_day';
        }
    }
    export class GRchgDayHist extends Dao_gs<IGRchgDayHist, IGRCHGDAYHIST>{
        constructor(cfg ? : MysqlCfg) {
            super(cfg);
            this.needToList = ["progress","rchgLog"];
            this.needToDate = ["sTime","eTime","uTime","cTime"];
            this.tableName = 'g_rchg_day_hist';
        }
    }
    export class GRchgPopBag extends Dao_gs<IGRchgPopBag, IGRCHGPOPBAG>{
        constructor(cfg ? : MysqlCfg) {
            super(cfg);
            this.needToList = ["buyMap","pullBagList"];
            this.needToDate = ["rTime","uTime","cTime"];
            this.tableName = 'g_rchg_pop_bag';
        }
    }
    export class GRchgExt extends Dao_gs<IGRchgExt, IGRCHGEXT>{
        constructor(cfg ? : MysqlCfg) {
            super(cfg);
            this.needToList = ["progress","recvIds","ext"];
            this.needToDate = ["uTime","cTime"];
            this.tableName = 'g_rchg_ext';
        }
    }
    export class GMail extends Dao_gs<IGMail, IGMAIL>{
        constructor(cfg ? : MysqlCfg) {
            super(cfg);
            this.needToList = ["param","items","tTitle","ext"];
            this.needToDate = ["cTime","eTime","dTime","rTime","oTime","pTime"];
            this.tableName = 'g_mail';
        }
    }
    export class GFml extends Dao_gs<IGFml, IGFML>{
        constructor(cfg ? : MysqlCfg) {
            super(cfg);
            this.needToList = ["bldCountMap","ext"];
            this.needToDate = ["cTime","dTime","bldTime","chgMasterTime","hotRecTime","bossOpenTime","copyResetTime"];
            this.tableName = 'g_fml';
        }
    }
    export class GFmlExt extends Dao_gs<IGFmlExt, IGFMLEXT>{
        constructor(cfg ? : MysqlCfg) {
            super(cfg);
            this.needToList = ["v"];
            this.needToDate = [];
            this.tableName = 'g_fml_ext';
        }
    }
    export class GFmlChgHist extends Dao_gs<IGFmlChgHist, IGFMLCHGHIST>{
        constructor(cfg ? : MysqlCfg) {
            super(cfg);
            this.needToList = ["data"];
            this.needToDate = ["cTime"];
            this.tableName = 'g_fml_chg_hist';
        }
    }
    export class GFmlApply extends Dao_gs<IGFmlApply, IGFMLAPPLY>{
        constructor(cfg ? : MysqlCfg) {
            super(cfg);
            this.needToList = [];
            this.needToDate = ["operTime"];
            this.tableName = 'g_fml_apply';
        }
    }
    export class GFmlMb extends Dao_gs<IGFmlMb, IGFMLMB>{
        constructor(cfg ? : MysqlCfg) {
            super(cfg);
            this.needToList = ["bldCountMap"];
            this.needToDate = ["jTime","qTime","bldTime"];
            this.tableName = 'g_fml_mb';
        }
    }
    export class GFmlCopy extends Dao_gs<IGFmlCopy, IGFMLCOPY>{
        constructor(cfg ? : MysqlCfg) {
            super(cfg);
            this.needToList = ["hurtRecord","hurtRecord_last"];
            this.needToDate = ["openTime"];
            this.tableName = 'g_fml_copy';
        }
    }
    export class GAssist extends Dao_gs<IGAssist, IGASSIST>{
        constructor(cfg ? : MysqlCfg) {
            super(cfg);
            this.needToList = ["assistInfoList"];
            this.needToDate = ["uTime","cTime"];
            this.tableName = 'g_assist';
        }
    }
    export class GInvite extends Dao_gs<IGInvite, IGINVITE>{
        constructor(cfg ? : MysqlCfg) {
            super(cfg);
            this.needToList = ["recvFrdNum"];
            this.needToDate = ["uTime","cTime"];
            this.tableName = 'g_invite';
        }
    }
    export class GBless extends Dao_gs<IGBless, IGBLESS>{
        constructor(cfg ? : MysqlCfg) {
            super(cfg);
            this.needToList = ["pearlArr"];
            this.needToDate = ["sendTime","recTime","uTime","cTime"];
            this.tableName = 'g_bless';
        }
    }
    export class GBlessHist extends Dao_gs<IGBlessHist, IGBLESSHIST>{
        constructor(cfg ? : MysqlCfg) {
            super(cfg);
            this.needToList = [];
            this.needToDate = ["cTime"];
            this.tableName = 'g_bless_hist';
        }
    }
    export class GActRank extends Dao_gs<IGActRank, IGACTRANK>{
        constructor(cfg ? : MysqlCfg) {
            super(cfg);
            this.needToList = [];
            this.needToDate = ["uTime","cTime"];
            this.tableName = 'g_act_rank';
        }
    }
    export class GActRecord extends Dao_gs<IGActRecord, IGACTRECORD>{
        constructor(cfg ? : MysqlCfg) {
            super(cfg);
            this.needToList = ["bag","drops","reachRec","giftBuy","exShopLog","gamePro","taskRcd"];
            this.needToDate = ["lastResetTime","powerTime","uTime","cTime"];
            this.tableName = 'g_act_record';
        }
    }
    export class GActRwd extends Dao_gs<IGActRwd, IGACTRWD>{
        constructor(cfg ? : MysqlCfg) {
            super(cfg);
            this.needToList = ["ext"];
            this.needToDate = ["cTime"];
            this.tableName = 'g_act_rwd';
        }
    }
    export class GActSum extends Dao_gs<IGActSum, IGACTSUM>{
        constructor(cfg ? : MysqlCfg) {
            super(cfg);
            this.needToList = ["progress","content","ext"];
            this.needToDate = ["uTime","cTime"];
            this.tableName = 'g_act_sum';
        }
    }
    export class GActMemoryLog extends Dao_gs<IGActMemoryLog, IGACTMEMORYLOG>{
        constructor(cfg ? : MysqlCfg) {
            super(cfg);
            this.needToList = [];
            this.needToDate = ["cTime"];
            this.tableName = 'g_act_memory_log';
        }
    }
    export class GSign extends Dao_gs<IGSign, IGSIGN>{
        constructor(cfg ? : MysqlCfg) {
            super(cfg);
            this.needToList = ["signRecord","sevenRecord"];
            this.needToDate = ["lTime","sevenLTime","cTime"];
            this.tableName = 'g_sign';
        }
    }
    export class GKingOrder extends Dao_gs<IGKingOrder, IGKINGORDER>{
        constructor(cfg ? : MysqlCfg) {
            super(cfg);
            this.needToList = ["freeRecv","payRecv","taskRcd"];
            this.needToDate = ["uTime","cTime"];
            this.tableName = 'g_king_order';
        }
    }
    export class GCopy extends Dao_gs<IGCopy, IGCOPY>{
        constructor(cfg ? : MysqlCfg) {
            super(cfg);
            this.needToList = [];
            this.needToDate = ["cTime","uTime","fTime"];
            this.tableName = 'g_copy';
        }
    }
    export class GCopyElite extends Dao_gs<IGCopyElite, IGCOPYELITE>{
        constructor(cfg ? : MysqlCfg) {
            super(cfg);
            this.needToList = [];
            this.needToDate = ["sweepTime","cTime","uTime","fTime"];
            this.tableName = 'g_copy_elite';
        }
    }
    export class GCopyAbyss extends Dao_gs<IGCopyAbyss, IGCOPYABYSS>{
        constructor(cfg ? : MysqlCfg) {
            super(cfg);
            this.needToList = [];
            this.needToDate = ["fTime","cTime","uTime"];
            this.tableName = 'g_copy_abyss';
        }
    }
    export class GShare extends Dao_gs<IGShare, IGSHARE>{
        constructor(cfg ? : MysqlCfg) {
            super(cfg);
            this.needToList = [];
            this.needToDate = ["recvTime","uTime","cTime"];
            this.tableName = 'g_share';
        }
    }
    export class GRedeemUsr extends Dao_gs<IGRedeemUsr, IGREDEEMUSR>{
        constructor(cfg ? : MysqlCfg) {
            super(cfg);
            this.needToList = [];
            this.needToDate = ["useTime"];
            this.tableName = 'g_redeem_usr';
        }
    }
    export class GArena extends Dao_gs<IGArena, IGARENA>{
        constructor(cfg ? : MysqlCfg) {
            super(cfg);
            this.needToList = ["mateOpptUids","mateOpptList"];
            this.needToDate = ["sTime","pTime","rTime","uTime","cTime","fTime"];
            this.tableName = 'g_arena';
        }
    }
    export class GArenaRecord extends Dao_gs<IGArenaRecord, IGARENARECORD>{
        constructor(cfg ? : MysqlCfg) {
            super(cfg);
            this.needToList = ["fightResult"];
            this.needToDate = ["cTime","uTime"];
            this.tableName = 'g_arena_record';
        }
    }
    export class GArenaWeekhis extends Dao_gs<IGArenaWeekhis, IGARENAWEEKHIS>{
        constructor(cfg ? : MysqlCfg) {
            super(cfg);
            this.needToList = [];
            this.needToDate = ["uTime","cTime"];
            this.tableName = 'g_arena_weekhis';
        }
    }
    export class GTower extends Dao_gs<IGTower, IGTOWER>{
        constructor(cfg ? : MysqlCfg) {
            super(cfg);
            this.needToList = ["randList","equipList","attr"];
            this.needToDate = ["fTime","uTime","cTime"];
            this.tableName = 'g_tower';
        }
    }
    export class GTowerHistTop20 extends Dao_gs<IGTowerHistTop20, IGTOWERHISTTOP20>{
        constructor(cfg ? : MysqlCfg) {
            super(cfg);
            this.needToList = [];
            this.needToDate = ["uTime","cTime"];
            this.tableName = 'g_tower_hist_top20';
        }
    }
    export class GRuneBase extends Dao_gs<IGRuneBase, IGRUNEBASE>{
        constructor(cfg ? : MysqlCfg) {
            super(cfg);
            this.needToList = ["unlockManuals","bookAttr","boxList","boxAttr","altarAttr","elvesMap","elvesAttr","planList","planInfoList","handbook"];
            this.needToDate = ["powerTime","callTime","sTime","uTime","cTime"];
            this.tableName = 'g_rune_base';
        }
    }
    export class GRunePart extends Dao_gs<IGRunePart, IGRUNEPART>{
        constructor(cfg ? : MysqlCfg) {
            super(cfg);
            this.needToList = ["baseAttr","extAttrList","tempAttrList","attrs"];
            this.needToDate = ["uTime","cTime"];
            this.tableName = 'g_rune_part';
        }
    }
    export class GRune extends Dao_gs<IGRune, IGRUNE>{
        constructor(cfg ? : MysqlCfg) {
            super(cfg);
            this.needToList = ["attr"];
            this.needToDate = [];
            this.tableName = 'g_rune';
        }
    }
    export class GRuneRcd extends Dao_gs<IGRuneRcd, IGRUNERCD>{
        constructor(cfg ? : MysqlCfg) {
            super(cfg);
            this.needToList = ["attr"];
            this.needToDate = [];
            this.tableName = 'g_rune_rcd';
        }
    }
    export class GRuneTask extends Dao_gs<IGRuneTask, IGRUNETASK>{
        constructor(cfg ? : MysqlCfg) {
            super(cfg);
            this.needToList = ["progress","orders","openGifts","openLTasks"];
            this.needToDate = ["rTime","uTime","cTime"];
            this.tableName = 'g_rune_task';
        }
    }
    export class GAttrChg extends Dao_gs<IGAttrChg, IGATTRCHG>{
        constructor(cfg ? : MysqlCfg) {
            super(cfg);
            this.needToList = ["ifaceName","ifaceArgs","beforeAttr","afterAttr","deltaAttr"];
            this.needToDate = ["cTime"];
            this.tableName = 'g_attr_chg';
        }
    }
    export class GMazeUsr extends Dao_gs<IGMazeUsr, IGMAZEUSR>{
        constructor(cfg ? : MysqlCfg) {
            super(cfg);
            this.needToList = ["pos","unLockEventList","unKilledUids","mapInfo"];
            this.needToDate = ["powerTime","sTime","uTime","cTime"];
            this.tableName = 'g_maze_usr';
        }
    }
    export class GMazeRcd extends Dao_gs<IGMazeRcd, IGMAZERCD>{
        constructor(cfg ? : MysqlCfg) {
            super(cfg);
            this.needToList = ["content"];
            this.needToDate = [];
            this.tableName = 'g_maze_rcd';
        }
    }
    export class GGodImprint extends Dao_gs<IGGodImprint, IGGODIMPRINT>{
        constructor(cfg ? : MysqlCfg) {
            super(cfg);
            this.needToList = ["skills","attr"];
            this.needToDate = ["uTime","cTime"];
            this.tableName = 'g_god_imprint';
        }
    }
    export class GPetBase extends Dao_gs<IGPetBase, IGPETBASE>{
        constructor(cfg ? : MysqlCfg) {
            super(cfg);
            this.needToList = ["handbook"];
            this.needToDate = ["rTime","uTime","cTime"];
            this.tableName = 'g_pet_base';
        }
    }
    export class GPet extends Dao_gs<IGPet, IGPET>{
        constructor(cfg ? : MysqlCfg) {
            super(cfg);
            this.needToList = ["attr"];
            this.needToDate = ["uTime","cTime"];
            this.tableName = 'g_pet';
        }
    }
    export class GRbPer extends Dao_gs<IGRbPer, IGRBPER>{
        constructor(cfg ? : MysqlCfg) {
            super(cfg);
            this.needToList = ["matchUsrDisplay","matchUsrDetail"];
            this.needToDate = ["fTime","failTime","uTime","cTime"];
            this.tableName = 'g_rb_per';
        }
    }
    export class GRbLog extends Dao_gs<IGRbLog, IGRBLOG>{
        constructor(cfg ? : MysqlCfg) {
            super(cfg);
            this.needToList = ["ext"];
            this.needToDate = ["uTime","cTime"];
            this.tableName = 'g_rb_log';
        }
    }
    export class GActPeakBet extends Dao_gs<IGActPeakBet, IGACTPEAKBET>{
        constructor(cfg ? : MysqlCfg) {
            super(cfg);
            this.needToList = [];
            this.needToDate = ["uTime","cTime"];
            this.tableName = 'g_act_peak_bet';
        }
    }
    export let gDidPoolDao: GDidPool = new GDidPool();
    export let gUsrDao: GUsr = new GUsr();
    export let gUsrOlDao: GUsrOl = new GUsrOl();
    export let gUsrExtDao: GUsrExt = new GUsrExt();
    export let gUsrCountDao: GUsrCount = new GUsrCount();
    export let gUsrRcdDao: GUsrRcd = new GUsrRcd();
    export let gUsrSetDao: GUsrSet = new GUsrSet();
    export let gUsrSdkRwdDao: GUsrSdkRwd = new GUsrSdkRwd();
    export let gUsrLoginHistDao: GUsrLoginHist = new GUsrLoginHist();
    export let gUsrSsDao: GUsrSs = new GUsrSs();
    export let gBoxDao: GBox = new GBox();
    export let gEquipBaseDao: GEquipBase = new GEquipBase();
    export let gEquipDao: GEquip = new GEquip();
    export let gHandbookDao: GHandbook = new GHandbook();
    export let gWingDao: GWing = new GWing();
    export let gRufBaseDao: GRufBase = new GRufBase();
    export let gRufDao: GRuf = new GRuf();
    export let gHonourDao: GHonour = new GHonour();
    export let gTitleDao: GTitle = new GTitle();
    export let gTitleHistDao: GTitleHist = new GTitleHist();
    export let gGemDao: GGem = new GGem();
    export let gGemPaperDao: GGemPaper = new GGemPaper();
    export let gGemSchemeDao: GGemScheme = new GGemScheme();
    export let gSacraDao: GSacra = new GSacra();
    export let gSacraDrawLogDao: GSacraDrawLog = new GSacraDrawLog();
    export let gLuckyLabaDao: GLuckyLaba = new GLuckyLaba();
    export let gLuckyLabaDrawLogDao: GLuckyLabaDrawLog = new GLuckyLabaDrawLog();
    export let gMineDao: GMine = new GMine();
    export let gMineGoodsDao: GMineGoods = new GMineGoods();
    export let gMineRockDao: GMineRock = new GMineRock();
    export let gMineIncomeDao: GMineIncome = new GMineIncome();
    export let gMineEnemyDao: GMineEnemy = new GMineEnemy();
    export let gMineLogDao: GMineLog = new GMineLog();
    export let gMineSkinDao: GMineSkin = new GMineSkin();
    export let gSubscribeDao: GSubscribe = new GSubscribe();
    export let gSubscribeJobDao: GSubscribeJob = new GSubscribeJob();
    export let gMsgNotifyJobDao: GMsgNotifyJob = new GMsgNotifyJob();
    export let gChatReportDao: GChatReport = new GChatReport();
    export let gIcoFrmDao: GIcoFrm = new GIcoFrm();
    export let gBubbleDao: GBubble = new GBubble();
    export let gTaskMainDao: GTaskMain = new GTaskMain();
    export let gTaskDlyDao: GTaskDly = new GTaskDly();
    export let gTaskAchDao: GTaskAch = new GTaskAch();
    export let gTaskInvDao: GTaskInv = new GTaskInv();
    export let gShopDao: GShop = new GShop();
    export let gRchgDao: GRchg = new GRchg();
    export let gRchgCardDao: GRchgCard = new GRchgCard();
    export let gRchgDayDao: GRchgDay = new GRchgDay();
    export let gRchgDayHistDao: GRchgDayHist = new GRchgDayHist();
    export let gRchgPopBagDao: GRchgPopBag = new GRchgPopBag();
    export let gRchgExtDao: GRchgExt = new GRchgExt();
    export let gMailDao: GMail = new GMail();
    export let gFmlDao: GFml = new GFml();
    export let gFmlExtDao: GFmlExt = new GFmlExt();
    export let gFmlChgHistDao: GFmlChgHist = new GFmlChgHist();
    export let gFmlApplyDao: GFmlApply = new GFmlApply();
    export let gFmlMbDao: GFmlMb = new GFmlMb();
    export let gFmlCopyDao: GFmlCopy = new GFmlCopy();
    export let gAssistDao: GAssist = new GAssist();
    export let gInviteDao: GInvite = new GInvite();
    export let gBlessDao: GBless = new GBless();
    export let gBlessHistDao: GBlessHist = new GBlessHist();
    export let gActRankDao: GActRank = new GActRank();
    export let gActRecordDao: GActRecord = new GActRecord();
    export let gActRwdDao: GActRwd = new GActRwd();
    export let gActSumDao: GActSum = new GActSum();
    export let gActMemoryLogDao: GActMemoryLog = new GActMemoryLog();
    export let gSignDao: GSign = new GSign();
    export let gKingOrderDao: GKingOrder = new GKingOrder();
    export let gCopyDao: GCopy = new GCopy();
    export let gCopyEliteDao: GCopyElite = new GCopyElite();
    export let gCopyAbyssDao: GCopyAbyss = new GCopyAbyss();
    export let gShareDao: GShare = new GShare();
    export let gRedeemUsrDao: GRedeemUsr = new GRedeemUsr();
    export let gArenaDao: GArena = new GArena();
    export let gArenaRecordDao: GArenaRecord = new GArenaRecord();
    export let gArenaWeekhisDao: GArenaWeekhis = new GArenaWeekhis();
    export let gTowerDao: GTower = new GTower();
    export let gTowerHistTop20Dao: GTowerHistTop20 = new GTowerHistTop20();
    export let gRuneBaseDao: GRuneBase = new GRuneBase();
    export let gRunePartDao: GRunePart = new GRunePart();
    export let gRuneDao: GRune = new GRune();
    export let gRuneRcdDao: GRuneRcd = new GRuneRcd();
    export let gRuneTaskDao: GRuneTask = new GRuneTask();
    export let gAttrChgDao: GAttrChg = new GAttrChg();
    export let gMazeUsrDao: GMazeUsr = new GMazeUsr();
    export let gMazeRcdDao: GMazeRcd = new GMazeRcd();
    export let gGodImprintDao: GGodImprint = new GGodImprint();
    export let gPetBaseDao: GPetBase = new GPetBase();
    export let gPetDao: GPet = new GPet();
    export let gRbPerDao: GRbPer = new GRbPer();
    export let gRbLogDao: GRbLog = new GRbLog();
    export let gActPeakBetDao: GActPeakBet = new GActPeakBet();
}