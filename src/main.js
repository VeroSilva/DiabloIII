import Vue from 'vue'

import './plugins/bootstrapVue'
import './plugins/fontAwesome'

import './directives'

import App from './App.vue'
import router from './router'
import store from './store'

import './assets/css/main.styl'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  methods: {
    init () {
      store.dispatch('oauth/getToken')
    }
  },
  created () {
    this.init()
  },
  render: h => h(App)
}).$mount('#app')
