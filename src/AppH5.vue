<template lang='pug'>
.appH5
    .header(v-show="isHome")
        img.mark(src='img/logo.gif' width='116' height='15' style="margin-left:30px;margin-top:37px")
        .routermain(style="width:158px" @click="linkTo('gallaryH5')")
            btnStart(txt="Start Game_" bkCol='#EA3344' :wid="128" )
    .header1(v-show="isGallary")
        .routermain(@click="showWallet()" v-if="!account")
            btnStart(txt="Connect" bkCol='#EA3344')
        .routermain(@click="showWallet()" v-if="account")
            btnStart(:txt="account.substring(0, 10) + '...'" bkCol='#EA3344')
        .routermain(@click="linkTo('Home')")
            btnStart(txt="Back to Home" bkCol='#5D5FEF')
    .header2(v-show='isMini')
        .routermain(style="width:100px" @click="showWallet()" v-if="!account")
            btnStart(txt="Connect" bkCol='#EA3344' :wid='100')
        .routermain(style="width:100px" @click="showWallet()" v-if="account")
            btnStart(:txt="account.substring(0, 10) + '...'" bkCol='#EA3344' :wid='100')
        .routermain(style="width:100px" @click="linkTo('carousel')" )
            btnStart(txt="My Car" bkCol='#EF925D' :wid='100')
        .routermain(style="width:100px" @click="linkTo('Home')")
            btnStart(txt="Back to Home" bkCol='#5D5FEF' :wid='100')
    keep-alive
        router-view
    walletH5(v-show="isGallary && isWallet" @onClose="isWallet=false")
    TitleH5(v-show="getIsTitle")
</template>

<script>
import walletH5 from './views/pop/walletH5.vue'
import TitleH5 from './views/pop/TitleH5.vue'
import btnStart from './components/BtnStart/btnstartH5.vue'
import { mapMutations, mapGetters, mapActions, mapState } from 'vuex'
import { connectors } from './connectors'
export default {
    name: 'appH5',
    components: {
        walletH5, TitleH5, btnStart
    },
    data() {
        return {
            connectors,
            isWallet: false
        }
    },
    async mounted() {
        await this.connectWallet(this.connectors[localStorage.getItem('connector')])
    },
    created() {
        this.setH5(true)
    },
    computed: {
        ...mapState(['account', 'chainId']),
        ...mapGetters('animpage', ['getIsTitle']),
        route() {
            return this.$route.name
        },
        isHome() {
            return this.route === 'Home'
        },
        isGallary() {
            return ['gallaryH5'].indexOf(this.route) > -1
        },
        isMini() {
            return ['cardetail', 'carousel'].indexOf(this.route) > -1
        }
    },
    methods: {
        ...mapActions(['connectWallet']),
        ...mapMutations('animpage', {
            setH5: 'setH5'
        }),
        linkTo(route) {
            this.$router.push(route)
        },
        showWallet() {
            this.isWallet = true
        }
    }
}
</script>
<style lang="less" scoped>
@import url('./common/style/common.less');
.appH5{
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(0, 0, 0, 1);
}
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
    padding: 0px 20px;
}
</style>
