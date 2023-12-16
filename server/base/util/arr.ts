module H.ARR {
    //数组转对象
    export function toObject<T = any>(arr: T[]): { [key: string]: T } {
        if (arr === null) return {};
        if (!Array.isArray(arr)) return {};
        return arr.reduce((pre: any, cur) => {
            pre[cur] = cur;
            return pre;
        }, {});
    }

    //数组去重
    export function unique<T = any>(arr: T[]): T[] {
        if (arr === null) return [];
        if (!Array.isArray(arr)) return [];
        return arr.filter((item, index) => arr.indexOf(item) === index);
    }

    //数组交集
    export function intersect<T = any>(arr1: T[], arr2: T[]): T[] {
        if (arr1 === null || arr2 === null) return [];
        if (!Array.isArray(arr1) || !Array.isArray(arr2)) return [];
        return arr1.filter(v => arr2.includes(v));
    }

    //数组差集
    export function difference<T = any>(arr1: T[], arr2: T[]): T[] {
        if (arr1 === null || arr2 === null) return [];
        if (!Array.isArray(arr1) || !Array.isArray(arr2)) return [];
        return arr1.filter(v => !arr2.includes(v));
    }

    //数组并集
    export function union<T = any>(arr1: T[], arr2: T[]): T[] {
        if (arr1 === null || arr2 === null) return [];
        if (!Array.isArray(arr1) || !Array.isArray(arr2)) return [];
        // @ts-ignore
        return [...new Set([...arr1, ...arr2])];
    }

    //数组排序
    export function sort<T = any>(arr: T[], key: string, order: 'asc' | 'desc' = 'asc'): T[] {
        if (arr === null) return [];
        if (!Array.isArray(arr)) return [];
        return arr.sort((a, b) => {
            if (order === 'asc') {
                return a[key] > b[key] ? 1 : -1;
            } else {
                return a[key] < b[key] ? 1 : -1;
            }
        });
    }

    export function has<T>(list: T[], one: T): boolean {
        return list && list.indexOf(one) > -1;
    }
}