<template lang='pug'>
.mybtn(:style='btnstyle')
    .btnsvg(:style="svgstyle")
        svg-font(:fontName="svg.name" class="svg_btn" )
    .btntxt(:style="txtstyle") {{btn.txt}}
</template>

<script>
export default {
    name: 'mybtn',
    props: {
        btn: {
            type: Object,
            default: () => {
                return {
                    wid: 200,
                    hei: 40,
                    txt: 'Back to Market',
                    bkColor: '#444'
                }
            }
        },
        svg: {
            type: Object,
            default: () => {
                return {
                    wid: 20,
                    hei: 10,
                    name: 'arrow_left'
                }
            }
        }
    },
    computed: {
        txtstyle() {
            return {
                color: 'white'
            }
        },
        btnstyle() {
            return {
                height: this.btn.hei + 'px',
                width: this.btn.wid + 'px',
                lineHeight: this.btn.hei + 'px',
                color: 'white'
            }
        },
        svgstyle() {
            return {
                marginLeft: 10 + 'px',
                marginTop: -4 + 'px',
                color: 'white'
            }
        }
    },
    components: {

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
.mybtn{
    z-index: 10;
    display: flex;
    justify-content:space-between;
    .btnsvg{
        width:30px;
    }
    .btntxt{
        margin:auto;
        top: 0px;
        left: 0px;
        color: white;
        font-size: 14px;
        font-weight: 700;
        line-height: 20px;
        letter-spacing: 2px;
        text-align: center;
    }
}
.svg_btn{
    width: 14px;
    height:10px;
}

</style>
