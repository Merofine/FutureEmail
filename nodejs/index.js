var express = require('express')
var bodyParser = require('body-parser')
var mysql      = require('mysql')
var jwt = require('jsonwebtoken')
const request = require('request')
var querystring = require('querystring')
var fs = require('fs')
var path= require('path')
var async = require('async')//nodejs的异步特效，有时候会导致请求没有完成就执行下面的代码，出现错误。使用async模块来异步转同步，只有前一个function执行callback，下一个才会执行
var multer=require("multer");

//创建Express应用程序。express()函数是express模块导出的顶级函数。
var app = express()

//https://www.cnblogs.com/wuqun/p/5942918.html
//bodyParser中间件用来解析http请求体
app.use(bodyParser.json()) // bodyParser.json是用来解析json数据格式的
app.use(bodyParser.urlencoded({ extended: false }))// bodyParser.urlencoded则是用来解析我们通常的form表单提交的数据, 也就是请求头中包含这样的信息：  Content-Type: application/x-www-form-urlencoded

// Token Message
var secret_key = "woshiliaowenbin";
var timeoutToken = 60*60*24*100; //s ， 共100天
var algorithmToken = 'HS256';

// Weixin Message
var APPID = 'wxa788c7202e122f91';
var SECRET = 'b0fb3db900f796a30a98d3d8a8dffb0e';

//设置临时目录 存放上传的图片
const upload=multer({dest:"tmp/"});

// 登录
var mysql_pool = mysql.createPool({
    connectionLimit : 10,//
    host     : 'localhost',
    user     : 'yuancheng',
    password : 'Liaowenbin1018!',
    database : 'futureemail'
});

// 函数

// 递归创建目录 同步方法
function mkdirsSync(dirname) {
    if (fs.existsSync(dirname)) {
        return true;
    } else {
        if (mkdirsSync(path.dirname(dirname))) {
            fs.mkdirSync(dirname);
            return true;
        }
    }
}

//删除数据(openid/letterid/blockid.[类型])
function deleteblock(openid, letterid, blockid, blockType){
    var typeEnd = ''
    if(blockType == 0){//文本
        typeEnd = '.txt'
    }else if(blockType == 1){//图片
        typeEnd = '.jpg'
    }else if(blockType == 2){//音频
        typeEnd = '.mp3'
    }

    var filepath = 'userdata/' + String(openid) + '/' + String(letterid) + '/' + String(blockid) + typeEnd;
    fs.unlink(path.join(__dirname,filepath), function (err) {
        if(err){
            console.log(err)
            return false
        }
    })

    return true
}

//保存数据(openid/letterid/blockid.[类型])
function savefile(openid, letterid, blockid, blockType, fileData){
    var typeEnd = ''
    // if(blockType == 0){//文本
    //     typeEnd = '.txt'
    // }
    if(blockType == 1){//图片
        typeEnd = '.jpg'
    }else if(blockType == 2){//音频
        typeEnd = '.mp3'
    }

    var filepath = 'userdata/' + String(openid) + '/' + String(letterid) + '/' + String(blockid) + typeEnd;
    // console.log(filepath)
    fs.writeFileSync(path.join(__dirname,filepath), fileData);//重新书写图片文件  写入到指定的文件夹下

    return true
}

function addTextFile(openid, letterid, blockid, content){
    var filepath = 'userdata/' + String(openid) + '/' + String(letterid) + '/' + String(blockid) + '.txt';
    fs.writeFile(path.join(__dirname, filepath), content, 'utf8',function (err){
        if(err){
            console.log(err)
            return false
        }
    })
    return true
}

function readTextFile(openid, letterid, blockid){
    var filepath = 'userdata/' + String(openid) + '/' + String(letterid) + '/' + String(blockid) + '.txt';
    return fs.readFileSync(path.join(__dirname, filepath), 'utf8') //同步读取文件
}


function addLetter(openid, letterid){
    var filepath = 'userdata/' + String(openid) + '/' + String(letterid) + '/';
    // fs.mkdir(filepath, function (err){
    //     if(err){
    //         console.log(err)
    //         return false
    //     }
    //     console.log("创建成功")
    // })
    // console.log(filepath)
    
    mkdirsSync(path.join(__dirname, filepath))
    
    return true
}

/**
 *
 * @param {*} url
 */
