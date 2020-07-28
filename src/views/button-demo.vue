<template>
  <div class="button-demo">
    <kad-demo-block title="按钮类型">
      <kad-button>无边框按钮</kad-button>
      <kad-button type="default">默认按钮</kad-button>
      <kad-button type="primary">主要按钮</kad-button>
      <kad-button type="info">信息按钮</kad-button>
      <kad-button type="danger">危险按钮</kad-button>
      <kad-button type="warning">警告按钮</kad-button>
    </kad-demo-block>

    <kad-demo-block title="朴素按钮">
      <kad-button type="default" plain>默认按钮</kad-button>
      <kad-button type="primary" plain>主要按钮</kad-button>
      <kad-button type="info" plain>信息按钮</kad-button>
      <kad-button type="danger" plain>危险按钮</kad-button>
      <kad-button type="warning" plain>警告按钮</kad-button>
    </kad-demo-block>

    <kad-demo-block title="圆角按钮">
      <kad-button type="default" round>默认按钮</kad-button>
      <kad-button type="primary" round>主要按钮</kad-button>
      <kad-button type="info" round>信息按钮</kad-button>
      <kad-button type="danger" round>危险按钮</kad-button>
      <kad-button type="warning" round>警告按钮</kad-button>
    </kad-demo-block>

    <kad-demo-block title="按钮大小">
      <kad-button type="primary" size="large">大号按钮</kad-button>
      <kad-button type="primary">普通按钮</kad-button>
      <kad-button type="primary" size="small">小型按钮</kad-button>
      <kad-button type="primary" plain size="small">小型按钮</kad-button>
      <kad-button type="primary" round size="small">小型按钮</kad-button>
      <kad-button type="primary" round disabled size="small">小型按钮</kad-button>
      <kad-button type="primary" size="mini">迷你按钮</kad-button>
    </kad-demo-block>

    <kad-demo-block title="禁用按钮">
      <kad-button type="default" disabled>默认按钮</kad-button>
      <kad-button type="primary" disabled>主要按钮</kad-button>
      <kad-button type="info" disabled>信息按钮</kad-button>
      <kad-button type="danger" disabled>危险按钮</kad-button>
      <kad-button type="warning" disabled>警告按钮</kad-button>
    </kad-demo-block>

    <kad-demo-block title="自定义颜色按钮">
      <kad-button color="#FF719A">自定义颜色</kad-button>
      <kad-button plain color="#FF719A">自定义颜色</kad-button>
      <kad-button round color="#a714e4">自定义颜色</kad-button>
      <kad-button color="#c1c1c1">自定义颜色</kad-button>
      <kad-button color="linear-gradient(-225deg, #FFE29F 0%, #FFA99F 48%, #FF719A 100%)">线性渐变</kad-button>
      <kad-button round color="linear-gradient(-225deg, #FFE29F 0%, #FFA99F 48%, #FF719A 100%)">线性渐变</kad-button>
      <kad-button color="radial-gradient(#FFE29F, #FFA99F,#FF719A)">径向渐变</kad-button>
      <kad-button round color="radial-gradient(#FFE29F, #FFA99F,#FF719A)">径向渐变</kad-button>
    </kad-demo-block>

    <kad-demo-block title="带有图标按钮">
      <kad-button type="info" icon="share">分享</kad-button>
      <kad-button color="red" icon="delete">删除</kad-button>
      <kad-button color="#666" plain icon="add"></kad-button>
      <kad-button color="#666" plain icon="reduce"></kad-button>
    </kad-demo-block>

    <kad-demo-block title="loading效果按钮">
      <kad-button type="info" loading icon="loading-A">加载中</kad-button>
      <kad-button type="info" plain loading icon="loading-B">加载中</kad-button>
      <kad-button type="info" round loading icon="loading-C">加载中</kad-button>
      <kad-button type="info" full loading icon="loading-D">加载中</kad-button>
      <kad-button color="#FF719A" full loading icon="loading-D">正在加载信息，请稍后</kad-button>
    </kad-demo-block>

    <kad-demo-block title="100%宽度按钮">
      <kad-button type="info" full>默认按钮</kad-button>
      <kad-button type="info" round full>主要按钮</kad-button>
      <kad-button type="info" plain full>朴素按钮</kad-button>
      <kad-button type="info" plain round full>圆角按钮</kad-button>
      <kad-button type="info" round full disabled>禁止按钮</kad-button>
      <kad-button type="info" plain round full disabled>禁止按钮</kad-button>
      <kad-button type="primary" full size="small">小型按钮</kad-button>
      <kad-button type="primary" round full size="small">小型按钮</kad-button>
      <kad-button type="primary" plain round full size="small">小型按钮</kad-button>
    </kad-demo-block>
  </div>
</template>

<script>
export default {
  name: 'button-demo',
  methods: {
    click() {
      console.log(123);
    },
  },
};
</script>
<style lang="less" scoped>
.button-demo {
  font-size: 28px;
  .title {
    line-height: 100px;
    color: #999;
  }
  .kad-button {
    margin: 16px;
    &--full {
      margin: 20px 0;
    }
  }
}
</style>
