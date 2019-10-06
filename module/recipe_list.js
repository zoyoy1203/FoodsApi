//菜肴列表
module.exports = (query, request) => {
    const data = {
        client: 4,
        keyword: query.keyword ,
        order: 0,
        type: 0,
    };
    return request(
        'POST',
        `http://api.douguo.net/recipe/v2/search/0/20`,
        data,
        {cookie: query.cookie, proxy: query.proxy}
    )
}