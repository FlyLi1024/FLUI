<template>
  <div>
    <l-demo-block title="基本使用(默认)" full>
      <l-grid columns="5">
        <l-grid-item :icon="icon">全部分类</l-grid-item>
        <l-grid-item :icon="icon">领券中心</l-grid-item>
        <l-grid-item :icon="icon">签到有礼</l-grid-item>
        <l-grid-item :icon="icon">包邮换券</l-grid-item>
        <l-grid-item :icon="icon">积分换券</l-grid-item>
        <l-grid-item :icon="icon">男士</l-grid-item>
        <l-grid-item :icon="icon">女士</l-grid-item>
        <l-grid-item :icon="icon">老人</l-grid-item>
        <l-grid-item :icon="icon">限时秒杀</l-grid-item>
        <l-grid-item :icon="icon">健康头条</l-grid-item>
      </l-grid>
    </l-demo-block>
    <l-demo-block title="自定义单行个数" full>
      <l-grid columns="4">
        <l-grid-item :icon="icon">全部分类</l-grid-item>
        <l-grid-item :icon="icon">领券中心</l-grid-item>
        <l-grid-item :icon="icon">签到有礼</l-grid-item>
        <l-grid-item :icon="icon">包邮换券</l-grid-item>
        <l-grid-item :icon="icon">积分换券</l-grid-item>
        <l-grid-item :icon="icon">男士</l-grid-item>
        <l-grid-item :icon="icon">女士</l-grid-item>
        <l-grid-item :icon="icon">老人</l-grid-item>
      </l-grid>
    </l-demo-block>
    <l-demo-block title="自定义文字颜色" full>
      <l-grid columns="4">
        <l-grid-item :icon="icon" color="red">全部分类</l-grid-item>
        <l-grid-item :icon="icon" color="red">领券中心</l-grid-item>
        <l-grid-item :icon="icon" color="red">签到有礼</l-grid-item>
        <l-grid-item :icon="icon" color="red">包邮换券</l-grid-item>
        <l-grid-item :icon="icon" color="red">积分换券</l-grid-item>
        <l-grid-item :icon="icon" color="red">男士</l-grid-item>
        <l-grid-item :icon="icon" color="red">女士</l-grid-item>
        <l-grid-item :icon="icon" color="red">老人</l-grid-item>
      </l-grid>
    </l-demo-block>
    <l-demo-block title="自定义文字大小" full>
      <l-grid columns="4">
        <l-grid-item :icon="icon" size="16px">全部分类</l-grid-item>
        <l-grid-item :icon="icon" size="16px">领券中心</l-grid-item>
        <l-grid-item :icon="icon" size="16px">签到有礼</l-grid-item>
        <l-grid-item :icon="icon" size="16px">包邮换券</l-grid-item>
        <l-grid-item :icon="icon" size="16px">积分换券</l-grid-item>
        <l-grid-item :icon="icon" size="16px">男士</l-grid-item>
        <l-grid-item :icon="icon" size="16px">女士</l-grid-item>
        <l-grid-item :icon="icon" size="16px">老人</l-grid-item>
      </l-grid>
    </l-demo-block>
  </div>
</template>

<script>
export default {
  data() {
    return {
      icon: 'https://image.360kad.com/group2/M00/D2/FA/CgAgFV2xBWuAfRNOAAAc8bq72x0865.png'
    };
  }
};
</script>
