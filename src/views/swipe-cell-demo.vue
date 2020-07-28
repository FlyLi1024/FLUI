<template>
  <div>
    <kad-demo-block title="基础用法">
      <kad-swipe-cell title="袁生   18628062938" label="广东省广州市天河区元岗街道广州市天河区 元岗路200 号" @edit="edit"></kad-swipe-cell>
    </kad-demo-block>

    <kad-demo-block title="高级用法">
      <kad-swipe-cell :title="item.name + '  ' + item.tel" :label="item.address" v-for="(item, index) in data" :key="index" @remove="remove(index)" @edit="edit"></kad-swipe-cell>
    </kad-demo-block>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: [
        {
          name: '苹果1',
          tel: '1311215457',
          address: '广东省广州市天河区元岗街道广州市天河区 元岗路200 号',
        },
        {
          name: '苹果2',
          tel: '1311215457',
          address: '广东省广州市天河区元岗街道广州市天河区 元岗路200 号广东省广州市天河区元岗街道广州市天河区 元岗路200 号',
        },
        {
          name: '苹果3',
          tel: '1311215457',
          address: '广东省广州市天河区元岗街道广州市天河区 元岗路200 号广东省广州市天河区元岗街道广州市天河区 元岗路200 号',
        },
        {
          name: '苹果4',
          tel: '1311215457',
          address: '广东省广州市天河区元岗街道广州市天河区 元岗路200 号广东省广州市天河区元岗街道广州市天河区 元岗路200 号',
        },
      ],
    };
  },
  methods: {
    remove(index) {
      this.data.splice(index, 1);
    },
    edit() {
      this.$ktoast('点击了编辑');
    },
  },
};
</script>

<style lang="less" scoped>
/deep/ .kad-doc-demo-block__content {
  padding: 0 !important;
}
</style>
