<template>
  <div class="l-grid">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'lGrid',
  props: {
    columns: {
      type: [String, Number],
      default: 5
    }
  }
};
</script>
