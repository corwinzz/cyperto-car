<template lang='pug'>
.garagecard(ref='garagecard')
    .garage_t1 Lamborghini
    .garage_t2 RARE
    template(v-for='itm,idx in paras')
        .garage_row
            .garage_row_lab {{itm.lab}}
            .garage_row_val {{itm.val}}
    .garage_line
</template>

<script>
export default {
    name: 'story',
    data() {
        return {
            paras: [{
                lab: 'Acceleration', val: '234'
            }, {
                lab: 'Speed', val: '249 KM/H'
            }, {
                lab: 'Control', val: 'SSS'
            }, {
                lab: 'Range', val: '430km'
            }]
        }
    },
    computed: {
        pageInf() {
            return this.$store.getters['animpage/getPageInf']
        }
    },
    watch: {
        pageInf: {
            handler(newval, oldval) {
                if (newval.from === 'garage') {
                    let dom = this.$refs.garagecard
                    dom.classList.toggle('anm_show', false)
                    dom.classList.toggle('anm_hide', true)
                }
            },
            deep: true
        },
        $route(to, from) {
            if (to.name === 'garage') {
                let dom = this.$refs.garagecard
                dom.classList.toggle('anm_hide', false)
                dom.classList.toggle('anm_show', true)
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
.anm_hide{
    animation: anm1 500ms reverse;
}
.anm_show{
    animation: anm 300ms;
}
@keyframes anm {
    0% {
        left: 285px;
        width: 540px ;
        opacity: 0;
    }
    80% {
        left:185px ;
        width: 321px;
        opacity: 1;
    }
    100% {
        left:185px ;
        width: 321px;
        opacity: 1;
    }
}
@keyframes anm1 {
    0% {
        left: 285px;
        width: 540px ;
        opacity: 0;
    }
    80% {
        left:185px ;
        width: 321px;
        opacity: 1;
    }
    100% {
        left:185px ;
        width: 321px;
        opacity: 1;
    }
}
.garagecard{
    position:absolute;
    left: 185px;
    top: 240px;
    width: 321px;
    height: 261px;
    background-color: rgba(0,0,0,0.4);
    padding: 20px;
    .garage_t1{
        margin-bottom: 20px;
        line-height: 36px;
        font-size: 30px;
        font-weight: 400;
        font: Monument Extended;
        color: white;
    }
    .garage_t2{
        height: 24px;
        line-height: 24px;
        font-size: 20px;
        font-weight: 700px;
        color: #EA3344;
        margin-bottom: 10px;
    }
    .garage_row{
        display: flex;
        color: #2C80FF;
        font-style: italic;
        .garage_row_lab{
            width: 180px;
        }
        margin-bottom: 10px;
    }
    .garage_line{
        width: 52px;
        height: 0px;
        margin-top: 20px;
        border: 1px solid red;
    }
}
</style>
