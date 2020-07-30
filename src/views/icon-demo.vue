<template>
  <div class="box button-demo">
    <kad-demo-block title="自定义大小" full>
      <div class="row line">
        <div class="col">
          <l-icon icon="home" size="40px"></l-icon>
          <div class="icon-name">home</div>
        </div>
        <div class="col">
          <l-icon icon="people" size="40px"></l-icon>
          <div class="icon-name">people</div>
        </div>
        <div class="col">
          <l-icon icon="kefu" size="40px"></l-icon>
          <div class="icon-name">kefu</div>
        </div>
        <div class="col">
          <l-icon icon="kefu-outline" size="40px"></l-icon>
          <div class="icon-name">kefu-outline</div>
        </div>
      </div>
    </kad-demo-block>
    <kad-demo-block title="自定义颜色" full>
      <div class="row line">
        <div class="col">
          <l-icon icon="home" color="#f6975f" size="60px"></l-icon>
          <div class="icon-name">home</div>
        </div>
        <div class="col">
          <l-icon icon="people" color="#07c160" size="60px"></l-icon>
          <div class="icon-name">people</div>
        </div>
        <div class="col">
          <l-icon icon="kefu" color="#1989fa" size="60px"></l-icon>
          <div class="icon-name">kefu</div>
        </div>
        <div class="col">
          <l-icon icon="kefu-outline" color="#f44" size="60px"></l-icon>
          <div class="icon-name">kefu-outline</div>
        </div>
      </div>
    </kad-demo-block>
    <kad-demo-block title="旋转动画" full>
      <div class="row line">
        <div class="col">
          <l-icon icon="loading-A" size="60px" spin></l-icon>
          <div class="icon-name">loading-A</div>
        </div>
        <div class="col">
          <l-icon icon="loading-B" size="60px" spin></l-icon>
          <div class="icon-name">loading-B</div>
        </div>
        <div class="col">
          <l-icon icon="loading-C" size="60px" spin></l-icon>
          <div class="icon-name">loading-C</div>
        </div>
        <div class="col">
          <l-icon icon="loading-D" size="60px" spin></l-icon>
          <div class="icon-name">loading-D</div>
        </div>
      </div>
    </kad-demo-block>
    <kad-demo-block title="所有ICON" full>
      <div class="row all">
        <div class="col" v-for="(item, index) in IconList" :key="index">
          <l-icon :icon="item" size="60px"></l-icon>
          <div class="icon-name">{{ item }}</div>
        </div>
      </div>
    </kad-demo-block>
  </div>
</template>

<script>
export default {
  data() {
    return {
      IconList: ['kefu-outline', 'label-rt', 'label-rb', 'label-lb', 'label-lt', 'submit-success', 'clock', 'phone', 'spike', 'range-lr', 'range-tb', 'arrow-down', 'arrow-up', 'arrow-left', 'arrow-right', 'category-point', 'kefu-point', 'filter-point', 'search', 'sms', 'login', 'people', 'kefu', 'category', 'shop', 'inventory', 'location', 'dot', 'required', 'yes', 'pug', 'scanning', 'filter', 'delete', 'refresh', 'edit', 'share', 'friends-space', 'toutiao', 'dingding', 'qq', 'alipay', 'weibo', 'wechat', 'wechat-point', 'qq-space', 'favorites-point', 'favorite', 'notice', 'notice-point', 'camera-point', 'camera', 'image', 'transport-point', 'transport', 'receipt', 'locked-point', 'unlock', 'locked', 'loading-D', 'loading-C', 'loading-B', 'loading-A', 'sort', 'right-point', 'left-point', 'down-point', 'up-point', 'praise', 'praise-point', 'on', 'off', 'more-vertical', 'more', 'close-outline', 'close-point', 'close', 'radio-checked', 'radio-point-checked', 'radio', 'checkbox', 'checkbox-checked', 'heart', 'heart-point', 'cart-add', 'cart', 'play', 'pause', 'left', 'down', 'right', 'up', 'reduce-point', 'add-point', 'reduce', 'add', 'wrong', 'success', 'info', 'help']
    };
  }
};
</script>
<style lang="less" scoped>
.box {
  padding: 0 20px 40px;
  .row {
    width: 100%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;

    .col {
      flex: 1;
      text-align: center;
      min-height: 50px;
      padding: 60px 0;
      border: 1px solid #d6d3d3;
      border-right: 0;
      border-top: 0;
      color: #555;
      border-radius: 0;
      border-top: 1px solid #d6d3d3;
      &:last-of-type {
        border-right: 1px solid #d6d3d3;
      }
    }
    .icon-name {
      font-size: 26px;
      padding-top: 60px;
    }
    &.single {
      .col {
        &:nth-of-type(3) {
          border-top: 1px solid #d6d3d3;
        }
        &:nth-of-type(4n) {
          border-top: 1px solid #d6d3d3;
        }
      }
    }
    &.all {
      .col {
        flex: auto;
        width: 30%;
        &:nth-of-type(n + 4) {
          border-top: none;
        }
        &:nth-of-type(3n) {
          border-right: 1px solid #d6d3d3;
        }
      }
    }
  }
}
</style>
