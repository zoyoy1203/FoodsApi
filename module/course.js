//不传参：课堂首页  默认offset=0,limit=20 (获取首页今日秒杀，热门推荐，新课上线，电子书，全部课程的栏目数据)
//传参方式1（获取课程数据）：offset:偏移数量，limit:返回数量  （不传参默认返回首页全部课程栏目的20条数据，当首页滚动到底部时，需要加载显示offset(20)条开始的后limit条课程数据）
module.exports = (query, request) => {
    query.offset = query.offset || 0; //默认偏移0
    query.limit = query.limit || 20; //默认返回20
    const data = {
        client:4,
        or:0,
    }
    return request(
        'POST',
        `http://api.douguo.net/course/getcourses/${query.offset}/${query.limit}`,
        data,
        {cookie: query.cookie, proxy: query.proxy}
    )
}