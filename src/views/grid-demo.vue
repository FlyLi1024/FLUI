<template>
  <div>
    <kad-demo-block title="基本使用(默认)" full>
      <kad-grid columns="5">
        <kad-grid-item :icon="icon">全部分类</kad-grid-item>
        <kad-grid-item :icon="icon">领券中心</kad-grid-item>
        <kad-grid-item :icon="icon">签到有礼</kad-grid-item>
        <kad-grid-item :icon="icon">包邮换券</kad-grid-item>
        <kad-grid-item :icon="icon">积分换券</kad-grid-item>
        <kad-grid-item :icon="icon">男士</kad-grid-item>
        <kad-grid-item :icon="icon">女士</kad-grid-item>
        <kad-grid-item :icon="icon">老人</kad-grid-item>
        <kad-grid-item :icon="icon">限时秒杀</kad-grid-item>
        <kad-grid-item :icon="icon">健康头条</kad-grid-item>
      </kad-grid>
    </kad-demo-block>
    <kad-demo-block title="自定义单行个数" full>
      <kad-grid columns="4">
        <kad-grid-item :icon="icon">全部分类</kad-grid-item>
        <kad-grid-item :icon="icon">领券中心</kad-grid-item>
        <kad-grid-item :icon="icon">签到有礼</kad-grid-item>
        <kad-grid-item :icon="icon">包邮换券</kad-grid-item>
        <kad-grid-item :icon="icon">积分换券</kad-grid-item>
        <kad-grid-item :icon="icon">男士</kad-grid-item>
        <kad-grid-item :icon="icon">女士</kad-grid-item>
        <kad-grid-item :icon="icon">老人</kad-grid-item>
      </kad-grid>
    </kad-demo-block>
    <kad-demo-block title="自定义文字颜色" full>
      <kad-grid columns="4">
        <kad-grid-item :icon="icon" color="red">全部分类</kad-grid-item>
        <kad-grid-item :icon="icon" color="red">领券中心</kad-grid-item>
        <kad-grid-item :icon="icon" color="red">签到有礼</kad-grid-item>
        <kad-grid-item :icon="icon" color="red">包邮换券</kad-grid-item>
        <kad-grid-item :icon="icon" color="red">积分换券</kad-grid-item>
        <kad-grid-item :icon="icon" color="red">男士</kad-grid-item>
        <kad-grid-item :icon="icon" color="red">女士</kad-grid-item>
        <kad-grid-item :icon="icon" color="red">老人</kad-grid-item>
      </kad-grid>
    </kad-demo-block>
    <kad-demo-block title="自定义文字大小" full>
      <kad-grid columns="4">
        <kad-grid-item :icon="icon" size="30">全部分类</kad-grid-item>
        <kad-grid-item :icon="icon" size="30">领券中心</kad-grid-item>
        <kad-grid-item :icon="icon" size="30">签到有礼</kad-grid-item>
        <kad-grid-item :icon="icon" size="30">包邮换券</kad-grid-item>
        <kad-grid-item :icon="icon" size="30">积分换券</kad-grid-item>
        <kad-grid-item :icon="icon" size="30">男士</kad-grid-item>
        <kad-grid-item :icon="icon" size="30">女士</kad-grid-item>
        <kad-grid-item :icon="icon" size="30">老人</kad-grid-item>
      </kad-grid>
    </kad-demo-block>
  </div>
</template>

<script>
export default {
  data() {
    return {
      icon: 'https://image.360kad.com/group2/M00/D2/FA/CgAgFV2xBWuAfRNOAAAc8bq72x0865.png',
    };
  },
};
</script>
