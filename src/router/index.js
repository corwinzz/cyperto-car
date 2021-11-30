import Vue from 'vue'
import VueRouter from 'vue-router'
const originalReplace = VueRouter.prototype.replace
VueRouter.prototype.replace = function replace(location) {
    return originalReplace.call(this, location).catch(err => err)
}
Vue.use(VueRouter)

const routes = [{
    path: '/',
    redirect: '/home'
}, {
    path: '/home2',
    name: 'home2',
    component: () => import('../views/Home/home2.vue')
}, {
    path: '/home3',
    name: 'home3',
    component: () => import('../views/Home/home3.vue')
}, {
    path: '/AppHome',
    name: 'AppHome',
    component: () => import('../AppHome.vue'),
    children: [{
        path: '/home',
        name: 'Home',
        component: () => import('../views/Home/Home.vue')
    }, {
        path: '/story',
        name: 'story',
        component: () => import('../views/Story/story.vue')
    }, {
        path: '/garage',
        name: 'garage',
        component: () => import('../views/Garage/garage.vue')
    }, {
        path: '/partners',
        name: 'partners',
        component: () => import('../views/Partners/partners.vue')
    }, {
        path: '/roadmap',
        name: 'roadmap',
        component: () => import('../views/Roadmap/roadmap.vue')
    }]
}, {
    path: '/exhibition',
    name: 'exhibition',
    component: () => import('../AppCards.vue'),
    children: [{
        path: '/gallary',
        name: 'gallary',
        component: () => import('../views/Gallary/gallary.vue')
    }, {
        path: '/cardetail',
        name: 'cardetail',
        component: () => import('../views/Gallary/cardetail.vue')
    }, {
        path: '/carousel',
        name: 'carousel',
        component: () => import('../views/Gallary/carousel.vue')
    }]
}]

const router = new VueRouter({
    mode: 'hash',
    base: process.env.BASE_URL,
    routes
})
router.beforeEach((to, from, next) => {
    setTimeout(() => {
        next() // 所有路由延迟3s添加动画
    }, 300)
})
export default router
