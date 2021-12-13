<template lang='pug'>
.graycard
    .info_t1 Aut harum ut laborum. Esse fugiat voluptatibus odio.
    .info_email Founder@CarrotLabs
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
.graycard{
    width: 315px;
    height: 136px;
    background:url('/img/home_noise.png') repeat;
    background-size:100% 100%;
    color: white;
    padding:30px 20px;
    .info_t1{
        .f14();
        .f_d();
        line-height: 16px;
        letter-spacing: 0.5px;
        font-weight: bold;
    }
    .info_email{
        height: 24px;
        letter-spacing: -0.3px;
        .f14();
        .f_d();
        margin-top: 20px;
    }
}

</style>
