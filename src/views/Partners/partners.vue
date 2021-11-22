<template lang='pug'>
.partners(ref='partners')
    .partners_marks
        .marks_row
            img(class='whitepng' src='/img/netflix.png' width='240' height='64' alt="filter applied")
            img(class='whitepng' src='/img/Uber.png' width='240' height='64' alt="filter applied")
            img(class='whitepng' src='/img/intercom.png' width='240' height='64' alt="filter applied")
        .marks_row
            img(class='whitepng' src='/img/slack.png' width='240' height='64' alt="filter applied")
            img(class='whitepng' src='/img/slack.png' width='240' height='64' alt="filter applied")
            img(class='whitepng' src='/img/Google.png' width='240' height='64' alt="filter applied")
    .partners_footer Quo animi eligendi nisi eligendi. Qui quia excepturi vitae.
</template>

<script>
export default {
    name: 'story',
    components: {

    },
    data() {
        return {
            page: 'home'
        }
    },
    mounted() {
    },
    methods: {

    },
    watch: {
        $route(to, from) {
            if (to.name === 'partners') {
                let dom = this.$refs.partners
                dom.classList.toggle('anm_show', true)
            }
        }
    }
}
</script>
<style lang="less" scoped>
.anm_show{
    animation: anm 500ms ;
}
@keyframes anm {
    0% {
        background-position-y:-200px;
        opacity: 0;
    }
    80% {
        background-position-y:50%;
        opacity: 1;
    }
    100% {
        background-position-y:50%;
        opacity: 1;
    }
}
.whitepng{
    filter: brightness(0) invert(1);
    margin: auto;

}
.partners{
    height: 768px;
    width: 1440px;
    background: url('/img/b_partners1.png') no-repeat center fixed;
    background-size:100% 100%;
    .partners_marks{
        position:absolute;
        top: 252px;
        left: 140px;
        width: 1160px;
        height: 268px;
        display: flex;
        flex-direction: column;
        padding: 40px;
        justify-content: space-between;
        .marks_row{
            width: 1080px;
            height: 64px;
            display: flex;
            .mark{
                width: 240px;
                height: 62px;
                margin: auto;
                border: 1px solid red;
            }
        }
    }
    .partners_footer{
        position:absolute;
        top: 550px;
        width: 100%;
        text-align: center;
        color: white;
        height: 46px;
        line-height: 46px;
        font-size: 30px;
        letter-spacing: -1.6px;
        font-weight: bold;
        font: DMSans_R;
    }
}
</style>
