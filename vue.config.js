const path = require('path')
module.exports = {
    pluginOptions: {
        'style-resources-loader': {
            preProcessor: 'less',
            patterns: [path.resolve(__dirname, "/src/assets/style.css")] // 引入全局样式变量
        }
    },
    lintOnSave:false
}