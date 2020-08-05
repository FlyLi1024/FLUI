<template>
  <div class="l-dialog">
    <l-popup :visible="visible" position="center" :transition="transition" @update:visible="maskClosable && maskCancle()">
      <div class="l-dialog__content" :style="radius && `border-radius:${radius}`">
        <div class="l-dialog__header" v-if="title">{{ title }}</div>
        <div class="l-dialog__body">
          <slot></slot>
        </div>
        <div class="l-dialog__footer">
          <div class="dialog-btn cancel" v-if="cancelButton" @click="btnCancle">{{ cancelButtonText }}</div>
          <div class="dialog-btn confirm" @click="btnConfirm">{{ confirmButtonText }}</div>
        </div>
      </div>
    </l-popup>
  </div>
</template>
<script>
export default {
  name: 'lDialog',
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    transition: {
      type: String,
      default: 'l-scale'
    },
    title: {
      type: [String, Number],
      default: ''
    },
    radius: {
      type: [Number, String],
      default: 0
    },
    cancelButton: {
      type: Boolean,
      default: true
    },
    cancelButtonText: {
      type: String,
      default: '取消'
    },
    confirmButtonText: {
      type: String,
      default: '确认'
    },
    maskClosable: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    btnConfirm(evt) {
      this.$emit('confirm', evt);
    },
    btnCancle(evt) {
      this.$emit('cancel', evt);
    },
    maskCancle(evt) {
      this.$emit('update:visible', false);
    }
  }
};
</script>
