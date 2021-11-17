<template>
    <svg :class="svgClass" aria-hidden="true">
        <use :xlink:href="iconName" />
    </svg>
</template>
<script>
import './iconfont.js'
export default {
    name: 'Icon',
    props: {
        fontName: {
            type: String,
            required: true
        },
        className: {
            type: String,
            default: ''
        }
    },
     computed: {
        iconName () {
            return `#icon-${this.fontName}`
        },
        svgClass () {
            if (this.className) {
                return 'icon ' + this.className
            } else {
                return 'icon'
            }
        }
    }
}
</script>

<style lang="less">
.icon{
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;

}
</style>
