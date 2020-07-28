<template>
  <div>
    <kad-demo-block title="基础用法(默认)">
      <kad-divider>END</kad-divider>
    </kad-demo-block>
    <kad-demo-block title="自定义分割线的宽度">
      <kad-divider lineWidth="30px">END</kad-divider>
      <br />
      <kad-divider lineWidth="200px">END</kad-divider>
      <br />
      <kad-divider lineWidth="100%">END</kad-divider>
    </kad-demo-block>
    <kad-demo-block title="增加图标">
      <kad-divider icon="image">详情</kad-divider>
      <br />
      <kad-divider icon="pug">我的足迹</kad-divider>
    </kad-demo-block>
    <kad-demo-block title="loading效果">
      <kad-divider icon="loading-A" loading>商品加载中</kad-divider>
    </kad-demo-block>
    <kad-demo-block title="隐藏短线">
      <kad-divider :line="false">已经到底了~</kad-divider>
      <br />
      <kad-divider :line="false">我是有底线的~</kad-divider>
    </kad-demo-block>
  </div>
</template>
<script>
export default {};
</script>
