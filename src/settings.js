    // let baseUrl = "";   //这里是一个默认的url，可以没有
// switch (process.env.VUE_APP_TITLE) {
//     case 'development':
//         baseUrl = ""  //这里是本地的请求url
//         break
//     case 'alpha':   // 注意这里的名字要和步骤二中设置的环境名字对应起来
//         baseUrl = ""  //这里是测试环境中的url
//         break
//     case 'online':
//         baseUrl = ""   //生产环境url
//         break
// }
// const baseUrl = "http://shop.xlhack.cn/"
const baseUrl = "http://106.52.200.225"
const imgBaseUrl = baseUrl + ""
const token = ""

module.exports = {
    title: '购物商场',

    /**
     * @type {boolean} true | false
     * @description Whether show the settings right-panel
     */
    showSettings: true,
    /**
     * @type {boolean} true | false
     * @description Whether need tagsView
     */
    tagsView: false,

    /**
     * @type {boolean} true | false
     * @description Whether fix the header
     */
    fixedHeader: true,

    /**
     * @type {boolean} true | false
     * @description Whether show the logo in sidebar
     */
    sidebarLogo: false,

    /**
     * @type {string | array} 'production' | ['production', 'development']
     * @description Need show err logs component.
     * The default is only used in the production env
     * If you want to also use it in dev, you can pass ['production', 'development']
     */
    errorLog: 'production',
    baseUrl: baseUrl,
    imgBaseUrl: imgBaseUrl,
	token: token,
}
