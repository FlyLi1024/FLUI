<template>
  <div class="l-swiper-demo">
    <div style="height: 44px;"></div>
    <l-demo-block title="基本使用(默认自动)，必须fixed布局" full>
      <l-swiper>
        <div class="l-swiper-item" v-for="(item, index) in BannerList" :key="index" @click="handleClick(index)">
          <img :src="item" />
        </div>
      </l-swiper>
    </l-demo-block>
    <l-demo-block title="不自动轮播" full>
      <l-swiper height="125px" :autoplay="false">
        <div class="l-swiper-item" v-for="(item, index) in BannerList" :key="index" @click="handleClick(index)">
          <img :src="item" />
        </div>
      </l-swiper>
    </l-demo-block>
    <l-demo-block title="指示点类型二(默认类型一)" full>
      <l-swiper :pagination-theme="2">
        <div class="l-swiper-item" v-for="(item, index) in BannerList" :key="index" @click="handleClick(index)">
          <img :src="item" />
        </div>
      </l-swiper>
    </l-demo-block>
    <l-demo-block title="不显示指示点" full>
      <l-swiper :indicator-dots="false">
        <div class="l-swiper-item" v-for="(item, index) in BannerList" :key="index" @click="handleClick(index)">
          <img :src="item" />
        </div>
      </l-swiper>
    </l-demo-block>
    <l-demo-block title="修改指示点颜色&选中的指示点颜色" full>
      <l-swiper indicator-color="#1AAD19" indicator-active-color="#000">
        <div class="l-swiper-item" v-for="(item, index) in BannerList" :key="index" @click="handleClick(index)">
          <img :src="item" />
        </div>
      </l-swiper>
    </l-demo-block>
    <l-demo-block title="边缘回弹" full>
      <l-swiper :bounce="true" :autoplay="false" :loop="false">
        <div class="l-swiper-item" v-for="(item, index) in BannerList" :key="index" @click="handleClick(index)">
          <img :src="item" />
        </div>
      </l-swiper>
    </l-demo-block>
    <l-demo-block title="指定高度" full>
      <l-swiper height="250px">
        <div class="l-swiper-item" v-for="(item, index) in SwipeList" :key="index" @click="handleClick(index)">
          <img :src="item" />
        </div>
      </l-swiper>
    </l-demo-block>
  </div>
</template>
<script>
export default {
  data() {
    return {
      BannerList: ['http://image.360kad.com/group2/M00/DB/B1/CgAgFV3TTtCATGNlAAFcVU8Bfm8022.jpg', 'http://image.360kad.com/group2/M00/CB/97/CgAgFF2EauKAZ3ExAAEMWYcH8zc849.jpg', 'http://image.360kad.com/group2/M00/DA/50/CgAgFF3OctuAWLrRAAG7wMiJmXc899.jpg'],
      SwipeList: ['http://image.360kad.com/group1/M00/10/92/CgAgEFaB-DuAfOxkAAKCoIAUsAQ83.jpeg', 'http://image.360kad.com/group1/M00/10/92/CgAgEVaB-ECAVM88AAHCr99t02s874.jpg', 'http://image.360kad.com/group1/M00/10/92/CgAgEVaB-EGAdJKJAAGivJvl1W8200.jpg', 'http://image.360kad.com/group1/M00/10/92/CgAgEFaB-ECAWlF6AAGz7DkjCLg527.jpg', 'http://image.360kad.com/group1/M00/10/92/CgAgEFaB-ECAKH5EAAHBYEY_ja8554.jpg']
    };
  },
  methods: {
    handleClick(index) {
      this.$ktoast({
        content: `点击了第${index + 1}张图片`,
        duration: 1000
      });
    }
  }
};
</script>
<style lang="less" scoped>
.l-swiper-demo {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  overflow: auto;
}
</style>
