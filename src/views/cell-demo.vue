<template>
  <div>
    <l-demo-block title="基础用法">
      <l-cell title="单元格" />
      <l-cell title="单元格" label="描述信息" value="内容" :showIcon="false" />
    </l-demo-block>

    <l-demo-block title="展示图标">
      <l-cell title="单元格" label="描述信息" value="内容" />
    </l-demo-block>

    <l-demo-block title="可点击">
      <l-cell title="单元格" label="描述信息" value="内容" icon="right" />
    </l-demo-block>
  </div>
</template>
<script>
export default {};
</script>
