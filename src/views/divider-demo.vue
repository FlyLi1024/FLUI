<template>
  <div>
    <l-demo-block title="基础用法(默认)" full>
      <l-divider>END</l-divider>
    </l-demo-block>
    <l-demo-block title="自定义分割线的宽度" full>
      <l-divider lineWidth="30px">END</l-divider>
      <br />
      <l-divider lineWidth="20%">END</l-divider>
      <br />
      <l-divider lineWidth="100%">END</l-divider>
    </l-demo-block>
    <l-demo-block title="增加图标" full>
      <l-divider icon="image">详情</l-divider>
      <br />
      <l-divider icon="pug">我的足迹</l-divider>
    </l-demo-block>
    <l-demo-block title="loading效果" full>
      <l-divider icon="loading-A" loading>商品加载中</l-divider>
    </l-demo-block>
    <l-demo-block title="隐藏短线" full>
      <l-divider :line="false">已经到底了~</l-divider>
      <br />
      <l-divider :line="false">我是有底线的~</l-divider>
    </l-demo-block>
  </div>
</template>
<script>
export default {};
</script>
