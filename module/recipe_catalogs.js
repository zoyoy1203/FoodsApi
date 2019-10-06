//菜肴目录
module.exports = (query, request) => {
    const data = {
        "client":"4",
        "_vs":"2305",
    }
    return request(
        'POST',
        'http://api.douguo.net/recipe/flatcatalogs',
        data,
        {cookie: query.cookie, proxy: query.proxy}
    )
}