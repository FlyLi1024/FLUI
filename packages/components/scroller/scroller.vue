<template>
  <div class="l-scroller" :class="scrollX ? 'horizontal' : 'vertical'">
    <div class="l-scroller-wrapper" ref="scroller">
      <div class="l-scroller-content">
        <slot></slot>
      </div>
    </div>
  </div>
</template>
<script>
import BScroll from '@better-scroll/core';
export default {
  name: 'lScroller',
  props: {
    scrollX: {
      type: Boolean,
      default: false
    },
    scrollY: {
      type: Boolean,
      default: true
    },
    bounce: {
      type: Boolean,
      default: true
    },
    eventPassthrough: {
      type: String,
      default: ''
    },
    scroll: Function
  },
  mounted() {
    setTimeout(() => {
      this.init();
    }, 20);
  },
  beforeDestroy() {
    this.bs.destroy();
  },
  methods: {
    init() {
      this.bs = new BScroll(this.$refs.scroller, {
        scrollY: this.scrollY,
        scrollX: this.scrollX,
        click: true,
        bounce: this.bounce,
        probeType: 3,
        eventPassthrough: this.scrollX ? 'vertical' : 'horizontal'
      });
      this.bs.on('scroll', (pos) => {
        this.$emit('scroll', pos);
      });
      this.bs.on('scrollEnd', (pos) => {
        this.$emit('scrollEnd', pos);
      });
    },
    // 刷新
    refresh() {
      this.bs && this.bs.refresh();
    }
  },
  watch: {
    data() {
      setTimeout(() => {
        this.refresh();
      }, 20);
    }
  }
};
</script>
