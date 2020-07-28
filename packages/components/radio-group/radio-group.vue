<template>
  <div class="radio-group" name="radio-group">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'kadRadioGroup',
  data() {
    return {
      checked: false,
    };
  },
  props: {
    label: { type: [String, Number] },
    disabled: Boolean,
    direction: {
      type: String,
      default: 'vertical',
    },
  },
  model: {
    prop: 'label',
    event: 'change',
  },
  watch: {
    label(newValue) {
      this.$emit('change', newValue);
    },
  },
};
</script>
