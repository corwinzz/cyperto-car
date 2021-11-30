<template lang='pug'>
.partners(ref='partners')
    partnerCard
    .partners_marks
        .marks_row
            img(class='whitepng' src='/img/netflix.png' width='80' height='20' alt="filter applied")
            img(class='whitepng' src='/img/Uber.png' width='80' height='20' alt="filter applied")
            img(class='whitepng' src='/img/intercom.png' width='80' height='20' alt="filter applied")
        .marks_row
            img(class='whitepng' src='/img/slack.png' width='80' height='20' alt="filter applied")
            img(class='whitepng' src='/img/slack.png' width='80' height='20' alt="filter applied")
            img(class='whitepng' src='/img/Google.png' width='80' height='20' alt="filter applied")
    hypelink
</template>

<script>
import hypelink from '../hypelink.vue'
import partnerCard from './partnerCard'
export default {
    name: 'story',
    components: {
        partnerCard, hypelink
    },
    data() {
        return {
            page: 'home'
        }
    },
    mounted() {
        this.toggle()
    },
    methods: {
        toggle() {
            let dom = this.$refs.partners
            dom.classList.toggle('anm_bk_show', true)
        }
    },
    watch: {
        $route(to, from) {
            if (to.name === 'partners') {
                this.toggle()
            }
        }
    }
}
</script>
<style lang="less" scoped>
.whitepng{
    filter: brightness(0) invert(1);
    margin: auto;

}
.partners{
    height: 50%;
    width: 100%;
    // background: url('/img/b_partners1.png') no-repeat center fixed;
    background: black;
    background-size:100% 100%;
    position: relative;
    .partners_marks{
        position:relative;
        margin-top: 50px;
        left: 15px;
        width: calc(100% - 30px);
        height: 60px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        .marks_row{
            width: 100%;
            height: 20px;
            display: flex;
            justify-content: space-between;
        }
    }
}
</style>
