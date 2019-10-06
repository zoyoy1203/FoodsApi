const fs = require('fs');
const path = require('path');
const express = require('express');
const request = require('./util/request')
const bodyParser = require('body-parser')

const app = express();

// body parser
// app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({extended: false}))

// app.all('*', function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", req.headers.origin); //需要显示设置来源
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
//     res.header("Access-Control-Allow-Credentials",true); //带cookies7     
//     // res.header("Content-Type", "application/json;charset=utf-8");
//     next();
// });



// 将module里的文件循环读出
fs.readdirSync(path.join(__dirname, 'module')).reverse().forEach(file => {
    if(!(/\.js$/i.test(file))) return;   //正则表达式判断文件名是否符合
    //拼接出url
    let route = '/' + file.replace(/\.js$/i, '').replace(/_/g, '/');
    //将module里的文件内容赋导出
    let question = require(path.join(__dirname, 'module', file));

    console.log('route='+ route);
    console.log('question='+ question);

    app.use(route, (req, res) => {
        //Object.assign()对象合并
        let query = Object.assign({}, req.query, req.body, {cookie: req.cookies});
        console.log(query);
        question(query, request)
        .then(answer => {
            res.status(answer.status).send(answer.body)
        })
        .catch(answer => {
            res.status(answer.status).send(answer.body)
        })
    })

})




const port = process.env.PORT || 8091;
app.server = app.listen(port, () => {
    console.log(`server running http://localhost:${port}`)
})

module.exports = app