function deleteFolderRecursive(url) {
    var files = [];
    /**
     * 判断给定的路径是否存在
     */
    if (fs.existsSync(url)) {
        /**
         * 返回文件和子目录的数组
         */
        files = fs.readdirSync(url);
        files.forEach(function (file, index) {

            var curPath = path.join(url, file);
            /**
             * fs.statSync同步读取文件夹文件，如果是文件夹，在重复触发函数
             */
            if (fs.statSync(curPath).isDirectory()) { // recurse
                deleteFolderRecursive(curPath);

            } else {
                fs.unlinkSync(curPath);
            }
        });
        /**
         * 清除文件夹
         */
        fs.rmdirSync(url);
    } else {
        console.log("给定的路径不存在，请给出正确的路径");
    }
}

function deleteLetter(openid, letterid){
    var filepath = 'userdata/' + String(openid) + '/' + String(letterid);

    deleteFolderRecursive(path.join(__dirname, filepath))
    // fs.rmdir(path.join(__dirname, filepath), function (err){
    //     if(err){
    //         console.log(err)
    //         return false
    //     }
    // })
    // return true
}


// openid同一用户同一应用唯一，unionid同一用户不同应用唯一。
// 这里的不同应用是指在同一微信开发平台下的不同应用
// 为了识别用户，每个用户针对每个公众号会产生一个安全的openid。
// 如果需要在多公众号、移动应用之间做用户共通，则需要前往微信开放平台，将这些公众号和应用绑定到一个开放平台账号下，
// 绑定后，一个用户虽然对多个公众号和应用有多个不同的openid，但他对所有这些同一开放平台账号下的公众号和应用，只有一个unionid。
app.post("/submitLogin", function(req, res) {
    var code_js = req.body.code;
    var username = req.body.username;
    var gender = req.body.sex;

    console.log('登录!')
    //【登录凭证校验】（appid+appsecret+code）
    //调用 auth.code2Session 接口，换取 用户唯一标识 OpenID 、
    // 用户在微信开放平台帐号下的唯一标识UnionID（若当前小程序已绑定到微信开放平台帐号） 和
    // 会话密钥 session_key。
    var sentData = {
        appid:APPID,
        secret:SECRET,
        js_code:code_js,
        grant_type:'authorization_code'
    }
    var sentData = querystring.stringify(sentData);

    var openid = '';
    var session_key = '';
    var unionid = '';
    //【发送Code】
    request('https://api.weixin.qq.com/sns/jscode2session?' + sentData, function (auth_err, auth_res, auth_body){
        auth_body = eval('('+auth_body+')');

        // 请求成功
        if(auth_body.errcode === undefined || auth_body.errcode === 0){

            session_key = auth_body.session_key;
            openid = auth_body.openid;

            if(auth_body.unionid)//如果用户有关注该小程序 同主体公众号 则会返回
            {
                unionid = auth_body.unionid;
            }

            // 【自定义登录态3rd_session】与openid,session_key关联, 自定义时效
            var third_session = jwt.sign({data: openid}, secret_key, {algorithm: algorithmToken,expiresIn: timeoutToken});

            //【更新数据库】
            // 查询用户是否存在
            var sql = 'select * from login where openid=' + '"' + openid + '"';
            mysql_pool.getConnection(function (err, connection){
                if(err){
                    connection.release();
                    console.log('Error getting mysql_pool connection:' + err);
                    throw err;
                }
                connection.query(sql, function (error, results, fields) {
                    if (error) throw error;
                    // 1.如果用户不存在，则需要插入新的用户信息（login，user表）
                    if (results[0] === undefined) {
                        // console.log("用户不存在")
                        var sql = `insert into login (openid, unionid, third_session, session_key) values("${openid}","${unionid}","${third_session}","${session_key}")`;
                        connection.query(sql, function (err2, results2, fields2){
                            if(err2) throw err2;
                        })

                        var sql = `insert into user (openid, unionid, username, gender) values("${openid}","${unionid}","${username}","${gender}")`;
                        connection.query(sql, function (err2, results2, fields2){
                            if(err2) throw err2;
                        })

                    }
                    // 2.如果用户已经存在，则更新即可（login表）
                    else {
                        // console.log("用户已经存在")
                        var sql = 'UPDATE login SET third_session=' + '"' + third_session + '"' + ', session_key=' + '"' + session_key + '"' + ' WHERE openid=' + '"' + openid + '"';
                        connection.query(sql, function (err2, results2, fields2){
                            if(err2) throw err2;
                        })
                    }
                });
                connection.release();
            })

            res.send({ status: 200, errcode: 0 ,session: third_session, msg: "登录成功" })
        }
        // 请求失败
        else {
            res.send({status: 500, errcode: auth_body.errcode, msg: "登录失败"})
        }
    })
})

