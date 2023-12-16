/// <reference path="../base/mysql/Dao.ts" />
module H {
    export let mysql_main = initPool({"database":"main"});          
    export class Dao_main<S, U> extends Dao<S, U> {
        constructor(cfg ? : MysqlCfg) {
            super(cfg);
        }

        get client(): any {
            return this._promisePool || mysql_main;
        }
    }
    export const enum IGBWMENU {
        /** 类型 */
        type = "type",
        /** 功能 */
        func = "func",
        /** 目标 */
        target = "target",
        /** 封号原因 */
        banReason = "banReason",
        /** 目标值 */
        v = "v",
        /** 失效时间 */
        invalidTime = "invalidTime",
    } 
    export interface IGBwMenu {
        /** 类型 */       
        type?: number;
        /** 功能 */       
        func?: number;
        /** 目标 */       
        target?: number;
        /** 封号原因 */       
        banReason?: string;
        /** 目标值 */       
        v?: string;
        /** 失效时间 */       
        invalidTime?: Date;
    }
    export const enum IGACCSET {
        /** 玩家账号Id */
        aid = "aid",
        /** 设置类型 */
        type = "type",
        /** 设置的玩家ID */
        uid = "uid",
        /** 是否开启 */
        isOpen = "isOpen",
        /** 设置值 */
        value = "value",
        /** 领取时间 */
        recvTime = "recvTime",
        /** 更新时间 */
        uTime = "uTime",
        /** 创建时间 */
        cTime = "cTime",
    } 
    export interface IGAccSet {
        /** 玩家账号Id */       
        aid?: number;
        /** 设置类型 */       
        type?: number;
        /** 设置的玩家ID */       
        uid?: number;
        /** 是否开启 */       
        isOpen?: number;
        /** 设置值 */       
        value?: any;
        /** 领取时间 */       
        recvTime?: Date;
        /** 更新时间 */       
        uTime?: Date;
        /** 创建时间 */       
        cTime?: Date;
    }
    export const enum IGGSFMLINFO {
        /** 宗门ID */
        fid = "fid",
        /** 所在分服ID */
        gsIdx = "gsIdx",
        /** 创建者的玩家ID */
        cuid = "cuid",
        /** 会长uid */
        mstUid = "mstUid",
        /** 宗门等级 */
        lvl = "lvl",
        /** 宗门成员数 */
        mbCnt = "mbCnt",
        /** 宗门名字 */
        name = "name",
        /** 会长名字 */
        mstName = "mstName",
        /** 会长头像 */
        mstIco = "mstIco",
        /** 家族旗帜 */
        ico = "ico",
    } 
    export interface IGGsFmlInfo {
        /** 宗门ID */       
        fid?: number;
        /** 所在分服ID */       
        gsIdx?: number;
        /** 创建者的玩家ID */       
        cuid?: number;
        /** 会长uid */       
        mstUid?: number;
        /** 宗门等级 */       
        lvl?: number;
        /** 宗门成员数 */       
        mbCnt?: number;
        /** 宗门名字 */       
        name?: string;
        /** 会长名字 */       
        mstName?: string;
        /** 会长头像 */       
        mstIco?: string;
        /** 家族旗帜 */       
        ico?: string;
    }
    export const enum IGGSUSRINFO {
        /** 用户ID */
        uid = "uid",
        /** 账号ID */
        aid = "aid",
        /** 区服ID */
        gsId = "gsId",
        /** 分服下标 */
        gsIdx = "gsIdx",
        /** SDKID */
        sdkId = "sdkId",
        /** 渠道ID */
        chnId = "chnId",
        /** 性别 */
        sex = "sex",
        /** 身份等级 */
        lvl = "lvl",
        /** VIP等级 */
        vip = "vip",
        /** 钻石 */
        dmd = "dmd",
        /** 金币 */
        gld = "gld",
        /** 总属性 */
        cmt = "cmt",
        /** 商会ID */
        fmlId = "fmlId",
        /** 查询时间戳 */
        ms = "ms",
        /** 登录时候的设备系统类型 */
        lOsType = "lOsType",
        /** 玩家显示ID */
        did = "did",
        /** 玩家名称 */
        name = "name",
        /** 账号名称 */
        accName = "accName",
        /** 头像 */
        ico = "ico",
        /** 邀请好友的激活码 */
        inviteCode = "inviteCode",
        /** 登陆时间 */
        lTime = "lTime",
        /** 创建时间 */
        cTime = "cTime",
    } 
    export interface IGGsUsrInfo {
        /** 用户ID */       
        uid?: number;
        /** 账号ID */       
        aid?: number;
        /** 区服ID */       
        gsId?: number;
        /** 分服下标 */       
        gsIdx?: number;
        /** SDKID */       
        sdkId?: number;
        /** 渠道ID */       
        chnId?: number;
        /** 性别 */       
        sex?: number;
        /** 身份等级 */       
        lvl?: number;
        /** VIP等级 */       
        vip?: number;
        /** 钻石 */       
        dmd?: number;
        /** 金币 */       
        gld?: number;
        /** 总属性 */       
        cmt?: number;
        /** 商会ID */       
        fmlId?: number;
        /** 查询时间戳 */       
        ms?: number;
        /** 登录时候的设备系统类型 */       
        lOsType?: number;
        /** 玩家显示ID */       
        did?: string;
        /** 玩家名称 */       
        name?: string;
        /** 账号名称 */       
        accName?: string;
        /** 头像 */       
        ico?: string;
        /** 邀请好友的激活码 */       
        inviteCode?: string;
        /** 登陆时间 */       
        lTime?: Date;
        /** 创建时间 */       
        cTime?: Date;
    }
    export const enum IGGSACTSTATUS {
        /** 批次ID */
        batchId = "batchId",
        /** 区服ID */
        grpId = "grpId",
        /** 当前状态 */
        status = "status",
        /** 创建时间 */
        cTime = "cTime",
    } 
    export interface IGGsActStatus {
        /** 批次ID */       
        batchId?: number;
        /** 区服ID */       
        grpId?: number;
        /** 当前状态 */       
        status?: number;
        /** 创建时间 */       
        cTime?: Date;
    }
    export const enum IGGSACTRANKHIST {
        /** 玩家ID */
        uid = "uid",
        /** 批次ID */
        batchId = "batchId",
        /** 区服ID */
        grpId = "grpId",
        /** 玩家等级 */
        lvl = "lvl",
        /** 玩家VIP */
        vip = "vip",
        /** 排名 */
        rank = "rank",
        /** 排行值 */
        rankValue = "rankValue",
        /** 玩家名字 */
        name = "name",
        /** 创建时间 */
        cTime = "cTime",
    } 
    export interface IGGsActRankHist {
        /** 玩家ID */       
        uid?: number;
        /** 批次ID */       
        batchId?: number;
        /** 区服ID */       
        grpId?: number;
        /** 玩家等级 */       
        lvl?: number;
        /** 玩家VIP */       
        vip?: number;
        /** 排名 */       
        rank?: number;
        /** 排行值 */       
        rankValue?: number;
        /** 玩家名字 */       
        name?: string;
        /** 创建时间 */       
        cTime?: Date;
    }
    export const enum IGCPINVITEFRDS {
        /** 玩家ID */
        uid = "uid",
        /** 玩家账号ID */
        accId = "accId",
        /** 邀请者玩家ID */
        iUid = "iUid",
        /** 邀请者玩家账号ID */
        iAccId = "iAccId",
        /** 玩家等级 */
        lvl = "lvl",
        /** 玩家VIP等级 */
        vip = "vip",
        /** 邀请来源 */
        way = "way",
        /** 玩家名字 */
        name = "name",
        /** 玩家头像 */
        ico = "ico",
        /** 玩家第三方头像 */
        thirdIco = "thirdIco",
        /** 更新时间 */
        uTime = "uTime",
        /** 创建时间 */
        cTime = "cTime",
    } 
    export interface IGCpInviteFrds {
        /** 玩家ID */       
        uid?: number;
        /** 玩家账号ID */       
        accId?: number;
        /** 邀请者玩家ID */       
        iUid?: number;
        /** 邀请者玩家账号ID */       
        iAccId?: number;
        /** 玩家等级 */       
        lvl?: number;
        /** 玩家VIP等级 */       
        vip?: number;
        /** 邀请来源 */       
        way?: number;
        /** 玩家名字 */       
        name?: string;
        /** 玩家头像 */       
        ico?: string;
        /** 玩家第三方头像 */       
        thirdIco?: string;
        /** 更新时间 */       
        uTime?: Date;
        /** 创建时间 */       
        cTime?: Date;
    }
    export const enum IGRCHGREQ {
        /** 游戏订单号 */
        orderNo = "orderNo",
        /** 平台业务号 */
        transId = "transId",
        /** type指定模式下对应的值，例如type为活动类型，那么这个值表示的就是活动的id */
        value = "value",
        /** 支付IP */
        ip = "ip",
        /** 玩家ID */
        uid = "uid",
        /** 充值项ID */
        rid = "rid",
        /** 目的是为了做折扣模式的时候，在实际支付是会切换为其他的充值项的需求 */
        rid_pay = "rid_pay",
        /** 在折扣模式下的时候，这个值会按照实际充值时候的折扣充值项的来走 */
        cny = "cny",
        /** 状态 */
        status = "status",
        /** undefined */
        sdkId = "sdkId",
        /** 购买类型 */
        buyType = "buyType",
        /** buyType为normal的时候值为0，toDst和fromDst的时候为目标用户的id */
        dstUid = "dstUid",
        /** 类型见CONST.rchgMode。 */
        type = "type",
        /** 例如type为活动类型时有用，记录充值的活动批次Id */
        actBatchId = "actBatchId",
        /** 是否已退款 */
        isRefund = "isRefund",
        /** 用户拉起充值的时候的快照信息，例如vip是多少级等 */
        snapshot = "snapshot",
        /** 充值回调信息 */
        cbInfo = "cbInfo",
        /** 错误信息 */
        err = "err",
        /** 扩展参数 */
        ext = "ext",
        /** 用户拉起充值请求的时间 */
        reqTime = "reqTime",
        /** cp接收到平台的支付回调的时间 */
        sdkTime = "sdkTime",
        /** 游戏进行发货的时间 */
        sendTime = "sendTime",
    } 
    export interface IGRchgReq {
        /** 游戏订单号 */       
        orderNo?: string;
        /** 平台业务号 */       
        transId?: string;
        /** type指定模式下对应的值，例如type为活动类型，那么这个值表示的就是活动的id */       
        value?: string;
        /** 支付IP */       
        ip?: string;
        /** 玩家ID */       
        uid?: number;
        /** 充值项ID */       
        rid?: number;
        /** 目的是为了做折扣模式的时候，在实际支付是会切换为其他的充值项的需求 */       
        rid_pay?: number;
        /** 在折扣模式下的时候，这个值会按照实际充值时候的折扣充值项的来走 */       
        cny?: number;
        /** 状态 */       
        status?: number;
        /** undefined */       
        sdkId?: number;
        /** 购买类型 */       
        buyType?: number;
        /** buyType为normal的时候值为0，toDst和fromDst的时候为目标用户的id */       
        dstUid?: number;
        /** 类型见CONST.rchgMode。 */       
        type?: number;
        /** 例如type为活动类型时有用，记录充值的活动批次Id */       
        actBatchId?: number;
        /** 是否已退款 */       
        isRefund?: number;
        /** 用户拉起充值的时候的快照信息，例如vip是多少级等 */       
        snapshot?: string;
        /** 充值回调信息 */       
        cbInfo?: string;
        /** 错误信息 */       
        err?: string;
        /** 扩展参数 */       
        ext?: any;
        /** 用户拉起充值请求的时间 */       
        reqTime?: Date;
        /** cp接收到平台的支付回调的时间 */       
        sdkTime?: Date;
        /** 游戏进行发货的时间 */       
        sendTime?: Date;
    }
    export const enum IGONLYNAME {
        /** 类型 */
        type = "type",
        /** 例:家族对应的就是家族ID */
        typeId = "typeId",
        /** 状态 */
        status = "status",
        /** 名字 */
        name = "name",
    } 
    export interface IGOnlyName {
        /** 类型 */       
        type?: number;
        /** 例:家族对应的就是家族ID */       
        typeId?: number;
        /** 状态 */       
        status?: number;
        /** 名字 */       
        name?: string;
    }
    export const enum IGCUSTOMICO {
        /** MD5值 */
        md5 = "md5",
        /** undefined */
        imgText = "imgText",
    } 
    export interface IGCustomIco {
        /** MD5值 */       
        md5?: string;
        /** undefined */       
        imgText?: string;
    }
    export const enum IGACTTMP {
        /** id做了约束,通过规则生成 */
        id = "id",
        /** 活动类型 */
        type = "type",
        /** 模板名称 */
        name = "name",
        /** 模板简要描述 */
        desc = "desc",
        /** 模板条件 */
        cnd = "cnd",
        /** 活动图标 */
        imgIco = "imgIco",
        /** 活动标题Banner图 */
        imgTitle = "imgTitle",
        /** 活动背景图 */
        imgBg = "imgBg",
        /** 开放显示的物品列表 */
        sItemIds = "sItemIds",
        /** 拓展字段 */
        ext = "ext",
        /** 多语言模板映射 */
        langMap = "langMap",
        /** 格式:[{id:,name:,dmd:,},...] */
        giftbag = "giftbag",
        /** 格式:[[gain,cnd,ext],...] */
        content = "content",
        /** 格式：{"usr:":[],"fml":[]} */
        rank = "rank",
        /** 格式：{"usr:":[],"fml":[]} */
        rank2 = "rank2",
        /** 格式:[[type,[[id,reward,tarValue],...]],...] */
        task = "task",
        /** 格式:[{},...] */
        buy = "buy",
        /** 更新时间 */
        uTime = "uTime",
        /** 创建时间 */
        cTime = "cTime",
    } 
    export interface IGActTmp {
        /** id做了约束,通过规则生成 */       
        id?: number;
        /** 活动类型 */       
        type?: number;
        /** 模板名称 */       
        name?: string;
        /** 模板简要描述 */       
        desc?: string;
        /** 模板条件 */       
        cnd?: any;
        /** 活动图标 */       
        imgIco?: string;
        /** 活动标题Banner图 */       
        imgTitle?: string;
        /** 活动背景图 */       
        imgBg?: string;
        /** 开放显示的物品列表 */       
        sItemIds?: number[];
        /** 拓展字段 */       
        ext?: any;
        /** 多语言模板映射 */       
        langMap?: {[lang:string]:any};
        /** 格式:[{id:,name:,dmd:,},...] */       
        giftbag?: any[];
        /** 格式:[[gain,cnd,ext],...] */       
        content?: any[];
        /** 格式：{"usr:":[],"fml":[]} */       
        rank?: any;
        /** 格式：{"usr:":[],"fml":[]} */       
        rank2?: any;
        /** 格式:[[type,[[id,reward,tarValue],...]],...] */       
        task?: any[];
        /** 格式:[{},...] */       
        buy?: any[];
        /** 更新时间 */       
        uTime?: Date;
        /** 创建时间 */       
        cTime?: Date;
    }
    export const enum IGACTTMPLANG {
        /** 活动模板Id */
        tmpId = "tmpId",
        /** 语言 */
        lang = "lang",
        /** 模板名称 */
        name = "name",
        /** 活动规则描述 */
        rule = "rule",
        /** 文本映射 */
        textMap = "textMap",
        /** 更新时间 */
        uTime = "uTime",
        /** 创建时间 */
        cTime = "cTime",
    } 
    export interface IGActTmpLang {
        /** 活动模板Id */       
        tmpId?: number;
        /** 语言 */       
        lang?: string;
        /** 模板名称 */       
        name?: string;
        /** 活动规则描述 */       
        rule?: string;
        /** 文本映射 */       
        textMap?: any;
        /** 更新时间 */       
        uTime?: Date;
        /** 创建时间 */       
        cTime?: Date;
    }
    export const enum IGACTBATCH {
        /** 批次ID */
        id = "id",
        /** 模板ID */
        tmpId = "tmpId",
        /** 模板类型 */
        tmpType = "tmpType",
        /** 状态 */
        status = "status",
        /** 生效类型 */
        effType = "effType",
        /** 排序(越小越前面) */
        sort = "sort",
        /** 公告模板ID */
        noticeId = "noticeId",
        /** 活动名称 */
        name = "name",
        /** 活动描述 */
        desc = "desc",
        /** 对应effType=1或者2,配置的表达式为: 天数,小时数,分钟数 或者: 天数,小时数 或者: 天数. */
        beginDay = "beginDay",
        /** 配置的表达式为: 天数,小时数,分钟数 或者: 天数,小时数 或者: 天数. */
        duration = "duration",
        /** 配置的表达式和duration一致 */
        duration_before = "duration_before",
        /** 配置的表达式和duration一致 */
        duration_after = "duration_after",
        /** 格式：[1,"1-2", "2:*"] */
        gsIdList_white = "gsIdList_white",
        /** 格式：[1,"1-2", "2:*"] */
        gsIdList_black = "gsIdList_black",
        /** 对应effType=0 */
        beginTime = "beginTime",
        /** 更新时间 */
        uTime = "uTime",
        /** 创建时间 */
        cTime = "cTime",
        /** 跨服分组映射 */
        roomMap = "roomMap",
    } 
    export interface IGActBatch {
        /** 批次ID */       
        id?: number;
        /** 模板ID */       
        tmpId?: number;
        /** 模板类型 */       
        tmpType?: number;
        /** 状态 */       
        status?: number;
        /** 生效类型 */       
        effType?: number;
        /** 排序(越小越前面) */       
        sort?: number;
        /** 公告模板ID */       
        noticeId?: number;
        /** 活动名称 */       
        name?: string;
        /** 活动描述 */       
        desc?: string;
        /** 对应effType=1或者2,配置的表达式为: 天数,小时数,分钟数 或者: 天数,小时数 或者: 天数. */       
        beginDay?: string;
        /** 配置的表达式为: 天数,小时数,分钟数 或者: 天数,小时数 或者: 天数. */       
        duration?: string;
        /** 配置的表达式和duration一致 */       
        duration_before?: string;
        /** 配置的表达式和duration一致 */       
        duration_after?: string;
        /** 格式：[1,"1-2", "2:*"] */       
        gsIdList_white?: string[];
        /** 格式：[1,"1-2", "2:*"] */       
        gsIdList_black?: string[];
        /** 对应effType=0 */       
        beginTime?: Date;
        /** 更新时间 */       
        uTime?: Date;
        /** 创建时间 */       
        cTime?: Date;
        /** 跨服分组映射 */       
        roomMap?: any;
    }
    export const enum IGACTGRP {
        /** 主键ID */
        id = "id",
        /** 活动批次ID */
        batchId = "batchId",
        /** 模板ID */
        tmpId = "tmpId",
        /** 状态 */
        status = "status",
        /** 生效类型 */
        effType = "effType",
        /** 排序(越小越前面) */
        sort = "sort",
        /** 公告模板ID */
        noticeId = "noticeId",
        /** 这里不做黑白名单，一般是对几个指定区服开启 */
        grpIdList = "grpIdList",
        /** 活动名称 */
        name = "name",
        /** 活动描述 */
        desc = "desc",
        /** 同g_act_batch表 */
        beginDay = "beginDay",
        /** 同g_act_batch表 */
        duration = "duration",
        /** 同g_act_batch表 */
        duration_before = "duration_before",
        /** 同g_act_batch表 */
        duration_after = "duration_after",
        /** 对应effType=0 */
        beginTime = "beginTime",
        /** 记录的是GM更新的时候的更新时间 */
        uTime = "uTime",
    } 
    export interface IGActGrp {
        /** 主键ID */       
        id?: number;
        /** 活动批次ID */       
        batchId?: number;
        /** 模板ID */       
        tmpId?: number;
        /** 状态 */       
        status?: number;
        /** 生效类型 */       
        effType?: number;
        /** 排序(越小越前面) */       
        sort?: number;
        /** 公告模板ID */       
        noticeId?: number;
        /** 这里不做黑白名单，一般是对几个指定区服开启 */       
        grpIdList?: number[];
        /** 活动名称 */       
        name?: string;
        /** 活动描述 */       
        desc?: string;
        /** 同g_act_batch表 */       
        beginDay?: string;
        /** 同g_act_batch表 */       
        duration?: string;
        /** 同g_act_batch表 */       
        duration_before?: string;
        /** 同g_act_batch表 */       
        duration_after?: string;
        /** 对应effType=0 */       
        beginTime?: Date;
        /** 记录的是GM更新的时候的更新时间 */       
        uTime?: Date;
    }
    export const enum IGACTNOTICE {
        /** 公告ID */
        id = "id",
        /** 额外字段，避免要建结构体 */
        mainType = "mainType",
        /** 是否是热门活动 */
        isHot = "isHot",
        /** 是否轮播 */
        isTurns = "isTurns",
        /** 排序(越大越前面) */
        sort = "sort",
        /** 额外字段，避免要建结构体 */
        cd = "cd",
        /** 额外字段，避免要建结构体 */
        isNew = "isNew",
        /** 公告名字(无用运营看) */
        name = "name",
        /** 活动标题 */
        ttl = "ttl",
        /** 内容图片 */
        img = "img",
        /** 图片边框 */
        img_frm = "img_frm",
        /** 额外字段，避免要建结构体 */
        param = "param",
        /** 活动内容 */
        content = "content",
        /** 更新时间 */
        uTime = "uTime",
        /** 创建时间 */
        cTime = "cTime",
    } 
    export interface IGActNotice {
        /** 公告ID */       
        id?: number;
        /** 额外字段，避免要建结构体 */       
        mainType?: number;
        /** 是否是热门活动 */       
        isHot?: number;
        /** 是否轮播 */       
        isTurns?: number;
        /** 排序(越大越前面) */       
        sort?: number;
        /** 额外字段，避免要建结构体 */       
        cd?: number;
        /** 额外字段，避免要建结构体 */       
        isNew?: number;
        /** 公告名字(无用运营看) */       
        name?: string;
        /** 活动标题 */       
        ttl?: string;
        /** 内容图片 */       
        img?: string;
        /** 图片边框 */       
        img_frm?: string;
        /** 额外字段，避免要建结构体 */       
        param?: any;
        /** 活动内容 */       
        content?: string;
        /** 更新时间 */       
        uTime?: Date;
        /** 创建时间 */       
        cTime?: Date;
    }
    export const enum IGACTNOTICELANG {
        /** m_notice中的id */
        tmpId = "tmpId",
        /** 语言类型 */
        lang = "lang",
        /** 活动标题 */
        ttl = "ttl",
        /** 内容图片 */
        img = "img",
        /** 图片边框 */
        img_frm = "img_frm",
        /** 活动内容 */
        content = "content",
        /** 更新时间 */
        uTime = "uTime",
        /** 创建时间 */
        cTime = "cTime",
    } 
    export interface IGActNoticeLang {
        /** m_notice中的id */       
        tmpId?: number;
        /** 语言类型 */       
        lang?: string;
        /** 活动标题 */       
        ttl?: string;
        /** 内容图片 */       
        img?: string;
        /** 图片边框 */       
        img_frm?: string;
        /** 活动内容 */       
        content?: string;
        /** 更新时间 */       
        uTime?: Date;
        /** 创建时间 */       
        cTime?: Date;
    }
    export const enum IGMAILTMP {
        /** 模板ID */
        id = "id",
        /** 邮件存活时间(小时) */
        hours = "hours",
        /** 状态 */
        status = "status",
        /** 标题 */
        ttl = "ttl",
        /** 内容 */
        content = "content",
        /** 扩展信息 */
        ext = "ext",
    } 
    export interface IGMailTmp {
        /** 模板ID */       
        id?: number;
        /** 邮件存活时间(小时) */       
        hours?: number;
        /** 状态 */       
        status?: number;
        /** 标题 */       
        ttl?: string;
        /** 内容 */       
        content?: string;
        /** 扩展信息 */       
        ext?: any;
    }
    export const enum IGMAILTMPLANG {
        /** 邮件模板id */
        tmpId = "tmpId",
        /** 语言 */
        lang = "lang",
        /** 标题 */
        ttl = "ttl",
        /** 内容 */
        content = "content",
    } 
    export interface IGMailTmpLang {
        /** 邮件模板id */       
        tmpId?: number;
        /** 语言 */       
        lang?: string;
        /** 标题 */       
        ttl?: string;
        /** 内容 */       
        content?: string;
    }
    export const enum IGMAILALL {
        /** 全服邮件ID */
        id = "id",
        /** 状态 */
        status = "status",
        /** 
            模式，如果是0，就表示客户端配置表模式，1表示gm配置模式。
            
         */
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
        /** 包ID */
        packageId = "packageId",
        /** 阅读后几小时删除 */
        readDelHours = "readDelHours",
        /** 格式：[100001,"100001-100002", "2:*"] */
        gsIdList_white = "gsIdList_white",
        /** 格式：[100001,"100001-100002", "2:*"] */
        gsIdList_black = "gsIdList_black",
        /** 微端版本号 */
        appVersion = "appVersion",
        /** 参数 */
        param = "param",
        /** 物品 */
        items = "items",
        /** 拓展字段 */
        ext = "ext",
        /** 生效时间 */
        sTime = "sTime",
        /** 结束时间 */
        eTime = "eTime",
        /** 添加时间 */
        cTime = "cTime",
    } 
    export interface IGMailAll {
        /** 全服邮件ID */       
        id?: number;
        /** 状态 */       
        status?: number;
        /** 
            模式，如果是0，就表示客户端配置表模式，1表示gm配置模式。
            
         */       
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
        /** 包ID */       
        packageId?: number;
        /** 阅读后几小时删除 */       
        readDelHours?: number;
        /** 格式：[100001,"100001-100002", "2:*"] */       
        gsIdList_white?: string[];
        /** 格式：[100001,"100001-100002", "2:*"] */       
        gsIdList_black?: string[];
        /** 微端版本号 */       
        appVersion?: string;
        /** 参数 */       
        param?: any;
        /** 物品 */       
        items?: number[][];
        /** 拓展字段 */       
        ext?: any;
        /** 生效时间 */       
        sTime?: Date;
        /** 结束时间 */       
        eTime?: Date;
        /** 添加时间 */       
        cTime?: Date;
    }
    export const enum IGNOTICE {
        /** 主键ID */
        id = "id",
        /** 类型 */
        type = "type",
        /** 状态 */
        status = "status",
        /** 排序 */
        sort = "sort",
        /** 为空表示全渠道 */
        chnIdList = "chnIdList",
        /** 标题 */
        ttl = "ttl",
        /** 内容图片 */
        img = "img",
        /** 格式：[1,"1-2", "*"] */
        gsNameList = "gsNameList",
        /** 内容 */
        content = "content",
        /** 开始时间 */
        bTime = "bTime",
        /** 结束时间 */
        eTime = "eTime",
        /** 更新时间 */
        uTime = "uTime",
        /** 创建时间 */
        cTime = "cTime",
    } 
    export interface IGNotice {
        /** 主键ID */       
        id?: number;
        /** 类型 */       
        type?: number;
        /** 状态 */       
        status?: number;
        /** 排序 */       
        sort?: number;
        /** 为空表示全渠道 */       
        chnIdList?: number[];
        /** 标题 */       
        ttl?: string;
        /** 内容图片 */       
        img?: string;
        /** 格式：[1,"1-2", "*"] */       
        gsNameList?: string[];
        /** 内容 */       
        content?: string;
        /** 开始时间 */       
        bTime?: Date;
        /** 结束时间 */       
        eTime?: Date;
        /** 更新时间 */       
        uTime?: Date;
        /** 创建时间 */       
        cTime?: Date;
    }
    export const enum IGNOTICELANG {
        /** m_notice中的id */
        tmpId = "tmpId",
        /** 语言类型 */
        lang = "lang",
        /** 标题 */
        ttl = "ttl",
        /** 内容图片 */
        img = "img",
        /** 内容 */
        content = "content",
        /** 更新时间 */
        uTime = "uTime",
        /** 创建时间 */
        cTime = "cTime",
    } 
    export interface IGNoticeLang {
        /** m_notice中的id */       
        tmpId?: number;
        /** 语言类型 */       
        lang?: string;
        /** 标题 */       
        ttl?: string;
        /** 内容图片 */       
        img?: string;
        /** 内容 */       
        content?: string;
        /** 更新时间 */       
        uTime?: Date;
        /** 创建时间 */       
        cTime?: Date;
    }
    export const enum IGSYSMSG {
        /** 主键ID */
        id = "id",
        /** 模板ID */
        tmpId = "tmpId",
        /** 同消息模板表的type，额外字段，数据库不存该值 */
        type = "type",
        /** 状态 */
        status = "status",
        /** -1表示立即发送，其余的表示定时发送，如果count为0，表示无限发送，直到endTime到了 */
        count = "count",
        /** 只有定时发送模式才有 */
        curCount = "curCount",
        /** 只有定时发送模式才有 */
        minutes = "minutes",
        /** 是否结束 */
        isEnd = "isEnd",
        /** 额外字段，数据库不存该值 */
        contentMap = "contentMap",
        /** 内容参数 */
        param = "param",
        /** 要发送的区服ID，为空表示全服推送 */
        grpIds = "grpIds",
        /** 发送时间 */
        sendTime = "sendTime",
        /** 结束时间 */
        endTime = "endTime",
        /** 创建时间 */
        cTime = "cTime",
    } 
    export interface IGSysMsg {
        /** 主键ID */       
        id?: number;
        /** 模板ID */       
        tmpId?: number;
        /** 同消息模板表的type，额外字段，数据库不存该值 */       
        type?: number;
        /** 状态 */       
        status?: number;
        /** -1表示立即发送，其余的表示定时发送，如果count为0，表示无限发送，直到endTime到了 */       
        count?: number;
        /** 只有定时发送模式才有 */       
        curCount?: number;
        /** 只有定时发送模式才有 */       
        minutes?: number;
        /** 是否结束 */       
        isEnd?: number;
        /** 额外字段，数据库不存该值 */       
        contentMap?: {[lang: string]: string};
        /** 内容参数 */       
        param?: any;
        /** 要发送的区服ID，为空表示全服推送 */       
        grpIds?: number[];
        /** 发送时间 */       
        sendTime?: Date;
        /** 结束时间 */       
        endTime?: Date;
        /** 创建时间 */       
        cTime?: Date;
    }
    export const enum IGSYSMSGTMP {
        /** 主键ID */
        id = "id",
        /** 消息类型 */
        type = "type",
        /** 用于GM编辑的时候做区分 */
        name = "name",
        /** 模板内容 */
        content = "content",
        /** 用于gm编辑的时候，知道需要编辑的参数有哪些 */
        paramDesc = "paramDesc",
        /** 创建时间 */
        cTime = "cTime",
        /** 更新时间 */
        uTime = "uTime",
    } 
    export interface IGSysMsgTmp {
        /** 主键ID */       
        id?: number;
        /** 消息类型 */       
        type?: number;
        /** 用于GM编辑的时候做区分 */       
        name?: string;
        /** 模板内容 */       
        content?: string;
        /** 用于gm编辑的时候，知道需要编辑的参数有哪些 */       
        paramDesc?: string;
        /** 创建时间 */       
        cTime?: Date;
        /** 更新时间 */       
        uTime?: Date;
    }
    export const enum IGSYSMSGTMPLANG {
        /** 模板ID */
        tmpId = "tmpId",
        /** 语言 */
        lang = "lang",
        /** 内容 */
        content = "content",
        /** 创建时间 */
        cTime = "cTime",
        /** 更新时间 */
        uTime = "uTime",
    } 
    export interface IGSysMsgTmpLang {
        /** 模板ID */       
        tmpId?: number;
        /** 语言 */       
        lang?: string;
        /** 内容 */       
        content?: string;
        /** 创建时间 */       
        cTime?: Date;
        /** 更新时间 */       
        uTime?: Date;
    }
    export const enum IGSUBSCRIBEPUSHTMP {
        /** 配置ID */
        id = "id",
        /** 订阅类型 */
        type = "type",
        /** 单次推送条数限制 */
        limitNum = "limitNum",
        /** 对应SDK关联模版ID */
        tmpId = "tmpId",
        /** 模版名称 */
        name = "name",
        /** 模版描述 */
        desc = "desc",
        /** 模版Key-value */
        dataList = "dataList",
        /** 更新时间 */
        uTime = "uTime",
        /** 创建时间 */
        cTime = "cTime",
    } 
    export interface IGSubscribePushTmp {
        /** 配置ID */       
        id?: number;
        /** 订阅类型 */       
        type?: number;
        /** 单次推送条数限制 */       
        limitNum?: number;
        /** 对应SDK关联模版ID */       
        tmpId?: string;
        /** 模版名称 */       
        name?: string;
        /** 模版描述 */       
        desc?: string;
        /** 模版Key-value */       
        dataList?: any[];
        /** 更新时间 */       
        uTime?: Date;
        /** 创建时间 */       
        cTime?: Date;
    }
    export const enum IGSUBSCRIBEPUSH {
        /** 配置id */
        id = "id",
        /** 订阅推送模版Id */
        tmpId = "tmpId",
        /** 状态（系统发送类型设置开启） */
        status = "status",
        /** 单次推送条数限制 */
        limitNum = "limitNum",
        /** 模版名称 */
        name = "name",
        /** 生效的渠道列表 */
        chnIdList = "chnIdList",
        /** [1,2-10,"1:*","*"] */
        gsNameList = "gsNameList",
        /** 创建时间 */
        cTime = "cTime",
        /** 更新时间 */
        uTime = "uTime",
    } 
    export interface IGSubscribePush {
        /** 配置id */       
        id?: number;
        /** 订阅推送模版Id */       
        tmpId?: number;
        /** 状态（系统发送类型设置开启） */       
        status?: number;
        /** 单次推送条数限制 */       
        limitNum?: number;
        /** 模版名称 */       
        name?: string;
        /** 生效的渠道列表 */       
        chnIdList?: any[];
        /** [1,2-10,"1:*","*"] */       
        gsNameList?: any[];
        /** 创建时间 */       
        cTime?: Date;
        /** 更新时间 */       
        uTime?: Date;
    }
    export const enum IGSUBSCRIBEPUSHLOG {
        /** 配置id */
        id = "id",
        /** 单次推送条数限制 */
        limitNum = "limitNum",
        /** 模版名称 */
        name = "name",
        /** 订阅推送模版Id */
        tmpId = "tmpId",
        /** 生效的渠道列表 */
        chnIdList = "chnIdList",
        /** [1,2-10,"1:*","*"] */
        gsNameList = "gsNameList",
        /** 推送条件 */
        cnd = "cnd",
        /** 模版Key-value */
        dataList = "dataList",
        /** 创建时间 */
        cTime = "cTime",
        /** 更新时间 */
        uTime = "uTime",
    } 
    export interface IGSubscribePushLog {
        /** 配置id */       
        id?: number;
        /** 单次推送条数限制 */       
        limitNum?: number;
        /** 模版名称 */       
        name?: string;
        /** 订阅推送模版Id */       
        tmpId?: string;
        /** 生效的渠道列表 */       
        chnIdList?: number[];
        /** [1,2-10,"1:*","*"] */       
        gsNameList?: any[];
        /** 推送条件 */       
        cnd?: any;
        /** 模版Key-value */       
        dataList?: any[];
        /** 创建时间 */       
        cTime?: Date;
        /** 更新时间 */       
        uTime?: Date;
    }
    export const enum IGOPENMODULE {
        /** 功能名 */
        name = "name",
        /** 模块描述 */
        desc = "desc",
        /** 生效的渠道列表 */
        chnIdList = "chnIdList",
        /** [1,2-10,"1:*","*"] */
        gsNameList = "gsNameList",
        /** 状态 */
        status = "status",
        /** 功能配置 */
        cfg = "cfg",
        /** 开始时间 */
        openTime = "openTime",
        /** 更新时间 */
        uTime = "uTime",
        /** 创建时间 */
        cTime = "cTime",
    } 
    export interface IGOpenModule {
        /** 功能名 */       
        name?: string;
        /** 模块描述 */       
        desc?: string;
        /** 生效的渠道列表 */       
        chnIdList?: any[];
        /** [1,2-10,"1:*","*"] */       
        gsNameList?: any[];
        /** 状态 */       
        status?: number;
        /** 功能配置 */       
        cfg?: any;
        /** 开始时间 */       
        openTime?: Date;
        /** 更新时间 */       
        uTime?: Date;
        /** 创建时间 */       
        cTime?: Date;
    }
    export const enum IGOPENHIDEITEM {
        /** 区服ID */
        grpId = "grpId",
        /** 开放的物品ID列表 */
        itemIds = "itemIds",
        /** 更新时间 */
        uTime = "uTime",
        /** 创建时间 */
        cTime = "cTime",
    } 
    export interface IGOpenHideItem {
        /** 区服ID */       
        grpId?: number;
        /** 开放的物品ID列表 */       
        itemIds?: number[];
        /** 更新时间 */       
        uTime?: Date;
        /** 创建时间 */       
        cTime?: Date;
    }
    export const enum IGROOMCFG {
        /** 房间ID */
        id = "id",
        /** 房间类型 */
        type = "type",
        /** 启用状态 */
        status = "status",
        /** 是否只引用 */
        refOnly = "refOnly",
        /** 排序越大越优先 */
        sort = "sort",
        /** 房间名称 */
        name = "name",
        /** [roomId1,roomId2] */
        refList = "refList",
        /** 链接的应用组件信息 */
        linkComp = "linkComp",
        /** [1,2-10,"1:*","*"] */
        gsNameList = "gsNameList",
        /** 以grpId为key,合服分服列表为value,程序生成，不保存在数据库 */
        grpIdMap = "grpIdMap",
        /** 备注信息 */
        mark = "mark",
        /** 记录GM谁更新了 */
        gmUsrNick = "gmUsrNick",
        /** 更新时间 */
        uTime = "uTime",
    } 
    export interface IGRoomCfg {
        /** 房间ID */       
        id?: number;
        /** 房间类型 */       
        type?: number;
        /** 启用状态 */       
        status?: number;
        /** 是否只引用 */       
        refOnly?: number;
        /** 排序越大越优先 */       
        sort?: number;
        /** 房间名称 */       
        name?: string;
        /** [roomId1,roomId2] */       
        refList?: number[];
        /** 链接的应用组件信息 */       
        linkComp?: any;
        /** [1,2-10,"1:*","*"] */       
        gsNameList?: any[];
        /** 以grpId为key,合服分服列表为value,程序生成，不保存在数据库 */       
        grpIdMap?: {[grpId:number]:number[]};
        /** 备注信息 */       
        mark?: string;
        /** 记录GM谁更新了 */       
        gmUsrNick?: string;
        /** 更新时间 */       
        uTime?: Date;
    }
    export const enum IGROOMBATCH {
        /** 类型：就是g_room_cfg的type */
        type = "type",
        /** 当前的批次ID */
        batchId = "batchId",
        /** 房间状态，这里同活动开启状态 */
        status = "status",
        /** 已完成的阶段列表 */
        steps = "steps",
        /** 批次时间 */
        batchTime = "batchTime",
    } 
    export interface IGRoomBatch {
        /** 类型：就是g_room_cfg的type */       
        type?: number;
        /** 当前的批次ID */       
        batchId?: number;
        /** 房间状态，这里同活动开启状态 */       
        status?: number;
        /** 已完成的阶段列表 */       
        steps?: number[];
        /** 批次时间 */       
        batchTime?: Date;
    }
    export const enum IGSCRIPTCFG {
        /** 版本号[x.x.x] */
        ver = "ver",
        /** 脚本函数 */
        func = "func",
        /** Fgs配置模式 */
        gsList = "gsList",
        /** 脚本内容描述 */
        desc = "desc",
        /** 从0开始,用户定义 */
        subVer = "subVer",
        /** undefined */
        status = "status",
        /** 由个脚本自定义 */
        params = "params",
        /** 创建时间 */
        cTime = "cTime",
    } 
    export interface IGScriptCfg {
        /** 版本号[x.x.x] */       
        ver?: string;
        /** 脚本函数 */       
        func?: string;
        /** Fgs配置模式 */       
        gsList?: string[];
        /** 脚本内容描述 */       
        desc?: string;
        /** 从0开始,用户定义 */       
        subVer?: number;
        /** undefined */       
        status?: number;
        /** 由个脚本自定义 */       
        params?: any;
        /** 创建时间 */       
        cTime?: Date;
    }
    export const enum IGSCRIPTPROGRESS {
        /** 玩家ID或表的主键ID */
        uid = "uid",
        /** 从0开始,用户定义 */
        subVer = "subVer",
        /** 区服ID */
        grpId = "grpId",
        /** 版本号[x.x.x] */
        ver = "ver",
        /** 脚本函数 */
        func = "func",
        /** DB链接信息 */
        db = "db",
        /** 执行内容信息 */
        content = "content",
        /** 创建时间 */
        cTime = "cTime",
    } 
    export interface IGScriptProgress {
        /** 玩家ID或表的主键ID */       
        uid?: number;
        /** 从0开始,用户定义 */       
        subVer?: number;
        /** 区服ID */       
        grpId?: number;
        /** 版本号[x.x.x] */       
        ver?: string;
        /** 脚本函数 */       
        func?: string;
        /** DB链接信息 */       
        db?: string;
        /** 执行内容信息 */       
        content?: string;
        /** 创建时间 */       
        cTime?: Date;
    }
    export const enum IGSCRIPTVERSION {
        /** 版本号[x.x.x] */
        ver = "ver",
        /** 脚本函数 */
        func = "func",
        /** DB链接信息 */
        db = "db",
        /** 从0开始,用户定义 */
        subVer = "subVer",
        /** 区服ID */
        grpId = "grpId",
        /** 当前状态 */
        status = "status",
        /** 执行进度 */
        progress = "progress",
        /** 创建时间 */
        cTime = "cTime",
    } 
    export interface IGScriptVersion {
        /** 版本号[x.x.x] */       
        ver?: string;
        /** 脚本函数 */       
        func?: string;
        /** DB链接信息 */       
        db?: string;
        /** 从0开始,用户定义 */       
        subVer?: number;
        /** 区服ID */       
        grpId?: number;
        /** 当前状态 */       
        status?: number;
        /** 执行进度 */       
        progress?: any[];
        /** 创建时间 */       
        cTime?: Date;
    }
    export const enum IGSHARECFG {
        /** 分享ID(同c_share.xlsx的ID) */
        id = "id",
        /** 是否有分享 */
        hasShare = "hasShare",
        /** 是否有视频 */
        hasVideo = "hasVideo",
        /** 分享名字 */
        name = "name",
        /** 渠道列表 */
        chnIdList = "chnIdList",
        /** 系统列表 */
        osTypeList = "osTypeList",
        /** 功能转换配置 */
        chgVideo = "chgVideo",
        /** 更新时间 */
        uTime = "uTime",
        /** 创建时间 */
        cTime = "cTime",
    } 
    export interface IGShareCfg {
        /** 分享ID(同c_share.xlsx的ID) */       
        id?: number;
        /** 是否有分享 */       
        hasShare?: number;
        /** 是否有视频 */       
        hasVideo?: number;
        /** 分享名字 */       
        name?: string;
        /** 渠道列表 */       
        chnIdList?: any[];
        /** 系统列表 */       
        osTypeList?: any[];
        /** 功能转换配置 */       
        chgVideo?: any;
        /** 更新时间 */       
        uTime?: Date;
        /** 创建时间 */       
        cTime?: Date;
    }
    export const enum IGSHARETMP {
        /** 主键ID */
        id = "id",
        /** 分享类型 */
        type = "type",
        /** 分享标题 */
        shareTitle = "shareTitle",
        /** 分享描述 */
        shareDesc = "shareDesc",
        /** 分享图片链接 */
        shareImg = "shareImg",
        /** 更新时间 */
        uTime = "uTime",
        /** 创建时间 */
        cTime = "cTime",
    } 
    export interface IGShareTmp {
        /** 主键ID */       
        id?: number;
        /** 分享类型 */       
        type?: number;
        /** 分享标题 */       
        shareTitle?: string;
        /** 分享描述 */       
        shareDesc?: string;
        /** 分享图片链接 */       
        shareImg?: string;
        /** 更新时间 */       
        uTime?: Date;
        /** 创建时间 */       
        cTime?: Date;
    }
    export const enum IGREDEEMACC {
        /** 账号ID */
        aid = "aid",
        /** 使用的兑换码 */
        useCode = "useCode",
        /** 使用时间 */
        useTime = "useTime",
    } 
    export interface IGRedeemAcc {
        /** 账号ID */       
        aid?: number;
        /** 使用的兑换码 */       
        useCode?: string;
        /** 使用时间 */       
        useTime?: Date;
    }
    export const enum IGREDEEMCODE {
        /** 主键ID */
        id = "id",
        /** 账号Id，如果有兑换，则有值 */
        aid = "aid",
        /** 角色Id，如果有兑换，则有值 */
        uid = "uid",
        /** 兑换码 */
        code = "code",
        /** 兑换批次码 */
        batchCode = "batchCode",
        /** 更新时间 */
        uTime = "uTime",
        /** 创建时间 */
        cTime = "cTime",
    } 
    export interface IGRedeemCode {
        /** 主键ID */       
        id?: number;
        /** 账号Id，如果有兑换，则有值 */       
        aid?: number;
        /** 角色Id，如果有兑换，则有值 */       
        uid?: number;
        /** 兑换码 */       
        code?: string;
        /** 兑换批次码 */       
        batchCode?: string;
        /** 更新时间 */       
        uTime?: Date;
        /** 创建时间 */       
        cTime?: Date;
    }
    export const enum IGREDEEMBATCH {
        /** 批次码 */
        code = "code",
        /** 目的是为了方便维护，游戏内容没有实际用到 */
        name = "name",
        /** 社区兑换码批次 */
        sdkBatch = "sdkBatch",
        /** 社区兑换批次Key */
        sdkBatchKey = "sdkBatchKey",
        /** 分服列表 */
        gsList = "gsList",
        /** 格式为：1,2000;2,10000 */
        items = "items",
        /** 内容说明 */
        content = "content",
        /** 发起人名称 */
        applyGmUserName = "applyGmUserName",
        /** 审核人名称 */
        reviewerName = "reviewerName",
        /** 是否有效 */
        status = "status",
        /** 类型 */
        type = "type",
        /** 角色等级限制 */
        lvl = "lvl",
        /** VIP等级限制 */
        vip = "vip",
        /** 是否有每日限制 */
        dailyLimit = "dailyLimit",
        /** 领奖邮件ID */
        mailId = "mailId",
        /** 发起人id */
        applyGmUserId = "applyGmUserId",
        /** 审核人id */
        reviewerId = "reviewerId",
        /** 是否审核 */
        isCheck = "isCheck",
        /** 渠道列表 */
        chnIdList = "chnIdList",
        /** 渠道黑名单列表 */
        chnIdList_black = "chnIdList_black",
        /** 失败记录 */
        fail = "fail",
        /** 开始时间 */
        startTime = "startTime",
        /** 结束时间 */
        endTime = "endTime",
        /** 创建时间 */
        cTime = "cTime",
    } 
    export interface IGRedeemBatch {
        /** 批次码 */       
        code?: string;
        /** 目的是为了方便维护，游戏内容没有实际用到 */       
        name?: string;
        /** 社区兑换码批次 */       
        sdkBatch?: string;
        /** 社区兑换批次Key */       
        sdkBatchKey?: string;
        /** 分服列表 */       
        gsList?: any[];
        /** 格式为：1,2000;2,10000 */       
        items?: string;
        /** 内容说明 */       
        content?: string;
        /** 发起人名称 */       
        applyGmUserName?: string;
        /** 审核人名称 */       
        reviewerName?: string;
        /** 是否有效 */       
        status?: number;
        /** 类型 */       
        type?: number;
        /** 角色等级限制 */       
        lvl?: number;
        /** VIP等级限制 */       
        vip?: number;
        /** 是否有每日限制 */       
        dailyLimit?: number;
        /** 领奖邮件ID */       
        mailId?: number;
        /** 发起人id */       
        applyGmUserId?: number;
        /** 审核人id */       
        reviewerId?: number;
        /** 是否审核 */       
        isCheck?: number;
        /** 渠道列表 */       
        chnIdList?: any[];
        /** 渠道黑名单列表 */       
        chnIdList_black?: any[];
        /** 失败记录 */       
        fail?: string;
        /** 开始时间 */       
        startTime?: Date;
        /** 结束时间 */       
        endTime?: Date;
        /** 创建时间 */       
        cTime?: Date;
    }
    export const enum IGGIFTACC {
        /** 批次ID */
        batchId = "batchId",
        /** 账号ID */
        aid = "aid",
        /** 玩家ID */
        uid = "uid",
        /** 分服索引 */
        gsIdx = "gsIdx",
        /** 更新时间 */
        uTime = "uTime",
        /** 创建时间 */
        cTime = "cTime",
    } 
    export interface IGGiftAcc {
        /** 批次ID */       
        batchId?: number;
        /** 账号ID */       
        aid?: number;
        /** 玩家ID */       
        uid?: number;
        /** 分服索引 */       
        gsIdx?: number;
        /** 更新时间 */       
        uTime?: Date;
        /** 创建时间 */       
        cTime?: Date;
    }
    export const enum IGGIFTBATCH {
        /** 类型 */
        id = "id",
        /** 礼包类型 */
        type = "type",
        /** VIP等级限制 */
        vip = "vip",
        /** 角色等级限制 */
        lvl = "lvl",
        /** 礼包周期类型 */
        cycleType = "cycleType",
        /** 第三方的VIP等级限制 */
        thirdVip = "thirdVip",
        /** 礼包状态 */
        status = "status",
        /** 名称(运营看) */
        name = "name",
        /** 分服索引列表 */
        gsIdxList = "gsIdxList",
        /** 格式为：1,2000;2,10000 */
        items = "items",
        /** 渠道列表 */
        chnIdList = "chnIdList",
        /** 生效时间 */
        sTime = "sTime",
        /** 失效时间 */
        eTime = "eTime",
    } 
    export interface IGGiftBatch {
        /** 类型 */       
        id?: number;
        /** 礼包类型 */       
        type?: number;
        /** VIP等级限制 */       
        vip?: number;
        /** 角色等级限制 */       
        lvl?: number;
        /** 礼包周期类型 */       
        cycleType?: number;
        /** 第三方的VIP等级限制 */       
        thirdVip?: number;
        /** 礼包状态 */       
        status?: number;
        /** 名称(运营看) */       
        name?: string;
        /** 分服索引列表 */       
        gsIdxList?: number[];
        /** 格式为：1,2000;2,10000 */       
        items?: string;
        /** 渠道列表 */       
        chnIdList?: any[];
        /** 生效时间 */       
        sTime?: Date;
        /** 失效时间 */       
        eTime?: Date;
    }
    export const enum IGCRONLOG {
        /** 主键ID */
        id = "id",
        /** 区服Id */
        grpId = "grpId",
        /** 类型 */
        type = "type",
        /** 执行秒数 */
        ms = "ms",
        /** 数据 */
        data = "data",
        /** 更新时间 */
        uTime = "uTime",
        /** 创建时间 */
        cTime = "cTime",
    } 
    export interface IGCronLog {
        /** 主键ID */       
        id?: number;
        /** 区服Id */       
        grpId?: number;
        /** 类型 */       
        type?: number;
        /** 执行秒数 */       
        ms?: number;
        /** 数据 */       
        data?: any;
        /** 更新时间 */       
        uTime?: Date;
        /** 创建时间 */       
        cTime?: Date;
    }
    export const enum IGREPORTEDUSR {
        /** 类型 */
        type = "type",
        /** 被举报玩家列表 */
        uidList = "uidList",
        /** 更新时间 */
        uTime = "uTime",
        /** 创建时间 */
        cTime = "cTime",
    } 
    export interface IGReportedUsr {
        /** 类型 */       
        type?: number;
        /** 被举报玩家列表 */       
        uidList?: any[];
        /** 更新时间 */       
        uTime?: Date;
        /** 创建时间 */       
        cTime?: Date;
    }
    export const enum IGTABLEVERSION {
        /** 区服Id */
        grpId = "grpId",
        /** 由程序自己定义，非程序的版本 */
        ver = "ver",
        /** 已执行版本号 */
        hasExecVers = "hasExecVers",
        /** 更新时间 */
        uTime = "uTime",
    } 
    export interface IGTableVersion {
        /** 区服Id */       
        grpId?: number;
        /** 由程序自己定义，非程序的版本 */       
        ver?: number;
        /** 已执行版本号 */       
        hasExecVers?: number[];
        /** 更新时间 */       
        uTime?: Date;
    }
    export class GBwMenu extends Dao_main<IGBwMenu, IGBWMENU>{
        constructor(cfg ? : MysqlCfg) {
            super(cfg);
            this.needToList = [];
            this.needToDate = ["invalidTime"];
            this.tableName = 'g_bw_menu';
        }
    }
    export class GAccSet extends Dao_main<IGAccSet, IGACCSET>{
        constructor(cfg ? : MysqlCfg) {
            super(cfg);
            this.needToList = ["value"];
            this.needToDate = ["recvTime","uTime","cTime"];
            this.tableName = 'g_acc_set';
        }
    }
    export class GGsFmlInfo extends Dao_main<IGGsFmlInfo, IGGSFMLINFO>{
        constructor(cfg ? : MysqlCfg) {
            super(cfg);
            this.needToList = [];
            this.needToDate = [];
            this.tableName = 'g_gs_fml_info';
        }
    }
    export class GGsUsrInfo extends Dao_main<IGGsUsrInfo, IGGSUSRINFO>{
        constructor(cfg ? : MysqlCfg) {
            super(cfg);
            this.needToList = [];
            this.needToDate = ["lTime","cTime"];
            this.tableName = 'g_gs_usr_info';
        }
    }
    export class GGsActStatus extends Dao_main<IGGsActStatus, IGGSACTSTATUS>{
        constructor(cfg ? : MysqlCfg) {
            super(cfg);
            this.needToList = [];
            this.needToDate = ["cTime"];
            this.tableName = 'g_gs_act_status';
        }
    }
    export class GGsActRankHist extends Dao_main<IGGsActRankHist, IGGSACTRANKHIST>{
        constructor(cfg ? : MysqlCfg) {
            super(cfg);
            this.needToList = [];
            this.needToDate = ["cTime"];
            this.tableName = 'g_gs_act_rank_hist';
        }
    }
    export class GCpInviteFrds extends Dao_main<IGCpInviteFrds, IGCPINVITEFRDS>{
        constructor(cfg ? : MysqlCfg) {
            super(cfg);
            this.needToList = [];
            this.needToDate = ["uTime","cTime"];
            this.tableName = 'g_cp_invite_frds';
        }
    }
    export class GRchgReq extends Dao_main<IGRchgReq, IGRCHGREQ>{
        constructor(cfg ? : MysqlCfg) {
            super(cfg);
            this.needToList = ["ext"];
            this.needToDate = ["reqTime","sdkTime","sendTime"];
            this.tableName = 'g_rchg_req';
        }
    }
    export class GOnlyName extends Dao_main<IGOnlyName, IGONLYNAME>{
        constructor(cfg ? : MysqlCfg) {
            super(cfg);
            this.needToList = [];
            this.needToDate = [];
            this.tableName = 'g_only_name';
        }
    }
    export class GCustomIco extends Dao_main<IGCustomIco, IGCUSTOMICO>{
        constructor(cfg ? : MysqlCfg) {
            super(cfg);
            this.needToList = [];
            this.needToDate = [];
            this.tableName = 'g_custom_ico';
        }
    }
    export class GActTmp extends Dao_main<IGActTmp, IGACTTMP>{
        constructor(cfg ? : MysqlCfg) {
            super(cfg);
            this.needToList = ["cnd","sItemIds","ext","langMap","giftbag","content","rank","rank2","task","buy"];
            this.needToDate = ["uTime","cTime"];
            this.tableName = 'g_act_tmp';
        }
    }
    export class GActTmpLang extends Dao_main<IGActTmpLang, IGACTTMPLANG>{
        constructor(cfg ? : MysqlCfg) {
            super(cfg);
            this.needToList = ["textMap"];
            this.needToDate = ["uTime","cTime"];
            this.tableName = 'g_act_tmp_lang';
        }
    }
    export class GActBatch extends Dao_main<IGActBatch, IGACTBATCH>{
        constructor(cfg ? : MysqlCfg) {
            super(cfg);
            this.needToList = ["gsIdList_white","gsIdList_black","roomMap"];
            this.needToDate = ["beginTime","uTime","cTime"];
            this.tableName = 'g_act_batch';
        }
    }
    export class GActGrp extends Dao_main<IGActGrp, IGACTGRP>{
        constructor(cfg ? : MysqlCfg) {
            super(cfg);
            this.needToList = ["grpIdList"];
            this.needToDate = ["beginTime","uTime"];
            this.tableName = 'g_act_grp';
        }
    }
    export class GActNotice extends Dao_main<IGActNotice, IGACTNOTICE>{
        constructor(cfg ? : MysqlCfg) {
            super(cfg);
            this.needToList = ["param"];
            this.needToDate = ["uTime","cTime"];
            this.tableName = 'g_act_notice';
        }
    }
    export class GActNoticeLang extends Dao_main<IGActNoticeLang, IGACTNOTICELANG>{
        constructor(cfg ? : MysqlCfg) {
            super(cfg);
            this.needToList = [];
            this.needToDate = ["uTime","cTime"];
            this.tableName = 'g_act_notice_lang';
        }
    }
    export class GMailTmp extends Dao_main<IGMailTmp, IGMAILTMP>{
        constructor(cfg ? : MysqlCfg) {
            super(cfg);
            this.needToList = ["ext"];
            this.needToDate = [];
            this.tableName = 'g_mail_tmp';
        }
    }
    export class GMailTmpLang extends Dao_main<IGMailTmpLang, IGMAILTMPLANG>{
        constructor(cfg ? : MysqlCfg) {
            super(cfg);
            this.needToList = [];
            this.needToDate = [];
            this.tableName = 'g_mail_tmp_lang';
        }
    }
    export class GMailAll extends Dao_main<IGMailAll, IGMAILALL>{
        constructor(cfg ? : MysqlCfg) {
            super(cfg);
            this.needToList = ["gsIdList_white","gsIdList_black","param","items","ext"];
            this.needToDate = ["sTime","eTime","cTime"];
            this.tableName = 'g_mail_all';
        }
    }
    export class GNotice extends Dao_main<IGNotice, IGNOTICE>{
        constructor(cfg ? : MysqlCfg) {
            super(cfg);
            this.needToList = ["chnIdList","gsNameList"];
            this.needToDate = ["bTime","eTime","uTime","cTime"];
            this.tableName = 'g_notice';
        }
    }
    export class GNoticeLang extends Dao_main<IGNoticeLang, IGNOTICELANG>{
        constructor(cfg ? : MysqlCfg) {
            super(cfg);
            this.needToList = [];
            this.needToDate = ["uTime","cTime"];
            this.tableName = 'g_notice_lang';
        }
    }
    export class GSysMsg extends Dao_main<IGSysMsg, IGSYSMSG>{
        constructor(cfg ? : MysqlCfg) {
            super(cfg);
            this.needToList = ["contentMap","param","grpIds"];
            this.needToDate = ["sendTime","endTime","cTime"];
            this.tableName = 'g_sys_msg';
        }
    }
    export class GSysMsgTmp extends Dao_main<IGSysMsgTmp, IGSYSMSGTMP>{
        constructor(cfg ? : MysqlCfg) {
            super(cfg);
            this.needToList = [];
            this.needToDate = ["cTime","uTime"];
            this.tableName = 'g_sys_msg_tmp';
        }
    }
    export class GSysMsgTmpLang extends Dao_main<IGSysMsgTmpLang, IGSYSMSGTMPLANG>{
        constructor(cfg ? : MysqlCfg) {
            super(cfg);
            this.needToList = [];
            this.needToDate = ["cTime","uTime"];
            this.tableName = 'g_sys_msg_tmp_lang';
        }
    }
    export class GSubscribePushTmp extends Dao_main<IGSubscribePushTmp, IGSUBSCRIBEPUSHTMP>{
        constructor(cfg ? : MysqlCfg) {
            super(cfg);
            this.needToList = ["dataList"];
            this.needToDate = ["uTime","cTime"];
            this.tableName = 'g_subscribe_push_tmp';
        }
    }
    export class GSubscribePush extends Dao_main<IGSubscribePush, IGSUBSCRIBEPUSH>{
        constructor(cfg ? : MysqlCfg) {
            super(cfg);
            this.needToList = ["chnIdList","gsNameList"];
            this.needToDate = ["cTime","uTime"];
            this.tableName = 'g_subscribe_push';
        }
    }
    export class GSubscribePushLog extends Dao_main<IGSubscribePushLog, IGSUBSCRIBEPUSHLOG>{
        constructor(cfg ? : MysqlCfg) {
            super(cfg);
            this.needToList = ["chnIdList","gsNameList","cnd","dataList"];
            this.needToDate = ["cTime","uTime"];
            this.tableName = 'g_subscribe_push_log';
        }
    }
    export class GOpenModule extends Dao_main<IGOpenModule, IGOPENMODULE>{
        constructor(cfg ? : MysqlCfg) {
            super(cfg);
            this.needToList = ["chnIdList","gsNameList","cfg"];
            this.needToDate = ["openTime","uTime","cTime"];
            this.tableName = 'g_open_module';
        }
    }
    export class GOpenHideItem extends Dao_main<IGOpenHideItem, IGOPENHIDEITEM>{
        constructor(cfg ? : MysqlCfg) {
            super(cfg);
            this.needToList = ["itemIds"];
            this.needToDate = ["uTime","cTime"];
            this.tableName = 'g_open_hide_item';
        }
    }
    export class GRoomCfg extends Dao_main<IGRoomCfg, IGROOMCFG>{
        constructor(cfg ? : MysqlCfg) {
            super(cfg);
            this.needToList = ["refList","linkComp","gsNameList","grpIdMap"];
            this.needToDate = ["uTime"];
            this.tableName = 'g_room_cfg';
        }
    }
    export class GRoomBatch extends Dao_main<IGRoomBatch, IGROOMBATCH>{
        constructor(cfg ? : MysqlCfg) {
            super(cfg);
            this.needToList = ["steps"];
            this.needToDate = ["batchTime"];
            this.tableName = 'g_room_batch';
        }
    }
    export class GScriptCfg extends Dao_main<IGScriptCfg, IGSCRIPTCFG>{
        constructor(cfg ? : MysqlCfg) {
            super(cfg);
            this.needToList = ["gsList","params"];
            this.needToDate = ["cTime"];
            this.tableName = 'g_script_cfg';
        }
    }
    export class GScriptProgress extends Dao_main<IGScriptProgress, IGSCRIPTPROGRESS>{
        constructor(cfg ? : MysqlCfg) {
            super(cfg);
            this.needToList = [];
            this.needToDate = ["cTime"];
            this.tableName = 'g_script_progress';
        }
    }
    export class GScriptVersion extends Dao_main<IGScriptVersion, IGSCRIPTVERSION>{
        constructor(cfg ? : MysqlCfg) {
            super(cfg);
            this.needToList = ["progress"];
            this.needToDate = ["cTime"];
            this.tableName = 'g_script_version';
        }
    }
    export class GShareCfg extends Dao_main<IGShareCfg, IGSHARECFG>{
        constructor(cfg ? : MysqlCfg) {
            super(cfg);
            this.needToList = ["chnIdList","osTypeList","chgVideo"];
            this.needToDate = ["uTime","cTime"];
            this.tableName = 'g_share_cfg';
        }
    }
    export class GShareTmp extends Dao_main<IGShareTmp, IGSHARETMP>{
        constructor(cfg ? : MysqlCfg) {
            super(cfg);
            this.needToList = [];
            this.needToDate = ["uTime","cTime"];
            this.tableName = 'g_share_tmp';
        }
    }
    export class GRedeemAcc extends Dao_main<IGRedeemAcc, IGREDEEMACC>{
        constructor(cfg ? : MysqlCfg) {
            super(cfg);
            this.needToList = [];
            this.needToDate = ["useTime"];
            this.tableName = 'g_redeem_acc';
        }
    }
    export class GRedeemCode extends Dao_main<IGRedeemCode, IGREDEEMCODE>{
        constructor(cfg ? : MysqlCfg) {
            super(cfg);
            this.needToList = [];
            this.needToDate = ["uTime","cTime"];
            this.tableName = 'g_redeem_code';
        }
    }
    export class GRedeemBatch extends Dao_main<IGRedeemBatch, IGREDEEMBATCH>{
        constructor(cfg ? : MysqlCfg) {
            super(cfg);
            this.needToList = ["gsList","chnIdList","chnIdList_black"];
            this.needToDate = ["startTime","endTime","cTime"];
            this.tableName = 'g_redeem_batch';
        }
    }
    export class GGiftAcc extends Dao_main<IGGiftAcc, IGGIFTACC>{
        constructor(cfg ? : MysqlCfg) {
            super(cfg);
            this.needToList = [];
            this.needToDate = ["uTime","cTime"];
            this.tableName = 'g_gift_acc';
        }
    }
    export class GGiftBatch extends Dao_main<IGGiftBatch, IGGIFTBATCH>{
        constructor(cfg ? : MysqlCfg) {
            super(cfg);
            this.needToList = ["gsIdxList","chnIdList"];
            this.needToDate = ["sTime","eTime"];
            this.tableName = 'g_gift_batch';
        }
    }
    export class GCronLog extends Dao_main<IGCronLog, IGCRONLOG>{
        constructor(cfg ? : MysqlCfg) {
            super(cfg);
            this.needToList = ["data"];
            this.needToDate = ["uTime","cTime"];
            this.tableName = 'g_cron_log';
        }
    }
    export class GReportedUsr extends Dao_main<IGReportedUsr, IGREPORTEDUSR>{
        constructor(cfg ? : MysqlCfg) {
            super(cfg);
            this.needToList = ["uidList"];
            this.needToDate = ["uTime","cTime"];
            this.tableName = 'g_reported_usr';
        }
    }
    export class GTableVersion extends Dao_main<IGTableVersion, IGTABLEVERSION>{
        constructor(cfg ? : MysqlCfg) {
            super(cfg);
            this.needToList = ["hasExecVers"];
            this.needToDate = ["uTime"];
            this.tableName = 'g_table_version';
        }
    }
    export let gBwMenuDao: GBwMenu = new GBwMenu();
    export let gAccSetDao: GAccSet = new GAccSet();
    export let gGsFmlInfoDao: GGsFmlInfo = new GGsFmlInfo();
    export let gGsUsrInfoDao: GGsUsrInfo = new GGsUsrInfo();
    export let gGsActStatusDao: GGsActStatus = new GGsActStatus();
    export let gGsActRankHistDao: GGsActRankHist = new GGsActRankHist();
    export let gCpInviteFrdsDao: GCpInviteFrds = new GCpInviteFrds();
    export let gRchgReqDao: GRchgReq = new GRchgReq();
    export let gOnlyNameDao: GOnlyName = new GOnlyName();
    export let gCustomIcoDao: GCustomIco = new GCustomIco();
    export let gActTmpDao: GActTmp = new GActTmp();
    export let gActTmpLangDao: GActTmpLang = new GActTmpLang();
    export let gActBatchDao: GActBatch = new GActBatch();
    export let gActGrpDao: GActGrp = new GActGrp();
    export let gActNoticeDao: GActNotice = new GActNotice();
    export let gActNoticeLangDao: GActNoticeLang = new GActNoticeLang();
    export let gMailTmpDao: GMailTmp = new GMailTmp();
    export let gMailTmpLangDao: GMailTmpLang = new GMailTmpLang();
    export let gMailAllDao: GMailAll = new GMailAll();
    export let gNoticeDao: GNotice = new GNotice();
    export let gNoticeLangDao: GNoticeLang = new GNoticeLang();
    export let gSysMsgDao: GSysMsg = new GSysMsg();
    export let gSysMsgTmpDao: GSysMsgTmp = new GSysMsgTmp();
    export let gSysMsgTmpLangDao: GSysMsgTmpLang = new GSysMsgTmpLang();
    export let gSubscribePushTmpDao: GSubscribePushTmp = new GSubscribePushTmp();
    export let gSubscribePushDao: GSubscribePush = new GSubscribePush();
    export let gSubscribePushLogDao: GSubscribePushLog = new GSubscribePushLog();
    export let gOpenModuleDao: GOpenModule = new GOpenModule();
    export let gOpenHideItemDao: GOpenHideItem = new GOpenHideItem();
    export let gRoomCfgDao: GRoomCfg = new GRoomCfg();
    export let gRoomBatchDao: GRoomBatch = new GRoomBatch();
    export let gScriptCfgDao: GScriptCfg = new GScriptCfg();
    export let gScriptProgressDao: GScriptProgress = new GScriptProgress();
    export let gScriptVersionDao: GScriptVersion = new GScriptVersion();
    export let gShareCfgDao: GShareCfg = new GShareCfg();
    export let gShareTmpDao: GShareTmp = new GShareTmp();
    export let gRedeemAccDao: GRedeemAcc = new GRedeemAcc();
    export let gRedeemCodeDao: GRedeemCode = new GRedeemCode();
    export let gRedeemBatchDao: GRedeemBatch = new GRedeemBatch();
    export let gGiftAccDao: GGiftAcc = new GGiftAcc();
    export let gGiftBatchDao: GGiftBatch = new GGiftBatch();
    export let gCronLogDao: GCronLog = new GCronLog();
    export let gReportedUsrDao: GReportedUsr = new GReportedUsr();
    export let gTableVersionDao: GTableVersion = new GTableVersion();
}