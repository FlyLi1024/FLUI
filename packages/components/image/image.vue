<template>
  <div class="l-image" :style="styles">
    <img v-if="!$slots.loading && !$slots.error" :style="styles" :src="srcUrl" :alt="alt" @error="handleError" />
    <div class="content"><slot name="loading" v-if="$slots.loading"></slot></div>
    <div class="content"><slot name="error" v-if="$slots.error"></slot></div>
  </div>
</template>

<script>
export default {
  name: 'lImage',
  data() {
    return {
      error: false,
      nopic: 'http://res.360kad.com/theme/default/img/nopic.gif'
    };
  },
  props: {
    src: String,
    alt: String,
    width: [String, Number],
    height: [String, Number],
    radius: [String, Number],
    round: Boolean
  },
  computed: {
    styles() {
      return [
        {
          width: this.width,
          height: this.height === 'auto' ? 'auto' : this.height,
          'border-radius': this.round ? '50%' : this.radius && this.radius
        }
      ];
    },
    srcUrl() {
      return this.error ? this.nopic : this.src;
    }
  },
  methods: {
    handleError() {
      this.$nextTick(() => {
        this.error = true;
      });
    }
  }
};
</script>
