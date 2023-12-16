module H.STR {
    /**
     * 填充字符串
     * @param data
     * @param fillStr
     */
    export function fill(data: number | string , fillStr: string = "0000") {
        if (typeof data == "number") {
            data = data.toString();
        }
        let str = fillStr.substring(data.length) + data;
        return str;
    }

    /**
     * 替换占位符
     * @param str
     * @param newV
     * @param oldV
     */
    export function replaceAll(str: string, newV: string, oldV: string = '%s'): string {
        if (!str) return '';
        return str.replace(new RegExp(oldV, 'g'), newV);
    }

    //文本转换成html格式
    export function text2html(str: string): string {
        if (!str) return '';
        return str.replace(/\n/g, '<br/>');
    }

    //文本格式化
    export function format(str: string, ...args: any[]): string {
        if (!str) return '';
        let i = 0;
        return str.replace(/%s/g, () => {
            return args[i++];
        });
    }

    //字符串分割成数字数组
    export function split2Num(str: string, split: string = ","): number[] {
        if (!str) return [];
        let arr = str.split(split);
        let result = [];
        for (let i = 0; i < arr.length; i++) {
            result.push(parseInt(arr[i]));
        }
        return result;
    }
}
