<template lang='pug'>
.cardetailH5
    btn(@click.native='toList' class='btn_tolist')
    .cardetail
        .cdd_car
            threecard(:modelUrl="carInf.modelUrl" :cid="carInf.cid" :wid="315" :hei="300")
        .cdd_inf
            .cdd_state(:style="ccstate") {{carInf.state}}
            .cdd_name {{carInf.name}}
            .cdd_other {{carInf.other}}
            .cc_mint
                btnStart(@click.native='toMint' txt="Mint" bkCol='red')
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
    name: 'cardetailH5',
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
            this.$router.push({ name: 'gallaryH5' })
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
@import url('../../common/style/common.less');
.cardetailH5{
    position:absolute;
    width: calc(100% - 10px);
    height: calc(100% - 90px);
    top: 90px;
    left: 0px;
    background: url('/img/b_gallary.png') no-repeat center fixed;
    background-size: 100% 120%;
    overflow: auto;
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
    .f_d();
    position: absolute;
    top:90px ;
    left: 20px;
    height: calc(100% - 90px);
    width: 315px;
    .cdd_car{
        width: 100%;
        height: 300px;
        margin-right:75px;
        margin-bottom: 20px;
    }
    .cdd_inf{
        width: 100%;
        height: 220px;
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
        }
        .cdd_other{
            margin-top: 20px;
            width: 315px;
            height: 60px;
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
