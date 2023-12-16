module H.DATE {
    /** http://momentjs.cn/docs/ 时间 */
    export const moment = require('moment');

    export function dateFmt(date?: Date): string {
        return moment(getDate(date)).format('YYYY-MM-DD HH:mm:ss');
    }

    //对比两个时间的大小
    export function compareDate(date1: Date, date2: Date): number {
        return date1.getTime() - date2.getTime();
    }

    //获取凌晨0点的时间
    export function thatDay(date?: Date): Date {
        if (!date) date = getDate();
        let zeroTime = new Date(date.getFullYear(), date.getMonth(), date.getDate());
        return zeroTime;
    }

    //获取当前时间戳
    export function now(): number {
        return new Date().getTime();
    }

    //获取时间
    export function getDate(dateStr?: string | number | Date): Date {
        if (dateStr) {
            return new Date(dateStr);
        } else {
            return new Date();
        }
    }

    /**
     * 获取这周的某一个时间点
     * @param day
     * @param date_list [时， 分， 秒]
     */
    export function thisWeekTime(day: number, date_list: number[] = []): Date {
        let date = new Date();
        let week = date.getDay();

        if (week == 0) {
            week = 7;
        }

        if (day == 0) {
            day = 7;
        }

        let diff = day - week;
        addDay(date, diff);
        addSecond(date, (date_list[2] || 0) + (date_list[1] || 0) * 60 + (date_list[0] || 0) * 3600);
        return date;
    }

    //添加毫秒
    export function addMillisecond(date: Date, millisecond: number): Date {
        date.setMilliseconds(date.getMilliseconds() + millisecond);
        return date;
    }

    //添加秒
    export function addSecond(date: Date, second: number): Date {
        date.setSeconds(date.getSeconds() + second);
        return date;
    }

    //添加分钟
    export function addMinute(date: Date, minute: number): Date {
        date.setMinutes(date.getMinutes() + minute);
        return date;
    }

    //添加小时
    export function addHour(date: Date, hour: number): Date {
        date.setHours(date.getHours() + hour);
        return date;
    }

    //添加天
    export function addDay(date: Date, day: number): Date {
        date.setDate(date.getDate() + day);
        return date;
    }

    //添加月
    export function addMonth(date: Date, month: number): Date {
        date.setMonth(date.getMonth() + month);
        return date;
    }

    // 添加年
    export function addYear(date: Date, year: number): Date {
        date.setFullYear(date.getFullYear() + year);
        return date;
    }

    //获取年月日数值时间
    export function getDayInt(date: Date): number {
        return parseInt(moment(date).format('YYYYMMDD'));
    }

    //时间添加[天, 小时， 分， 秒]
    export function addTime(date: Date, list: number[]): Date {
        let time = date.getTime();
        let day = list[0] || 0;
        let hour = list[1] || 0;
        let min = list[2] || 0;
        let sec = list[3] || 0;
        time += day * 24 * 60 * 60 * 1000;
        time += hour * 60 * 60 * 1000;
        time += min * 60 * 1000;
        time += sec * 1000;
        return getDate(time);
    }

}
