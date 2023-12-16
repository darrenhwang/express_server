module CONST {
    /** socket事件 */
    export enum SOCKET_EVENT {
        /** webSocket错误事件 */
        errMsg = "errMsg",
        /** webSocket成功事件 */
        successMsg = "successMsg",
        /** 服务器时间 */
        serverTime = "serverTime",
        /** 进程信息推送 */
        pm2Monit = "pm2Monit",
        /** 进程信息推送 */
        testRequest = "testRequest",
        /** team发生变化 */
        teamCfgUpdate = "teamCfgUpdate",
        /** 活动刷新 */
        update_act = "update_act",
    }
}
