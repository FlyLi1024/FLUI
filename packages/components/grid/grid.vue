<template>
  <div class="kad-grid">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'KadGrid',
  props: {
    columns: {
      type: [String, Number],
      default: 5,
    },
  },
};
</script>
