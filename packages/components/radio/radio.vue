<template>
  <div class="kad-radio" :class="{ horizontal: isVertical === 'horizontal', round }" @click.stop="handleClick">
    <div
      class="kad-radio__icon"
      :class="{ checked: model === label, disabled: this.isDisabled }"
      :style="{
        'border-color': model === label ? colors : '#a5b1be',
        width: fixpx(size),
        height: fixpx(size),
      }"
    >
      <span :style="{ background: model === label && colors }"></span>
    </div>
    <template>{{ label }}</template>
  </div>
</template>
<script>
const { rootValue } = require('../../../config/index');
export default {
  name: 'kadRadio',
  props: {
    label: {
      type: [String, Number],
      required: true,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    round: {
      type: Boolean,
      default: true,
    },
    direction: {
      type: String,
      default: 'vertical',
    },
    color: {
      type: String,
      default: '#05A5F9',
    },
    size: {
      type: String,
      default: '30px',
    },
    propValue: {
      type: [String, Number],
    },
  },
  model: {
    prop: 'propValue',
    event: 'change',
  },
  computed: {
    isVertical() {
      return this.$parent.direction || this.direction;
    },
    isGroup() {
      return this.$parent.$options._componentTag === 'kad-radio-group';
    },
    isDisabled() {
      return this.$parent.disabled || this.disabled;
    },
    model: {
      get() {
        return this.isGroup ? this.$parent.label : this.propValue;
      },
      set(newValue) {
        this.isGroup ? this.$parent.$emit('change', newValue) : this.$emit('change', newValue);
      },
    },
    colors() {
      return this.$parent.color || this.color;
    },
  },
  methods: {
    fixpx(val) {
      return parseInt(val, 0) / rootValue + 'rem';
    },
    handleClick(event) {
      !this.isDisabled && (this.model = this.label);
    },
  },
};
</script>
