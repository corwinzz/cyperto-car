<template lang='pug'>
.slidcard
    img( src='/img/home_1.png' width='315' height='166' )
    .dots
        .dot(style="background:yellow")
        .dot()
        .dot()
</template>

<script>
export default {
    name: 'slidcard',
    components: {

    },
    data() {
        return {

        }
    }
}
</script>

<style lang="less" scoped>
 .slidcard{
    width: 315px;
    height: 166px;
    position: relative;
    .dots{
        position:absolute;
        left: 140px;
        bottom: 20px;
        height: 10px;
        width: 40px;
        display: flex;
        justify-content: space-between;
        .dot{
            width: 8px;
            height: 8px;
            border: 1px solid yellow;
            border-radius: 4px;
        }
    }
}

</style>
