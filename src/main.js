import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import ViewUI from 'view-design'
import 'view-design/dist/styles/iview.css'
import './common/style/common.less'
import 'reset-css'
import AsyncComputed from 'vue-async-computed'

Vue.config.productionTip = false
Vue.use(ViewUI)
Vue.use(AsyncComputed)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
