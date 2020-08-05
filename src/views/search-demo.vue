<template>
  <div class="l-search-demo">
    <l-demo-block title="默认" full>
      <l-search v-model="value"></l-search>
    </l-demo-block>
    <l-demo-block title="没有搜索图标" full>
      <l-search v-model="value" :hasSearchIcon="false"></l-search>
    </l-demo-block>
    <l-demo-block title="没有右侧搜索按钮" full>
      <l-search v-model="value" :hasSearchButton="false"></l-search>
    </l-demo-block>
    <l-demo-block title="没有搜索图标" full>
      <l-search v-model="value" :hasSearchText="false"></l-search>
    </l-demo-block>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value: ''
    };
  },
  methods: {}
};
</script>
<style lang="less" scoped>
.l-search-demo {
  position: fixed;
  left: 0;
  bottom: 0;
  top: 44px;
  right: 0;
  background: #efefef;
}
</style>
