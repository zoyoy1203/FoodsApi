//课堂类别下的列表 tags：栏目类别tags  or: 新上线0  综合1 默认0
module.exports = (query, request) => {
    query.or = query.or || 0;
    const data = {
        client:4,
        tag_categories:`[{"id":"1","tags":[`+query.tags+`]}]`,
        or:query.or
    };
    return request(
        'POST',
        'http://api.douguo.net/course/getcourses/0/20',
        data,
        {cookie: query.cookie, proxy: query.proxy}
    )
}