<template>
  <div>
    <kad-search @input="handleInput" @search="handleSearch" @keyup="handleKeyup" @focus="hanldeFocus" @blur="hanldeBlur" @clear="hanldeClear" @switch="handleSwitch" @black="handleBlack" v-model="keyword" />

    <kad-search @input="handleInput" @search="handleSearch" @keyup="handleKeyup" @focus="hanldeFocus" @blur="hanldeBlur" @clear="hanldeClear2" @switch="handleSwitch" v-model="keyword2" showSwitch />
  </div>
</template>
<script>
export default {
  data() {
    return {
      keyword: '',
      keyword2: '',
    };
  },
  methods: {
    handleInput(value) {},
    handleSearch(value) {
      value !== '' ? this.$ktoast({ content: value }) : this.$ktoast({ content: '点击了搜索按钮' });
    },
    handleKeyup() {
      this.$ktoast({ content: '触发了回车事件' });
    },
    hanldeFocus() {
      // this.$ktoast({ content: '触发了获取焦点事件' });
    },
    hanldeBlur() {
      // this.$ktoast({ content: '触发了失去焦点事件' });
    },
    hanldeClear(event) {
      this.keyword = '';
      this.$ktoast({ content: '触发了删除事件' });
    },
    hanldeClear2(event) {
      this.keyword2 = '';
      this.$ktoast({ content: '触发了删除事件' });
    },
    handleSwitch(value) {},
    handleBlack() {},
  },
};
</script>
