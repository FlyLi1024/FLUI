<template>
  <div class="l-popup-demo">
    <l-demo-block title="弹出位置">
      <l-button type="info" @click="visible0 = true">中心弹出</l-button>
      <l-button type="info" @click="visible1 = true">顶部弹出</l-button>
      <l-button type="info" @click="visible2 = true">右侧弹出</l-button>
      <l-button type="info" @click="visible3 = true">底部弹出</l-button>
      <l-button type="info" @click="visible4 = true">左侧弹出</l-button>
    </l-demo-block>
    <l-demo-block title="自定义宽高">
      <l-button type="info" @click="visible5 = true">中心弹出</l-button>
      <l-button type="info" @click="visible6 = true">底部弹出</l-button>
      <l-button type="info" @click="visible7 = true">左侧弹出</l-button>
    </l-demo-block>
    <l-demo-block title="自定义动画">
      <l-button type="info" @click="visible8 = true">l-fold</l-button>
      <l-button type="info" @click="visible9 = true">l-scale</l-button>
      <l-button type="info" @click="visible10 = true">l-spin</l-button>
      <l-button type="info" @click="visible11 = true">l-flipX</l-button>
      <l-button type="info" @click="visible12 = true">l-pop</l-button>
      <l-button type="info" @click="visible13 = true">l-fade</l-button>
    </l-demo-block>
    <l-popup :visible.sync="visible0" position="center">
      <div class="popup-demo-item" v-for="(item, index) in 3" :key="index">
        内容
      </div>
    </l-popup>
    <l-popup :visible.sync="visible1" position="top">
      <div class="popup-demo-item" v-for="(item, index) in 3" :key="index">
        内容
      </div>
    </l-popup>
    <l-popup :visible.sync="visible2" position="right">
      <div class="popup-demo-item" v-for="(item, index) in 3" :key="index">
        内容
      </div>
    </l-popup>
    <l-popup :visible.sync="visible3" position="bottom">
      <div class="popup-demo-item" v-for="(item, index) in 3" :key="index">
        内容
      </div>
    </l-popup>
    <l-popup :visible.sync="visible4" position="left">
      <div class="popup-demo-item" v-for="(item, index) in 3" :key="index">
        内容
      </div>
    </l-popup>
    <l-popup :visible.sync="visible5" :scroll="true" position="center" :styles="{ width: '300px', height: '400px' }">
      <div class="popup-demo-item" v-for="(item, index) in 20" :key="index">
        内容
      </div>
    </l-popup>
    <l-popup :visible.sync="visible6" :scroll="true" position="bottom" :styles="{ height: '350px' }">
      <div class="popup-demo-item" v-for="(item, index) in 20" :key="index">
        内容
      </div>
    </l-popup>
    <l-popup :visible.sync="visible7" :scroll="true" position="left" :styles="{ width: '250px' }">
      <div class="popup-demo-item" v-for="(item, index) in 20" :key="index">
        内容
      </div>
    </l-popup>
    <l-popup :visible.sync="visible8" transition="l-fold">
      <div class="popup-demo-item" v-for="(item, index) in 3" :key="index">
        内容
      </div>
    </l-popup>
    <l-popup :visible.sync="visible9" transition="l-scale">
      <div class="popup-demo-item" v-for="(item, index) in 3" :key="index">
        内容
      </div>
    </l-popup>
    <l-popup :visible.sync="visible10" transition="l-spin">
      <div class="popup-demo-item" v-for="(item, index) in 3" :key="index">
        内容
      </div>
    </l-popup>
    <l-popup :visible.sync="visible11" transition="l-flipX">
      <div class="popup-demo-item" v-for="(item, index) in 3" :key="index">
        内容
      </div>
    </l-popup>
    <l-popup :visible.sync="visible12" transition="l-pop">
      <div class="popup-demo-item" v-for="(item, index) in 3" :key="index">
        内容
      </div>
    </l-popup>
    <l-popup :visible.sync="visible13" transition="l-fade">
      <div class="popup-demo-item" v-for="(item, index) in 3" :key="index">
        内容
      </div>
    </l-popup>
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
      visible13: false
    };
  }
};
</script>

<style lang="less" scoped>
.l-popup-demo {
  // position: fixed;
  // left: 0;
  // top: 0;
  // right: 0;
  // bottom: 0;
  // overflow: auto;
  .popup-demo-item {
    min-width: 150px;
    height: 50px;
    line-height: 50px;
    border-bottom: 1px solid #eee;
    font-size: 14px;
    color: #666;
    text-align: center;
  }
  .l-button {
    position: relative;
    margin-right: 20px;
    margin-top: 30px;
  }
}
</style>
