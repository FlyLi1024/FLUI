<template>
  <i class="l-icon" :class="classes" :style="styles" @click="handleClick"></i>
</template>

<script>
export default {
  name: 'lIcon',
  props: {
    icon: String,
    color: String,
    size: [String, Number],
    spin: Boolean
  },
  computed: {
    classes() {
      return [`l-icon-${this.icon}`, { 'l-icon-spin': this.spin }];
    },
    styles() {
      return [{ color: this.color }, { 'font-size': this.size }];
    }
  },
  methods: {
    handleClick(evt) {
      this.$emit('click', evt);
    }
  }
};
</script>
