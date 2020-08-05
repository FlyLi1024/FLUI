<template>
  <div>
    <l-demo-block title="基础用法" full>
      <l-tab>
        <l-tab-pane title="全部订单">全部订单的内容</l-tab-pane>
        <l-tab-pane title="待付款">待付款的内容</l-tab-pane>
        <l-tab-pane title="待发货">待发货的内容</l-tab-pane>
        <l-tab-pane title="待收货">待收货的内容</l-tab-pane>
      </l-tab>
    </l-demo-block>
    <l-demo-block title="添加动画" full>
      <l-tab animated>
        <l-tab-pane title="全部订单">全部订单的内容</l-tab-pane>
        <l-tab-pane title="待付款">待付款的内容</l-tab-pane>
        <l-tab-pane title="待发货">待发货的内容</l-tab-pane>
        <l-tab-pane title="待收货">待收货的内容</l-tab-pane>
      </l-tab>
    </l-demo-block>
    <l-demo-block title="不显示内容" full>
      <l-tab animated>
        <l-tab-pane title="全部订单"></l-tab-pane>
        <l-tab-pane title="待付款"></l-tab-pane>
        <l-tab-pane title="待发货"></l-tab-pane>
        <l-tab-pane title="待收货"></l-tab-pane>
      </l-tab>
    </l-demo-block>
    <l-demo-block title="添加loading&自定义loading" full>
      <l-tab animated loading>
        <l-tab-pane title="全部订单" loading="rotate">全部订单内容 </l-tab-pane>
        <l-tab-pane title="待付款" loading="ball-rotate">待付款内容 </l-tab-pane>
        <l-tab-pane title="待发货" loading="scale">待发货内容 </l-tab-pane>
        <l-tab-pane title="待收货" loading="jelly">待收货内容 </l-tab-pane>
      </l-tab>
    </l-demo-block>
    <l-demo-block title="指定选中" full>
      <l-tab value="待付款" animated>
        <l-tab-pane title="全部订单">全部订单的内容</l-tab-pane>
        <l-tab-pane title="待付款">待付款的内容</l-tab-pane>
        <l-tab-pane title="待发货">待发货的内容</l-tab-pane>
        <l-tab-pane title="待收货">待收货的内容</l-tab-pane>
      </l-tab>
    </l-demo-block>
    <l-demo-block title="指定选中颜色" full>
      <l-tab animated active-color="red">
        <l-tab-pane title="全部订单">全部订单的内容</l-tab-pane>
        <l-tab-pane title="待付款">待付款的内容</l-tab-pane>
        <l-tab-pane title="待发货">待发货的内容</l-tab-pane>
        <l-tab-pane title="待收货">待收货的内容</l-tab-pane>
      </l-tab>
    </l-demo-block>
    <l-demo-block title="添加边框" full>
      <l-tab animated border="1px solid #F0F0F0">
        <l-tab-pane title="全部订单">全部订单的内容</l-tab-pane>
        <l-tab-pane title="待付款">待付款的内容</l-tab-pane>
        <l-tab-pane title="待发货">待发货的内容</l-tab-pane>
        <l-tab-pane title="待收货">待收货的内容</l-tab-pane>
      </l-tab>
    </l-demo-block>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  }
};
</script>
<style lang="less" scoped>
/deep/ .l-tab-pane {
  // height: 200px;
  font-size: 13px;
  // background: #ddd;
  padding: 10px;
  box-sizing: border-box;
}
</style>
