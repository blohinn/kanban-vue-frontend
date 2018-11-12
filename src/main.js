import Vue from 'vue'
import Cookies from 'js-cookie'

import router from './router'
import { store } from './store'
import { axiosBackendAuthorized, axiosBackendUnAuthorized } from '@/components/auth/utils.js'

import App from './App'

Vue.config.productionTip = false

Vue.prototype.$cookies = Cookies
Vue.prototype.$axiosBackendAuthorized = axiosBackendAuthorized
Vue.prototype.$axiosBackendUnAuthorized = axiosBackendUnAuthorized

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
