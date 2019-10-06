//商城类别详细列表：id:类别id   or: 综合0 销量1 价格升序2 价格降序3 新品4
module.exports = (query, request) => {
    const data = {
        client:4,
        id: query.id,
        _vs:2502,
        s:1,
        or:query.or || 0,
    }
    return request(
        'POST',
        'http://api.douguo.net/ptag/products/0/30 ',
        data,
        {cookie: query.cookie, proxy: query.proxy}
    )
}