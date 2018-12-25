var WechatAPI = require('wechat-api')
var api = new WechatAPI('wx1d777d498205d353','a3d3d0e550e362ee3174a5e6b89fb187')

var templateMenu = {
    button:[
        {
            type: 'click',
            name: '今日歌曲',
            key: 'V1001_TODAY_MUSIC'
        },
        {
            name: '菜单',
            sub_button: [
                {
                    type: 'view',
                    name: '博客',
                    url: 'http://www.macdull.top'
                },
                {
                    type: 'view',
                    name: '搜索',
                    url: 'http://www.soso.com/',
                },
                {
                    type: 'click',
                    name: '赞一下我们',
                    key: 'V1001_GOOD'
                }
            ]
        }
    ]
}

api.createMenu(templateMenu, () => {
    console.log('create menu successed')
})