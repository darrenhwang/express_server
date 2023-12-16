/// <reference types="node" />
declare module H {
    /** IncomingMessage下绑定一个  userInfo */
    const IncomingMessage: any;
}
declare module CONST {
    /** socket事件 */
    enum SOCKET_EVENT {
        /** webSocket错误事件 */
        errMsg = "errMsg",
        /** 服务器时间 */
        serverTime = "serverTime",
        /** 进程信息推送 */
        pm2Monit = "pm2Monit"
    }
}
declare module H {
    function writeFile(path: string, content: string): void;
    function appendFile(path: string, content: string): void;
    function readFile(path: string): any;
    function isExists(path: string, cb: (status: Boolean) => void): void;
    function getChildrenlist(path: string, cb: (fileList: any[]) => void): void;
    function moveContent(oldPath: string, newPath: string, cb: () => void): void;
}
declare module H {
    /** http://momentjs.cn/docs/ 时间 */
    const moment: any;
    /** 事件类 */
    const EventEmitter: any;
    /** md5 */
    const md5: any;
    function encrypt(word: string | object, crypto_key?: string, crypto_iv?: string): any;
    function decrypt(word: string, crypto_key?: string, crypto_iv?: string): string;
    function decryptToObj(word: string, crypto_key?: string, crypto_iv?: string): any;
    /** 是否包含特殊符号 */
    function isSpecialWord(value: string): boolean;
    /** 进程任务执行 */
    function exec(cmd: string, cb: (rst?: any) => void, options?: any): void;
    /** 进程任务执行 */
    function exec2(cmd: string, cb: (rst?: any) => void, options?: any): void;
    function getFileList(modulePath: string, handler?: (fileName: string) => void): void;
    function isEmptyObj(obj: any): Boolean;
    function numRand(begin: number, end: number): number;
    /**
     * 获取ip
     * @param req
     */
    function getIp(req: any): IpInfo;
    function dateFmt(date?: Date): string;
    function to<T, U = Error>(promise: Promise<T>, errorExt?: object): Promise<[U, undefined] | [null, T]>;
}
/**
 * https://github.com/sidorares/node-mysql2/tree/master/documentation_zh-cn
 */
declare module H {
    interface MysqlCfg {
        host?: string;
        user?: string;
        password?: string;
        database?: string;
        rowsAsArray?: boolean;
    }
    /** 初始化连接池 */
    function initPool(cfg: MysqlCfg): any;
    /**
     * S 接口 U 枚举
     */
    class Dao<S, U> extends EventEmitter {
        private _cfg;
        protected _promisePool: any;
        /** 表名 */
        private _tableName;
        /** dao名 */
        daoName: string;
        needToList: string[];
        needToDate: string[];
        set client(v: any);
        get client(): any;
        set tableName(v: string);
        get tableName(): string;
        set cfg(cfg: MysqlCfg);
        constructor(cfg?: MysqlCfg);
        query(sql: string): Promise<any>;
        /**
         * 列表查询
         * @param cnd
         * @param cols
         * @param postfix 后缀 比如 limit
         * @returns
         */
        list(cnd: S | string, cols?: U[], postfix?: string): Promise<S[]>;
        /**
         * 单条查询
         * @param cnd
         * @param cols
         * @returns
         */
        select(cnd: S | string, cols?: U[]): Promise<S>;
        /**
         * 创建
         * @param data
         * @returns
         */
        create(data: S): Promise<any>;
        /**
         * 更新
         * @param data
         * @param cnd
         * @returns
         */
        update(data: S, cnd: S | string): Promise<any>;
        del(cnd: S | string): Promise<any>;
        /**
         * 全部转换成字符窜
         * @param cnd
         * @param key
         * @private
         */
        private _changeToSrt;
    }
}
declare module H {
    /**
     * 企业微信推送 通过text格式
     * @param {string} msg
     * @param {string} key
     * @param {string[]} phoneList 推送指定用户的电话号码
     * @param {Boolean} isAll
     */
    function pushWx_text(msg: string, key: string, phoneList: string[], isAll?: Boolean): void;
    /**
     * nameListStr
     * @param msg
     * @param key
     * @param nameListStr
     */
    function pushWx_markdown(msg: string, key: string, nameListStr?: string): void;
}
declare module H.CRON {
    class CronTask extends EventEmitter {
        protected _exp: string;
        private _jobid;
        constructor();
        /** 需要手动启动定时任务 */
        start(): void;
        /** 手动关闭定时任务 */
        stop(): void;
        /** 定时任务的业务逻辑 */
        run(): Promise<void>;
    }
}
declare module H {
    function registerModule(module: string, methodMap: any): void;
    function doModuleMethod(req: any, module: string, method: string, args: any, cb: (err?: string, rst?: any) => void): void;
}
/**
 * https://socket.io/docs/v4/server-options/
 */
