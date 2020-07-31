<template>
  <div>
    <l-demo-block title="基础用法">
      <l-switch v-model="checked"></l-switch>
    </l-demo-block>
    <l-demo-block title="禁止操作">
      <l-switch v-model="checked" disabled></l-switch>
    </l-demo-block>
    <l-demo-block title="修改颜色">
      <l-switch v-model="checked" active-color="#f90"></l-switch>
    </l-demo-block>
    <l-demo-block title="loading效果">
      <l-switch v-model="checked" active-color="#f90" loading></l-switch>
    </l-demo-block>
  </div>
</template>

<script>
export default {
  data() {
    return {
      checked: true
    };
  }
};
</script>
