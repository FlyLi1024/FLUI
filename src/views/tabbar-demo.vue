<template>
  <div>
    <l-demo-block title="基础用法">
      <l-tabbar>
        <l-tabbar-item value="1" @click="handleClick" />
        <l-tabbar-item value="2" icon="category" label="分类" @click="handleClick" />
        <l-tabbar-item value="3" icon="cart" label="购物车" @click="handleClick" />
        <l-tabbar-item value="4" icon="kefu" label="个人中心" @click="handleClick" />
      </l-tabbar>
    </l-demo-block>
  </div>
</template>

<script>
export default {
  methods: {
    handleClick(value) {}
  }
};
</script>
