<template lang='pug'>
.Title
    .Title_header {{getTitleInf.title}}
    .Title_markers {{getTitleInf.content}}
    .Title_foot(@click="onClose")
        .btn_close Close
</template>
<script>
import { connectors } from '../../connectors'
import { mapGetters, mapMutations } from 'vuex'
export default {
    name: 'wallet',
    components: {

    },
    data() {
        return {
            connectors,
            page: 'home'
        }
    },
    mounted() {
    },
    computed: {
        ...mapGetters('animpage', ['getTitleInf'])
    },
    methods: {
        ...mapMutations('animpage', {
            setIsTitle: 'setIsTitle'
        }),
        onClose() {
            this.setIsTitle(false)
        }
    }
}
</script>
<style lang="less" scoped>
@import url('../../common/style/common.less');
.Title{
    position:fixed;
    top:calc(50% - 160px) ;
    left: calc(50% - 160px);
    width: 315px;
    height: 325px;
    background: black;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0px 20px 30px;
    color: white;
    .Title_header{
        margin-top: 30px;
        height: 24px;
        .f24();
        .f_mon();
        margin-bottom: 10px;
    }
    .Title_markers{
        margin: 20px;
        .f20_14();
        .f_d();
        letter-spacing: 1px;
    }
    .Title_foot{
        margin-top: 10px;
        width: 100%;
        .btn_close{
            height: 60px;
            line-height: 60px;
            font-size: 14px;
            font-weight: 700;
            width: 200px;
            margin: auto;
            text-align: center;
            border-radius: 30px;
            border: 2px solid #777E90;
            color: #FCFCFD;
        }
    }
}
</style>
