<template lang='pug'>
.btnStart
    svg-font(fontName="startgame" class="svg_avater" :style="btnstyle")
    .txt {{txt}}
</template>

<script>
export default {
    name: 'App',
    props: {
        txt: {
            type: String,
            default: ''
        },
        bkCol: {
            type: String,
            default: 'red'
        }
    },
    components: {

    },
    data() {
        return {

        }
    },
    computed: {
        btnstyle() {
            return {
                color: this.bkCol
            }
        }
    },
    mounted() {
    },
    methods: {

    }
}
</script>
<style lang="less" scoped>
.btnStart{
    z-index: 10;
    margin: auto;
    width: 172px;
    height: 43px;
    position:absolute;
    .txt{
        width: 100%;
        position:absolute;
        margin-top: 6px;
        top: 0px;
        left: 0px;
        color: white;
        font-family: DMSans_R;
        font-size: 14px;
        font-weight: 700;
        line-height: 28px;
        letter-spacing: 2px;
        text-align: center;
    }
}
.svg_avater{
    width: 172px;
    height: 43px;
    color: red;
    // font-size: 100px;
}

</style>
