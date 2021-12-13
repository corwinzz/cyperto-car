<template lang='pug'>
.mainbackground
    img(src='/img/h5-00.png' width="100%" height="100%")
    homeCard1H5
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
import homeCard1H5 from './homeCard1H5.vue'
export default {
    name: 'HomeH5',
    components: {
        homeCard1H5, slidecard, graycard
    },
    data() {
        return {

        }
    },
    methods: {

    }
}
</script>

<style lang="less" scoped>
.mainbackground{
    width: 100%;
    height: calc(100% - 90px);
    position: relative;
    .footcard{
        position: absolute;
        bottom:30px ;
        left: 30px;
    }
}
.svgVideo{
    position:absolute;
    width: 248px;
    height: 144px;
    left: 30px;
    top: 180px;
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
