<template>
  <div class="l-divider">
    <div class="l-divider-line" :style="{ width: lineWidth }" v-if="line"></div>
    <div class="l-divider-icon" v-if="icon">
      <l-icon :icon="icon" :spin="loading"></l-icon>
    </div>
    <div class="l-divider-text"><slot></slot></div>
    <div class="l-divider-line" :style="{ width: lineWidth }" v-if="line"></div>
  </div>
</template>

<script>
export default {
  name: 'lDivider',
  props: {
    line: {
      type: Boolean,
      default: true
    },
    lineWidth: {
      type: String,
      default: '85px'
    },
    loading: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: ''
    }
  },
  computed: {
    colorStyle() {
      return {
        color: this.color
      };
    }
  }
};
</script>
