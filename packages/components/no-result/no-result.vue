<template>
  <div class="kad-no-result">
    <img :src="image" alt="" class="kad-no-result__img" />
    <div class="kad-no-result__text">{{ text }}</div>
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'KadNoResult',
  props: {
    image: {
      type: String,
      default: '//res.360kad.com/kad_design/m/images/no-result.png'
    },
    text: {
      type: String,
      default: '抱歉！康康没有找到相关的商品  '
    }
  }
};
</script>
