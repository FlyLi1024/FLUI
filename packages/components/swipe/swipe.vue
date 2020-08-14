<template>
  <div class="l-swipe l-swipe-vertical">
    <div class="l-swipe-wrap" @touchstart="onTouchStart($event)">
      <slot></slot>
    </div>
    <div class="l-swipe-pagination" v-if="pagination">
      <span v-for="(item, index) in slideLength" :key="'l-swipe-pagination-' + index" class="l-swipe-pagination-bullet" :class="{ active: index === currentIndex % slideLength }"></span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'lSwipe',
  props: {
    loop: {
      type: Boolean,
      default: true
    },
    speed: {
      type: Number,
      default: 500
    },
    current: {
      type: [String, Number],
      default: 0
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
      currentIndex: this.current, // 当前在第几张图片
      startPos: null, // 触摸的坐标
      deltaX: 0, // 横向拖动距离
      deltaY: 0, // 纵向拖动距离
      translateX: 0,
      startX: 0,
      isMove: true, //是否中途转向
      isFirst: true //是否
      // startY: 0
    };
  },
  computed: {
    slideLength() {
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
      if (this.loop) {
        this.swiperWrap.innerHTML += this.swiperWrap.innerHTML;
      }
      this.swiperSlide = this.swiperWrap.querySelectorAll('.l-swipe-slide');
      this.translateX = -this.currentIndex * this.swiperSlide[0].offsetWidth;
      this.swiperWrap.style.transform = `translateX(${this.translateX}px)`;
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
      this.deltaX = 0;
      this.isMove = true;
      this.isFirst = true;
      if (this.currentIndex === 0) {
        this.currentIndex = this.slideLength;
      }
      if (this.currentIndex === this.swiperSlide.length - 1) {
        this.currentIndex = this.slideLength - 1;
      }
      this.translateX = -this.currentIndex * this.swiperSlide[0].offsetWidth;
      this.startX = this.translateX;
      this.swiperWrap.style.transform = `translateX(${this.translateX}px)`;
    },
    onTouchMove(evt) {
      if (!this.isMove) {
        return;
      }
      const moveX = this.getTouchPos(evt).x;
      const moveY = this.getTouchPos(evt).y;
      this.deltaX = moveX - this.startPos.x;
      this.deltaY = moveY - this.startPos.y;
      if (this.isFirst) {
        this.isFirst = false;
        if (Math.abs(this.deltaY) > Math.abs(this.deltaX)) {
          this.isMove = false;
        }
      }
      if (this.isMove) {
        this.translateX = this.startX + this.deltaX;

        this.swiperWrap.style.transform = `translateX(${this.translateX}px)`;
      }
    },
    onTouchEnd(evt) {
      this.currentIndex = Math.round(-this.translateX / this.swiperSlide[0].offsetWidth);
      // if (this.currentIndex < 0) {
      //   this.currentIndex = 0;
      // }
      // if (this.currentIndex > this.swiperSlide.length - 1) {
      //   this.currentIndex = this.swiperSlide.length - 1;
      // }
      this.swiperWrap.style.transition = '0.3s ease-out';

      if (this.deltaX < -this.swiperSlide[0].offsetWidth / 2 || this.deltaX < -50) {
        this.currentIndex += 1;
      } else if (this.deltaX > this.swiperSlide[0].offsetWidth / 2 || this.deltaX > 50) {
        this.currentIndex -= 1;
      }
      this.translateX = -this.currentIndex * this.swiperSlide[0].offsetWidth;
      this.swiperWrap.style.transform = `translateX(${this.translateX}px)`;
    }
  }
};
</script>
