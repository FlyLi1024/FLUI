<template>
  <div
    class="graphic"
    :class="
      theme === ''
        ? 'graphic-theme0'
        : theme === 'left'
        ? 'graphic-theme1'
        : theme === 'right'
        ? 'graphic-theme2'
        : theme === 'top'
        ? 'graphic-theme3'
        : theme === 'bottom'
        ? 'graphic-theme4'
        : ''
    "
    @click="handleClick"
  >
    <div class="graphic-img" v-if="theme !== ''">
      <img :src="image" alt="" />
    </div>
    <div class="graphic-content">
      <div class="graphic-title">{{ title }}</div>
      <div class="graphic-label">{{ label }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'KadGraphic',
  props: {
    //   图片位置,不填默认无图片
    theme: {
      type: String,
      default: ''
    },
    // 标题
    title: {
      type: String,
      default: '标题'
    },
    // 提示标签
    label: {
      type: String,
      default: '提示标题'
    },
    // 图片
    image: {
      type: String,
      default: ''
    }
  },
  methods: {
    handleClick(even) {
      this.$emit('click', even);
    }
  }
};
</script>
