<template lang='pug'>
div(id="app")
    .main
        keep-alive
            router-view(:isWallet='isWallet')
    header
        img.mark(src='img/logo.gif' width='223' height='30' style="margin-left:80px;margin-top:34px")
        .btns
            div(v-show='isHomePage')
                .routermain(style="width:173px" @click="linkTo('gallary')" )
                    btnStart(txt="Start Game_" bkCol='#EA3344')
            template(v-show='isGallary')
                .routermain(style="width:173px" @click="showWallet" v-show="route=='gallary'")
                    btnStart(txt="Connect" bkCol='#EA3344')
                .routermain(style="width:173px" @click="linkTo('carousel')" v-show="!route=='gallary'")
                    btnStart(txt="My Car" bkCol='#EF925D')
                .routermain(style="width:173px" @click="linkTo('Home')" v-show='isGallary')
                    btnStart(txt="Back to Home" bkCol='#5D5FEF')
    wallet(v-show="route=='gallary' && isWallet" @onClose="isWallet=false")
</template>

<script>
import wallet from './views/pop/wallet.vue'
import btnStart from './components/BtnStart/btnstart.vue'
export default {
    name: 'App',
    components: {
        btnStart, wallet
    },
    data() {
        return {
            isWallet: false,
            btns: [{
                linkto: 'Home',
                color: 'blue',
                txt: 'Back to Home'
            }]
        }
    },
    computed: {
        route() {
            return this.$route.name
        },
        isHome() {
            return this.route === 'Home'
        },
        isHomePage() {
            return ['story', 'garage', 'partners', 'roadmap'].indexOf(this.route) > -1
        },
        isGallary() {
            return ['gallary', 'cardetail', 'carousel'].indexOf(this.route) > -1
        }
    },
    methods: {
        linkTo(page) {
            this.$router.push(page)
        },
        showWallet() {
            this.isWallet = true
        }
    }
}
</script>

<style lang="less" scoped>
#app{
    position: relative;
    margin: 0 auto;
    // position: absolute;
    // top: 50%;
    // left: 50%;
    // margin-left: -720px;
    // margin-top: -384px;
    width: 1440px;
    height: 768px;
    background: black;
    // text-align: center;
    header{
        z-index: 99;
        position: absolute;
        top: 0px;
        width: 100%;
        height: 90px;
        background-color: transparent;
        opacity: 0.8;
        display: flex;
        justify-content: space-between;
        .btns{
            margin-top: 23px;
            margin-right: 40px;
            display: flex;
            .routermain{
                margin-left:20px;
            }
        }
    }
    .main{
        margin: auto;
        width: 100%;
        height: 100%;
    }
}
</style>
