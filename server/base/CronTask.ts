module H.CRON {
    const cronJob = require("cron").CronJob;
    export class CronTask extends EventEmitter {
        protected _exp: string;// '* * * * * *'
        private _jobid: any;
        constructor() {
            super();
            this._exp = '0 * * * * *';
        }

        /** 需要手动启动定时任务 */
        public start() {
            let self = this;
            self.jobid = new cronJob(self._exp, function () {
                self.run();
            }, null, false, 'Asia/Chongqing');


            self.jobid.start();
        }

        /** 手动关闭定时任务 */
        public stop() {
            if (this._jobid) {
                this._jobid.stop();
            }
        }

        /** 定时任务的业务逻辑 */
        public async run() {

        }
    }
}