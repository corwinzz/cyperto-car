<template lang='pug'>
.apphome
    keep-alive
        router-view
    .svgVideo(v-show="route=='Home'")
        svg-font(fontName="VideoFill" class="svg_video" @click.native='toVideo')
        svg-font(fontName="VideoPlay" class="svg_videoplay" @click.native='toVideo')
    pageSlider
    footer
        .foot_card(ref='footCard' @click='toHome2' :style="footcardStyle()")
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
import { mapGetters } from 'vuex'
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
    watch: {
        getPageNo(pageNo) {
            this.switchPage(pageNo)
        }
    },
    computed: {
        ...mapGetters('animpage', ['getPageNo']),
        route() {
            return this.$route.name
        }
    },
    methods: {
        footcardStyle() {
            console.log(this.route === 'Home' && this.getPageNo === 0)
            if (this.route === 'Home' && this.getPageNo === 0) {
                return { width: '566px' }
            } else {
                return { width: '0px' }
            }
        },
        toHome2() {
            this.$router.push('/home2')
        },
        toVideo() {
            this.$router.push('/home3')
        },
        switchPage(page, nam) {

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
            transition: width 600ms ease;
            .slidcards{
                width: 312px;
                height: 166px;
                position:relative;
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

</style>
