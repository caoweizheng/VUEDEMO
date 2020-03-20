// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'
import { Lazyload, Toast } from "vant";
import lodash from "lodash";
import api from "./api"
import store from './store'

import '@/style/common.scss'

Vue.config.productionTip = false
Vue.use(api)
Vue.use(Lazyload)
Vue.use(Vuex)
// Vue.component('common-nav', '@/components/Nav')s

Vue.prototype.$toast = Toast
Vue.prototype.$_ = lodash

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
