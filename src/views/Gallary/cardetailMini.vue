<template lang='pug'>
.cardetailmini
    .cdd_car
        threecard(:modelUrl="carInf.modelUrl" :cid="carInf.cid" :wid="230" :hei="230")
    .cdd_inf
        .cdd_state(:style="ccstate") {{carInf.state}}
        .cdd_name {{carInf.nam}}
        .cdd_kvs
            .kvs(v-for="itm,idx in carInf.kvs")
                .kvs_k {{itm.lab}}
                .kvs_v {{itm.val}}
        .cdd_other {{carInf.other}}
</template>

<script>
import threecard from '../../components/Three3D/ThreeCard.vue'
let tabCols = {
    NORMAL: 'green',
    RARE: 'red'
}

export default {
    name: 'cardetailmini',
    components: { threecard },
    props: {
        carInf: {
            type: Object,
            default: () => {
                return {
                    cid: 0,
                    modelUrl: '',
                    state: 'NORMAL',
                    nam: 'Lamborghini',
                    kvs: [{ lab: 'Acceleration', val: '3.5 ETH' },
                        { lab: 'Speed', val: '3.5 ETH' },
                        { lab: 'Control', val: '3.5 ETH' },
                        { lab: 'Range', val: '3.5 ETH' },
                        { lab: 'Color', val: 'red' }],
                    other: 'Inspired by Ready Player One, CyberCar is a composable NFT racing game with varius rules and track.'
                }
            }
        }
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

    }
}
</script>

<style lang="less" scoped>
.cardetailmini{
    height: 230px;
    width: 945px;
    margin-bottom: 40px;
    display: flex;
    .cdd_car{
        width: 230px;
        height: 230px;
    }
    .cdd_inf{
        margin-top: 10px;
        margin-left:75px;
        height:210px;
        width:640px ;
        .cdd_state{
            height: 30px;
            line-height: 30px;
            font-family:DMSans_R;
            font-weight: bold;
            letter-spacing: 1px;
            color: '#EA3344';
            font-size: 24px;
        }
        .cdd_name{
            font-family: Mon;
            margin-top: 20px;
            font-size: 30px;
            height: 36px;
            line-height: 36px;
            color: #FFFFFF;
        }
        .cdd_kvs{
            margin-top: 20px;
            display: flex;
            .kvs{
                height: 44px;
                width: 135px;
                margin-right: 10px;
                .kvs_k{
                    height: 20px;
                    line-height: 20px;
                    font-size: 12px;
                    color: #777E90;
                }
                .kvs_v{
                    height: 24px;
                    line-height: 24px;
                    font-size: 14px;
                    color: #FCFCFD;
                }
            }
        }
        .cdd_other{
            margin-top: 20px;
            width: 640px;
            height: 40px;
            line-height: 20px;
            font-size: 16px;
            color: #FFFFFF;
        }
    }
}
</style>
