<template lang='pug'>
.apphome
    keep-alive
        router-view
    .svgVideo(v-show="route=='Home'")
        svg-font(fontName="VideoFill" class="svg_video" @click.native='toVideo')
        svg-font(fontName="VideoPlay" class="svg_videoplay" @click.native='toVideo')
    pageSlider(:pag='curpag')
    footer
        .foot_card( ref='footCard' @click='toHome2' v-show="route=='Home'")
            .slidcards
                img( src='/img/home_1.png' width='312' height='166' )
                .dots
                    .dot(style="background:yellow")
                    .dot()
                    .dot()
            .cardinfo
                .info_t1 Aut harum ut laborum. Esse fugiat voluptatibus odio.
                .info_email Founder@CarrotLabs
        menumap(@newPage='switchPage')
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
.svgVideo{
    position:absolute;
    width: 248px;
    height: 144px;
    right: 60px;
    top: 44px;
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

.dots{
    position:absolute;
    left: 140px;
    bottom: 20px;
    height: 10px;
    width: 40px;
    display: flex;
    justify-content: space-between;
    .dot{
        width: 8px;
        height: 8px;
        border: 1px solid yellow;
        border-radius: 4px;
    }
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
            .slidcards{
                width: 312px;
                height: 166px;
            }
            .cardinfo{
                width: 250px;
                height: 166px;
                background:url('/img/home_noise.png') repeat;
                background-size:100% 100%;
                padding:40px 26px ;
                .info_t1{
                    height: 48px;
                    line-height: 16px;
                    font-size: 14px;
                    letter-spacing: 0.5px;
                    font: DMSans_R;
                    color: white;
                    font-weight: bold;
                }
                .info_email{
                    font-size: 14px;
                    line-height: 24px;
                    margin-top: 20px;
                    font: DMSans_R;
                    color: white;
                }
            }
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