// 注册
app.post("/submitRegister", function (req,res){
    var username = req.body.name;
    var password = req.body.password;
    var email = req.body.email;

    var sql = "select * from user where username=" + '"' + username + '"';

    mysql_pool.getConnection(function (err, connection){
        if(err){
            connection.release();
            throw err;
        }
        connection.query(sql, function (err, results, fields){
            if(err){
                connection.release();
                throw err;
            }
            //1.注册成功
            if(!results[0]){
                // 新建token
                var token = jwt.sign({data: username}, secret_key, {algorithm: algorithmToken,expiresIn: timeoutToken});

                // 更新数据库
                var sql = `insert into user (username, password, email, token) values("${username}","${password}","${email}","${token}")`;
                connection.query(sql, function (err2, results2, fields2){
                    if(err2) throw err2;
                })
                res.send({status:200, msg:"恭喜你，注册成功！"})
            }
            //2. 注册失败
            else{
                res.send({status:500, msg:"用户名已经注册，请更换用户名"})
            }
        })
    })
})

// 查看客户端的token是否过期，没有过期则直接进入个人界面，否则重新进行登录(!!后续可能要把用户相应数据也一起发了，减少和服务器的连接数)
app.post("/queryToken", function (req,res){
     // console.log('fuck')
     // console.log(req.body)

     var session = req.body.session;

     var sql = "select * from login where third_session=" + '"' + session + '"';

     try{	
     mysql_pool.getConnection(function (err, connection){
         if(err){
             connection.release();
             throw err;
         }
         connection.query(sql, function (err, results, fields) {
             if (err) {
                 connection.release();
                 throw err;
             }


             //1.存在该用户
             if (results[0]) {
                 jwt.verify(results[0].third_session, secret_key, {algorithm: algorithmToken},function (err,decoded){
	             if(err){//无效
                         res.send({status:404, message:'无效token'})
                     }else{
                         res.send({status:200, message:'用户名及token有效'})
                     }
                 })
             }else{
                 res.send({status:404, message:'用户不存在'})//服务器无法根据客户端的请求找到资源（网页）
             }
             connection.release();
         })
     })
     } catch(err){
     	console.log(err)
     }


 })

//获取home的资源，即信封数据
app.post("/getIndex", function (req,res){
    // console.log(req.headers.authorization)
    var session = req.body.session;

    jwt.verify(session, secret_key, {algorithm: algorithmToken},function (err,decoded){
        if(err){//无效
            // console.log('fuck')
            res.send({status: 403, message: "token过期或者无效"})
        }else{//有效
            // console.log(decoded)
            let openid = decoded.data;
            var sql = "select letterid, letterState, sentUsername, receiveUsername, remarks, stampFile, startTime, endTime from letterhead where openid=" + '"' + openid + '"';
            mysql_pool.getConnection(function (err, connection){
                if(err){
                    connection.release();
                    throw err;
                }
                connection.query(sql, function (err, results, fields){
                    //let userInfo = {
                    //    username: results[0].username,
                    //   gender: results[0].gender
                    //}
                    res.send({status: 200, letterhead: results})
                })
                connection.release();
            })
        }
    });
})

