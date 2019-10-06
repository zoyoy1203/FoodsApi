//菜肴详细内容 包含制作过程，评论等
module.exports = (query, request) => {
    const data = {
        "client": "4",
        "author_id": "0",
        "_vs": "11102",
        // "_ext": '{"query":{"kw":'+query.keyword+',"src":"11102","idx":"1","type":"13","id":'+query.id+'}}',
    }
    return request(
        'POST',
        `http://api.douguo.net/recipe/detail/${query.id}`,
        data,
        { cookie: query.cookie, proxy: query.proxy}
    )
}