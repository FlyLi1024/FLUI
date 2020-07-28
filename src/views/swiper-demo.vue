<template>
  <div class="kad-swiper-demo">
    <div style="height: 44px;"></div>
    <kad-demo-block title="基本使用(默认自动)，必须fixed布局" full>
      <kad-swiper>
        <div class="kad-swiper-item" v-for="(item, index) in BannerList" :key="index" @click="handleClick(index)">
          <img :src="item" />
        </div>
      </kad-swiper>
    </kad-demo-block>
    <kad-demo-block title="不自动轮播" full>
      <kad-swiper height="250px" :autoplay="false">
        <div class="kad-swiper-item" v-for="(item, index) in BannerList" :key="index" @click="handleClick(index)">
          <img :src="item" />
        </div>
      </kad-swiper>
    </kad-demo-block>
    <kad-demo-block title="指示点类型二(默认类型一)" full>
      <kad-swiper :pagination-theme="2">
        <div class="kad-swiper-item" v-for="(item, index) in BannerList" :key="index" @click="handleClick(index)">
          <img :src="item" />
        </div>
      </kad-swiper>
    </kad-demo-block>
    <kad-demo-block title="不显示指示点" full>
      <kad-swiper :indicator-dots="false">
        <div class="kad-swiper-item" v-for="(item, index) in BannerList" :key="index" @click="handleClick(index)">
          <img :src="item" />
        </div>
      </kad-swiper>
    </kad-demo-block>
    <kad-demo-block title="修改指示点颜色&选中的指示点颜色" full>
      <kad-swiper indicator-color="#1AAD19" indicator-active-color="#000">
        <div class="kad-swiper-item" v-for="(item, index) in BannerList" :key="index" @click="handleClick(index)">
          <img :src="item" />
        </div>
      </kad-swiper>
    </kad-demo-block>
    <kad-demo-block title="边缘回弹" full>
      <kad-swiper :bounce="true" :autoplay="false" :loop="false">
        <div class="kad-swiper-item" v-for="(item, index) in BannerList" :key="index" @click="handleClick(index)">
          <img :src="item" />
        </div>
      </kad-swiper>
    </kad-demo-block>
    <kad-demo-block title="指定高度" full>
      <kad-swiper height="500px">
        <div class="kad-swiper-item" v-for="(item, index) in SwipeList" :key="index" @click="handleClick(index)">
          <img :src="item" />
        </div>
      </kad-swiper>
    </kad-demo-block>
  </div>
</template>
<script>
export default {
  data() {
    return {
      BannerList: ['http://image.360kad.com/group2/M00/DB/B1/CgAgFV3TTtCATGNlAAFcVU8Bfm8022.jpg', 'http://image.360kad.com/group2/M00/CB/97/CgAgFF2EauKAZ3ExAAEMWYcH8zc849.jpg', 'http://image.360kad.com/group2/M00/DA/50/CgAgFF3OctuAWLrRAAG7wMiJmXc899.jpg'],
      SwipeList: ['http://image.360kad.com/group1/M00/10/92/CgAgEFaB-DuAfOxkAAKCoIAUsAQ83.jpeg', 'http://image.360kad.com/group1/M00/10/92/CgAgEVaB-ECAVM88AAHCr99t02s874.jpg', 'http://image.360kad.com/group1/M00/10/92/CgAgEVaB-EGAdJKJAAGivJvl1W8200.jpg', 'http://image.360kad.com/group1/M00/10/92/CgAgEFaB-ECAWlF6AAGz7DkjCLg527.jpg', 'http://image.360kad.com/group1/M00/10/92/CgAgEFaB-ECAKH5EAAHBYEY_ja8554.jpg'],
    };
  },
  methods: {
    handleClick(index) {
      this.$ktoast({
        content: `点击了第${index + 1}张图片`,
        duration: 1000,
      });
    },
  },
};
</script>
<style lang="less" scoped>
.kad-swiper-demo {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  overflow: auto;
}
</style>