//更新信封head
app.post("/updateLetterHead", function(req,res){
	var session = req.body.session;
	var letterid = req.body.letterid;
	var shoujianren = req.body.shoujianren;
	var jijianren = req.body.jijianren;
	var startTime = JSON.stringify(req.body.startTime);//JSON
	var endTime = JSON.stringify(req.body.endTime);
	var youpiao = req.body.youpiao;
	var haveSave = req.body.haveSave;
	var beizhu = JSON.stringify(req.body.beizhu);

	// console.log(req.body)

	jwt.verify(session, secret_key, {algorithm: algorithmToken},function (err,decoded){
        	if(err){//无效
            		// console.log('fuck')
            		res.send({status: 403, message: "token过期或者无效"})
        	}else{//有效
            		// console.log(decoded)
            		let openid = decoded.data;

			if(haveSave){
				var sql = "update letterhead set openid=" + '"' + openid + '",' + 'letterid=' + '"' + letterid + '",' + 'letterState=' + '0' + ', sentOpenID=' + '"'  + openid +  '",' + 'sentUsername=' + '"' + jijianren +  '",' + 'receiveOpenID=' + '"' + openid + '",' + 'receiveUsername=' + '"' + shoujianren + '",' + 'remarks=' + "'" + beizhu + "'," + 'stampFile='  + '"' + youpiao + '",' + 'startTime=' + "'" + startTime + "',"  + 'endTime=' + "'" + endTime + "'" + "where openid=" + '"' + openid + '" and letterid=' + '"' + letterid + '"';
			}
			else{
                var sql = "insert into letterhead(openid, letterid, letterState, sentOpenID, sentUsername, receiveOpenID, receiveUsername, remarks, stampFile, startTime, endTime) values(" + '"' + openid + '",' + '"' + letterid + '",' + '0' + ',"' + openid + '",' + '"' + jijianren + '",' + '"' + openid + '",' + '"' + shoujianren + '",' + "'" + beizhu + "'," +  '"' + youpiao + '",' + "'" + startTime + "'," + "'" + endTime + "')";
                // 创建信封目录
                addLetter(openid, letterid)
            }

            mysql_pool.getConnection(function (err, connection){
                if(err){
                        connection.release();
                        throw err;
                }
                connection.query(sql, function (err, results, fields){
                        if(err) throw err;

                        res.send({status: 200})
                })
                connection.release();
         })
        	}
    	});

    }
)

//加载已保存的letterhead
app.post("/loadLetterHead", function(req,res){
	var session = req.body.session;
	var letterid = req.body.letterid;
	// console.log(letterid)

        jwt.verify(session, secret_key, {algorithm: algorithmToken},function (err,decoded){
                if(err){//无效
                        // console.log('fuck')
                        res.send({status: 403, message: "token过期或者无效"})
                }else{//有效
                        // console.log(decoded)
                        let openid = decoded.data;

                        var sql = "select sentUsername, receiveUsername, remarks, stampFile, startTime, endTime from letterhead where openid=" + '"' + openid + '" and letterid=' + '"' + letterid + '"';
			// console.log(sql)
                        mysql_pool.getConnection(function (err, connection){
                                if(err){
                                        connection.release();
                                        throw err;
                                }
                                connection.query(sql, function (err, results, fields){
                                        if(err) throw err;

					// console.log(results)

                                        res.send({status: 200, data: results[0]})
                                })
                                connection.release();
                         })
                }
        });


})

//删除letter（letterhead表和letter表）
app.post("/deleteLetter", function(req,res){
        var session = req.body.session;
        var letterid = req.body.letterid;
        // console.log(letterid)

        jwt.verify(session, secret_key, {algorithm: algorithmToken},function (err,decoded){
                if(err){//无效
                        // console.log('fuck')
                    res.send({status: 403, message: "token过期或者无效"})
                }else{//有效
                        // console.log(decoded)
                    let openid = decoded.data;

                    //删除letterhead表
                    var sql = "delete from letterhead where openid=" + '"' + openid + '" and letterid=' + '"' + letterid + '"';
                    // console.log(sql)
                    mysql_pool.getConnection(function (err, connection){
                            if(err){
                                    connection.release();
                                    throw err;
                            }
                            connection.query(sql, function (err, results, fields){
                                    if(err) throw err;
                                    res.send({status: 200})
                            })
                            connection.release();
                     })

                    deleteLetter(openid, letterid)
                }
        });


})


