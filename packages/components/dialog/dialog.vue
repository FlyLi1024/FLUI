<template>
  <div class="kad-dialog">
    <kad-popup :visible="visible" position="center" :transition="transition" @update:visible="maskClosable && maskCancle()">
      <div class="kad-dialog__content" :style="radius && `border-radius:${fixpx(radius)}`">
        <div class="kad-dialog__header" v-if="title">{{ title }}</div>
        <div class="kad-dialog__body">
          <slot></slot>
        </div>
        <div class="kad-dialog__footer">
          <div class="dialog-btn cancel" v-if="cancelButton" @click="btnCancle">{{ cancelButtonText }}</div>
          <div class="dialog-btn confirm" @click="btnConfirm">{{ confirmButtonText }}</div>
        </div>
      </div>
    </kad-popup>
  </div>
</template>
<script>
const { rootValue } = require('../../../config/index');
export default {
  name: 'kadDialog',
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
    transition: {
      type: String,
      default: 'kad-scale',
    },
    title: {
      type: [String, Number],
      default: '',
    },
    radius: {
      type: [Number, String],
      default: 0,
    },
    cancelButton: {
      type: Boolean,
      default: true,
    },
    cancelButtonText: {
      type: String,
      default: '取消',
    },
    confirmButtonText: {
      type: String,
      default: '确认',
    },
    maskClosable: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    fixpx(val) {
      return parseInt(val, 0) / rootValue + 'rem';
    },
    btnConfirm(evt) {
      this.$emit('confirm', evt);
    },
    btnCancle(evt) {
      this.$emit('cancel', evt);
    },
    maskCancle(evt) {
      this.$emit('update:visible', false);
    },
  },
};
</script>
