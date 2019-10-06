//豆果美食首页
module.exports = (query, request) => {
    const data = {
        client:4,
        direction:5,
        request_count:1
    };
    return request(
        'POST',
        'http://api.douguo.net/personalized/home',
        data,
        {cookie: query.cookie, proxy: query.proxy}
    )
}