<template lang='pug'>
.threecard
    .card_viw_3d(:ref="`card_viw_3d_${cid}`")
</template>

<script >
import tween from '@tweenjs/tween.js'
import { mapGetters } from 'vuex'
import { isGLTF1 } from './util'
import Vue from 'vue'
import * as THREE from 'three/build/three.module.js'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { Group, Raycaster, Vector2 } from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js'
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js'
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js'
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js'

let conf = { path_draco: '/lib/draco/gltf/' }
export default Vue.extend({
    props: {
        modelUrl: { type: String, default: '' },
        cid: { type: Number, default: 0 },
        hei: { type: Number },
        wid: { type: Number }
    },
    data() {
        return {
            pose: new THREE.Vector3(2.5, 2.5, 6.5)
        }
    },
    watch: {
        hei() {
            this.onResize()
        },
        wid() {
            this.onResize()
        },
        modelUrl: function() { this.addModels() },
        getPageNo: function() {
            this.onTween()
        }
    },
    computed: {
        ...mapGetters('animpage', ['getPageNo'])
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
        t.clock = new THREE.Clock()
        t.bloom = {
            exposure: 1,
            bloomStrength: 1.5,
            bloomThreshold: 0,
            bloomRadius: 0
        }
    },
    mounted() {
        let t = this
        t.init()
        t.addModels()
    },
    methods: {
        onTween() {
            if (!this.camera) return
            this.controls.enableRotate = this.getPageNo === 1
            this.controls.enablePan = this.getPageNo === 1
            if (this.getPageNo === 1 || this.getPageNo === 0) {
                let t = this
                let pose1 = {
                    x1: 2.5,
                    y1: 2.5,
                    z1: 6.5
                }
                let pose2 = {
                    x1: 0,
                    y1: 2.2,
                    z1: 7.5
                }
                let tw
                if (this.getPageNo === 1) {
                    tw = new tween.Tween(pose1).to(pose2, 3000)
                } else {
                    tw = new tween.Tween(pose2).to(pose1, 3000)
                }
                tw.onUpdate((obj) => {
                    t.camera.position.set(obj.x1, obj.y1, obj.z1)
                })
                tw.onComplete(() => {
                    t.controls.enabled = true
                    t.tweenCB()
                })
                tw.easing(tween.Easing.Cubic.InOut)
                tw.start()
            }
        },
        tweenCB() {
            // console.log(this.camera.position)
        },
        onResize() {
            if (this.renderer && this.camera) {
                this.camera.aspect = this.wid / this.hei
                this.camera.updateProjectionMatrix()
                this.renderer.setSize(this.wid, this.hei)
            }
        },
        addModels() {
            let t = this
            if (t.modelUrl === '') return
            t.gp_obj.children = []
            const dracoLoader = new DRACOLoader()
            dracoLoader.setDecoderPath(conf.path_draco)
            let loader = new GLTFLoader()
            loader.setDRACOLoader(dracoLoader)
            loader.load(t.modelUrl, function(gltf) {
                const model = gltf.scene
                t.gp_obj.add(model)
                t.mixer = new THREE.AnimationMixer(model)
                const clip = gltf.animations[0]
                t.mixer.clipAction(clip.optimize()).play()
                t.animate()
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
            let hei = mDom.offsetHeight
            let wid = mDom.offsetWidth
            t.scene = new THREE.Scene()
            t.camera = new THREE.PerspectiveCamera(45, wid / hei, 0.01, 1000)
            t.camera.position.copy(t.pose)
            t.renderer = new THREE.WebGLRenderer({ antialias: true })
            t.renderer.setClearColor(0x2d2d2d, 1.0)
            t.renderer.setSize(wid, hei)
            mDom.appendChild(t.renderer.domElement)
            t.addBloomPass()
            t.controls = new OrbitControls(t.camera, t.renderer.domElement)
            t.controls.enableZoom = false
            t.controls.enablePan = false
            t.controls.enableRotate = false
            t.controls.dampingFactor = 0.25
            t.controls.minDistance = 0.001
            t.controls.maxDistance = 10000
            t.controls.addEventListener('change', t.render)
            t.initLight()
            t.initScene()
            t.animate()
        },
        addBloomPass() {
            let t = this
            t.renderScene = new RenderPass(t.scene, t.camera)
            t.bloomPass = new UnrealBloomPass(new THREE.Vector2(1100, 900), 1.5, 0.4, 0.85)
            t.bloomPass.threshold = t.bloom.bloomThreshold
            t.bloomPass.strength = t.bloom.bloomStrength
            t.bloomPass.radius = t.bloom.bloomRadius
            t.composer = new EffectComposer(t.renderer)
            t.composer.addPass(t.renderScene)
            t.composer.addPass(t.bloomPass)
            t.renderer.toneMappingExposure = Math.pow(0.1, 4.0)
        },
        onWindowResize() {
            let t = this
            const mDom = t.$refs[`card_viw_3d_${t.cid}`]
            let hei = mDom.offsetHeight
            let wid = mDom.offsetWidth
            t.camera.aspect = wid / hei
            t.camera.updateProjectionMatrix()
            t.renderer.setSize(wid, hei)
            t.composer.setSize(wid, hei)
            t.render()
        },
        initLight() {
            let t = this
            t.scene.add(new THREE.AmbientLight(0x808080))
            let point = new THREE.PointLight(0xaaaaaa, 0.5)
            point.position.set(1200, 1200, 1200)
            t.scene.add(point)
        },
        initScene() {
            let t = this
            t.scene.add(t.gp_obj)
        },
        animate() {
            let t = this
            if (t.camera.position.y < 2) {
                t.camera.position.y = 2
                if (t.camera.position.length() > t.pose.length()) {
                    t.camera.position.setLength(t.pose.length())
                }
            }
            t.controls.update()
            t.render()
            requestAnimationFrame(t.animate)
        },
        render() {
            let t = this
            const delta = t.clock.getDelta()
            if (t.mixer) {
                t.mixer.update(delta)
            }
            tween.update()
            t.composer.render()
            // t.renderer.render(t.scene, t.camera)
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
</style>
