<template lang='pug'>
.app
    .main
        transition(:name="transitnam" mode="out-in")
            router-view(:isWallet='isWallet' :key='$route.fullPath')
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
            src: './music/TheExtremeSport.mp3',
            audio: undefined,
            isInteractived: false,
            isScrolling: false,
            routelink: ['Home', 'garage', 'story', 'roadmap', 'partners', 'gallary'],
            isFisrtStartMusic: true,
            transitnam: 'up'
        }
    },
    async mounted() {
        let t = this
        t.$nextTick(() => {
            t.audio = t.$refs.backgroundmuisc
            t.audio.setAttribute('src', t.src)
            // document.addEventListener('click', t.firstClick, false)
            document.addEventListener('mousewheel', t.handleScroll, true)
            window.addEventListener('resize', t.onResize, true)
            t.onResize()
        })
        await this.connectWallet(this.connectors[localStorage.getItem('connector')])
    },
    watch: {
        '$route'(to, from) {
            let fromId = this.routelink.indexOf(from.name)
            let toId = this.routelink.indexOf(to.name)
            this.transitnam = fromId > toId ? 'up' : 'down'
        }
    },
    computed: {
        ...mapGetters('animpage', ['getIsTitle', 'getPageNo']),
        ...mapState(['account', 'chainId']),
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
            setPageNo: 'setPageNo',
            setWndSize: 'setWndSize'
        }),
        ...mapActions(['connectWallet', 'disconnectWallet', 'checkChain']),
        onResize() {
            let wid = document.body.clientWidth
            let hei = document.body.clientHeight
            this.setWndSize({ wid, hei })
        },
        firstSwitch(isplaymusic) {
            this.isFisrtStartMusic = false
            this.isMuiscPlay = !isplaymusic
            this.switchMusic()
            // document.removeEventListener('click', this.firstClick)
        },
        handleScroll(e) {
            if (this.getPageNo < 2 || this.route === 'Home') { // Home两个页面无跳转
                e.stopPropagation()
                e.preventDefault()
            }
            if (this.isScrolling) {
                e.stopPropagation()
                e.preventDefault()
                return
            }
            this.isScrolling = true // 开始滚动事件
            let direction = e.deltaY > 0 ? 'down' : 'up'
            if (this.routelink.indexOf(this.route) < -1 || this.routelink.indexOf(this.route) > 4) return // Home页面才会跳转
            if (direction === 'down') {
                if (this.getPageNo === 0) {
                    this.setPageNo(1) // Home页面内跳转
                } else if (this.getPageNo > 0 && this.getPageNo < 4) {
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
            setTimeout(() => { this.isScrolling = false }, 2000)
        },
        firstClick() {
            let t = this
            t.isInteractived = true
            t.audio.addEventListener('canplay', t.musicLoaded())
            // document.removeEventListener('click', t.firstClick)
        },
        async linkTo(page) {
            if (page === 'carousel') {
                if (!await this.checkChain()) {
                    this.isWallet = true
                    return
                }
            }
            this.$router.push(page)
            if (page === 'Home') {
                this.setPageNo(0)
            }
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
        overflow: hidden;
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
.up-enter-active,
.down-enter-active {
    transition: all 600ms ease-out
}
.up-leave-active,
.down-leave-active{
    transition: all 600ms ease-in
}
.up-leave-to,
.down-enter {
    opacity: 0;
    transform: translateY(-5%);
}
.up-enter,
.down-leave-to {
    opacity: 0;
    transform: translateY(5%);
}
</style>
