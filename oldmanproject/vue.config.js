// 文件里面添加这行require代码
const webpack = require('webpack')
// 再添加这两行代码
module.exports = {
  configureWebpack: {
    plugins: [
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        jquery: 'jquery',
        'window.jQuery': 'jquery'
      })
    ]
  },
  devServer: {

  }
}
