<template>
  <div class="l-swiper-demo">
    <!-- <p v-for="(item, index) in 20" :key="'a' + index">234</p> -->
    <l-demo-block title="基本使用(默认自动)，必须fixed布局" full>
      <l-swipe>
        <div class="l-swipe-slide" v-for="(item, index) in BannerList" :key="index">
          <img :src="item" />
        </div>
      </l-swipe>
    </l-demo-block>
    <l-demo-block title="指定下标" full>
      <l-swipe direction="vertical" current="2">
        <div class="l-swipe-slide" v-for="(item, index) in BannerList" :key="index">
          <img :src="item" />
          <span style="position: absolute; z-index: 100;">{{ index + 1 }}</span>
        </div>
      </l-swipe>
    </l-demo-block>
    <l-demo-block title="循环" full>
      <l-swipe direction="vertical">
        <div class="l-swipe-slide" v-for="(item, index) in BannerList" :key="index">
          <img :src="item" />
          <span style="position: absolute; z-index: 100;">{{ index + 1 }}</span>
        </div>
      </l-swipe>
    </l-demo-block>
    <!-- <p v-for="(item, index) in 20" :key="'b' + index">234</p> -->
  </div>
</template>
<script>
export default {
  data() {
    return {
      BannerList: ['https://image.360kad.com/group1/M00/2B/E2/CgAgD18x8lqAQWGmAAFgZbrPZqc556.jpg', 'https://image.360kad.com/group1/M00/2B/DF/CgAgD18x71yACP7ZAAC7aaCIT34609.jpg', 'http://image.360kad.com/group2/M00/DA/50/CgAgFF3OctuAWLrRAAG7wMiJmXc899.jpg']
    };
  },
  methods: {}
};
</script>
<style lang="less" scoped></style>
