<template>
  <div class="l-tag-demo">
    <l-demo-block title="基础用法">
      <l-tag>标签</l-tag>
      <l-tag bgColor="#07c160">标签</l-tag>
      <l-tag bgColor="#1989fa">标签</l-tag>
      <l-tag bgColor="#f44">标签</l-tag>
      <l-tag bgColor="#ff976a">标签</l-tag>
    </l-demo-block>
    <l-demo-block title="朴素">
      <l-tag bgColor="#a1a1a1" plain>标签</l-tag>
      <l-tag bgColor="#07c160" plain>标签</l-tag>
      <l-tag bgColor="#1989fa" plain>标签</l-tag>
      <l-tag bgColor="#f44" plain>标签</l-tag>
      <l-tag bgColor="#ff976a" plain>标签</l-tag>
    </l-demo-block>
    <l-demo-block title="自定义圆角">
      <l-tag bgColor="#a1a1a1" plain round="4px">标签</l-tag>
      <l-tag bgColor="#a1a1a1" plain round="30px">标签</l-tag>
      <l-tag bgColor="#a1a1a1" plain round="0 20px 20px 20px">标签</l-tag>
      <l-tag bgColor="#a1a1a1" plain round="20px 20px 20px 0">标签</l-tag>
      <l-tag bgColor="#a1a1a1" plain round="20px 0 20px 0">标签</l-tag>
      <l-tag bgColor="#a1a1a1" plain round="0 30px 30px 0">标签</l-tag>
      <l-tag bgColor="#a1a1a1" plain round="30px 0  0 30px">标签</l-tag>
    </l-demo-block>
    <l-demo-block title="自定义大小">
      <l-tag bgColor="#a1a1a1" size="10px">标签</l-tag>
      <l-tag bgColor="#a1a1a1" size="14px">标签</l-tag>
      <l-tag bgColor="#a1a1a1" size="18px">标签</l-tag>
      <l-tag bgColor="#a1a1a1" size="22px">标签</l-tag>
    </l-demo-block>
  </div>
</template>

<script>
export default {};
</script>
<style lang="less" scoped>
/deep/ .l-tag {
  margin-right: 10px;
}
</style>
