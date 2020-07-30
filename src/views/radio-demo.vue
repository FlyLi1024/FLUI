<template>
  <div>
    <kad-demo-block title="">
      <div style="background: #eee; padding: 20px 0; text-align: center;">当前选中：{{ value }}</div>
    </kad-demo-block>
    <kad-demo-block title="组使用(默认换行)">
      <kad-radio-group v-model="value">
        <kad-radio label="苹果"></kad-radio>
        <kad-radio label="香蕉"></kad-radio>
        <kad-radio label="菠萝"></kad-radio>
        <kad-radio label="茄子"></kad-radio>
      </kad-radio-group>
    </kad-demo-block>
    <kad-demo-block title="组使用(横向排列)">
      <kad-radio-group v-model="value" direction="horizontal">
        <kad-radio label="苹果"></kad-radio>
        <kad-radio label="香蕉"></kad-radio>
        <kad-radio label="菠萝"></kad-radio>
        <kad-radio label="茄子"></kad-radio>
      </kad-radio-group>
    </kad-demo-block>
    <kad-demo-block title="修改颜色">
      <kad-radio-group v-model="value" direction="horizontal">
        <kad-radio label="苹果" v-model="value" color="#cf5e4d"></kad-radio>
        <kad-radio label="香蕉" v-model="value" color="#45b984"></kad-radio>
        <kad-radio label="菠萝" v-model="value" color="#00bcd4"></kad-radio>
        <kad-radio label="茄子" v-model="value" color="#d36eb0"></kad-radio>
      </kad-radio-group>
    </kad-demo-block>
    <kad-demo-block title="正方形">
      <kad-radio-group v-model="value" direction="horizontal">
        <kad-radio label="苹果" v-model="value" color="#cf5e4d" :round="false"></kad-radio>
        <kad-radio label="香蕉" v-model="value" color="#45b984" :round="false"></kad-radio>
        <kad-radio label="菠萝" v-model="value" color="#00bcd4" :round="false"></kad-radio>
        <kad-radio label="茄子" v-model="value" color="#d36eb0" :round="false"></kad-radio>
      </kad-radio-group>
    </kad-demo-block>
    <kad-demo-block title="组禁用">
      <kad-radio-group v-model="value" direction="horizontal" disabled>
        <kad-radio label="苹果" v-model="value" color="#cf5e4d" :round="false"></kad-radio>
        <kad-radio label="香蕉" v-model="value" color="#45b984" :round="false"></kad-radio>
        <kad-radio label="菠萝" v-model="value" color="#00bcd4" :round="false"></kad-radio>
        <kad-radio label="茄子" v-model="value" color="#d36eb0" :round="false"></kad-radio>
      </kad-radio-group>
    </kad-demo-block>
    <kad-demo-block title="修改大小">
      <kad-radio-group v-model="value" direction="horizontal">
        <kad-radio label="苹果" v-model="value" color="#cf5e4d" size="50"></kad-radio>
        <kad-radio label="香蕉" v-model="value" color="#45b984" size="50"></kad-radio>
        <kad-radio label="菠萝" v-model="value" color="#00bcd4" size="50"></kad-radio>
        <kad-radio label="茄子" v-model="value" color="#d36eb0" size="50"></kad-radio>
      </kad-radio-group>
    </kad-demo-block>
    <kad-demo-block title="单个&单个禁用">
      <kad-radio label="苹果" v-model="value"></kad-radio>
      <kad-radio label="香蕉" v-model="value" disabled></kad-radio>
      <kad-radio label="菠萝" v-model="value"></kad-radio>
    </kad-demo-block>
  </div>
</template>

<script>
export default {
  data() {
    return {
      checkbox: false,
      value: '苹果'
    };
  }
};
</script>
<style lang="less" scoped>
/deep/ .kad-radio {
  margin-bottom: 20px;
}
</style>
