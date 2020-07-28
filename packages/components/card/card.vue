<template>
  <div class="kad-card" :class="'kad-card-theme' + theme">
    <div class="pic180" @click="hanleClick">
      <img :src="thumb" :alt="thumb" />
    </div>
    <div class="content" @click="hanleClick">
      <div class="title">{{ title }}</div>
      <div class="desc" v-if="desc">{{ desc }}</div>
      <div class="factory" v-if="factory">{{ factory }}</div>
      <div class="priceSpec">
        <div class="price" v-if="theme == 4 || theme == 5">
          <slot name="price"></slot>
        </div>
        <div class="price" v-if="theme != 4 && theme != 5">
          <span class="rmb">&yen;</span>
          <span>{{ price }}</span>
        </div>
        <div class="origin-price" v-if="originPrice">
          <span class="rmb">&yen;</span>
          <span>{{ originPrice }}</span>
        </div>
      </div>
      <div class="num" v-if="num">×{{ num }}</div>
      <div class="mark" v-if="$slots.mark">
        <slot name="mark"></slot>
      </div>
      <div class="stock" v-if="$slots.stock">
        <slot name="stock"></slot>
      </div>
    </div>
    <span class="btn">
      <slot name="btn"></slot>
    </span>
    <div class="label-pic" v-if="labelPic">
      <img :src="labelPic" />
    </div>
  </div>
</template>
<script>
export default {
  name: 'KadCard',
  props: {
    title: String,
    desc: String,
    factory: String,
    price: String,
    originPrice: String,
    num: String,
    labelPic: String,
    btnEvent: Function,
    theme: {
      type: [String, Number],
      default: '1',
    },
    thumb: {
      type: String,
      default: 'http://res.360kad.com/theme/default/img/nopic.gif',
    },
  },
  methods: {
    hanleClick(e) {
      this.$emit('click', e);
    },
  },
};
</script>
