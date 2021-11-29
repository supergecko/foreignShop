
// 配置路由相关的信息
import VueRouter from 'vue-router'
import Vue from 'vue'

import Shopping from '../view/shopmain.vue'
import FullPayment from '../view/fullPayment.vue'
import Login from '../view/Login/Login.vue'
import choiceLogin from '../view/Login/choiceLogin.vue'
import register from '../view/Login/register.vue'
import reset from '../view/Login/reset.vue'
import resetSuccess from '../view/Login/resetSuccess.vue'
import paymentPage from '../view/paymentPage.vue'
import shoppingCart from '../view/shoppingCart.vue'
import personalCenter from '../view/personalCenter.vue'
import integral from '../view/integral.vue'
import coupon from "../view/coupon.vue";
import success from "../view/success"
import news from "../view/new"
import dingdan from '../view/dingdan'
import jifen from "../view/jifen";
import like from "../view/like";
import feedback from "../view/Feedback";
import termsConditions from "../view/Terms & Conditions.vue"
import contactUs from "../view/Contact Us.vue"
import FAQ from "../view/FAQ.vue"
import giftCertificates from '../view/giftCertificates.vue'

// 1.通过Vue.use(插件), 安装插件
Vue.use(VueRouter)

// 2.创建VueRouter对象
const routes = [
  {
    path: '',
    // redirect重定向
    redirect: '/Shopping'
  },
  {
    name: 'Shopping',
    path: '/Shopping',
    component: Shopping,
    meta: {
      keepAlive: true
    }
  },
  {
    path: '/giftCertificates',
    name: 'giftCertificates',
    component: giftCertificates,
    meta: {
      keepAlive: true
    }
  },
  {
    path: '/FullPayment',
    component: FullPayment,
    meta: {
      keepAlive: true
    }
  },
  {
    path: '/Login',
    component: Login,
    meta: {
      keepAlive: false
    }

  },
  {
    path: '/choiceLogin',
    component: choiceLogin,
    meta: {
      keepAlive: false
    }
  },
  {
    path: '/register',
    component: register,
    meta: {
      keepAlive: false
    }
  },
  {
    path: '/reset',
    component: reset,
    meta: {
      keepAlive: false
    }
  },
  {
    path: '/resetSuccess',
    component: resetSuccess,
    meta: {
      keepAlive: false
    }
  },
  {
    path: '/paymentPage',
    component: paymentPage,
    meta: {
      keepAlive: true
    }
  },
  {
    path: '/shoppingCart',
    component: shoppingCart,
    meta: {
      keepAlive: true
    }
  },
  {
    path: '/personalCenter',
    component: personalCenter,
    meta: {
      keepAlive: true
    }
  },
  {
    path: '/integral',
    component: integral,
    meta: {
      keepAlive: true
    }
  },
  {
    path: '/coupon',
    component: coupon,
    meta: {
      keepAlive: true
    }
  },
  {
    path: '/success',
    component: success,
    meta: {
      keepAlive: true
    }
  },
  {
    path: '/new',
    component: news,
    meta: {
      keepAlive: true
    }
  },
  {
    path: '/dingdan',
    component: dingdan,
    meta: {
      keepAlive: true
    }
  },
  {
    path: '/jifen',
    component: jifen,
    meta: {
      keepAlive: true
    }
  },
  {
    path: '/like',
    component: like,
    meta: {
      keepAlive: true
    }
  },
  {
    path: '/feedback',
    component: feedback,
    meta: {
      keepAlive: true
    }
  },
  {
    path: '/termsConditions',
    component: termsConditions,
    meta: {
      keepAlive: true
    }
  },
  {
    path: '/contactUs',
    component: contactUs,
    meta: {
      keepAlive: true
    }
  },
  {
    path: '/FAQ',
    component: FAQ,
    meta: {
      keepAlive: true
    }
  }
]
const router = new VueRouter({
  // 配置路由和组件之间的应用关系
  routes,
  mode: 'history',
  linkActiveClass: 'active'
})

// 3.将router对象传入到Vue实例
export default router