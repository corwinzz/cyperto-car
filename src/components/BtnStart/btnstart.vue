<template lang='pug'>
.btnStart
    svg-font(:fontName="`btn${wid}x32`" class="svg_avater" :style="btnstyle")
    .txt(:style="fontStyle") {{txt}}
</template>

<script>
export default {
    name: 'App',
    props: {
        wid: {
            type: Number,
            default: 128
        },
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
                color: this.bkCol,
                width: this.wid + 'px',
                height: 32 + 'px'
            }
        },
        fontStyle() {
            let size = this.wid < 101 ? 10 : 14
            return {
                fontSize: size + 'px',
                width: this.wid + 'px'
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
    height: 32px;
    position:relative;
    .txt{
        position:absolute;
        width: 100%;
        top: 0px;
        left: 0px;
        color: white;
        font-family: DMSans_R;
        font-size: 14px;
        font-weight: 700;
        line-height: 28px;
        letter-spacing: 1px;
        text-align: center;
    }
}
.svg_avater{
    width: 128px;
    height: 32px;
    color: red;
}

</style>
