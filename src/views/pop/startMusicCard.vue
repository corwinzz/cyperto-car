<template lang='pug'>
.startMusicCard
    .music_hello Hello
    .music_content For a better experience, we'd like you to turn on the music.
    .music_content You can close it at any time in the right corner of the site.
    .music_btns
        .music_close(@click='closeMusic') Close music
        .music_open(@click='openMusic') Open music
</template>
<script>
export default {
    name: 'startMusicCard',
    components: {

    },
    data() {
        return {
        }
    },
    mounted() {
    },
    methods: {
        closeMusic() {
            this.$emit('switch', false)
        },
        openMusic() {
            this.$emit('switch', true)
        }
    }
}
</script>
<style lang="less" scoped>
@import url('../../common/style/common.less');
.startMusicCard{
    z-index: 1001;
    position:absolute;
    top:calc(50% - 130px) ;
    left:calc(50% - 265px);
    width: 530px;
    height: 260px;
    background: black;
    display: flex;
    flex-direction: column;
    text-align: center;
    color: white;
    .music_hello{
        padding: 30px;
        height: 98px;
        line-height:38px ;
        font-size: 32px;
        .f_mon();
    }
    .music_content{
        .f_d();
        margin:0 20px;
        line-height: 20px;
        height: 20px;
        font-size: 16px;
    }
    .music_btns{
        z-index: 1002;
        width: 100%;
        display: flex;
        margin-top: 30px;
        .music_close,.music_open{
            font-family: DMSans_R;
            height: 60px;
            line-height: 60px;
            font-size: 14px;
            font-weight: 700;
            width: 230px;
            margin: auto;
            text-align: center;
            border-radius: 30px;
            border: 2px solid #777E90;
            color: #FCFCFD;
        }
        .music_open{
            border: 0px;
            background-color: #EA3344;
        }
    }
}
</style>
