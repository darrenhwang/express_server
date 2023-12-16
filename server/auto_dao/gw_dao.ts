/// <reference path="../base/mysql/Dao.ts" />
module H {
    export let mysql_gw = initPool({"database":"gw"});          
    export class Dao_gw<S, U> extends Dao<S, U> {
        constructor(cfg ? : MysqlCfg) {
            super(cfg);
        }

        get client(): any {
            return this._promisePool || mysql_gw;
        }
    }
    export const enum IGDBCONFIG {
        /** 数据库名称 */
        name = "name",
        /** 地址 */
        host = "host",
        /** 只读地址 */
        host_read = "host_read",
        /** 用户名 */
        user = "user",
        /** 密码 */
        password = "password",
        /** 端口号 */
        port = "port",
        /** 最大连接数 */
        connectionLimit = "connectionLimit",
    } 
    export interface IGDbConfig {
        /** 数据库名称 */       
        name?: string;
        /** 地址 */       
        host?: string;
        /** 只读地址 */       
        host_read?: string;
        /** 用户名 */       
        user?: string;
        /** 密码 */       
        password?: string;
        /** 端口号 */       
        port?: number;
        /** 最大连接数 */       
        connectionLimit?: number;
    }
    export const enum IGGRP {
        /** '*'表示公共配置，是非常特殊的 */
        appName = "appName",
        /** {"default":3,"mo.DB":3} */
        logLvl = "logLvl",
        /** 目前主要用于配置日志插件，只在公共项配置就好。 */
        $env = "$env",
        /** 服务器组 */
        grpId = "grpId",
        /** 状态 */
        status = "status",
        /** 是否关闭 */
        isClose = "isClose",
        /** 开发模式 */
        isDev = "isDev",
        /** 是否可见 */
        visible = "visible",
        /** 开启时间 */
        openTime = "openTime",
        /** 合服时间 */
        mergerTime = "mergerTime",
        /** 拓展参数 */
        ext = "ext",
    } 
    export interface IGGrp {
        /** '*'表示公共配置，是非常特殊的 */       
        appName?: string;
        /** {"default":3,"mo.DB":3} */       
        logLvl?: string;
        /** 目前主要用于配置日志插件，只在公共项配置就好。 */       
        $env?: string;
        /** 服务器组 */       
        grpId?: number;
        /** 状态 */       
        status?: number;
        /** 是否关闭 */       
        isClose?: number;
        /** 开发模式 */       
        isDev?: number;
        /** 是否可见 */       
        visible?: number;
        /** 开启时间 */       
        openTime?: Date;
        /** 合服时间 */       
        mergerTime?: Date;
        /** 拓展参数 */       
        ext?: any;
    }
    export const enum IGGRPIDX {
        /** 分服下标 */
        idx = "idx",
        /** 应用服务器组id */
        grpId = "grpId",
        /** 用于导量时候的随机规则 */
        weight = "weight",
        /** 是否新服 */
        isNew = "isNew",
        /** 名称 */
        name = "name",
    } 
    export interface IGGrpIdx {
        /** 分服下标 */       
        idx?: number;
        /** 应用服务器组id */       
        grpId?: number;
        /** 用于导量时候的随机规则 */       
        weight?: number;
        /** 是否新服 */       
        isNew?: number;
        /** 名称 */       
        name?: string;
    }
    export const enum IGSERVERNAMELANG {
        /** 为0表示通用名字，name的配置格式为: 亚洲-${idx}服 */
        idx = "idx",
        /** 语言类型 */
        lang = "lang",
        /** 名称 */
        name = "name",
        /** 合服名称 */
        mergeName = "mergeName",
    } 
    export interface IGServerNameLang {
        /** 为0表示通用名字，name的配置格式为: 亚洲-${idx}服 */       
        idx?: number;
        /** 语言类型 */       
        lang?: string;
        /** 名称 */       
        name?: string;
        /** 合服名称 */       
        mergeName?: string;
    }
    export const enum IGCOMP {
        /** 应用名称 */
        appName = "appName",
        /** 外部访问域名，正式环境只有gs配置就好，其他的不需要。开发模式下不配置。 */
        host = "host",
        /** 内网运行时IP */
        runtimeIp = "runtimeIp",
        /** 如果设置了这个，启动的应用不是这个地址的话，将拒绝启动 */
        runtimeIpAppointed = "runtimeIpAppointed",
        /** 日志输出配置为JSON格式：{"default":3,"mo.DB":3} */
        logLvl = "logLvl",
        /** 版本号 */
        version = "version",
        /** 描述 */
        desc = "desc",
        /** 服务器组 */
        grpId = "grpId",
        /** 组件id */
        compId = "compId",
        /** http或者ws端口号，正式环境只对内网开放 */
        port = "port",
        /** https或者wss端口号，正式环境对外开放。开发模式下配0。 */
        port_ssl = "port_ssl",
        /** 状态 */
        status = "status",
        /** 初始化时间 */
        initTime = "initTime",
        /** 启动时间 */
        bootTime = "bootTime",
        /** 拓展参数 */
        ext = "ext",
    } 
    export interface IGComp {
        /** 应用名称 */       
        appName?: string;
        /** 外部访问域名，正式环境只有gs配置就好，其他的不需要。开发模式下不配置。 */       
        host?: string;
        /** 内网运行时IP */       
        runtimeIp?: string;
        /** 如果设置了这个，启动的应用不是这个地址的话，将拒绝启动 */       
        runtimeIpAppointed?: string;
        /** 日志输出配置为JSON格式：{"default":3,"mo.DB":3} */       
        logLvl?: string;
        /** 版本号 */       
        version?: string;
        /** 描述 */       
        desc?: string;
        /** 服务器组 */       
        grpId?: number;
        /** 组件id */       
        compId?: number;
        /** http或者ws端口号，正式环境只对内网开放 */       
        port?: number;
        /** https或者wss端口号，正式环境对外开放。开发模式下配0。 */       
        port_ssl?: number;
        /** 状态 */       
        status?: number;
        /** 初始化时间 */       
        initTime?: Date;
        /** 启动时间 */       
        bootTime?: Date;
        /** 拓展参数 */       
        ext?: any;
    }
    export const enum IGCOMPCOUNT {
        /** 应用名称 */
        appName = "appName",
        /** 服务器组ID */
        grpId = "grpId",
        /** 组件ID */
        compId = "compId",
        /** 进程ID */
        pid = "pid",
        /** 在线用户数 */
        count = "count",
        /** 心跳时间 */
        hTime = "hTime",
    } 
    export interface IGCompCount {
        /** 应用名称 */       
        appName?: string;
        /** 服务器组ID */       
        grpId?: number;
        /** 组件ID */       
        compId?: number;
        /** 进程ID */       
        pid?: number;
        /** 在线用户数 */       
        count?: number;
        /** 心跳时间 */       
        hTime?: Date;
    }
    export const enum IGGSREGION {
        /** 区服段下标(从0开始) */
        rangeIdx = "rangeIdx",
        /** 排序ID */
        sort = "sort",
        /** 名称 */
        name = "name",
        /** 所属地区编码 */
        region = "region",
        /** 分服标识 */
        usrPreName = "usrPreName",
    } 
    export interface IGGsRegion {
        /** 区服段下标(从0开始) */       
        rangeIdx?: number;
        /** 排序ID */       
        sort?: number;
        /** 名称 */       
        name?: string;
        /** 所属地区编码 */       
        region?: string;
        /** 分服标识 */       
        usrPreName?: string;
    }
    export const enum IGCHNREGION {
        /** 渠道ID */
        chnId = "chnId",
        /** 段下标列表 */
        idxList = "idxList",
        /** 黑名单配置 */
        blackMap = "blackMap",
    } 
    export interface IGChnRegion {
        /** 渠道ID */       
        chnId?: number;
        /** 段下标列表 */       
        idxList?: number[];
        /** 黑名单配置 */       
        blackMap?: any;
    }
    export const enum IGACCLOGINHIST {
        /** 账号ID */
        aid = "aid",
        /** 登录时间 */
        time = "time",
        /** 登录IP */
        ip = "ip",
        /** 登录时候的token */
        token = "token",
    } 
    export interface IGAccLoginHist {
        /** 账号ID */       
        aid?: number;
        /** 登录时间 */       
        time?: Date;
        /** 登录IP */       
        ip?: string;
        /** 登录时候的token */       
        token?: string;
    }
    export const enum IGACC {
        /** 账号ID */
        id = "id",
        /** 状态 */
        status = "status",
        /** undefined */
        sdkId = "sdkId",
        /** 渠道ID */
        chnId = "chnId",
        /** 用户归属大区 */
        sdkArea = "sdkArea",
        /** 登录次数 */
        lCount = "lCount",
        /** 最后一次分服下标 */
        lastGsIdx = "lastGsIdx",
        /** 包体ID */
        packageId = "packageId",
        /** 账号名 */
        name = "name",
        /** 创建ip */
        cIp = "cIp",
        /** 登录ip */
        lIp = "lIp",
        /** 已经登录过的gs服务器列表 */
        gsIdxList = "gsIdxList",
        /** 用户授权信息 */
        authInfo = "authInfo",
        /** 绑定的Bonbon码 */
        bindBonbon = "bindBonbon",
        /** 微端版本号 */
        appVersion = "appVersion",
        /** sdk数据 */
        sdkData = "sdkData",
        /** 创建时间 */
        cTime = "cTime",
        /** 登录时间 */
        lTime = "lTime",
    } 
    export interface IGAcc {
        /** 账号ID */       
        id?: number;
        /** 状态 */       
        status?: number;
        /** undefined */       
        sdkId?: number;
        /** 渠道ID */       
        chnId?: number;
        /** 用户归属大区 */       
        sdkArea?: number;
        /** 登录次数 */       
        lCount?: number;
        /** 最后一次分服下标 */       
        lastGsIdx?: number;
        /** 包体ID */       
        packageId?: number;
        /** 账号名 */       
        name?: string;
        /** 创建ip */       
        cIp?: string;
        /** 登录ip */       
        lIp?: string;
        /** 已经登录过的gs服务器列表 */       
        gsIdxList?: number[];
        /** 用户授权信息 */       
        authInfo?: any;
        /** 绑定的Bonbon码 */       
        bindBonbon?: string;
        /** 微端版本号 */       
        appVersion?: string;
        /** sdk数据 */       
        sdkData?: string;
        /** 创建时间 */       
        cTime?: Date;
        /** 登录时间 */       
        lTime?: Date;
    }
    export class GDbConfig extends Dao_gw<IGDbConfig, IGDBCONFIG>{
        constructor(cfg ? : MysqlCfg) {
            super(cfg);
            this.needToList = [];
            this.needToDate = [];
            this.tableName = 'g_db_config';
        }
    }
    export class GGrp extends Dao_gw<IGGrp, IGGRP>{
        constructor(cfg ? : MysqlCfg) {
            super(cfg);
            this.needToList = ["ext"];
            this.needToDate = ["openTime","mergerTime"];
            this.tableName = 'g_grp';
        }
    }
    export class GGrpIdx extends Dao_gw<IGGrpIdx, IGGRPIDX>{
        constructor(cfg ? : MysqlCfg) {
            super(cfg);
            this.needToList = [];
            this.needToDate = [];
            this.tableName = 'g_grp_idx';
        }
    }
    export class GServerNameLang extends Dao_gw<IGServerNameLang, IGSERVERNAMELANG>{
        constructor(cfg ? : MysqlCfg) {
            super(cfg);
            this.needToList = [];
            this.needToDate = [];
            this.tableName = 'g_server_name_lang';
        }
    }
    export class GComp extends Dao_gw<IGComp, IGCOMP>{
        constructor(cfg ? : MysqlCfg) {
            super(cfg);
            this.needToList = ["ext"];
            this.needToDate = ["initTime","bootTime"];
            this.tableName = 'g_comp';
        }
    }
    export class GCompCount extends Dao_gw<IGCompCount, IGCOMPCOUNT>{
        constructor(cfg ? : MysqlCfg) {
            super(cfg);
            this.needToList = [];
            this.needToDate = ["hTime"];
            this.tableName = 'g_comp_count';
        }
    }
    export class GGsRegion extends Dao_gw<IGGsRegion, IGGSREGION>{
        constructor(cfg ? : MysqlCfg) {
            super(cfg);
            this.needToList = [];
            this.needToDate = [];
            this.tableName = 'g_gs_region';
        }
    }
    export class GChnRegion extends Dao_gw<IGChnRegion, IGCHNREGION>{
        constructor(cfg ? : MysqlCfg) {
            super(cfg);
            this.needToList = ["idxList","blackMap"];
            this.needToDate = [];
            this.tableName = 'g_chn_region';
        }
    }
    export class GAccLoginHist extends Dao_gw<IGAccLoginHist, IGACCLOGINHIST>{
        constructor(cfg ? : MysqlCfg) {
            super(cfg);
            this.needToList = [];
            this.needToDate = ["time"];
            this.tableName = 'g_acc_login_hist';
        }
    }
    export class GAcc extends Dao_gw<IGAcc, IGACC>{
        constructor(cfg ? : MysqlCfg) {
            super(cfg);
            this.needToList = ["gsIdxList","authInfo"];
            this.needToDate = ["cTime","lTime"];
            this.tableName = 'g_acc';
        }
    }
    export let gDbConfigDao: GDbConfig = new GDbConfig();
    export let gGrpDao: GGrp = new GGrp();
    export let gGrpIdxDao: GGrpIdx = new GGrpIdx();
    export let gServerNameLangDao: GServerNameLang = new GServerNameLang();
    export let gCompDao: GComp = new GComp();
    export let gCompCountDao: GCompCount = new GCompCount();
    export let gGsRegionDao: GGsRegion = new GGsRegion();
    export let gChnRegionDao: GChnRegion = new GChnRegion();
    export let gAccLoginHistDao: GAccLoginHist = new GAccLoginHist();
    export let gAccDao: GAcc = new GAcc();
}