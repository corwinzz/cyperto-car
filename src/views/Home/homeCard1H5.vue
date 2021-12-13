<template lang='pug'>
.homecard1(ref='homecard')
    .homecard_t1 CyberCar
    .homecard_t2 PITCH DECK
    .homecard_t3 "Thanks for Playing My Game"
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
    },
    watch: {
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
@import url('../../common/style/common.less');
.homecard1{
    position:absolute;
    left: 30px;
    top: 30px;
    width: 270px;
    height: 126px;
    background-color: rgba(0,0,0,0.01);
    color: white;
    .homecard_t1{
        height: 48px;
        .f48();
        .f_mon();
    }
    .homecard_t2{
        height: 24px;
        .f24();
        .f_mon();
        margin-bottom: 20px;
    }
    .homecard_t3{
        height: 24px;
        .f14();
        .f_d();
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
