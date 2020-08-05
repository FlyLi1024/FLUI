<template>
  <div class="l-loading">
    <div class="l-clip-rotate" v-if="type === 'rotate'" :style="[rotateStyle, sizes]"></div>
    <div class="l-ball-clip-rotate" v-if="type === 'ball-rotate'">
      <div :style="[ballRotateStyle, sizes]"></div>
    </div>
    <div class="l-ball-scale" v-if="type === 'scale'">
      <div :style="[scaleStyle, sizes]"></div>
    </div>
    <div class="l-square-jelly-box" v-if="type === 'jelly'" :style="sizes">
      <div :style="jellyStyle"></div>
      <div :style="jellyStyle"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'lLoading',
  props: {
    type: {
      type: String,
      default: 'rotate'
    },
    color: {
      type: String,
      default: '#1989fa'
    },
    size: [String, Number],
    full: {
      type: Boolean,
      default: false
    },
    maskClose: {
      type: Boolean,
      default: false
    }
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
      return { width: this.size, height: this.size };
    }
  }
};
</script>
<style lang="less" scoped></style>
