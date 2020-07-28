<template>
  <div class="doc-nav">
    <div class="item"><a href="">主页</a></div>
    <div class="item"><a href="">组件</a></div>
    <div class="item"><a href="" target="_blank">示例</a></div>
    <div class="item"><a href="" target="_blank">页面</a></div>
    <div class="item"><a href="" target="_blank">gitlab</a></div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="less" scoped>
@import '../style/var.less';
.doc-nav {
  display: flex;
  .item {
    font-size: 28px;
    height: 140px;
    line-height: 140px;
    cursor: pointer;
    white-space: nowrap;
    transition: 0.3s cubic-bezier(0.51, 1.65, 0.37, 0.66);
    a {
      display: block;
      padding: 0 40px;
      color: #a1a1a1 !important;
      text-decoration: none;
    }
    &:hover {
      box-shadow: 0 20px 20px 4px #ddd;
      a {
        color: @nav-hover-color !important;
      }
    }
  }
}
</style>
