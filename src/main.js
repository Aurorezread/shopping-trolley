import Vue from 'vue'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.css" // 引入第三方包里的某个css文件
import axios from 'axios'
// 定义url基础目录
axios.defaults.baseURL = "https://applet-base-api-t.itheima.net"
axios.defaults.timeout = 3000
Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
