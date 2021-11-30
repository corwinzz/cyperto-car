<template lang='pug'>
.roadmap(ref='roadmap')
    roadmapCard
    template(v-for='itm,idx in phases')
        Phase(:content='itm' :pos='itm.pos')
</template>

<script>
import roadmapCard from './roadmapCard'
import Phase from './phase.vue'
export default {
    name: 'roadmap',
    components: {
        Phase, roadmapCard
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
                    left: 24,
                    top: 0,
                    width: 311
                }
            }, {
                t1: 'Phase 02',
                t2: 'NFT Unbundle&Upgrade',
                t3: '2.1 Accesory Net of Cyber Car will be listed on the integrated marketplace.',
                t4: '2.2 Unbunding program of Cybercar will be launchd.\nPlayers can unbundle and upgrade CyberCar with specific accesories.',
                pos: {
                    left: 24,
                    top: 0,
                    width: 326
                }
            }, {
                t1: 'Phase 03',
                t2: 'Browser MVP Game',
                t3: '3.1 A minimum viable product version of CyberCar will be launched as a browser-based game. MVP game will be focused on the pre-game strategy with various prize, including goverance token, utility token, cybercar, accessories, etc.',
                t4: '3.2 Goverance token and utility token will be officially released and deployed in the MVP game.',
                pos: {
                    left: 24,
                    top: 0,
                    width: 326
                }
            }, {
                t1: 'Phase 04',
                t2: 'Beta Version',
                t3: '4.1 Beta version will be developed based on Unity3D to supply high-quality graphics and control and will be deployed on IOS, Android, MAC and Windows.',
                t4: '4.2 All assets purchased before will be fully displayed and playable in the beta version.',
                pos: {
                    left: 24,
                    top: 0,
                    width: 326
                }
            }]
        }
    },
    mounted() {
        this.toggle()
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
                this.toggle()
            }
        }
    }
}
</script>
<style lang="less" scoped>
.roadmap{
    height: 160%;
    width: 100%;
    background: url('/img/b_roadmap1.png') no-repeat center fixed;
    background-size:100% 100%;
}

</style>
