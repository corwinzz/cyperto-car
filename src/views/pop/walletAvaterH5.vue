<template lang='pug'>
.wallet_avater(@click="connect(connector)")
    img.avatericon(:src='connector.logo' width='135' height='135')
    .avatername {{connector.name}}
</template>
<script>
import { mapActions, mapState, mapMutations } from 'vuex'

export default {
    name: 'wallet',
    props: {
        connector: {
            type: Object
        }
    },
    data() {
        return {
            page: 'home'
        }
    },
    mounted() {
    },
    methods: {
        ...mapMutations('animpage', {
            setIsTitle: 'setIsTitle',
            setTitleInf: 'setTitleInf'
        }),
        ...mapActions(['connectWallet', 'disconnectWallet']),
        async connect(connector) {
            if (await this.connectWallet(connector)) {
                console.log(this.chainId)
                if (this.chainId !== '0x13881' &&
                    this.chainId !== '0x89' &&
                    this.chainId !== 80001 &&
                    this.chainId !== 137) {
                    this.setTitleInf({
                        title: 'Error',
                        content: 'Please switch the polygon network!'
                    })
                } else {
                    location.reload()
                }
            } else {
                this.setTitleInf({
                    title: 'Error',
                    content: 'Please install metamask!'
                })
            }
        }
    },
    computed: {
        ...mapState(['account', 'chainId'])
    }
}
</script>
<style lang="less" scoped>
.wallet_avater{
    width: 155px;
    height: 226px;
    padding-top: 10px;
    display: flex;
    flex-direction: column;
    .avatericon{
        margin:10px;
        width: 135px;
        height: 135px;
    }
    .avatername{
        height: 22px;
        line-height: 22px;
        font-size: 16px;
        font-family: DMSans_R;
        font-weight: Bold;
        text-align: center;
        color: white;
    }
}
</style>
