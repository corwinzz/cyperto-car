<template lang='pug'>
.homecard1(ref='homecard')
    .homecard_t1 CyberCar
    .homecard_t2 PITCH DECK
    .homecard_t3 "Thanks for Playing My Game"
    .routermain( @click="linkTo('gallary')" )
        btnStart(txt="Start Game_" bkCol='#EA3344')
</template>

<script>
import btnStart from '../../components/BtnStart/btnstartBig.vue'
import { mapMutations } from 'vuex'
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
    computed: {
        pageInf() {
            return this.$store.getters['animpage/getPageInf']
        }
        // route() {
        //     return this.$route.name
        // }
    },
    watch: {
        // route: {
        //     handler (newval) {
        //         if (newval === 'Home') {
        //             let dom = this.$refs.homecard
        //             dom.classList.toggle('anm_show', true)
        //         }
        //     }
        // },
        pageInf: {
            handler(newval, oldval) {
                if (newval.from === 'Home') {
                    let dom = this.$refs.homecard
                    dom.classList.toggle('anm_show', false)
                    dom.classList.toggle('anm_hide', true)
                }
            },
            deep: true
        },
        $route(to, from) {
            if (to.name === 'Home') {
                let dom = this.$refs.homecard
                dom.classList.toggle('anm_hide', false)
                dom.classList.toggle('anm_show', true)
            }
            // if (from.name === 'Home') {
            //     let dom = this.$refs.homecard
            //     dom.classList.toggle('anm_hide', true)
            // }
        }
    },
    methods: {
        ...mapMutations('animpage', {
            setPageInf: 'setPageInf'
        }),
        linkTo(page) {
            this.setPageInf({ from: 'Home', to: page })
            this.$router.push(page)
        }
    }
}
</script>
<style lang="less" scoped>
.anm_hide{
    animation: anm1 500ms;
}
.anm_show{
    animation: anm 300ms reverse;
}
@keyframes anm {
    0% {
        left: 80px;
        transform:scale(1,1);
        opacity: 1;
    }
    80% {
        left: 280px;
        transform:scale(0.7,0.7);
        opacity: 0;
    }
    100% {
        left: 280px;
        transform:scale(0.7,0.7);
        opacity: 0;
    }
}
@keyframes anm1 {
    0% {
        left: 80px;
        transform:scale(1,1);
        opacity: 1;
    }
    80% {
        left: 280px;
        transform:scale(0.7,0.7);
        opacity: 0;
    }
    100% {
        left: 280px;
        transform:scale(0.7,0.7);
        opacity: 0;
    }
}
.homecard1{
    pointer-events: none;
    position:absolute;
    left: 80px;
    top: 210px;
    width: 540px;
    height: 288px;
    background-color: rgba(0,0,0,0.01);
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
