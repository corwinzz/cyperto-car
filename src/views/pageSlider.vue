<template lang='pug'>
.pageSlid
    .pageslider
        .page_indicate(:style="{top:pagNo*40+'px'}" ref='pageIndicate' :class="[`page${pagNo}`]")
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
    watch: {
        pag() {
            // this.$refs.pageIndicate.classList.add(`page${this.pag}`, false)
        }
    },
    computed: {
        route() {
            return this.$route.name
        },
        pagNo() {
            return this.pagenam.indexOf(this.route)
        }
    },
    data() {
        return {
            pagenam: ['Home', 'garage', 'story', 'roadmap', 'partners']
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
