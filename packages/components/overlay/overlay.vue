<template>
  <div
    class="kad-overlay"
    v-show="show"
    :style="[{ 'z-index': zIndex, background: 'rgba(0,0,0,' + opacity + ')' }]"
    @click="handleClick"
    @touchmove.prevent
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'KadOverlay',
  props: {
    show: {
      type: Boolean,
      default: true
    },
    zIndex: {
      type: Number,
      default: 888
    },
    clickOverlay: {
      type: Boolean,
      default: true
    },
    opacity: {
      type: [Number, String],
      default: 0.5
    }
  },
  methods: {
    handleClick(evt) {
      this.$emit('click', evt);
    }
  }
};
</script>
