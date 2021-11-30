<template lang='pug'>
.gallary
    template(v-for="itm,idx in cards")
        cardcar(:carInf="itm")
</template>

<script>

import cardcar from './cardcar.vue'
import { allcar } from './carlist'
import { mapActions, mapState } from 'vuex'
export default {
    name: 'gallary',
    props: {

    },
    components: {
        cardcar
    },
    data() {
        return {
            cards: []
        }
    },
    async mounted() {
        this.cards = allcar
        // this.cards = await this.getMintSupply()
    },
    methods: {
        ...mapActions(['getMintSupply'])
    },
    computed: {
        ...mapState(['account', 'carList'])
    }
}
</script>

<style lang="less" scoped>
.gallary{
    width: calc(100% - 20px);
    height: calc(100% - 120px);
    display: flex;
    flex-wrap: wrap;
    position:absolute;
    top: 120px;
    left: 20px;
    overflow: auto;
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
