<template lang='pug'>
.roadmap(ref='roadmap')
    .blurWindow(v-show='wind==1')
        .title ROADMAP
        .txt Inspired by Ready Player One, CyberCar is a composable NFT racing game with various rules and track.
        .line
    .phaseCurve
        <svg-icon svgName="p3" :className="`svg_curve`"></svg-icon>
    template(v-for='itm,idx in phases')
        Phase(:content='itm' :pos='itm.pos')
</template>

<script>
import Phase from './phase.vue'
export default {
    name: 'roadmap',
    components: {
        Phase
    },
    data() {
        return {
            page: 'home',
            wind: 1,
            phases: [{
                t1: 'Phase 01',
                t2: 'Cyber Asset Offering (CAO)',
                t3: '1.1 Games asset sold/minted on the website deployed on Polygon.',
                t4: '1.2 CAO will not be conducted one-time and whitelist will be required.',
                pos: {
                    left: 80,
                    top: 414,
                    width: 311
                }
            }, {
                t1: 'Phase 02',
                t2: 'NFT Unbundle&Upgrade',
                t3: '2.1 Accesory Net of Cyber Car will be listed on the integrated marketplace.',
                t4: '2.2 Unbunding program of Cybercar will be launchd.\nPlayers can unbundle and upgrade CyberCar with specific accesories.',
                pos: {
                    left: 438,
                    top: 362,
                    width: 326
                }
            }, {
                t1: 'Phase 03',
                t2: 'Browser MVP Game',
                t3: '3.1 A minimum viable product version of CyberCar will be launched as a browser-based game. MVP game will be focused on the pre-game strategy with various prize, including goverance token, utility token, cybercar, accessories, etc.',
                t4: '3.2 Goverance token and utility token will be officially released and deployed in the MVP game.',
                pos: {
                    left: 764,
                    top: 342,
                    width: 326
                }
            }, {
                t1: 'Phase 04',
                t2: 'Beta Version',
                t3: '4.1 Beta version will be developed based on Unity3D to supply high-quality graphics and control and will be deployed on IOS, Android, MAC and Windows.',
                t4: '4.2 All assets purchased before will be fully displayed and playable in the beta version.',
                pos: {
                    left: 993,
                    top: 108,
                    width: 326
                }
            }]
        }
    },
    mounted() {
        // this.toggle()
    },
    methods: {
        toggle() {
            let dom = this.$refs.roadmap
            dom.classList.toggle('anm_bk_show', true)
        }
    },
    watch: {
        $route(to, from) {
            if (to.name === 'roadmap') {
                // this.toggle()
            }
        }
    }
}
</script>
<style lang="less" scoped>
.phaseCurve{
    position:absolute;
    top: 110px;
    left:100px;
}
.svg_curve{
    width: 1100px;
    height: 418px;
    color: #EA3344;
}
.roadmap{
    height: 100%;
    width: 100%;
    background: url('/img/b_roadmap1.png') no-repeat center fixed;
    background-size:100% 100%;
}
.blurWindow{
    z-index: 2;
    position: relative;
    left: 80px;
    top: 175px;
    color: #fff;
    font-size: 15px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    width: 460px;
    height: 190px;
    padding: 20px;
    .title{
        height: 48px;
        line-height: 48px;
        font-family: Mon;
        font-size: 40px;
        font-weight: 400;
        margin-bottom:20px;
    }
    .txt{
        height: 60px;
        line-height: 20px;
        font-size: 16px;
        font-family:DMSans_R;
    }
    .line{
        margin-top:20px ;
        width:50px ;
        height: 0px;
        border-top:1px solid #EA3344;
    }
}
.blurWindow::before {
    background: url('/img/b_roadmap1.png') no-repeat center fixed;
    background-size:100% 110%;
    content: '';
    display: block;
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: -10px;
    filter: blur(10px);
}
</style>
