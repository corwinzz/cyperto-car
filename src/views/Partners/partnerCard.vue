<template lang='pug'>
.partnerCard
    .partner_title Partner
    .partner_content Inspired by Ready Player One, CyberCar is a composable NFT racing game with various rules and track.
    .line
</template>

<script>
export default {
    name: 'slidcard',
    components: {

    },
    data() {
        return {

        }
    }
}
</script>

<style lang="less" scoped>
@import url('../../common/style/common.less');
.partnerCard{
    position: relative;
    top: 25px;
    left: 20px;
    width: calc(100% - 40px);
    height: 165px;
    background:black;
    background-size:100% 100%;
    color: white;
    padding:20px 20px;
    text-align: center;
    .partner_title{
        .f24();
        .f_mon();
        line-height: 24px;
        margin-bottom: 20px;
    }
    .partner_content{
        height: 60px;
        letter-spacing: 1px;
        .f20_14();
        .f_d();
        font-weight: 400;
    }
}

</style>
