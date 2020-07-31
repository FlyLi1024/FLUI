<template>
  <div class="l-cell" @click="handleClick" :class="showBorder ? 'l-cell__border' : ''">
    <div class="l-cell__con">
      <div class="l-cell__title" v-if="title !== ''">{{ title }}</div>
      <div class="l-cell__label" v-if="label !== ''">{{ label }}</div>
      <slot></slot>
    </div>
    <div class="l-cell__value" v-if="value !== ''">{{ value }}</div>
    <l-icon :icon="icon" :size="size" v-if="showIcon" :class="rotate ? 'l-cell__rotate' : ''" @click="handleIcon"></l-icon>
    <!-- :class="rotate2?'l-cell__rotate':''" -->
  </div>
</template>

<script>
export default {
  name: 'lCell',
  props: {
    // 左侧内容,不输入内容不显示
    title: {
      type: String,
      default: ''
    },
    // 描述,不输入内容不显示
    label: {
      type: String,
      default: ''
    },
    // 右侧内容,不输入内容不显示
    value: {
      type: String,
      default: ''
    },
    // 显示右侧icon
    showIcon: {
      type: Boolean,
      default: true
    },
    // 右侧icon类型
    icon: {
      type: String,
      default: 'down'
    },
    // 右侧icon大小
    size: {
      type: String,
      default: '13px'
    },
    // 是否显示下边框
    showBorder: {
      type: Boolean,
      default: true
    },
    rotate: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleClick() {
      this.$emit('click');
    },
    handleIcon() {
      this.$emit('IconClick');
    }
  }
};
</script>
