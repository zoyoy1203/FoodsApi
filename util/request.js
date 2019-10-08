const request = require('request');
const queryString = require('querystring')
const zlib = require('zlib')

const createRequest = (method, url, data, options) => {
    return new Promise((resolve, reject) => {   //两个参数 resolve 异步执行成功的回调函数,reject异步执行失败的回调函数

        const answer = { status: 500, body: {}, cookie: []}
        const settings = {
            method:method,
            url:url,
            headers: {
                "client":"4",
                "version":"6946.2",
                "device":"OPPO R11",
                "sdk":"22,5.1.1",
                "imei":"866174010342257",
                "channel":"baidu",
                "resolution":"1600*900",
                "dpi":"2.0",
                "brand":"OPPO",
                "scale":"2.0",
                "timezone":"28800",
                "language":"zh",
                "cns":"3",
                "carrier":"CHINA+MOBILE",
                "User-Agent":"Mozilla/5.0 (Linux; Android 5.1.1; OPPO R11 Build/NMF26X; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/74.0.3729.136 Mobile Safari/537.36",
                "act-code":"6140bc40c82c4b619eab352ff0abccf6",
                "act-timestamp":"1570081130",
                "uuid":"58692cb6-9002-44cf-addb-2177aa68a0df",
                "battery-level":"1.00",
                "battery-state":"3",
                "newbie":"1",
                "reach":"10000",
                "Content-Type":"application/x-www-form-urlencoded; charset=utf-8",
                // "Accept-Encoding":"gzip, deflate",
                "Connection":"Keep-Alive",
                "Host":"api.douguo.net",
            },
            body: queryString.stringify(data)  //stringify这个方法是将一个对象序列化成一个字符串 body：需要传送的数据
        }
    
        request(
            settings,
            (err, res, body) => {
                if(err){
                    answer.status = 502;
                    answer.body = { code: 502, msg: err.stack};
                    reject(answer);
                } else {
                    answer.body = JSON.parse(body)
                    answer.status = answer.body.code || res.statusCode
                
                    answer.status =
                    100 < answer.status && answer.status < 600 ? answer.status : 400
                    if (answer.status == 200) resolve(answer)
                    else reject(answer)
                }
            }
        )
    })


}
module.exports = createRequest