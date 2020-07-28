<template>
  <div>
    <kad-demo-block title="基础用法" full>
      <kad-submit-bar style="position: relative;" :price="price" :leftLabel="leftLabel" :buttonText="buttonText" :quantity="quantity" :buttomLabel="buttomLabel"></kad-submit-bar>
    </kad-demo-block>
  </div>
</template>

<script>
export default {
  data() {
    return {
      price: 9.86,
      leftLabel: '总计',
      buttonText: '去结算',
      quantity: 10,
      buttomLabel: '已包含运费',
    };
  },
};
</script>
