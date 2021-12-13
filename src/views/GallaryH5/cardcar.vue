<template lang='pug'>
.cardcar
    .area3D
        threecard(:modelUrl="carInf.modelUrl" :cid="carInf.cid" :wid="264" :hei="310")
    .cc_row1
        .cc_nam {{carInf.name}}
        .cc_state(:style="ccstate") {{carInf.state}}
    .divide
    .cc_row2
        .cc_fee {{carInf.fee}}
        .cc_rate {{`${carInf.rest}/${carInf.total}`}}
    .cc_mint
        .mint_t(@click='testLinkTo') Mint
</template>

<script>
import threecard from '../../components/Three3D/ThreeCard.vue'
import { mapActions } from 'vuex'
import wallet from '../pop/wallet.vue'

let tabCols = {
    NORMAL: 'green',
    RARE: 'red'
}

export default {
    name: 'Home',
    components: { threecard, wallet },
    props: {
        // eslint-disable-next-line vue/require-prop-type-constructor
        isWallet: false,
        carInf: {
            type: Object,
            default: () => {
                return {
                    cid: 0,
                    class: 0,
                    mode: 0,
                    name: 'Amazing digital art',
                    state: 'NORMAL',
                    fee: '2.00 ETH',
                    rest: 1,
                    total: 2000,
                    modelUrl: '',
                    preloadImg: ''
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

    },
    methods: {
        ...mapActions(['checkChain']),
        testLinkTo() {
            this.$router.push({
                name: 'cardetail',
                query: {
                    cid: this.carInf.cid,
                    class: this.carInf.class,
                    mode: this.carInf.mode,
                    fee: this.carInf.fee,
                    rest: this.carInf.rest,
                    total: this.carInf.total
                }
            })
        },
        async linkTo() {
            if (await this.checkChain()) {
                this.$router.push({
                    name: 'cardetail',
                    query: {
                        cid: this.carInf.cid,
                        class: this.carInf.class,
                        mode: this.carInf.mode,
                        fee: this.carInf.fee,
                        rest: this.carInf.rest,
                        total: this.carInf.total
                    }
                })
            } else {
                this.isWallet = true
            }
        }
    }
}
</script>

<style lang="less" scoped>
.svg_card{
    width: 20px;
    height: 20px;
    color: white;
    font-size: 20px;
}
.cardcar{
    margin: 10px;
    width: 304px;
    height: 502px;
    background-color: black;
    padding: 20px;
    .area3D{
        width: 264px;
        height: 310px;
        background-color: rgb(40, 40, 40);
        margin-bottom: 20px;
    }
    .cc_row1{
        height: 24px;
        line-height: 24px;
        display: flex;
        justify-content:space-between;
        .cc_nam{
            color: white;
            font-size: 16px;
            font-weight: 700px;
            font-family: DMSans_R;
        }
        .cc_state{
            border-radius: 3px;
            font-size: 12px;
            font-weight: 700px;
            font-family: DMSans_R;
            border:1px solid red;
            padding-bottom:22px;
            padding-left:5px ;
            padding-right: 5px;
            padding-top: 0px;
            // vertical-align: middle;
        }
    }
    .divide{
        width: 100%;
        border-top: 1px solid rgba(255, 255, 255, 0.25);
        margin: 12px 0px;
    }
    .cc_row2{
        height: 20px;
        line-height: 20px;
        display: flex;
        justify-content:space-between;
        .cc_fee{
            font-family: Poppins;
            font-style: SemiBold;
            font-size: 20px;
            color: white;
        }
        .cc_rate{
            font-family: Poppins;
            font-style: Regular;
            font-size: 12px;
            color:#777E90;
        }
    }
    .cc_mint{
        margin: auto;
        margin-top:20px ;
        height: 40px;
        width: 91px;
        border-radius: 20px;
        border: 2px solid #777E90;
        display: flex;
        justify-content: space-around;
        padding-top: 10px;
        .mint_i{
            width: 16px;
            height: 16px;
        }
        .mint_t{
            height: 16px;
            line-height: 16px;
            font-size: 14px;
            font-family: DMSans_R;
            font-weight: bold;
            color: white;
        }
    }
}
</style>
