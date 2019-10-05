const request = require('request');
const url="http://api.douguo.net/recipe/flatcatalogs?client=4&";
// const requestData="需要传输的数据";
request({
    url: url,
    method: "POST",
    json: true,
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
        "Connection":"Keep-Alive",
        "Host":"api.douguo.net",
    }
    // body: JSON.stringify(requestData)
}, function(error, response, body) {
    if (!error && response.statusCode == 200) {
        console.log(body) // 请求成功的处理逻辑
    }else{
        console.log(error)
    }
}); 