<template>
  <div class="kad-divider">
    <div class="kad-divider-line" :style="{ width: fixpx(lineWidth) }" v-if="line"></div>
    <div class="kad-divider-icon" v-if="icon">
      <kad-icon :icon="icon" size="30px" :spin="loading"></kad-icon>
    </div>
    <div class="kad-divider-text"><slot></slot></div>
    <div class="kad-divider-line" :style="{ width: fixpx(lineWidth) }" v-if="line"></div>
  </div>
</template>

<script>
const { rootValue } = require('../../../config/index');
export default {
  name: 'KadDivider',
  props: {
    line: {
      type: Boolean,
      default: true,
    },
    lineWidth: {
      type: String,
      default: '85px',
    },
    loading: {
      type: Boolean,
      default: false,
    },
    icon: {
      type: String,
      default: '',
    },
  },
  computed: {
    colorStyle() {
      return {
        color: this.color,
      };
    },
  },
  methods: {
    fixpx(val) {
      return parseInt(val, 0) / rootValue + 'rem';
    },
  },
};
</script>
