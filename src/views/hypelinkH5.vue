<template lang='pug'>

.hypelink
    svg-font(fontName="twitter" class="svg_avater")
    svg-font(fontName="telegram" class="svg_avater")
    svg-font(fontName="reddit_a" class="svg_avater")
    svg-font(fontName="medium" class="svg_avater")
    svg-font(fontName="github" class="svg_avater")

</template>

<script>
export default {
    name: 'App',
    components: {},
    data() {
        return {
            page: 1
        }
    },
    mounted() {
    },
    methods: {
    }
}
</script>
<style lang="less" scoped>
.hypelink{
    width: 100%;
    height: 90px;
    padding-top:30px ;
    display: flex;
    justify-content:space-around;
    border-top: 1px solid red;
    line-height: 30px;
    background-color: rgba(0,0,0,1);
    .svg_avater{
        margin: 0px 8px;
        width: 30px;
        height: 30px;
        color: white;
    }
}
</style>
