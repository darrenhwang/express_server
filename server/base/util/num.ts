module H.NUM {
    //随机数
    export function rand(begin: number, end: number): number {
        begin = begin || 0;
        end = end || 0;
        let times = Math.random();//0-1
        let diff = end - begin;
        return begin + Math.ceil(times * diff);
    }
}