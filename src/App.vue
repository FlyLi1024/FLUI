<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: 'app',
};
</script>
<style lang="less" scoped>
.html,
body {
  background: #efefef;
  font-family: '微软雅黑';
}
#app {
  font-size: 32px;
  font-family: -apple-system, BlinkMacSystemFont, 'Helvetica Neue', Helvetica, Segoe UI, Arial, Roboto, 'PingFang SC', 'Hiragino Sans GB', 'Microsoft Yahei', sans-serif;
}
</style>
