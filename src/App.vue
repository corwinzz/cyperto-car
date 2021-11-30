<template lang='pug'>
.app
    .header(v-show='isHomePage')
        img.mark(src='img/logo.gif' width='116' height='15' style="margin-left:30px;margin-top:37px")
        .routermain(style="width:158px" @click="linkTo('gallary')")
            btnStart(txt="Start Game_" bkCol='#EA3344' :wid="128" )
    .header1(v-show='isGallary')
        .routermain(@click="showWallet()")
            btnStart(txt="Connect" bkCol='#EA3344')
        .routermain(@click="linkTo('HomeH5')")
            btnStart(txt="Back to Home" bkCol='#5D5FEF')
    .header2(v-show='isMini')
        .routermain(style="width:100px" @click="showWallet()")
            btnStart(:txt="'...'" bkCol='#EA3344' :wid='100')
            //- btnStart(:txt="account.substring(0,10) + '...'" bkCol='#EA3344' :wid='100')
        .routermain(style="width:100px" @click="linkTo('carousel')" )
            btnStart(txt="My Car" bkCol='#EF925D' :wid='100')
        .routermain(style="width:100px" @click="linkTo('HomeH5')")
            btnStart(txt="Back to Home" bkCol='#5D5FEF' :wid='100')
    keep-alive
        router-view(:isWallet='isWallet')
    .videoIcon(@click="switchMusic")
        img(v-if='isMuiscPlay' src='/img/sr_audio_1.gif' width='24' height='24' )
        svg-font(v-else fontName="sraudio" class="svg_slide_audio" )
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
            src: '/music/平凡之路.mp3',
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
            // document.addEventListener('click', t.firstClick, false)
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
            return ['homeH5'].indexOf(this.route) > -1
        },
        isGallary() {
            return ['gallary'].indexOf(this.route) > -1
        },
        isMini() {
            return ['cardetail', 'carousel'].indexOf(this.route) > -1
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
            document.removeEventListener('click', t.firstClick)
        },
        ...mapActions(['connectWallet', 'disconnectWallet']),
        linkTo(page) {
            console.log(page)
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
.app{
    position: relative;
    width: 100%;
    height: 100%;
    background: black;
    font-family: DMSans_R;
    .header,.header1,.header2{
        z-index: 99;
        position:relative;
        top: 0px;
        left: 0px;
        width: 100%;
        height: 90px;
        background-color: black;
        opacity: 0.8;
        display: flex;
        justify-content: space-between;
        .routermain{
            width: 128px;
            height: 32px;
            position: relative;
            margin-top: 29px;
        }
    }
    .header1,.header2{
        padding: 0px 40px;
        background:none;
    }
    .header2{
        padding: 0px 5px;
    }
    .videoIcon{
        position: relative;
        width: 24px;
        height: 24px;
        bottom:30px;
        right: 60px;
        z-index: 999;
    }
}

</style>
