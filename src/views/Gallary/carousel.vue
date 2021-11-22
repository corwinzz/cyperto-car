<template lang='pug'>
div
    .carousel
        .cardmini(v-for="itm,idx in cards")
            cardetailMini(:carInf="itm")
    btn(@click.native='toList' class='btn_tolist')
</template>

<script>
import btn from '../../components/BtnStart/Btn.vue'
import { crsls } from './carlist'
import cardetailMini from './cardetailMini.vue'
let tabCols = {
    NORMAL: 'green',
    RARE: 'red'
}

export default {
    name: 'carousel',
    components: { cardetailMini, btn },
    data() {
        return {
            cards: []
        }
    },
    props: {

    },
    computed: {
        ccstate() {
            let col = tabCols[this.carInf.state]
            return {
                borderColor: col,
                color: col
            }
        }
    },
    mounted() {
        this.cards = crsls
    }
}
</script>

<style lang="less" scoped>
.btn_tolist{
    position: absolute;
    left: 80px;
    top: 160px;
    height: 40px;
    width: 140px;
    border-radius: 20px;
    border: 2px solid #777E90;
    display: flex;
    justify-content: space-between;
    .btn_txt{
        font-family: 'DMSans_R';
        font-size: 14px;
        font-weight: bold;
        height: 40px;
        line-height: 40px;
        color: #FCFCFD;
        margin-right: 16px;
        margin-top: -2px;
    }
}
.carousel{
    width: calc(100% - 80px);
    height: calc(100% - 240px);
    display: flex;
    flex-direction: column;
    position:absolute;
    top: 240px;
    left: 80px;
    overflow: auto;
    .cardmini{
        height: 270px;
        width: 1255px;
        border-bottom:1px solid rgba(255,255,255,0.2);
        margin-bottom: 40px;
    }
}
.scrollbar {
  width : 30px;
  height: 300px;
  margin: 0 auto;
}
.gallary::-webkit-scrollbar {
  /*滚动条整体样式*/
  width : 10px;  /*高宽分别对应横竖滚动条的尺寸*/
  height: 1px;
}
.gallary::-webkit-scrollbar-thumb {
  /*滚动条里面小方块*/
  border-radius: 10px;
  box-shadow   : inset 0 0 5px rgba(0, 0, 0, 0.2);
  background   : #535353;
}
.gallary::-webkit-scrollbar-track {
  /*滚动条里面轨道*/
  box-shadow   : inset 0 0 5px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  background   : #ededed;
}
</style>
