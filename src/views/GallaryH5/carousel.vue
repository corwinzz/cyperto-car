<template lang='pug'>
.carouselH5
    .carousel
        .cardmini(v-for="itm,idx in cards")
            cardetailMi(:carInf="itm")
    btn(@click.native='toList' class='btn_tolist')
</template>

<script>
import btn from '../../components/BtnStart/Btn.vue'
import { crsls } from './carlist'
import cardetailMi from './cardetailMi.vue'
import { mapActions, mapState } from 'vuex'

let tabCols = {
    NORMAL: 'green',
    RARE: 'red'
}

export default {
    name: 'carousel',
    components: { cardetailMi, btn },
    data() {
        return {
            cards: []
        }
    },
    props: {

    },
    computed: {
        ...mapState(['account']),
        ccstate() {
            let col = tabCols[this.carInf.state]
            return {
                borderColor: col,
                color: col
            }
        }
    },
    async mounted() {
        // this.cards = await this.getCarsByOwner()
        console.log(crsls)
        this.cards = crsls
    },
    methods: {
      ...mapActions(['getCarsByOwner']),
      toList() {
          this.$router.push({ name: 'gallary3D' })
      }
    }
}
</script>

<style lang="less" scoped>
.carouselH5{
    width: calc(100% - 10px);
    height: calc(100% - 90px);
    top: 90px;
    left: 0px;
    position:absolute;
    background: url('/img/b_gallary.png') no-repeat center fixed;
    background-size: 100% 100%;
    display: flex;
    flex-direction: column;
}
.btn_tolist{
    position: absolute;
    left: 30px;
    top: 20px;
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
    width: calc(100% - 30px);
    height: calc(100% - 90px);
    display: flex;
    flex-direction: column;
    position:absolute;
    top: 70px;
    left: 30px;
    overflow: auto;
    .cardmini{
        height: 625px;
        width: 315px;
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
