<template>
  <div class="back-top-demo">
    <div class="item" v-for="(item, index) in 50" :key="index">List-{{ index }}</div>
    <kad-demo-block title="滑动到页面底部">
      <kad-back-top src="https://image.360kad.com/group2/M00/FE/A2/CgAgFV7YzaGAFX0AAAA8oips2Do711.jpg" />
    </kad-demo-block>
    <kad-back-top theme="1" src="https://image.360kad.com/group2/M00/FE/A2/CgAgFV7YzaGAFX0AAAA8oips2Do711.jpg" />
    <!-- <kad-suspend src="https://i.loli.net/2019/12/05/5fVAPHqBCFan3Rw.png">
      <kad-suspend-item v-for="(item, index) in 3" :key="index" src="https://i.loli.net/2019/12/05/57mGntEWz4ZeBrq.png" text="首页" />
    </kad-suspend>
    <kad-suspend theme="left" src="https://i.loli.net/2019/12/05/5fVAPHqBCFan3Rw.png">
      <kad-suspend-item v-for="(item, index) in 3" :key="index" src="https://i.loli.net/2019/12/05/57mGntEWz4ZeBrq.png" text="首页" />
    </kad-suspend> -->
  </div>
</template>

<script>
export default {
  mounted() {
    document.querySelector('#app').style.position = 'relative';
  },
};
</script>

<style lang="less" scoped>
.back-top-demo {
  .item {
    line-height: 100px;
    font-size: 28px;
    text-align: center;
    color: #333;
    border-bottom: 1px solid #ddd;
  }
}
</style>
