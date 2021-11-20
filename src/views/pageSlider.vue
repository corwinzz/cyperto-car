<template lang='pug'>
.pageSlid
    .pageslider
        .page_indicate(:style="{top:pag*40+'px'}")
    svg-font(fontName="scroll" class="svg_slide")
</template>

<script>
export default {
    name: 'pageslider',
    components: {},
    props: {
        pag: {
            type: Number,
            require: true
        }
    },
    data() {
        return {

        }
    },
    mounted() {

    },
    methods: {

    }
}
</script>
<style lang="less" scoped>

.svg_slide{
    margin-top:30px ;
    height: 34px;
    width: 23px;
    color: white;
}
.pageSlid{
    position:absolute;
    right: 50px;
    top:240px;
    width: 34px;
    height:480px ;
    .pageslider{
        width: 0px;
        height: 260px;
        border-left: 3px solid rgba(255, 255, 255, 0.2);
        margin-left: 10px;
        .page_indicate{
            position: relative;
            left: -3px;
            width: 4px;
            height: 40px;
            background-color: white;
        }
    }
}

</style>
