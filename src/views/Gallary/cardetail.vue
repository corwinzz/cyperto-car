<template lang='pug'>
div
    .cardetail
        .cdd_car
            threecard(:modelUrl="carInf.modelUrl" :cid="carInf.cid" :wid="480" :hei="480")
        .cdd_inf
            .cdd_state(:style="ccstate") {{carInf.state}}
            .cdd_name {{carInf.name}}
            .cdd_kvs
                .kvs(v-for="itm,idx in carInf.kvs")
                    .kvs_k {{itm.lab}}
                    .kvs_v {{itm.val}}
            .cdd_other {{carInf.other}}
            .cc_mint
                btnStart(@click.native='toMint' txt="Mint" bkCol='red')
    //- .btn_tolist(@click='toList')
    //-     svg-icon(svgName="arrow_left" className="svg_back")
    //-     .btn_txt back to list
    btn(@click.native='toList' class='btn_tolist')
</template>

<script>
import btnStart from '../../components/BtnStart/btnstart.vue'
import btn from '../../components/BtnStart/Btn.vue'
import threecard from '../../components/Three3D/ThreeCard.vue'
import { carTypes } from '../../plugins/static'
import { mapMutations, mapState, mapActions } from 'vuex'
let tabCols = {
    NORMAL: 'green',
    RARE: 'red'
}

export default {
    name: 'cardetail',
    components: { threecard, btnStart, btn },
    props: {
        carInf: {
            type: Object,
            default: () => {
                return {
                    modelUrl: '',
                    state: 'NORMAL',
                    name: 'Lamborghini',
                    kvs: [{ lab: 'Acceleration', val: '?' },
                        { lab: 'Speed', val: '?' },
                        { lab: 'Control', val: '?' },
                        { lab: 'Range', val: '?' },
                        { lab: 'Color', val: '?' }],
                    other: 'Inspired by Ready Player One, CyberCar is a composable NFT racing game with varius rules and track.'
                }
            }
        }
    },
    data() {
        return {
            cid: 0
        }
    },
    computed: {
        ...mapState(['account', 'connector']),
        ccstate() {
            let col = tabCols[this.carInf.state]
            return {
                borderColor: col,
                color: col
            }
        }
    },
    activated() {
        this.cid = this.$route.query.cid
        this.carInf.name = carTypes[this.cid].name
        this.carInf.other = carTypes[this.cid].description
        this.carInf.modelUrl = carTypes[this.cid].modelUrl
        this.carInf.state = carTypes[this.cid].state
    },
    mounted() {
    },
    methods: {
        ...mapActions(['mint', 'isMintable', 'isOnlyWhitelist', 'getWhitelist', 'checkBalance']),
        ...mapMutations('animpage', {
            setIsTitle: 'setIsTitle',
            setTitleInf: 'setTitleInf'
        }),
        toList() {
            // this.setIsTitle(true)
            this.$router.push({ name: 'gallary' })
        },
        async toMint() {
            const fee = this.$route.query.fee.split(' ')[0] // 1.6 ETH
            if (this.$route.query.rest === this.$route.query.total) {
                this.setTitleInf({
                    title: 'Error',
                    content: 'no more car!'
                })
                return
            } else if (!await this.isMintable()) {
                // startMint开关未开启
                this.setTitleInf({
                    title: 'Error',
                    content: 'mint is not start!'
                })
                return
            } else if (await this.isOnlyWhitelist()) {
                // 白名单开启，验证是否是白名单地址
                const whitelistAddress = await this.getWhitelist()
                if (!whitelistAddress) {
                    this.setTitleInf({
                        title: 'Error',
                        content: 'only whitelist address can mint!'
                    })
                    return
                }
            }
            if (!await this.checkBalance(fee)) {
                // 验证余额不足的情况
                this.setTitleInf({
                    title: 'Error',
                    content: 'insufficient funds'
                })
                return
            }
            const params = {
                value: fee,
                _class: this.$route.query.class,
                _mode: this.$route.query.mode
            }
            if (this.connector.name === 'MetaMask') {
                this.setTitleInf({
                    title: 'Pending...',
                    content: ''
                })
            }
            await this.mint(params)
            // console.log('tx->' + result)
            this.setTitleInf({
                title: 'Success',
                content: 'Mint successful!'
            })
        }
    }
}
</script>

<style lang="less" scoped>
.svg_back{
    width: 12px;
    height: 6px;
    color:#FCFCFD ;
    margin-top: 15px;
    margin-left:18px ;
}
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
        font-family: 'DMSans_B';
        font-size: 14px;
        font-weight: bold;
        height: 40px;
        line-height: 40px;
        color: #FCFCFD;
        margin-right: 16px;
        margin-top: -2px;
    }
}
.cardetail{
    position: absolute;
    top:240px ;
    left: 80px;
    height: 480px;
    width: 1195px;
    display: flex;
    .cdd_car{
        width: 480px;
        height: 100%;
        margin-right:75px;
    }
    .cdd_inf{
        height:100%;
        .cdd_state{
            height: 50px;
            line-height: 50px;
            font-family:DMSans_R;
            font-weight: bold;
            letter-spacing: 1px;
            color: '#EA3344';
            font-size: 30px;
        }
        .cdd_name{
            margin-top: 20px;
            font-size: 60px;
            font-family: Mon;
            height: 72px;
            line-height: 72px;
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
        .cc_mint{
            margin-top: 40px;
        }
    }
}
</style>
