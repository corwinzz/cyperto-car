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
import walletAvater from './walletAvaterH5.vue'
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
@import url('../../common/style/common.less');
.wallet{
    position:absolute;
    top:calc(50% - 210px) ;
    left:calc(50% - 160px);
    width: 315px;
    height: 420px;
    background: black;
    display: flex;
    flex-direction: column;
    text-align: center;
    color: white;
    .wlt_header{
        padding: 30px;
       .f24();
       .f_mon();
    }
    .wlt_markers{
        display: flex;
        margin:20px auto ;
        justify-content: space-between;
    }
    .wlt_foot{
        width: 100%;
        .btn_close{
            font-family: DMSans_R;
            height: 60px;
            line-height: 60px;
            font-size: 14px;
            font-weight: 700;
            width: 200px;
            margin: auto;
            text-align: center;
            border-radius: 30px;
            border: 2px solid #777E90;
            color: #FCFCFD;
        }
    }
}
</style>
