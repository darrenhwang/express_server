/// <reference path="./http.ts" />
/// <reference path="./router.ts" />
module H {
    console.log("process.cwd", process.cwd());
    const dotenv = require('dotenv');
    dotenv.config();
    const test = process.env
    const createError = require('http-errors');
    const path = require('path');
    const cookieParser = require('cookie-parser');
    const logger = require('morgan');
    const express_session = require("express-session");
    const express = require('express');
    const bodyParser = require('body-parser')
    export const $env = process.env;
    export let port: number = parseInt($env.PORT + "")  || 8008;
    export let app = express();
    
    app.all('*', function (req: any, res: any, next: any) {//做跨域请求
        //   res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Origin', req.headers.origin);
        res.header('Access-Control-Allow-Headers', ['token', 'x-requested-with', 'Content-Type', 'userInfo']);
        res.header('Access-Control-Allow-Methods', '*');
        // res.header('Content-Type', 'application/json;charset=utf-8');
        res.header('Access-Control-Allow-Credentials', true);
        next();
    });

    // view engine setup
    app.set('views', path.join(__dirname, 'views'));
    app.set('view engine', 'jade');

    app.use(logger('dev'));
    app.use(express.json());
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(cookieParser());
    //部署静态服务器
    const static_path = $env.staticPath ? path.join(__dirname, $env.staticPath) : path.join(__dirname, 'public');
    console.log('static_path', static_path);
    app.use(express.static(static_path));
    app.use(express_session({
        resave: true,
        saveUninitialized: false,
        secret: "hhw",
        name: "hhw",
        cookie: {
            maxAge: 200 * 60 * 1000,
        },
    }));

    //路由
    app.use('/', H.Router.create_router(express));

    // 定制 404 页面 (返回404状态码)
    app.use(function (req: any, res: any) {
        res.type('text/plain');
        res.status(404);
        res.send('404 - 你访问的页面  ' + DATE.dateFmt());
    });


    //定制 500 页面 (返回500状态码)
    app.use(function (err: any, req: any, res: any, next: any) {
        console.error(err.stack);
        let errInfo = err.stack;
        res.type('text/plain');
        res.status(500);
        res.send('500 - 服务器发生错误\n' + 'errInfo:' + errInfo + '\n' + 'currentTime:' + DATE.dateFmt());
    });

    app.set('port', port);
    H.Http.createHttp(app, port);
}

