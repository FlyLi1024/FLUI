<template>
  <div>
    <kad-demo-block title="基础用法">
      <kad-cell title="单元格" />
      <kad-cell title="单元格" label="描述信息" value="内容" :showIcon="false" />
    </kad-demo-block>

    <kad-demo-block title="展示图标">
      <kad-cell title="单元格" label="描述信息" value="内容" />
    </kad-demo-block>

    <kad-demo-block title="可点击">
      <kad-cell title="单元格" label="描述信息" value="内容" icon="right" />
    </kad-demo-block>
  </div>
</template>
<script>
export default {};
</script>
