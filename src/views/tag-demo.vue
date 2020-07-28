<template>
  <div class="kad-tag-demo">
    <kad-demo-block title="基础用法">
      <kad-tag>标签</kad-tag>
      <kad-tag bgColor="#07c160">标签</kad-tag>
      <kad-tag bgColor="#1989fa">标签</kad-tag>
      <kad-tag bgColor="#f44">标签</kad-tag>
      <kad-tag bgColor="#ff976a">标签</kad-tag>
    </kad-demo-block>
    <kad-demo-block title="朴素">
      <kad-tag bgColor="#a1a1a1" plain>标签</kad-tag>
      <kad-tag bgColor="#07c160" plain>标签</kad-tag>
      <kad-tag bgColor="#1989fa" plain>标签</kad-tag>
      <kad-tag bgColor="#f44" plain>标签</kad-tag>
      <kad-tag bgColor="#ff976a" plain>标签</kad-tag>
    </kad-demo-block>
    <kad-demo-block title="自定义圆角">
      <kad-tag bgColor="#a1a1a1" plain round="4px">标签</kad-tag>
      <kad-tag bgColor="#a1a1a1" plain round="30px">标签</kad-tag>
      <kad-tag bgColor="#a1a1a1" plain round="0 20px 20px 20px">标签</kad-tag>
      <kad-tag bgColor="#a1a1a1" plain round="20px 20px 20px 0">标签</kad-tag>
      <kad-tag bgColor="#a1a1a1" plain round="20px 0 20px 0">标签</kad-tag>
      <kad-tag bgColor="#a1a1a1" plain round="0 30px 30px 0">标签</kad-tag>
      <kad-tag bgColor="#a1a1a1" plain round="30px 0  0 30px">标签</kad-tag>
    </kad-demo-block>
    <kad-demo-block title="自定义大小">
      <kad-tag bgColor="#a1a1a1" size="10px">标签</kad-tag>
      <kad-tag bgColor="#a1a1a1" size="20px">标签</kad-tag>
      <kad-tag bgColor="#a1a1a1" size="30px">标签</kad-tag>
      <kad-tag bgColor="#a1a1a1" size="40px">标签</kad-tag>
    </kad-demo-block>
  </div>
</template>

<script>
export default {};
</script>
<style lang="less" scoped>
/deep/ .kad-tag {
  margin-right: 20px;
}
</style>
