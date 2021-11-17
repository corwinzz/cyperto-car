<template lang='pug'>
.story
    .blurWindow(v-show='wind==1' @click='wind=2')
        .title INTRODUCTION
        .txt Inspired by Ready Player One, CyberCar is a composable NFT racing game with various rules and track.
        .line
    .blurWindow(v-show="wind==2" class="page2"  @click='wind=1')
        .inner
            .avater
            .txt “CaLan saves us a huge amount of time.
            .txt It’s helping us achieve the most pixel perfect & fast websites,
            .txt thanks to full control over asset export.”
            .line
            .nam Linh Nguyen
            .foot Founder at CyberCar
</template>

<script>
import hypelink from '../hypelink.vue'
export default {
    name: 'story',
    components: {
        hypelink
    },
    data() {
        return {
            page: 'home',
            wind: 1
        }
    },
    mounted() {
    },
    methods: {

    }
}
</script>
<style lang="less" scoped>
.story{
    height: 768px;
    width: 1440px;
    background: url('/img/b_story1.png') no-repeat center fixed;
    background-size:100% 110%;
    // background-position: center center;
}
.blurWindow{
    z-index: 2;
    position: relative;
    left: 80px;
    top: 320px;
    // box-shadow: 0 0 5px 1px #fff;
    color: #fff;
    font-size: 15px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    width: 460px;
    height: 190px;
    padding: 20px;
    .title{
        height: 48px;
        line-height: 48px;
        font-size: 40px;
        font-weight: 400;
        margin-bottom:20px;
    }
    .txt{
        height: 60px;
        line-height: 20px;
        font-size: 16px;
        font-family:DMSans;
    }
    .line{
        margin-top:20px ;
        width:50px ;
        height: 0px;
        border-top:1px solid #EA3344;
    }
}
.blurWindow.page2{
    width: 1110px;
    height: 467px;
    left: 165px;
    top: 200px;
    .inner{
        height: 353px;
        width: 730px;
        margin: 55px auto;
        display: flex;
        flex-direction: column;
        .avater{
            margin: auto;
            height: 115px;
            width: 115px;
            border-radius: 57px;
            background-image: url('/img/ppp.png');
            background-size:100% 100%;
        }
        .txt{
            height: 34px;
            line-height: 34px;
            font-size: 24px;
            text-align: center;
        }
        .line{
            margin:30px auto;
            width:52px ;
            height: 0px;
            border-top:1px solid #EA3344;
        }
        .nam{
            height: 28px;
            line-height: 28px;
            text-align: center;
            font-size: 18px;
        }
        .foot{
            height: 24px;
            font-size: 14px;
            text-align: center;
        }
    }
}
.blurWindow::before {
    background: url('/img/b_story1.png') no-repeat center fixed;
    background-size:100% 110%;
    content: '';
    display: block;
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: -10px;
    filter: blur(10px);
}
</style>
