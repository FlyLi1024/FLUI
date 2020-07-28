<template>
  <div class="kad-back-top" :class="theme === '1' ? 'fixed-scroll' : ''" @click="goTop">
    <kad-image :src="src" />
  </div>
</template>

<script>
export default {
  name: 'KadBackTop',
  data() {
    return {
      scrollTop: 0,
      timer: null,
    };
  },
  props: {
    // 默认不传，底部返回顶部，传1为页面固定
    theme: {
      type: String,
      default: '',
    },
    src: {
      type: String,
      default: '',
    },
  },
  methods: {
    goTop() {
      this.scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      this.timer = setTimeout(() => {
        if (this.scrollTop <= 0) {
          clearTimeout(this.timer);
        } else {
          document.body.scrollTop = document.documentElement.scrollTop = this.scrollTop -= 50;
          this.goTop();
        }
      }, 10);
    },
  },
};
</script>
