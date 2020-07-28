<template>
  <kad-button :color="color" class="kad-goods-action__button">{{ text }}</kad-button>
</template>

<script>
export default {
  name: 'KadGoodsActionButton',
  props: {
    text: {
      type: String,
      default: '加入购物车'
    },
    color: {
      type: String,
      default: '#05A5F9'
    }
  }
};
</script>
