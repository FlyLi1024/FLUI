<template>
  <button class="kad-button kad-button--normal" :class="classes" :style="styles" @click="handleClick">
    <span class="kad-button__text">
      <kad-icon :icon="icon" :spin="loading" v-if="icon"></kad-icon>
      <span class="spacing" v-if="$slots.default && icon"></span>
      <slot></slot>
    </span>
  </button>
</template>
<script>
export default {
  name: 'KadButton',
  props: {
    type: String,
    loading: Boolean,
    disabled: Boolean,
    round: Boolean,
    plain: Boolean,
    full: Boolean,
    size: String,
    icon: String,
    color: String,
  },
  computed: {
    styles() {
      return this.plain && this.color ? { border: `1px solid ${this.color}`, color: this.color } : { background: this.color, color: this.color && '#fff' };
    },
    classes() {
      return [
        this.type && `kad-button--${this.type}`,
        this.size && `kad-button--${this.size}`,
        this.plain && `kad-button--${this.type}--plain`,
        {
          'kad-button--round': this.round,
          'kad-button--disabled': this.disabled,
          'kad-button--full': this.full,
        },
      ];
    },
  },
  methods: {
    handleClick(evt) {
      this.$emit('click', evt);
    },
  },
};
</script>
