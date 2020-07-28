<template>
  <span class="kad-tag" @click="handleClick" :style="[styles, { 'font-size': fixpx(size) }]">
    <slot></slot>
  </span>
</template>

<script>
const { rootValue } = require('../../../config/index');
export default {
  name: 'KadTag',
  props: {
    bgColor: {
      type: String,
      default: '#323233',
    },
    color: {
      type: String,
      default: '#323233',
    },
    size: {
      type: String,
      default: '24px',
    },
    round: {
      type: String,
      default: '0',
    },
    plain: {
      type: Boolean,
      default: false,
    },
    closeable: {
      type: Boolean,
      default: false,
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
  computed: {
    styles() {
      return this.plain ? { 'border-color': this.bgColor, color: this.bgColor, 'border-radius': this.fixpx(this.round) } : { background: this.bgColor, color: '#fff', 'border-color': this.bgColor, 'border-radius': this.fixpx(this.round) };
    },
  },
};
</script>
