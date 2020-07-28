<template>
  <div class="home">
    <header class="header">
      <div class="logo">
        <div>
          <h1 class="title">FLUI</h1>
        </div>
      </div>
      <p class="desc">基于 Kad Design 设计体系的 Vue UI 组件库</p>
    </header>
    <div v-for="(item, index) in Components" :key="index">
      <kad-collapse>
        <kad-collapse-item :title="item.category" style="box-shadow: 0 1px 5px #ebedf0; border-radius: 6px; margin-bottom: 20px;">
          <kad-cell v-for="(itemChild, indexChild) in item.list" :key="indexChild" icon="right" :title="itemChild.component + ' ' + itemChild.title" @click="ToDemo(itemChild.component, itemChild.title)" />
        </kad-collapse-item>
      </kad-collapse>
    </div>
  </div>
</template>

<script>
const { Components } = require('../module');
export default {
  data() {
    return {
      RouterPath: '/',
      RouterName: ''
    };
  },
  computed: {
    Components() {
      return Components;
    }
  },
  methods: {
    ToDemo(path, name) {
      this.$router.push({
        path: '/demo/' + path,
        query: { cname: name }
      });
    }
  }
};
</script>

<style lang="less" scoped>
.home {
  padding: 60px 40px;
  background-color: #fff;
  .kad-button {
    box-shadow: 0 2px 10px #ebedf0;
    border-radius: 6px;
    margin-bottom: 20px;
    text-align: left;
  }

  .header {
    margin-bottom: 60px;
  }
  .logo {
    display: flex;
    align-items: center;
    margin: 0 0 20px 0;
    img {
      width: 40px;
      display: block;
      margin-right: 16px;
    }
    .title {
      font-weight: 600;
      font-size: 44px;
      margin: 0;
      color: #2c3e50;
    }
  }
  .desc {
    color: #7d7e80;
    font-size: 26px;
    margin: 0;
  }
}

div /deep/ .kad-collapse-item__cell {
  padding: 40px;
}
</style>
