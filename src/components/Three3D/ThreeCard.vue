<template lang='pug'>
.threecard(:ref="`threecard_${cid}`" @mouseenter="onMouseEnter")
    .card_viw_3d(:ref="`card_viw_3d_${cid}`" v-show="isLoaded" ref='threecardview')
    img.preloadimage(:width="wid" :height='hei' :src='preloadImg' v-show="!isLoaded" ref='threecardimg' :class="[isLoaded?'loaded':'']")
</template>

<script >
import { isGLTF1 } from './util'
import Vue from 'vue'
import * as THREE from 'three/build/three.module.js'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { Group, Raycaster, Vector2 } from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js'

let conf = { path_draco: '/lib/draco/gltf/' }
export default Vue.extend({
    props: {
        preloadImg: {
            type: String,
            default: '/img/car.png'
        },
        modelUrl: { type: String, default: '' },
        cid: { type: Number, default: 0 },
        hei: { type: Number, default: 0 },
        wid: { type: Number }
    },
    data() {
        return {
            isLoaded: false,
            isLoading: false
        }
    },
    watch: {
        modelUrl: function() {

        }
    },
    created() {
        let t = this
        t.camera = null
        t.scene = null
        t.renderer = null
        t.controls = null
        t.gp_obj = new Group()
        t.raycaster = new Raycaster()
        t.mouse = new Vector2()
    },
    mounted() {
    },
    methods: {
        onMouseEnter() {
            if (!this.isLoaded && !this.isLoading) {
                if (this.scene === null) {
                    this.init()
                }
                this.addModels()
            }
        },
        addModels() {
            let t = this
            t.isLoading = true
            if (t.modelUrl === '') return
            t.gp_obj.children = []
            const dracoLoader = new DRACOLoader()
            dracoLoader.setDecoderPath(conf.path_draco)
            let loader = new GLTFLoader()
            loader.setDRACOLoader(dracoLoader)
            loader.load(t.modelUrl, function(gltf) {
                t.gp_obj.add(gltf.scene)
                t.isLoading = false
                t.isLoaded = true
            })
        },
        load(e) {
            let t = this
            let reader = new FileReader()
            let files = e.target.files
            let file = files[0]
            reader.addEventListener('progress', function(event) {
                let size = '(' + Math.floor(event.total / 1000) + ' KB)'
                let progress = Math.floor((event.loaded / event.total) * 100) + '%'
                console.log('Loading', file.name, size, progress)
            })
            let extension = file.name.split('.').pop().toLowerCase()
            switch (extension) {
                case 'glb':
                    reader.addEventListener('load', async function(event) {
                        let contents = event.target.result
                        let loader
                        if (isGLTF1(contents)) {
                            alert('Import of glTF asset not possible. Only versions >= 2.0 are supported. Please try to upgrade the file to glTF 2.0 using glTF-Pipeline.')
                        } else {
                            let dracoLoader = new DRACOLoader()
                            dracoLoader.setDecoderPath(conf.path_draco)
                            loader = new GLTFLoader()
                            loader.setDRACOLoader(dracoLoader)
                            loader.parse(contents, '', function(result) {
                                let scene = result.scene
                                t.gp_obj.add(...scene.children[0].children)
                            })
                        }
                    }, false)
                    reader.readAsArrayBuffer(file)
                    break
            }
        },
        init() {
            let t = this
            const mDom = t.$refs[`card_viw_3d_${t.cid}`]
            t.scene = new THREE.Scene()
            t.camera = new THREE.PerspectiveCamera(45, t.wid / t.hei, 0.01, 100000)
            t.camera.position.set(800, 800, 800)
            t.renderer = new THREE.WebGLRenderer({ antialias: true })
            t.renderer.setClearColor(0x2d2d2d, 1.0)
            t.renderer.setSize(t.wid, t.hei)
            mDom.appendChild(t.renderer.domElement)

            t.controls = new OrbitControls(t.camera, t.renderer.domElement)
            t.controls.dampingFactor = 0.25
            t.controls.minDistance = 0.001
            t.controls.maxDistance = 10000
            t.controls.addEventListener('change', t.render)
            t.initLight()
            t.initScene()
            t.animate()
        },
        initLight() {
            let t = this
            t.scene.add(new THREE.AmbientLight(0xffffff))
            let point = new THREE.PointLight(0xffffff, 5)
            point.position.set(50000, 50000, 50000)
            t.scene.add(point)
            let point1 = new THREE.PointLight(0xffffff, 5)
            point1.position.set(0, -50000, 50000)
            t.scene.add(point1)
            let point2 = new THREE.PointLight(0xffffff, 5)
            point2.position.set(-50000, 0, 50000)
            t.scene.add(point2)
        },
        initScene() {
            let t = this
            t.scene.add(t.gp_obj)
        },
        animate() {
            let t = this
            t.controls.update()
            t.render()
            requestAnimationFrame(t.animate)
        },
        render() {
            let t = this
            t.renderer.render(t.scene, t.camera)
        }
    }
})
</script>

<style lang="less" scoped>
.threecard{
    position: relative;
    height: 100%;
    width: 100%;
    .card_viw_3d{
        height: 100%;
        width: 100%;
    }
}
.preloadimage{
    position:absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
}
</style>
