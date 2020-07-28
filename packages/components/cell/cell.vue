<template>
  <div class="kad-cell" @click="handleClick" :class="showBorder ? 'kad-cell__border' : ''">
    <div class="kad-cell__con">
      <div class="kad-cell__title" v-if="title !== ''">{{ title }}</div>
      <div class="kad-cell__label" v-if="label !== ''">{{ label }}</div>
      <slot></slot>
    </div>
    <div class="kad-cell__value" v-if="value !== ''">{{ value }}</div>
    <kad-icon :icon="icon" :size="size" v-if="showIcon" :class="rotate ? 'kad-cell__rotate' : ''" @click="handleIcon"></kad-icon>
    <!-- :class="rotate2?'kad-cell__rotate':''" -->
  </div>
</template>

<script>
export default {
  name: 'kadCell',
  props: {
    // 左侧内容,不输入内容不显示
    title: {
      type: String,
      default: '',
    },
    // 描述,不输入内容不显示
    label: {
      type: String,
      default: '',
    },
    // 右侧内容,不输入内容不显示
    value: {
      type: String,
      default: '',
    },
    // 显示右侧icon
    showIcon: {
      type: Boolean,
      default: true,
    },
    // 右侧icon类型
    icon: {
      type: String,
      default: 'down',
    },
    // 右侧icon大小
    size: {
      type: String,
      default: '26px',
    },
    // 是否显示下边框
    showBorder: {
      type: Boolean,
      default: true,
    },
    rotate: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    handleClick() {
      this.$emit('click');
    },
    handleIcon() {
      this.$emit('IconClick');
    },
  },
};
</script>
