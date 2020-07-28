<template>
  <i class="kad-icon" :class="classes" :style="styles" @click="handleClick"></i>
</template>

<script>
const { rootValue } = require('../../../config/index');
export default {
  name: 'KadIcon',
  props: {
    icon: String,
    color: String,
    size: [String, Number],
    spin: Boolean,
  },
  computed: {
    classes() {
      return [`kad-icon-${this.icon}`, { 'kad-icon-spin': this.spin }];
    },
    styles() {
      return [{ color: this.color }, { 'font-size': this.fixpx(this.size) }];
    },
  },
  methods: {
    fixpx(val) {
      return parseInt(val, 0) / rootValue + 'rem';
    },
    handleClick(evt) {
      this.$emit('click', evt);
    },
  },
};
</script>