//更新信封内容
app.post("/updateEmail", function(req,res){
    var session = req.body.session;
    var letterid = req.body.letterid;
    var letterState = req.body.letterState;
    // console.log(session)
    var blockObjectList = req.body.blockObjectList;
    // console.log(blockObjectList)

    jwt.verify(session, secret_key, {algorithm: algorithmToken},function (err,decoded){
        if(err){//无效
            res.send({status: 403, message: "token过期或者无效"})
        }else{//有效

            let openid = decoded.data;
            var oldBlockId = []

            // 创建信封目录
            addLetter(openid, letterid)

            async.waterfall([
                function (callback){
                    console.log('1')
                    // 更改信封的状态
                    var  sql = "update letterhead set letterState=" + letterState  + " where openid=" + '"' + openid + '" and letterid=' + '"' + letterid + '"';
                    // console.log(sql)
                    mysql_pool.getConnection(function (err, connection){
                        connection.query(sql, function (err, results, fields){
                            if(err) throw err;
                            // console.log( '"' + openid + '":' + '将信封改为发送状态1')
                            callback(null)
                        })
                        connection.release();
                    })
                },
                function (callback){
                    console.log('2')
                    // 获取数据库现有的内容的blockid
                    var  sql = "select blockid, blockType from letter where openid=" + '"' + openid + '" and letterid=' + '"' + letterid + '"';
                    mysql_pool.getConnection(function (err, connection){
                        connection.query(sql, function (err, results, fields){
                            if(err) throw err;
                            oldBlockId = results;
                            callback(null)
                        })
                        connection.release();
                    })
                },
                function (callback){
                    console.log('3')
                    // 通过对比，移除用户删除的块。以及对应的文件内容
                    // console.log(oldBlockId)
                    // console.log(blockObjectList)
                    for(var item in oldBlockId){
                        let deleteFlag = true
                        for(var ytem in blockObjectList){
                            //未被删除
                            if(oldBlockId[item].blockid == blockObjectList[ytem].id){
                                deleteFlag = false
                                break
                            }
                        }
                        if(deleteFlag){
                            //处理删除的数据
                            console.log('delete: ' + oldBlockId[item].blockid)
                            deleteblock(openid, letterid, oldBlockId[item].blockid, oldBlockId[item].blockType)
                        }
                    }
                    callback(null)
                },
                function (callback){
                    console.log('4')

                    var arr = []
                    for(var n in blockObjectList){
                        arr[n] = Number(n)
                    }

                    async.eachSeries(arr, function (ytem, callback){
                        // 根据newblock判断新增的块，并更新数据库，以及添加文本文件
                        if(blockObjectList[ytem].newblock == true){
                            var  sql = "insert into letter(openid, letterid, blockid, blockType, orderNum) values(" + '"' + openid + '", "' + letterid + '", "' + blockObjectList[ytem].id + '", ' + blockObjectList[ytem].blockType + ', ' + blockObjectList[ytem].orderNum + ")";
                            console.log(sql)

                            mysql_pool.getConnection(function (err, connection){
                                connection.query(sql, function (err, results, fields){
                                    if(err) throw err;
                                    // 若是文本，则添加新的文件【非文本通过另外接口单独处理】
                                    // if(blockObjectList[ytem].blockType == 0){
                                    //     addTextFile(openid, letterid, blockObjectList[ytem].id, blockObjectList[ytem].content)
                                    //     callback(null)
                                    // }else{
                                    //     callback(null)
                                    // }

                                    //添加新文件，文本块则是内容，非文本块则是用户存放的本地路径
                                    addTextFile(openid, letterid, blockObjectList[ytem].id, blockObjectList[ytem].content)
                                    callback(null)
                                })
                                connection.release();

                            })


                        }

                        // 根据orderChange，来更新已经改变的块
                        else if(blockObjectList[ytem].orderChange == 1){
                            var  sql = "update letter set orderNum=" + blockObjectList[ytem].orderNum + " where openid=" + '"' + openid + '" and letterid=' + '"' + letterid + '"' + ' and blockid=' + '"' + blockObjectList[ytem].id + '"';
                            console.log(sql)
                            mysql_pool.getConnection(function (err, connection){
                                connection.query(sql, function (err, results, fields){
                                    if(err) throw err;
                                    // 如果是并且文本内容发生改变
                                    // if(blockObjectList[ytem].contentChange == 1 && blockObjectList[ytem].blockType == 0){
                                    //     // console.log(blockObjectList[ytem].blockType)
                                    //     addTextFile(openid, letterid, blockObjectList[ytem].id, blockObjectList[ytem].content)
                                    //     callback(null)
                                    // }else{
                                    //     callback(null)
                                    // }
                                    //更新txt文件，文本块则是内容，非文本块则是用户存放的本地路径
                                    if(blockObjectList[ytem].contentChange == 1){
                                        addTextFile(openid, letterid, blockObjectList[ytem].id, blockObjectList[ytem].content)
                                        callback(null)
                                    }else{
                                        callback(null)
                                    }
                                })
                                connection.release();
                            })
                        }

                        // 如果只是文本内容发生改变
                        // else if(blockObjectList[ytem].contentChange == 1 && blockObjectList[ytem].blockType == 0){
                        //     // console.log(blockObjectList[ytem].blockType)
                        //     addTextFile(openid, letterid, blockObjectList[ytem].id, blockObjectList[ytem].content)
                        //     callback(null)
                        // }

                        // 如果只是文本内容或者非文本块路径 发生改变
                        else if(blockObjectList[ytem].contentChange == 1){
                            // console.log(blockObjectList[ytem].blockType)
                            addTextFile(openid, letterid, blockObjectList[ytem].id, blockObjectList[ytem].content)
                            callback(null)
                        }

                        else{
                            callback(null)
                        }

                    // console.log(arr)
                    // let p = new Promise(function (reslove, reject){
                    //
                    // })
                    //
                    // p.then(()=>{
                    //     callback(null)
                    // })
                    }, function (err) {
                        if(err == null){
                            res.send({status: 200})
                        }
                    })


                }

            ], function (err, res) {
                console.log(err)
            })

        }
    });
})

