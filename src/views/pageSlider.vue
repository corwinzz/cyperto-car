<template lang='pug'>
.pageSlid
    .pageslider
        .page_indicate(:style="{top:getPageNo*50+'px'}" ref='pageIndicate' )
    svg-font(fontName="scroll" class="svg_slide")
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    name: 'pageslider',
    components: {},
    computed: {
        ...mapGetters('animpage', ['getPageNo']),
        route() {
            return this.$route.name
        },
        pagNo() {
            let idx = 0
            if (this.route === 'Home') {
                if (this.$route.params.label && this.$route.params.label === 'GARAGE') {
                    idx = 1
                }
            } else {
                idx = this.pagenam.indexOf(this.route)
            }
            return idx
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
    top:calc(50% - 200px);
    width: 34px;
    height:400px ;
    .pageslider{
        width: 0px;
        height: 250px;
        border-left: 3px solid rgba(255, 255, 255, 0.2);
        margin-left: 10px;
        .page_indicate{
            position: relative;
            left: -3px;
            width: 4px;
            height: 50px;
            background-color: white;
            transition: all 600ms ease;
        }
    }
}

</style>
