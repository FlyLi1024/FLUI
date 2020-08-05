<template>
  <div class="loading-demo">
    <l-demo-block title="基本类型">
      <l-loading type="rotate"></l-loading>
      <l-loading type="ball-rotate"></l-loading>
      <l-loading type="scale"></l-loading>
      <l-loading type="jelly"></l-loading>
    </l-demo-block>
    <l-demo-block title="自定义颜色">
      <l-loading type="rotate" color="red"></l-loading>
      <l-loading type="ball-rotate" color="red"></l-loading>
      <l-loading type="scale" color="red"></l-loading>
      <l-loading type="jelly" color="red"></l-loading>
    </l-demo-block>
    <l-demo-block title="自定义大小">
      <l-loading type="rotate" color="red" size="15px"></l-loading>
      <l-loading type="ball-rotate" color="red" size="15px"></l-loading>
      <l-loading type="scale" color="red" size="15px"></l-loading>
      <l-loading type="jelly" color="red" size="15px"></l-loading>
    </l-demo-block>
  </div>
</template>

<script>
export default {};
</script>
<style lang="less" scoped>
.l-loading {
  margin: 0 20px;
}
</style>
