<template lang='pug'>
.wallet
    .wlt_header Connect Wallet
    .wlt_markers
        template(v-for="connector,idx in connectors")
           walletAvater(:connector="connector")
    .wlt_foot(@click="onClose")
        .btn_close Close
</template>
<script>
import walletAvater from './walletAvater.vue'
import { connectors } from '../../connectors'

export default {
    name: 'wallet',
    components: {
        walletAvater
    },
    data() {
        return {
            connectors,
            page: 'home'
        }
    },
    mounted() {
    },
    methods: {
        onClose() {
            this.$emit('onClose')
        }
    }
}
</script>
<style lang="less" scoped>
.wallet{
    position:absolute;
    top:150px ;
    left: 360px;
    width: 720px;
    height: 475px;
    background: black;
    // border: 1px solid red;
    display: flex;
    flex-direction: column;
    .wlt_header{
        height: 78px;
        padding: 30px;
        line-height:38px ;
        text-align: center;
        font-family: Monument;
        font-weight: 400;
        font-size: 32px;
        color: white;
    }
    .wlt_markers{
        display: flex;
        margin:20px auto ;
        justify-content: space-between;
    }
    .wlt_foot{
        width: 100%;
        .btn_close{
            height: 60px;
            line-height: 60px;
            font-size: 20px;
            width: 355px;
            margin: auto;
            text-align: center;
            border-radius: 30px;
            border: 2px solid #777E90;
            color: #FCFCFD;
        }
    }
}
</style>
