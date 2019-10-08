//获取电子书数据
module.exports = (query, request) => {
    const data = {
        client:4,
        or:0,
        type:2
    }
    return request(
        'POST',
        'http://api.douguo.net/course/getcourses/0/20',
        data,
        {cookie: query.cookie, proxy: query.proxy}
    )
}