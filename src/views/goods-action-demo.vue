<template>
  <div>
    <kad-demo-block title="基础用法" full>
      <kad-goods-action style="position: relative;">
        <kad-goods-action-icon text="首页" icon="home"></kad-goods-action-icon>
        <kad-goods-action-icon text="客服" icon="kefu"></kad-goods-action-icon>
        <kad-goods-action-icon text="购物车" icon="cart"></kad-goods-action-icon>
        <kad-goods-action-button text="加入购物车" color="#05A5F9"></kad-goods-action-button>
        <kad-goods-action-button text="立即购买" color="#FF423F"></kad-goods-action-button>
      </kad-goods-action>
    </kad-demo-block>

    <kad-demo-block title="没有客服" full>
      <kad-goods-action :inStock="1" style="position: relative;">
        <kad-goods-action-icon text="首页" icon="home"></kad-goods-action-icon>
        <kad-goods-action-icon text="购物车" icon="cart"></kad-goods-action-icon>
        <kad-goods-action-button text="到货通知" color="#FF7624"></kad-goods-action-button>
      </kad-goods-action>
    </kad-demo-block>
  </div>
</template>

<script>
export default {
  data() {
    return {
      goods: {
        left: [
          {
            icon: '',
            title: '',
            link: '',
            event: () => {},
          },
          {
            icon: '',
            title: '',
            link: '',
            event: () => {},
          },
          {
            icon: '',
            title: '',
            link: '',
            dots: false,
            event: () => {},
          },
        ],
        right: [{}],
      },
    };
  },
};
</script>
