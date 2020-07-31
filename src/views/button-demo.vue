<template>
  <div class="pages button-demo">
    <l-demo-block title="按钮类型">
      <l-button type="default">默认按钮</l-button>
      <l-button type="primary">主要按钮</l-button>
      <l-button type="info">信息按钮</l-button>
      <l-button type="danger">危险按钮</l-button>
      <l-button type="warning">警告按钮</l-button>
    </l-demo-block>

    <l-demo-block title="朴素按钮">
      <l-button type="default" plain>默认按钮</l-button>
      <l-button type="primary" plain>主要按钮</l-button>
      <l-button type="info" plain>信息按钮</l-button>
      <l-button type="danger" plain>危险按钮</l-button>
      <l-button type="warning" plain>警告按钮</l-button>
    </l-demo-block>

    <l-demo-block title="圆角按钮">
      <l-button type="default" round>默认按钮</l-button>
      <l-button type="primary" round>主要按钮</l-button>
      <l-button type="info" round>信息按钮</l-button>
      <l-button type="danger" round>危险按钮</l-button>
      <l-button type="warning" round>警告按钮</l-button>
    </l-demo-block>

    <l-demo-block title="按钮大小">
      <l-button type="info" size="large">大号</l-button>
      <l-button type="info">默认</l-button>
      <l-button type="info" size="small">小型</l-button>
      <l-button type="info" size="mini">迷你</l-button>
    </l-demo-block>

    <l-demo-block title="禁用按钮">
      <l-button type="default" disabled>默认按钮</l-button>
      <l-button type="primary" disabled>主要按钮</l-button>
      <l-button type="info" disabled>信息按钮</l-button>
      <l-button type="danger" disabled>危险按钮</l-button>
      <l-button type="danger" disabled>危险按钮</l-button>
      <l-button type="warning" plain disabled>警告按钮</l-button>
    </l-demo-block>

    <l-demo-block title="自定义颜色">
      <l-button color="#0e9aa7">自定义颜色</l-button>
      <l-button plain color="#0e9aa7">自定义颜色</l-button>
      <l-button round color="#ff9595">自定义颜色</l-button>
      <l-button color="linear-gradient(-225deg, #ffc4a3 0%, #ff9a76 50%, #f96d80 100%)">线性渐变</l-button>
      <l-button color="radial-gradient(#ffc4a3, #ff9a76,#f96d80)">径向渐变</l-button>
    </l-demo-block>

    <l-demo-block title="图标按钮">
      <l-button type="info" icon="add">添加</l-button>
      <l-button color="red" icon="delete">删除</l-button>
      <l-button color="#666" plain icon="add"></l-button>
      <l-button color="#666" plain icon="reduce"></l-button>
    </l-demo-block>

    <l-demo-block title="loading效果">
      <l-button type="info" loading icon="loading-A">加载中</l-button>
      <l-button type="info" plain loading icon="loading-B">加载中</l-button>
      <l-button type="info" round loading icon="loading-C">加载中</l-button>
      <l-button type="info" full loading icon="loading-D">加载中</l-button>
    </l-demo-block>

    <l-demo-block title="100%宽度">
      <l-button type="info" full>100%宽度</l-button>
      <l-button type="info" plain full>100%宽度</l-button>
    </l-demo-block>
  </div>
</template>

<script>
export default {
  name: 'button-demo',
  methods: {
    click() {
      console.log(123);
    }
  }
};
</script>
<style lang="less" scoped>
.button-demo {
  font-size: 14px;
  background: #f7f8fa;
  .title {
    line-height: 100px;
    color: #999;
  }
  .l-button {
    margin: 8px;
    &--full {
      margin: 20px 0;
    }
  }
}
</style>
