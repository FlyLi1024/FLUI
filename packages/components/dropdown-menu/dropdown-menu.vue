<template>
  <div class="kad-dropdown-menu">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'KadDropdownMenu',
  props: {
    // 是否显示遮罩层
    overlay: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    toggleItem(value) {
      this.$children.map((item, index) => {
        if (item.value === value) {
          item.toggle();
        } else if (item.showPopup) {
          item.toggle(false);
        }
      });
    }
  }
};
</script>
