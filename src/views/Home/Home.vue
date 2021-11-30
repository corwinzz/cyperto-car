<template lang='pug'>
.mainbackground
    homecard1
    .svgVideo
        svg-font(fontName="VideoFill" class="svg_video" @click.native='toVideo')
        svg-font(fontName="VideoPlay" class="svg_videoplay" @click.native='toVideo')
    .footcard
        slidecard
        graycard
</template>

<script>
import graycard from '@/views/Home/graycard'
import slidecard from '@/views/Home/slidecard'
import homecard1 from './homeCard1.vue'
export default {
    name: 'Home',
    components: {
        homecard1, slidecard, graycard
    },
    data() {
        return {

        }
    }
}
</script>

<style lang="less" scoped>
.mainbackground{
    width: 100%;
    height: calc(100% - 90px);
    .footcard{
        position: absolute;
        bottom:60px ;
        left: 30px;
    }
}
.svgVideo{
    position:absolute;
    width: 248px;
    height: 144px;
    left: 30px;
    top: 260px;
}
.svg_video{
    width: 248px;
    height: 144px;
}
.svg_videoplay{
    position:absolute;
    width:40px;
    height: 40px;
    top: 52px;
    left: 104px;
    color: white;
}
</style>
