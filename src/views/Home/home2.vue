<template lang='pug'>
.home2
    .home2Close
        svg-font(fontName="close" class="svg_close" @click.native='toHome')
    .home2card
        .hc_t1  {{t1}}
        .hc_t2  {{t2}}
</template>

<script>
export default {
    name: 'home2',
    components: {

    },
    data() {
        return {
            t1: 'Ea aspernatur est soluta temporibus non delectus. Ullam laborum recusandae.',
            t2: 'Soluta nulla in voluptas non ut nesciunt reiciendis. Ad similique nihil. Eveniet animi sed dicta aspernatur a error pariatur autem similique. Animi ratione quia. Error similique aut omnis consequatur rerum quis dolores nobis ab. Fugiat voluptatem nihil magni alias voluptatum.'
        }
    },
    mounted() {
    },
    methods: {
        toHome() {
            this.$router.push('Home')
        }
    }
}
</script>
<style lang="less" scoped>
.svg_close{
    color: white;
    width: 32px;
    height: 32px;
}
.home2Close{
    position:absolute;
    top: 78px;
    left: 66px;
    width: 32px;
    height: 32px;
    color: white;
}
.home2{
    height: 768px;
    width: 1440px;
    background: url('/img/b_home2.png') no-repeat center fixed;
    background-size:100% 100%;
    .home2card{
        position:absolute;
        top: 240px;
        left: 165px;
        color: white;
        font-family: DMSans_R;
        .hc_t1{
            width: 698px;
            height: 168px;
            line-height: 56px;
            font-weight: bold;
            font-size: 48px;
            letter-spacing: -2px;
            margin-bottom: 40px;
        }
        .hc_t2{
            width: 540px;
            height: 140px;
            line-height: 28px;
            font-size: 18px;
            letter-spacing: -0.4px;
            vertical-align: top;
            opacity: 0.7;
        }
    }
}
</style>
