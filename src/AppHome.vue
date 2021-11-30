<template lang='pug'>
.apphome
    keep-alive
        router-view
    .svgVideo(v-show="route=='Home'")
        svg-font(fontName="VideoFill" class="svg_video" @click.native='toVideo')
        svg-font(fontName="VideoPlay" class="svg_videoplay" @click.native='toVideo')
    footer
        .foot_card( ref='footCard' @click='toHome2' v-show="route=='Home'")
            slidcard
            .cardinfo
                .info_t1 Aut harum ut laborum. Esse fugiat voluptatibus odio.
                .info_email Founder@CarrotLabs
        hypelink
</template>

<script>
import pageSlider from './views/pageSlider.vue'
import menumap from './views/menumap.vue'
import hypelink from './views/hypelink.vue'
export default {
    name: 'apphome',
    components: {
        hypelink, menumap, pageSlider
    },
    data() {
        return {
            curpag: 0
        }
    },
    mounted() {
    },
    computed: {
        route() {
            return this.$route.name
        }
    },
    methods: {
        toHome2() {
            this.$router.push('/home2')
        },
        toVideo() {
            this.$router.push('/home3')
        },
        switchPage(page, nam) {
            let dom = this.$refs.footCard

            if (page === 0) {
                dom.setAttribute('style', 'display:show')
                dom.classList.toggle('fadeout', false)
                dom.classList.toggle('fadein', true)
                dom.style.display = 'show'
            } else {
                dom.classList.toggle('fadeout', true)
                dom.classList.toggle('fadein', false)
                setTimeout(() => {
                    dom.style.display = 'none'
                }, 280)
            }
            this.curpag = page
        }
    }
}
</script>
<style lang="less" scoped>
@import url('./common/style/common.less');
.svgVideo{
    position:absolute;
    width: 248px;
    height: 144px;
    left: 30px;
    top: 260px;
}
.svg_video{
    width: 248px;
    height: 144px;
}
.svg_videoplay{
    position:absolute;
    width:40px;
    height: 40px;
    top: 52px;
    left: 104px;
    color: white;
}
.apphome{
    margin: auto;
    width: 100%;
    height: 100%;
    footer{
        width: 100%;
        position: absolute;
        bottom: 0px;
        display: flex;
        align-items: flex-end;
        justify-content: space-between;
        .foot_card{
            height: 168px;
            width: 566px;
            display: flex;
            overflow: hidden;
        }
    }
}
.fadeout{
    animation: fadeout 300ms;
}
@keyframes fadeout {
    0% {width:566px ;
    opacity: 1;}
    100% {width: 0px;
    opacity: 0;}
}
.fadein{
    animation: fadein 500ms;
}
@keyframes fadein {
    0% {
        width: 0px;
        opacity: 0;
    }
    100% {
        display: show;
        width:566px ;
        opacity: 1;
    }
}
</style>
