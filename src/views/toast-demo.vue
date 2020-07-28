<template>
  <div class="toast-demo">
    <kad-demo-block title="文字提示" full>
      <kad-button type="info" @click="Toast('短文字提示')">短文字提示</kad-button>
      <kad-button type="info" @click="Toast('长文字提示长文字提示长文字提示长文字提示')">长文字提示</kad-button>
    </kad-demo-block>

    <kad-demo-block title="自定义时间" full>
      <kad-button type="info" @click="Toast('自定义时间')">默认2s关闭</kad-button>
      <kad-button type="info" @click="ToastTime(1000)">1s后关闭</kad-button>
      <kad-button type="info" @click="ToastTime(0)">不自动关闭</kad-button>
    </kad-demo-block>
    <kad-demo-block title="自定义透明度" full>
      <kad-button type="info" @click="ToastOpacity('kad-scale')">0(默认)</kad-button>
      <kad-button type="info" @click="ToastOpacity('kad-scale', 0.3)">0.3</kad-button>
      <kad-button type="info" @click="ToastOpacity('kad-scale', 0.5)">0.5</kad-button>
      <kad-button type="info" @click="ToastOpacity('kad-scale', 0.8)">0.8</kad-button>
    </kad-demo-block>

    <kad-demo-block title="自定义图标(上下结构)" full>
      <kad-button type="info" @click="ToastIcon('success')">成功</kad-button>
      <kad-button type="info" @click="ToastIcon('wrong')">失败</kad-button>
      <kad-button type="info" @click="ToastIcon('info')">提示</kad-button>
    </kad-demo-block>

    <kad-demo-block title="自定义图标(左右结构)" full>
      <kad-button type="info" @click="ToastIcon('success', true)">成功</kad-button>
      <kad-button type="info" @click="ToastIcon('wrong', true)">失败</kad-button>
      <kad-button type="info" @click="ToastIcon('info', true)">提示</kad-button>
    </kad-demo-block>

    <kad-demo-block title="Loading加载" full>
      <kad-button type="info" @click="ToastLoading(1)">加载数据(默认不自动关闭)</kad-button>
      <kad-button type="info" @click="ToastLoading(2)">5s后关闭加载</kad-button>
    </kad-demo-block>

    <kad-demo-block title="自定义动画" full>
      <kad-button type="info" @click="ToastAnim('kad-fade')">kad-fade</kad-button>
      <kad-button type="info" @click="ToastAnim('kad-pop')">kad-pop</kad-button>
      <kad-button type="info" @click="ToastAnim('kad-flipX')">kad-flipX</kad-button>
      <kad-button type="info" @click="ToastAnim('kad-spin')">kad-spin</kad-button>
      <kad-button type="info" @click="ToastAnim('kad-fold')">kad-fold</kad-button>
      <kad-button type="info" @click="ToastAnim('kad-scale')">kad-scale</kad-button>
    </kad-demo-block>
  </div>
</template>

<script>
export default {
  methods: {
    Toast(content) {
      this.$ktoast(content);
    },
    ToastClose() {
      this.$ktoast('5s后关闭');
      setTimeout(() => {
        this.$ktoast.close();
      }, 5000);
    },
    // 自定义图标
    ToastIcon(icon, horizontal) {
      this.$ktoast({
        content: '自定义图标',
        icon,
        horizontal,
      });
    },
    // Loading加载
    ToastLoading(type) {
      if (type === 1) {
        // this.$loadingStart('正在加载数据');
        this.$loadingStart({
          content: '正在加载数据',
          anim: 'kad-scale',
        });
      } else {
        this.$loadingStart({
          content: '正在加载数据',
          anim: 'kad-scale',
        });
        setTimeout(() => {
          this.$loadingEnd();
        }, 5000);
      }
    },
    // 自定义时间
    ToastTime(duration) {
      this.$ktoast({
        content: '自定义时间',
        duration,
      });
    },
    // 自定义动画
    ToastAnim(anim) {
      this.$ktoast({
        content: '自定义显示动画',
        anim,
      });
    },
    ToastOpacity(anim, opacity = 0) {
      this.$ktoast({
        content: '自定义透明度',
        anim,
        opacity,
      });
    },
  },
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
  .kad-button {
    margin: 16px;
    &--full {
      margin: 20px 0;
    }
  }
}
</style>
