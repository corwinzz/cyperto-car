<template lang='pug'>
.garage
    garagecard
</template>

<script>
import garagecard from './garagecard.vue'
export default {
    name: 'story',
    components: {
        garagecard
    },
    data() {
        return {
            page: 'home'
        }
    },
    mounted() {
    },
    methods: {

    }
}
</script>
<style lang="less" scoped>

</style>
