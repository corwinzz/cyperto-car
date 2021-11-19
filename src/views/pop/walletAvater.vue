<template lang='pug'>
.wallet_avater(@click="connect(connector)")
    img.avatericon(:src='connector.logo' width='135' height='135')
    .avatername {{connector.name}}
</template>
<script>
import { mapActions, mapState } from 'vuex'

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
        ...mapActions(['connectWallet', 'disconnectWallet']),
        async connect(connector) {
            await this.connectWallet(connector)
            location.reload()
        }
    },
    computed: {
        ...mapState(['account'])
    }
}
</script>
<style lang="less" scoped>
.wallet_avater{
    width: 360px;
    height: 266px;
    padding-top: 10px;
    display: flex;
    flex-direction: column;
    .avatericon{
        margin: 20px auto;
        width: 135px;
        height: 135px;
    }
    .avatername{
        height: 48px;
        line-height: 48px;
        font-size: 34px;
        font-family: DMSans;
        font-weight: Bold;
        text-align: center;
        color: white;
    }
}
</style>
