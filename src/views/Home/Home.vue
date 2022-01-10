<template lang='pug'>
.mainbackground
    ThreeCardBloom(:modelUrl="carInf.modelUrl" :cid="carInf.cid" :wid="wid" :hei="hei")
    transition(name='transitcard' mode='out-in')
        homecard1(v-if="getPageNo==0")
        garagecard(v-if="getPageNo==1")
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
    watch: {
        getWndSize: {
            handler(newVal, oldVal) {
                this.wid = newVal.wid
                this.hei = newVal.hei
            },
            deep: true,
            immediate: true
        }
    },
    computed: {
        ...mapGetters('animpage', ['getPageNo', 'getWndSize']),
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
            },
            wid: 900,
            hei: 640
        }
    }
}
</script>

<style lang="less" scoped>
.mainbackground{
    width: 100%;
    height: 100%;
}
.transitcard-enter-active,
.transitcard-leave-active{
    transition: all 400ms ease;
}
.transitcard-leave-to,
.transitcard-enter{
    opacity: 0;
    transform: translateX(50px);
}
</style>
