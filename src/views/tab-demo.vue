<template>
  <div>
    <kad-demo-block title="基础用法" full>
      <kad-tab>
        <kad-tab-pane title="全部订单">全部订单的内容</kad-tab-pane>
        <kad-tab-pane title="待付款">待付款的内容</kad-tab-pane>
        <kad-tab-pane title="待发货">待发货的内容</kad-tab-pane>
        <kad-tab-pane title="待收货">待收货的内容</kad-tab-pane>
      </kad-tab>
    </kad-demo-block>
    <kad-demo-block title="添加动画" full>
      <kad-tab animated>
        <kad-tab-pane title="全部订单">全部订单的内容</kad-tab-pane>
        <kad-tab-pane title="待付款">待付款的内容</kad-tab-pane>
        <kad-tab-pane title="待发货">待发货的内容</kad-tab-pane>
        <kad-tab-pane title="待收货">待收货的内容</kad-tab-pane>
      </kad-tab>
    </kad-demo-block>
    <kad-demo-block title="不显示内容" full>
      <kad-tab animated>
        <kad-tab-pane title="全部订单"></kad-tab-pane>
        <kad-tab-pane title="待付款"></kad-tab-pane>
        <kad-tab-pane title="待发货"></kad-tab-pane>
        <kad-tab-pane title="待收货"></kad-tab-pane>
      </kad-tab>
    </kad-demo-block>
    <kad-demo-block title="添加loading&自定义loading" full>
      <kad-tab animated loading>
        <kad-tab-pane title="全部订单" loading="rotate">全部订单内容 </kad-tab-pane>
        <kad-tab-pane title="待付款" loading="ball-rotate">待付款内容 </kad-tab-pane>
        <kad-tab-pane title="待发货" loading="scale">待发货内容 </kad-tab-pane>
        <kad-tab-pane title="待收货" loading="jelly">待收货内容 </kad-tab-pane>
      </kad-tab>
    </kad-demo-block>
    <kad-demo-block title="指定选中" full>
      <kad-tab value="待付款" animated>
        <kad-tab-pane title="全部订单">全部订单的内容</kad-tab-pane>
        <kad-tab-pane title="待付款">待付款的内容</kad-tab-pane>
        <kad-tab-pane title="待发货">待发货的内容</kad-tab-pane>
        <kad-tab-pane title="待收货">待收货的内容</kad-tab-pane>
      </kad-tab>
    </kad-demo-block>
    <kad-demo-block title="指定选中颜色" full>
      <kad-tab animated active-color="red">
        <kad-tab-pane title="全部订单">全部订单的内容</kad-tab-pane>
        <kad-tab-pane title="待付款">待付款的内容</kad-tab-pane>
        <kad-tab-pane title="待发货">待发货的内容</kad-tab-pane>
        <kad-tab-pane title="待收货">待收货的内容</kad-tab-pane>
      </kad-tab>
    </kad-demo-block>
    <kad-demo-block title="添加边框" full>
      <kad-tab animated border="1px solid #F0F0F0">
        <kad-tab-pane title="全部订单">全部订单的内容</kad-tab-pane>
        <kad-tab-pane title="待付款">待付款的内容</kad-tab-pane>
        <kad-tab-pane title="待发货">待发货的内容</kad-tab-pane>
        <kad-tab-pane title="待收货">待收货的内容</kad-tab-pane>
      </kad-tab>
    </kad-demo-block>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
};
</script>
<style lang="less" scoped>
/deep/ .kad-tab-pane {
  // height: 200px;
  font-size: 26px;
  // background: #ddd;
  padding: 20px;
  box-sizing: border-box;
}
</style>
