<template lang='pug'>
.app
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
        img(v-if='isMuiscPlay' src='/img/sr_audio_1.gif' width='24' height='24' )
        svg-font(v-else fontName="sraudio" class="svg_slide_audio" )
    Audio(muted autoplay controls="controls" loop="loop" preload="auto" width="420" ref="backgroundmuisc" hidden)
    wallet(v-show="isGallary && isWallet" @onClose="isWallet=false")
    Title(v-show="isGallary && getIsTitle")
    startMusicCard(v-show='isFisrtStartMusic' @switch='firstSwitch')
</template>

<script>
import startMusicCard from './views/pop/startMusicCard.vue'
import wallet from './views/pop/wallet.vue'
import Title from './views/pop/Title.vue'
import btnStart from './components/BtnStart/btnstart.vue'
import { mapActions, mapGetters, mapMutations, mapState } from 'vuex'
import { connectors } from './connectors'

export default {
    name: 'App',
    components: {
        btnStart, wallet, Title, startMusicCard
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
            src: '/music/TheExtremeSport.mp3',
            audio: undefined,
            isInteractived: false,
            isScrolling: false,
            routelink: ['Home', 'garage', 'story', 'roadmap', 'partners', 'gallary'],
            isFisrtStartMusic: true
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
        ...mapGetters('animpage', ['getIsTitle', 'getPageNo']),
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
        ...mapMutations('animpage', {
            setPageNo: 'setPageNo'
        }),
        firstSwitch(isplaymusic) {
            let t = this
            this.isFisrtStartMusic = false
            this.isMuiscPlay = !isplaymusic
            this.switchMusic()
            document.removeEventListener('click', t.firstClick)
        },
        handleScroll(e) {
            let direction = e.deltaY > 0 ? 'down' : 'up'
            if (this.isScrolling) return
            this.isScrolling = true // 开始滚动事件
            if (this.routelink.indexOf(this.route) < -1) return // Home页面才会跳转
            if (direction === 'down') {
                if (this.getPageNo === 0) {
                    this.setPageNo(1) // Home页面内跳转
                } else if (this.getPageNo > 0 && this.getPageNo < 5) {
                    this.$router.push({ name: this.routelink[this.getPageNo + 1] }) // 路由跳转
                    this.setPageNo(this.getPageNo + 1)
                }
            } else { // 向上或前
                if (this.getPageNo < 5 && this.getPageNo > 2) {
                    this.$router.push({ name: this.routelink[this.getPageNo - 1] })
                    this.setPageNo(this.getPageNo - 1)
                } else if (this.getPageNo === 2) {
                    this.$router.push({ name: this.routelink[0] })
                    this.setPageNo(1) // Home页面内跳转
                } else if (this.getPageNo === 1) {
                    this.setPageNo(0) // Home页面内跳转
                }
            }
            if (this.getPageNo < 2 || this.route === 'Home') { // Home两个页面无跳转
                e.stopPropagation()
            }
            setTimeout(() => { this.isScrolling = false }, 500)
        },
        firstClick() {
            let t = this
            t.isInteractived = true
            t.audio.addEventListener('canplay', t.musicLoaded())
            document.removeEventListener('click', t.firstClick)
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
.app{
    position: relative;
    margin: 0 auto;
    width: 100%;
    height: 100%;
    min-width: 1440px;
    min-height: 680px;
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
                text-align: center;
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
        bottom:150px;
        right: 60px;
        z-index: 999;
    }
}
.fade-enter-active, .fade-leave-avtive {
    transition: opacity 3s
}
.fade-enter, .fade-leave-to {
    opacity: 0
}
</style>
