module H.Router {
    function getQuery(req: any) {
        let query: any = {};
        if (!OBJ.isEmpty(req.query)) {
            query = req.query;
        } else if (!OBJ.isEmpty(req.body)) {
            query = req.body;
        }
        if (typeof query == 'string') query = JSON.parse(query);
        console.log('query', JSON.stringify(query));
        return query
    }
    export function create_router(express: any) {
        const router = express.Router();
        router.all('/hhw', function (req: any, res: any, next: any) {
            // res.header('Content-Type', 'application/json;charset=utf-8');
            if (req && req.method == 'OPTIONS') {//预请求
                res.send();
            } else {
                let data: any = {};
                data.resultCode = 200
                let query: any = getQuery(req);
                try {
                    doModuleMethod(req, query["module"], query["method"], query["args"], (err?: string | Error, rst?) => {
                        if (err) {
                            console.error('http', err);
                            data.err = err;
                            res.send(data);
                        } else {
                            data.data = rst;
                            res.send(data);
                        }
                    })
                } catch (e) {
                    console.error('http', e);
                    data.err = e;
                    res.send(data);
                }
            }
        });

        /**
         * 执行脚本文件
         */
        router.all('/exec', function (req: any, res: any, next: any) {
            let query: any = getQuery(req);
            if (typeof query == 'string') query = JSON.parse(query);
            let sh_name: string = query.name;
            if (!sh_name) throw "请选择执行文件";
            if (sh_name.indexOf('.sh') == -1) sh_name += ".sh"
            let command = './' + sh_name;
            if (query.args)  command += ' ' + query.args.replace(new RegExp("\\|", 'g'), " ");
            const sh_path = query.path || "/root";
            try {
                exec(command,(err, data) => {
                    res.send(data);
                }, { cwd: sh_path, maxBuffer: 5 * 1024 * 1024})
            } catch (e) {
                res.send(e);
            }
        });

        /** http请求跳转 **/
        router.all('/forward', function (req: any, res: any, next: any) {
            let data: any = {};
            data.resultCode = 200;
            try {
                let query: any = getQuery(req);
                if (!query.host || !query.port) {
                    data.err = '转发路径为空';
                    data.data = query;
                    return res.send(data);
                } else {
                    let postData = JSON.stringify(query);
                    let options: any = {
                        hostname: query.host,
                        port: query.port,
                        path: query.route,
                        method: 'post',
                        headers: {
                            'Content-Type': 'application/json;charset=utf-8',
                            "Content-Length": Buffer.byteLength(postData)
                        }
                    }

                    const request = require(query.isHttps ? 'https' : 'http');
                    if (request) {
                        let rst = request.request(options, function (res1: any) {
                            let buffer = '';
                            res1.setEncoding('utf-8');
                            res1.on('data', function (data1: any) {
                                buffer += data1;
                            });
                            res1.on('end', function () {
                                let str = buffer.toString();
                                data.data = str;
                                res.send(data);
                            })
                        });
                        rst.on('error', function (e: any) {
                            data.err = e;
                            res.send(data);
                        })

                        rst.write(postData);
                        rst.end();
                    } else {
                        data.err = 'request为空';
                        res.send(data);
                    }
                }
            } catch (e) {
                data.err = e;
                console.error(e)
            }
        });

        return router;
    }
}

