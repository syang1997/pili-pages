import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
import './assets/css/global.css'
import './assets/css/index.css'
import './assets/css/common.css'
import './assets/css/reset.css'
import './assets/fonts/iconfont.css'
import VueDPlayer from '../src/index'
import axios from 'axios'
import VueSession from 'vue-session'
import VueCookies from 'vue-cookies'

axios.defaults.withCredentials = true;// 允许跨域携带cookie
Vue.use(VueCookies)
Vue.use(VueDPlayer)
Vue.use(VueSession)
Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

