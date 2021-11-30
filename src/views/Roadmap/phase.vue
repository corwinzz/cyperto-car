<template lang='pug'>
.phase(:style="locstyle")
    .phase-icon
        <svg-icon svgName="p2" :className="`svg_phase`"></svg-icon>
    .phase-t1 {{content.t1}}
    .phase-t2 {{content.t2}}
    .phase-t3 {{content.t3}}
    .phase-t4 {{content.t4}}
</template>

<script>
export default {
    name: 'Phase',
    props: {
        content: {
            type: Object,
            require: true
        },
        pos: {
            type: Object,
            default: function() {
                return {
                    top: 0,
                    left: 0,
                    width: 0
                }
            }
        }
    },
    computed: {
        locstyle() {
            return {
                top: this.pos.top + 'px',
                left: this.pos.left + 'px',
                width: this.pos.width + 'px'
            }
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
.svg_phase{
    margin: 22px;
    width: 22px;
    height: 22px;
    color: #EA3344;
}
.phase{
    position: relative;
    margin-top: 10px;
    .phase-icon{
        border-radius:30px;
        width: 66px;
        height: 66px;
        margin-bottom: 20px;
        background-color: #192431;
    }
    .phase-t1{
        height: 24px;
        line-height: 24px;
        font-size: 20px;
        font-weight: 400;
        font-family: Mon;
        color: white;
        margin:4px 0px;
    }
    .phase-t2{
        height: 17px;
        line-height: 17px;
        font-size: 14px;
        font-weight: 400;
        font-family: Mon;
        color: white;
        margin:4px 0px;
    }
    .phase-t3{
        line-height: 16px;
        font-size: 12px;
        letter-spacing: 0.2px;
        font-weight: 400;
        font-family: DMSans_R;
        margin-bottom: 20px;
        color: white;
    }
    .phase-t4{
        line-height: 16px;
        font-size: 12px;
        letter-spacing: 0.2px;
        font-weight: 400;
        font-family: DMSans_R;
        color: white;
    }

}

</style>
