<template>
  <div class="l-radio" :class="{ horizontal: isVertical === 'horizontal', round }" @click.stop="handleClick">
    <div
      class="l-radio__icon"
      :class="{ checked: model === label, disabled: this.isDisabled }"
      :style="{
        'border-color': model === label ? colors : '#a5b1be',
        width: size,
        height: size
      }"
    >
      <span :style="{ background: model === label && colors }"></span>
    </div>
    <template
      ><span class="l-radio__label" :style="{ color: model === label && !this.isDisabled ? colors : model === label && this.isDisabled ? '#c0ccda' : 'inherit' }">{{ label }}</span></template
    >
  </div>
</template>
<script>
export default {
  name: 'lRadio',
  props: {
    label: {
      type: [String, Number],
      required: true
    },
    disabled: {
      type: Boolean,
      default: false
    },
    round: {
      type: Boolean,
      default: true
    },
    direction: {
      type: String,
      default: 'vertical'
    },
    color: {
      type: String,
      default: '#05A5F9'
    },
    size: {
      type: String,
      default: '15px'
    },
    propValue: {
      type: [String, Number]
    }
  },
  model: {
    prop: 'propValue',
    event: 'change'
  },
  computed: {
    isVertical() {
      return this.$parent.direction || this.direction;
    },
    isGroup() {
      return this.$parent.$options._componentTag === 'l-radio-group';
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
      }
    },
    colors() {
      return this.$parent.color || this.color;
    }
  },
  methods: {
    handleClick(event) {
      !this.isDisabled && (this.model = this.label);
    }
  }
};
</script>
