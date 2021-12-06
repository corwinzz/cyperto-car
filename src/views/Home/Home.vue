<template lang='pug'>
.mainbackground
    ThreeCardBloom(:modelUrl="carInf.modelUrl" :cid="carInf.cid" :wid="1100" :hei="900")
    homecard1(v-show="getPageNo==0")
    garagecard(v-show="getPageNo==1")
</template>

<script>
import ThreeCardBloom from '@/components/Three3D/ThreeCardBloom'
import homecard1 from './homeCard1.vue'
import garagecard from '../Garage/garagecard.vue'
import { mapGetters } from 'vuex'
export default {
    name: 'Home',
    components: {
        homecard1, ThreeCardBloom, garagecard
    },
    computed: {
        ...mapGetters('animpage', ['getPageNo']),
        route() {
            return this.$route.name
        }
    },
    data() {
        return {
            carInf: {
                modelUrl: '/Lamborghini/home/scene.gltf',
                // modelUrl: '/Lamborghini/gltf/high/black.glb',
                cid: 999
            }
        }
    }
}
</script>

<style lang="less" scoped>
.mainbackground{
    width: 100%;
    height: 100%;
}
</style>
