module H.OBJ {
    //判断对象是否为空
    export function isEmpty(obj: any): boolean {
        if (obj === null) return true;
        if (typeof obj !== 'object') return false;
        return Object.keys(obj).length === 0;
    }

    //判断对象是否为空
    export function inc(...args): any {
        if (0 == args.length) return {};

        let obj = args.shift();
        for (let i = 0, len = args.length; i < len; i++) {
            let other = args[i];
            for (let key in other) {
                obj[key] = (obj[key] || 0) + (other[key] || 0);
            }

        }
        return obj;
    }

    //对象合并
    export function merge<T = any>(target: T, ...sources: any[]): T {
        if (!sources.length) return target;
        const source = sources.shift();
        if (source === undefined) return target;
        if (source === null) return merge(target, ...sources);
        if (typeof source !== 'object') return merge(target, ...sources);
        if (Array.isArray(source)) {
            if (!Array.isArray(target)) target = [] as any;
            (target as any).push(...source);
            return merge(target, ...sources);
        }
        if (typeof target !== 'object') target = {} as any;
        if (target === null) target = {} as any;
        Object.keys(source).forEach(key => {
            if (source[key] && typeof source[key] === 'object') {
                if (!target[key]) Object.assign(target, { [key]: {} });
                merge(target[key], source[key]);
            } else {
                Object.assign(target, { [key]: source[key] });
            }
        });
        return merge(target, ...sources);
    }

    //对象深拷贝
    export function deepCopy<T = any>(obj: T): T {
        if (obj === null) return null;
        if (typeof obj !== 'object') return obj;
        if (Array.isArray(obj)) return obj.map(v => deepCopy(v)) as any;
        const res: any = {};
        Object.keys(obj).forEach(key => {
            res[key] = deepCopy(obj[key]);
        });
        return res;
    }

    //对象浅拷贝
    export function shallowCopy<T = any>(obj: T): T {
        if (obj === null) return null;
        if (typeof obj !== 'object') return obj;
        if (Array.isArray(obj)) return obj.slice() as any;
        return Object.assign({}, obj);
    }

    //对象深比较
    export function deepEqual(obj1: any, obj2: any): boolean {
        if (obj1 === obj2) return true;
        if (obj1 === null || obj2 === null) return false;
        if (typeof obj1 !== 'object' || typeof obj2 !== 'object') return false;
        if (Array.isArray(obj1) || Array.isArray(obj2)) return false;
        const keys1 = Object.keys(obj1);
        const keys2 = Object.keys(obj2);
        if (keys1.length !== keys2.length) return false;
        return keys1.every(key => deepEqual(obj1[key], obj2[key]));
    }

    //对象浅比较
    export function shallowEqual(obj1: any, obj2: any): boolean {
        if (obj1 === obj2) return true;
        if (obj1 === null || obj2 === null) return false;
        if (typeof obj1 !== 'object' || typeof obj2 !== 'object') return false;
        if (Array.isArray(obj1) || Array.isArray(obj2)) return false;
        const keys1 = Object.keys(obj1);
        const keys2 = Object.keys(obj2);
        if (keys1.length !== keys2.length) return false;
        return keys1.every(key => obj1[key] === obj2[key]);
    }

    //对象转数组
    export function toArray<T = any>(obj: T): T[] {
        if (obj === null) return [];
        if (typeof obj !== 'object') return [obj];
        if (Array.isArray(obj)) return obj;
        return Object.keys(obj).map(key => obj[key]);
    }
}