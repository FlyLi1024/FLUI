<template>
  <div class="toast-demo">
    <l-demo-block title="文字提示" full>
      <l-button type="info" @click="Toast('短文字提示')">短文字提示</l-button>
      <l-button type="info" @click="Toast('长文字提示长文字提示长文字提示长文字提示')">长文字提示</l-button>
    </l-demo-block>

    <l-demo-block title="自定义时间" full>
      <l-button type="info" @click="Toast('自定义时间')">默认2s关闭</l-button>
      <l-button type="info" @click="ToastTime(1000)">1s后关闭</l-button>
      <l-button type="info" @click="ToastTime(0)">不自动关闭</l-button>
    </l-demo-block>
    <l-demo-block title="自定义透明度" full>
      <l-button type="info" @click="ToastOpacity('l-scale')">0(默认)</l-button>
      <l-button type="info" @click="ToastOpacity('l-scale', 0.3)">0.3</l-button>
      <l-button type="info" @click="ToastOpacity('l-scale', 0.5)">0.5</l-button>
      <l-button type="info" @click="ToastOpacity('l-scale', 0.8)">0.8</l-button>
    </l-demo-block>

    <l-demo-block title="自定义图标(上下结构)" full>
      <l-button type="info" @click="ToastIcon('success')">成功</l-button>
      <l-button type="info" @click="ToastIcon('wrong')">失败</l-button>
      <l-button type="info" @click="ToastIcon('info')">提示</l-button>
    </l-demo-block>

    <l-demo-block title="自定义图标(左右结构)" full>
      <l-button type="info" @click="ToastIcon('success', true)">成功</l-button>
      <l-button type="info" @click="ToastIcon('wrong', true)">失败</l-button>
      <l-button type="info" @click="ToastIcon('info', true)">提示</l-button>
    </l-demo-block>

    <l-demo-block title="Loading加载" full>
      <l-button type="info" @click="ToastLoading(1)">加载数据(默认不自动关闭)</l-button>
      <l-button type="info" @click="ToastLoading(2)">5s后关闭加载</l-button>
    </l-demo-block>

    <l-demo-block title="自定义动画" full>
      <l-button type="info" @click="ToastAnim('l-fade')">l-fade</l-button>
      <l-button type="info" @click="ToastAnim('l-pop')">l-pop</l-button>
      <l-button type="info" @click="ToastAnim('l-flipX')">l-flipX</l-button>
      <l-button type="info" @click="ToastAnim('l-spin')">l-spin</l-button>
      <l-button type="info" @click="ToastAnim('l-fold')">l-fold</l-button>
      <l-button type="info" @click="ToastAnim('l-scale')">l-scale</l-button>
    </l-demo-block>
  </div>
</template>

<script>
export default {
  methods: {
    Toast(content) {
      this.$ltoast(content);
    },
    ToastClose() {
      this.$ltoast('5s后关闭');
      setTimeout(() => {
        this.$ltoast.close();
      }, 5000);
    },
    // 自定义图标
    ToastIcon(icon, horizontal) {
      this.$ltoast({
        content: '自定义图标',
        icon,
        horizontal
      });
    },
    // Loading加载
    ToastLoading(type) {
      if (type === 1) {
        // this.$loadingStart('正在加载数据');
        this.$loadingStart({
          content: '正在加载数据',
          anim: 'l-scale'
        });
      } else {
        this.$loadingStart({
          content: '正在加载数据',
          anim: 'l-scale'
        });
        setTimeout(() => {
          this.$loadingEnd();
        }, 5000);
      }
    },
    // 自定义时间
    ToastTime(duration) {
      this.$ltoast({
        content: '自定义时间',
        duration
      });
    },
    // 自定义动画
    ToastAnim(anim) {
      this.$ltoast({
        content: '自定义显示动画',
        anim
      });
    },
    ToastOpacity(anim, opacity = 0) {
      this.$ltoast({
        content: '自定义透明度',
        anim,
        opacity
      });
    }
  }
};
</script>

<style lang="less" scoped>
.toast-demo {
  padding-bottom: 20px;
  font-size: 28px;
  .title {
    line-height: 100px;
    color: #999;
  }
  .l-button {
    margin: 16px;
    &--full {
      margin: 20px 0;
    }
  }
}
</style>
