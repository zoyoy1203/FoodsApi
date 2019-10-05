//菜肴分类
module.exports = (query, request) => {
    return request(
        'POST',
        `http://api.douguo.net/recipe/flatcatalogs?client=${query.client}&_vs=${query._vs}`,
        {},
        {crypto: 'gzip', cookie: query.cookie, proxy: query.proxy}
    )
}