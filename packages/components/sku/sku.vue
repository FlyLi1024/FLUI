<template>
  <div class="kad-sku">
    <transition name="kad-fade">
      <kad-overlay v-if="visible" @click="handleClose" />
    </transition>
    <transition name="kad-slide-bottom">
      <div class="kad-sku__body" v-if="visible">
        <div class="kad-sku__body--header">
          <slot name="sku-header"></slot>
          <span class="close" @click="handleClose">
            <kad-icon icon="close" size="13px" color="#141414"></kad-icon>
          </span>
        </div>
        <div class="kad-sku__body--wraper">
          <slot name="sku-list"></slot>
          <slot name="sku-num"></slot>
          <slot name="sku-other"></slot>
        </div>
        <div class="kad-sku__body--btn">
          <slot name="sku-actions"></slot>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'KadSku',
  props: {
    visible: Boolean,
  },
  methods: {
    handleClose() {
      this.$emit('update:visible', false);
    },
  },
};
</script>
