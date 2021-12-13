<template lang='pug'>
.cardetail
    .cdd_car
        threecard(:modelUrl="carInf.modelUrl" :cid="carInf.cid" :wid="315" :hei="300")
    .cdd_inf
        .cdd_state(:style="ccstate") {{carInf.state}}
        .cdd_name {{carInf.name}}
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
                    name: 'Lamborghini',
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
@import url('../../common/style/common.less');
.cardetail{
    position: relative;
    top:0px ;
    left: 0px;
    height: 628px;
    width: 315px;
    .cdd_car{
        width: 100%;
        height: 300px;
        margin-right:75px;
        margin-bottom: 20px;
    }
    .cdd_inf{
        width: 100%;
        height: 308px;
        color: #FFFFFF;
        .cdd_state{
            height: 12px;
            line-height: 12px;
            font-size: 12px;
            font-family:DMSans_R;
            font-weight: bold;
            letter-spacing: 1px;
            color: '#EA3344';
        }
        .cdd_name{
            margin-top: 20px;
            .f24();
            .f_d();
        }
        .cdd_kvs{
            margin-top: 20px;
            display: flex;
            flex-wrap: wrap;
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
            width: 315px;
            height: 40px;
            line-height: 20px;
            font-size: 16px;
            color: #FFFFFF;
        }
        .cc_mint{
            margin-top: 40px;
        }
    }
}
</style>
