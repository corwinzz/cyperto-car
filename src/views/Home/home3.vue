<template lang='pug'>
.home2
    .home2Close
        svg-font(fontName="close" class="svg_close" @click.native='toHome')
    video(width='100%' height='100%' autoplay loop muted playsinline controls poster="/img/1.gif")
        source(src="video.webm" type="video/webm")
</template>

<script>
export default {
    name: 'home2',
    components: {

    },
    data() {
        return {

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
    z-index: 99;
}
.home2{
    height: 100%;
    width: 100%;
    // background: url('/img/1.gif') no-repeat center fixed;
    // background-size:100% 100%;

}
</style>
