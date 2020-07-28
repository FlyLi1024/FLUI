<template>
  <div class="loading-demo">
    <kad-demo-block title="基本类型">
      <kad-loading type="rotate"></kad-loading>
      <kad-loading type="ball-rotate"></kad-loading>
      <kad-loading type="scale"></kad-loading>
      <kad-loading type="jelly"></kad-loading>
    </kad-demo-block>
    <kad-demo-block title="自定义颜色">
      <kad-loading type="rotate" color="red"></kad-loading>
      <kad-loading type="ball-rotate" color="red"></kad-loading>
      <kad-loading type="scale" color="red"></kad-loading>
      <kad-loading type="jelly" color="red"></kad-loading>
    </kad-demo-block>
    <kad-demo-block title="自定义大小">
      <kad-loading type="rotate" color="red" size="30px"></kad-loading>
      <kad-loading type="ball-rotate" color="red" size="30px"></kad-loading>
      <kad-loading type="scale" color="red" size="30px"></kad-loading>
      <kad-loading type="jelly" color="red" size="30px"></kad-loading>
    </kad-demo-block>
  </div>
</template>

<script>
export default {};
</script>
<style lang="less" scoped>
.kad-loading {
  margin: 0 40px;
}
</style>
