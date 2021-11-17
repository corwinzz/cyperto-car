<template lang='pug'>

.hypelink
    svg-font(fontName="twitter" class="svg_avater")
    svg-font(fontName="telegram" class="svg_avater")
    svg-font(fontName="reddit3" class="svg_avater")
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
    flex: 1;
    height: 80px;
    padding-top:21px ;
    padding-right: 60px;
    display: flex;
    justify-content:flex-end ;
    .svg_avater{
        margin: 0px 8px;
        width: 16px;
        height: 16px;
        color: white;
        font-size: 16px;
    }
}
</style>
