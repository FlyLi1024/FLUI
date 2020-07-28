<template>
  <section class="kad-demo-block">
    <h2 class="kad-demo-block__title">{{ title }}</h2>
    <div class="kad-demo-block__content" :class="{ full: full }" :style="{ background }">
      <slot></slot>
    </div>
  </section>
</template>

<script>
export default {
  name: 'kad-demo-block',
  props: {
    title: {
      type: String,
      default: '',
    },
    background: {
      type: String,
      default: '',
    },
    full: {
      type: [Boolean, String],
      default: false,
    },
  },
};
</script>

<style lang="less" scoped>
.kad-demo-block {
  margin-top: 40px;
  &__content {
    padding: 10px 30px;
    &.full {
      padding: 0;
    }
  }
  &__title {
    margin: 0;
    color: rgba(69, 90, 100, 0.6);
    font-weight: normal;
    font-size: 28px;
    padding: 30px;
  }
}
</style>
