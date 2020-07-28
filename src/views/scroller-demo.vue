<template>
  <div class="scroller-demo">
    <kad-demo-block title="当前数据">
      <p>当前位置：x：{{ x }}，y：{{ y }}</p>
      <p>是否滚动结束：{{ isEnd }}</p>
    </kad-demo-block>
    <kad-demo-block title="横向滚动">
      <kad-scroller :scrollX="true" :scrollY="false" @scroll="scroll" @scrollEnd="scrollEnd">
        <div class="slide-item horizontal" v-for="(item, index) in 20" :key="index">
          {{ index + 1 }}
        </div>
      </kad-scroller>
    </kad-demo-block>
    <kad-demo-block title="纵向滚动">
      <kad-scroller style="height: 250px;" @scroll="scroll" @scrollEnd="scrollEnd" :bounce="false">
        <div class="slide-item" v-for="(item, index) in 20" :key="index">
          {{ index + 1 }}
        </div>
      </kad-scroller>
    </kad-demo-block>
  </div>
</template>

<script>
export default {
  data() {
    return {
      x: '0',
      y: '0',
      isEnd: false,
    };
  },
  methods: {
    scroll(pos) {
      this.x = pos.x;
      this.y = pos.y;
      this.isEnd = false;
    },
    scrollEnd(pos) {
      this.x = pos.x;
      this.y = pos.y;
      this.isEnd = true;
    },
  },
};
</script>

<style lang="less" scoped>
.slide-item {
  width: 100%;
  height: 88px;
  line-height: 88px;
  text-align: center;
  color: #fff;
  font-size: 32px;
  &:nth-of-type(2n) {
    background: #ddd;
  }
  &:nth-of-type(2n + 1) {
    background: #aaa;
  }
  &.horizontal {
    display: inline-block;
    width: auto;
    padding: 0 50px;
    white-space: nowrap;
  }
}
</style>
