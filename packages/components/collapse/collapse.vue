<template>
  <div class="kad-collapse">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'kadCollapse',
  props: {
    accordion: {
      type: Boolean,
      defalut: false,
    },
  },
  mounted() {
    this.accordion &&
      this.$children.map((item) => {
        item.setAccordion();
      });
  },
};
</script>
