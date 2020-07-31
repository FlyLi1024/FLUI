<template>
  <section class="l-demo-block">
    <h2 class="l-demo-block__title">{{ title }}</h2>
    <div class="l-demo-block__content" :class="{ full: full }" :style="{ background }">
      <slot></slot>
    </div>
  </section>
</template>

<script>
export default {
  name: 'l-demo-block',
  props: {
    title: {
      type: String,
      default: ''
    },
    background: {
      type: String,
      default: ''
    },
    full: {
      type: [Boolean, String],
      default: false
    }
  }
};
</script>

<style lang="less" scoped>
.l-demo-block {
  padding-bottom: 20px;
  &__content {
    padding: 5px 15px;
    &.full {
      padding: 0;
    }
  }
  &__title {
    margin: 0;
    color: rgba(69, 90, 100, 0.6);
    font-weight: normal;
    font-size: 14px;
    padding: 15px;
  }
}
</style>
