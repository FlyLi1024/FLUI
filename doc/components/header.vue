<template>
  <div class="doc-header">
    <div class="logo">
      <!-- <img src="http://res.360kad.com/vp/logo.png" /> -->
      <span>KAD_DESIGN</span>
    </div>
    <div class="search">
      <input type="text" placeholder="搜你妹，还没实现这功能" />
    </div>
    <div class="nav">
      <Nav></Nav>
    </div>
  </div>
</template>
<script>
import Nav from './nav';
export default {
  components: {
    Nav
  }
};
</script>
<style lang="less" scoped>
@import '../style/var.less';
.doc-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background: #fff;
  height: 140px;
  width: 100%;
  box-sizing: border-box;
  border-bottom: 1px solid #eaecef;
  box-shadow: 0 0 10px #eaecef;
  display: flex;
  align-items: center;
  .logo {
    flex-shrink: 0;
    width: 560px;
    height: 140px;
    line-height: 140px;
    text-align: center;
    padding: 0 20px;
    box-sizing: border-box;
    border-right: 1px solid #eaecef;
    font-size: 48px;
    color: @logo-color;
    font-weight: 400;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      display: block;
      width: 48px;
      height: 48px;
      margin-right: 20px;
    }
  }
  .search {
    flex-shrink: 0;
    width: 600px;
    padding: 0 20px;
    height: 140px;
    line-height: 140px;
    padding-left: 40px;
    box-sizing: border-box;
    input {
      width: 80%;
      height: 60px;
      line-height: 60px;
      border: 1px solid #eaecef;
      font-size: 24px;
      padding: 0 20px;
      box-sizing: border-box;
      border-radius: 40px;
      outline: none;
      transition: 0.2s ease-out;
      &:focus {
        border: 1px solid @search-focus-border-color;
      }
    }
  }
  .nav {
    flex: 1;
    width: 100%;
    height: 140px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding-right: 100px;
    color: #a1a1a1;
  }
}
</style>
