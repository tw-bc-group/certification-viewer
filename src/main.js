import Vue from 'vue'
import App from './App.vue'
import router from './router'
import InfiniteLoading from 'vue-infinite-loading'
import AV from 'leancloud-storage'

AV.init({
  appId: process.env.VUE_APP_LC_APP_ID,
  appKey: process.env.VUE_APP_LC_APP_KEY
})

console.log('LC_APP_ID:', process.env.VUE_APP_LC_APP_ID)

Vue.use(InfiniteLoading, {
  props: {
    spinner: 'bubbles'
  }
})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
