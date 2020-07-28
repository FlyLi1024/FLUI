<template>
  <div>
    <kad-demo-block title="基础用法">
      <kad-switch v-model="checked"></kad-switch>
    </kad-demo-block>
    <kad-demo-block title="禁止操作">
      <kad-switch v-model="checked" disabled></kad-switch>
    </kad-demo-block>
    <kad-demo-block title="修改颜色">
      <kad-switch v-model="checked" active-color="#f90"></kad-switch>
    </kad-demo-block>
    <kad-demo-block title="loading效果">
      <kad-switch v-model="checked" active-color="#f90" loading></kad-switch>
    </kad-demo-block>
  </div>
</template>

<script>
export default {
  data() {
    return {
      checked: true,
    };
  },
};
</script>
