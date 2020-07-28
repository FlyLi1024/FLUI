<template>
  <div class="kad-loading">
    <div class="kad-clip-rotate" v-if="type === 'rotate'" :style="[rotateStyle, sizes]"></div>
    <div class="kad-ball-clip-rotate" v-if="type === 'ball-rotate'">
      <div :style="[ballRotateStyle, sizes]"></div>
    </div>
    <div class="kad-ball-scale" v-if="type === 'scale'">
      <div :style="[scaleStyle, sizes]"></div>
    </div>
    <div class="kad-square-jelly-box" v-if="type === 'jelly'" :style="sizes">
      <div :style="jellyStyle"></div>
      <div :style="jellyStyle"></div>
    </div>
  </div>
</template>

<script>
const { rootValue } = require('../../../config/index');
export default {
  name: 'kadLoading',
  props: {
    type: {
      type: String,
      default: 'rotate',
    },
    color: {
      type: String,
      default: '#1989fa',
    },
    size: [String, Number],
    full: {
      type: Boolean,
      default: false,
    },
    maskClose: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {};
  },
  computed: {
    rotateStyle() {
      return { 'border-bottom-color': this.color, 'border-top-color': this.color };
    },
    ballRotateStyle() {
      return { 'border-bottom-color': this.color };
    },
    scaleStyle() {
      return { 'background-color': this.color };
    },
    jellyStyle() {
      return { 'background-color': this.color };
    },
    sizes() {
      return { width: this.fixpx(this.size), height: this.fixpx(this.size) };
    },
  },
  methods: {
    fixpx(val) {
      return parseInt(val, 0) / rootValue + 'rem';
    },
  },
};
</script>
<style lang="less" scoped></style>
