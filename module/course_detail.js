//课程详情 参数： id:课程id 
module.exports = (query, request) => {
    const data = {
        client:4,
        id:query.id,
        _vs:5105

    }
    return request(
        'POST',
        'http://api.douguo.net/course/coursedetail',
        data,
        {cookie: query.cookie, proxy: query.proxy}
    )
}