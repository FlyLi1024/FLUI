<template>
  <div class="kad-swiper">
    <div class="banner-wrapper">
      <div class="kad-swiper-scroll" ref="slider">
        <div class="kad-swiper-wrapper" :style="styles">
          <slot></slot>
        </div>
      </div>
      <div class="kad-swiper-pagination" v-if="indicatorDots">
        <span v-for="(item, index) in $slots.default.length" :key="index" :class="['theme' + paginationTheme, { active: index === currentPageIndex }]" :style="[{ 'background-color': index === currentPageIndex ? indicatorActiveColor : indicatorColor }]"></span>
      </div>
    </div>
  </div>
</template>
<script>
import BScroll from '@better-scroll/core';
import Slide from '@better-scroll/slide';
const { rootValue } = require('../../../config/index');
BScroll.use(Slide);
export default {
  name: 'kadSwiper',
  props: {
    height: {
      type: String,
      default: '246px',
    },
    loop: {
      type: Boolean,
      default: true,
    },
    autoplay: {
      type: Boolean,
      default: true,
    },
    interval: {
      type: Number,
      default: 3000,
    },
    bounce: {
      type: Boolean,
      default: false,
    },
    paginationTheme: {
      type: Number,
      default: 1,
    },
    indicatorDots: {
      type: Boolean,
      default: true,
    },
    indicatorColor: {
      type: String,
      default: '#e3e1e1',
    },
    indicatorActiveColor: {
      type: String,
      default: '#06a6f8',
    },
  },
  data() {
    return {
      slider: null,
      playTimer: 0,
      currentPageIndex: 0, // 当前项，展示项
    };
  },
  computed: {
    styles() {
      return { height: this.fixpx(this.height) };
    },
  },
  mounted() {
    this.init();
  },
  beforeDestroy() {
    clearTimeout(this.playTimer);
    this.slider.destroy();
  },
  methods: {
    fixpx(val) {
      return parseInt(val, 0) / rootValue + 'rem';
    },
    init() {
      clearTimeout(this.playTimer);
      this.slider = new BScroll(this.$refs.slider, {
        scrollX: true,
        scrollY: false,
        click: true,
        slide: {
          loop: this.loop,
          threshold: 100,
        },
        useTransition: true,
        momentum: false,
        bounce: this.bounce,
        stopPropagation: true,
        probeType: 2,
        eventPassthrough: 'vertical',
      });
      this.slider.on('scrollEnd', this._onScrollEnd);
      this.slider.on('beforeScrollStart', () => {
        clearTimeout(this.playTimer);
      });
      this.slider.on('scrollEnd', () => {
        this.autoGoNext();
      });
      this.slider.on('slideWillChange', (page) => {
        this.currentPageIndex = page.pageX;
      });
      this.autoGoNext();
    },
    nextPage() {
      this.slider.next();
    },
    _onScrollEnd() {
      this.autoGoNext();
    },
    autoGoNext() {
      clearTimeout(this.playTimer);
      this.playTimer = setTimeout(() => {
        if (this.autoplay) {
          this.nextPage();
        }
      }, this.interval);
    },
  },
};
</script>
