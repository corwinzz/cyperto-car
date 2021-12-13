<template lang='pug'>
.appH5
    HomeH5
    template(v-for="itm,idx in backimgs")
        .bkimg(:style="imgStyle(itm)")
            img(:src='itm.url' width="100%" height="100%")
    //- img(src='/img/h5-01.png' width="100%" :height="hh(750,1226)")
    //- img(src='/img/h5-02.png' width="100%" :height="hh(790,2840)")
    //- img(src='/img/h5-03.png' width="100%" :height="hh(750,724)")
    hypelinkH5
</template>

<script>
import hypelinkH5 from './views/hypelinkH5.vue'
import HomeH5 from './views/Home/HomeH5.vue'
export default {
    name: 'appH5',
    components: {
        HomeH5, hypelinkH5
    },
    data() {
        return {
            backimgs: [{
                url: '/img/h5-01.png',
                wid: 750,
                hei: 1126
            }, {
                url: '/img/h5-02.png',
                wid: 790,
                hei: 2840
            }, {
                url: '/img/h5-03.png',
                wid: 750,
                hei: 724
            }]
        }
    },
    mounted() {
    },
    computed: {
        route() {
            return this.$route.name
        },
        wid() {
            return window.innerWidth
        }
    },
    methods: {
        imgStyle(itm) {
            return {
                height: `${this.hh(itm.wid, itm.hei)}px`
            }
        },
        hh(w, h) {
            let ratio = h / w
            return Math.floor(this.wid * ratio)
        }
    }
}
</script>
<style lang="less" scoped>
@import url('./common/style/common.less');
.appH5{
    width: 100%;
    background-color: #000;
}
.bkimg{
    width: 100%;
}
</style>