//客户端上传文件到服务器
app.post("/uploadFile", upload.single("file"), function(req,res){
    // console.log(req.headers)
    var session = req.headers.session;
    var letterid = req.headers.letterid;
    var blockid = req.headers.blockid;
    var blocktype = req.headers.blocktype;

    var imgFile=req.file;//获取图片上传的资源
    var tmp=imgFile.path;//获取临时资源
    // let ext=path.extname(imgFile.originalname);//利用path模块获取 用户上传图片的 后缀名
    // let newName=""+(new Date().getTime())+Math.round(Math.random()*10000)+ext;  //给用户上传的图片重新命名 防止重名

    jwt.verify(session, secret_key, {algorithm: algorithmToken},function (err,decoded) {
        if (err) {//无效
            res.send({status: 403, message: "token过期或者无效"})
        } else {//有效
            let openid = decoded.data;

            savefile(openid, letterid, blockid, blocktype, fs.readFileSync(tmp))
            res.send({status: 200})
        }
    })

})

//客户端下载服务器的资源
app.get("/download", function(req,res,next){
    // console.log(req.headers)
    var session = req.headers.session;
    var letterid = req.headers.letterid;
    var blockid = req.headers.blockid;
    var blockType = req.headers.blocktype;

    console.log('我出来了喔表格')
    jwt.verify(session, secret_key, {algorithm: algorithmToken},function (err,decoded) {
        if (err) {//无效
            res.send({status: 403, message: "token过期或者无效"})
        } else {//有效
            let openid = decoded.data;

            let road = 'userdata/' + openid + '/' + letterid;
            var typeEnd = ''
            // if(blockType == 0){//文本
            //     typeEnd = '.txt'
            // }
            if(blockType == 1){//图片
                typeEnd = '.jpg'
            }else if(blockType == 2){//音频
                typeEnd = '.mp3'
            }
            var filename = blockid + typeEnd

            var filePath = path.join(__dirname, road, filename)
            res.download(filePath, function (err){
                if (!err) return; // file sent
                if (err.status !== 404) return next(err); // non-404 error
                // file for download not found
                res.statusCode = 404;
                res.send('Cant find that file, sorry!');
            })
        }
    })

})

//加载letter内容，即block的信息。
app.post("/loadLetter", function(req,res){
    var session = req.body.session;
    var letterid = req.body.letterid;
    // console.log(letterid)

    jwt.verify(session, secret_key, {algorithm: algorithmToken},function (err,decoded){
        if(err){//无效
            res.send({status: 403, message: "token过期或者无效"})
        }else{//有效
            let openid = decoded.data;

            var sql = "select blockid, blockType, orderNum from letter where openid=" + '"' + openid + '" and letterid=' + '"' + letterid + '"' + 'order by orderNum asc';
            // console.log(sql)
            mysql_pool.getConnection(function (err, connection){
                if(err){
                    connection.release();
                    throw err;
                }
                connection.query(sql, function (err, results, fields){
                    if(err) throw err;
                    for(var i in results){
                        // if(results[i].blockType == 0){
                        //     results[i]['content'] = readTextFile(openid, letterid, results[i].blockid)
                        // }
                        // 加载txt文件（文本块内容，非文本块的路径）
                        results[i]['content'] = readTextFile(openid, letterid, results[i].blockid)
                    }
                    console.log(results)
                    res.send({status: 200, data: results})
                })
                connection.release();
            })
        }
    });

})


// 启动监听
app.listen(9999, () => console.log("Example app listening on port 9999!"))
