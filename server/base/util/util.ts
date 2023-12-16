/// <reference path="./str.ts" />
/// <reference path="./num.ts" />
/// <reference path="./obj.ts" />
/// <reference path="./arr.ts" />
/// <reference path="./date.ts" />
module H {
    const childProcess = require('child_process');
    /** 事件类 */
    export const EventEmitter = require("events").EventEmitter;
    /** md5 */
    export const md5 = require("md5");
    /** 加解密 */
    const CryptoJS = require('crypto-js');
    export const WebSocket = require('ws');
    export const path = require('path');

    //加密
    export function encrypt(word: string | object, crypto_key?: string, crypto_iv?: string) {
        let key = CryptoJS.enc.Utf8.parse(crypto_key || 'hhw');
        let iv = CryptoJS.enc.Utf8.parse(crypto_iv || 'hhw');
        let encrypted: any;
        if (typeof word == "string") {
            const srcs = CryptoJS.enc.Utf8.parse(word);
            encrypted = CryptoJS.AES.encrypt(srcs, key, {
                iv: iv,
                mode: CryptoJS.mode.CBC,
                padding: CryptoJS.pad.Pkcs7
            });
        } else if (typeof word == "object") {
            //对象格式的转成json字符串
            const data = JSON.stringify(word);
            const srcs = CryptoJS.enc.Utf8.parse(data);
            encrypted = CryptoJS.AES.encrypt(srcs, key, {
                iv: iv,
                mode: CryptoJS.mode.CBC,
                padding: CryptoJS.pad.Pkcs7
            });
        }
        return encrypted.ciphertext.toString();
    }
    // aes解密
    export function decrypt(word: string, crypto_key?: string, crypto_iv?: string): string {
        let key = CryptoJS.enc.Utf8.parse(crypto_key || 'hhw');
        let iv = CryptoJS.enc.Utf8.parse(crypto_iv || 'hhw');
        const encryptedHexStr = CryptoJS.enc.Hex.parse(word);
        const srcs = CryptoJS.enc.Base64.stringify(encryptedHexStr);
        const decrypt = CryptoJS.AES.decrypt(srcs, key, {
            iv: iv,
            mode: CryptoJS.mode.CBC,
            padding: CryptoJS.pad.Pkcs7
        });
        const decryptedStr = decrypt.toString(CryptoJS.enc.Utf8);
        return decryptedStr.toString();
    }

    // aes解密
    export function decryptToObj(word: string, crypto_key?: string, crypto_iv?: string): any {
        return JSON.parse(decrypt(word, crypto_key, crypto_iv));
    }

    /** 是否包含特殊符号 */
    export function isSpecialWord(value: string): boolean {
        let patrn = /[`~!@#$%^&*()_\-+=<>?:"{}|,.\/;'\\[\]·~！@#￥%……&*（）——\-+={}|《》？：“”【】、；‘'，。、]/im;
        if (!patrn.test(value)) {// 如果包含特殊字符返回false
            return false;
        }
        return true;
    }

    /** 进程任务执行 */
    export function exec(cmd: string, cb: (err?: any, rst?: any) => void, options: any = {}) {
        const exec = childProcess.exec;
        exec(cmd, options, function (err: any, stdout: any, stderr: any) {
            if (err) {
                console.error('执行报错请查看日志', err);
                cb(err, null);
            } else {
                let data = "stderr:\n" +  stderr + "\nstdout:\n" + stdout ;
                cb(null, data);
            }
        })
    }

    /** 进程任务执行 */
    export function exec2(cmd: string, cb: (err?: any, rst?: any) => void, options: any = {}) {
        const exec = childProcess.exec;
        exec(cmd, options, function (err: any, stdout: any, stderr: any) {
            if (err) {
                console.error('执行报错请查看日志', err);
                cb(err, null);
            } else {
                let data = stdout ||  stderr;
                cb(null, data);
            }
        })
    }

    /** 进程任务执行 */
    export function exec3(cmd: string, cb: (rst?: any) => void, options: any = {}) {
        const exec = childProcess.exec;
        exec(cmd, options, function (err: any, stdout: any, stderr: any) {
            if (!err) {
                let data = stdout ||  stderr;
                cb(data);
            } else {
                console.error(err);
                cb();
            }
        })
    }

    //初始化 自动注册同级文件
    export function getFileList(modulePath: string, handler?: (fileName: string) => void) {
        FILE.getChildrenlist(modulePath, (fileList) => {
            if (fileList && fileList.length) {
                fileList.filter((item) => {
                    let fileName = item.split('.')[0];
                    if (fileName && fileName != 'module') {
                        try {
                            if (handler) handler(fileName);
                        } catch (error) {
                            console.error(error);
                        }
                    }
                })
            }
        })
    }

    /**
     * 获取ip
     * @param req
     */
    export function getIp(req: any): IpInfo {
        //::ffff:127.0.0.1
        let address = req._remoteAddress;
        let arr = address.split(":");
        let ipv4 = arr.pop();
        let ipv6 = arr.join(":");
        return {
            ip: address,
            ipv4,
            ipv6,
        }
    }

    // https://github.com/scopsy/await-to-js
    export function to<T, U = Error>(
        promise: Promise<T>,
        errorExt?: object
    ): Promise<[U, undefined] | [null, T]> {
        return (
            promise.then <
                [null, T] >
            ((data: T) => [null, data]).catch <
                [U, undefined] >
            ((err: U) => {
                if (errorExt) {
                    const parsedError = Object.assign({}, err, errorExt);
                    return [parsedError, undefined];
                }
                return [err, undefined];
            })
        );
    }
}
