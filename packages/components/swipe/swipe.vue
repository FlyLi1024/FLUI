<template>
  <div class="l-swipe l-swipe-vertical">
    <div class="l-swipe-wrap" @touchstart="onTouchStart($event)">
      <slot></slot>
    </div>
    <div class="l-swipe-pagination" v-if="pagination">
      <span v-for="(item, index) in len" :key="'l-swipe-pagination-' + index" class="l-swipe-pagination-bullet" :class="{ active: index === currentIndex % len }"></span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'lSwipe',
  props: {
    loop: {
      type: Boolean,
      default: false
    },
    speed: {
      type: Number,
      default: 500
    },
    autoPlay: {
      type: Number,
      default: 0
    },
    direction: {
      type: String,
      default: 'horizontal',
      validator: (value) => ['vertical', 'horizontal'].indexOf(value) > -1
    },
    pagination: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      swiperWrap: null, // 容器
      swiperSlide: null, // 容器
      currentIndex: 0, // 当前在第几张图片
      startPos: null, // 触摸的坐标
      translateX: 0,
      // translateY: 0,
      startX: 0
      // startY: 0
    };
  },
  computed: {
    len() {
      return this.$slots.default.length;
    },
    isHorizontal() {
      return this.direction === 'horizontal';
    },
    isVertical() {
      return this.direction === 'vertical';
    }
  },
  mounted() {
    this.initSwiper();
  },
  methods: {
    initSwiper() {
      this.swiperWrap = this.$el.querySelector('.l-swipe-wrap');
      this.swiperWrap.innerHTML += this.swiperWrap.innerHTML;
      this.swiperSlide = this.swiperWrap.querySelectorAll('.l-swipe-slide');
    },
    // 获取触摸点的坐标
    getTouchPos(evt) {
      let x = evt.changedTouches[0]['pageX'];
      let y = evt.changedTouches[0]['pageY'];
      return { x, y };
    },
    onTouchStart(evt) {
      this.swiperWrap.addEventListener('touchmove', this.onTouchMove, false);
      this.swiperWrap.addEventListener('touchend', this.onTouchEnd, false);
      this.startPos = this.getTouchPos(evt);
      this.swiperWrap.style.transition = 'none';
      if (this.currentIndex === 0) {
        this.currentIndex = this.len;
      }
      if (this.currentIndex === this.swiperSlide.length - 1) {
        this.currentIndex = this.len - 1;
      }
      this.translateX = -this.currentIndex * this.swiperSlide[0].offsetWidth;
      this.startX = this.translateX;
      this.swiperWrap.style.transform = `translateX(${this.translateX}px)`;
    },
    onTouchMove(evt) {
      const moveX = this.getTouchPos(evt).x;
      const disX = moveX - this.startPos.x;
      this.translateX = this.startX + disX;
      this.swiperWrap.style.transform = `translateX(${this.translateX}px)`;
    },
    onTouchEnd(evt) {
      this.currentIndex = Math.round(-this.translateX / this.swiperSlide[0].offsetWidth);
      if (this.currentIndex < 0) {
        this.currentIndex = 0;
      }
      if (this.currentIndex > this.swiperSlide.length - 1) {
        this.currentIndex = this.swiperSlide.length - 1;
      }
      this.translateX = -this.currentIndex * this.swiperSlide[0].offsetWidth;
      this.swiperWrap.style.transform = `translateX(${this.translateX}px)`;
      this.swiperWrap.style.transition = '0.3s ease-out';
    }
  }
};
</script>
