//课程评论 参数： id:课程id 
module.exports = (query, request) => {
    const data = {
        client:4,
        cs:`[
            {"n":"sharetext","v":"20160122"},
            {"n":"userMenuTutorial"},
            {"n":"qrcontent"},
            {},
            {"n":"essentialRecipeGuideline"},
            {"n":"schemeblacklist"},
            {"n":"coursetags"},
            {"n":"family","v":"2018041913"},
            {"n":"profession"},
            {"n":"subscription","v":"20171107"},
            {"n":"countrycode"},
            {"n":"note"},
            {"n":"user_channels"},
            {"n":"stickers"}
        ]`
       
    }
    return request(
        'POST',
        'http://api.douguo.net/app/c ',
        data,
        {cookie: query.cookie, proxy: query.proxy}
    )
}