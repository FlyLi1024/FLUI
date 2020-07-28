<template>
  <div class="sidebar">
    <div class="sidebar-rows">
      <div class="sidebar-item" :class="{ actv: curTagName === 'introduction' }">
        <a @click="ToPage('')">介绍指南</a>
      </div>
      <div class="sidebar-item" :class="{ actv: curTagName === 'quickstart' }">
        <a @click="ToPage('quickstart')">快速上手</a>
      </div>
      <div class="sidebar-item" :class="{ actv: curTagName === 'changelog' }">
        <a @click="ToPage('changelog')">版本日记 (v{{ version }})</a>
      </div>
    </div>
    <div class="sidebar-rows" v-for="(items, indexs) in Components" :key="indexs">
      <div class="sidebar-title">{{ items.category }}</div>
      <div class="sidebar-item" :class="{ actv: curTagName === item.component }" v-for="(item, index) in items.list" :key="index">
        <a @click="ToPage(item.component)">{{ item.component }} {{ item.title }}</a>
      </div>
    </div>
  </div>
</template>

<script>
const { Components } = require('../../src/module');
const { version } = require('../../package.json');
export default {
  data() {
    return {
      Components,
      curTagName: '',
      version: version
    };
  },
  methods: {
    ToPage(path) {
      document.documentElement.scrollTop = 0;
      this.$router.push(`/${path}`);
    }
  },
  watch: {
    $route: {
      handler(newV, oldV) {
        this.curTagName = newV.name;
      },
      immediate: true
    }
  }
};
</script>

<style lang="less" scoped>
@import '../style/var.less';
.sidebar {
  position: fixed;
  z-index: 99;
  overflow: auto;
  bottom: 0;
  top: 0;
  width: 560px;
  padding: 180px 0 40px;
  background: #fff;
  border-right: 1px solid #eaecef;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  // user-select: none;
  &-rows {
    width: 100%;
  }
  &-title {
    color: rgba(0, 0, 0, 0.45);
    font-size: 28px;
    padding-left: 60px;
    box-sizing: border-box;
    line-height: 80px;
  }
  &-item {
    height: 84px;
    line-height: 84px;
    padding-left: 100px;
    box-sizing: border-box;
    font-size: 28px;
    color: rgba(0, 0, 0, 0.65);
    border-right: 4px solid transparent;
    a {
      display: block;
      text-decoration: none;
      color: rgba(0, 0, 0, 0.65);
    }
    &.actv {
      color: @sidebar-actv-color;
      background: @sidebar-actv-background-color;
      border-right-color: @sidebar-actv-border-color;
      a {
        color: inherit;
      }
    }
    &:hover {
      cursor: pointer;
      color: @sidebar-hover-color;
      background: @sidebar-hover-background-color;
      a {
        color: inherit;
      }
    }
  }
}
</style>
