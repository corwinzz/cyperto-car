<template lang='pug'>
.homecard1
    .homecard_t1 CyberCar
    .homecard_t2 PITCH DECK
    .homecard_t3 "Thanks for Playing My Game"
    .routermain( @click="linkTo('gallary')" )
        btnStart(txt="Start Game_" bkCol='#EA3344')
</template>

<script>
import btnStart from '../../components/BtnStart/btnstartBig.vue'
export default {
    name: 'story',
    components: { btnStart },
    data() {
        return {
            paras: []
        }
    },
    mounted() {
    },
    methods: {
        linkTo(page) {
            this.$router.push(page)
        }
    }
}
</script>
<style lang="less" scoped>
.homecard1{
    pointer-events: none;
    position:absolute;
    left: 80px;
    top: 210px;
    width: 540px;
    height: 288px;
    background-color: rgba(0,0,0,0.1);
    padding: 20px;
    .homecard_t1{
        margin-bottom: 6px;
        height: 96px;
        line-height: 96px;
        font-size: 80px;
        font-weight: 400;
        font: Monument Extended;
        color: white;
    }
    .homecard_t2{
        height: 48px;
        line-height: 48px;
        font-size: 40px;
        font-weight: 400;
        color: white;
        font: Monument Extended;
        margin-bottom: 20px;
    }
    .homecard_t3{
        height: 24px;
        line-height: 24px;
        font-size: 20px;
        font-weight: 400;
        color: white;
        font: DM Sans;
        letter-spacing: 1px;
        margin-bottom: 30px;
    }
    .routermain{
        pointer-events:painted;
        width: 52px;
        height: 0px;
        margin-top: 20px;
    }
}
</style>
