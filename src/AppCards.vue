<template lang='pug'>
.appCards
    keep-alive
        router-view
</template>

<script>

export default {
    name: 'appCards',
    components: {

    },
    data() {
        return {
            curpag: 0
        }
    },
    mounted() {
    },
    methods: {
        newPage(page) {
            this.curpag = page
        }
    }
}
</script>
<style lang="less" scoped>
.appCards{
    margin: auto;
    width: 100%;
    height: 100%;
    position: relative;
    background: url('/img/b_gallary.png') no-repeat center fixed;
    background-size: 100% 100%;
}
</style>
