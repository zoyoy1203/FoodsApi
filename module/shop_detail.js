//商城商品详情 参数： id:商品id 
module.exports = (query, request) => {
    const data = {
        client:4,
        id:query.id,
        pr:0,
        cid:0,
        dt:0,
        _vs:6000,
    }
    return request(
        'POST',
        'http://api.douguo.net/products/detail/',
        data,
        {cookie: query.cookie, proxy: query.proxy}
    )
}