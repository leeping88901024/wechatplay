var WechatAPI = require('wechat-api')
var api = new WechatAPI('wx1d777d498205d353','a3d3d0e550e362ee3174a5e6b89fb187')

api.removeMenu((err, result) => {
    if (err) {
        console.log(err)
        return
    }
    console.log(result)
})