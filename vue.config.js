// 这个引入的配置 主要是用来提示语法的
const { defineConfig } = require('@vue/cli-service')
const path = require('path');
module.exports = defineConfig({
  // babel是否转译node_modules  默认是不转译  true需要转译
  // 特点  安全性高，但打包耗时长
  transpileDependencies: true,

  // 关闭eslint语法检查  （只管打包和开启服务器的时候，日常提示语法是eslint插件）
  lintOnSave: false,

  // 写原生webpack语法的对象
  configureWebpack: {
    // 开启服务器设置
    devServer: {
      // 设置开启服务器自动打开
      open: true,
      //设置端口
      port: 3000,
      // 设置域名/ip地址127.0.0.1
      host: 'localhost',
    },
    resolve: {
      alias: {
        '#': path.join(__dirname, 'src/components')
      }
    }
  },

})
