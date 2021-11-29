import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import router from './router/index'
import store from './store/index'
import less from 'less'
import axios from 'axios'
import VueAxios from "vue-axios";
Vue.use(VueAxios, axios)
Vue.use(less)
Vue.use(ElementUI)
axios.defaults.baseURL= '/apis'
// console.log(axios.defaults.baseURL)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')

router.beforeEach((to, from, next) => {
  // chrome
  document.body.scrollTop = 0
  // firefox
  document.documentElement.scrollTop = 0
  // safari
  window.pageYOffset = 0
  next()
})
