module H.CRON {
    class Cron_serverTime extends CronTask {
        constructor() {
            super();
            this._exp = '* * * * * *';
        }

        public async run() {
            H.Ws.brocast(CONST.SOCKET_EVENT.serverTime, DATE.dateFmt())
        }
    }

    const cron_serverTime = new Cron_serverTime();
    cron_serverTime.start();
}