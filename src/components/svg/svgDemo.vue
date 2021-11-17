<template>
    <div class="svg-demo">
        <ul>
            <li v-for="(name, index) in svgName" :key="index">
                <svg-icon :svgName="name" :className="`svg_avater`"></svg-icon>
                <!-- <svg-font fontName="reddit3" class="svg_avater" ></svg-font> -->
            </li>
        </ul>
    </div>
</template>
<script>

export default {
  name: 'svgDemo',
  data () {
    return {
        svgName: ['user', 'password', 'email', 'startgame']
    }
  }
}
</script>
<style lang="less" scope>
.svg-demo{
    text-align: center;
    ul, li{
        list-style: none;
        padding: 0;
        margin: 0;
        line-height: 2;
    }
}
.svg_avater{
    width: 16px;
    height: 16px;
    color: red;
    font-size: 16px;
}

</style>
