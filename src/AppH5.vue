<template lang='pug'>
.apphome
    home
    story
    roadmap
    partners
</template>

<script>
import partners from './views/Partners/partners.vue'
import roadmap from './views/Roadmap/roadmap.vue'
import home from './views/Home/Home.vue'
import story from './views/Story/story.vue'
export default {
    name: 'apphome',
    components: {
        home, story, roadmap, partners
    },
    data() {
        return {
            curpag: 0
        }
    },
    mounted() {
    },
    computed: {
        route() {
            return this.$route.name
        }
    },
    methods: {
        toHome2() {
            this.$router.push('/home2')
        },
        toVideo() {
            this.$router.push('/home3')
        },
        switchPage(page, nam) {
            let dom = this.$refs.footCard

            if (page === 0) {
                dom.setAttribute('style', 'display:show')
                dom.classList.toggle('fadeout', false)
                dom.classList.toggle('fadein', true)
                dom.style.display = 'show'
            } else {
                dom.classList.toggle('fadeout', true)
                dom.classList.toggle('fadein', false)
                setTimeout(() => {
                    dom.style.display = 'none'
                }, 280)
            }
            this.curpag = page
        }
    }
}
</script>
<style lang="less" scoped>
@import url('./common/style/common.less');
.apphome{
    width: 100%;
    height: 100%;
}
</style>
