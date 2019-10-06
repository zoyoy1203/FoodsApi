//商城首页
module.exports = (query, request) => {
    const data = {
        client: 4,
    };
    return request(
        'POST',
        'http://api.douguo.net/extend/indexhv1/v1',
        data,
        {cookie: query.cookie, proxy: query.proxy}
    )
}