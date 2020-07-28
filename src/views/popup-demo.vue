<template>
  <div class="kad-popup-demo">
    <kad-demo-block title="弹出位置">
      <kad-button type="primary" @click="visible0 = true">中心弹出</kad-button>
      <kad-button type="primary" @click="visible1 = true">顶部弹出</kad-button>
      <kad-button type="primary" @click="visible2 = true">右侧弹出</kad-button>
      <kad-button type="primary" @click="visible3 = true">底部弹出</kad-button>
      <kad-button type="primary" @click="visible4 = true">左侧弹出</kad-button>
    </kad-demo-block>
    <kad-demo-block title="自定义宽高">
      <kad-button type="primary" @click="visible5 = true">中心弹出</kad-button>
      <kad-button type="primary" @click="visible6 = true">底部弹出</kad-button>
      <kad-button type="primary" @click="visible7 = true">左侧弹出</kad-button>
    </kad-demo-block>
    <kad-demo-block title="自定义动画">
      <kad-button type="primary" @click="visible8 = true">kad-fold</kad-button>
      <kad-button type="primary" @click="visible9 = true">kad-scale</kad-button>
      <kad-button type="primary" @click="visible10 = true">kad-spin</kad-button>
      <kad-button type="primary" @click="visible11 = true">kad-flipX</kad-button>
      <kad-button type="primary" @click="visible12 = true">kad-pop</kad-button>
      <kad-button type="primary" @click="visible13 = true">kad-fade</kad-button>
    </kad-demo-block>
    <kad-popup :visible.sync="visible0" position="center">
      <div class="popup-demo-item" v-for="(item, index) in 3" :key="index">
        内容
      </div>
    </kad-popup>
    <kad-popup :visible.sync="visible1" position="top">
      <div class="popup-demo-item" v-for="(item, index) in 3" :key="index">
        内容
      </div>
    </kad-popup>
    <kad-popup :visible.sync="visible2" position="right">
      <div class="popup-demo-item" v-for="(item, index) in 3" :key="index">
        内容
      </div>
    </kad-popup>
    <kad-popup :visible.sync="visible3" position="bottom">
      <div class="popup-demo-item" v-for="(item, index) in 3" :key="index">
        内容
      </div>
    </kad-popup>
    <kad-popup :visible.sync="visible4" position="left">
      <div class="popup-demo-item" v-for="(item, index) in 3" :key="index">
        内容
      </div>
    </kad-popup>
    <kad-popup :visible.sync="visible5" :scroll="true" position="center" :styles="{ width: '300px', height: '400px' }">
      <div class="popup-demo-item" v-for="(item, index) in 20" :key="index">
        内容
      </div>
    </kad-popup>
    <kad-popup :visible.sync="visible6" :scroll="true" position="bottom" :styles="{ height: '350px' }">
      <div class="popup-demo-item" v-for="(item, index) in 20" :key="index">
        内容
      </div>
    </kad-popup>
    <kad-popup :visible.sync="visible7" :scroll="true" position="left" :styles="{ width: '250px' }">
      <div class="popup-demo-item" v-for="(item, index) in 20" :key="index">
        内容
      </div>
    </kad-popup>
    <kad-popup :visible.sync="visible8" transition="kad-fold">
      <div class="popup-demo-item" v-for="(item, index) in 3" :key="index">
        内容
      </div>
    </kad-popup>
    <kad-popup :visible.sync="visible9" transition="kad-scale">
      <div class="popup-demo-item" v-for="(item, index) in 3" :key="index">
        内容
      </div>
    </kad-popup>
    <kad-popup :visible.sync="visible10" transition="kad-spin">
      <div class="popup-demo-item" v-for="(item, index) in 3" :key="index">
        内容
      </div>
    </kad-popup>
    <kad-popup :visible.sync="visible11" transition="kad-flipX">
      <div class="popup-demo-item" v-for="(item, index) in 3" :key="index">
        内容
      </div>
    </kad-popup>
    <kad-popup :visible.sync="visible12" transition="kad-pop">
      <div class="popup-demo-item" v-for="(item, index) in 3" :key="index">
        内容
      </div>
    </kad-popup>
    <kad-popup :visible.sync="visible13" transition="kad-fade">
      <div class="popup-demo-item" v-for="(item, index) in 3" :key="index">
        内容
      </div>
    </kad-popup>
  </div>
</template>

<script>
export default {
  data() {
    return {
      visible0: false,
      visible1: false,
      visible2: false,
      visible3: false,
      visible4: false,
      visible5: false,
      visible6: false,
      visible7: false,
      visible8: false,
      visible9: false,
      visible10: false,
      visible11: false,
      visible12: false,
      visible13: false,
    };
  },
};
</script>

<style lang="less" scoped>
.kad-popup-demo {
  // position: fixed;
  // left: 0;
  // top: 0;
  // right: 0;
  // bottom: 0;
  // overflow: auto;
  .popup-demo-item {
    min-width: 300px;
    height: 100px;
    line-height: 100px;
    border-bottom: 1px solid #eee;
    font-size: 30px;
    color: #666;
    text-align: center;
  }
  .kad-button {
    position: relative;
    margin-right: 20px;
    margin-top: 30px;
  }
}
</style>
