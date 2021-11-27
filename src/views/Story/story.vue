<template lang='pug'>
.story(ref='story')
    .blurWindow(v-show='wind==1' @click='wind=2' ref='blurWindow')
        .title INTRODUCTION
        .txt Inspired by Ready Player One, CyberCar is a composable NFT racing game with various rules and track.
        .line
    .blurWindow(v-show="wind==2" class="page2"  @click='wind=1')
        .inner
            .avater
            .txt “CaLan saves us a huge amount of time.
            .txt It’s helping us achieve the most pixel perfect & fast websites,
            .txt thanks to full control over asset export.”
            .line
            .nam Linh Nguyen
            .foot Founder at CyberCar
</template>

<script>
import hypelink from '../hypelink.vue'
export default {
    name: 'story',
    components: {
        hypelink
    },
    data() {
        return {
            page: 'home',
            wind: 1
        }
    },
    mounted() {
        this.toggle()
    },
    methods: {
        toggle() {
            let dom = this.$refs.story
            dom.classList.toggle('anm_bk_show', true)
        }
    },
    computed: {
        pageInf() {
            return this.$store.getters['animpage/getPageInf']
        }
    },
    watch: {
        pageInf: {
            handler(newval, oldval) {
                if (newval.from === 'story') {
                    let dom = this.$refs.blurWindow
                    dom.classList.toggle('anm_show', false)
                    dom.classList.toggle('anm_hide', true)
                }
            },
            deep: true
        },
        $route(to, from) {
            if (to.name === 'story') {
                let dom = this.$refs.blurWindow
                dom.classList.toggle('anm_hide', false)
                dom.classList.toggle('anm_show', true)
                this.toggle()
            }
        }
    }
}
</script>
<style lang="less" scoped>
.anm_hide{
    animation: anm1 500ms reverse;
}
.anm_show{
    animation: anm 300ms ;
}
@keyframes anm {
    0% {
        left: 180px;
        width: 320px;
        top: 240px;
        opacity: 0;
    }
    80% {
        left: 80px;
        width: 460px;
        top:320px;
        opacity: 1;
    }
    100% {
        left: 80px;
        width: 460px;
        top:320px;
        opacity: 1;
    }
}
@keyframes anm1 {
    0% {
        left: 180px;
        width: 320px;
        top: 240px;
        opacity: 0;
    }
    80% {
        left: 80px;
        width: 460px;
        top:320px;
        opacity: 1;
    }
    100% {
        left: 80px;
        width: 460px;
        top:320px;
        opacity: 1;
    }
}
.story{
    height: 100%;
    width: 100%;
    background: url('/img/b_story1.png') no-repeat center fixed;
    background-size:100% 110%;
}
.blurWindow{
    z-index: 2;
    position: relative;
    left: 80px;
    top: 320px;
    color: #fff;
    font-size: 15px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    width: 460px;
    height: 190px;
    padding: 20px;
    .title{
        height: 48px;
        line-height: 48px;
        font-family: Mon;
        font-size: 40px;
        font-weight: 400;
        margin-bottom:20px;
    }
    .txt{
        height: 60px;
        line-height: 20px;
        font-size: 16px;
        font-family:DMSans_R;
        letter-spacing: 1px;
    }
    .line{
        margin-top:20px ;
        width:50px ;
        height: 0px;
        border-top:1px solid #EA3344;
    }
}
.blurWindow.page2{
    width: 1110px;
    height: 467px;
    left: calc(50% - 555px);
    top: 200px;
    .inner{
        height: 353px;
        width: 730px;
        margin: 55px auto;
        display: flex;
        flex-direction: column;
        .avater{
            margin: auto;
            height: 115px;
            width: 115px;
            border-radius: 57px;
            background-image: url('/img/ppp.png');
            background-size:100% 110%;
        }
        .txt{
            height: 34px;
            line-height: 34px;
            font-size: 24px;
            font-family: DMSans_R;
            text-align: center;
        }
        .line{
            margin:30px auto;
            width:52px ;
            height: 0px;
            border-top:1px solid #EA3344;
        }
        .nam{
            height: 28px;
            line-height: 28px;
            font-size: 18px;
            font-family: Mon;
            text-align: center;
            letter-spacing: 1.1px;
            font-weight: 400;
        }
        .foot{
            margin-top: 8px;
            font-family: DMSans_R;
            height: 24px;
            font-size: 14px;
            text-align: center;
            font-weight: 400;
            letter-spacing: -0.3px;
        }
    }
}
.blurWindow::before {
    background: url('/img/b_story1.png') no-repeat center fixed;
    background-size:100% 110%;
    content: '';
    display: block;
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: -10px;
    filter: blur(5px);
}
</style>
