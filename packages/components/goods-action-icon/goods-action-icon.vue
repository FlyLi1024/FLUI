<template>
  <div class="kad-goods-action__left__item">
    <span class="kad-goods-action__left__item__icon">
      <kad-icon :icon="icon" size="40px"></kad-icon>
    </span>
    <span>{{ text }}</span>
  </div>
</template>

<script>
export default {
  name: 'KadGoodsActionIcon',
  props: {
    text: {
      type: String,
      default: '首页',
    },
    icon: {
      type: String,
      default: 'home',
    },
  },
};
</script>
