<template lang='pug'>
.wallet_avater
    img.avatericon(:src='url' width='135' height='135')
    .avatername {{nam}}
</template>
<script>
export default {
    name: 'wallet',
    props: {
        url: {
            type: String,
            default: ''
        },
        nam: {
            type: String,
            default: ''
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
