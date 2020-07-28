<template>
  <div class="kad-switch" :class="classes" :style="styles" @click.prevent="switchValue">
    <input class="kad-switch__input" type="checkbox" ref="switch" @change="handleChange" :name="name" :true-value="activeValue" :false-value="inactiveValue" @keydown.enter="switchValue" />
    <span class="kad-switch__core">
      <kad-icon icon="loading-A" :color="activeColor" spin v-if="loading && checked"></kad-icon>
    </span>
  </div>
</template>

<script>
export default {
  name: 'kadSwitch',
  props: {
    value: {
      type: [Boolean, String, Number],
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    loading: {
      type: Boolean,
      default: false,
    },
    name: {
      type: String,
      default: '',
    },
    activeColor: {
      type: String,
      default: '#04BE02',
    },
    inactiveColor: {
      type: String,
      default: '#fff',
    },
    activeValue: {
      type: [Boolean, String, Number],
      default: true,
    },
    inactiveValue: {
      type: [Boolean, String, Number],
      default: false,
    },
  },
  created() {
    if (!~[this.activeValue, this.inactiveValue].indexOf(this.value)) {
      this.$emit('input', this.inactiveValue);
    }
  },
  computed: {
    checked() {
      return this.value === this.activeValue;
    },
    classes() {
      return [this.value ? 'on' : 'off', { disabled: this.disabled }];
    },
    styles() {
      return [
        {
          'background-color': this.activeColor && this.checked ? this.activeColor : '',
        },
        {
          'border-color': this.activeColor && this.checked ? this.activeColor : '',
        },
      ];
    },
  },
  methods: {
    handleClick(evt) {
      this.$emit('click', evt);
    },
    handleChange(event) {
      const val = this.checked ? this.inactiveValue : this.activeValue;
      this.$emit('input', val);
      this.$emit('change', val);
      this.$nextTick(() => {
        this.$refs.switch.checked = this.checked;
      });
    },
    switchValue() {
      !this.disabled && this.handleChange();
    },
  },
  watch: {
    checked() {
      this.$refs.switch.checked = this.checked;
    },
  },
};
</script>
