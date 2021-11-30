<template lang='pug'>
.cardetail
    .cdd_car
        threecard(:modelUrl="carInf.modelUrl" :cid="carInf.cid" :wid="315" :hei="300")
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
                    nam: 'Lamborghini',
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
        ...mapState(['account']),
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
        // this.cid = this.$route.params.cid
        // console.log('cit' + this.cid)
        // this.carInf.name = carTypes[this.cid].name
        // this.carInf.other = carTypes[this.cid].description
        // this.carInf.modelUrl = carTypes[this.cid].modelUrl
        // this.carInf.state = carTypes[this.cid].state
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
            console.log(this.$route.query)
            console.log(this.$route.query.total)
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
            await this.mint(params)
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
