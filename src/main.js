import Vue from 'vue'
import App from './App.vue'
import router from './router'
import '@/assets/css/reset.css'
import axios from 'axios'


Vue.config.productionTip = false

// 组件
import HeaderNav from '@/components/HeaderNav.vue'
Vue.component('HeaderNav', HeaderNav)
import Footer from '../src/components/Footer.vue'
Vue.component('Footer', Footer)

// 插件
Vue.prototype.axios = axios

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
