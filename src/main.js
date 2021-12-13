import Vue from 'vue'
import App from './App.vue'
import AppH5 from './AppH5.vue'
import router from './router/index'
import routerH5 from './router/indexH5'
import store from './store/index'
import ViewUI from 'view-design'
import 'view-design/dist/styles/iview.css'
import './common/style/common.less'
import 'reset-css'
import AsyncComputed from 'vue-async-computed'
import './components/svg/SvgIcon/' // svgIcon 图标
import './components/svg/SvgFont/index' // svgIcon 图标
Vue.config.productionTip = false
Vue.use(ViewUI)
Vue.use(AsyncComputed)
if (window.innerWidth < 800) {
  new Vue({
    router: routerH5,
    store,
    render: h => h(AppH5)
  }).$mount('#app')
} else {
  new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount('#app')
}
