<template>
  <div class="kad-grid__item" :style="[{ width: 100 / columns + '%' }]" @click="click">
    <div class="kad-grid__item__icon">
      <!-- <img :src="icon" /> -->
      <kad-image :src="icon" :width="iconSize" :height="iconSize"></kad-image>
    </div>
    <div class="kad-grid__item__text" :style="{ color: color, 'font-size': size }"><slot></slot></div>
  </div>
</template>

<script>
export default {
  name: 'KadGridItem',
  props: {
    icon: {
      type: String,
      default: 'http://res.360kad.com/theme/default/img/nopic.gif',
    },
    iconSize: {
      type: String,
      default: '88px',
    },
    color: {
      type: String,
      default: '#0f0f0f',
    },
    size: {
      type: [String, Number],
      default: '24px',
    },
  },
  computed: {
    columns() {
      return this.$parent.columns;
    },
  },
  mounted() {},
  methods: {
    click(event) {
      this.$emit('click', event);
    },
  },
};
</script>