declare module H.Ws {
    /**
     * 获取我的socket
     * @param userid
     */
    function getMyWs(userid: string): HWebSocket;
    /**
     * socket进行广播推送
     * @param type
     * @param message
     * @param userid_list
     */
    function brocast(type: CONST.SOCKET_EVENT, message: any, userid_list?: string[]): void;
    function setSocketData(type: CONST.SOCKET_EVENT, data: any): any;
    /** 创建socket服务 */
    function createWs(server_http: any): void;
    /** 创建WebSocket类并继承事件类 */
    class HWebSocket extends EventEmitter {
        private _client;
        ipInfo: IpInfo;
        userInfo: UserInfo;
        userid: string;
        constructor(client: any, userInfo: UserInfo);
        sendErr(msg: any): void;
        /**
         * 发送数据
        */
        send(message: any): void;
        /** 删除断开连接 */
        close(): void;
        /**
         * socket有数据过来的处理
         */
        dataHandle(data: any): void;
    }
}
declare module H.Router {
    function create_router(express: any): any;
}
declare module H.Http {
    let server_http: any;
    /** 创建 http服务 */
    function createHttp(app: any, port: number): void;
    /**
     * 默认https 的post请求
     * @param host
     * @param port
     * @param path
     * @param postData
     * @param cb
     */
    function request(host: string, port: string, path: string, postData: any, cb?: (err: any, rst?: any) => void): Promise<any>;
}
declare module H {
    const $env: NodeJS.ProcessEnv;
    let port: number;
    let app: any;
}
declare module H {
}
declare module H {
    let mysql_inner: any;
    class Dao_inner<S, U> extends Dao<S, U> {
        constructor(cfg?: MysqlCfg);
        get client(): any;
    }
    const enum IGMUSR {
        /** 企业微信推送的key */
        nameKey = "nameKey",
        /** 名字 */
        name = "name",
        /** 密码 */
        pwd = "pwd",
        /** 登录ip */
        loginIp = "loginIp",
        /** 角色列表 */
        roleList = "roleList",
        /** 状态 0 封禁 1 正常 2管理员 */
        status = "status",
        /** 创建时间 */
        createTime = "createTime",
        /** 上次登录时间 */
        loginTimelast = "loginTimelast",
        /** 心跳时间 */
        heartTime = "heartTime",
        /** 拓展 */
        ext = "ext"
    }
    interface IGmUsr {
        /** 企业微信推送的key */
        nameKey?: string;
        /** 名字 */
        name?: string;
        /** 密码 */
        pwd?: string;
        /** 登录ip */
        loginIp?: string;
        /** 角色列表 */
        roleList?: any[];
        /** 状态 0 封禁 1 正常 2管理员 */
        status?: number;
        /** 创建时间 */
        createTime?: Date;
        /** 上次登录时间 */
        loginTimelast?: Date;
        /** 心跳时间 */
        heartTime?: Date;
        /** 拓展 */
        ext?: any;
    }
    const enum IGMROLE {
        /** 序号 */
        id = "id",
        /** 名称 */
        name = "name",
        /** auth列表 */
        authList = "authList",
        /** 更新时间 */
        updateTime = "updateTime"
    }
    interface IGmRole {
        /** 序号 */
        id?: number;
        /** 名称 */
        name?: string;
        /** auth列表 */
        authList?: any[];
        /** 更新时间 */
        updateTime?: Date;
    }
    const enum IGMRECORD {
        /** 序号 */
        id = "id",
        /** 用户id */
        uid = "uid",
        /** 接口名 */
        ifaceName = "ifaceName",
        /** 请求参数 */
        args = "args",
        /** 创建时间 */
        createTime = "createTime"
    }
    interface IGmRecord {
        /** 序号 */
        id?: number;
        /** 用户id */
        uid?: number;
        /** 接口名 */
        ifaceName?: string;
        /** 请求参数 */
        args?: string;
        /** 创建时间 */
        createTime?: Date;
    }
    const enum IGMAPPLY {
        /** 序号 */
        id = "id",
        /** 申请用户id */
        uid = "uid",
        /** 申请类型 */
        type = "type",
        /** 申请状态 */
        status = "status",
        /** 请求参数 */
        args = "args",
        /** 状态改变时间 */
        updateTime = "updateTime",
        /** 创建时间 */
        createTime = "createTime"
    }
    interface IGmApply {
        /** 序号 */
        id?: number;
        /** 申请用户id */
        uid?: number;
        /** 申请类型 */
        type?: number;
        /** 申请状态 */
        status?: number;
        /** 请求参数 */
        args?: string;
        /** 状态改变时间 */
        updateTime?: Date;
        /** 创建时间 */
        createTime?: Date;
    }
    class GmUsr extends Dao_inner<IGmUsr, IGMUSR> {
        constructor(cfg?: MysqlCfg);
    }
    class GmRole extends Dao_inner<IGmRole, IGMROLE> {
        constructor(cfg?: MysqlCfg);
    }
    class GmRecord extends Dao_inner<IGmRecord, IGMRECORD> {
        constructor(cfg?: MysqlCfg);
    }
    class GmApply extends Dao_inner<IGmApply, IGMAPPLY> {
        constructor(cfg?: MysqlCfg);
    }
    let gmUsrDao: GmUsr;
    let gmRoleDao: GmRole;
    let gmRecordDao: GmRecord;
    let gmApplyDao: GmApply;
}
declare module H {
}
declare module H {
}
declare module H.CRON {
}
declare module H {
}
/**
*  author: hhw
*  time: 2023/2/25
*  note: 调整服务器时间
 *      配置 setServerTime ： 是否可以调整服务器时间
*/
declare module H.SetTime {
    function update(req: any, args: any, cb: (err?: string, rst?: any) => void): Promise<void>;
}
declare module H {
}
declare module H {
}
declare module H.App {
    function getList(req: any, args: any, cb: (err?: string, rst?: any) => void): Promise<void>;
    function restart(req: any, args: any, cb: (err?: string, rst?: any) => void): Promise<void>;
}
/**
*  author: hhw
*  time: 2023/2/24
*  note:
 *      配置项：
 *          pm2_path: pm2的全局路径
 *
 *          pm2_watch： 是否开启日志监控
 *          wxKey_pm2Log: pm2错误日志推送的企业key
 *          pm2_ignore_name_list： pm2日志过滤进程
 *          pm2_include_list: pm2日志内容包含
 *          pm2_ignore_list: pm2日志内容过滤
 *
 *          pm2_monit: pm2的性能监控
 *          monitList_limit: 性能监控的最大条数
 *
*/
declare module H {
    class Pm2_tool extends EventEmitter {
        private _pm2;
        private _pm2_path;
        private _monit_map;
        constructor();
        init(): void;
        private _inject;
        private _filter;
        getMonitorData(cb?: (err?: any, list?: any[]) => void): void;
        private _loopMonit;
        /** 获取所有进程信息 */
        getAll(): any[];
    }
    export const pm2_tool: Pm2_tool;
    export {};
}
