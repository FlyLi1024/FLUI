<template>
  <button class="l-button" :class="classes" :style="styles" @click="handleClick">
    <span class="l-button__text">
      <l-icon :icon="icon" :spin="loading" v-if="icon"></l-icon>
      <span class="spacing" v-if="$slots.default && icon"></span>
      <slot></slot>
    </span>
  </button>
</template>
<script>
export default {
  name: 'lButton',
  props: {
    type: String,
    loading: Boolean,
    disabled: Boolean,
    round: Boolean,
    plain: Boolean,
    full: Boolean,
    size: String,
    icon: String,
    color: String
  },
  computed: {
    styles() {
      return this.plain && this.color ? { border: `1px solid ${this.color}`, color: this.color } : { background: this.color, color: this.color && '#fff' };
    },
    classes() {
      return [
        this.type && `l-button--${this.type}`,
        this.size && `l-button--${this.size}`,
        this.plain && `l-button--${this.type}--plain`,
        {
          'l-button--round': this.round,
          'l-button--disabled': this.disabled,
          'l-button--full': this.full
        }
      ];
    }
  },
  methods: {
    handleClick(evt) {
      this.$emit('click', evt);
    }
  }
};
</script>
