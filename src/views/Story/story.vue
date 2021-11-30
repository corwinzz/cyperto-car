<template lang='pug'>
.story(ref='story')
    .blurWindow(@click='wind=2' ref='blurWindow')
        .title INTRODUCTION
        .txt Inspired by Ready Player One, CyberCar is a composable NFT racing game with various rules and track.
        .line
        .avater
        .txt2 “CaLan saves us a huge amount of time. It’s helping us achieve the most pixel perfect & fast websites, thanks to full control over asset export.”
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
            wind: 2
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
@import url('../../common/style/common.less');
.story{
    height: calc(100% - 90px);
    width: 100%;
    background: url('/img/b_story1.png') no-repeat center fixed;
    background-size:100% 100%;
}
.blurWindow{
    z-index: 2;
    position: relative;
    left: 30px;
    top: 80px;
    color: #fff;
    font-size: 15px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    width: calc( 100% - 60px );
    height: 473px;
    padding: 10px;
    text-align: center;
    .f_d();
    .title{
        height: 24px;
        .f24();
        .f_mon();
        margin-bottom:20px;
    }
    .txt{
        .f14();
        line-height: 20px;
        letter-spacing: 1px;
    }
    .avater{
        margin: auto;
        height: 115px;
        width: 115px;
        border-radius: 57px;
        background-image: url('/img/ppp.png');
        background-size:100% 100%;
    }
    .txt2{
        height: 80px;
        .f20_14();
        margin-bottom:20px;
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
.blurWindow::before {
    background: url('/img/b_story1.png') no-repeat center fixed;
    background-size:100% 100%;
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
