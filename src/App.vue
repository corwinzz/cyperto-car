<template lang='pug'>
div(id="app")
    .main
        keep-alive
            transition(name="fade")
                router-view(:isWallet='isWallet')
    header
        img.mark(src='img/logo.gif' width='223' height='30' style="margin-left:80px;margin-top:34px")
        .btns
            div(v-show='isHomePage')
                .routermain(style="width:173px" @click="linkTo('gallary')" )
                    btnStart(txt="Start Game_" bkCol='#EA3344')
            template(v-show='isGallary')
                .routermain(style="width:173px" @click="showWallet()" v-if="isGallary && !account")
                    btnStart(txt="Connect" bkCol='#EA3344')
                .routermain(style="width:173px" @click="showWallet()" v-if="isGallary && account")
                    btnStart(:txt="account.substring(0,10) + '...'" bkCol='#EA3344')
                .routermain(style="width:173px" @click="linkTo('carousel')" v-show="isGallary")
                    btnStart(txt="My Car" bkCol='#EF925D')
                .routermain(style="width:173px" @click="linkTo('Home')" v-show='isGallary')
                    btnStart(txt="Back to Home" bkCol='#5D5FEF')
    //- wallet(v-show="route=='gallary' && isWallet" @onClose="isWallet=false")
    .videoIcon(@click="switchMusic")
        img(v-if='isMuiscPlay' src='/img/sr_audio_1.gif' width='24' height='24')
        svg-font(v-else fontName="sraudio" class="svg_slide_audio")
    Audio(muted autoplay controls="controls" loop="loop" preload="auto" width="420" ref="backgroundmuisc" hidden)
    wallet(v-show="isGallary && isWallet" @onClose="isWallet=false")
    Title(v-show="isGallary && getIsTitle")
</template>

<script>
import wallet from './views/pop/wallet.vue'
import Title from './views/pop/Title.vue'
import btnStart from './components/BtnStart/btnstart.vue'
import { mapActions, mapGetters, mapState } from 'vuex'
import { connectors } from './connectors'

export default {
    name: 'App',
    components: {
        btnStart, wallet, Title
    },
    data() {
        return {
            connectors,
            isWallet: false,
            btns: [{
                linkto: 'Home',
                color: 'blue',
                txt: 'Back to Home'
            }],
            isMuiscPlay: false,
            src: './music/平凡之路.mp3',
            audio: undefined,
            isInteractived: false,
            isScrolling: false,
            routelink: ['Home', 'garage', 'story', 'roadmap', 'partners', 'gallary']
        }
    },
    async mounted() {
        let t = this
        t.$nextTick(() => {
            t.audio = t.$refs.backgroundmuisc
            t.audio.setAttribute('src', t.src)
            document.addEventListener('click', t.firstClick, false)
            document.addEventListener('mousewheel', t.handleScroll, true)
        })
        await this.connectWallet(this.connectors[localStorage.getItem('connector')])
    },
    watch: {
        route: {
            handler() {
                this.isScrolling = false
            }
        }
    },
    computed: {
        ...mapGetters('animpage', ['getIsTitle']),
        ...mapState(['account']),
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
        handleScroll(e) {
            let direction = e.deltaY > 0 ? 'down' : 'up'
            if (this.isScrolling) return
            let routeIdx = this.routelink.indexOf(this.route)
            if (routeIdx > -1 && routeIdx < this.routelink.length - 1) {
                if (direction === 'down') {
                    this.$router.push({ name: this.routelink[routeIdx + 1] })
                    this.isScrolling = true
                } else { // 向上或前
                    if (routeIdx > 0) {
                        this.$router.push({ name: this.routelink[routeIdx - 1] })
                        this.isScrolling = true
                    }
                }
            }
            if (routeIdx === 0) {
                e.stopPropagation()
            }
        },
        firstClick() {
            let t = this
            t.isInteractived = true
            t.audio.addEventListener('canplay', t.musicLoaded())
            // document.removeEventListener('click', t.firstClick)
        },
        ...mapActions(['connectWallet', 'disconnectWallet']),
        linkTo(page) {
            this.$router.push(page)
        },
        showWallet() {
            this.isWallet = true
        },
        switchMusic() {
            if (this.isMuiscPlay) {
                this.stopMusic()
            } else {
                this.playMuisc()
            }
        },
        musicLoaded() {
            this.playMuisc()
        },
        playMuisc() {
            if (this.audio !== undefined) {
                this.audio.play()
                this.isMuiscPlay = true
            }
        },
        stopMusic() {
            if (this.audio !== undefined) {
                this.audio.pause()
                this.isMuiscPlay = false
            }
        }
    }
}
</script>

<style lang="less" scoped>
.svg_slide_audio{
    height: 24px;
    width: 24px;
    color: white;
}
#app{
    position: relative;
    margin: 0 auto;
    width: 1440px;
    height: 768px;
    background: black;
    font-family: DMSans_R;
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
    .videoIcon{
        position: absolute;
        width: 24px;
        height: 24px;
        top:624px;
        right: 60px;
        // border: 1px solid red;
    }
}
.fade-enter-active, .fade-leave-avtive {
    transition: opacity 3s
}
.fade-enter, .fade-leave-to {
    opacity: 0
}
</style>
