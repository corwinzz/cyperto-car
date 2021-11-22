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
.Title{
    position:absolute;
    top:230px ;
    left: calc(50% - 530px/2);
    width: 530px;
    height: 297px;
    background: black;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0px 20px 30px;
    .Title_header{
        margin-top: 30px;
        height: 38px;
        line-height:38px ;
        text-align: center;
        font-family: Mon;
        font-size: 32px;
        color: white;
        margin-bottom: 10px;
    }
    .Title_markers{
        margin: 20px;
        width: 490px;
        height: 80px;
        line-height: 20px;
        font-family: DMSans_R;
        font-size: 16px;
        font-weight: 400;
        text-align: center;
        color: #ffffff;
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
            width: 355px;
            margin: auto;
            text-align: center;
            border-radius: 30px;
            border: 2px solid #777E90;
            color: #FCFCFD;
        }
    }
}
</style>
