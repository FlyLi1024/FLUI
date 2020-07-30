<template>
  <div class="kad-goods-action">
    <div class="kad-goods-action__bar">
      <slot></slot>
      <!-- <div class="kad-goods-action__right" v-if="inStock === 0">
          <l-button color="#05A5F9" class="kad-goods-action__button">加入购物车</l-button>
          <l-button color="#FF423F" class="kad-goods-action__button">立即购买</l-button>
      </div>
      <div class="kad-goods-action__right" v-if="inStock === 1">
        <l-button color="#FF7624" class="kad-goods-action__button">到货通知</l-button>
      </div> -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'KadGoodsAction',
  props: {
    inStock: {
      type: Number,
      default: 0
    },
    kefu: {
      type: Boolean,
      default: true
    }
  },
  methods: {}
};
</script>
