module H.App {
    export async function getList(req: any, args: any, cb: (err?: string | Error, rst?: any) => void) {

        if ($env.noPm2) return cb(null, []);

        let teamX = args.hhw_team;
        let cmd = "pm2 l";
        exec(cmd, (err: any, rst: string) => {
            if (err || !rst)
                return cb(null, []);
            let list = [];
            rst.split('\n').filter(function (line) {
                line = line.replace(/│/g, "");
                let arr = line.trim().split(/\s+/);
                if (arr[0] && arr[0].indexOf(teamX) > -1 && list.indexOf(arr[0]) == -1) {
                    list.push(arr[0]);
                }
            });
            return cb(null, list);
        });
    }

    export async function restart(req: any, args: any, cb: (err?: string, rst?: any) => void) {
        if (!args.name) throw ('缺少参数');
        const cmd = "pm2 restart " + args.name;
        exec(cmd, (err, rst) => {
            return cb();
        });
    }
}
H.registerModule('app', H.App);