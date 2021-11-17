import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import ViewUI from 'view-design'
import 'view-design/dist/styles/iview.css'
import './common/style/common.less'
import 'reset-css'
import AsyncComputed from 'vue-async-computed'
import './components/svg/SvgIcon/' // svgIcon 图标
import './components/svg/SvgFont/' // svgIcon 图标
Vue.config.productionTip = false
Vue.use(ViewUI)
Vue.use(AsyncComputed)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
