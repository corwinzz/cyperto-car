<template lang='pug'>

.menu
    template(v-for='itm,idx in pages')
        .menuTxt(@click="linkTo(itm,idx)" :style="itm.nam==route?isLine:''") {{itm.label}}

</template>

<script>
import { mapMutations } from 'vuex'
export default {
    name: 'App',
    components: {},
    data() {
        return {
            page: 'home',
            pages: [{
                nam: 'Home', label: 'HOME'
            }, {
                nam: 'garage', label: 'GARAGE'
            }, {
                nam: 'story', label: 'STORY'
            }, {
                nam: 'roadmap', label: 'ROADMAP'
            }, {
                nam: 'partners', label: 'PARTNERS'
            }],
            isLine: {
                borderBottom: '2px solid white'
            }
        }
    },
    mounted() {
    },
    computed: {
        route() {
            return this.$route.name
        }
    },
    methods: {
        ...mapMutations('animpage', {
            setPageInf: 'setPageInf'
        }),
        linkTo(itm, idx) {
            console.log(Date())
            this.setPageInf({ from: this.route, to: itm.nam })
            this.$router.push(itm.nam)
            this.$emit('newPage', idx)
        }
    }
}
</script>
<style lang="less" scoped>
.menu{
    display: flex;
    height: 100px;
    padding-top:36px ;
    padding-left:60px;

    .menuTxt{
        margin-right:20px;
        margin-left:20px ;
        font-family: 'DMSans_B';
        font-size: 14px;
        font-weight: bold;
        vertical-align: top;
        line-height: 28px;
        height: 28px;
        color: white;
        border-bottom-width: calc( 100% - 10px);
    }
}

</style>
