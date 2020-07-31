<template>
  <div>
    <l-demo-block title="">
      <div style="background: #eee; padding: 20px 0; text-align: center;">当前选中：{{ value }}</div>
    </l-demo-block>
    <l-demo-block title="组使用(默认换行)">
      <l-radio-group v-model="value">
        <l-radio label="苹果"></l-radio>
        <l-radio label="香蕉"></l-radio>
        <l-radio label="菠萝"></l-radio>
        <l-radio label="茄子"></l-radio>
      </l-radio-group>
    </l-demo-block>
    <l-demo-block title="组使用(横向排列)">
      <l-radio-group v-model="value" direction="horizontal">
        <l-radio label="苹果"></l-radio>
        <l-radio label="香蕉"></l-radio>
        <l-radio label="菠萝"></l-radio>
        <l-radio label="茄子"></l-radio>
      </l-radio-group>
    </l-demo-block>
    <l-demo-block title="修改颜色">
      <l-radio-group v-model="value" direction="horizontal">
        <l-radio label="苹果" v-model="value" color="#cf5e4d"></l-radio>
        <l-radio label="香蕉" v-model="value" color="#45b984"></l-radio>
        <l-radio label="菠萝" v-model="value" color="#00bcd4"></l-radio>
        <l-radio label="茄子" v-model="value" color="#d36eb0"></l-radio>
      </l-radio-group>
    </l-demo-block>
    <l-demo-block title="正方形">
      <l-radio-group v-model="value" direction="horizontal">
        <l-radio label="苹果" v-model="value" color="#cf5e4d" :round="false"></l-radio>
        <l-radio label="香蕉" v-model="value" color="#45b984" :round="false"></l-radio>
        <l-radio label="菠萝" v-model="value" color="#00bcd4" :round="false"></l-radio>
        <l-radio label="茄子" v-model="value" color="#d36eb0" :round="false"></l-radio>
      </l-radio-group>
    </l-demo-block>
    <l-demo-block title="组禁用">
      <l-radio-group v-model="value" direction="horizontal" disabled>
        <l-radio label="苹果" v-model="value" color="#cf5e4d" :round="false"></l-radio>
        <l-radio label="香蕉" v-model="value" color="#45b984" :round="false"></l-radio>
        <l-radio label="菠萝" v-model="value" color="#00bcd4" :round="false"></l-radio>
        <l-radio label="茄子" v-model="value" color="#d36eb0" :round="false"></l-radio>
      </l-radio-group>
    </l-demo-block>
    <l-demo-block title="修改大小">
      <l-radio-group v-model="value" direction="horizontal">
        <l-radio label="苹果" v-model="value" color="#cf5e4d" size="50"></l-radio>
        <l-radio label="香蕉" v-model="value" color="#45b984" size="50"></l-radio>
        <l-radio label="菠萝" v-model="value" color="#00bcd4" size="50"></l-radio>
        <l-radio label="茄子" v-model="value" color="#d36eb0" size="50"></l-radio>
      </l-radio-group>
    </l-demo-block>
    <l-demo-block title="单个&单个禁用">
      <l-radio label="苹果" v-model="value"></l-radio>
      <l-radio label="香蕉" v-model="value" disabled></l-radio>
      <l-radio label="菠萝" v-model="value"></l-radio>
    </l-demo-block>
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
/deep/ .l-radio {
  margin-bottom: 20px;
}
</style>
