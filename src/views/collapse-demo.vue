<template>
  <div class="collapse" full>
    <kad-demo-block title="基础用法">
      <kad-collapse>
        <kad-collapse-item title="单元格">
          <div class="collapseBox">内容</div>
        </kad-collapse-item>
        <kad-collapse-item title="单元格">
          <div class="collapseBox">内容</div>
        </kad-collapse-item>
        <kad-collapse-item title="单元格">
          <div class="collapseBox">内容</div>
        </kad-collapse-item>
      </kad-collapse>
    </kad-demo-block>

    <kad-demo-block title="手风琴用法">
      <kad-collapse accordion>
        <kad-collapse-item title="单元格" name="1">
          <div class="collapseBox">内容</div>
        </kad-collapse-item>
        <kad-collapse-item title="单元格" name="2">
          <div class="collapseBox">内容</div>
        </kad-collapse-item>
        <kad-collapse-item title="单元格" name="3">
          <div class="collapseBox">内容</div>
        </kad-collapse-item>
      </kad-collapse>
    </kad-demo-block>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.collapseBox {
  text-align: center;
  height: 200px;
  line-height: 200px;
  background: #fff;
}
</style>
