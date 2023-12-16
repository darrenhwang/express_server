/**
 * 生成数据库结构
 * 编译
 */

const fs = require('fs');
const path = require('path');
const childProcess = require('child_process');
const exec = (shell, cb) => {
    childProcess.exec(shell, function (err, stdout, stderr) {
        if (err) {
            console.error("执行报错");
            console.error(err);
        } else {
            if (cb) cb();
        }
    })
}
/**
 * 生成数据库结构
 */
(async function (argv) {
    const boot_file = './xml'
    const xml2js = require('xml2js')
    const parser = new xml2js.Parser({
        explicitArray: true
    });

    //删除auto文件夹重新生成
    let auto_path = "./server/auto_dao";
    let flag = await fs.existsSync(auto_path);
    if (flag) {
        const fileNames = await fs.promises.readdir(auto_path);
        if (fileNames && fileNames.length) {
            for (let i = 0; i < fileNames.length; i++) {
                await fs.promises.unlink(auto_path + "/" + fileNames[i]);
            }
        }
        await fs.rmdirSync(auto_path);
    }
    await fs.promises.mkdir(auto_path);

    //删除sql文件重新生成
    let auto_sql_path = './auto_sql';
    if (await fs.existsSync(auto_sql_path)) {
        const fileNames = await fs.promises.readdir(auto_sql_path);
        if (fileNames && fileNames.length) {
            for (let i = 0; i < fileNames.length; i++) {
                await fs.promises.unlink(auto_sql_path + "/" + fileNames[i]);
            }
        }
        await fs.rmdirSync(auto_sql_path);
    }
    await fs.promises.mkdir(auto_sql_path);

    //要解析的文件数量
    const fileNames = await fs.promises.readdir(boot_file);
    if (!fileNames || !fileNames.length) return;

    //解析ds
    const parseString = async (content) => {
        return new Promise((resolve, reject) => {
            parser.parseString(content, function (errors, rst) {
                if (errors) {
                    reject(errors);
                } else {
                    resolve(rst);
                }
            })
        })
    }

    const isSpecialWord = (value) => {
        let patrn = /[`~!@#$%^&*()_\-+=<>?:"{}|,.\/;'\\[\]·~！@#￥%……&*（）——\-+={}|《》？：“”【】、；‘'，。、]/im;
        if (!patrn.test(value)) { // 如果包含特殊字符返回false
            return false;
        }
        return true;
    }
    
    const change = (tableName) => {
        let daoName = '';
        let enumName = 'I';
        let flag = false; //下个字母是否需要大写
        for (let i = 0; i < tableName.length; i++) {
            let word = tableName[i];
            if (isSpecialWord(word)) {
                flag = true;
                continue;
            }
            enumName += word.toUpperCase();
            if (flag) {
                word = word.toUpperCase();
            }
            daoName += word;
            flag = false;
        }
        let name = daoName;
        let daoClass = daoName[0].toUpperCase() + daoName.substring(1);
        let entity = 'I' + daoClass;
        daoName += "Dao";
        return {
            name,
            daoName,
            daoClass,
            entity,
            enumName
        };
    }

    //解析每个table
    const temp = (table, dao_content_list, interface_list, dao_instance_list, extends_dao) => {
        let tableName = table.$.name;
        let { entity, daoName, enumName, daoClass } = change(tableName);
        let type_map = {};//处理每个字段是什么类型
        let needToList = [];//需要从字符窜转成数组
        let needToDate = []; //需要从字符窜转成时间
        
        let inf = [];//接口
        let enu = [];//枚举

        let sqlKey_list = [];

        for (let key in table) {
            let value_list = table[key];
            if (key == "datetime") {
                value_list.forEach(info => {
                    if (info && info.$ && info.$.name) {
                        needToDate.push(info.$.name);
                        inf.push(`        /** ${info._} */       
        ${info.$.name}?: Date;`);
                        enu.push(`        /** ${info._} */
        ${info.$.name} = "${info.$.name}",`);

                        let $ = info.$;
                        sqlKey_list.push('    `' + info.$.name + '` ' + `${key} ${$.required ? 'not null ' : ''}comment '${info._}',`);
                    }
                });

            } else if (["int", "bigint"].indexOf(key) > -1) {
                value_list.forEach(info => {
                    if (info && info.$ && info.$.name) {
                        inf.push(`        /** ${info._} */       
        ${info.$.name}?: number;`);
                        enu.push(`        /** ${info._} */
        ${info.$.name} = "${info.$.name}",`);

                        let $ = info.$;
                        sqlKey_list.push('    `' + $.name + '` ' + `${key} ${$.required ? 'not null ' : ''}${$.default != null ? 'default ' + $.default + ' ' : ''}${$.auto ? 'not null auto_increment ' : ''}comment '${info._}',`);
                    }
                });
            } else if (["varchar", "text", "mediumtext"].indexOf(key) > -1) {
                value_list.forEach(info => {
                    if (info && info.$ && info.$.name) {
                        if (info.$.type && (info.$.type == "any" || info.$.type.indexOf("[]"))) {
                            inf.push(`        /** ${info._} */       
        ${info.$.name}?: ${info.$.type};`);
                            needToList.push(info.$.name)
                        } else {
                            inf.push(`        /** ${info._} */       
        ${info.$.name}?: string;`);
                        }
                        enu.push(`        /** ${info._} */
        ${info.$.name} = "${info.$.name}",`);

                        let $ = info.$;
                        sqlKey_list.push('    `' + $.name + '` ' + `${$.length != null ? key + '(' + $.length  + ')' : key} ${$.required ? 'not null ' : ''}${$.default != null ? 'default ' + $.default + ' ' : ''}comment '${info._}',`);
                    }
                });
            }
        }
        //初始化接口和枚举
        dao_content_list.push(`    export const enum ${enumName} {
${ enu.join('\n') }
    } 
    export interface ${entity} {
${ inf.join('\n') }
    }`)

        //初始化类
        let interface = `    export class ${daoClass} extends ${extends_dao ? extends_dao : "Dao"}<${entity}, ${enumName}>{
        constructor(cfg ? : MysqlCfg) {
            super();
            this.needToList = ${JSON.stringify(needToList)};
            this.needToDate = ${JSON.stringify(needToDate)};
            this.tableName = '${tableName}';
        }
    }`;
        interface_list.push(interface);
        //初始化实例
        dao_instance_list.push(`    export let ${daoName}: ${daoClass} = new ${daoClass}();`);

        let other_list = [];
        // 主键
        if (!table.$.primary) console.error(tableName + '表主键为空');
        else {
            let primary_list = table.$.primary.split(',');
            let primary_str = '';
            primary_list.forEach((item) => {
                if (primary_str) primary_str += ',';
                primary_str += ('`' + item + '`');
                primary_str = `    primary key (${primary_str})`;
            })
            other_list.push(primary_str);
        }

        if (table.$.keys) { // indexName1:key1,key2;indexName2:key3,key4
            let keys_list = table.$.keys.split(';');
            keys_list.forEach((item, index) => {
                let list = item.split(':');
                let keys;
                let indexName = 'index' + index;//索引名字
                if (list.length > 1) {
                    keys = list[1].split(',');
                    indexName = list[0];
                } else {
                    keys = list[0].split(',');
                }
                let key_str = ''
                keys.forEach((item) => {
                    if (key_str) key_str += ',';
                    key_str += ('`' + item + '`');
                })
                other_list.push('    key `' + indexName + '` (' + key_str + ')');
            })
        }


        let create_sql = `create table ${tableName}
(
${sqlKey_list.join('\n')}
${other_list.join(',\n')}
) DEFAULT CHARSET=utf8 comment='${table.comment[0]}';  `;

        return create_sql;
    }

    let reference_list = [];//由dao统一引入
    for (let i = 0; i < fileNames.length; i++) {
        let fileName = fileNames[i];

        let sql_list = [];//每个文件对应sql列表

        let fileName_pre = fileName.split('.')[0];
        let content = await fs.promises.readFile(path.join(boot_file, fileName), 'utf8');
        if (!content) continue;
        let rst = await parseString(content);
        if (!rst || !rst.ds) {
            console.error("注意格式，请用ds")
            continue;
        }
        let dao_content_list = [];
        let interface_list = [];//结构体 枚举
        let dao_class_list = [];//dao类
        let dao_instance_list = []; //dao实例列表;

        let $ = rst.ds.$;
        let { name } = change($['database']);
        let extends_dao = "Dao_" + name;
        if (extends_dao) {
            let {host, user, password, database} = $;
            let client_cfg = JSON.stringify({host, user, password, database});
            dao_content_list.push(`    export let mysql_${fileName_pre} = initPool(${client_cfg});          
    export class ${extends_dao}<S, U> extends Dao<S, U> {
        constructor(cfg ? : MysqlCfg) {
            super();
        }

        get client(): any {
            return this._promisePool || mysql_${fileName_pre};
        }
    }`)
        }

        let table_list = rst.ds.table;
        if (table_list && table_list.length) {
            for (let i = 0; i < table_list.length; i++) {
                let sql = temp(table_list[i], interface_list, dao_class_list, dao_instance_list, extends_dao);
                sql_list.push(sql);
            }
        }
        
        dao_content_list.push(...interface_list);
        dao_content_list.push(...dao_class_list);
        dao_content_list.push(...dao_instance_list);
        //处理命名空间
        dao_content_list.unshift(`module ${$.namespce || 'H'} {`);
        dao_content_list.push(`}`);
        //文件引用
        dao_content_list.unshift(`/// <reference path="../base/mysql/Dao.ts" />`);
        await fs.promises.appendFile(path.join(auto_path, fileName_pre + '_dao.ts')
            , dao_content_list.join('\n'));

        await fs.promises.appendFile(path.join(auto_sql_path, fileName_pre + '.sql')
            , sql_list.join('\n'));

        reference_list.push(`/// <reference path="./${fileName_pre}_dao.ts" />`)
    }
    reference_list.push(`
module H {   

}`)
    await fs.promises.appendFile(path.join(auto_path, 'module.ts')
        , reference_list.join('\n'));
})(process.argv);


//用npm run tsc
// /**
//  * 将ts编译成js
//  *-w能够通过监听文件变化进行编译
//  * server的一级目录不能取名index
//  */
// (async function (argv) {
//     //js文件
//     let module_map = {};
//
//     //server二级目录以上处理
//     async function getChildrenlist(_path, list) {
//         const fileNames = await fs.promises.readdir(_path);
//         if (fileNames && fileNames.length) {
//             for (let i = 0; i < fileNames.length; i++) {
//                 let fileName = fileNames[i];
//                 if (fileName.indexOf(".ts") > -1) {
//                     list.push(_path + `/` + fileName);
//                 } else {
//                     await getChildrenlist(_path + `/` + fileName, list);
//                 }
//             }
//         }
//     }
//
//     //server一级目录下处理
//     let boot_path = './server';
//     const fileNames = await fs.promises.readdir(boot_path);
//     if (fileNames && fileNames.length) {
//         for (let i = 0; i < fileNames.length; i++) {
//             let fileName = fileNames[i];
//             if (fileName.indexOf(".ts") > -1) {
//                 if (!module_map.index) module_map.index = [];
//                 module_map.index.push(boot_path + `/` + fileName);
//             } else {
//                 //引用会自动导入进index，所以不用编译其他的。。。
//                 // module_map[fileName] = []
//                 // await getChildrenlist(boot_path + `/` + fileName, module_map[fileName]);
//             }
//         }
//     }
//
//     for (let key in module_map) {
//         let shell = `tsc --outFile ./hhw/${key}.js ${module_map[key].join(' ')} -t es5`;
//         if (argv && argv.indexOf("-w") > -1) {
//             shell += ` -w`;
//         }
//         exec(shell, () => {
//             console.warn(`编译模块${key}成功`);
//         })
//     }
// })(process.argv);



