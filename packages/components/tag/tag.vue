<template>
  <span class="l-tag" @click="handleClick" :style="[styles, { 'font-size': size }]">
    <slot></slot>
  </span>
</template>

<script>
export default {
  name: 'lTag',
  props: {
    bgColor: {
      type: String,
      default: '#323233'
    },
    color: {
      type: String,
      default: '#323233'
    },
    size: {
      type: String,
      default: '12px'
    },
    round: {
      type: String,
      default: '0'
    },
    plain: {
      type: Boolean,
      default: false
    },
    closeable: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleClick(evt) {
      this.$emit('click', evt);
    }
  },
  computed: {
    styles() {
      return this.plain ? { 'border-color': this.bgColor, color: this.bgColor, 'border-radius': this.round } : { background: this.bgColor, color: '#fff', 'border-color': this.bgColor, 'border-radius': this.round };
    }
  }
};
</script>
