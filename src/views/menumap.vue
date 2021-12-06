<template lang='pug'>

.menu
    template(v-for='itm,idx in pages')
        .menuTxt(@click="linkTo(itm,idx)" :style="getPageNo==idx?isLine:''") {{itm.label}}

</template>

<script>
import { mapMutations, mapGetters } from 'vuex'
export default {
    name: 'App',
    components: {},
    data() {
        return {
            page: 'home',
            pages: [{
                nam: 'Home', label: 'HOME'
            }, {
                nam: 'Home', label: 'GARAGE'
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
    watch: {
        '$route' (to, from) {
            console.log(to, from)
        }
    },
    computed: {
        ...mapGetters('animpage', ['getPageNo']),
        route() {
            return this.$route.name
        }
    },
    methods: {
        ...mapMutations('animpage', {
            setPageInf: 'setPageInf',
            setPageNo: 'setPageNo'
        }),
        linkTo(itm, idx) {
            this.setPageInf({ from: this.route, to: itm.nam })
            this.setPageNo(idx)
            this.$router.push({ name: itm.nam, params: { label: itm.label, id: idx } })
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
