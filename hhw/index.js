var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var H;
(function (H) {
    /** IncomingMessage下绑定一个  userInfo */
    H.IncomingMessage = require('http').IncomingMessage;
    Object.defineProperty(H.IncomingMessage.prototype, 'userInfo', {
        get: function () {
            var err;
            if (!this.headers.userinfo)
                err = '身份信息缺失请重新登录';
            try {
                var userInfo = H.decryptToObj(this.headers.userinfo, 'userInfo');
                if (!userInfo.userid)
                    err = '身份信息缺失请重新登录';
                return [err, userInfo];
            }
            catch (e) {
                return ['身份数据有误', null];
            }
        }
    });
})(H || (H = {}));
var CONST;
(function (CONST) {
    /** socket事件 */
    var SOCKET_EVENT;
    (function (SOCKET_EVENT) {
        /** webSocket错误事件 */
        SOCKET_EVENT["errMsg"] = "errMsg";
        /** webSocket成功事件 */
        SOCKET_EVENT["successMsg"] = "successMsg";
        /** 服务器时间 */
        SOCKET_EVENT["serverTime"] = "serverTime";
        /** 进程信息推送 */
        SOCKET_EVENT["pm2Monit"] = "pm2Monit";
        /** 进程信息推送 */
        SOCKET_EVENT["testRequest"] = "testRequest";
        /** team发生变化 */
        SOCKET_EVENT["teamCfgUpdate"] = "teamCfgUpdate";
        /** 活动刷新 */
        SOCKET_EVENT["update_act"] = "update_act";
    })(SOCKET_EVENT = CONST.SOCKET_EVENT || (CONST.SOCKET_EVENT = {}));
})(CONST || (CONST = {}));
var H;
(function (H) {
    var FILE;
    (function (FILE) {
        var fs = require("fs");
        var xlsx = require("node-xlsx");
        function writeFile(path, content) {
            fs.writeFileSync(path, content);
        }
        FILE.writeFile = writeFile;
        function appendFile(path, content) {
            fs.appendFile(path, content);
        }
        FILE.appendFile = appendFile;
        function readFile(path) {
            var content = fs.readFileSync(path, 'utf8');
            return content;
        }
        FILE.readFile = readFile;
        function isExists(path, cb) {
            fs.access(path, fs.constants.F_OK, function (err) {
                if (err) {
                    cb(false);
                }
                else {
                    cb(true);
                }
            });
        }
        FILE.isExists = isExists;
        function getChildrenlist(path, cb) {
            fs.readdir(path, function (err, files) {
                if (err) {
                    throw (err);
                }
                else {
                    console.log(files);
                    cb(files);
                }
            });
        }
        FILE.getChildrenlist = getChildrenlist;
        function moveContent(oldPath, newPath, cb) {
            try {
                var content = readFile(oldPath);
                writeFile(newPath, content);
                fs.unlink(oldPath, function (err) {
                    if (err) {
                        throw err;
                    }
                    cb();
                });
            }
            catch (e) {
                console.error('文件不存在');
            }
        }
        FILE.moveContent = moveContent;
        //读取xlsx文件
        function readXlsx(path) {
            var obj = xlsx.parse(path);
            return obj;
        }
        FILE.readXlsx = readXlsx;
    })(FILE = H.FILE || (H.FILE = {}));
})(H || (H = {}));
var H;
(function (H) {
    var STR;
    (function (STR) {
        /**
         * 填充字符串
         * @param data
         * @param fillStr
         */
        function fill(data, fillStr) {
            if (fillStr === void 0) { fillStr = "0000"; }
            if (typeof data == "number") {
                data = data.toString();
            }
            var str = fillStr.substring(data.length) + data;
            return str;
        }
        STR.fill = fill;
        /**
         * 替换占位符
         * @param str
         * @param newV
         * @param oldV
         */
        function replaceAll(str, newV, oldV) {
            if (oldV === void 0) { oldV = '%s'; }
            if (!str)
                return '';
            return str.replace(new RegExp(oldV, 'g'), newV);
        }
        STR.replaceAll = replaceAll;
        //文本转换成html格式
        function text2html(str) {
            if (!str)
                return '';
            return str.replace(/\n/g, '<br/>');
        }
        STR.text2html = text2html;
        //文本格式化
        function format(str) {
            var args = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                args[_i - 1] = arguments[_i];
            }
            if (!str)
                return '';
            var i = 0;
            return str.replace(/%s/g, function () {
                return args[i++];
            });
        }
        STR.format = format;
        //字符串分割成数字数组
        function split2Num(str, split) {
            if (split === void 0) { split = ","; }
            if (!str)
                return [];
            var arr = str.split(split);
            var result = [];
            for (var i = 0; i < arr.length; i++) {
                result.push(parseInt(arr[i]));
            }
            return result;
        }
        STR.split2Num = split2Num;
    })(STR = H.STR || (H.STR = {}));
})(H || (H = {}));
var H;
(function (H) {
    var NUM;
    (function (NUM) {
        //随机数
        function rand(begin, end) {
            begin = begin || 0;
            end = end || 0;
            var times = Math.random(); //0-1
            var diff = end - begin;
            return begin + Math.ceil(times * diff);
        }
        NUM.rand = rand;
    })(NUM = H.NUM || (H.NUM = {}));
})(H || (H = {}));
var H;
(function (H) {
    var OBJ;
    (function (OBJ) {
        //判断对象是否为空
        function isEmpty(obj) {
            if (obj === null)
                return true;
            if (typeof obj !== 'object')
                return false;
            return Object.keys(obj).length === 0;
        }
        OBJ.isEmpty = isEmpty;
        //判断对象是否为空
        function inc() {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            if (0 == args.length)
                return {};
            var obj = args.shift();
            for (var i = 0, len = args.length; i < len; i++) {
                var other = args[i];
                for (var key in other) {
                    obj[key] = (obj[key] || 0) + (other[key] || 0);
                }
            }
            return obj;
        }
        OBJ.inc = inc;
        //对象合并
        function merge(target) {
            var _a;
            var sources = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                sources[_i - 1] = arguments[_i];
            }
            if (!sources.length)
                return target;
            var source = sources.shift();
            if (source === undefined)
                return target;
            if (source === null)
                return merge.apply(void 0, __spreadArray([target], sources, false));
            if (typeof source !== 'object')
                return merge.apply(void 0, __spreadArray([target], sources, false));
            if (Array.isArray(source)) {
                if (!Array.isArray(target))
                    target = [];
                (_a = target).push.apply(_a, source);
                return merge.apply(void 0, __spreadArray([target], sources, false));
            }
            if (typeof target !== 'object')
                target = {};
            if (target === null)
                target = {};
            Object.keys(source).forEach(function (key) {
                var _a, _b;
                if (source[key] && typeof source[key] === 'object') {
                    if (!target[key])
                        Object.assign(target, (_a = {}, _a[key] = {}, _a));
                    merge(target[key], source[key]);
                }
                else {
                    Object.assign(target, (_b = {}, _b[key] = source[key], _b));
                }
            });
            return merge.apply(void 0, __spreadArray([target], sources, false));
        }
        OBJ.merge = merge;
        //对象深拷贝
        function deepCopy(obj) {
            if (obj === null)
                return null;
            if (typeof obj !== 'object')
                return obj;
            if (Array.isArray(obj))
                return obj.map(function (v) { return deepCopy(v); });
            var res = {};
            Object.keys(obj).forEach(function (key) {
                res[key] = deepCopy(obj[key]);
            });
            return res;
        }
        OBJ.deepCopy = deepCopy;
        //对象浅拷贝
        function shallowCopy(obj) {
            if (obj === null)
                return null;
            if (typeof obj !== 'object')
                return obj;
            if (Array.isArray(obj))
                return obj.slice();
            return Object.assign({}, obj);
        }
        OBJ.shallowCopy = shallowCopy;
        //对象深比较
        function deepEqual(obj1, obj2) {
            if (obj1 === obj2)
                return true;
            if (obj1 === null || obj2 === null)
                return false;
            if (typeof obj1 !== 'object' || typeof obj2 !== 'object')
                return false;
            if (Array.isArray(obj1) || Array.isArray(obj2))
                return false;
            var keys1 = Object.keys(obj1);
            var keys2 = Object.keys(obj2);
            if (keys1.length !== keys2.length)
                return false;
            return keys1.every(function (key) { return deepEqual(obj1[key], obj2[key]); });
        }
        OBJ.deepEqual = deepEqual;
        //对象浅比较
        function shallowEqual(obj1, obj2) {
            if (obj1 === obj2)
                return true;
            if (obj1 === null || obj2 === null)
                return false;
            if (typeof obj1 !== 'object' || typeof obj2 !== 'object')
                return false;
            if (Array.isArray(obj1) || Array.isArray(obj2))
                return false;
            var keys1 = Object.keys(obj1);
            var keys2 = Object.keys(obj2);
            if (keys1.length !== keys2.length)
                return false;
            return keys1.every(function (key) { return obj1[key] === obj2[key]; });
        }
        OBJ.shallowEqual = shallowEqual;
        //对象转数组
        function toArray(obj) {
            if (obj === null)
                return [];
            if (typeof obj !== 'object')
                return [obj];
            if (Array.isArray(obj))
                return obj;
            return Object.keys(obj).map(function (key) { return obj[key]; });
        }
        OBJ.toArray = toArray;
    })(OBJ = H.OBJ || (H.OBJ = {}));
})(H || (H = {}));
var H;
(function (H) {
    var ARR;
    (function (ARR) {
        //数组转对象
        function toObject(arr) {
            if (arr === null)
                return {};
            if (!Array.isArray(arr))
                return {};
            return arr.reduce(function (pre, cur) {
                pre[cur] = cur;
                return pre;
            }, {});
        }
        ARR.toObject = toObject;
        //数组去重
        function unique(arr) {
            if (arr === null)
                return [];
            if (!Array.isArray(arr))
                return [];
            return arr.filter(function (item, index) { return arr.indexOf(item) === index; });
        }
        ARR.unique = unique;
        //数组交集
        function intersect(arr1, arr2) {
            if (arr1 === null || arr2 === null)
                return [];
            if (!Array.isArray(arr1) || !Array.isArray(arr2))
                return [];
            return arr1.filter(function (v) { return arr2.includes(v); });
        }
        ARR.intersect = intersect;
        //数组差集
        function difference(arr1, arr2) {
            if (arr1 === null || arr2 === null)
                return [];
            if (!Array.isArray(arr1) || !Array.isArray(arr2))
                return [];
            return arr1.filter(function (v) { return !arr2.includes(v); });
        }
        ARR.difference = difference;
        //数组并集
        function union(arr1, arr2) {
            if (arr1 === null || arr2 === null)
                return [];
            if (!Array.isArray(arr1) || !Array.isArray(arr2))
                return [];
            // @ts-ignore
            return __spreadArray([], new Set(__spreadArray(__spreadArray([], arr1, true), arr2, true)), true);
        }
        ARR.union = union;
        //数组排序
        function sort(arr, key, order) {
            if (order === void 0) { order = 'asc'; }
            if (arr === null)
                return [];
            if (!Array.isArray(arr))
                return [];
            return arr.sort(function (a, b) {
                if (order === 'asc') {
                    return a[key] > b[key] ? 1 : -1;
                }
                else {
                    return a[key] < b[key] ? 1 : -1;
                }
            });
        }
        ARR.sort = sort;
        function has(list, one) {
            return list && list.indexOf(one) > -1;
        }
        ARR.has = has;
    })(ARR = H.ARR || (H.ARR = {}));
})(H || (H = {}));
var H;
(function (H) {
    var DATE;
    (function (DATE) {
        /** http://momentjs.cn/docs/ 时间 */
        DATE.moment = require('moment');
        function dateFmt(date) {
            return DATE.moment(getDate(date)).format('YYYY-MM-DD HH:mm:ss');
        }
        DATE.dateFmt = dateFmt;
        //对比两个时间的大小
        function compareDate(date1, date2) {
            return date1.getTime() - date2.getTime();
        }
        DATE.compareDate = compareDate;
        //获取凌晨0点的时间
        function thatDay(date) {
            if (!date)
                date = getDate();
            var zeroTime = new Date(date.getFullYear(), date.getMonth(), date.getDate());
            return zeroTime;
        }
        DATE.thatDay = thatDay;
        //获取当前时间戳
        function now() {
            return new Date().getTime();
        }
        DATE.now = now;
        //获取时间
        function getDate(dateStr) {
            if (dateStr) {
                return new Date(dateStr);
            }
            else {
                return new Date();
            }
        }
        DATE.getDate = getDate;
        /**
         * 获取这周的某一个时间点
         * @param day
         * @param date_list [时， 分， 秒]
         */
        function thisWeekTime(day, date_list) {
            if (date_list === void 0) { date_list = []; }
            var date = new Date();
            var week = date.getDay();
            if (week == 0) {
                week = 7;
            }
            if (day == 0) {
                day = 7;
            }
            var diff = day - week;
            addDay(date, diff);
            addSecond(date, (date_list[2] || 0) + (date_list[1] || 0) * 60 + (date_list[0] || 0) * 3600);
            return date;
        }
        DATE.thisWeekTime = thisWeekTime;
        //添加毫秒
        function addMillisecond(date, millisecond) {
            date.setMilliseconds(date.getMilliseconds() + millisecond);
            return date;
        }
        DATE.addMillisecond = addMillisecond;
        //添加秒
        function addSecond(date, second) {
            date.setSeconds(date.getSeconds() + second);
            return date;
        }
        DATE.addSecond = addSecond;
        //添加分钟
        function addMinute(date, minute) {
            date.setMinutes(date.getMinutes() + minute);
            return date;
        }
        DATE.addMinute = addMinute;
        //添加小时
        function addHour(date, hour) {
            date.setHours(date.getHours() + hour);
            return date;
        }
        DATE.addHour = addHour;
        //添加天
        function addDay(date, day) {
            date.setDate(date.getDate() + day);
            return date;
        }
        DATE.addDay = addDay;
        //添加月
        function addMonth(date, month) {
            date.setMonth(date.getMonth() + month);
            return date;
        }
        DATE.addMonth = addMonth;
        // 添加年
        function addYear(date, year) {
            date.setFullYear(date.getFullYear() + year);
            return date;
        }
        DATE.addYear = addYear;
        //获取年月日数值时间
        function getDayInt(date) {
            return parseInt(DATE.moment(date).format('YYYYMMDD'));
        }
        DATE.getDayInt = getDayInt;
        //时间添加[天, 小时， 分， 秒]
        function addTime(date, list) {
            var time = date.getTime();
            var day = list[0] || 0;
            var hour = list[1] || 0;
            var min = list[2] || 0;
            var sec = list[3] || 0;
            time += day * 24 * 60 * 60 * 1000;
            time += hour * 60 * 60 * 1000;
            time += min * 60 * 1000;
            time += sec * 1000;
            return getDate(time);
        }
        DATE.addTime = addTime;
    })(DATE = H.DATE || (H.DATE = {}));
})(H || (H = {}));
/// <reference path="./str.ts" />
/// <reference path="./num.ts" />
/// <reference path="./obj.ts" />
/// <reference path="./arr.ts" />
/// <reference path="./date.ts" />
var H;
/// <reference path="./str.ts" />
/// <reference path="./num.ts" />
/// <reference path="./obj.ts" />
/// <reference path="./arr.ts" />
/// <reference path="./date.ts" />
(function (H) {
    var childProcess = require('child_process');
    /** 事件类 */
    H.EventEmitter = require("events").EventEmitter;
    /** md5 */
    H.md5 = require("md5");
    /** 加解密 */
    var CryptoJS = require('crypto-js');
    H.WebSocket = require('ws');
    H.path = require('path');
    //加密
    function encrypt(word, crypto_key, crypto_iv) {
        var key = CryptoJS.enc.Utf8.parse(crypto_key || 'hhw');
        var iv = CryptoJS.enc.Utf8.parse(crypto_iv || 'hhw');
        var encrypted;
        if (typeof word == "string") {
            var srcs = CryptoJS.enc.Utf8.parse(word);
            encrypted = CryptoJS.AES.encrypt(srcs, key, {
                iv: iv,
                mode: CryptoJS.mode.CBC,
                padding: CryptoJS.pad.Pkcs7
            });
        }
        else if (typeof word == "object") {
            //对象格式的转成json字符串
            var data = JSON.stringify(word);
            var srcs = CryptoJS.enc.Utf8.parse(data);
            encrypted = CryptoJS.AES.encrypt(srcs, key, {
                iv: iv,
                mode: CryptoJS.mode.CBC,
                padding: CryptoJS.pad.Pkcs7
            });
        }
        return encrypted.ciphertext.toString();
    }
    H.encrypt = encrypt;
    // aes解密
    function decrypt(word, crypto_key, crypto_iv) {
        var key = CryptoJS.enc.Utf8.parse(crypto_key || 'hhw');
        var iv = CryptoJS.enc.Utf8.parse(crypto_iv || 'hhw');
        var encryptedHexStr = CryptoJS.enc.Hex.parse(word);
        var srcs = CryptoJS.enc.Base64.stringify(encryptedHexStr);
        var decrypt = CryptoJS.AES.decrypt(srcs, key, {
            iv: iv,
            mode: CryptoJS.mode.CBC,
            padding: CryptoJS.pad.Pkcs7
        });
        var decryptedStr = decrypt.toString(CryptoJS.enc.Utf8);
        return decryptedStr.toString();
    }
    H.decrypt = decrypt;
    // aes解密
    function decryptToObj(word, crypto_key, crypto_iv) {
        return JSON.parse(decrypt(word, crypto_key, crypto_iv));
    }
    H.decryptToObj = decryptToObj;
    /** 是否包含特殊符号 */
    function isSpecialWord(value) {
        var patrn = /[`~!@#$%^&*()_\-+=<>?:"{}|,.\/;'\\[\]·~！@#￥%……&*（）——\-+={}|《》？：“”【】、；‘'，。、]/im;
        if (!patrn.test(value)) { // 如果包含特殊字符返回false
            return false;
        }
        return true;
    }
    H.isSpecialWord = isSpecialWord;
    /** 进程任务执行 */
    function exec(cmd, cb, options) {
        if (options === void 0) { options = {}; }
        var exec = childProcess.exec;
        exec(cmd, options, function (err, stdout, stderr) {
            if (err) {
                console.error('执行报错请查看日志', err);
                cb(err, null);
            }
            else {
                var data = "stderr:\n" + stderr + "\nstdout:\n" + stdout;
                cb(null, data);
            }
        });
    }
    H.exec = exec;
    /** 进程任务执行 */
    function exec2(cmd, cb, options) {
        if (options === void 0) { options = {}; }
        var exec = childProcess.exec;
        exec(cmd, options, function (err, stdout, stderr) {
            if (err) {
                console.error('执行报错请查看日志', err);
                cb(err, null);
            }
            else {
                var data = stdout || stderr;
                cb(null, data);
            }
        });
    }
    H.exec2 = exec2;
    /** 进程任务执行 */
    function exec3(cmd, cb, options) {
        if (options === void 0) { options = {}; }
        var exec = childProcess.exec;
        exec(cmd, options, function (err, stdout, stderr) {
            if (!err) {
                var data = stdout || stderr;
                cb(data);
            }
            else {
                console.error(err);
                cb();
            }
        });
    }
    H.exec3 = exec3;
    //初始化 自动注册同级文件
    function getFileList(modulePath, handler) {
        H.FILE.getChildrenlist(modulePath, function (fileList) {
            if (fileList && fileList.length) {
                fileList.filter(function (item) {
                    var fileName = item.split('.')[0];
                    if (fileName && fileName != 'module') {
                        try {
                            if (handler)
                                handler(fileName);
                        }
                        catch (error) {
                            console.error(error);
                        }
                    }
                });
            }
        });
    }
    H.getFileList = getFileList;
    /**
     * 获取ip
     * @param req
     */
    function getIp(req) {
        //::ffff:127.0.0.1
        var address = req._remoteAddress;
        var arr = address.split(":");
        var ipv4 = arr.pop();
        var ipv6 = arr.join(":");
        return {
            ip: address,
            ipv4: ipv4,
            ipv6: ipv6,
        };
    }
    H.getIp = getIp;
    // https://github.com/scopsy/await-to-js
    function to(promise, errorExt) {
        return (promise.then(function (data) { return [null, data]; }).catch(function (err) {
            if (errorExt) {
                var parsedError = Object.assign({}, err, errorExt);
                return [parsedError, undefined];
            }
            return [err, undefined];
        }));
    }
    H.to = to;
})(H || (H = {}));
/**
 * https://github.com/sidorares/node-mysql2/tree/master/documentation_zh-cn
 */
var H;
/**
 * https://github.com/sidorares/node-mysql2/tree/master/documentation_zh-cn
 */
(function (H) {
    var createPool = require('mysql2').createPool;
    /** 初始化连接池 */
    function initPool(cfg) {
        if (!cfg || !cfg.database) {
            throw "lost database";
        }
        cfg.host = cfg.host || '192.168.3.151'; // yumi 默认 db 连接地址
        cfg.user = cfg.user || 'root';
        cfg.password = cfg.password || '123456';
        // cfg.rowsAsArray = true;
        var pool = createPool(cfg);
        // return pool.promise();
        return pool;
    }
    H.initPool = initPool;
    /**
     * S 接口 U 枚举
     */
    var Dao = /** @class */ (function (_super) {
        __extends(Dao, _super);
        function Dao(cfg) {
            var _this = _super.call(this) || this;
            _this._cfg = null;
            if (cfg) {
                _this.cfg = cfg;
            }
            _this._tableName = '';
            _this.daoName = '';
            _this.needToList = [];
            _this.needToDate = [];
            return _this;
        }
        Object.defineProperty(Dao.prototype, "promisePool", {
            set: function (v) {
                this._promisePool = v;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Dao.prototype, "client", {
            get: function () {
                return this._promisePool;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Dao.prototype, "tableName", {
            get: function () {
                return this._tableName;
            },
            set: function (v) {
                this._tableName = v;
                var daoName = change(v).daoName;
                this.daoName = daoName;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Dao.prototype, "cfg", {
            set: function (cfg) {
                this._cfg = cfg;
                this._promisePool = initPool(cfg);
            },
            enumerable: false,
            configurable: true
        });
        Dao.prototype.query = function (sql, data) {
            return __awaiter(this, void 0, void 0, function () {
                var self;
                return __generator(this, function (_a) {
                    self = this;
                    return [2 /*return*/, new Promise(function (resolve, reject) {
                            self.client.query(sql, data || [], function (err, rows, fields) {
                                if (err) {
                                    console.error("sql", sql);
                                    reject(err);
                                }
                                else {
                                    resolve(rows);
                                }
                            });
                        }).catch(function (err) {
                            console.error("sql", sql);
                            throw err;
                        })];
                });
            });
        };
        /**
         * 列表查询
         * @param cnd
         * @param cols
         * @param postfix 后缀 比如 limit
         * @returns
         */
        Dao.prototype.list = function (cnd, cols, postfix) {
            return __awaiter(this, void 0, void 0, function () {
                var colStr, sql, key, rows, i, key;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            colStr = cols && cols.length ? cols.join(',') : "*";
                            sql = "select " + colStr + " from " + this.tableName + " where 1=1";
                            if (typeof cnd == "object") {
                                for (key in cnd) {
                                    if (cnd[key] && this.needToList.indexOf(key) > -1) {
                                        cnd[key] = JSON.stringify(cnd[key]);
                                    }
                                    else if (cnd[key] && this.needToDate.indexOf(key) > -1) {
                                        cnd[key] = H.DATE.moment(cnd[key]).format('YYYY-MM-DD HH:mm:ss');
                                    }
                                    sql += " and " + key + " = '" + cnd[key] + "'";
                                }
                            }
                            else {
                                sql += cnd;
                            }
                            if (postfix) {
                                sql += " ".concat(postfix);
                            }
                            return [4 /*yield*/, this.query(sql)];
                        case 1:
                            rows = _a.sent();
                            rows = rows || [];
                            for (i = 0; i < rows.length; i++) {
                                for (key in rows[i]) {
                                    try {
                                        if (rows[i][key] && this.needToList.indexOf(key) > -1) {
                                            rows[i][key] = JSON.parse(rows[i][key]);
                                        }
                                        else if (rows[i][key] && this.needToDate.indexOf(key) > -1) {
                                            rows[i][key] = new Date(rows[i][key]);
                                        }
                                    }
                                    catch (e) {
                                        console.error("数据有误:" + key, JSON.stringify(rows[i]));
                                    }
                                }
                            }
                            return [2 /*return*/, rows];
                    }
                });
            });
        };
        /**
         * 单条查询
         * @param cnd
         * @param cols
         * @param order
         */
        Dao.prototype.select = function (cnd, cols, order) {
            return __awaiter(this, void 0, void 0, function () {
                var list;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.list(cnd, cols, order ? order + ' limit 0,1' : 'limit 0,1')];
                        case 1:
                            list = _a.sent();
                            return [2 /*return*/, list[0]];
                    }
                });
            });
        };
        /**
         * 创建
         * @param data
         * @returns
         */
        Dao.prototype.create = function (data) {
            return __awaiter(this, void 0, void 0, function () {
                var sql, keyStr, valueStr, key;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            sql = "INSERT INTO ".concat(this.tableName);
                            keyStr = "";
                            valueStr = "";
                            data = Object.assign({}, data);
                            for (key in data) {
                                if (data[key] === null || data[key] === undefined) {
                                    delete data[key];
                                    continue;
                                }
                                if (data[key] && this.needToList.indexOf(key) > -1) {
                                    data[key] = JSON.stringify(data[key]);
                                }
                                else if (data[key] && this.needToDate.indexOf(key) > -1) {
                                    data[key] = H.DATE.moment(data[key]).format('YYYY-MM-DD HH:mm:ss');
                                }
                                if (!keyStr) {
                                    keyStr = '`' + key + '`';
                                }
                                else {
                                    keyStr += "," + '`' + key + '`';
                                }
                                if (!valueStr) {
                                    valueStr = "'" + data[key] + "'";
                                }
                                else {
                                    valueStr += ",'" + data[key] + "'";
                                }
                            }
                            sql += " (".concat(keyStr, ") VALUES (").concat(valueStr, ")");
                            return [4 /*yield*/, this.query(sql)];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        };
        /**
         * 更新
         * @param data
         * @param cnd
         * @returns
         */
        Dao.prototype.update = function (data, cnd) {
            return __awaiter(this, void 0, void 0, function () {
                var sql, dataStr, key, key;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            sql = "update ".concat(this.tableName);
                            dataStr = "";
                            data = Object.assign({}, data);
                            for (key in data) {
                                this._changeToSrt(data, key);
                                if (!dataStr) {
                                    dataStr = " set ".concat(key, " = '").concat(data[key], "'");
                                }
                                else {
                                    dataStr += " , ".concat(key, " = '").concat(data[key], "'");
                                }
                            }
                            sql += " ".concat(dataStr, " where 1=1");
                            if (typeof cnd == "object") {
                                cnd = Object.assign({}, cnd);
                                for (key in cnd) {
                                    this._changeToSrt(cnd, key);
                                    sql += " and " + key + "='" + cnd[key] + "'";
                                }
                            }
                            else if (typeof cnd == "string") {
                                sql += cnd;
                            }
                            return [4 /*yield*/, this.query(sql)];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        };
        Dao.prototype.del = function (cnd) {
            return __awaiter(this, void 0, void 0, function () {
                var sql, key;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            sql = "delete from " + this.tableName + " where 1=1";
                            if (typeof cnd == "object") {
                                cnd = Object.assign({}, cnd);
                                for (key in cnd) {
                                    this._changeToSrt(cnd, key);
                                    sql += " and " + key + " = " + cnd[key];
                                }
                            }
                            else {
                                sql += cnd;
                            }
                            return [4 /*yield*/, this.query(sql)];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        };
        /**
         * 全部转换成字符窜
         * @param cnd
         * @param key
         * @private
         */
        Dao.prototype._changeToSrt = function (cnd, key) {
            if (!cnd[key] || typeof cnd[key] == 'string')
                return;
            if (this.needToList.indexOf(key) > -1) {
                cnd[key] = JSON.stringify(cnd[key]);
            }
            else if (this.needToDate.indexOf(key) > -1) {
                cnd[key] = H.DATE.moment(cnd[key]).format('YYYY-MM-DD HH:mm:ss');
            }
        };
        return Dao;
    }(H.EventEmitter));
    H.Dao = Dao;
    function change(tableName) {
        var daoName = '';
        var flag = false; //下个字母是否需要大写
        for (var i = 0; i < tableName.length; i++) {
            var word = tableName[i];
            if (H.isSpecialWord(word)) {
                flag = true;
                continue;
            }
            if (flag) {
                word = word.toUpperCase();
            }
            daoName += word;
            flag = false;
        }
        var entity = 'I' + daoName[0].toUpperCase() + daoName.substring(1);
        daoName += "Dao";
        return {
            daoName: daoName,
            entity: entity
        };
    }
})(H || (H = {}));
var H;
(function (H) {
    /**
     * 企业微信推送 通过text格式
     * @param {string} msg
     * @param {string} key
     * @param {string[]} phoneList 推送指定用户的电话号码
     * @param {Boolean} isAll
     */
    function pushWx_text(msg, key, phoneList, isAll) {
        if (!key)
            return;
        var postData = {
            "msgtype": "text",
            "text": {
                "content": msg,
            }
        };
        if (isAll) {
            if (!phoneList)
                phoneList = [];
            phoneList.push("@all");
        }
        if (phoneList && phoneList.length) {
            postData.text.mentioned_mobile_list = phoneList;
        }
        _pushWx(postData, key);
    }
    H.pushWx_text = pushWx_text;
    /**
     * nameListStr
     * @param msg
     * @param key
     * @param nameListStr
     */
    function pushWx_markdown(msg, key, nameListStr) {
        if (!key)
            return;
        if (nameListStr) {
            var name_list = nameListStr.split('|');
            name_list.forEach(function (name) {
                msg += "\n<@".concat(name, ")");
            });
        }
        var postData = {
            "msgtype": "markdown",
            "markdown": {
                "content": msg,
            }
        };
        _pushWx(postData, key);
    }
    H.pushWx_markdown = pushWx_markdown;
    function _pushWx(postData, key) {
        var data = JSON.stringify(postData);
        var options = {
            hostname: "qyapi.weixin.qq.com",
            port: "443",
            path: "/cgi-bin/webhook/send?key=" + key,
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Content-Length": Buffer.byteLength(data)
            }
        };
        var https = require("https");
        if (https) {
            var rst = https.request(options, function (res) {
            });
            rst.write(data);
            rst.end();
        }
    }
})(H || (H = {}));
var H;
(function (H) {
    var CRON;
    (function (CRON) {
        var cronJob = require("cron").CronJob;
        var CronTask = /** @class */ (function (_super) {
            __extends(CronTask, _super);
            function CronTask() {
                var _this = _super.call(this) || this;
                _this._exp = '0 * * * * *';
                return _this;
            }
            /** 需要手动启动定时任务 */
            CronTask.prototype.start = function () {
                var self = this;
                self.jobid = new cronJob(self._exp, function () {
                    self.run();
                }, null, false, 'Asia/Chongqing');
                self.jobid.start();
            };
            /** 手动关闭定时任务 */
            CronTask.prototype.stop = function () {
                if (this._jobid) {
                    this._jobid.stop();
                }
            };
            /** 定时任务的业务逻辑 */
            CronTask.prototype.run = function () {
                return __awaiter(this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        return [2 /*return*/];
                    });
                });
            };
            return CronTask;
        }(H.EventEmitter));
        CRON.CronTask = CronTask;
    })(CRON = H.CRON || (H.CRON = {}));
})(H || (H = {}));
var H;
(function (H) {
    var routeMap = {};
    function registerModule(module, methodMap) {
        routeMap[module] = methodMap;
    }
    H.registerModule = registerModule;
    function doModuleMethod(req, module, method, args, cb) {
        if (typeof args == 'string')
            args = JSON.parse(args);
        var methodMap = routeMap[module] || {};
        if (!methodMap[method])
            throw "模块方法有误!";
        methodMap[method](req, args, cb);
    }
    H.doModuleMethod = doModuleMethod;
})(H || (H = {}));
/**
 * https://socket.io/docs/v4/server-options/
 */
var H;
/**
 * https://socket.io/docs/v4/server-options/
 */
(function (H) {
    var Ws;
    (function (Ws) {
        var server_ws;
        var wsCollectList = []; //记入所有ws连接
        /**
         * 获取我的socket
         * @param userid
         */
        function getMyWs(userid) {
            if (Ws.ws_my)
                return Ws.ws_my;
            for (var _i = 0, wsCollectList_1 = wsCollectList; _i < wsCollectList_1.length; _i++) {
                var ws = wsCollectList_1[_i];
                if (ws.userid == userid) {
                    return ws;
                }
            }
            return null;
        }
        Ws.getMyWs = getMyWs;
        /**
         * socket进行广播推送
         * @param type
         * @param message
         * @param userid_list
         */
        function brocast(type, message, userid_list) {
            wsCollectList.forEach(function (ws) {
                if (!userid_list || (ws.userid && userid_list.indexOf(ws.userid) > -1)) {
                    ws.send(setSocketData(type, message));
                }
            });
        }
        Ws.brocast = brocast;
        function setSocketData(type, data) {
            var obj = {};
            obj[type] = data;
            return obj;
        }
        Ws.setSocketData = setSocketData;
        /** 创建socket服务 */
        function createWs(server_http) {
            var Server = require("socket.io").Server;
            server_ws = new Server(server_http, {
                // allowRequest: async (req: any, cb: (err?: any, rst?: any) => void) => {
                //     cb(null, true);
                // },
                cors: true
            });
            server_ws.on('connection', function (client) {
                //client.handshake.query;
                var query = client.handshake.query || {};
                var userInfo = {};
                if (query.userInfo) {
                    userInfo = H.decryptToObj(query.userInfo, 'userInfo');
                }
                Ws.ws_my = new H.Ws.HWebSocket(client, userInfo);
            });
        }
        Ws.createWs = createWs;
        function getClientIp(client) {
            var ip;
            var handshake = client.handshake;
            // if (handshake.headers["x-forwarded-for"] != null) {
            //     ip = handshake.headers["x-forwarded-for"];
            // } else {
            //     ip = handshake.address;
            // }
            ip = handshake.address;
            //::ffff:127.0.0.1
            var arr = ip.split(":");
            var ipv4 = arr.pop();
            var ipv6 = arr.join(":");
            var origin = handshake.headers.origin;
            return {
                ip: ip,
                ipv4: ipv4,
                ipv6: ipv6,
                origin: origin,
            };
        }
        /** 创建WebSocket类并继承事件类 */
        var HWebSocket = /** @class */ (function (_super) {
            __extends(HWebSocket, _super);
            function HWebSocket(client, userInfo) {
                var _this = _super.call(this) || this;
                _this._client = client;
                _this.ipInfo = getClientIp(client);
                if (userInfo && userInfo.userid) {
                    _this.userid = userInfo.userid;
                    _this.userInfo = userInfo;
                }
                wsCollectList.push(_this);
                var self = _this;
                client.on('message', function (msg) {
                    self.dataHandle(msg);
                });
                client.on('disconnect', function (msg) {
                    self.close();
                });
                client.on('error', function (msg) {
                    self.close();
                });
                return _this;
            }
            //发送错误日志
            HWebSocket.prototype.sendErr = function (msg) {
                var arg = {};
                arg[CONST.SOCKET_EVENT.errMsg] = msg;
                this.send(JSON.stringify(arg));
            };
            HWebSocket.prototype.sendSuccess = function (msg) {
                var arg = {};
                arg[CONST.SOCKET_EVENT.successMsg] = msg;
                this.send(JSON.stringify(arg));
            };
            /**
             * 发送数据
            */
            HWebSocket.prototype.send = function (message) {
                if (message && typeof message == 'object') {
                    message = JSON.stringify(message);
                }
                this._client.emit("message", message);
            };
            /** 删除断开连接 */
            HWebSocket.prototype.close = function () {
                var idx = wsCollectList.indexOf(this);
                if (idx > -1) {
                    wsCollectList.splice(idx, 1);
                }
            };
            /**
             * socket有数据过来的处理
             */
            HWebSocket.prototype.dataHandle = function (data) {
                var self = this;
                if (data) { //处理前端的请求数据
                    try {
                        data = JSON.parse(data);
                        if (data["module"] && data["method"]) {
                            if (!self.req)
                                self.req = {};
                            H.doModuleMethod(self.req, data["module"], data["method"], data["args"], function (err, rst) {
                                if (err) {
                                    console.error('socket', err);
                                    self.sendErr(err);
                                }
                                else {
                                }
                            });
                        }
                        else {
                        }
                    }
                    catch (e) {
                        console.error('socket', e.message || e);
                        self.sendErr(e.message || e);
                    }
                }
                else {
                }
            };
            return HWebSocket;
        }(H.EventEmitter));
        Ws.HWebSocket = HWebSocket;
    })(Ws = H.Ws || (H.Ws = {}));
})(H || (H = {}));
var H;
(function (H) {
    var Router;
    (function (Router) {
        function getQuery(req) {
            var query = {};
            if (!H.OBJ.isEmpty(req.query)) {
                query = req.query;
            }
            else if (!H.OBJ.isEmpty(req.body)) {
                query = req.body;
            }
            if (typeof query == 'string')
                query = JSON.parse(query);
            console.log('query', JSON.stringify(query));
            return query;
        }
        function create_router(express) {
            var router = express.Router();
            router.all('/hhw', function (req, res, next) {
                // res.header('Content-Type', 'application/json;charset=utf-8');
                if (req && req.method == 'OPTIONS') { //预请求
                    res.send();
                }
                else {
                    var data_1 = {};
                    data_1.resultCode = 200;
                    var query = getQuery(req);
                    try {
                        H.doModuleMethod(req, query["module"], query["method"], query["args"], function (err, rst) {
                            if (err) {
                                console.error('http', err);
                                data_1.err = err;
                                res.send(data_1);
                            }
                            else {
                                data_1.data = rst;
                                res.send(data_1);
                            }
                        });
                    }
                    catch (e) {
                        console.error('http', e);
                        data_1.err = e;
                        res.send(data_1);
                    }
                }
            });
            /**
             * 执行脚本文件
             */
            router.all('/exec', function (req, res, next) {
                var query = getQuery(req);
                if (typeof query == 'string')
                    query = JSON.parse(query);
                var sh_name = query.name;
                if (!sh_name)
                    throw "请选择执行文件";
                if (sh_name.indexOf('.sh') == -1)
                    sh_name += ".sh";
                var command = './' + sh_name;
                if (query.args)
                    command += ' ' + query.args.replace(new RegExp("\\|", 'g'), " ");
                var sh_path = query.path || "/root";
                try {
                    H.exec(command, function (err, data) {
                        res.send(data);
                    }, { cwd: sh_path, maxBuffer: 5 * 1024 * 1024 });
                }
                catch (e) {
                    res.send(e);
                }
            });
            /** http请求跳转 **/
            router.all('/forward', function (req, res, next) {
                var data = {};
                data.resultCode = 200;
                try {
                    var query = getQuery(req);
                    if (!query.host || !query.port) {
                        data.err = '转发路径为空';
                        data.data = query;
                        return res.send(data);
                    }
                    else {
                        var postData = JSON.stringify(query);
                        var options = {
                            hostname: query.host,
                            port: query.port,
                            path: query.route,
                            method: 'post',
                            headers: {
                                'Content-Type': 'application/json;charset=utf-8',
                                "Content-Length": Buffer.byteLength(postData)
                            }
                        };
                        var request = require(query.isHttps ? 'https' : 'http');
                        if (request) {
                            var rst = request.request(options, function (res1) {
                                var buffer = '';
                                res1.setEncoding('utf-8');
                                res1.on('data', function (data1) {
                                    buffer += data1;
                                });
                                res1.on('end', function () {
                                    var str = buffer.toString();
                                    data.data = str;
                                    res.send(data);
                                });
                            });
                            rst.on('error', function (e) {
                                data.err = e;
                                res.send(data);
                            });
                            rst.write(postData);
                            rst.end();
                        }
                        else {
                            data.err = 'request为空';
                            res.send(data);
                        }
                    }
                }
                catch (e) {
                    data.err = e;
                    console.error(e);
                }
            });
            return router;
        }
        Router.create_router = create_router;
    })(Router = H.Router || (H.Router = {}));
})(H || (H = {}));
/// <reference path="./HWebSocket.ts" />
var H;
/// <reference path="./HWebSocket.ts" />
(function (H) {
    var Http;
    (function (Http) {
        var debug = require('debug')('server:server');
        var https = require("https");
        /** 创建 http服务 */
        function createHttp(app, port) {
            var createServer = require('http').createServer;
            Http.server_http = createServer(app);
            H.Ws.createWs(Http.server_http);
            Http.server_http.listen(port, function () {
                console.log("端口" + port + "启动成功");
            });
            Http.server_http.on('error', onError);
            Http.server_http.on('listening', onListening);
        }
        Http.createHttp = createHttp;
        function onError(error) {
            if (error.syscall !== 'listen') {
                throw error;
            }
            var bind = typeof H.port === 'string' ?
                'Pipe ' + H.port :
                'Port ' + H.port;
            switch (error.code) {
                case 'EACCES':
                    console.error(bind + ' requires elevated privileges');
                    process.exit(1);
                    break;
                case 'EADDRINUSE':
                    console.error(bind + ' is already in use');
                    process.exit(1);
                    break;
                default:
                    throw error;
            }
        }
        function onListening() {
            var addr = Http.server_http.address();
            var bind = typeof addr === 'string' ?
                'pipe ' + addr :
                'port ' + addr.port;
            debug('Listening on ' + bind);
        }
        /**
         * 默认https 的post请求
         * @param host
         * @param port
         * @param path
         * @param postData
         * @param cb
         */
        function request(host, port, path, postData, cb) {
            var data = JSON.stringify(postData);
            var options = {
                hostname: host,
                port: port,
                path: path,
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Content-Length": Buffer.byteLength(data)
                }
            };
            var self = this;
            return new Promise(function (resolve, reject) {
                var rst = https.request(options, function (res) {
                    var buffer = '';
                    res.setEncoding('utf-8');
                    res.on('data', function (data1) {
                        buffer += data1;
                    });
                    res.on('end', function () {
                        var str = buffer.toString();
                        cb ? cb(null, str) : resolve(str);
                    });
                });
                rst.on('error', function (e) {
                    cb ? cb(e) : reject(e);
                });
                rst.write(data);
                rst.end();
            }).catch(function (err) {
                if (cb)
                    cb(err);
                else
                    throw err;
            });
        }
        Http.request = request;
    })(Http = H.Http || (H.Http = {}));
})(H || (H = {}));
/// <reference path="./http.ts" />
/// <reference path="./router.ts" />
var H;
/// <reference path="./http.ts" />
/// <reference path="./router.ts" />
(function (H) {
    console.log("process.cwd", process.cwd());
    var dotenv = require('dotenv');
    dotenv.config();
    var test = process.env;
    var createError = require('http-errors');
    var path = require('path');
    var cookieParser = require('cookie-parser');
    var logger = require('morgan');
    var express_session = require("express-session");
    var express = require('express');
    var bodyParser = require('body-parser');
    H.$env = process.env;
    H.port = parseInt(H.$env.PORT + "") || 8008;
    H.app = express();
    H.app.all('*', function (req, res, next) {
        //   res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Origin', req.headers.origin);
        res.header('Access-Control-Allow-Headers', ['token', 'x-requested-with', 'Content-Type', 'userInfo']);
        res.header('Access-Control-Allow-Methods', '*');
        // res.header('Content-Type', 'application/json;charset=utf-8');
        res.header('Access-Control-Allow-Credentials', true);
        next();
    });
    // view engine setup
    H.app.set('views', path.join(__dirname, 'views'));
    H.app.set('view engine', 'jade');
    H.app.use(logger('dev'));
    H.app.use(express.json());
    H.app.use(bodyParser.urlencoded({ extended: false }));
    H.app.use(cookieParser());
    //部署静态服务器
    var static_path = H.$env.staticPath ? path.join(__dirname, H.$env.staticPath) : path.join(__dirname, 'public');
    console.log('static_path', static_path);
    H.app.use(express.static(static_path));
    H.app.use(express_session({
        resave: true,
        saveUninitialized: false,
        secret: "hhw",
        name: "hhw",
        cookie: {
            maxAge: 200 * 60 * 1000,
        },
    }));
    //路由
    H.app.use('/', H.Router.create_router(express));
    // 定制 404 页面 (返回404状态码)
    H.app.use(function (req, res) {
        res.type('text/plain');
        res.status(404);
        res.send('404 - 你访问的页面  ' + H.DATE.dateFmt());
    });
    //定制 500 页面 (返回500状态码)
    H.app.use(function (err, req, res, next) {
        console.error(err.stack);
        var errInfo = err.stack;
        res.type('text/plain');
        res.status(500);
        res.send('500 - 服务器发生错误\n' + 'errInfo:' + errInfo + '\n' + 'currentTime:' + H.DATE.dateFmt());
    });
    H.app.set('port', H.port);
    H.Http.createHttp(H.app, H.port);
})(H || (H = {}));
/// <reference path="./CONST.ts" />
/// <reference path="./util/file.ts" />
/// <reference path="./util/util.ts" />
/// <reference path="./mysql/Dao.ts" />
/// <reference path="./pushWx.ts" />
/// <reference path="./CronTask.ts" />
/// <reference path="./toModule.ts" />
/// <reference path="./HWebSocket.ts" />
/// <reference path="./router.ts" />
/// <reference path="./http.ts" />
/// <reference path="./app.ts" />
/// <reference path="../base/mysql/Dao.ts" />
var H;
/// <reference path="../base/mysql/Dao.ts" />
(function (H) {
    H.mysql_gs = H.initPool({ "database": "gs" });
    var Dao_gs = /** @class */ (function (_super) {
        __extends(Dao_gs, _super);
        function Dao_gs(cfg) {
            return _super.call(this, cfg) || this;
        }
        Object.defineProperty(Dao_gs.prototype, "client", {
            get: function () {
                return this._promisePool || H.mysql_gs;
            },
            enumerable: false,
            configurable: true
        });
        return Dao_gs;
    }(H.Dao));
    H.Dao_gs = Dao_gs;
    var GDidPool = /** @class */ (function (_super) {
        __extends(GDidPool, _super);
        function GDidPool(cfg) {
            var _this = _super.call(this, cfg) || this;
            _this.needToList = ["nums"];
            _this.needToDate = [];
            _this.tableName = 'g_did_pool';
            return _this;
        }
        return GDidPool;
    }(Dao_gs));
    H.GDidPool = GDidPool;
    var GUsr = /** @class */ (function (_super) {
        __extends(GUsr, _super);
        function GUsr(cfg) {
            var _this = _super.call(this, cfg) || this;
            _this.needToList = ["loc", "attr", "bag"];
            _this.needToDate = ["cTime", "refundTime", "rchgResetTime", "lTime", "authTime", "gldTime", "attrRecalTime"];
            _this.tableName = 'g_usr';
            return _this;
        }
        return GUsr;
    }(Dao_gs));
    H.GUsr = GUsr;
    var GUsrOl = /** @class */ (function (_super) {
        __extends(GUsrOl, _super);
        function GUsrOl(cfg) {
            var _this = _super.call(this, cfg) || this;
            _this.needToList = [];
            _this.needToDate = ["hTime", "lTime", "oTime", "lLTime", "lOTime"];
            _this.tableName = 'g_usr_ol';
            return _this;
        }
        return GUsrOl;
    }(Dao_gs));
    H.GUsrOl = GUsrOl;
    var GUsrExt = /** @class */ (function (_super) {
        __extends(GUsrExt, _super);
        function GUsrExt(cfg) {
            var _this = _super.call(this, cfg) || this;
            _this.needToList = ["v"];
            _this.needToDate = [];
            _this.tableName = 'g_usr_ext';
            return _this;
        }
        return GUsrExt;
    }(Dao_gs));
    H.GUsrExt = GUsrExt;
    var GUsrCount = /** @class */ (function (_super) {
        __extends(GUsrCount, _super);
        function GUsrCount(cfg) {
            var _this = _super.call(this, cfg) || this;
            _this.needToList = [];
            _this.needToDate = ["rTime", "uTime", "cTime"];
            _this.tableName = 'g_usr_count';
            return _this;
        }
        return GUsrCount;
    }(Dao_gs));
    H.GUsrCount = GUsrCount;
    var GUsrRcd = /** @class */ (function (_super) {
        __extends(GUsrRcd, _super);
        function GUsrRcd(cfg) {
            var _this = _super.call(this, cfg) || this;
            _this.needToList = ["valueMap"];
            _this.needToDate = ["rTime", "uTime", "cTime"];
            _this.tableName = 'g_usr_rcd';
            return _this;
        }
        return GUsrRcd;
    }(Dao_gs));
    H.GUsrRcd = GUsrRcd;
    var GUsrSet = /** @class */ (function (_super) {
        __extends(GUsrSet, _super);
        function GUsrSet(cfg) {
            var _this = _super.call(this, cfg) || this;
            _this.needToList = ["value"];
            _this.needToDate = ["uTime", "cTime"];
            _this.tableName = 'g_usr_set';
            return _this;
        }
        return GUsrSet;
    }(Dao_gs));
    H.GUsrSet = GUsrSet;
    var GUsrSdkRwd = /** @class */ (function (_super) {
        __extends(GUsrSdkRwd, _super);
        function GUsrSdkRwd(cfg) {
            var _this = _super.call(this, cfg) || this;
            _this.needToList = [];
            _this.needToDate = ["uTime", "cTime"];
            _this.tableName = 'g_usr_sdk_rwd';
            return _this;
        }
        return GUsrSdkRwd;
    }(Dao_gs));
    H.GUsrSdkRwd = GUsrSdkRwd;
    var GUsrLoginHist = /** @class */ (function (_super) {
        __extends(GUsrLoginHist, _super);
        function GUsrLoginHist(cfg) {
            var _this = _super.call(this, cfg) || this;
            _this.needToList = [];
            _this.needToDate = ["time"];
            _this.tableName = 'g_usr_login_hist';
            return _this;
        }
        return GUsrLoginHist;
    }(Dao_gs));
    H.GUsrLoginHist = GUsrLoginHist;
    var GUsrSs = /** @class */ (function (_super) {
        __extends(GUsrSs, _super);
        function GUsrSs(cfg) {
            var _this = _super.call(this, cfg) || this;
            _this.needToList = ["vipRecv", "redeemCodes", "sacraDrawRcd", "actives", "runePlan"];
            _this.needToDate = ["rTime", "uTime", "cTime"];
            _this.tableName = 'g_usr_ss';
            return _this;
        }
        return GUsrSs;
    }(Dao_gs));
    H.GUsrSs = GUsrSs;
    var GBox = /** @class */ (function (_super) {
        __extends(GBox, _super);
        function GBox(cfg) {
            var _this = _super.call(this, cfg) || this;
            _this.needToList = [];
            _this.needToDate = ["countTime", "eTime_video", "eTime_up", "uTime", "cTime"];
            _this.tableName = 'g_box';
            return _this;
        }
        return GBox;
    }(Dao_gs));
    H.GBox = GBox;
    var GEquipBase = /** @class */ (function (_super) {
        __extends(GEquipBase, _super);
        function GEquipBase(cfg) {
            var _this = _super.call(this, cfg) || this;
            _this.needToList = ["planMap", "skinMap", "potMap"];
            _this.needToDate = ["uTime", "cTime"];
            _this.tableName = 'g_equip_base';
            return _this;
        }
        return GEquipBase;
    }(Dao_gs));
    H.GEquipBase = GEquipBase;
    var GEquip = /** @class */ (function (_super) {
        __extends(GEquip, _super);
        function GEquip(cfg) {
            var _this = _super.call(this, cfg) || this;
            _this.needToList = ["baseAttr"];
            _this.needToDate = ["potEftTime", "uTime", "cTime"];
            _this.tableName = 'g_equip';
            return _this;
        }
        return GEquip;
    }(Dao_gs));
    H.GEquip = GEquip;
    var GHandbook = /** @class */ (function (_super) {
        __extends(GHandbook, _super);
        function GHandbook(cfg) {
            var _this = _super.call(this, cfg) || this;
            _this.needToList = ["list", "spList"];
            _this.needToDate = ["uTime", "cTime"];
            _this.tableName = 'g_handbook';
            return _this;
        }
        return GHandbook;
    }(Dao_gs));
    H.GHandbook = GHandbook;
    var GWing = /** @class */ (function (_super) {
        __extends(GWing, _super);
        function GWing(cfg) {
            var _this = _super.call(this, cfg) || this;
            _this.needToList = ["wingList", "attr", "enhanceAttr"];
            _this.needToDate = ["uTime", "cTime"];
            _this.tableName = 'g_wing';
            return _this;
        }
        return GWing;
    }(Dao_gs));
    H.GWing = GWing;
    var GRufBase = /** @class */ (function (_super) {
        __extends(GRufBase, _super);
        function GRufBase(cfg) {
            var _this = _super.call(this, cfg) || this;
            _this.needToList = ["travelList"];
            _this.needToDate = ["travelTime", "uTime", "cTime"];
            _this.tableName = 'g_ruf_base';
            return _this;
        }
        return GRufBase;
    }(Dao_gs));
    H.GRufBase = GRufBase;
    var GRuf = /** @class */ (function (_super) {
        __extends(GRuf, _super);
        function GRuf(cfg) {
            var _this = _super.call(this, cfg) || this;
            _this.needToList = ["spAttr", "fuseAttr"];
            _this.needToDate = ["uTime", "cTime"];
            _this.tableName = 'g_ruf';
            return _this;
        }
        return GRuf;
    }(Dao_gs));
    H.GRuf = GRuf;
    var GHonour = /** @class */ (function (_super) {
        __extends(GHonour, _super);
        function GHonour(cfg) {
            var _this = _super.call(this, cfg) || this;
            _this.needToList = ["progress"];
            _this.needToDate = ["uTime", "cTime"];
            _this.tableName = 'g_honour';
            return _this;
        }
        return GHonour;
    }(Dao_gs));
    H.GHonour = GHonour;
    var GTitle = /** @class */ (function (_super) {
        __extends(GTitle, _super);
        function GTitle(cfg) {
            var _this = _super.call(this, cfg) || this;
            _this.needToList = ["attr"];
            _this.needToDate = ["uTime", "cTime"];
            _this.tableName = 'g_title';
            return _this;
        }
        return GTitle;
    }(Dao_gs));
    H.GTitle = GTitle;
    var GTitleHist = /** @class */ (function (_super) {
        __extends(GTitleHist, _super);
        function GTitleHist(cfg) {
            var _this = _super.call(this, cfg) || this;
            _this.needToList = ["attr"];
            _this.needToDate = ["uTime", "cTime"];
            _this.tableName = 'g_title_hist';
            return _this;
        }
        return GTitleHist;
    }(Dao_gs));
    H.GTitleHist = GTitleHist;
    var GGem = /** @class */ (function (_super) {
        __extends(GGem, _super);
        function GGem(cfg) {
            var _this = _super.call(this, cfg) || this;
            _this.needToList = ["attr"];
            _this.needToDate = ["uTime", "cTime"];
            _this.tableName = 'g_gem';
            return _this;
        }
        return GGem;
    }(Dao_gs));
    H.GGem = GGem;
    var GGemPaper = /** @class */ (function (_super) {
        __extends(GGemPaper, _super);
        function GGemPaper(cfg) {
            var _this = _super.call(this, cfg) || this;
            _this.needToList = ["paperList"];
            _this.needToDate = ["uTime", "cTime"];
            _this.tableName = 'g_gem_paper';
            return _this;
        }
        return GGemPaper;
    }(Dao_gs));
    H.GGemPaper = GGemPaper;
    var GGemScheme = /** @class */ (function (_super) {
        __extends(GGemScheme, _super);
        function GGemScheme(cfg) {
            var _this = _super.call(this, cfg) || this;
            _this.needToList = ["inlayList", "gemIdList", "attr"];
            _this.needToDate = ["uTime", "cTime"];
            _this.tableName = 'g_gem_scheme';
            return _this;
        }
        return GGemScheme;
    }(Dao_gs));
    H.GGemScheme = GGemScheme;
    var GSacra = /** @class */ (function (_super) {
        __extends(GSacra, _super);
        function GSacra(cfg) {
            var _this = _super.call(this, cfg) || this;
            _this.needToList = ["attr"];
            _this.needToDate = ["uTime", "cTime"];
            _this.tableName = 'g_sacra';
            return _this;
        }
        return GSacra;
    }(Dao_gs));
    H.GSacra = GSacra;
    var GSacraDrawLog = /** @class */ (function (_super) {
        __extends(GSacraDrawLog, _super);
        function GSacraDrawLog(cfg) {
            var _this = _super.call(this, cfg) || this;
            _this.needToList = ["items"];
            _this.needToDate = ["cTime"];
            _this.tableName = 'g_sacra_draw_log';
            return _this;
        }
        return GSacraDrawLog;
    }(Dao_gs));
    H.GSacraDrawLog = GSacraDrawLog;
    var GLuckyLaba = /** @class */ (function (_super) {
        __extends(GLuckyLaba, _super);
        function GLuckyLaba(cfg) {
            var _this = _super.call(this, cfg) || this;
            _this.needToList = ["selectItems"];
            _this.needToDate = ["rTime", "uTime", "cTime"];
            _this.tableName = 'g_lucky_laba';
            return _this;
        }
        return GLuckyLaba;
    }(Dao_gs));
    H.GLuckyLaba = GLuckyLaba;
    var GLuckyLabaDrawLog = /** @class */ (function (_super) {
        __extends(GLuckyLabaDrawLog, _super);
        function GLuckyLabaDrawLog(cfg) {
            var _this = _super.call(this, cfg) || this;
            _this.needToList = ["items"];
            _this.needToDate = ["cTime"];
            _this.tableName = 'g_lucky_laba_draw_log';
            return _this;
        }
        return GLuckyLabaDrawLog;
    }(Dao_gs));
    H.GLuckyLabaDrawLog = GLuckyLabaDrawLog;
    var GMine = /** @class */ (function (_super) {
        __extends(GMine, _super);
        function GMine(cfg) {
            var _this = _super.call(this, cfg) || this;
            _this.needToList = ["employMiners", "rhGNoList", "goodsList", "rhRNoList", "rockList", "idxList", "nearUids", "attr", "deportSucMap", "deportFailMap"];
            _this.needToDate = ["rNearTime", "gOverTime", "nLogTime", "oLogTime", "verifyFailTime", "verifyTime", "rTime", "uTime", "cTime"];
            _this.tableName = 'g_mine';
            return _this;
        }
        return GMine;
    }(Dao_gs));
    H.GMine = GMine;
    var GMineGoods = /** @class */ (function (_super) {
        __extends(GMineGoods, _super);
        function GMineGoods(cfg) {
            var _this = _super.call(this, cfg) || this;
            _this.needToList = ["collect", "rob"];
            _this.needToDate = ["opTime", "recvTime", "eTime", "uTime", "cTime"];
            _this.tableName = 'g_mine_goods';
            return _this;
        }
        return GMineGoods;
    }(Dao_gs));
    H.GMineGoods = GMineGoods;
    var GMineRock = /** @class */ (function (_super) {
        __extends(GMineRock, _super);
        function GMineRock(cfg) {
            var _this = _super.call(this, cfg) || this;
            _this.needToList = ["collect", "rob"];
            _this.needToDate = ["recvTime", "eTime", "uTime", "cTime"];
            _this.tableName = 'g_mine_rock';
            return _this;
        }
        return GMineRock;
    }(Dao_gs));
    H.GMineRock = GMineRock;
    var GMineIncome = /** @class */ (function (_super) {
        __extends(GMineIncome, _super);
        function GMineIncome(cfg) {
            var _this = _super.call(this, cfg) || this;
            _this.needToList = [];
            _this.needToDate = ["cTime"];
            _this.tableName = 'g_mine_income';
            return _this;
        }
        return GMineIncome;
    }(Dao_gs));
    H.GMineIncome = GMineIncome;
    var GMineEnemy = /** @class */ (function (_super) {
        __extends(GMineEnemy, _super);
        function GMineEnemy(cfg) {
            var _this = _super.call(this, cfg) || this;
            _this.needToList = [];
            _this.needToDate = ["uTime", "cTime"];
            _this.tableName = 'g_mine_enemy';
            return _this;
        }
        return GMineEnemy;
    }(Dao_gs));
    H.GMineEnemy = GMineEnemy;
    var GMineLog = /** @class */ (function (_super) {
        __extends(GMineLog, _super);
        function GMineLog(cfg) {
            var _this = _super.call(this, cfg) || this;
            _this.needToList = ["data"];
            _this.needToDate = ["uTime", "cTime"];
            _this.tableName = 'g_mine_log';
            return _this;
        }
        return GMineLog;
    }(Dao_gs));
    H.GMineLog = GMineLog;
    var GMineSkin = /** @class */ (function (_super) {
        __extends(GMineSkin, _super);
        function GMineSkin(cfg) {
            var _this = _super.call(this, cfg) || this;
            _this.needToList = ["attr"];
            _this.needToDate = ["uTime", "cTime"];
            _this.tableName = 'g_mine_skin';
            return _this;
        }
        return GMineSkin;
    }(Dao_gs));
    H.GMineSkin = GMineSkin;
    var GSubscribe = /** @class */ (function (_super) {
        __extends(GSubscribe, _super);
        function GSubscribe(cfg) {
            var _this = _super.call(this, cfg) || this;
            _this.needToList = [];
            _this.needToDate = ["uTime", "cTime"];
            _this.tableName = 'g_subscribe';
            return _this;
        }
        return GSubscribe;
    }(Dao_gs));
    H.GSubscribe = GSubscribe;
    var GSubscribeJob = /** @class */ (function (_super) {
        __extends(GSubscribeJob, _super);
        function GSubscribeJob(cfg) {
            var _this = _super.call(this, cfg) || this;
            _this.needToList = ["param"];
            _this.needToDate = ["pTime", "uTime", "cTime"];
            _this.tableName = 'g_subscribe_job';
            return _this;
        }
        return GSubscribeJob;
    }(Dao_gs));
    H.GSubscribeJob = GSubscribeJob;
    var GMsgNotifyJob = /** @class */ (function (_super) {
        __extends(GMsgNotifyJob, _super);
        function GMsgNotifyJob(cfg) {
            var _this = _super.call(this, cfg) || this;
            _this.needToList = ["param"];
            _this.needToDate = ["pTime", "uTime", "cTime"];
            _this.tableName = 'g_msg_notify_job';
            return _this;
        }
        return GMsgNotifyJob;
    }(Dao_gs));
    H.GMsgNotifyJob = GMsgNotifyJob;
    var GChatReport = /** @class */ (function (_super) {
        __extends(GChatReport, _super);
        function GChatReport(cfg) {
            var _this = _super.call(this, cfg) || this;
            _this.needToList = ["value"];
            _this.needToDate = ["uTime"];
            _this.tableName = 'g_chat_report';
            return _this;
        }
        return GChatReport;
    }(Dao_gs));
    H.GChatReport = GChatReport;
    var GIcoFrm = /** @class */ (function (_super) {
        __extends(GIcoFrm, _super);
        function GIcoFrm(cfg) {
            var _this = _super.call(this, cfg) || this;
            _this.needToList = ["icoFrmList", "icoFrmMap"];
            _this.needToDate = ["uTime", "cTime"];
            _this.tableName = 'g_ico_frm';
            return _this;
        }
        return GIcoFrm;
    }(Dao_gs));
    H.GIcoFrm = GIcoFrm;
    var GBubble = /** @class */ (function (_super) {
        __extends(GBubble, _super);
        function GBubble(cfg) {
            var _this = _super.call(this, cfg) || this;
            _this.needToList = ["bubbleList", "bubbleMap"];
            _this.needToDate = ["uTime", "cTime"];
            _this.tableName = 'g_bubble';
            return _this;
        }
        return GBubble;
    }(Dao_gs));
    H.GBubble = GBubble;
    var GTaskMain = /** @class */ (function (_super) {
        __extends(GTaskMain, _super);
        function GTaskMain(cfg) {
            var _this = _super.call(this, cfg) || this;
            _this.needToList = ["progress", "recvMap"];
            _this.needToDate = ["uTime", "cTime"];
            _this.tableName = 'g_task_main';
            return _this;
        }
        return GTaskMain;
    }(Dao_gs));
    H.GTaskMain = GTaskMain;
    var GTaskDly = /** @class */ (function (_super) {
        __extends(GTaskDly, _super);
        function GTaskDly(cfg) {
            var _this = _super.call(this, cfg) || this;
            _this.needToList = ["progress", "recvMap", "vitalBoxs", "vitalGotMap"];
            _this.needToDate = ["uTime", "cTime"];
            _this.tableName = 'g_task_dly';
            return _this;
        }
        return GTaskDly;
    }(Dao_gs));
    H.GTaskDly = GTaskDly;
    var GTaskAch = /** @class */ (function (_super) {
        __extends(GTaskAch, _super);
        function GTaskAch(cfg) {
            var _this = _super.call(this, cfg) || this;
            _this.needToList = ["progress", "recvMap"];
            _this.needToDate = ["uTime", "cTime"];
            _this.tableName = 'g_task_ach';
            return _this;
        }
        return GTaskAch;
    }(Dao_gs));
    H.GTaskAch = GTaskAch;
    var GTaskInv = /** @class */ (function (_super) {
        __extends(GTaskInv, _super);
        function GTaskInv(cfg) {
            var _this = _super.call(this, cfg) || this;
            _this.needToList = ["progress", "recvMap", "payRecvMap"];
            _this.needToDate = ["uTime", "cTime"];
            _this.tableName = 'g_task_inv';
            return _this;
        }
        return GTaskInv;
    }(Dao_gs));
    H.GTaskInv = GTaskInv;
    var GShop = /** @class */ (function (_super) {
        __extends(GShop, _super);
        function GShop(cfg) {
            var _this = _super.call(this, cfg) || this;
            _this.needToList = ["items", "buyRecord", "weekRecord", "monthRecord", "totRecord", "batchRecord"];
            _this.needToDate = ["itemRFTime", "itemRFTime_pro", "rTime", "uTime", "cTime"];
            _this.tableName = 'g_shop';
            return _this;
        }
        return GShop;
    }(Dao_gs));
    H.GShop = GShop;
    var GRchg = /** @class */ (function (_super) {
        __extends(GRchg, _super);
        function GRchg(cfg) {
            var _this = _super.call(this, cfg) || this;
            _this.needToList = ["gain"];
            _this.needToDate = ["reqTime", "sdkTime", "sendTime"];
            _this.tableName = 'g_rchg';
            return _this;
        }
        return GRchg;
    }(Dao_gs));
    H.GRchg = GRchg;
    var GRchgCard = /** @class */ (function (_super) {
        __extends(GRchgCard, _super);
        function GRchgCard(cfg) {
            var _this = _super.call(this, cfg) || this;
            _this.needToList = ["receiveList"];
            _this.needToDate = ["receiveTime", "invalidTime", "cTime"];
            _this.tableName = 'g_rchg_card';
            return _this;
        }
        return GRchgCard;
    }(Dao_gs));
    H.GRchgCard = GRchgCard;
    var GRchgDay = /** @class */ (function (_super) {
        __extends(GRchgDay, _super);
        function GRchgDay(cfg) {
            var _this = _super.call(this, cfg) || this;
            _this.needToList = ["progress", "rchgLog"];
            _this.needToDate = ["sTime", "eTime", "uTime", "cTime"];
            _this.tableName = 'g_rchg_day';
            return _this;
        }
        return GRchgDay;
    }(Dao_gs));
    H.GRchgDay = GRchgDay;
    var GRchgDayHist = /** @class */ (function (_super) {
        __extends(GRchgDayHist, _super);
        function GRchgDayHist(cfg) {
            var _this = _super.call(this, cfg) || this;
            _this.needToList = ["progress", "rchgLog"];
            _this.needToDate = ["sTime", "eTime", "uTime", "cTime"];
            _this.tableName = 'g_rchg_day_hist';
            return _this;
        }
        return GRchgDayHist;
    }(Dao_gs));
    H.GRchgDayHist = GRchgDayHist;
    var GRchgPopBag = /** @class */ (function (_super) {
        __extends(GRchgPopBag, _super);
        function GRchgPopBag(cfg) {
            var _this = _super.call(this, cfg) || this;
            _this.needToList = ["buyMap", "pullBagList"];
            _this.needToDate = ["rTime", "uTime", "cTime"];
            _this.tableName = 'g_rchg_pop_bag';
            return _this;
        }
        return GRchgPopBag;
    }(Dao_gs));
    H.GRchgPopBag = GRchgPopBag;
    var GRchgExt = /** @class */ (function (_super) {
        __extends(GRchgExt, _super);
        function GRchgExt(cfg) {
            var _this = _super.call(this, cfg) || this;
            _this.needToList = ["progress", "recvIds", "ext"];
            _this.needToDate = ["uTime", "cTime"];
            _this.tableName = 'g_rchg_ext';
            return _this;
        }
        return GRchgExt;
    }(Dao_gs));
    H.GRchgExt = GRchgExt;
    var GMail = /** @class */ (function (_super) {
        __extends(GMail, _super);
        function GMail(cfg) {
            var _this = _super.call(this, cfg) || this;
            _this.needToList = ["param", "items", "tTitle", "ext"];
            _this.needToDate = ["cTime", "eTime", "dTime", "rTime", "oTime", "pTime"];
            _this.tableName = 'g_mail';
            return _this;
        }
        return GMail;
    }(Dao_gs));
    H.GMail = GMail;
    var GFml = /** @class */ (function (_super) {
        __extends(GFml, _super);
        function GFml(cfg) {
            var _this = _super.call(this, cfg) || this;
            _this.needToList = ["bldCountMap", "ext"];
            _this.needToDate = ["cTime", "dTime", "bldTime", "chgMasterTime", "hotRecTime", "bossOpenTime", "copyResetTime"];
            _this.tableName = 'g_fml';
            return _this;
        }
        return GFml;
    }(Dao_gs));
    H.GFml = GFml;
    var GFmlExt = /** @class */ (function (_super) {
        __extends(GFmlExt, _super);
        function GFmlExt(cfg) {
            var _this = _super.call(this, cfg) || this;
            _this.needToList = ["v"];
            _this.needToDate = [];
            _this.tableName = 'g_fml_ext';
            return _this;
        }
        return GFmlExt;
    }(Dao_gs));
    H.GFmlExt = GFmlExt;
    var GFmlChgHist = /** @class */ (function (_super) {
        __extends(GFmlChgHist, _super);
        function GFmlChgHist(cfg) {
            var _this = _super.call(this, cfg) || this;
            _this.needToList = ["data"];
            _this.needToDate = ["cTime"];
            _this.tableName = 'g_fml_chg_hist';
            return _this;
        }
        return GFmlChgHist;
    }(Dao_gs));
    H.GFmlChgHist = GFmlChgHist;
    var GFmlApply = /** @class */ (function (_super) {
        __extends(GFmlApply, _super);
        function GFmlApply(cfg) {
            var _this = _super.call(this, cfg) || this;
            _this.needToList = [];
            _this.needToDate = ["operTime"];
            _this.tableName = 'g_fml_apply';
            return _this;
        }
        return GFmlApply;
    }(Dao_gs));
    H.GFmlApply = GFmlApply;
    var GFmlMb = /** @class */ (function (_super) {
        __extends(GFmlMb, _super);
        function GFmlMb(cfg) {
            var _this = _super.call(this, cfg) || this;
            _this.needToList = ["bldCountMap"];
            _this.needToDate = ["jTime", "qTime", "bldTime"];
            _this.tableName = 'g_fml_mb';
            return _this;
        }
        return GFmlMb;
    }(Dao_gs));
    H.GFmlMb = GFmlMb;
    var GFmlCopy = /** @class */ (function (_super) {
        __extends(GFmlCopy, _super);
        function GFmlCopy(cfg) {
            var _this = _super.call(this, cfg) || this;
            _this.needToList = ["hurtRecord", "hurtRecord_last"];
            _this.needToDate = ["openTime"];
            _this.tableName = 'g_fml_copy';
            return _this;
        }
        return GFmlCopy;
    }(Dao_gs));
    H.GFmlCopy = GFmlCopy;
    var GAssist = /** @class */ (function (_super) {
        __extends(GAssist, _super);
        function GAssist(cfg) {
            var _this = _super.call(this, cfg) || this;
            _this.needToList = ["assistInfoList"];
            _this.needToDate = ["uTime", "cTime"];
            _this.tableName = 'g_assist';
            return _this;
        }
        return GAssist;
    }(Dao_gs));
    H.GAssist = GAssist;
    var GInvite = /** @class */ (function (_super) {
        __extends(GInvite, _super);
        function GInvite(cfg) {
            var _this = _super.call(this, cfg) || this;
            _this.needToList = ["recvFrdNum"];
            _this.needToDate = ["uTime", "cTime"];
            _this.tableName = 'g_invite';
            return _this;
        }
        return GInvite;
    }(Dao_gs));
    H.GInvite = GInvite;
    var GBless = /** @class */ (function (_super) {
        __extends(GBless, _super);
        function GBless(cfg) {
            var _this = _super.call(this, cfg) || this;
            _this.needToList = ["pearlArr"];
            _this.needToDate = ["sendTime", "recTime", "uTime", "cTime"];
            _this.tableName = 'g_bless';
            return _this;
        }
        return GBless;
    }(Dao_gs));
    H.GBless = GBless;
    var GBlessHist = /** @class */ (function (_super) {
        __extends(GBlessHist, _super);
        function GBlessHist(cfg) {
            var _this = _super.call(this, cfg) || this;
            _this.needToList = [];
            _this.needToDate = ["cTime"];
            _this.tableName = 'g_bless_hist';
            return _this;
        }
        return GBlessHist;
    }(Dao_gs));
    H.GBlessHist = GBlessHist;
    var GActRank = /** @class */ (function (_super) {
        __extends(GActRank, _super);
        function GActRank(cfg) {
            var _this = _super.call(this, cfg) || this;
            _this.needToList = [];
            _this.needToDate = ["uTime", "cTime"];
            _this.tableName = 'g_act_rank';
            return _this;
        }
        return GActRank;
    }(Dao_gs));
    H.GActRank = GActRank;
    var GActRecord = /** @class */ (function (_super) {
        __extends(GActRecord, _super);
        function GActRecord(cfg) {
            var _this = _super.call(this, cfg) || this;
            _this.needToList = ["bag", "drops", "reachRec", "giftBuy", "exShopLog", "gamePro", "taskRcd"];
            _this.needToDate = ["lastResetTime", "powerTime", "uTime", "cTime"];
            _this.tableName = 'g_act_record';
            return _this;
        }
        return GActRecord;
    }(Dao_gs));
    H.GActRecord = GActRecord;
    var GActRwd = /** @class */ (function (_super) {
        __extends(GActRwd, _super);
        function GActRwd(cfg) {
            var _this = _super.call(this, cfg) || this;
            _this.needToList = ["ext"];
            _this.needToDate = ["cTime"];
            _this.tableName = 'g_act_rwd';
            return _this;
        }
        return GActRwd;
    }(Dao_gs));
    H.GActRwd = GActRwd;
    var GActSum = /** @class */ (function (_super) {
        __extends(GActSum, _super);
        function GActSum(cfg) {
            var _this = _super.call(this, cfg) || this;
            _this.needToList = ["progress", "content", "ext"];
            _this.needToDate = ["uTime", "cTime"];
            _this.tableName = 'g_act_sum';
            return _this;
        }
        return GActSum;
    }(Dao_gs));
    H.GActSum = GActSum;
    var GActMemoryLog = /** @class */ (function (_super) {
        __extends(GActMemoryLog, _super);
        function GActMemoryLog(cfg) {
            var _this = _super.call(this, cfg) || this;
            _this.needToList = [];
            _this.needToDate = ["cTime"];
            _this.tableName = 'g_act_memory_log';
            return _this;
        }
        return GActMemoryLog;
    }(Dao_gs));
    H.GActMemoryLog = GActMemoryLog;
    var GSign = /** @class */ (function (_super) {
        __extends(GSign, _super);
        function GSign(cfg) {
            var _this = _super.call(this, cfg) || this;
            _this.needToList = ["signRecord", "sevenRecord"];
            _this.needToDate = ["lTime", "sevenLTime", "cTime"];
            _this.tableName = 'g_sign';
            return _this;
        }
        return GSign;
    }(Dao_gs));
    H.GSign = GSign;
    var GKingOrder = /** @class */ (function (_super) {
        __extends(GKingOrder, _super);
        function GKingOrder(cfg) {
            var _this = _super.call(this, cfg) || this;
            _this.needToList = ["freeRecv", "payRecv", "taskRcd"];
            _this.needToDate = ["uTime", "cTime"];
            _this.tableName = 'g_king_order';
            return _this;
        }
        return GKingOrder;
    }(Dao_gs));
    H.GKingOrder = GKingOrder;
    var GCopy = /** @class */ (function (_super) {
        __extends(GCopy, _super);
        function GCopy(cfg) {
            var _this = _super.call(this, cfg) || this;
            _this.needToList = [];
            _this.needToDate = ["cTime", "uTime", "fTime"];
            _this.tableName = 'g_copy';
            return _this;
        }
        return GCopy;
    }(Dao_gs));
    H.GCopy = GCopy;
    var GCopyElite = /** @class */ (function (_super) {
        __extends(GCopyElite, _super);
        function GCopyElite(cfg) {
            var _this = _super.call(this, cfg) || this;
            _this.needToList = [];
            _this.needToDate = ["sweepTime", "cTime", "uTime", "fTime"];
            _this.tableName = 'g_copy_elite';
            return _this;
        }
        return GCopyElite;
    }(Dao_gs));
    H.GCopyElite = GCopyElite;
    var GCopyAbyss = /** @class */ (function (_super) {
        __extends(GCopyAbyss, _super);
        function GCopyAbyss(cfg) {
            var _this = _super.call(this, cfg) || this;
            _this.needToList = [];
            _this.needToDate = ["fTime", "cTime", "uTime"];
            _this.tableName = 'g_copy_abyss';
            return _this;
        }
        return GCopyAbyss;
    }(Dao_gs));
    H.GCopyAbyss = GCopyAbyss;
    var GShare = /** @class */ (function (_super) {
        __extends(GShare, _super);
        function GShare(cfg) {
            var _this = _super.call(this, cfg) || this;
            _this.needToList = [];
            _this.needToDate = ["recvTime", "uTime", "cTime"];
            _this.tableName = 'g_share';
            return _this;
        }
        return GShare;
    }(Dao_gs));
    H.GShare = GShare;
    var GRedeemUsr = /** @class */ (function (_super) {
        __extends(GRedeemUsr, _super);
        function GRedeemUsr(cfg) {
            var _this = _super.call(this, cfg) || this;
            _this.needToList = [];
            _this.needToDate = ["useTime"];
            _this.tableName = 'g_redeem_usr';
            return _this;
        }
        return GRedeemUsr;
    }(Dao_gs));
    H.GRedeemUsr = GRedeemUsr;
    var GArena = /** @class */ (function (_super) {
        __extends(GArena, _super);
        function GArena(cfg) {
            var _this = _super.call(this, cfg) || this;
            _this.needToList = ["mateOpptUids", "mateOpptList"];
            _this.needToDate = ["sTime", "pTime", "rTime", "uTime", "cTime", "fTime"];
            _this.tableName = 'g_arena';
            return _this;
        }
        return GArena;
    }(Dao_gs));
    H.GArena = GArena;
    var GArenaRecord = /** @class */ (function (_super) {
        __extends(GArenaRecord, _super);
        function GArenaRecord(cfg) {
            var _this = _super.call(this, cfg) || this;
            _this.needToList = ["fightResult"];
            _this.needToDate = ["cTime", "uTime"];
            _this.tableName = 'g_arena_record';
            return _this;
        }
        return GArenaRecord;
    }(Dao_gs));
    H.GArenaRecord = GArenaRecord;
    var GArenaWeekhis = /** @class */ (function (_super) {
        __extends(GArenaWeekhis, _super);
        function GArenaWeekhis(cfg) {
            var _this = _super.call(this, cfg) || this;
            _this.needToList = [];
            _this.needToDate = ["uTime", "cTime"];
            _this.tableName = 'g_arena_weekhis';
            return _this;
        }
        return GArenaWeekhis;
    }(Dao_gs));
    H.GArenaWeekhis = GArenaWeekhis;
    var GTower = /** @class */ (function (_super) {
        __extends(GTower, _super);
        function GTower(cfg) {
            var _this = _super.call(this, cfg) || this;
            _this.needToList = ["randList", "equipList", "attr"];
            _this.needToDate = ["fTime", "uTime", "cTime"];
            _this.tableName = 'g_tower';
            return _this;
        }
        return GTower;
    }(Dao_gs));
    H.GTower = GTower;
    var GTowerHistTop20 = /** @class */ (function (_super) {
        __extends(GTowerHistTop20, _super);
        function GTowerHistTop20(cfg) {
            var _this = _super.call(this, cfg) || this;
            _this.needToList = [];
            _this.needToDate = ["uTime", "cTime"];
            _this.tableName = 'g_tower_hist_top20';
            return _this;
        }
        return GTowerHistTop20;
    }(Dao_gs));
    H.GTowerHistTop20 = GTowerHistTop20;
    var GRuneBase = /** @class */ (function (_super) {
        __extends(GRuneBase, _super);
        function GRuneBase(cfg) {
            var _this = _super.call(this, cfg) || this;
            _this.needToList = ["unlockManuals", "bookAttr", "boxList", "boxAttr", "altarAttr", "elvesMap", "elvesAttr", "planList", "planInfoList", "handbook"];
            _this.needToDate = ["powerTime", "callTime", "sTime", "uTime", "cTime"];
            _this.tableName = 'g_rune_base';
            return _this;
        }
        return GRuneBase;
    }(Dao_gs));
    H.GRuneBase = GRuneBase;
    var GRunePart = /** @class */ (function (_super) {
        __extends(GRunePart, _super);
        function GRunePart(cfg) {
            var _this = _super.call(this, cfg) || this;
            _this.needToList = ["baseAttr", "extAttrList", "tempAttrList", "attrs"];
            _this.needToDate = ["uTime", "cTime"];
            _this.tableName = 'g_rune_part';
            return _this;
        }
        return GRunePart;
    }(Dao_gs));
    H.GRunePart = GRunePart;
    var GRune = /** @class */ (function (_super) {
        __extends(GRune, _super);
        function GRune(cfg) {
            var _this = _super.call(this, cfg) || this;
            _this.needToList = ["attr"];
            _this.needToDate = [];
            _this.tableName = 'g_rune';
            return _this;
        }
        return GRune;
    }(Dao_gs));
    H.GRune = GRune;
    var GRuneRcd = /** @class */ (function (_super) {
        __extends(GRuneRcd, _super);
        function GRuneRcd(cfg) {
            var _this = _super.call(this, cfg) || this;
            _this.needToList = ["attr"];
            _this.needToDate = [];
            _this.tableName = 'g_rune_rcd';
            return _this;
        }
        return GRuneRcd;
    }(Dao_gs));
    H.GRuneRcd = GRuneRcd;
    var GRuneTask = /** @class */ (function (_super) {
        __extends(GRuneTask, _super);
        function GRuneTask(cfg) {
            var _this = _super.call(this, cfg) || this;
            _this.needToList = ["progress", "orders", "openGifts", "openLTasks"];
            _this.needToDate = ["rTime", "uTime", "cTime"];
            _this.tableName = 'g_rune_task';
            return _this;
        }
        return GRuneTask;
    }(Dao_gs));
    H.GRuneTask = GRuneTask;
    var GAttrChg = /** @class */ (function (_super) {
        __extends(GAttrChg, _super);
        function GAttrChg(cfg) {
            var _this = _super.call(this, cfg) || this;
            _this.needToList = ["ifaceName", "ifaceArgs", "beforeAttr", "afterAttr", "deltaAttr"];
            _this.needToDate = ["cTime"];
            _this.tableName = 'g_attr_chg';
            return _this;
        }
        return GAttrChg;
    }(Dao_gs));
    H.GAttrChg = GAttrChg;
    var GMazeUsr = /** @class */ (function (_super) {
        __extends(GMazeUsr, _super);
        function GMazeUsr(cfg) {
            var _this = _super.call(this, cfg) || this;
            _this.needToList = ["pos", "unLockEventList", "unKilledUids", "mapInfo"];
            _this.needToDate = ["powerTime", "sTime", "uTime", "cTime"];
            _this.tableName = 'g_maze_usr';
            return _this;
        }
        return GMazeUsr;
    }(Dao_gs));
    H.GMazeUsr = GMazeUsr;
    var GMazeRcd = /** @class */ (function (_super) {
        __extends(GMazeRcd, _super);
        function GMazeRcd(cfg) {
            var _this = _super.call(this, cfg) || this;
            _this.needToList = ["content"];
            _this.needToDate = [];
            _this.tableName = 'g_maze_rcd';
            return _this;
        }
        return GMazeRcd;
    }(Dao_gs));
    H.GMazeRcd = GMazeRcd;
    var GGodImprint = /** @class */ (function (_super) {
        __extends(GGodImprint, _super);
        function GGodImprint(cfg) {
            var _this = _super.call(this, cfg) || this;
            _this.needToList = ["skills", "attr"];
            _this.needToDate = ["uTime", "cTime"];
            _this.tableName = 'g_god_imprint';
            return _this;
        }
        return GGodImprint;
    }(Dao_gs));
    H.GGodImprint = GGodImprint;
    var GPetBase = /** @class */ (function (_super) {
        __extends(GPetBase, _super);
        function GPetBase(cfg) {
            var _this = _super.call(this, cfg) || this;
            _this.needToList = ["handbook"];
            _this.needToDate = ["rTime", "uTime", "cTime"];
            _this.tableName = 'g_pet_base';
            return _this;
        }
        return GPetBase;
    }(Dao_gs));
    H.GPetBase = GPetBase;
    var GPet = /** @class */ (function (_super) {
        __extends(GPet, _super);
        function GPet(cfg) {
            var _this = _super.call(this, cfg) || this;
            _this.needToList = ["attr"];
            _this.needToDate = ["uTime", "cTime"];
            _this.tableName = 'g_pet';
            return _this;
        }
        return GPet;
    }(Dao_gs));
    H.GPet = GPet;
    var GRbPer = /** @class */ (function (_super) {
        __extends(GRbPer, _super);
        function GRbPer(cfg) {
            var _this = _super.call(this, cfg) || this;
            _this.needToList = ["matchUsrDisplay", "matchUsrDetail"];
            _this.needToDate = ["fTime", "failTime", "uTime", "cTime"];
            _this.tableName = 'g_rb_per';
            return _this;
        }
        return GRbPer;
    }(Dao_gs));
    H.GRbPer = GRbPer;
    var GRbLog = /** @class */ (function (_super) {
        __extends(GRbLog, _super);
        function GRbLog(cfg) {
            var _this = _super.call(this, cfg) || this;
            _this.needToList = ["ext"];
            _this.needToDate = ["uTime", "cTime"];
            _this.tableName = 'g_rb_log';
            return _this;
        }
        return GRbLog;
    }(Dao_gs));
    H.GRbLog = GRbLog;
    var GActPeakBet = /** @class */ (function (_super) {
        __extends(GActPeakBet, _super);
        function GActPeakBet(cfg) {
            var _this = _super.call(this, cfg) || this;
            _this.needToList = [];
            _this.needToDate = ["uTime", "cTime"];
            _this.tableName = 'g_act_peak_bet';
            return _this;
        }
        return GActPeakBet;
    }(Dao_gs));
    H.GActPeakBet = GActPeakBet;
    H.gDidPoolDao = new GDidPool();
    H.gUsrDao = new GUsr();
    H.gUsrOlDao = new GUsrOl();
    H.gUsrExtDao = new GUsrExt();
    H.gUsrCountDao = new GUsrCount();
    H.gUsrRcdDao = new GUsrRcd();
    H.gUsrSetDao = new GUsrSet();
    H.gUsrSdkRwdDao = new GUsrSdkRwd();
    H.gUsrLoginHistDao = new GUsrLoginHist();
    H.gUsrSsDao = new GUsrSs();
    H.gBoxDao = new GBox();
    H.gEquipBaseDao = new GEquipBase();
    H.gEquipDao = new GEquip();
    H.gHandbookDao = new GHandbook();
    H.gWingDao = new GWing();
    H.gRufBaseDao = new GRufBase();
    H.gRufDao = new GRuf();
    H.gHonourDao = new GHonour();
    H.gTitleDao = new GTitle();
    H.gTitleHistDao = new GTitleHist();
    H.gGemDao = new GGem();
    H.gGemPaperDao = new GGemPaper();
    H.gGemSchemeDao = new GGemScheme();
    H.gSacraDao = new GSacra();
    H.gSacraDrawLogDao = new GSacraDrawLog();
    H.gLuckyLabaDao = new GLuckyLaba();
    H.gLuckyLabaDrawLogDao = new GLuckyLabaDrawLog();
    H.gMineDao = new GMine();
    H.gMineGoodsDao = new GMineGoods();
    H.gMineRockDao = new GMineRock();
    H.gMineIncomeDao = new GMineIncome();
    H.gMineEnemyDao = new GMineEnemy();
    H.gMineLogDao = new GMineLog();
    H.gMineSkinDao = new GMineSkin();
    H.gSubscribeDao = new GSubscribe();
    H.gSubscribeJobDao = new GSubscribeJob();
    H.gMsgNotifyJobDao = new GMsgNotifyJob();
    H.gChatReportDao = new GChatReport();
    H.gIcoFrmDao = new GIcoFrm();
    H.gBubbleDao = new GBubble();
    H.gTaskMainDao = new GTaskMain();
    H.gTaskDlyDao = new GTaskDly();
    H.gTaskAchDao = new GTaskAch();
    H.gTaskInvDao = new GTaskInv();
    H.gShopDao = new GShop();
    H.gRchgDao = new GRchg();
    H.gRchgCardDao = new GRchgCard();
    H.gRchgDayDao = new GRchgDay();
    H.gRchgDayHistDao = new GRchgDayHist();
    H.gRchgPopBagDao = new GRchgPopBag();
    H.gRchgExtDao = new GRchgExt();
    H.gMailDao = new GMail();
    H.gFmlDao = new GFml();
    H.gFmlExtDao = new GFmlExt();
    H.gFmlChgHistDao = new GFmlChgHist();
    H.gFmlApplyDao = new GFmlApply();
    H.gFmlMbDao = new GFmlMb();
    H.gFmlCopyDao = new GFmlCopy();
    H.gAssistDao = new GAssist();
    H.gInviteDao = new GInvite();
    H.gBlessDao = new GBless();
    H.gBlessHistDao = new GBlessHist();
    H.gActRankDao = new GActRank();
    H.gActRecordDao = new GActRecord();
    H.gActRwdDao = new GActRwd();
    H.gActSumDao = new GActSum();
    H.gActMemoryLogDao = new GActMemoryLog();
    H.gSignDao = new GSign();
    H.gKingOrderDao = new GKingOrder();
    H.gCopyDao = new GCopy();
    H.gCopyEliteDao = new GCopyElite();
    H.gCopyAbyssDao = new GCopyAbyss();
    H.gShareDao = new GShare();
    H.gRedeemUsrDao = new GRedeemUsr();
    H.gArenaDao = new GArena();
    H.gArenaRecordDao = new GArenaRecord();
    H.gArenaWeekhisDao = new GArenaWeekhis();
    H.gTowerDao = new GTower();
    H.gTowerHistTop20Dao = new GTowerHistTop20();
    H.gRuneBaseDao = new GRuneBase();
    H.gRunePartDao = new GRunePart();
    H.gRuneDao = new GRune();
    H.gRuneRcdDao = new GRuneRcd();
    H.gRuneTaskDao = new GRuneTask();
    H.gAttrChgDao = new GAttrChg();
    H.gMazeUsrDao = new GMazeUsr();
    H.gMazeRcdDao = new GMazeRcd();
    H.gGodImprintDao = new GGodImprint();
    H.gPetBaseDao = new GPetBase();
    H.gPetDao = new GPet();
    H.gRbPerDao = new GRbPer();
    H.gRbLogDao = new GRbLog();
    H.gActPeakBetDao = new GActPeakBet();
})(H || (H = {}));
/// <reference path="../base/mysql/Dao.ts" />
var H;
/// <reference path="../base/mysql/Dao.ts" />
(function (H) {
    H.mysql_gw = H.initPool({ "database": "gw" });
    var Dao_gw = /** @class */ (function (_super) {
        __extends(Dao_gw, _super);
        function Dao_gw(cfg) {
            return _super.call(this, cfg) || this;
        }
        Object.defineProperty(Dao_gw.prototype, "client", {
            get: function () {
                return this._promisePool || H.mysql_gw;
            },
            enumerable: false,
            configurable: true
        });
        return Dao_gw;
    }(H.Dao));
    H.Dao_gw = Dao_gw;
    var GDbConfig = /** @class */ (function (_super) {
        __extends(GDbConfig, _super);
        function GDbConfig(cfg) {
            var _this = _super.call(this, cfg) || this;
            _this.needToList = [];
            _this.needToDate = [];
            _this.tableName = 'g_db_config';
            return _this;
        }
        return GDbConfig;
    }(Dao_gw));
    H.GDbConfig = GDbConfig;
    var GGrp = /** @class */ (function (_super) {
        __extends(GGrp, _super);
        function GGrp(cfg) {
            var _this = _super.call(this, cfg) || this;
            _this.needToList = ["ext"];
            _this.needToDate = ["openTime", "mergerTime"];
            _this.tableName = 'g_grp';
            return _this;
        }
        return GGrp;
    }(Dao_gw));
    H.GGrp = GGrp;
    var GGrpIdx = /** @class */ (function (_super) {
        __extends(GGrpIdx, _super);
        function GGrpIdx(cfg) {
            var _this = _super.call(this, cfg) || this;
            _this.needToList = [];
            _this.needToDate = [];
            _this.tableName = 'g_grp_idx';
            return _this;
        }
        return GGrpIdx;
    }(Dao_gw));
    H.GGrpIdx = GGrpIdx;
    var GServerNameLang = /** @class */ (function (_super) {
        __extends(GServerNameLang, _super);
        function GServerNameLang(cfg) {
            var _this = _super.call(this, cfg) || this;
            _this.needToList = [];
            _this.needToDate = [];
            _this.tableName = 'g_server_name_lang';
            return _this;
        }
        return GServerNameLang;
    }(Dao_gw));
    H.GServerNameLang = GServerNameLang;
    var GComp = /** @class */ (function (_super) {
        __extends(GComp, _super);
        function GComp(cfg) {
            var _this = _super.call(this, cfg) || this;
            _this.needToList = ["ext"];
            _this.needToDate = ["initTime", "bootTime"];
            _this.tableName = 'g_comp';
            return _this;
        }
        return GComp;
    }(Dao_gw));
    H.GComp = GComp;
    var GCompCount = /** @class */ (function (_super) {
        __extends(GCompCount, _super);
        function GCompCount(cfg) {
            var _this = _super.call(this, cfg) || this;
            _this.needToList = [];
            _this.needToDate = ["hTime"];
            _this.tableName = 'g_comp_count';
            return _this;
        }
        return GCompCount;
    }(Dao_gw));
    H.GCompCount = GCompCount;
    var GGsRegion = /** @class */ (function (_super) {
        __extends(GGsRegion, _super);
        function GGsRegion(cfg) {
            var _this = _super.call(this, cfg) || this;
            _this.needToList = [];
            _this.needToDate = [];
            _this.tableName = 'g_gs_region';
            return _this;
        }
        return GGsRegion;
    }(Dao_gw));
    H.GGsRegion = GGsRegion;
    var GChnRegion = /** @class */ (function (_super) {
        __extends(GChnRegion, _super);
        function GChnRegion(cfg) {
            var _this = _super.call(this, cfg) || this;
            _this.needToList = ["idxList", "blackMap"];
            _this.needToDate = [];
            _this.tableName = 'g_chn_region';
            return _this;
        }
        return GChnRegion;
    }(Dao_gw));
    H.GChnRegion = GChnRegion;
    var GAccLoginHist = /** @class */ (function (_super) {
        __extends(GAccLoginHist, _super);
        function GAccLoginHist(cfg) {
            var _this = _super.call(this, cfg) || this;
            _this.needToList = [];
            _this.needToDate = ["time"];
            _this.tableName = 'g_acc_login_hist';
            return _this;
        }
        return GAccLoginHist;
    }(Dao_gw));
    H.GAccLoginHist = GAccLoginHist;
    var GAcc = /** @class */ (function (_super) {
        __extends(GAcc, _super);
        function GAcc(cfg) {
            var _this = _super.call(this, cfg) || this;
            _this.needToList = ["gsIdxList", "authInfo"];
            _this.needToDate = ["cTime", "lTime"];
            _this.tableName = 'g_acc';
            return _this;
        }
        return GAcc;
    }(Dao_gw));
    H.GAcc = GAcc;
    H.gDbConfigDao = new GDbConfig();
    H.gGrpDao = new GGrp();
    H.gGrpIdxDao = new GGrpIdx();
    H.gServerNameLangDao = new GServerNameLang();
    H.gCompDao = new GComp();
    H.gCompCountDao = new GCompCount();
    H.gGsRegionDao = new GGsRegion();
    H.gChnRegionDao = new GChnRegion();
    H.gAccLoginHistDao = new GAccLoginHist();
    H.gAccDao = new GAcc();
})(H || (H = {}));
/// <reference path="../base/mysql/Dao.ts" />
var H;
/// <reference path="../base/mysql/Dao.ts" />
(function (H) {
    H.mysql_hhw = H.initPool({ "database": "hhw" });
    var Dao_hhw = /** @class */ (function (_super) {
        __extends(Dao_hhw, _super);
        function Dao_hhw(cfg) {
            return _super.call(this, cfg) || this;
        }
        Object.defineProperty(Dao_hhw.prototype, "client", {
            get: function () {
                return this._promisePool || H.mysql_hhw;
            },
            enumerable: false,
            configurable: true
        });
        return Dao_hhw;
    }(H.Dao));
    H.Dao_hhw = Dao_hhw;
    var Hhw = /** @class */ (function (_super) {
        __extends(Hhw, _super);
        function Hhw(cfg) {
            var _this = _super.call(this, cfg) || this;
            _this.needToList = [];
            _this.needToDate = [];
            _this.tableName = 'hhw';
            return _this;
        }
        return Hhw;
    }(Dao_hhw));
    H.Hhw = Hhw;
    var TestRequest = /** @class */ (function (_super) {
        __extends(TestRequest, _super);
        function TestRequest(cfg) {
            var _this = _super.call(this, cfg) || this;
            _this.needToList = ["args"];
            _this.needToDate = [];
            _this.tableName = 'testRequest';
            return _this;
        }
        return TestRequest;
    }(Dao_hhw));
    H.TestRequest = TestRequest;
    var TeamCfg = /** @class */ (function (_super) {
        __extends(TeamCfg, _super);
        function TeamCfg(cfg) {
            var _this = _super.call(this, cfg) || this;
            _this.needToList = ["ext", "cfgList"];
            _this.needToDate = [];
            _this.tableName = 'teamCfg';
            return _this;
        }
        return TeamCfg;
    }(Dao_hhw));
    H.TeamCfg = TeamCfg;
    H.hhwDao = new Hhw();
    H.testRequestDao = new TestRequest();
    H.teamCfgDao = new TeamCfg();
})(H || (H = {}));
/// <reference path="../base/mysql/Dao.ts" />
var H;
/// <reference path="../base/mysql/Dao.ts" />
(function (H) {
    H.mysql_main = H.initPool({ "database": "main" });
    var Dao_main = /** @class */ (function (_super) {
        __extends(Dao_main, _super);
        function Dao_main(cfg) {
            return _super.call(this, cfg) || this;
        }
        Object.defineProperty(Dao_main.prototype, "client", {
            get: function () {
                return this._promisePool || H.mysql_main;
            },
            enumerable: false,
            configurable: true
        });
        return Dao_main;
    }(H.Dao));
    H.Dao_main = Dao_main;
    var GBwMenu = /** @class */ (function (_super) {
        __extends(GBwMenu, _super);
        function GBwMenu(cfg) {
            var _this = _super.call(this, cfg) || this;
            _this.needToList = [];
            _this.needToDate = ["invalidTime"];
            _this.tableName = 'g_bw_menu';
            return _this;
        }
        return GBwMenu;
    }(Dao_main));
    H.GBwMenu = GBwMenu;
    var GAccSet = /** @class */ (function (_super) {
        __extends(GAccSet, _super);
        function GAccSet(cfg) {
            var _this = _super.call(this, cfg) || this;
            _this.needToList = ["value"];
            _this.needToDate = ["recvTime", "uTime", "cTime"];
            _this.tableName = 'g_acc_set';
            return _this;
        }
        return GAccSet;
    }(Dao_main));
    H.GAccSet = GAccSet;
    var GGsFmlInfo = /** @class */ (function (_super) {
        __extends(GGsFmlInfo, _super);
        function GGsFmlInfo(cfg) {
            var _this = _super.call(this, cfg) || this;
            _this.needToList = [];
            _this.needToDate = [];
            _this.tableName = 'g_gs_fml_info';
            return _this;
        }
        return GGsFmlInfo;
    }(Dao_main));
    H.GGsFmlInfo = GGsFmlInfo;
    var GGsUsrInfo = /** @class */ (function (_super) {
        __extends(GGsUsrInfo, _super);
        function GGsUsrInfo(cfg) {
            var _this = _super.call(this, cfg) || this;
            _this.needToList = [];
            _this.needToDate = ["lTime", "cTime"];
            _this.tableName = 'g_gs_usr_info';
            return _this;
        }
        return GGsUsrInfo;
    }(Dao_main));
    H.GGsUsrInfo = GGsUsrInfo;
    var GGsActStatus = /** @class */ (function (_super) {
        __extends(GGsActStatus, _super);
        function GGsActStatus(cfg) {
            var _this = _super.call(this, cfg) || this;
            _this.needToList = [];
            _this.needToDate = ["cTime"];
            _this.tableName = 'g_gs_act_status';
            return _this;
        }
        return GGsActStatus;
    }(Dao_main));
    H.GGsActStatus = GGsActStatus;
    var GGsActRankHist = /** @class */ (function (_super) {
        __extends(GGsActRankHist, _super);
        function GGsActRankHist(cfg) {
            var _this = _super.call(this, cfg) || this;
            _this.needToList = [];
            _this.needToDate = ["cTime"];
            _this.tableName = 'g_gs_act_rank_hist';
            return _this;
        }
        return GGsActRankHist;
    }(Dao_main));
    H.GGsActRankHist = GGsActRankHist;
    var GCpInviteFrds = /** @class */ (function (_super) {
        __extends(GCpInviteFrds, _super);
        function GCpInviteFrds(cfg) {
            var _this = _super.call(this, cfg) || this;
            _this.needToList = [];
            _this.needToDate = ["uTime", "cTime"];
            _this.tableName = 'g_cp_invite_frds';
            return _this;
        }
        return GCpInviteFrds;
    }(Dao_main));
    H.GCpInviteFrds = GCpInviteFrds;
    var GRchgReq = /** @class */ (function (_super) {
        __extends(GRchgReq, _super);
        function GRchgReq(cfg) {
            var _this = _super.call(this, cfg) || this;
            _this.needToList = ["ext"];
            _this.needToDate = ["reqTime", "sdkTime", "sendTime"];
            _this.tableName = 'g_rchg_req';
            return _this;
        }
        return GRchgReq;
    }(Dao_main));
    H.GRchgReq = GRchgReq;
    var GOnlyName = /** @class */ (function (_super) {
        __extends(GOnlyName, _super);
        function GOnlyName(cfg) {
            var _this = _super.call(this, cfg) || this;
            _this.needToList = [];
            _this.needToDate = [];
            _this.tableName = 'g_only_name';
            return _this;
        }
        return GOnlyName;
    }(Dao_main));
    H.GOnlyName = GOnlyName;
    var GCustomIco = /** @class */ (function (_super) {
        __extends(GCustomIco, _super);
        function GCustomIco(cfg) {
            var _this = _super.call(this, cfg) || this;
            _this.needToList = [];
            _this.needToDate = [];
            _this.tableName = 'g_custom_ico';
            return _this;
        }
        return GCustomIco;
    }(Dao_main));
    H.GCustomIco = GCustomIco;
    var GActTmp = /** @class */ (function (_super) {
        __extends(GActTmp, _super);
        function GActTmp(cfg) {
            var _this = _super.call(this, cfg) || this;
            _this.needToList = ["cnd", "sItemIds", "ext", "langMap", "giftbag", "content", "rank", "rank2", "task", "buy"];
            _this.needToDate = ["uTime", "cTime"];
            _this.tableName = 'g_act_tmp';
            return _this;
        }
        return GActTmp;
    }(Dao_main));
    H.GActTmp = GActTmp;
    var GActTmpLang = /** @class */ (function (_super) {
        __extends(GActTmpLang, _super);
        function GActTmpLang(cfg) {
            var _this = _super.call(this, cfg) || this;
            _this.needToList = ["textMap"];
            _this.needToDate = ["uTime", "cTime"];
            _this.tableName = 'g_act_tmp_lang';
            return _this;
        }
        return GActTmpLang;
    }(Dao_main));
    H.GActTmpLang = GActTmpLang;
    var GActBatch = /** @class */ (function (_super) {
        __extends(GActBatch, _super);
        function GActBatch(cfg) {
            var _this = _super.call(this, cfg) || this;
            _this.needToList = ["gsIdList_white", "gsIdList_black", "roomMap"];
            _this.needToDate = ["beginTime", "uTime", "cTime"];
            _this.tableName = 'g_act_batch';
            return _this;
        }
        return GActBatch;
    }(Dao_main));
    H.GActBatch = GActBatch;
    var GActGrp = /** @class */ (function (_super) {
        __extends(GActGrp, _super);
        function GActGrp(cfg) {
            var _this = _super.call(this, cfg) || this;
            _this.needToList = ["grpIdList"];
            _this.needToDate = ["beginTime", "uTime"];
            _this.tableName = 'g_act_grp';
            return _this;
        }
        return GActGrp;
    }(Dao_main));
    H.GActGrp = GActGrp;
    var GActNotice = /** @class */ (function (_super) {
        __extends(GActNotice, _super);
        function GActNotice(cfg) {
            var _this = _super.call(this, cfg) || this;
            _this.needToList = ["param"];
            _this.needToDate = ["uTime", "cTime"];
            _this.tableName = 'g_act_notice';
            return _this;
        }
        return GActNotice;
    }(Dao_main));
    H.GActNotice = GActNotice;
    var GActNoticeLang = /** @class */ (function (_super) {
        __extends(GActNoticeLang, _super);
        function GActNoticeLang(cfg) {
            var _this = _super.call(this, cfg) || this;
            _this.needToList = [];
            _this.needToDate = ["uTime", "cTime"];
            _this.tableName = 'g_act_notice_lang';
            return _this;
        }
        return GActNoticeLang;
    }(Dao_main));
    H.GActNoticeLang = GActNoticeLang;
    var GMailTmp = /** @class */ (function (_super) {
        __extends(GMailTmp, _super);
        function GMailTmp(cfg) {
            var _this = _super.call(this, cfg) || this;
            _this.needToList = ["ext"];
            _this.needToDate = [];
            _this.tableName = 'g_mail_tmp';
            return _this;
        }
        return GMailTmp;
    }(Dao_main));
    H.GMailTmp = GMailTmp;
    var GMailTmpLang = /** @class */ (function (_super) {
        __extends(GMailTmpLang, _super);
        function GMailTmpLang(cfg) {
            var _this = _super.call(this, cfg) || this;
            _this.needToList = [];
            _this.needToDate = [];
            _this.tableName = 'g_mail_tmp_lang';
            return _this;
        }
        return GMailTmpLang;
    }(Dao_main));
    H.GMailTmpLang = GMailTmpLang;
    var GMailAll = /** @class */ (function (_super) {
        __extends(GMailAll, _super);
        function GMailAll(cfg) {
            var _this = _super.call(this, cfg) || this;
            _this.needToList = ["gsIdList_white", "gsIdList_black", "param", "items", "ext"];
            _this.needToDate = ["sTime", "eTime", "cTime"];
            _this.tableName = 'g_mail_all';
            return _this;
        }
        return GMailAll;
    }(Dao_main));
    H.GMailAll = GMailAll;
    var GNotice = /** @class */ (function (_super) {
        __extends(GNotice, _super);
        function GNotice(cfg) {
            var _this = _super.call(this, cfg) || this;
            _this.needToList = ["chnIdList", "gsNameList"];
            _this.needToDate = ["bTime", "eTime", "uTime", "cTime"];
            _this.tableName = 'g_notice';
            return _this;
        }
        return GNotice;
    }(Dao_main));
    H.GNotice = GNotice;
    var GNoticeLang = /** @class */ (function (_super) {
        __extends(GNoticeLang, _super);
        function GNoticeLang(cfg) {
            var _this = _super.call(this, cfg) || this;
            _this.needToList = [];
            _this.needToDate = ["uTime", "cTime"];
            _this.tableName = 'g_notice_lang';
            return _this;
        }
        return GNoticeLang;
    }(Dao_main));
    H.GNoticeLang = GNoticeLang;
    var GSysMsg = /** @class */ (function (_super) {
        __extends(GSysMsg, _super);
        function GSysMsg(cfg) {
            var _this = _super.call(this, cfg) || this;
            _this.needToList = ["contentMap", "param", "grpIds"];
            _this.needToDate = ["sendTime", "endTime", "cTime"];
            _this.tableName = 'g_sys_msg';
            return _this;
        }
        return GSysMsg;
    }(Dao_main));
    H.GSysMsg = GSysMsg;
    var GSysMsgTmp = /** @class */ (function (_super) {
        __extends(GSysMsgTmp, _super);
        function GSysMsgTmp(cfg) {
            var _this = _super.call(this, cfg) || this;
            _this.needToList = [];
            _this.needToDate = ["cTime", "uTime"];
            _this.tableName = 'g_sys_msg_tmp';
            return _this;
        }
        return GSysMsgTmp;
    }(Dao_main));
    H.GSysMsgTmp = GSysMsgTmp;
    var GSysMsgTmpLang = /** @class */ (function (_super) {
        __extends(GSysMsgTmpLang, _super);
        function GSysMsgTmpLang(cfg) {
            var _this = _super.call(this, cfg) || this;
            _this.needToList = [];
            _this.needToDate = ["cTime", "uTime"];
            _this.tableName = 'g_sys_msg_tmp_lang';
            return _this;
        }
        return GSysMsgTmpLang;
    }(Dao_main));
    H.GSysMsgTmpLang = GSysMsgTmpLang;
    var GSubscribePushTmp = /** @class */ (function (_super) {
        __extends(GSubscribePushTmp, _super);
        function GSubscribePushTmp(cfg) {
            var _this = _super.call(this, cfg) || this;
            _this.needToList = ["dataList"];
            _this.needToDate = ["uTime", "cTime"];
            _this.tableName = 'g_subscribe_push_tmp';
            return _this;
        }
        return GSubscribePushTmp;
    }(Dao_main));
    H.GSubscribePushTmp = GSubscribePushTmp;
    var GSubscribePush = /** @class */ (function (_super) {
        __extends(GSubscribePush, _super);
        function GSubscribePush(cfg) {
            var _this = _super.call(this, cfg) || this;
            _this.needToList = ["chnIdList", "gsNameList"];
            _this.needToDate = ["cTime", "uTime"];
            _this.tableName = 'g_subscribe_push';
            return _this;
        }
        return GSubscribePush;
    }(Dao_main));
    H.GSubscribePush = GSubscribePush;
    var GSubscribePushLog = /** @class */ (function (_super) {
        __extends(GSubscribePushLog, _super);
        function GSubscribePushLog(cfg) {
            var _this = _super.call(this, cfg) || this;
            _this.needToList = ["chnIdList", "gsNameList", "cnd", "dataList"];
            _this.needToDate = ["cTime", "uTime"];
            _this.tableName = 'g_subscribe_push_log';
            return _this;
        }
        return GSubscribePushLog;
    }(Dao_main));
    H.GSubscribePushLog = GSubscribePushLog;
    var GOpenModule = /** @class */ (function (_super) {
        __extends(GOpenModule, _super);
        function GOpenModule(cfg) {
            var _this = _super.call(this, cfg) || this;
            _this.needToList = ["chnIdList", "gsNameList", "cfg"];
            _this.needToDate = ["openTime", "uTime", "cTime"];
            _this.tableName = 'g_open_module';
            return _this;
        }
        return GOpenModule;
    }(Dao_main));
    H.GOpenModule = GOpenModule;
    var GOpenHideItem = /** @class */ (function (_super) {
        __extends(GOpenHideItem, _super);
        function GOpenHideItem(cfg) {
            var _this = _super.call(this, cfg) || this;
            _this.needToList = ["itemIds"];
            _this.needToDate = ["uTime", "cTime"];
            _this.tableName = 'g_open_hide_item';
            return _this;
        }
        return GOpenHideItem;
    }(Dao_main));
    H.GOpenHideItem = GOpenHideItem;
    var GRoomCfg = /** @class */ (function (_super) {
        __extends(GRoomCfg, _super);
        function GRoomCfg(cfg) {
            var _this = _super.call(this, cfg) || this;
            _this.needToList = ["refList", "linkComp", "gsNameList", "grpIdMap"];
            _this.needToDate = ["uTime"];
            _this.tableName = 'g_room_cfg';
            return _this;
        }
        return GRoomCfg;
    }(Dao_main));
    H.GRoomCfg = GRoomCfg;
    var GRoomBatch = /** @class */ (function (_super) {
        __extends(GRoomBatch, _super);
        function GRoomBatch(cfg) {
            var _this = _super.call(this, cfg) || this;
            _this.needToList = ["steps"];
            _this.needToDate = ["batchTime"];
            _this.tableName = 'g_room_batch';
            return _this;
        }
        return GRoomBatch;
    }(Dao_main));
    H.GRoomBatch = GRoomBatch;
    var GScriptCfg = /** @class */ (function (_super) {
        __extends(GScriptCfg, _super);
        function GScriptCfg(cfg) {
            var _this = _super.call(this, cfg) || this;
            _this.needToList = ["gsList", "params"];
            _this.needToDate = ["cTime"];
            _this.tableName = 'g_script_cfg';
            return _this;
        }
        return GScriptCfg;
    }(Dao_main));
    H.GScriptCfg = GScriptCfg;
    var GScriptProgress = /** @class */ (function (_super) {
        __extends(GScriptProgress, _super);
        function GScriptProgress(cfg) {
            var _this = _super.call(this, cfg) || this;
            _this.needToList = [];
            _this.needToDate = ["cTime"];
            _this.tableName = 'g_script_progress';
            return _this;
        }
        return GScriptProgress;
    }(Dao_main));
    H.GScriptProgress = GScriptProgress;
    var GScriptVersion = /** @class */ (function (_super) {
        __extends(GScriptVersion, _super);
        function GScriptVersion(cfg) {
            var _this = _super.call(this, cfg) || this;
            _this.needToList = ["progress"];
            _this.needToDate = ["cTime"];
            _this.tableName = 'g_script_version';
            return _this;
        }
        return GScriptVersion;
    }(Dao_main));
    H.GScriptVersion = GScriptVersion;
    var GShareCfg = /** @class */ (function (_super) {
        __extends(GShareCfg, _super);
        function GShareCfg(cfg) {
            var _this = _super.call(this, cfg) || this;
            _this.needToList = ["chnIdList", "osTypeList", "chgVideo"];
            _this.needToDate = ["uTime", "cTime"];
            _this.tableName = 'g_share_cfg';
            return _this;
        }
        return GShareCfg;
    }(Dao_main));
    H.GShareCfg = GShareCfg;
    var GShareTmp = /** @class */ (function (_super) {
        __extends(GShareTmp, _super);
        function GShareTmp(cfg) {
            var _this = _super.call(this, cfg) || this;
            _this.needToList = [];
            _this.needToDate = ["uTime", "cTime"];
            _this.tableName = 'g_share_tmp';
            return _this;
        }
        return GShareTmp;
    }(Dao_main));
    H.GShareTmp = GShareTmp;
    var GRedeemAcc = /** @class */ (function (_super) {
        __extends(GRedeemAcc, _super);
        function GRedeemAcc(cfg) {
            var _this = _super.call(this, cfg) || this;
            _this.needToList = [];
            _this.needToDate = ["useTime"];
            _this.tableName = 'g_redeem_acc';
            return _this;
        }
        return GRedeemAcc;
    }(Dao_main));
    H.GRedeemAcc = GRedeemAcc;
    var GRedeemCode = /** @class */ (function (_super) {
        __extends(GRedeemCode, _super);
        function GRedeemCode(cfg) {
            var _this = _super.call(this, cfg) || this;
            _this.needToList = [];
            _this.needToDate = ["uTime", "cTime"];
            _this.tableName = 'g_redeem_code';
            return _this;
        }
        return GRedeemCode;
    }(Dao_main));
    H.GRedeemCode = GRedeemCode;
    var GRedeemBatch = /** @class */ (function (_super) {
        __extends(GRedeemBatch, _super);
        function GRedeemBatch(cfg) {
            var _this = _super.call(this, cfg) || this;
            _this.needToList = ["gsList", "chnIdList", "chnIdList_black"];
            _this.needToDate = ["startTime", "endTime", "cTime"];
            _this.tableName = 'g_redeem_batch';
            return _this;
        }
        return GRedeemBatch;
    }(Dao_main));
    H.GRedeemBatch = GRedeemBatch;
    var GGiftAcc = /** @class */ (function (_super) {
        __extends(GGiftAcc, _super);
        function GGiftAcc(cfg) {
            var _this = _super.call(this, cfg) || this;
            _this.needToList = [];
            _this.needToDate = ["uTime", "cTime"];
            _this.tableName = 'g_gift_acc';
            return _this;
        }
        return GGiftAcc;
    }(Dao_main));
    H.GGiftAcc = GGiftAcc;
    var GGiftBatch = /** @class */ (function (_super) {
        __extends(GGiftBatch, _super);
        function GGiftBatch(cfg) {
            var _this = _super.call(this, cfg) || this;
            _this.needToList = ["gsIdxList", "chnIdList"];
            _this.needToDate = ["sTime", "eTime"];
            _this.tableName = 'g_gift_batch';
            return _this;
        }
        return GGiftBatch;
    }(Dao_main));
    H.GGiftBatch = GGiftBatch;
    var GCronLog = /** @class */ (function (_super) {
        __extends(GCronLog, _super);
        function GCronLog(cfg) {
            var _this = _super.call(this, cfg) || this;
            _this.needToList = ["data"];
            _this.needToDate = ["uTime", "cTime"];
            _this.tableName = 'g_cron_log';
            return _this;
        }
        return GCronLog;
    }(Dao_main));
    H.GCronLog = GCronLog;
    var GReportedUsr = /** @class */ (function (_super) {
        __extends(GReportedUsr, _super);
        function GReportedUsr(cfg) {
            var _this = _super.call(this, cfg) || this;
            _this.needToList = ["uidList"];
            _this.needToDate = ["uTime", "cTime"];
            _this.tableName = 'g_reported_usr';
            return _this;
        }
        return GReportedUsr;
    }(Dao_main));
    H.GReportedUsr = GReportedUsr;
    var GTableVersion = /** @class */ (function (_super) {
        __extends(GTableVersion, _super);
        function GTableVersion(cfg) {
            var _this = _super.call(this, cfg) || this;
            _this.needToList = ["hasExecVers"];
            _this.needToDate = ["uTime"];
            _this.tableName = 'g_table_version';
            return _this;
        }
        return GTableVersion;
    }(Dao_main));
    H.GTableVersion = GTableVersion;
    H.gBwMenuDao = new GBwMenu();
    H.gAccSetDao = new GAccSet();
    H.gGsFmlInfoDao = new GGsFmlInfo();
    H.gGsUsrInfoDao = new GGsUsrInfo();
    H.gGsActStatusDao = new GGsActStatus();
    H.gGsActRankHistDao = new GGsActRankHist();
    H.gCpInviteFrdsDao = new GCpInviteFrds();
    H.gRchgReqDao = new GRchgReq();
    H.gOnlyNameDao = new GOnlyName();
    H.gCustomIcoDao = new GCustomIco();
    H.gActTmpDao = new GActTmp();
    H.gActTmpLangDao = new GActTmpLang();
    H.gActBatchDao = new GActBatch();
    H.gActGrpDao = new GActGrp();
    H.gActNoticeDao = new GActNotice();
    H.gActNoticeLangDao = new GActNoticeLang();
    H.gMailTmpDao = new GMailTmp();
    H.gMailTmpLangDao = new GMailTmpLang();
    H.gMailAllDao = new GMailAll();
    H.gNoticeDao = new GNotice();
    H.gNoticeLangDao = new GNoticeLang();
    H.gSysMsgDao = new GSysMsg();
    H.gSysMsgTmpDao = new GSysMsgTmp();
    H.gSysMsgTmpLangDao = new GSysMsgTmpLang();
    H.gSubscribePushTmpDao = new GSubscribePushTmp();
    H.gSubscribePushDao = new GSubscribePush();
    H.gSubscribePushLogDao = new GSubscribePushLog();
    H.gOpenModuleDao = new GOpenModule();
    H.gOpenHideItemDao = new GOpenHideItem();
    H.gRoomCfgDao = new GRoomCfg();
    H.gRoomBatchDao = new GRoomBatch();
    H.gScriptCfgDao = new GScriptCfg();
    H.gScriptProgressDao = new GScriptProgress();
    H.gScriptVersionDao = new GScriptVersion();
    H.gShareCfgDao = new GShareCfg();
    H.gShareTmpDao = new GShareTmp();
    H.gRedeemAccDao = new GRedeemAcc();
    H.gRedeemCodeDao = new GRedeemCode();
    H.gRedeemBatchDao = new GRedeemBatch();
    H.gGiftAccDao = new GGiftAcc();
    H.gGiftBatchDao = new GGiftBatch();
    H.gCronLogDao = new GCronLog();
    H.gReportedUsrDao = new GReportedUsr();
    H.gTableVersionDao = new GTableVersion();
})(H || (H = {}));
/// <reference path="../base/mysql/Dao.ts" />
var H;
/// <reference path="../base/mysql/Dao.ts" />
(function (H) {
    H.mysql_peak = H.initPool({ "database": "peak" });
    var Dao_peak = /** @class */ (function (_super) {
        __extends(Dao_peak, _super);
        function Dao_peak(cfg) {
            return _super.call(this, cfg) || this;
        }
        Object.defineProperty(Dao_peak.prototype, "client", {
            get: function () {
                return this._promisePool || H.mysql_peak;
            },
            enumerable: false,
            configurable: true
        });
        return Dao_peak;
    }(H.Dao));
    H.Dao_peak = Dao_peak;
    var GCPeakRoom = /** @class */ (function (_super) {
        __extends(GCPeakRoom, _super);
        function GCPeakRoom(cfg) {
            var _this = _super.call(this, cfg) || this;
            _this.needToList = [];
            _this.needToDate = ["select1Time", "select2Time", "select3Time", "select4Time", "select5Time", "uTime", "cTime"];
            _this.tableName = 'g_c_peak_room';
            return _this;
        }
        return GCPeakRoom;
    }(Dao_peak));
    H.GCPeakRoom = GCPeakRoom;
    var GCPeakUsr = /** @class */ (function (_super) {
        __extends(GCPeakUsr, _super);
        function GCPeakUsr(cfg) {
            var _this = _super.call(this, cfg) || this;
            _this.needToList = ["planSet", "planDetailMap", "planDetailMap_bak"];
            _this.needToDate = ["uTime", "cTime"];
            _this.tableName = 'g_c_peak_usr';
            return _this;
        }
        return GCPeakUsr;
    }(Dao_peak));
    H.GCPeakUsr = GCPeakUsr;
    var GCPeakRound = /** @class */ (function (_super) {
        __extends(GCPeakRound, _super);
        function GCPeakRound(cfg) {
            var _this = _super.call(this, cfg) || this;
            _this.needToList = ["aMap", "bMap"];
            _this.needToDate = ["uTime", "cTime"];
            _this.tableName = 'g_c_peak_round';
            return _this;
        }
        return GCPeakRound;
    }(Dao_peak));
    H.GCPeakRound = GCPeakRound;
    var GCPeakSelectFight = /** @class */ (function (_super) {
        __extends(GCPeakSelectFight, _super);
        function GCPeakSelectFight(cfg) {
            var _this = _super.call(this, cfg) || this;
            _this.needToList = ["fightRst"];
            _this.needToDate = ["cTime"];
            _this.tableName = 'g_c_peak_select_fight';
            return _this;
        }
        return GCPeakSelectFight;
    }(Dao_peak));
    H.GCPeakSelectFight = GCPeakSelectFight;
    var GCPeakRoundFight = /** @class */ (function (_super) {
        __extends(GCPeakRoundFight, _super);
        function GCPeakRoundFight(cfg) {
            var _this = _super.call(this, cfg) || this;
            _this.needToList = ["fightRst"];
            _this.needToDate = ["cTime"];
            _this.tableName = 'g_c_peak_round_fight';
            return _this;
        }
        return GCPeakRoundFight;
    }(Dao_peak));
    H.GCPeakRoundFight = GCPeakRoundFight;
    var GCPeakLog = /** @class */ (function (_super) {
        __extends(GCPeakLog, _super);
        function GCPeakLog(cfg) {
            var _this = _super.call(this, cfg) || this;
            _this.needToList = [];
            _this.needToDate = ["cTime"];
            _this.tableName = 'g_c_peak_log';
            return _this;
        }
        return GCPeakLog;
    }(Dao_peak));
    H.GCPeakLog = GCPeakLog;
    H.gCPeakRoomDao = new GCPeakRoom();
    H.gCPeakUsrDao = new GCPeakUsr();
    H.gCPeakRoundDao = new GCPeakRound();
    H.gCPeakSelectFightDao = new GCPeakSelectFight();
    H.gCPeakRoundFightDao = new GCPeakRoundFight();
    H.gCPeakLogDao = new GCPeakLog();
})(H || (H = {}));
/// <reference path="../base/mysql/Dao.ts" />
var H;
/// <reference path="../base/mysql/Dao.ts" />
(function (H) {
    H.mysql_rb = H.initPool({ "database": "rb" });
    var Dao_rb = /** @class */ (function (_super) {
        __extends(Dao_rb, _super);
        function Dao_rb(cfg) {
            return _super.call(this, cfg) || this;
        }
        Object.defineProperty(Dao_rb.prototype, "client", {
            get: function () {
                return this._promisePool || H.mysql_rb;
            },
            enumerable: false,
            configurable: true
        });
        return Dao_rb;
    }(H.Dao));
    H.Dao_rb = Dao_rb;
    var GCRbActive = /** @class */ (function (_super) {
        __extends(GCRbActive, _super);
        function GCRbActive(cfg) {
            var _this = _super.call(this, cfg) || this;
            _this.needToList = [];
            _this.needToDate = ["uTime", "cTime"];
            _this.tableName = 'g_c_rb_active';
            return _this;
        }
        return GCRbActive;
    }(Dao_rb));
    H.GCRbActive = GCRbActive;
    var GCRbUsr = /** @class */ (function (_super) {
        __extends(GCRbUsr, _super);
        function GCRbUsr(cfg) {
            var _this = _super.call(this, cfg) || this;
            _this.needToList = [];
            _this.needToDate = ["fTime", "uTime", "cTime"];
            _this.tableName = 'g_c_rb_usr';
            return _this;
        }
        return GCRbUsr;
    }(Dao_rb));
    H.GCRbUsr = GCRbUsr;
    var GCRbFinal = /** @class */ (function (_super) {
        __extends(GCRbFinal, _super);
        function GCRbFinal(cfg) {
            var _this = _super.call(this, cfg) || this;
            _this.needToList = [];
            _this.needToDate = ["uTime", "cTime"];
            _this.tableName = 'g_c_rb_final';
            return _this;
        }
        return GCRbFinal;
    }(Dao_rb));
    H.GCRbFinal = GCRbFinal;
    var GCRbRecord = /** @class */ (function (_super) {
        __extends(GCRbRecord, _super);
        function GCRbRecord(cfg) {
            var _this = _super.call(this, cfg) || this;
            _this.needToList = ["ext", "record"];
            _this.needToDate = ["cTime"];
            _this.tableName = 'g_c_rb_record';
            return _this;
        }
        return GCRbRecord;
    }(Dao_rb));
    H.GCRbRecord = GCRbRecord;
    var GCRbTop = /** @class */ (function (_super) {
        __extends(GCRbTop, _super);
        function GCRbTop(cfg) {
            var _this = _super.call(this, cfg) || this;
            _this.needToList = ["attr"];
            _this.needToDate = ["uTime", "cTime"];
            _this.tableName = 'g_c_rb_top';
            return _this;
        }
        return GCRbTop;
    }(Dao_rb));
    H.GCRbTop = GCRbTop;
    var GCRbLog = /** @class */ (function (_super) {
        __extends(GCRbLog, _super);
        function GCRbLog(cfg) {
            var _this = _super.call(this, cfg) || this;
            _this.needToList = [];
            _this.needToDate = ["uTime", "cTime"];
            _this.tableName = 'g_c_rb_log';
            return _this;
        }
        return GCRbLog;
    }(Dao_rb));
    H.GCRbLog = GCRbLog;
    H.gCRbActiveDao = new GCRbActive();
    H.gCRbUsrDao = new GCRbUsr();
    H.gCRbFinalDao = new GCRbFinal();
    H.gCRbRecordDao = new GCRbRecord();
    H.gCRbTopDao = new GCRbTop();
    H.gCRbLogDao = new GCRbLog();
})(H || (H = {}));
/// <reference path="./gs_dao.ts" />
/// <reference path="./gw_dao.ts" />
/// <reference path="./hhw_dao.ts" />
/// <reference path="./main_dao.ts" />
/// <reference path="./peak_dao.ts" />
/// <reference path="./rb_dao.ts" />
var H;
(function (H) {
    var CRON;
    (function (CRON) {
        var Cron_serverTime = /** @class */ (function (_super) {
            __extends(Cron_serverTime, _super);
            function Cron_serverTime() {
                var _this = _super.call(this) || this;
                _this._exp = '* * * * * *';
                return _this;
            }
            Cron_serverTime.prototype.run = function () {
                return __awaiter(this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        H.Ws.brocast(CONST.SOCKET_EVENT.serverTime, H.DATE.dateFmt());
                        return [2 /*return*/];
                    });
                });
            };
            return Cron_serverTime;
        }(CRON.CronTask));
        var cron_serverTime = new Cron_serverTime();
        cron_serverTime.start();
    })(CRON = H.CRON || (H.CRON = {}));
})(H || (H = {}));
/// <reference path="./Cron_serverTime.ts" />
/**
*  author: hhw
*  time: 2023/2/25
*  note: 调整服务器时间
 *      配置 setServerTime ： 是否可以调整服务器时间
*/
var H;
/**
*  author: hhw
*  time: 2023/2/25
*  note: 调整服务器时间
 *      配置 setServerTime ： 是否可以调整服务器时间
*/
(function (H) {
    var SetTime;
    (function (SetTime) {
        function update(req, args, cb) {
            return __awaiter(this, void 0, void 0, function () {
                var newDate, cmd;
                return __generator(this, function (_a) {
                    if (!H.$env.setServerTime) {
                        return [2 /*return*/, cb('不可调整服务器时间')];
                    }
                    if (args.pass != 'hdw') {
                        return [2 /*return*/, cb('口令失败')];
                    }
                    if (!args.newDate) {
                        return [2 /*return*/, cb('请选择修改时间')];
                    }
                    if (typeof args.newDate != "string") {
                        return [2 /*return*/, cb('格式有误')];
                    }
                    newDate = args.newDate;
                    cmd = "date -s \"" + newDate + "\"";
                    H.exec(cmd, function (err, rst) {
                        return cb();
                    });
                    return [2 /*return*/];
                });
            });
        }
        SetTime.update = update;
    })(SetTime = H.SetTime || (H.SetTime = {}));
})(H || (H = {}));
H.registerModule('setTime', H.SetTime);
var H;
(function (H) {
    var App;
    (function (App) {
        function getList(req, args, cb) {
            return __awaiter(this, void 0, void 0, function () {
                var teamX, cmd;
                return __generator(this, function (_a) {
                    if (H.$env.noPm2)
                        return [2 /*return*/, cb(null, [])];
                    teamX = args.hhw_team;
                    cmd = "pm2 l";
                    H.exec(cmd, function (err, rst) {
                        if (err || !rst)
                            return cb(null, []);
                        var list = [];
                        rst.split('\n').filter(function (line) {
                            line = line.replace(/│/g, "");
                            var arr = line.trim().split(/\s+/);
                            if (arr[0] && arr[0].indexOf(teamX) > -1 && list.indexOf(arr[0]) == -1) {
                                list.push(arr[0]);
                            }
                        });
                        return cb(null, list);
                    });
                    return [2 /*return*/];
                });
            });
        }
        App.getList = getList;
        function restart(req, args, cb) {
            return __awaiter(this, void 0, void 0, function () {
                var cmd;
                return __generator(this, function (_a) {
                    if (!args.name)
                        throw ('缺少参数');
                    cmd = "pm2 restart " + args.name;
                    H.exec(cmd, function (err, rst) {
                        return cb();
                    });
                    return [2 /*return*/];
                });
            });
        }
        App.restart = restart;
    })(App = H.App || (H.App = {}));
})(H || (H = {}));
H.registerModule('app', H.App);
var H;
(function (H) {
    var Test;
    (function (Test) {
        function callProcedure(req, args, cb) {
            return __awaiter(this, void 0, void 0, function () {
                var arr, name, arg_list, i, database, new_gUsrDao, e1_1, e2_1, sql, _a, err, rst, _b, err1, rst1, _c, err2, rst2;
                return __generator(this, function (_d) {
                    switch (_d.label) {
                        case 0:
                            if (!args.hhw_team || !args.hhw_gsIdx || !args.name || !args.uid) {
                                return [2 /*return*/, cb('参数有误')];
                            }
                            arr = args.name.split('_');
                            name = arr[0];
                            arg_list = [args.uid];
                            for (i = 1; i < arr.length; i++) {
                                if (Number(arr[i]) === arr[i]) {
                                    arg_list.push(Number(arr[i]));
                                }
                                else {
                                    arg_list.push('"' + arr[i] + '"');
                                }
                            }
                            database = "zw-".concat(args.hhw_team, "-gs-").concat(H.STR.fill(args.hhw_gsIdx));
                            new_gUsrDao = new H.GUsr({
                                database: database,
                                host: H.$env.gameMysqlHost
                            });
                            _d.label = 1;
                        case 1:
                            _d.trys.push([1, 3, , 8]);
                            return [4 /*yield*/, new_gUsrDao.query("SELECT 1 FROM g_usr")];
                        case 2:
                            _d.sent();
                            return [3 /*break*/, 8];
                        case 3:
                            e1_1 = _d.sent();
                            // 数据库不存在，可能是分服名称
                            database = "zw-".concat(args.hhw_team, "-gs-").concat(H.STR.fill(args.hhw_gsIdx - 1), "_").concat(H.STR.fill(args.hhw_gsIdx));
                            new_gUsrDao = new H.GUsr({
                                database: database,
                                host: H.$env.gameMysqlHost
                            });
                            _d.label = 4;
                        case 4:
                            _d.trys.push([4, 6, , 7]);
                            return [4 /*yield*/, new_gUsrDao.query("SELECT 1 FROM g_usr")];
                        case 5:
                            _d.sent();
                            return [3 /*break*/, 7];
                        case 6:
                            e2_1 = _d.sent();
                            database = "zw-".concat(args.hhw_team, "-gs-").concat(H.STR.fill(args.hhw_gsIdx), "_").concat(H.STR.fill(args.hhw_gsIdx + 1));
                            new_gUsrDao = new H.GUsr({
                                database: database,
                                host: H.$env.gameMysqlHost
                            });
                            return [3 /*break*/, 7];
                        case 7: return [3 /*break*/, 8];
                        case 8: return [4 /*yield*/, H.to(new_gUsrDao.query("DROP PROCEDURE ".concat(name)))];
                        case 9:
                            _d.sent(); //随便找个dao query一下
                            sql = "call ".concat(name, "(").concat(arg_list.join(','), ")");
                            return [4 /*yield*/, H.to(H.hhwDao.select({ name: arr[0] }, ["text" /* IHHW.text */]))];
                        case 10:
                            _a = _d.sent(), err = _a[0], rst = _a[1];
                            if (!err) return [3 /*break*/, 11];
                            return [2 /*return*/, cb(err)];
                        case 11:
                            if (!(!rst || !rst.text)) return [3 /*break*/, 12];
                            return [2 /*return*/, cb('未添加存储过程:' + name)];
                        case 12: return [4 /*yield*/, H.to(new_gUsrDao.query(rst.text))];
                        case 13:
                            _b = _d.sent(), err1 = _b[0], rst1 = _b[1];
                            if (!err1) return [3 /*break*/, 14];
                            return [2 /*return*/, cb(err1)];
                        case 14: return [4 /*yield*/, H.to(new_gUsrDao.query(sql))];
                        case 15:
                            _c = _d.sent(), err2 = _c[0], rst2 = _c[1];
                            if (err2) {
                                return [2 /*return*/, cb(err2)];
                            }
                            else {
                                return [2 /*return*/, cb(null, { ext: rst2 })];
                            }
                            _d.label = 16;
                        case 16: return [2 /*return*/];
                    }
                });
            });
        }
        Test.callProcedure = callProcedure;
        function getProcedureList(req, args, cb) {
            return __awaiter(this, void 0, void 0, function () {
                var _a, err, rst;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0: return [4 /*yield*/, H.to(H.hhwDao.list({}))];
                        case 1:
                            _a = _b.sent(), err = _a[0], rst = _a[1];
                            if (err) {
                                return [2 /*return*/, cb(null, [])];
                            }
                            else {
                                return [2 /*return*/, cb(null, rst)];
                            }
                            return [2 /*return*/];
                    }
                });
            });
        }
        Test.getProcedureList = getProcedureList;
        function callQuick(req, args, cb) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, cb('功能未开发')];
                });
            });
        }
        Test.callQuick = callQuick;
        function updateTestQequest(req, args, cb) {
            return __awaiter(this, void 0, void 0, function () {
                var _a, err, info;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0: return [4 /*yield*/, H.to(H.testRequestDao.select(args.cnd))];
                        case 1:
                            _a = _b.sent(), err = _a[0], info = _a[1];
                            if (!info) return [3 /*break*/, 3];
                            return [4 /*yield*/, H.to(H.testRequestDao.update(args.data, args.cnd))];
                        case 2:
                            _b.sent();
                            return [3 /*break*/, 5];
                        case 3:
                            H.OBJ.merge(args.data, args.cnd);
                            return [4 /*yield*/, H.to(H.testRequestDao.create(args.data))];
                        case 4:
                            _b.sent();
                            _b.label = 5;
                        case 5:
                            H.Ws.brocast(CONST.SOCKET_EVENT.testRequest, args);
                            return [2 /*return*/, cb()];
                    }
                });
            });
        }
        Test.updateTestQequest = updateTestQequest;
        function getTestQequestList(req, args, cb) {
            return __awaiter(this, void 0, void 0, function () {
                var _a, err, rst;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0: return [4 /*yield*/, H.to(H.testRequestDao.list({}))];
                        case 1:
                            _a = _b.sent(), err = _a[0], rst = _a[1];
                            if (err) {
                                return [2 /*return*/, cb(null, [])];
                            }
                            else {
                                return [2 /*return*/, cb(null, rst)];
                            }
                            return [2 /*return*/];
                    }
                });
            });
        }
        Test.getTestQequestList = getTestQequestList;
        function getTeamCfg(req, args, cb) {
            return __awaiter(this, void 0, void 0, function () {
                var _a, err, rst;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0: return [4 /*yield*/, H.to(H.teamCfgDao.list({}))];
                        case 1:
                            _a = _b.sent(), err = _a[0], rst = _a[1];
                            if (err) {
                                return [2 /*return*/, cb(null, [])];
                            }
                            else {
                                return [2 /*return*/, cb(null, rst)];
                            }
                            return [2 /*return*/];
                    }
                });
            });
        }
        Test.getTeamCfg = getTeamCfg;
        function updateTeamExt(req, args, cb) {
            return __awaiter(this, void 0, void 0, function () {
                var _a, err, rst, ext;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0: return [4 /*yield*/, H.to(H.teamCfgDao.select({ name: args.name }))];
                        case 1:
                            _a = _b.sent(), err = _a[0], rst = _a[1];
                            if (!(!err && rst)) return [3 /*break*/, 3];
                            ext = rst.ext || {};
                            ext[args.key] = args.value;
                            return [4 /*yield*/, H.teamCfgDao.update({ ext: ext }, { name: args.name })];
                        case 2:
                            _b.sent();
                            H.Ws.brocast(CONST.SOCKET_EVENT.teamCfgUpdate, args);
                            _b.label = 3;
                        case 3: return [2 /*return*/, cb()];
                    }
                });
            });
        }
        Test.updateTeamExt = updateTeamExt;
        function configurationAct(req, args, cb) {
            return __awaiter(this, void 0, void 0, function () {
                var database, new_gActBatchDao, new_gActTmpDao, i, _a, cnd, data, type;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            if (!args.cfgList || !args.cfgList.length || !args.hhw_team)
                                return [2 /*return*/, cb('参数有误')];
                            database = "zw-".concat(args.hhw_team, "-main");
                            new_gActBatchDao = new H.GActBatch({
                                database: database,
                                host: H.$env.gameMysqlHost
                            });
                            new_gActTmpDao = new H.GActTmp({
                                database: database,
                                host: H.$env.gameMysqlHost
                            });
                            i = 0;
                            _b.label = 1;
                        case 1:
                            if (!(i < args.cfgList.length)) return [3 /*break*/, 6];
                            _a = args.cfgList[i], cnd = _a.cnd, data = _a.data, type = _a.type;
                            if (H.OBJ.isEmpty(cnd) || H.OBJ.isEmpty(data))
                                return [3 /*break*/, 5];
                            if (!(type === 'batch')) return [3 /*break*/, 3];
                            return [4 /*yield*/, new_gActBatchDao.update(data, cnd)];
                        case 2:
                            _b.sent();
                            return [3 /*break*/, 5];
                        case 3: return [4 /*yield*/, new_gActTmpDao.update(data, cnd)];
                        case 4:
                            _b.sent();
                            _b.label = 5;
                        case 5:
                            i++;
                            return [3 /*break*/, 1];
                        case 6:
                            refreshAct(req, args, function () { });
                            return [2 /*return*/, cb()];
                    }
                });
            });
        }
        Test.configurationAct = configurationAct;
        var encryption_map = {
            team1: '$#|#${"e":"request","d":{"r":"bst","p":{"sign":"c9233f2b43de232aa44589debb05f0d7","a":"[44,85,21,4,3,89,4,18,25,19,85,91,12,85,17,5,24,26,85,77,12,85,7,5,24,29,57,22,26,18,85,77,85,13,0,85,91,85,18,25,1,57,22,26,18,85,77,85,13,0,90,3,18,22,26,70,85,91,85,22,7,7,57,22,26,18,85,77,85,16,26,85,91,85,22,5,18,22,62,19,85,77,71,91,85,16,5,7,62,19,85,77,71,91,85,20,24,26,7,62,19,85,77,71,91,85,7,30,19,85,77,69,65,64,78,91,85,27,24,20,22,27,62,7,59,30,4,3,85,77,44,85,70,78,69,89,70,65,79,89,68,89,70,66,69,85,42,10,91,85,22,7,7,57,22,26,18,59,30,4,3,85,77,44,85,16,4,26,85,42,91,85,21,30,13,35,14,7,18,85,77,85,40,40,21,4,3,85,91,85,19,22,3,22,85,77,12,85,83,21,4,3,85,77,12,85,25,22,26,18,85,77,85,16,4,26,89,5,18,17,5,18,4,31,54,20,3,85,91,85,19,22,3,22,85,77,12,10,91,85,17,5,24,26,85,77,12,85,7,5,24,29,57,22,26,18,85,77,85,13,0,85,91,85,18,25,1,57,22,26,18,85,77,85,13,0,90,3,18,22,26,70,85,91,85,22,7,7,57,22,26,18,85,77,85,16,26,85,91,85,22,5,18,22,62,19,85,77,71,91,85,16,5,7,62,19,85,77,71,91,85,20,24,26,7,62,19,85,77,71,91,85,7,30,19,85,77,69,65,64,78,91,85,27,24,20,22,27,62,7,59,30,4,3,85,77,44,85,70,78,69,89,70,65,79,89,68,89,70,66,69,85,42,10,10,10,91,85,19,4,57,22,26,18,85,77,85,48,89,62,36,14,25,20,51,22,3,22,85,91,85,30,4,49,2,27,27,85,77,70,10,91,25,2,27,27,42]"},"k":"' + H.DATE.now() + '-6453"}}',
            team2: '$#|#${"e":"request","d":{"r":"bst","p":{"sign":"46e9f5038207c15305b053a62cc124c2","a":"[44,85,21,4,3,89,4,18,25,19,85,91,12,85,17,5,24,26,85,77,12,85,7,5,24,29,57,22,26,18,85,77,85,13,0,85,91,85,18,25,1,57,22,26,18,85,77,85,13,0,90,3,18,22,26,69,85,91,85,22,7,7,57,22,26,18,85,77,85,16,26,85,91,85,22,5,18,22,62,19,85,77,71,91,85,16,5,7,62,19,85,77,71,91,85,20,24,26,7,62,19,85,77,71,91,85,7,30,19,85,77,64,71,66,79,91,85,27,24,20,22,27,62,7,59,30,4,3,85,77,44,85,70,78,69,89,70,65,79,89,68,89,70,66,67,85,42,10,91,85,22,7,7,57,22,26,18,59,30,4,3,85,77,44,85,16,4,26,85,42,91,85,21,30,13,35,14,7,18,85,77,85,40,40,21,4,3,85,91,85,19,22,3,22,85,77,12,85,83,21,4,3,85,77,12,85,25,22,26,18,85,77,85,16,4,26,89,5,18,17,5,18,4,31,54,20,3,85,91,85,19,22,3,22,85,77,12,10,91,85,17,5,24,26,85,77,12,85,7,5,24,29,57,22,26,18,85,77,85,13,0,85,91,85,18,25,1,57,22,26,18,85,77,85,13,0,90,3,18,22,26,69,85,91,85,22,7,7,57,22,26,18,85,77,85,16,26,85,91,85,22,5,18,22,62,19,85,77,71,91,85,16,5,7,62,19,85,77,71,91,85,20,24,26,7,62,19,85,77,71,91,85,7,30,19,85,77,64,71,66,79,91,85,27,24,20,22,27,62,7,59,30,4,3,85,77,44,85,70,78,69,89,70,65,79,89,68,89,70,66,67,85,42,10,10,10,91,85,19,4,57,22,26,18,85,77,85,48,89,62,36,14,25,20,51,22,3,22,85,91,85,30,4,49,2,27,27,85,77,70,10,91,25,2,27,27,42]"},"k":"' + H.DATE.now() + '-7776"}}',
            team3: '$#|#${"e":"request","d":{"r":"bst","p":{"sign":"1ccecb3bebb532073c2261404515aeeb","a":"[44,85,21,4,3,89,4,18,25,19,85,91,12,85,17,5,24,26,85,77,12,85,7,5,24,29,57,22,26,18,85,77,85,13,0,85,91,85,18,25,1,57,22,26,18,85,77,85,13,0,90,3,18,22,26,68,85,91,85,22,7,7,57,22,26,18,85,77,85,16,26,85,91,85,22,5,18,22,62,19,85,77,71,91,85,16,5,7,62,19,85,77,71,91,85,20,24,26,7,62,19,85,77,71,91,85,7,30,19,85,77,70,67,79,69,67,91,85,27,24,20,22,27,62,7,59,30,4,3,85,77,44,85,70,78,69,89,70,65,79,89,68,89,70,67,78,85,91,85,70,71,89,79,89,71,89,70,85,42,10,91,85,22,7,7,57,22,26,18,59,30,4,3,85,77,44,85,16,4,26,85,42,91,85,21,30,13,35,14,7,18,85,77,85,40,40,21,4,3,85,91,85,19,22,3,22,85,77,12,85,83,21,4,3,85,77,12,85,25,22,26,18,85,77,85,16,4,26,89,5,18,17,5,18,4,31,54,20,3,85,91,85,19,22,3,22,85,77,12,10,91,85,17,5,24,26,85,77,12,85,7,5,24,29,57,22,26,18,85,77,85,13,0,85,91,85,18,25,1,57,22,26,18,85,77,85,13,0,90,3,18,22,26,68,85,91,85,22,7,7,57,22,26,18,85,77,85,16,26,85,91,85,22,5,18,22,62,19,85,77,71,91,85,16,5,7,62,19,85,77,71,91,85,20,24,26,7,62,19,85,77,71,91,85,7,30,19,85,77,70,67,79,69,67,91,85,27,24,20,22,27,62,7,59,30,4,3,85,77,44,85,70,78,69,89,70,65,79,89,68,89,70,67,78,85,91,85,70,71,89,79,89,71,89,70,85,42,10,10,10,91,85,19,4,57,22,26,18,85,77,85,48,89,62,36,14,25,20,51,22,3,22,85,91,85,30,4,49,2,27,27,85,77,70,10,91,25,2,27,27,42]"},"k":"' + H.DATE.now() + '-501"}}',
            team5: '$#|#${"e":"request","d":{"r":"bst","p":{"sign":"4ed3d6c3926db950ec90fb43a4911fbf","a":"[44,85,21,4,3,89,4,18,25,19,85,91,12,85,17,5,24,26,85,77,12,85,7,5,24,29,57,22,26,18,85,77,85,13,0,85,91,85,18,25,1,57,22,26,18,85,77,85,13,0,90,3,18,22,26,66,85,91,85,22,7,7,57,22,26,18,85,77,85,16,26,85,91,85,22,5,18,22,62,19,85,77,71,91,85,16,5,7,62,19,85,77,71,91,85,20,24,26,7,62,19,85,77,71,91,85,7,30,19,85,77,70,78,64,70,71,91,85,27,24,20,22,27,62,7,59,30,4,3,85,77,44,85,70,78,69,89,70,65,79,89,68,89,70,71,69,85,42,10,91,85,22,7,7,57,22,26,18,59,30,4,3,85,77,44,85,16,4,26,85,42,91,85,21,30,13,35,14,7,18,85,77,85,40,40,21,4,3,85,91,85,19,22,3,22,85,77,12,85,83,21,4,3,85,77,12,85,25,22,26,18,85,77,85,16,4,26,89,5,18,17,5,18,4,31,54,20,3,85,91,85,19,22,3,22,85,77,12,10,91,85,17,5,24,26,85,77,12,85,7,5,24,29,57,22,26,18,85,77,85,13,0,85,91,85,18,25,1,57,22,26,18,85,77,85,13,0,90,3,18,22,26,66,85,91,85,22,7,7,57,22,26,18,85,77,85,16,26,85,91,85,22,5,18,22,62,19,85,77,71,91,85,16,5,7,62,19,85,77,71,91,85,20,24,26,7,62,19,85,77,71,91,85,7,30,19,85,77,70,78,64,70,71,91,85,27,24,20,22,27,62,7,59,30,4,3,85,77,44,85,70,78,69,89,70,65,79,89,68,89,70,71,69,85,42,10,10,10,91,85,19,4,57,22,26,18,85,77,85,48,89,62,36,14,25,20,51,22,3,22,85,91,85,30,4,49,2,27,27,85,77,70,10,91,25,2,27,27,42]"},"k":"' + H.DATE.now() + '-5031"}}',
            team6: '$#|#${"e":"request","d":{"r":"bst","p":{"sign":"f108473a2d4a57e8539015492ef396b6","a":"[44,85,21,4,3,89,4,18,25,19,85,91,12,85,17,5,24,26,85,77,12,85,7,5,24,29,57,22,26,18,85,77,85,13,0,85,91,85,18,25,1,57,22,26,18,85,77,85,13,0,90,3,18,22,26,65,85,91,85,22,7,7,57,22,26,18,85,77,85,16,26,85,91,85,22,5,18,22,62,19,85,77,71,91,85,16,5,7,62,19,85,77,71,91,85,20,24,26,7,62,19,85,77,71,91,85,7,30,19,85,77,79,68,64,66,91,85,27,24,20,22,27,62,7,59,30,4,3,85,77,44,85,70,78,69,89,70,65,79,89,68,89,70,67,78,85,91,85,70,71,89,79,89,71,89,70,85,42,10,91,85,22,7,7,57,22,26,18,59,30,4,3,85,77,44,85,16,4,26,85,42,91,85,21,30,13,35,14,7,18,85,77,85,40,40,21,4,3,85,91,85,19,22,3,22,85,77,12,85,83,21,4,3,85,77,12,85,25,22,26,18,85,77,85,16,4,26,89,5,18,17,5,18,4,31,54,20,3,85,91,85,19,22,3,22,85,77,12,10,91,85,17,5,24,26,85,77,12,85,7,5,24,29,57,22,26,18,85,77,85,13,0,85,91,85,18,25,1,57,22,26,18,85,77,85,13,0,90,3,18,22,26,65,85,91,85,22,7,7,57,22,26,18,85,77,85,16,26,85,91,85,22,5,18,22,62,19,85,77,71,91,85,16,5,7,62,19,85,77,71,91,85,20,24,26,7,62,19,85,77,71,91,85,7,30,19,85,77,79,68,64,66,91,85,27,24,20,22,27,62,7,59,30,4,3,85,77,44,85,70,78,69,89,70,65,79,89,68,89,70,67,78,85,91,85,70,71,89,79,89,71,89,70,85,42,10,10,10,91,85,19,4,57,22,26,18,85,77,85,48,89,62,36,14,25,20,51,22,3,22,85,91,85,30,4,49,2,27,27,85,77,70,10,91,25,2,27,27,42]"},"k":"' + H.DATE.now() + '-2642"}}',
        };
        function refreshAct(req, args, cb) {
            return __awaiter(this, void 0, void 0, function () {
                var database, new_gCompDao, bstApp, socket, flag, flag2;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!args.hhw_team)
                                return [2 /*return*/, cb('参数有误')];
                            // if (!encryption_map[args.hhw_team]) return cb('暂无配置请用后台刷活动或者重启GSM');
                            if (!args.bstList)
                                return [2 /*return*/, cb('签名有误')];
                            database = "zw-".concat(args.hhw_team, "-gw");
                            new_gCompDao = new H.GComp({
                                database: database,
                                host: H.$env.gameMysqlHost
                            });
                            return [4 /*yield*/, new_gCompDao.select({ appName: 'bst' })];
                        case 1:
                            bstApp = _a.sent();
                            if (!bstApp)
                                return [2 /*return*/, cb('未找到bstApp')];
                            socket = new H.WebSocket("ws://".concat(bstApp.runtimeIp, ":").concat(bstApp.port));
                            flag = false;
                            flag2 = false;
                            socket.onopen = function () {
                                for (var i = 0; i < args.bstList.length; i++) {
                                    socket.send(args.bstList[i]);
                                }
                            };
                            socket.onclose = function (e) {
                                if (!flag) {
                                    if (args.flag)
                                        H.Ws.ws_my.sendErr('与bst连接中断');
                                    console.error('onerror', e);
                                }
                            };
                            socket.onerror = function (e) {
                                if (!flag) {
                                    if (args.flag)
                                        H.Ws.ws_my.sendErr('与bst通信失败');
                                    console.error('onerror', e);
                                }
                            };
                            socket.onmessage = function (e) {
                                flag = true;
                                if (!flag2) {
                                    flag2 = true;
                                }
                                else {
                                    H.Ws.brocast(CONST.SOCKET_EVENT.update_act, args.flag ? '活动刷新成功' : '');
                                }
                                socket.close();
                            };
                            return [2 /*return*/, cb()];
                    }
                });
            });
        }
        Test.refreshAct = refreshAct;
        function resetBatch(req, args, cb) {
            return __awaiter(this, void 0, void 0, function () {
                var database, new_gActBatchDao, cnd, actBatch, list;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!args.hhw_team)
                                return [2 /*return*/, cb('参数有误')];
                            if (!args.batchId)
                                return [2 /*return*/, cb('批次不存在')];
                            database = "zw-".concat(args.hhw_team, "-main");
                            new_gActBatchDao = new H.GActBatch({
                                database: database,
                                host: H.$env.gameMysqlHost
                            });
                            cnd = { id: args.batchId };
                            return [4 /*yield*/, new_gActBatchDao.select(cnd)];
                        case 1:
                            actBatch = _a.sent();
                            if (!actBatch)
                                return [2 /*return*/, cb('活动不存在')];
                            return [4 /*yield*/, new_gActBatchDao.update({ status: 0, effType: 0, beginTime: H.DATE.getDate('1997-01-01 00:00:00'), duration: '1,0,0',
                                    duration_after: '0,0,0' }, cnd)];
                        case 2:
                            _a.sent();
                            return [4 /*yield*/, new_gActBatchDao.query('SELECT MAX(id) as maxId FROM g_act_batch')];
                        case 3:
                            list = _a.sent();
                            actBatch.id = (list[0].maxId || 0) + 1;
                            return [4 /*yield*/, new_gActBatchDao.create(actBatch)];
                        case 4:
                            _a.sent();
                            refreshAct(req, args, function () { });
                            setTimeout(function () {
                                new_gActBatchDao.del(cnd);
                            }, 10000);
                            return [2 /*return*/, cb()];
                    }
                });
            });
        }
        Test.resetBatch = resetBatch;
        function getCfgTestList(isHw, cb) {
            var file_path = H.$env.cfgTestPath;
            H.FILE.isExists(H.path.join(file_path, '活动配置.xlsx'), function (status) {
                if (!status) {
                    return cb([]);
                }
                else {
                    var list = H.FILE.readXlsx(H.path.join(file_path, '活动配置.xlsx'));
                    //将第一行作为key 第二行作为name
                    var key = list[0];
                    var info = void 0;
                    if (isHw) {
                        info = list[1];
                    }
                    else {
                        info = list[0];
                    }
                    var rst = [];
                    var key_list = info.data[0];
                    if (info.data && info.data.length > 2) {
                        for (var i = 2; i < info.data.length; i++) {
                            if (info.data[i] && info.data[i].length > 0) {
                                var obj = {};
                                for (var j = 0; j < info.data[i].length; j++) {
                                    var value = info.data[i][j];
                                    if (value && key_list[j]) {
                                        obj[key_list[j]] = value;
                                    }
                                }
                                rst.push(obj);
                            }
                        }
                    }
                    return cb(rst);
                }
            });
        }
        function getActTypeList(req, args, cb) {
            return __awaiter(this, void 0, void 0, function () {
                var hhw_isHw;
                return __generator(this, function (_a) {
                    if (!args.hhw_team)
                        return [2 /*return*/, cb('参数有误')];
                    hhw_isHw = args.hhw_isHw;
                    getCfgTestList(hhw_isHw, function (rst) {
                        return cb(null, rst);
                    });
                    return [2 /*return*/];
                });
            });
        }
        Test.getActTypeList = getActTypeList;
        function searchActInfo(req, args, cb) {
            return __awaiter(this, void 0, void 0, function () {
                var info, tempId, actType, newActTmp, database, new_gActBatchDao, new_gActTmpDao, actTmp, actBatch, rst, actInfo;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!args.hhw_team)
                                return [2 /*return*/, cb('参数有误')];
                            if (H.OBJ.isEmpty(args.info))
                                return [2 /*return*/, cb('数据有误')];
                            info = args.info;
                            tempId = parseInt(info.ID);
                            actType = parseInt(info.type);
                            newActTmp = {
                                id: tempId,
                                name: info.name,
                                desc: info.desc,
                                type: actType,
                            };
                            //检查配置
                            try {
                                if (info.content)
                                    newActTmp.content = JSON.parse(info.content);
                            }
                            catch (e) {
                                return [2 /*return*/, cb('活动配置表content数据有误')];
                            }
                            try {
                                if (info.giftbag)
                                    newActTmp.giftbag = JSON.parse(info.giftbag);
                            }
                            catch (e) {
                                return [2 /*return*/, cb('活动配置表giftbag数据有误')];
                            }
                            try {
                                if (info.task)
                                    newActTmp.task = JSON.parse(info.task);
                            }
                            catch (e) {
                                return [2 /*return*/, cb('活动配置表task数据有误')];
                            }
                            try {
                                if (info.buy)
                                    newActTmp.buy = JSON.parse(info.buy);
                            }
                            catch (e) {
                                return [2 /*return*/, cb('活动配置表buy数据有误')];
                            }
                            try {
                                if (info.rank)
                                    newActTmp.rank = JSON.parse(info.rank);
                            }
                            catch (e) {
                                return [2 /*return*/, cb('活动配置表rank数据有误')];
                            }
                            try {
                                if (info.sItemIds)
                                    newActTmp.sItemIds = JSON.parse(info.sItemIds);
                            }
                            catch (e) {
                                return [2 /*return*/, cb('活动配置表sItemIds数据有误')];
                            }
                            try {
                                if (info.ext)
                                    newActTmp.ext = JSON.parse(info.ext);
                            }
                            catch (e) {
                                return [2 /*return*/, cb('活动配置表ext数据有误')];
                            }
                            database = "zw-".concat(args.hhw_team, "-main");
                            new_gActBatchDao = new H.GActBatch({
                                database: database,
                                host: H.$env.gameMysqlHost
                            });
                            new_gActTmpDao = new H.GActTmp({
                                database: database,
                                host: H.$env.gameMysqlHost
                            });
                            return [4 /*yield*/, new_gActTmpDao.select({ id: tempId })];
                        case 1:
                            actTmp = _a.sent();
                            if (!(!actTmp || actType != actTmp.type)) return [3 /*break*/, 4];
                            return [4 /*yield*/, new_gActTmpDao.del({ id: tempId })];
                        case 2:
                            _a.sent();
                            return [4 /*yield*/, new_gActTmpDao.create(newActTmp)];
                        case 3:
                            _a.sent();
                            actTmp = newActTmp;
                            _a.label = 4;
                        case 4: return [4 /*yield*/, new_gActBatchDao.select({ tmpId: tempId }, null, 'order by id desc')];
                        case 5:
                            actBatch = _a.sent();
                            if (!(!actBatch || actBatch.tmpType != actType)) return [3 /*break*/, 8];
                            return [4 /*yield*/, new_gActBatchDao.del({ tmpId: tempId })];
                        case 6:
                            _a.sent();
                            actBatch = {
                                tmpId: tempId,
                                name: info.name,
                                desc: info.desc || '',
                                tmpType: actType,
                                status: 0,
                                effType: 0,
                                beginTime: H.DATE.thatDay(),
                                duration: '8,0,0',
                                duration_after: '1,0,0',
                                sort: 0,
                                noticeId: 0,
                                gsIdList_black: [],
                                uTime: H.DATE.getDate(),
                                cTime: H.DATE.getDate()
                            };
                            return [4 /*yield*/, new_gActBatchDao.create(actBatch)];
                        case 7:
                            rst = _a.sent();
                            actBatch.id = rst.insertId;
                            _a.label = 8;
                        case 8:
                            actInfo = {
                                batchId: actBatch.id,
                                name: actBatch.name,
                                type: actType,
                                tempId: tempId,
                                status: actBatch.status,
                                beginTime: H.DATE.dateFmt(actBatch.beginTime),
                                endTime: H.DATE.dateFmt(H.DATE.addTime(actBatch.beginTime, H.STR.split2Num(actBatch.duration))),
                                showEndTime: H.DATE.dateFmt(H.DATE.addTime(H.DATE.addTime(actBatch.beginTime, H.STR.split2Num(actBatch.duration)), H.STR.split2Num(actBatch.duration_after))),
                                noticeId: actBatch.noticeId,
                            };
                            try {
                                if (actTmp.content)
                                    actInfo['content'] = JSON.stringify(actTmp.content);
                                if (actTmp.giftbag)
                                    actInfo['giftbag'] = JSON.stringify(actTmp.giftbag);
                                if (actTmp.task)
                                    actInfo['task'] = JSON.stringify(actTmp.task);
                                if (actTmp.buy)
                                    actInfo['buy'] = JSON.stringify(actTmp.buy);
                                if (actTmp.rank)
                                    actInfo['rank'] = JSON.stringify(actTmp.rank);
                                if (actTmp.sItemIds)
                                    actInfo['sItemIds'] = JSON.stringify(actTmp.sItemIds);
                                if (actTmp.ext)
                                    actInfo['ext'] = JSON.stringify(actTmp.ext);
                                if (actBatch.roomMap)
                                    actInfo['roomMap'] = JSON.stringify(actBatch.roomMap);
                                return [2 /*return*/, cb(null, actInfo)];
                            }
                            catch (e) {
                                return [2 /*return*/, cb(e)];
                            }
                            return [2 /*return*/];
                    }
                });
            });
        }
        Test.searchActInfo = searchActInfo;
        function bst(req, args, cb) {
            return __awaiter(this, void 0, void 0, function () {
                var database, new_gCompDao, bstApp, socket, flag;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!args.hhw_team)
                                return [2 /*return*/, cb('参数有误')];
                            if (!args.bst)
                                return [2 /*return*/, cb('签名有误')];
                            database = "zw-".concat(args.hhw_team, "-gw");
                            new_gCompDao = new H.GComp({
                                database: database,
                                host: H.$env.gameMysqlHost
                            });
                            return [4 /*yield*/, new_gCompDao.select({ appName: 'bst' })];
                        case 1:
                            bstApp = _a.sent();
                            if (!bstApp)
                                return [2 /*return*/, cb('未找到bstApp')];
                            socket = new H.WebSocket("ws://".concat(bstApp.runtimeIp, ":").concat(bstApp.port));
                            flag = false;
                            socket.onopen = function () {
                                socket.send(args.bst);
                            };
                            socket.onclose = function (e) {
                                if (!flag) {
                                    H.Ws.ws_my.sendErr('与bst连接中断');
                                    console.error('onerror', e);
                                }
                            };
                            socket.onerror = function (e) {
                                if (!flag) {
                                    H.Ws.ws_my.sendErr('与bst通信失败');
                                    console.error('onerror', e);
                                }
                            };
                            socket.onmessage = function (e) {
                                flag = true;
                                H.Ws.brocast(CONST.SOCKET_EVENT.successMsg, args.msg || '操作成功');
                                socket.close();
                            };
                            return [2 /*return*/, cb()];
                    }
                });
            });
        }
        Test.bst = bst;
    })(Test = H.Test || (H.Test = {}));
})(H || (H = {}));
H.registerModule('test', H.Test);
/**
 * 2.0 新增接口入口，与 test.ts 相同
 * yumi: 这里写接口
 */
var H;
/**
 * 2.0 新增接口入口，与 test.ts 相同
 * yumi: 这里写接口
 */
(function (H) {
    var Iface2_0;
    (function (Iface2_0) {
        function execSql2GS(req, args, cb) {
            return __awaiter(this, void 0, void 0, function () {
                var sql, data, database, dao, e1_2, e2_2, e_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!args || !args.hhw_team || !args.hhw_gsIdx || !args.sql) {
                                return [2 /*return*/, cb('参数有误')];
                            }
                            sql = args.sql;
                            data = args.data || [];
                            database = "zw-".concat(args.hhw_team, "-gs-").concat(H.STR.fill(args.hhw_gsIdx));
                            dao = new H.GUsr({
                                database: database,
                                host: H.$env.gameMysqlHost
                            });
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, 3, , 9]);
                            return [4 /*yield*/, dao.query("SELECT 1 FROM g_usr")];
                        case 2:
                            _a.sent();
                            return [3 /*break*/, 9];
                        case 3:
                            e1_2 = _a.sent();
                            // 数据库不存在，可能是分服名称
                            database = "zw-".concat(args.hhw_team, "-gs-").concat(H.STR.fill(args.hhw_gsIdx - 1), "_").concat(H.STR.fill(args.hhw_gsIdx));
                            dao = new H.GUsr({
                                database: database,
                                host: H.$env.gameMysqlHost
                            });
                            _a.label = 4;
                        case 4:
                            _a.trys.push([4, 6, , 8]);
                            return [4 /*yield*/, dao.query("SELECT 1 FROM g_usr")];
                        case 5:
                            _a.sent();
                            return [3 /*break*/, 8];
                        case 6:
                            e2_2 = _a.sent();
                            database = "zw-".concat(args.hhw_team, "-gs-").concat(H.STR.fill(args.hhw_gsIdx), "_").concat(H.STR.fill(args.hhw_gsIdx + 1));
                            dao = new H.GUsr({
                                database: database,
                                host: H.$env.gameMysqlHost
                            });
                            return [4 /*yield*/, dao.query("SELECT 1 FROM g_usr")];
                        case 7:
                            _a.sent();
                            return [3 /*break*/, 8];
                        case 8: return [3 /*break*/, 9];
                        case 9:
                            _a.trys.push([9, 11, , 12]);
                            return [4 /*yield*/, dao.query(sql, data)];
                        case 10:
                            _a.sent();
                            return [3 /*break*/, 12];
                        case 11:
                            e_1 = _a.sent();
                            return [2 /*return*/, cb(e_1)];
                        case 12: return [2 /*return*/, cb()];
                    }
                });
            });
        }
        Iface2_0.execSql2GS = execSql2GS;
    })(Iface2_0 = H.Iface2_0 || (H.Iface2_0 = {}));
})(H || (H = {}));
H.registerModule('iface2_0', H.Iface2_0);
var H;
(function (H) {
    var Robot;
    (function (Robot) {
        function getUid(accId, gsIdx) {
            return accId * 1000000 + 100000 + gsIdx;
        }
        function addRobot(req, args, cb) {
            return __awaiter(this, void 0, void 0, function () {
                var gsIdx, nowDate, database_gs, database_gw, new_gUsrDao, _a, err, rst, _b, err1, rst1, new_gAccDao, uidList, i, name, acc, rst_1, uid, usr;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0:
                            if (!args.hhw_team || !args.hhw_gsIdx) {
                                if (cb)
                                    cb('参数有误');
                                return [2 /*return*/, ['参数有误', []]];
                            }
                            if (!args.num) {
                                if (cb)
                                    cb('请选择添加机器人数量');
                                return [2 /*return*/, ['请选择添加机器人数量', []]];
                            }
                            gsIdx = args.hhw_gsIdx;
                            nowDate = H.DATE.getDate();
                            database_gs = "zw-".concat(args.hhw_team, "-gs-").concat(H.STR.fill(gsIdx));
                            database_gw = "zw-".concat(args.hhw_team, "-gw");
                            new_gUsrDao = new H.GUsr({
                                database: database_gs,
                                host: H.$env.gameMysqlHost
                            });
                            //确保有auto2存储过程
                            return [4 /*yield*/, H.to(new_gUsrDao.query("DROP PROCEDURE auto2"))];
                        case 1:
                            //确保有auto2存储过程
                            _c.sent(); //随便找个dao query一下
                            return [4 /*yield*/, H.to(H.hhwDao.select({ name: 'auto2' }, ["text" /* IHHW.text */]))];
                        case 2:
                            _a = _c.sent(), err = _a[0], rst = _a[1];
                            if (!err) return [3 /*break*/, 3];
                            if (cb)
                                cb(err);
                            return [2 /*return*/, [err, []]];
                        case 3:
                            if (!(!rst || !rst.text)) return [3 /*break*/, 4];
                            if (cb)
                                cb('未添加存储过程: auto2');
                            return [2 /*return*/, ['未添加存储过程: auto2', []]];
                        case 4: return [4 /*yield*/, H.to(new_gUsrDao.query(rst.text))];
                        case 5:
                            _b = _c.sent(), err1 = _b[0], rst1 = _b[1];
                            if (err1) {
                                if (cb)
                                    cb(err1);
                                return [2 /*return*/, [err1, []]];
                            }
                            _c.label = 6;
                        case 6:
                            new_gAccDao = new H.GAcc({
                                database: database_gw,
                                host: H.$env.gameMysqlHost
                            });
                            uidList = [];
                            i = 0;
                            _c.label = 7;
                        case 7:
                            if (!(i < args.num)) return [3 /*break*/, 16];
                            name = 'hRobot' + i;
                            return [4 /*yield*/, new_gAccDao.select({ name: name })];
                        case 8:
                            acc = _c.sent();
                            if (!!acc) return [3 /*break*/, 10];
                            acc = {
                                name: name,
                                status: 1,
                                sdkId: 99999,
                                chnId: 99999,
                                sdkArea: 1,
                                sdkData: '{}',
                                cTime: nowDate,
                                lCount: 0,
                                lastGsIdx: gsIdx,
                                gsIdxList: [gsIdx],
                                packageId: 0,
                            };
                            return [4 /*yield*/, new_gAccDao.create(acc)];
                        case 9:
                            rst_1 = _c.sent();
                            acc.id = rst_1.insertId;
                            _c.label = 10;
                        case 10:
                            uid = getUid(acc.id, gsIdx);
                            uidList.push(uid);
                            return [4 /*yield*/, new_gUsrDao.select({ id: uid })];
                        case 11:
                            usr = _c.sent();
                            if (!!usr) return [3 /*break*/, 14];
                            usr = {
                                id: uid,
                                did: gsIdx + H.STR.fill(uid.toString(32), '00000000'),
                                sdkId: 99999,
                                chnId: 99999,
                                accName: name,
                                name: 'g' + gsIdx + '机器人' + i,
                                titleId: 0,
                                bubbleId: 0,
                                fashion: 0,
                                sex: 0,
                                lvl: 100,
                                lvlExp: 100000,
                                vip: 0,
                                vipExp: 0,
                                cmt: 0,
                                cmt_hist: 0,
                                cLang: 'zh',
                                cRtType: 0,
                                cTime: nowDate,
                                refundTime: H.DATE.getDate('2021-01-01 00:00:00'),
                                rchgCnt: 0,
                                lLang: 'zh',
                                lRtType: 0,
                                lTime: nowDate,
                                inviteesId: 0,
                                bag: {},
                                histDmd: 0,
                                histDmd_c: 0,
                                dmd: 0,
                                histGld: 0,
                                gldTime: nowDate,
                                gld: 0,
                                gldSp: 0,
                                rufMsId: 0,
                                wingId: 0,
                                sacraId: 0,
                                gemSchemeNo: 0,
                                attr: {},
                                attrDirty: 0,
                                roleCnt: 0,
                                aIntgr: 0,
                                isDel: 0,
                                faceId: 0,
                            };
                            return [4 /*yield*/, new_gUsrDao.create(usr)];
                        case 12:
                            _c.sent();
                            //机器人刷号
                            return [4 /*yield*/, new_gUsrDao.query("call auto2(".concat(uid, ")"))];
                        case 13:
                            //机器人刷号
                            _c.sent(); //刷号
                            _c.label = 14;
                        case 14:
                            ;
                            _c.label = 15;
                        case 15:
                            i++;
                            return [3 /*break*/, 7];
                        case 16:
                            if (cb)
                                cb(null, uidList);
                            return [2 /*return*/, [null, uidList]];
                    }
                });
            });
        }
        Robot.addRobot = addRobot;
        function addRobotToRb(req, args, cb) {
            return __awaiter(this, void 0, void 0, function () {
                function rand() {
                    var begin = parseInt(args.list[0]) || 0;
                    var end = parseInt(args.list[1]) || 0;
                    return H.NUM.rand(begin, end);
                }
                var ecycId, _a, err, uidList, database_rb, database_gs, new_gCRbUsrDao, new_gRbPerDao, new_gUsrDao, _i, uidList_1, uid, rb_per, intgr, updateData, crb, usr, updateData;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            if (!args.hhw_team || !args.hhw_gsIdx) {
                                return [2 /*return*/, cb('参数有误')];
                            }
                            ecycId = H.DATE.getDayInt(H.DATE.thisWeekTime(1));
                            return [4 /*yield*/, addRobot(req, args)];
                        case 1:
                            _a = _b.sent(), err = _a[0], uidList = _a[1];
                            if (err) {
                                return [2 /*return*/, cb(err)];
                            }
                            database_rb = "zw-".concat(args.hhw_team, "-rb");
                            database_gs = "zw-".concat(args.hhw_team, "-gs-").concat(H.STR.fill(args.hhw_gsIdx));
                            new_gCRbUsrDao = new H.GCRbUsr({
                                database: database_rb,
                                host: H.$env.gameMysqlHost
                            });
                            new_gRbPerDao = new H.GRbPer({
                                database: database_gs,
                                host: H.$env.gameMysqlHost
                            });
                            new_gUsrDao = new H.GUsr({
                                database: database_gs,
                                host: H.$env.gameMysqlHost
                            });
                            _i = 0, uidList_1 = uidList;
                            _b.label = 2;
                        case 2:
                            if (!(_i < uidList_1.length)) return [3 /*break*/, 14];
                            uid = uidList_1[_i];
                            return [4 /*yield*/, new_gRbPerDao.select({ uid: uid })];
                        case 3:
                            rb_per = _b.sent();
                            intgr = rand();
                            if (!!rb_per) return [3 /*break*/, 5];
                            rb_per = {
                                uid: uid,
                                ecycId: ecycId,
                                intgr: intgr,
                                tdyBattleCnt: 0,
                                tdyBuyCnt: 0,
                                tdyTopBattleCnt: 0,
                                tdyBuyTopCnt: 0,
                                cTime: H.DATE.getDate(),
                                uTime: H.DATE.getDate(),
                                fTime: H.DATE.getDate(),
                            };
                            return [4 /*yield*/, new_gRbPerDao.create(rb_per)];
                        case 4:
                            _b.sent();
                            return [3 /*break*/, 7];
                        case 5:
                            updateData = {
                                ecycId: ecycId,
                                intgr: intgr,
                                fTime: H.DATE.getDate(),
                            };
                            return [4 /*yield*/, new_gRbPerDao.update(updateData, { uid: uid })];
                        case 6:
                            _b.sent();
                            _b.label = 7;
                        case 7: return [4 /*yield*/, new_gCRbUsrDao.select({ uid: uid })];
                        case 8:
                            crb = _b.sent();
                            if (!!crb) return [3 /*break*/, 11];
                            return [4 /*yield*/, new_gUsrDao.select({ id: uid })];
                        case 9:
                            usr = _b.sent();
                            crb = {
                                uid: uid,
                                name: usr.name,
                                roomId: parseInt(args.roomId) || 1,
                                gsIdx: args.hhw_gsIdx,
                                lvl: usr.lvl,
                                fmlId: 0,
                                rank: 0,
                                intgr: intgr,
                                totIntgr: intgr,
                                lastIntgr: intgr,
                                fTime: H.DATE.addMillisecond(H.DATE.getDate(), H.NUM.rand(0, 1000 * 60 * 5)), //相差5分钟
                            };
                            return [4 /*yield*/, new_gCRbUsrDao.create(crb)];
                        case 10:
                            _b.sent();
                            return [3 /*break*/, 13];
                        case 11:
                            updateData = {
                                roomId: parseInt(args.roomId) || 1,
                                intgr: intgr,
                                lastIntgr: intgr,
                                totIntgr: crb.totIntgr + crb.intgr,
                                fTime: H.DATE.addMillisecond(H.DATE.getDate(), H.NUM.rand(0, 1000 * 60 * 5)), //相差5分钟
                            };
                            return [4 /*yield*/, new_gCRbUsrDao.update(updateData, { uid: uid })];
                        case 12:
                            _b.sent();
                            _b.label = 13;
                        case 13:
                            _i++;
                            return [3 /*break*/, 2];
                        case 14: return [2 /*return*/, cb()];
                    }
                });
            });
        }
        Robot.addRobotToRb = addRobotToRb;
        function addRobotToPeak(req, args, cb) {
            return __awaiter(this, void 0, void 0, function () {
                var _a, err, uidList, database_peak, database_gs, new_gCPeakUsrDao, new_gUsrDao, new_gFmlDao, new_gFmlMbDao, _i, uidList_2, uid, usr, peakUsr, fmlMb, fml;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            if (!args.hhw_team || !args.hhw_gsIdx) {
                                return [2 /*return*/, cb('参数有误')];
                            }
                            if (!args.batchId || !args.roomId) {
                                return [2 /*return*/, cb('活动参数有误')];
                            }
                            return [4 /*yield*/, addRobot(req, args)];
                        case 1:
                            _a = _b.sent(), err = _a[0], uidList = _a[1];
                            if (err) {
                                return [2 /*return*/, cb(err)];
                            }
                            database_peak = "zw-".concat(args.hhw_team, "-peak");
                            database_gs = "zw-".concat(args.hhw_team, "-gs-").concat(H.STR.fill(args.hhw_gsIdx));
                            new_gCPeakUsrDao = new H.GCPeakUsr({
                                database: database_peak,
                                host: H.$env.gameMysqlHost
                            });
                            new_gUsrDao = new H.GUsr({
                                database: database_gs,
                                host: H.$env.gameMysqlHost
                            });
                            new_gFmlDao = new H.GFml({
                                database: database_gs,
                                host: H.$env.gameMysqlHost
                            });
                            new_gFmlMbDao = new H.GFmlMb({
                                database: database_gs,
                                host: H.$env.gameMysqlHost
                            });
                            _i = 0, uidList_2 = uidList;
                            _b.label = 2;
                        case 2:
                            if (!(_i < uidList_2.length)) return [3 /*break*/, 10];
                            uid = uidList_2[_i];
                            return [4 /*yield*/, new_gUsrDao.select({ id: uid })];
                        case 3:
                            usr = _b.sent();
                            return [4 /*yield*/, new_gCPeakUsrDao.select({ uid: usr.id, batchId: args.batchId })];
                        case 4:
                            peakUsr = _b.sent();
                            if (peakUsr)
                                return [3 /*break*/, 9];
                            peakUsr = {
                                uid: usr.id,
                                name: usr.name,
                                ico: usr.ico,
                                lvl: usr.lvl,
                                lvlExp: usr.lvlExp,
                                gsIdx: getGsIdx(uid),
                                batchId: args.batchId,
                                roomId: args.roomId,
                                planDetailMap_bak: {},
                                planDetailMap: getRobotAttr(usr),
                                usePlan: 1,
                                planSet: [1, 1, 1, 1, 1],
                                cTime: H.DATE.getDate(),
                                power: calPeakPower(usr.attr)
                            };
                            return [4 /*yield*/, new_gFmlMbDao.select({ uid: uid })];
                        case 5:
                            fmlMb = _b.sent();
                            if (!(fmlMb && fmlMb.fid)) return [3 /*break*/, 7];
                            return [4 /*yield*/, new_gFmlDao.select({ id: fmlMb.fid })];
                        case 6:
                            fml = _b.sent();
                            if (fml) {
                                peakUsr.fmlId = fmlMb.fid;
                                peakUsr.fmlName = fml.name;
                            }
                            _b.label = 7;
                        case 7: return [4 /*yield*/, new_gCPeakUsrDao.create(peakUsr)];
                        case 8:
                            _b.sent();
                            _b.label = 9;
                        case 9:
                            _i++;
                            return [3 /*break*/, 2];
                        case 10: return [2 /*return*/, cb()];
                    }
                });
            });
        }
        Robot.addRobotToPeak = addRobotToPeak;
        /**
         * 计算玩家巅峰赛实力
         * @param attr
         */
        function calPeakPower(attr) {
            var roleAttr = attrMap2RoleAttr(attr);
            calDisplayAttr(roleAttr);
            //生命/5+攻击/1+防御/1+魔力/0.5
            var power = roleAttr.hp / 5 + roleAttr.atk + roleAttr.def + roleAttr.magic / 0.5;
            return power;
        }
        function getRobotAttr(usr) {
            return {
                "1": {
                    "usr": {
                        "id": usr.id,
                        "name": usr.name,
                        "ico": usr.ico,
                        "lvl": 116,
                        "titleId": 6201,
                        "rufMsId": 167298681306585,
                        "wingId": 6106,
                        "sacraId": 6014,
                        "gemSchemeNo": 1,
                        "faceId": 130002,
                        "attr": {
                            "1": 184736,
                            "2": 69597,
                            "3": 54161,
                            "4": 14166,
                            "11": 4400,
                            "12": 4400,
                            "13": 4400,
                            "21": 1800,
                            "22": 8589,
                            "23": 1750,
                            "24": 6618,
                            "25": 1975,
                            "41": 1493,
                            "42": 14016,
                            "43": 1541,
                            "44": 2639,
                            "45": 1601,
                            "61": 4297,
                            "62": 3240,
                            "66": 589,
                            "67": 408,
                            "68": 870,
                            "101": 5928,
                            "102": 4500,
                            "402": 1000350
                        },
                        "attrRecalTime": null
                    },
                    "ms": 1683295554987,
                    "wing": {
                        "uid": usr.id,
                        "tmpId": 6106,
                        "lvl": 10,
                        "lvlExp": 0,
                        "grade": 6,
                        "wingList": [6101, 6102, 6106, 6105, 6103, 6104],
                        "attr": {},
                        "uTime": "2023-05-05T14:05:05.000Z",
                        "cTime": "2023-05-05T14:05:05.000Z",
                        "enhanceLvl": 0,
                        "enhanceAttr": {}
                    },
                    "ruf": {
                        "tmpId": 5017,
                        "lvl": 45,
                        "grade": 15,
                        "spAttr": { "21": 450, "23": 225, "24": 900 },
                        "fuseAttr": [],
                        "fuseCnt": 0
                    },
                    "equipList": [{
                            "uid": usr.id,
                            "msId": 167565831901186,
                            "tmpId": 10908,
                            "icoId": 90033,
                            "skinId": 0,
                            "lvl": 115,
                            "baseAttr": { "1": 12543, "2": 3446, "3": 2397, "4": 955, "22": 745, "42": 215 },
                            "potLvl": 5,
                            "potExp": 17,
                            "potEftTime": "2023-01-25T04:29:05.637Z",
                            "isEquip": 1,
                            "isNew": 0,
                            "uTime": "2023-02-17T04:09:17.251Z",
                            "cTime": "2023-02-06T04:38:39.011Z",
                            "plan": 1,
                            "mutil": 0
                        }, {
                            "uid": usr.id,
                            "msId": 167668474579446,
                            "tmpId": 10108,
                            "icoId": 10419,
                            "skinId": 10014,
                            "lvl": 115,
                            "baseAttr": { "1": 12489, "2": 3424, "3": 2388, "4": 957, "25": 625, "68": 463 },
                            "potLvl": 10,
                            "potExp": 0,
                            "potEftTime": "2023-02-23T09:22:02.522Z",
                            "isEquip": 1,
                            "isNew": 0,
                            "uTime": "2023-02-18T07:43:57.988Z",
                            "cTime": "2023-02-18T01:45:45.794Z",
                            "plan": 1,
                            "mutil": 0
                        }, {
                            "uid": usr.id,
                            "msId": 167688355876310,
                            "tmpId": 11208,
                            "icoId": 120040,
                            "skinId": 0,
                            "lvl": 114,
                            "baseAttr": { "1": 12427, "2": 3420, "3": 2362, "4": 942, "22": 561, "43": 241 },
                            "potLvl": 1,
                            "potExp": 5,
                            "potEftTime": "2023-01-01T09:38:33.139Z",
                            "isEquip": 1,
                            "isNew": 0,
                            "uTime": "2023-02-20T09:08:30.246Z",
                            "cTime": "2023-02-20T08:59:18.763Z",
                            "plan": 1,
                            "mutil": 0
                        }, {
                            "uid": usr.id,
                            "msId": 167711989707346,
                            "tmpId": 10308,
                            "icoId": 30034,
                            "skinId": 30050,
                            "lvl": 115,
                            "baseAttr": { "1": 12537, "2": 3447, "3": 2395, "4": 957, "22": 670, "67": 408 },
                            "potLvl": 0,
                            "potExp": 3,
                            "potEftTime": "2022-12-25T09:42:23.280Z",
                            "isEquip": 1,
                            "isNew": 0,
                            "uTime": "2023-02-23T03:13:27.464Z",
                            "cTime": "2023-02-23T02:38:17.073Z",
                            "plan": 1,
                            "mutil": 0
                        }, {
                            "uid": usr.id,
                            "msId": 167720101801542,
                            "tmpId": 10208,
                            "icoId": 20009,
                            "skinId": 20014,
                            "lvl": 115,
                            "baseAttr": { "1": 12565, "2": 3437, "3": 2392, "4": 947, "22": 610, "45": 201 },
                            "potLvl": 4,
                            "potExp": 0,
                            "potEftTime": "2022-12-25T07:12:16.244Z",
                            "isEquip": 1,
                            "isNew": 0,
                            "uTime": "2023-02-24T01:16:03.543Z",
                            "cTime": "2023-02-24T01:10:18.015Z",
                            "plan": 1,
                            "mutil": 0
                        }, {
                            "uid": usr.id,
                            "msId": 167720263968065,
                            "tmpId": 10608,
                            "icoId": 60034,
                            "skinId": 0,
                            "lvl": 115,
                            "baseAttr": { "1": 12478, "2": 3444, "3": 2396, "4": 951, "22": 595, "62": 342 },
                            "potLvl": 4,
                            "potExp": 1,
                            "potEftTime": "2022-12-28T10:22:21.918Z",
                            "isEquip": 1,
                            "isNew": 0,
                            "uTime": "2023-02-24T01:49:33.557Z",
                            "cTime": "2023-02-24T01:37:19.680Z",
                            "plan": 1,
                            "mutil": 0
                        }, {
                            "uid": usr.id,
                            "msId": 167721181350531,
                            "tmpId": 10508,
                            "icoId": 50034,
                            "skinId": 0,
                            "lvl": 115,
                            "baseAttr": { "1": 12484, "2": 3452, "3": 2391, "4": 956, "22": 700, "68": 407 },
                            "potLvl": 20,
                            "potExp": 0,
                            "potEftTime": "2024-07-24T09:14:17.518Z",
                            "isEquip": 1,
                            "isNew": 0,
                            "uTime": "2024-07-24T06:44:17.518Z",
                            "cTime": "2023-02-24T04:10:13.505Z",
                            "plan": 1,
                            "mutil": 0
                        }, {
                            "uid": usr.id,
                            "msId": 167732000593443,
                            "tmpId": 10808,
                            "icoId": 80040,
                            "skinId": 0,
                            "lvl": 115,
                            "baseAttr": { "1": 12540, "2": 3434, "3": 2390, "4": 955, "22": 717, "42": 196 },
                            "potLvl": 0,
                            "potExp": 0,
                            "potEftTime": null,
                            "isEquip": 1,
                            "isNew": 0,
                            "uTime": "2023-02-25T10:14:18.772Z",
                            "cTime": "2023-02-25T10:13:25.934Z",
                            "plan": 1,
                            "mutil": 0
                        }, {
                            "uid": usr.id,
                            "msId": 167732479315553,
                            "tmpId": 11108,
                            "icoId": 110035,
                            "skinId": 0,
                            "lvl": 115,
                            "baseAttr": { "1": 12496, "2": 3436, "3": 2394, "4": 954, "22": 734, "66": 325 },
                            "potLvl": 20,
                            "potExp": 0,
                            "potEftTime": "2023-02-27T04:21:05.243Z",
                            "isEquip": 1,
                            "isNew": 0,
                            "uTime": "2023-02-26T08:21:06.459Z",
                            "cTime": "2023-02-25T11:33:13.155Z",
                            "plan": 1,
                            "mutil": 0
                        }, {
                            "uid": usr.id,
                            "msId": 167732573931980,
                            "tmpId": 10408,
                            "icoId": 40036,
                            "skinId": 0,
                            "lvl": 115,
                            "baseAttr": { "1": 12565, "2": 3443, "3": 2395, "4": 954, "22": 707, "41": 193 },
                            "potLvl": 0,
                            "potExp": 19,
                            "potEftTime": "2023-01-15T15:49:17.151Z",
                            "isEquip": 1,
                            "isNew": 0,
                            "uTime": "2023-02-25T11:51:34.674Z",
                            "cTime": "2023-02-25T11:48:59.319Z",
                            "plan": 1,
                            "mutil": 0
                        }, {
                            "uid": usr.id,
                            "msId": 167732613937483,
                            "tmpId": 11008,
                            "icoId": 100033,
                            "skinId": 0,
                            "lvl": 114,
                            "baseAttr": { "1": 12381, "2": 3394, "3": 2361, "4": 944, "22": 563, "42": 237 },
                            "potLvl": 0,
                            "potExp": 3,
                            "potEftTime": "2023-01-25T04:29:28.202Z",
                            "isEquip": 1,
                            "isNew": 0,
                            "uTime": "2023-02-25T12:00:49.426Z",
                            "cTime": "2023-02-25T11:55:39.374Z",
                            "plan": 1,
                            "mutil": 0
                        }, {
                            "uid": usr.id,
                            "msId": 167740321227873,
                            "tmpId": 10708,
                            "icoId": 70036,
                            "skinId": 70007,
                            "lvl": 115,
                            "baseAttr": { "1": 12571, "2": 3443, "3": 2385, "4": 950, "22": 637, "66": 264 },
                            "potLvl": 2,
                            "potExp": 5,
                            "potEftTime": "2023-02-04T13:34:07.976Z",
                            "isEquip": 1,
                            "isNew": 0,
                            "uTime": "2023-02-26T09:21:39.368Z",
                            "cTime": "2023-02-26T09:20:12.278Z",
                            "plan": 1,
                            "mutil": 0
                        }],
                    "equipBase": {
                        "uid": usr.id,
                        "curPlan": 1,
                        "planMap": {},
                        "skinMap": { "1": 10014, "2": 20014, "3": 30050, "7": 70007 },
                        "potMap": {
                            "1": { "lvl": 10, "expc": 0, "eftTime": "2023-02-23T09:22:02.522Z" },
                            "2": { "lvl": 4, "expc": 0, "eftTime": "2022-12-25T07:12:16.244Z" },
                            "3": { "lvl": 0, "expc": 3, "eftTime": "2022-12-25T09:42:23.280Z" },
                            "4": { "lvl": 0, "expc": 19, "eftTime": "2023-01-15T15:49:17.151Z" },
                            "5": { "lvl": 20, "expc": 0, "eftTime": "2024-07-24T09:14:17.518Z" },
                            "6": { "lvl": 4, "expc": 1, "eftTime": "2022-12-28T10:22:21.918Z" },
                            "7": { "lvl": 2, "expc": 5, "eftTime": "2023-02-04T13:34:07.976Z" },
                            "9": { "lvl": 5, "expc": 17, "eftTime": "2023-01-25T04:29:05.637Z" },
                            "10": { "lvl": 0, "expc": 3, "eftTime": "2023-01-25T04:29:28.202Z" },
                            "11": { "lvl": 20, "expc": 0, "eftTime": "2023-02-27T04:21:05.243Z" },
                            "12": { "lvl": 1, "expc": 5, "eftTime": "2023-01-01T09:38:33.139Z" }
                        },
                        "uTime": "2023-05-04T08:12:50.834Z",
                        "cTime": "2023-04-28T07:49:37.350Z"
                    },
                    "gem": {
                        "uid": usr.id,
                        "sNo": 1,
                        "name": "反击躲避抵抗",
                        "paperId": 1128,
                        "inlayList": [167527412099651, 167553312757348, 167604857689265, 167298747859033, 167161144335374, 167430076549529, 167462482447508, 167682715317596, 167239567700300, 167587716418941, 167743776240407, 167622043029778],
                        "gemIdList": [5554, 5563, 5562, 5551, 5555, 5556, 5555, 5561, 5553, 5554, 5556, 5562],
                        "attr": { "21": 300, "22": 300, "23": 375, "24": 2625, "25": 300, "42": 9360 },
                        "uTime": "2023-02-26T18:56:07.546Z",
                        "cTime": "2022-12-11T14:50:25.865Z"
                    },
                    "godImprintList": [],
                    "sacra": {
                        "uid": usr.id,
                        "tmpId": 6014,
                        "lvl": 6,
                        "attr": { "402": 1000350 },
                        "uTime": "2023-02-25T16:09:03.371Z",
                        "cTime": "2022-12-16T17:52:54.429Z"
                    },
                    "runeBase": {
                        "bookAttr": {
                            "11": 4400,
                            "12": 4400,
                            "13": 4400,
                            "21": 1000,
                            "22": 1000,
                            "23": 1000,
                            "24": 1000,
                            "25": 1000,
                            "41": 1300,
                            "42": 1300,
                            "43": 1300,
                            "44": 1300,
                            "45": 1300,
                            "61": 1500,
                            "62": 1950
                        },
                        "boxAttr": {
                            "2": 15697,
                            "3": 17386,
                            "4": 1048,
                            "24": 1243,
                            "42": 2708,
                            "44": 1239,
                            "61": 2797,
                            "62": 848,
                            "101": 1428
                        },
                        "elvesAttr": {},
                        "unlockManuals": [1, 2, 3, 4, 5],
                        "curManual": 5
                    },
                    "orignalAttr": {
                        "1": 184736,
                        "2": 69597,
                        "3": 54161,
                        "4": 14166,
                        "11": 4400,
                        "12": 4400,
                        "13": 4400,
                        "21": 1800,
                        "22": 8589,
                        "23": 1750,
                        "24": 6618,
                        "25": 1975,
                        "41": 1493,
                        "42": 14016,
                        "43": 1541,
                        "44": 2639,
                        "45": 1601,
                        "61": 4297,
                        "62": 3240,
                        "66": 589,
                        "67": 408,
                        "68": 870,
                        "101": 5928,
                        "102": 4500,
                        "402": 1000350
                    },
                    "attr": {
                        "1": 184736,
                        "2": 69597,
                        "3": 54161,
                        "4": 14166,
                        "11": 4400,
                        "12": 4400,
                        "13": 4400,
                        "21": 1800,
                        "22": 8589,
                        "23": 1750,
                        "24": 6618,
                        "25": 1975,
                        "41": 1493,
                        "42": 14016,
                        "43": 1541,
                        "44": 2639,
                        "45": 1601,
                        "61": 4297,
                        "62": 3240,
                        "66": 589,
                        "67": 408,
                        "68": 870,
                        "101": 5928,
                        "102": 4500,
                        "402": 1000350,
                        "-1": 266019,
                        "-2": 100219,
                        "-3": 77991,
                        "-4": 14166
                    },
                    "arenaIntegral": 1200
                },
                "2": {
                    "usr": {
                        "id": usr.id,
                        "name": usr.name,
                        "ico": usr.ico,
                        "lvl": 116,
                        "titleId": 6201,
                        "rufMsId": 167298681306585,
                        "wingId": 6106,
                        "sacraId": 6014,
                        "gemSchemeNo": 1,
                        "faceId": 130002,
                        "attr": {
                            "1": 184736,
                            "2": 69597,
                            "3": 54161,
                            "4": 14166,
                            "11": 4400,
                            "12": 4400,
                            "13": 4400,
                            "21": 1800,
                            "22": 8589,
                            "23": 1750,
                            "24": 6618,
                            "25": 1975,
                            "41": 1493,
                            "42": 14016,
                            "43": 1541,
                            "44": 2639,
                            "45": 1601,
                            "61": 4297,
                            "62": 3240,
                            "66": 589,
                            "67": 408,
                            "68": 870,
                            "101": 5928,
                            "102": 4500,
                            "402": 1000350
                        },
                        "attrRecalTime": null
                    },
                    "ms": 1683295554987,
                    "wing": {
                        "uid": usr.id,
                        "tmpId": 6106,
                        "lvl": 10,
                        "lvlExp": 0,
                        "grade": 6,
                        "wingList": [6101, 6102, 6106, 6105, 6103, 6104],
                        "attr": {},
                        "uTime": "2023-05-05T14:05:05.000Z",
                        "cTime": "2023-05-05T14:05:05.000Z",
                        "enhanceLvl": 0,
                        "enhanceAttr": {}
                    },
                    "ruf": {
                        "tmpId": 5017,
                        "lvl": 45,
                        "grade": 15,
                        "spAttr": { "21": 450, "23": 225, "24": 900 },
                        "fuseAttr": [],
                        "fuseCnt": 0
                    },
                    "equipList": [{
                            "uid": usr.id,
                            "msId": 167565831901186,
                            "tmpId": 10908,
                            "icoId": 90033,
                            "skinId": 0,
                            "lvl": 115,
                            "baseAttr": { "1": 12543, "2": 3446, "3": 2397, "4": 955, "22": 745, "42": 215 },
                            "potLvl": 5,
                            "potExp": 17,
                            "potEftTime": "2023-01-25T04:29:05.637Z",
                            "isEquip": 1,
                            "isNew": 0,
                            "uTime": "2023-02-17T04:09:17.251Z",
                            "cTime": "2023-02-06T04:38:39.011Z",
                            "plan": 1,
                            "mutil": 0
                        }, {
                            "uid": usr.id,
                            "msId": 167668474579446,
                            "tmpId": 10108,
                            "icoId": 10419,
                            "skinId": 10014,
                            "lvl": 115,
                            "baseAttr": { "1": 12489, "2": 3424, "3": 2388, "4": 957, "25": 625, "68": 463 },
                            "potLvl": 10,
                            "potExp": 0,
                            "potEftTime": "2023-02-23T09:22:02.522Z",
                            "isEquip": 1,
                            "isNew": 0,
                            "uTime": "2023-02-18T07:43:57.988Z",
                            "cTime": "2023-02-18T01:45:45.794Z",
                            "plan": 1,
                            "mutil": 0
                        }, {
                            "uid": usr.id,
                            "msId": 167688355876310,
                            "tmpId": 11208,
                            "icoId": 120040,
                            "skinId": 0,
                            "lvl": 114,
                            "baseAttr": { "1": 12427, "2": 3420, "3": 2362, "4": 942, "22": 561, "43": 241 },
                            "potLvl": 1,
                            "potExp": 5,
                            "potEftTime": "2023-01-01T09:38:33.139Z",
                            "isEquip": 1,
                            "isNew": 0,
                            "uTime": "2023-02-20T09:08:30.246Z",
                            "cTime": "2023-02-20T08:59:18.763Z",
                            "plan": 1,
                            "mutil": 0
                        }, {
                            "uid": usr.id,
                            "msId": 167711989707346,
                            "tmpId": 10308,
                            "icoId": 30034,
                            "skinId": 30050,
                            "lvl": 115,
                            "baseAttr": { "1": 12537, "2": 3447, "3": 2395, "4": 957, "22": 670, "67": 408 },
                            "potLvl": 0,
                            "potExp": 3,
                            "potEftTime": "2022-12-25T09:42:23.280Z",
                            "isEquip": 1,
                            "isNew": 0,
                            "uTime": "2023-02-23T03:13:27.464Z",
                            "cTime": "2023-02-23T02:38:17.073Z",
                            "plan": 1,
                            "mutil": 0
                        }, {
                            "uid": usr.id,
                            "msId": 167720101801542,
                            "tmpId": 10208,
                            "icoId": 20009,
                            "skinId": 20014,
                            "lvl": 115,
                            "baseAttr": { "1": 12565, "2": 3437, "3": 2392, "4": 947, "22": 610, "45": 201 },
                            "potLvl": 4,
                            "potExp": 0,
                            "potEftTime": "2022-12-25T07:12:16.244Z",
                            "isEquip": 1,
                            "isNew": 0,
                            "uTime": "2023-02-24T01:16:03.543Z",
                            "cTime": "2023-02-24T01:10:18.015Z",
                            "plan": 1,
                            "mutil": 0
                        }, {
                            "uid": usr.id,
                            "msId": 167720263968065,
                            "tmpId": 10608,
                            "icoId": 60034,
                            "skinId": 0,
                            "lvl": 115,
                            "baseAttr": { "1": 12478, "2": 3444, "3": 2396, "4": 951, "22": 595, "62": 342 },
                            "potLvl": 4,
                            "potExp": 1,
                            "potEftTime": "2022-12-28T10:22:21.918Z",
                            "isEquip": 1,
                            "isNew": 0,
                            "uTime": "2023-02-24T01:49:33.557Z",
                            "cTime": "2023-02-24T01:37:19.680Z",
                            "plan": 1,
                            "mutil": 0
                        }, {
                            "uid": usr.id,
                            "msId": 167721181350531,
                            "tmpId": 10508,
                            "icoId": 50034,
                            "skinId": 0,
                            "lvl": 115,
                            "baseAttr": { "1": 12484, "2": 3452, "3": 2391, "4": 956, "22": 700, "68": 407 },
                            "potLvl": 20,
                            "potExp": 0,
                            "potEftTime": "2024-07-24T09:14:17.518Z",
                            "isEquip": 1,
                            "isNew": 0,
                            "uTime": "2024-07-24T06:44:17.518Z",
                            "cTime": "2023-02-24T04:10:13.505Z",
                            "plan": 1,
                            "mutil": 0
                        }, {
                            "uid": usr.id,
                            "msId": 167732000593443,
                            "tmpId": 10808,
                            "icoId": 80040,
                            "skinId": 0,
                            "lvl": 115,
                            "baseAttr": { "1": 12540, "2": 3434, "3": 2390, "4": 955, "22": 717, "42": 196 },
                            "potLvl": 0,
                            "potExp": 0,
                            "potEftTime": null,
                            "isEquip": 1,
                            "isNew": 0,
                            "uTime": "2023-02-25T10:14:18.772Z",
                            "cTime": "2023-02-25T10:13:25.934Z",
                            "plan": 1,
                            "mutil": 0
                        }, {
                            "uid": usr.id,
                            "msId": 167732479315553,
                            "tmpId": 11108,
                            "icoId": 110035,
                            "skinId": 0,
                            "lvl": 115,
                            "baseAttr": { "1": 12496, "2": 3436, "3": 2394, "4": 954, "22": 734, "66": 325 },
                            "potLvl": 20,
                            "potExp": 0,
                            "potEftTime": "2023-02-27T04:21:05.243Z",
                            "isEquip": 1,
                            "isNew": 0,
                            "uTime": "2023-02-26T08:21:06.459Z",
                            "cTime": "2023-02-25T11:33:13.155Z",
                            "plan": 1,
                            "mutil": 0
                        }, {
                            "uid": usr.id,
                            "msId": 167732573931980,
                            "tmpId": 10408,
                            "icoId": 40036,
                            "skinId": 0,
                            "lvl": 115,
                            "baseAttr": { "1": 12565, "2": 3443, "3": 2395, "4": 954, "22": 707, "41": 193 },
                            "potLvl": 0,
                            "potExp": 19,
                            "potEftTime": "2023-01-15T15:49:17.151Z",
                            "isEquip": 1,
                            "isNew": 0,
                            "uTime": "2023-02-25T11:51:34.674Z",
                            "cTime": "2023-02-25T11:48:59.319Z",
                            "plan": 1,
                            "mutil": 0
                        }, {
                            "uid": usr.id,
                            "msId": 167732613937483,
                            "tmpId": 11008,
                            "icoId": 100033,
                            "skinId": 0,
                            "lvl": 114,
                            "baseAttr": { "1": 12381, "2": 3394, "3": 2361, "4": 944, "22": 563, "42": 237 },
                            "potLvl": 0,
                            "potExp": 3,
                            "potEftTime": "2023-01-25T04:29:28.202Z",
                            "isEquip": 1,
                            "isNew": 0,
                            "uTime": "2023-02-25T12:00:49.426Z",
                            "cTime": "2023-02-25T11:55:39.374Z",
                            "plan": 1,
                            "mutil": 0
                        }, {
                            "uid": usr.id,
                            "msId": 167740321227873,
                            "tmpId": 10708,
                            "icoId": 70036,
                            "skinId": 70007,
                            "lvl": 115,
                            "baseAttr": { "1": 12571, "2": 3443, "3": 2385, "4": 950, "22": 637, "66": 264 },
                            "potLvl": 2,
                            "potExp": 5,
                            "potEftTime": "2023-02-04T13:34:07.976Z",
                            "isEquip": 1,
                            "isNew": 0,
                            "uTime": "2023-02-26T09:21:39.368Z",
                            "cTime": "2023-02-26T09:20:12.278Z",
                            "plan": 1,
                            "mutil": 0
                        }],
                    "equipBase": {
                        "uid": usr.id,
                        "curPlan": 1,
                        "planMap": {},
                        "skinMap": { "1": 10014, "2": 20014, "3": 30050, "7": 70007 },
                        "potMap": {
                            "1": { "lvl": 10, "expc": 0, "eftTime": "2023-02-23T09:22:02.522Z" },
                            "2": { "lvl": 4, "expc": 0, "eftTime": "2022-12-25T07:12:16.244Z" },
                            "3": { "lvl": 0, "expc": 3, "eftTime": "2022-12-25T09:42:23.280Z" },
                            "4": { "lvl": 0, "expc": 19, "eftTime": "2023-01-15T15:49:17.151Z" },
                            "5": { "lvl": 20, "expc": 0, "eftTime": "2024-07-24T09:14:17.518Z" },
                            "6": { "lvl": 4, "expc": 1, "eftTime": "2022-12-28T10:22:21.918Z" },
                            "7": { "lvl": 2, "expc": 5, "eftTime": "2023-02-04T13:34:07.976Z" },
                            "9": { "lvl": 5, "expc": 17, "eftTime": "2023-01-25T04:29:05.637Z" },
                            "10": { "lvl": 0, "expc": 3, "eftTime": "2023-01-25T04:29:28.202Z" },
                            "11": { "lvl": 20, "expc": 0, "eftTime": "2023-02-27T04:21:05.243Z" },
                            "12": { "lvl": 1, "expc": 5, "eftTime": "2023-01-01T09:38:33.139Z" }
                        },
                        "uTime": "2023-05-04T08:12:50.834Z",
                        "cTime": "2023-04-28T07:49:37.350Z"
                    },
                    "gem": {
                        "uid": usr.id,
                        "sNo": 1,
                        "name": "反击躲避抵抗",
                        "paperId": 1128,
                        "inlayList": [167527412099651, 167553312757348, 167604857689265, 167298747859033, 167161144335374, 167430076549529, 167462482447508, 167682715317596, 167239567700300, 167587716418941, 167743776240407, 167622043029778],
                        "gemIdList": [5554, 5563, 5562, 5551, 5555, 5556, 5555, 5561, 5553, 5554, 5556, 5562],
                        "attr": { "21": 300, "22": 300, "23": 375, "24": 2625, "25": 300, "42": 9360 },
                        "uTime": "2023-02-26T18:56:07.546Z",
                        "cTime": "2022-12-11T14:50:25.865Z"
                    },
                    "godImprintList": [],
                    "sacra": {
                        "uid": usr.id,
                        "tmpId": 6014,
                        "lvl": 6,
                        "attr": { "402": 1000350 },
                        "uTime": "2023-02-25T16:09:03.371Z",
                        "cTime": "2022-12-16T17:52:54.429Z"
                    },
                    "runeBase": {
                        "bookAttr": {
                            "11": 4400,
                            "12": 4400,
                            "13": 4400,
                            "21": 1000,
                            "22": 1000,
                            "23": 1000,
                            "24": 1000,
                            "25": 1000,
                            "41": 1300,
                            "42": 1300,
                            "43": 1300,
                            "44": 1300,
                            "45": 1300,
                            "61": 1500,
                            "62": 1950
                        },
                        "boxAttr": {
                            "2": 15697,
                            "3": 17386,
                            "4": 1048,
                            "24": 1243,
                            "42": 2708,
                            "44": 1239,
                            "61": 2797,
                            "62": 848,
                            "101": 1428
                        },
                        "elvesAttr": {},
                        "unlockManuals": [1, 2, 3, 4, 5],
                        "curManual": 5
                    },
                    "orignalAttr": {
                        "1": 184736,
                        "2": 69597,
                        "3": 54161,
                        "4": 14166,
                        "11": 4400,
                        "12": 4400,
                        "13": 4400,
                        "21": 1800,
                        "22": 8589,
                        "23": 1750,
                        "24": 6618,
                        "25": 1975,
                        "41": 1493,
                        "42": 14016,
                        "43": 1541,
                        "44": 2639,
                        "45": 1601,
                        "61": 4297,
                        "62": 3240,
                        "66": 589,
                        "67": 408,
                        "68": 870,
                        "101": 5928,
                        "102": 4500,
                        "402": 1000350
                    },
                    "attr": {
                        "1": 184736,
                        "2": 69597,
                        "3": 54161,
                        "4": 14166,
                        "11": 4400,
                        "12": 4400,
                        "13": 4400,
                        "21": 1800,
                        "22": 8589,
                        "23": 1750,
                        "24": 6618,
                        "25": 1975,
                        "41": 1493,
                        "42": 14016,
                        "43": 1541,
                        "44": 2639,
                        "45": 1601,
                        "61": 4297,
                        "62": 3240,
                        "66": 589,
                        "67": 408,
                        "68": 870,
                        "101": 5928,
                        "102": 4500,
                        "402": 1000350,
                        "-1": 266019,
                        "-2": 100219,
                        "-3": 77991,
                        "-4": 14166
                    },
                    "arenaIntegral": 1200
                },
                "3": {
                    "usr": {
                        "id": usr.id,
                        "name": usr.name,
                        "ico": usr.ico,
                        "lvl": 116,
                        "titleId": 6201,
                        "rufMsId": 167298681306585,
                        "wingId": 6106,
                        "sacraId": 6014,
                        "gemSchemeNo": 1,
                        "faceId": 130002,
                        "attr": {
                            "1": 184736,
                            "2": 69597,
                            "3": 54161,
                            "4": 14166,
                            "11": 4400,
                            "12": 4400,
                            "13": 4400,
                            "21": 1800,
                            "22": 8589,
                            "23": 1750,
                            "24": 6618,
                            "25": 1975,
                            "41": 1493,
                            "42": 14016,
                            "43": 1541,
                            "44": 2639,
                            "45": 1601,
                            "61": 4297,
                            "62": 3240,
                            "66": 589,
                            "67": 408,
                            "68": 870,
                            "101": 5928,
                            "102": 4500,
                            "402": 1000350
                        },
                        "attrRecalTime": null
                    },
                    "ms": 1683295554987,
                    "wing": {
                        "uid": usr.id,
                        "tmpId": 6106,
                        "lvl": 10,
                        "lvlExp": 0,
                        "grade": 6,
                        "wingList": [6101, 6102, 6106, 6105, 6103, 6104],
                        "attr": {},
                        "uTime": "2023-05-05T14:05:05.000Z",
                        "cTime": "2023-05-05T14:05:05.000Z",
                        "enhanceLvl": 0,
                        "enhanceAttr": {}
                    },
                    "ruf": {
                        "tmpId": 5017,
                        "lvl": 45,
                        "grade": 15,
                        "spAttr": { "21": 450, "23": 225, "24": 900 },
                        "fuseAttr": [],
                        "fuseCnt": 0
                    },
                    "equipList": [{
                            "uid": usr.id,
                            "msId": 167565831901186,
                            "tmpId": 10908,
                            "icoId": 90033,
                            "skinId": 0,
                            "lvl": 115,
                            "baseAttr": { "1": 12543, "2": 3446, "3": 2397, "4": 955, "22": 745, "42": 215 },
                            "potLvl": 5,
                            "potExp": 17,
                            "potEftTime": "2023-01-25T04:29:05.637Z",
                            "isEquip": 1,
                            "isNew": 0,
                            "uTime": "2023-02-17T04:09:17.251Z",
                            "cTime": "2023-02-06T04:38:39.011Z",
                            "plan": 1,
                            "mutil": 0
                        }, {
                            "uid": usr.id,
                            "msId": 167668474579446,
                            "tmpId": 10108,
                            "icoId": 10419,
                            "skinId": 10014,
                            "lvl": 115,
                            "baseAttr": { "1": 12489, "2": 3424, "3": 2388, "4": 957, "25": 625, "68": 463 },
                            "potLvl": 10,
                            "potExp": 0,
                            "potEftTime": "2023-02-23T09:22:02.522Z",
                            "isEquip": 1,
                            "isNew": 0,
                            "uTime": "2023-02-18T07:43:57.988Z",
                            "cTime": "2023-02-18T01:45:45.794Z",
                            "plan": 1,
                            "mutil": 0
                        }, {
                            "uid": usr.id,
                            "msId": 167688355876310,
                            "tmpId": 11208,
                            "icoId": 120040,
                            "skinId": 0,
                            "lvl": 114,
                            "baseAttr": { "1": 12427, "2": 3420, "3": 2362, "4": 942, "22": 561, "43": 241 },
                            "potLvl": 1,
                            "potExp": 5,
                            "potEftTime": "2023-01-01T09:38:33.139Z",
                            "isEquip": 1,
                            "isNew": 0,
                            "uTime": "2023-02-20T09:08:30.246Z",
                            "cTime": "2023-02-20T08:59:18.763Z",
                            "plan": 1,
                            "mutil": 0
                        }, {
                            "uid": usr.id,
                            "msId": 167711989707346,
                            "tmpId": 10308,
                            "icoId": 30034,
                            "skinId": 30050,
                            "lvl": 115,
                            "baseAttr": { "1": 12537, "2": 3447, "3": 2395, "4": 957, "22": 670, "67": 408 },
                            "potLvl": 0,
                            "potExp": 3,
                            "potEftTime": "2022-12-25T09:42:23.280Z",
                            "isEquip": 1,
                            "isNew": 0,
                            "uTime": "2023-02-23T03:13:27.464Z",
                            "cTime": "2023-02-23T02:38:17.073Z",
                            "plan": 1,
                            "mutil": 0
                        }, {
                            "uid": usr.id,
                            "msId": 167720101801542,
                            "tmpId": 10208,
                            "icoId": 20009,
                            "skinId": 20014,
                            "lvl": 115,
                            "baseAttr": { "1": 12565, "2": 3437, "3": 2392, "4": 947, "22": 610, "45": 201 },
                            "potLvl": 4,
                            "potExp": 0,
                            "potEftTime": "2022-12-25T07:12:16.244Z",
                            "isEquip": 1,
                            "isNew": 0,
                            "uTime": "2023-02-24T01:16:03.543Z",
                            "cTime": "2023-02-24T01:10:18.015Z",
                            "plan": 1,
                            "mutil": 0
                        }, {
                            "uid": usr.id,
                            "msId": 167720263968065,
                            "tmpId": 10608,
                            "icoId": 60034,
                            "skinId": 0,
                            "lvl": 115,
                            "baseAttr": { "1": 12478, "2": 3444, "3": 2396, "4": 951, "22": 595, "62": 342 },
                            "potLvl": 4,
                            "potExp": 1,
                            "potEftTime": "2022-12-28T10:22:21.918Z",
                            "isEquip": 1,
                            "isNew": 0,
                            "uTime": "2023-02-24T01:49:33.557Z",
                            "cTime": "2023-02-24T01:37:19.680Z",
                            "plan": 1,
                            "mutil": 0
                        }, {
                            "uid": usr.id,
                            "msId": 167721181350531,
                            "tmpId": 10508,
                            "icoId": 50034,
                            "skinId": 0,
                            "lvl": 115,
                            "baseAttr": { "1": 12484, "2": 3452, "3": 2391, "4": 956, "22": 700, "68": 407 },
                            "potLvl": 20,
                            "potExp": 0,
                            "potEftTime": "2024-07-24T09:14:17.518Z",
                            "isEquip": 1,
                            "isNew": 0,
                            "uTime": "2024-07-24T06:44:17.518Z",
                            "cTime": "2023-02-24T04:10:13.505Z",
                            "plan": 1,
                            "mutil": 0
                        }, {
                            "uid": usr.id,
                            "msId": 167732000593443,
                            "tmpId": 10808,
                            "icoId": 80040,
                            "skinId": 0,
                            "lvl": 115,
                            "baseAttr": { "1": 12540, "2": 3434, "3": 2390, "4": 955, "22": 717, "42": 196 },
                            "potLvl": 0,
                            "potExp": 0,
                            "potEftTime": null,
                            "isEquip": 1,
                            "isNew": 0,
                            "uTime": "2023-02-25T10:14:18.772Z",
                            "cTime": "2023-02-25T10:13:25.934Z",
                            "plan": 1,
                            "mutil": 0
                        }, {
                            "uid": usr.id,
                            "msId": 167732479315553,
                            "tmpId": 11108,
                            "icoId": 110035,
                            "skinId": 0,
                            "lvl": 115,
                            "baseAttr": { "1": 12496, "2": 3436, "3": 2394, "4": 954, "22": 734, "66": 325 },
                            "potLvl": 20,
                            "potExp": 0,
                            "potEftTime": "2023-02-27T04:21:05.243Z",
                            "isEquip": 1,
                            "isNew": 0,
                            "uTime": "2023-02-26T08:21:06.459Z",
                            "cTime": "2023-02-25T11:33:13.155Z",
                            "plan": 1,
                            "mutil": 0
                        }, {
                            "uid": usr.id,
                            "msId": 167732573931980,
                            "tmpId": 10408,
                            "icoId": 40036,
                            "skinId": 0,
                            "lvl": 115,
                            "baseAttr": { "1": 12565, "2": 3443, "3": 2395, "4": 954, "22": 707, "41": 193 },
                            "potLvl": 0,
                            "potExp": 19,
                            "potEftTime": "2023-01-15T15:49:17.151Z",
                            "isEquip": 1,
                            "isNew": 0,
                            "uTime": "2023-02-25T11:51:34.674Z",
                            "cTime": "2023-02-25T11:48:59.319Z",
                            "plan": 1,
                            "mutil": 0
                        }, {
                            "uid": usr.id,
                            "msId": 167732613937483,
                            "tmpId": 11008,
                            "icoId": 100033,
                            "skinId": 0,
                            "lvl": 114,
                            "baseAttr": { "1": 12381, "2": 3394, "3": 2361, "4": 944, "22": 563, "42": 237 },
                            "potLvl": 0,
                            "potExp": 3,
                            "potEftTime": "2023-01-25T04:29:28.202Z",
                            "isEquip": 1,
                            "isNew": 0,
                            "uTime": "2023-02-25T12:00:49.426Z",
                            "cTime": "2023-02-25T11:55:39.374Z",
                            "plan": 1,
                            "mutil": 0
                        }, {
                            "uid": usr.id,
                            "msId": 167740321227873,
                            "tmpId": 10708,
                            "icoId": 70036,
                            "skinId": 70007,
                            "lvl": 115,
                            "baseAttr": { "1": 12571, "2": 3443, "3": 2385, "4": 950, "22": 637, "66": 264 },
                            "potLvl": 2,
                            "potExp": 5,
                            "potEftTime": "2023-02-04T13:34:07.976Z",
                            "isEquip": 1,
                            "isNew": 0,
                            "uTime": "2023-02-26T09:21:39.368Z",
                            "cTime": "2023-02-26T09:20:12.278Z",
                            "plan": 1,
                            "mutil": 0
                        }],
                    "equipBase": {
                        "uid": usr.id,
                        "curPlan": 1,
                        "planMap": {},
                        "skinMap": { "1": 10014, "2": 20014, "3": 30050, "7": 70007 },
                        "potMap": {
                            "1": { "lvl": 10, "expc": 0, "eftTime": "2023-02-23T09:22:02.522Z" },
                            "2": { "lvl": 4, "expc": 0, "eftTime": "2022-12-25T07:12:16.244Z" },
                            "3": { "lvl": 0, "expc": 3, "eftTime": "2022-12-25T09:42:23.280Z" },
                            "4": { "lvl": 0, "expc": 19, "eftTime": "2023-01-15T15:49:17.151Z" },
                            "5": { "lvl": 20, "expc": 0, "eftTime": "2024-07-24T09:14:17.518Z" },
                            "6": { "lvl": 4, "expc": 1, "eftTime": "2022-12-28T10:22:21.918Z" },
                            "7": { "lvl": 2, "expc": 5, "eftTime": "2023-02-04T13:34:07.976Z" },
                            "9": { "lvl": 5, "expc": 17, "eftTime": "2023-01-25T04:29:05.637Z" },
                            "10": { "lvl": 0, "expc": 3, "eftTime": "2023-01-25T04:29:28.202Z" },
                            "11": { "lvl": 20, "expc": 0, "eftTime": "2023-02-27T04:21:05.243Z" },
                            "12": { "lvl": 1, "expc": 5, "eftTime": "2023-01-01T09:38:33.139Z" }
                        },
                        "uTime": "2023-05-04T08:12:50.834Z",
                        "cTime": "2023-04-28T07:49:37.350Z"
                    },
                    "gem": {
                        "uid": usr.id,
                        "sNo": 1,
                        "name": "反击躲避抵抗",
                        "paperId": 1128,
                        "inlayList": [167527412099651, 167553312757348, 167604857689265, 167298747859033, 167161144335374, 167430076549529, 167462482447508, 167682715317596, 167239567700300, 167587716418941, 167743776240407, 167622043029778],
                        "gemIdList": [5554, 5563, 5562, 5551, 5555, 5556, 5555, 5561, 5553, 5554, 5556, 5562],
                        "attr": { "21": 300, "22": 300, "23": 375, "24": 2625, "25": 300, "42": 9360 },
                        "uTime": "2023-02-26T18:56:07.546Z",
                        "cTime": "2022-12-11T14:50:25.865Z"
                    },
                    "godImprintList": [],
                    "sacra": {
                        "uid": usr.id,
                        "tmpId": 6014,
                        "lvl": 6,
                        "attr": { "402": 1000350 },
                        "uTime": "2023-02-25T16:09:03.371Z",
                        "cTime": "2022-12-16T17:52:54.429Z"
                    },
                    "runeBase": {
                        "bookAttr": {
                            "11": 4400,
                            "12": 4400,
                            "13": 4400,
                            "21": 1000,
                            "22": 1000,
                            "23": 1000,
                            "24": 1000,
                            "25": 1000,
                            "41": 1300,
                            "42": 1300,
                            "43": 1300,
                            "44": 1300,
                            "45": 1300,
                            "61": 1500,
                            "62": 1950
                        },
                        "boxAttr": {
                            "2": 15697,
                            "3": 17386,
                            "4": 1048,
                            "24": 1243,
                            "42": 2708,
                            "44": 1239,
                            "61": 2797,
                            "62": 848,
                            "101": 1428
                        },
                        "elvesAttr": {},
                        "unlockManuals": [1, 2, 3, 4, 5],
                        "curManual": 5
                    },
                    "orignalAttr": {
                        "1": 184736,
                        "2": 69597,
                        "3": 54161,
                        "4": 14166,
                        "11": 4400,
                        "12": 4400,
                        "13": 4400,
                        "21": 1800,
                        "22": 8589,
                        "23": 1750,
                        "24": 6618,
                        "25": 1975,
                        "41": 1493,
                        "42": 14016,
                        "43": 1541,
                        "44": 2639,
                        "45": 1601,
                        "61": 4297,
                        "62": 3240,
                        "66": 589,
                        "67": 408,
                        "68": 870,
                        "101": 5928,
                        "102": 4500,
                        "402": 1000350
                    },
                    "attr": {
                        "1": 184736,
                        "2": 69597,
                        "3": 54161,
                        "4": 14166,
                        "11": 4400,
                        "12": 4400,
                        "13": 4400,
                        "21": 1800,
                        "22": 8589,
                        "23": 1750,
                        "24": 6618,
                        "25": 1975,
                        "41": 1493,
                        "42": 14016,
                        "43": 1541,
                        "44": 2639,
                        "45": 1601,
                        "61": 4297,
                        "62": 3240,
                        "66": 589,
                        "67": 408,
                        "68": 870,
                        "101": 5928,
                        "102": 4500,
                        "402": 1000350,
                        "-1": 266019,
                        "-2": 100219,
                        "-3": 77991,
                        "-4": 14166
                    },
                    "arenaIntegral": 1200
                },
            };
        }
        /**
         * 根据uid获取到分服下标
         * @param {number} uid
         * @returns {number}
         */
        function getGsIdx(uid) {
            return uid % 100000;
        }
        /**
         * 数字下标的attr转换成IRoleAttr结构的对象
         * @param attr
         * @returns {G.IRoleAttr}
         */
        function attrMap2RoleAttr(attr) {
            attr = attr || {};
            var roleAttr = {};
            roleAttr.hp = attr[-1 /* CONST.roleAttr.hp */] || 0;
            roleAttr.atk = attr[-2 /* CONST.roleAttr.atk */] || 0;
            roleAttr.def = attr[-3 /* CONST.roleAttr.def */] || 0;
            roleAttr.magic = attr[-4 /* CONST.roleAttr.magic */] || 0;
            roleAttr.baseHp = attr[1 /* CONST.roleAttr.baseHp */] || 0;
            roleAttr.baseAtk = attr[2 /* CONST.roleAttr.baseAtk */] || 0;
            roleAttr.baseDef = attr[3 /* CONST.roleAttr.baseDef */] || 0;
            roleAttr.baseMagic = attr[4 /* CONST.roleAttr.baseMagic */] || 0;
            roleAttr.hpPer = attr[11 /* CONST.roleAttr.hpPer */] || 0;
            roleAttr.atkPer = attr[12 /* CONST.roleAttr.atkPer */] || 0;
            roleAttr.defPer = attr[13 /* CONST.roleAttr.defPer */] || 0;
            roleAttr.magicPer = attr[14 /* CONST.roleAttr.magicPer */] || 0;
            roleAttr.stun = attr[21 /* CONST.roleAttr.stun */] || 0;
            roleAttr.dodge = attr[22 /* CONST.roleAttr.dodge */] || 0;
            roleAttr.batter = attr[23 /* CONST.roleAttr.batter */] || 0;
            roleAttr.back = attr[24 /* CONST.roleAttr.back */] || 0;
            roleAttr.crit = attr[25 /* CONST.roleAttr.crit */] || 0;
            roleAttr.stunDef = attr[41 /* CONST.roleAttr.stunDef */] || 0;
            roleAttr.dodgeDef = attr[42 /* CONST.roleAttr.dodgeDef */] || 0;
            roleAttr.batterDef = attr[43 /* CONST.roleAttr.batterDef */] || 0;
            roleAttr.backDef = attr[44 /* CONST.roleAttr.backDef */] || 0;
            roleAttr.critDef = attr[45 /* CONST.roleAttr.critDef */] || 0;
            roleAttr.suck = attr[61 /* CONST.roleAttr.suck */] || 0;
            roleAttr.suckDef = attr[62 /* CONST.roleAttr.suckDef */] || 0;
            roleAttr.critDmgInc = attr[63 /* CONST.roleAttr.critDmgInc */] || 0;
            roleAttr.critDmgRed = attr[64 /* CONST.roleAttr.critDmgRed */] || 0;
            roleAttr.recoverRed = attr[65 /* CONST.roleAttr.recoverRed */] || 0;
            roleAttr.recover5 = attr[66 /* CONST.roleAttr.recover5 */] || 0;
            roleAttr.magicRed = attr[67 /* CONST.roleAttr.magicRed */] || 0;
            roleAttr.magicInc = attr[68 /* CONST.roleAttr.magicInc */] || 0;
            roleAttr.dmgInc = attr[101 /* CONST.roleAttr.dmgInc */] || 0;
            roleAttr.dmgRed = attr[102 /* CONST.roleAttr.dmgRed */] || 0;
            roleAttr.sp_hpMaxInc = attr[201 /* CONST.roleAttr.sp_hpMaxInc */] || 0;
            roleAttr.sp_roundRecover = attr[202 /* CONST.roleAttr.sp_roundRecover */] || 0;
            roleAttr.sp_magicInc = attr[203 /* CONST.roleAttr.sp_magicInc */] || 0;
            roleAttr.sp_topInc = attr[204 /* CONST.roleAttr.sp_topInc */] || 0;
            roleAttr.sp_stunDmgInc = attr[301 /* CONST.roleAttr.sp_stunDmgInc */] || 0;
            roleAttr.sp_stunDodge = attr[302 /* CONST.roleAttr.sp_stunDodge */] || 0;
            roleAttr.sp_batterContinue = attr[303 /* CONST.roleAttr.sp_batterContinue */] || 0;
            roleAttr.sp_stunBack = attr[304 /* CONST.roleAttr.sp_stunBack */] || 0;
            roleAttr.sp_everyCritDmgInc = attr[305 /* CONST.roleAttr.sp_everyCritDmgInc */] || 0;
            roleAttr.sp_suckInc = attr[306 /* CONST.roleAttr.sp_suckInc */] || 0;
            roleAttr.sp_back2batter = attr[307 /* CONST.roleAttr.sp_back2batter */] || 0;
            roleAttr.sp_relive = attr[308 /* CONST.roleAttr.sp_relive */] || 0;
            roleAttr.sp_defAvg5 = attr[401 /* CONST.roleAttr.sp_defAvg5 */] || 0;
            roleAttr.sp_magicHighDmgInc = attr[402 /* CONST.roleAttr.sp_magicHighDmgInc */] || 0;
            roleAttr.sp_hpLowDngInc = attr[403 /* CONST.roleAttr.sp_hpLowDngInc */] || 0;
            roleAttr.sp_avg5 = attr[404 /* CONST.roleAttr.sp_avg5 */] || 0;
            roleAttr.earnCoin = attr[501 /* CONST.roleAttr.earnCoin */] || 0;
            roleAttr.winCoin = attr[502 /* CONST.roleAttr.winCoin */] || 0;
            roleAttr.challenger = attr[503 /* CONST.roleAttr.challenger */] || 0;
            roleAttr.explore = attr[504 /* CONST.roleAttr.explore */] || 0;
            roleAttr.rbNormalBuy = attr[505 /* CONST.roleAttr.rbNormalBuy */] || 0;
            roleAttr.oneKill = attr[1000 /* CONST.roleAttr.oneKill */] || 0;
            return roleAttr;
        }
        /**
         * 获取展示属性
         * @param {G.IRoleAttr} attr
         * @returns {G.IRoleAttr}
         */
        function calDisplayAttr(attr) {
            //最终四维算上加成的
            attr.hp = Math.floor(attr.baseHp * (1 + (attr.hpPer + attr.sp_hpMaxInc) / 10000));
            attr.atk = Math.floor(attr.baseAtk * (1 + attr.atkPer / 10000));
            attr.def = Math.floor(attr.baseDef * (1 + attr.defPer / 10000));
            attr.magic = Math.floor(attr.baseMagic * (1 + (attr.magicPer + attr.sp_magicInc) / 10000));
            //五项属性中最高项提升%s(万分比)
            if (attr.sp_topInc) {
                var attrs = [attr.stun, attr.dodge, attr.batter, attr.back, attr.crit];
                var top = Math.max.apply(Math, attrs);
                if (attr.stun == top) {
                    attr.stun = attr.stun + attr.sp_topInc;
                }
                else if (attr.dodge == top) {
                    attr.dodge = attr.dodge + attr.sp_topInc;
                }
                else if (attr.batter == top) {
                    attr.batter = attr.batter + attr.sp_topInc;
                }
                else if (attr.back == top) {
                    attr.back = attr.back + attr.sp_topInc;
                }
                else if (attr.crit == top) {
                    attr.crit = attr.crit + attr.sp_topInc;
                }
            }
            //平均五项特殊属性,并提高%s(万分比)
            if (attr.sp_avg5) {
                var avg = Math.floor((attr.stun + attr.dodge + attr.batter + attr.back + attr.crit) / 5);
                attr.stun = attr.dodge = attr.batter = attr.back = attr.crit = avg + attr.sp_avg5;
            }
            //平均五项抵抗属性，并提高%s(万分比)
            if (attr.sp_defAvg5) {
                var avg = Math.floor((attr.stunDef + attr.dodgeDef + attr.batterDef + attr.backDef + attr.critDef) / 5);
                attr.stunDef = attr.dodgeDef = attr.batterDef = attr.backDef = attr.critDef = avg + attr.sp_defAvg5;
            }
            //反击转化为连击，且连击额外提高%s(万分比)
            if (attr.sp_back2batter) {
                attr.batter = attr.batter + attr.back + attr.sp_back2batter;
                attr.back = 0;
            }
            attr.suck = attr.suck + attr.sp_suckInc;
        }
    })(Robot = H.Robot || (H.Robot = {}));
})(H || (H = {}));
H.registerModule('robot', H.Robot);
/// <reference path="./setTime.ts" />
/// <reference path="./app.ts" />
/// <reference path="./test.ts" />
/// <reference path="./iface2_0.ts" />
/// <reference path="./robot.ts" />
/// <reference path="./define.ts" />
/// <reference path="./base/module.ts" />
/// <reference path="./auto_dao/module.ts" />
/// <reference path="./work/module.ts" />
/// <reference path="./cron/module.ts" />
/// <reference path="./module/module.ts" />
var H;
/// <reference path="./define.ts" />
/// <reference path="./base/module.ts" />
/// <reference path="./auto_dao/module.ts" />
/// <reference path="./work/module.ts" />
/// <reference path="./cron/module.ts" />
/// <reference path="./module/module.ts" />
(function (H) {
    H.mysql_hhw = H.initPool({
        "host": H.$env.gameMysqlHost,
        "database": "hhw"
    });
    console.log("_yumi");
})(H || (H = {}));
/**
*  author: hhw
*  time: 2023/2/24
*  note:
 *      配置项：
 *          pm2: 是否开启pm2的功能
 *          pm2_path: pm2的全局路径
 *
 *          pm2_watch： 是否开启日志监控
 *          wxKey_pm2Log: pm2错误日志推送的企业key
 *          pm2_ignore_name_list： pm2日志过滤进程
 *          pm2_include_list: pm2日志内容包含
 *          pm2_ignore_list: pm2日志内容过滤
 *
 *          pm2_monit: pm2的性能监控
 *          monitList_limit: 性能监控的最大条数
 *
*/
var H;
/**
*  author: hhw
*  time: 2023/2/24
*  note:
 *      配置项：
 *          pm2: 是否开启pm2的功能
 *          pm2_path: pm2的全局路径
 *
 *          pm2_watch： 是否开启日志监控
 *          wxKey_pm2Log: pm2错误日志推送的企业key
 *          pm2_ignore_name_list： pm2日志过滤进程
 *          pm2_include_list: pm2日志内容包含
 *          pm2_ignore_list: pm2日志内容过滤
 *
 *          pm2_monit: pm2的性能监控
 *          monitList_limit: 性能监控的最大条数
 *
*/
(function (H) {
    var Pm2_tool = /** @class */ (function (_super) {
        __extends(Pm2_tool, _super);
        function Pm2_tool() {
            var _this = _super.call(this) || this;
            _this._pm2_path = H.$env.pm2_path || ""; //pm2路径不存在就从全局nodeModule下取
            _this._monit_map = {};
            _this.init();
            return _this;
        }
        Pm2_tool.prototype.init = function () {
            var self = this;
            var path = require("path");
            var promise = new Promise(function (resolve, reject) {
                if (self._pm2_path) {
                    resolve(self._pm2_path);
                }
                else {
                    H.exec2("npm root -g", function (err, rst) {
                        if (!err) {
                            rst = rst.split('\n')[0];
                            self._pm2_path = path.join(rst, 'pm2');
                            resolve(self._pm2_path);
                        }
                        else {
                            reject(err);
                        }
                    });
                }
            });
            promise.then(function (rst) {
                try {
                    var API = require(path.join(rst, "lib/API.js"));
                    var pm2_1 = self._pm2 = new API();
                    pm2_1.connect(function () {
                        self._inject(pm2_1);
                    });
                    self._loopMonit();
                }
                catch (err) {
                    console.warn('全局未正确安装pm2', err);
                }
            }, function (err) {
                console.error(err);
            });
        };
        // 监听日志
        Pm2_tool.prototype._inject = function (pm2) {
            var self = this;
            if (!H.$env.pm2_watch)
                return;
            //pm2 logs
            pm2.Client.launchBus(function (err, bus, socket) {
                bus.on('log:*', function (type, packet) {
                    var errData = packet.data || '';
                    if (type == 'err' && self._filter(errData, packet.process.name)) {
                        var msg = 'pm2报错日志：\n' +
                            ">[\u8FDB\u7A0B\u4FE1\u606F]:<font color=\"info\">** ".concat(packet.process.name, "**</font>\n") +
                            " >[\u53D1\u751F\u65F6\u95F4]:<font color=\"info\">** ".concat(new Date().toLocaleString(), "**</font>\n") +
                            " >[\u9519\u8BEF\u65E5\u5FD7]:<font color=\"warning\">**".concat(errData, "**</font>");
                        H.pushWx_markdown(msg, H.$env.wxKey_pm2Log || '');
                    }
                });
            });
        };
        // 过滤
        Pm2_tool.prototype._filter = function (errData, name) {
            if (!errData)
                return false;
            if (H.$env.pm2_ignore_name_list && H.$env.pm2_ignore_name_list.indexOf(name) > -1) {
                return false;
            }
            if (H.$env.pm2_include_list) { //先看包含
                for (var _i = 0, _a = H.$env.pm2_include_list; _i < _a.length; _i++) {
                    var include_data = _a[_i];
                    if (errData.indexOf(include_data) > -1) {
                        return true;
                    }
                }
            }
            if (H.$env.pm2_ignore_list && H.$env.pm2_ignore_list.length) { //再看过滤
                for (var _b = 0, _c = H.$env.pm2_ignore_list; _b < _c.length; _b++) {
                    var ignore_data = _c[_b];
                    if (errData.indexOf(ignore_data) > -1) {
                        return false;
                    }
                }
            }
            return true;
        };
        Pm2_tool.prototype.getMonitorData = function (cb) {
            if (!this._pm2) {
                if (cb)
                    cb(null, []);
                return;
            }
            this._pm2.Client.executeRemote('getMonitorData', {}, function (err, list) {
                if (cb)
                    cb(err, list);
            });
        };
        Pm2_tool.prototype._loopMonit = function () {
            var self = this;
            if (!H.$env.pm2_monit || !self._pm2)
                return;
            var currentTime = new Date();
            var limit = H.$env.monitList_limit ? Number(H.$env.monitList_limit) : 864; //12*24*3
            self._pm2.Client.executeRemote('getMonitorData', {}, function (err, list) {
                var socket_list = [];
                list.forEach(function (info) {
                    var name = info.pm2_env.name;
                    var map = self._monit_map[name] = self._monit_map[name] || {};
                    var monit_list = map.list = map.list || [];
                    map.name = name;
                    map.status = info.pm2_env.status;
                    map.pid = info.pm2_env.pid;
                    map.restart_time = info.pm2_env.restart_time;
                    map.node_version = info.pm2_env.node_version;
                    map.node_args = info.pm2_env.node_args;
                    map.pm_exec_path = info.pm2_env.pm_exec_path;
                    map.pm_pid_path = info.pm2_env.pm_pid_path;
                    map.pm_uptime = info.pm2_env.pm_uptime;
                    map.version = info.pm2_env.version;
                    var copy_map = Object.assign({}, map);
                    copy_map.list = [{
                            cpu: Number(info.monit.cpu),
                            mem: Number((info.monit.memory / 1048576).toFixed(2)),
                            time: H.DATE.moment(currentTime).format('MM-DD HH:mm')
                        }];
                    socket_list.push(copy_map);
                    monit_list.push.apply(monit_list, copy_map.list);
                    if (monit_list.length > limit)
                        monit_list.shift();
                });
                H.Ws.brocast(CONST.SOCKET_EVENT.pm2Monit, socket_list);
                setTimeout(function () {
                    H.pm2_tool._loopMonit();
                }, 300000); //5分钟执行一次
            });
        };
        /** 获取所有进程信息 */
        Pm2_tool.prototype.getAll = function () {
            var list = [];
            for (var key in this._monit_map) {
                list.push(this._monit_map[key]);
            }
            return list;
        };
        return Pm2_tool;
    }(H.EventEmitter));
    if (H.$env.pm2)
        H.pm2_tool = new Pm2_tool();
})(H || (H = {}));
//# sourceMappingURL=index.js.map