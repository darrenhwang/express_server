/// <reference path="./HWebSocket.ts" />
module H.Http {
    const debug = require('debug')('server:server');
    const https = require("https");
    export let server_http: any;

    /** 创建 http服务 */
    export function createHttp(app: any, port: number) {
        const { createServer } = require('http');
        server_http = createServer(app);
        H.Ws.createWs(server_http);
        server_http.listen(port, () => {
            console.log("端口" + port + "启动成功")
        });
        server_http.on('error', onError);
        server_http.on('listening', onListening);
    }

    
    function onError(error: any) {
        if (error.syscall !== 'listen') {
            throw error;
        }

        var bind = typeof port === 'string' ?
            'Pipe ' + port :
            'Port ' + port;

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
        var addr = server_http.address();
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
    export function request(host: string, port: string, path: string, postData: any, cb?: (err: any, rst?: any) => void): Promise<any> {
        let data = JSON.stringify(postData);
        let options: any = {
            hostname: host,
            port,
            path,
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Content-Length": Buffer.byteLength(data)
            }

        }

        let self = this;
        return new Promise((resolve, reject) => {
            let rst = https.request(options, function (res: any) {
                let buffer = '';
                res.setEncoding('utf-8');
                res.on('data', function (data1: any) {
                    buffer += data1;
                });
                res.on('end', function () {
                    let str = buffer.toString();
                    cb ? cb(null, str) : resolve(str);
                })
            });
            rst.on('error', function (e: any) {
                cb ? cb(e) : reject(e);
            })

            rst.write(data);
            rst.end();
        }).catch(err => {
            if (cb) cb(err);
            else throw err;
        })
    }
}