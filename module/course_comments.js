//课程评论 参数： id:课程id 
module.exports = (query, request) => {
    query.offset = query.offset || 0; //默认偏移0
    query.limit = query.limit || 20; //默认返回20
    const data = {
        client:4,
        id:query.id
    }
    return request(
        'POST',
        `http://api.douguo.net/course/getcomments/${query.offset}/${query.limit}`,
        data,
        {cookie: query.cookie, proxy: query.proxy}
    )
}