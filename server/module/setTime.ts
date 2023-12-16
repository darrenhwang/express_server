/**
*  author: hhw
*  time: 2023/2/25
*  note: 调整服务器时间
 *      配置 setServerTime ： 是否可以调整服务器时间
*/
module H.SetTime {
    export async function update(req: any, args: any, cb: (err?: string | Error, rst?: any) => void) {
        if (!$env.setServerTime) {
            return cb('不可调整服务器时间');
        }
        if (args.pass != 'hdw') {
            return cb('口令失败');
        }
        if (!args.newDate) {
            return cb('请选择修改时间');
        }
        if (typeof args.newDate != "string") {
            return cb('格式有误');
        }
        let newDate = args.newDate;
        const cmd = "date -s \"" + newDate + "\"";
        exec(cmd,(err, rst) => {
            return cb();
        });
    }
}
H.registerModule('setTime', H.SetTime);