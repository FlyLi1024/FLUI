<template>
  <div class="l-collapse">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'lCollapse',
  props: {
    accordion: {
      type: Boolean,
      defalut: false
    }
  },
  mounted() {
    this.accordion &&
      this.$children.map((item) => {
        item.setAccordion();
      });
  }
};
</script>
