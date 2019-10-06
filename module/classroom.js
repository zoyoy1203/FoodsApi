//课堂首页
module.exports = (query, request) => {
    const data = {
        client:4,
        or:0
    }
    return request(
        'POST',
        'http://api.douguo.net/course/getcourses/0/20',
        data,
        {cookie: query.cookie, proxy: query.proxy}
    )
}