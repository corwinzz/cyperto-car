<template>
    <div class="story">
        <div class="container w-container">
            <div class="section-title-wrapper">
                <h2 class="section-title">
                    <a href="http://spookies.gallery/story1">The Story</a><br>
                </h2>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Story'
}
</script>

<style scoped lang="less">
.story {
    position: relative;
    padding: 130px 0 90px 0;
    background-color: #f3f5fa;

    .section-title-wrapper {
        display: block;
        width: 85%;
        margin-right: auto;
        margin-bottom: 65px;
        margin-left: auto;
        text-align: center;

        .section-title {
            display: block;
            margin-top: 0px;
            font-family: "Casper, sans-serif";
            color: #7e7e7e;
            font-size: 50px;
            line-height: 44px;
            font-style: normal;
            font-weight: 400;

            a {
                color: #dd2476;
            }
        }
    }

    .section-scroll-button {
        position: absolute;
        left: 0px;
        right: 0px;
        bottom: -26px;
        z-index: 10;
        display: block;
        width: 60px;
        height: 60px;
        margin-right: auto;
        margin-left: auto;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 11px;
        border: 2px solid #edeff5;
        border-radius: 100%;
        background-color: #fff;
        box-shadow: 0 0 0 6px #fff;
        -webkit-transition: border 200ms ease;
        transition: border 200ms ease;

        .section-arrow {
            width: 34px;
            padding: 7px;
            border: 2px solid #d6dae6;
            border-radius: 100%;
        }
    }
}
</style>
