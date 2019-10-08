//获取课程推荐列表 id：今日秒杀4 热门推荐3 新课上线1  热门推荐可传offset,limit参数获取更多。
module.exports = (query, request) => {
    query.offset = query.offset || 0; //默认偏移0
    query.limit = query.limit || 20; //默认返回20
    const data = {
        client:4,
        id:query.id
    }
    return request(
        'POST',
        `http://api.douguo.net/course/recommendcourses/${query.offset}/${query.limit}`,
        data,
        {cookie: query.cookie, proxy: query.proxy}
    )
}