<template>
  <div class="home">
    <header class="header">
      <div class="logo">
        <div>
          <h1 class="title">FLUI</h1>
        </div>
      </div>
      <p class="desc">基于 Vue2.x 设计的前端 UI 组件库</p>
    </header>
    <div v-for="(item, index) in Components" :key="index">
      <l-collapse>
        <l-collapse-item :title="item.category" style="box-shadow: 0 1px 5px #ebedf0; border-radius: 6px; margin-bottom: 20px;">
          <l-cell v-for="(itemChild, indexChild) in item.list" :key="indexChild" icon="right" :title="itemChild.component + ' ' + itemChild.title" @click="ToDemo(itemChild.component, itemChild.title)" />
        </l-collapse-item>
      </l-collapse>
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
  padding: 30px 20px;
  background-color: #fff;
  .l-button {
    box-shadow: 0 2px 10px #ebedf0;
    border-radius: 3px;
    margin-bottom: 10px;
    text-align: left;
  }

  .header {
    margin-bottom: 30px;
  }
  .logo {
    display: flex;
    align-items: center;
    margin: 0 0 10px 0;
    .title {
      font-weight: 600;
      font-size: 22px;
      margin: 0;
      color: #2c3e50;
    }
  }
  .desc {
    color: #7d7e80;
    font-size: 14px;
    margin: 0;
  }
}

div /deep/ .l-collapse-item__cell {
  padding: 20px;
}
</style>
