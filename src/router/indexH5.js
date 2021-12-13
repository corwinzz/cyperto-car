import Vue from 'vue'
import VueRouter from 'vue-router'

// const originalPush = VueRouter.prototype.push
// VueRouter.prototype.push = function push(location) {
//    return originalPush.call(this, location).catch(err => err)
// }
Vue.use(VueRouter)

const routes = [{
    path: '/',
    redirect: '/home'
}, {
    path: '/home',
    name: 'Home',
    component: () => import('../AppHomeH5.vue')
}, {
    path: '/gallaryH5',
    name: 'gallaryH5',
    component: () => import('../views/GallaryH5/gallaryH5.vue')
}, {
    path: '/cardetail',
    name: 'cardetail',
    component: () => import('../views/GallaryH5/cardetail.vue')
}, {
    path: '/carousel',
    name: 'carousel',
    component: () => import('../views/GallaryH5/carousel.vue')
}]
const routerH5 = new VueRouter({
    mode: 'hash',
    base: process.env.BASE_URL,
    routes
})
routerH5.beforeEach((to, from, next) => {
    setTimeout(() => {
        next() // 所有路由延迟600ms添加动画
    }, 0)
})
export default routerH5
