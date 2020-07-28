<template>
  <div class="dialog-demo">
    <kad-demo-block title="弹出框">
      <kad-button type="primary" @click="visible = true">弹出框</kad-button>
      <kad-dialog :visible.sync="visible" :title="titleText" :cancel-button="cancelButton" :mask-closable="maskClosable" :cancel-button-text="cancelButtonText" :confirm-button-text="confirmButtonText" :radius="radius" :transition="transition" @cancel="handleCancel" @confirm="handleConfirm">
        是否清除历史
      </kad-dialog>
    </kad-demo-block>
    <kad-demo-block title="选项">
      <div class="demo-row">
        <div class="left">显示标题</div>
        <div class="right"><kad-switch v-model="title"></kad-switch></div>
      </div>
      <div class="demo-row">
        <div class="left">显示取消按钮</div>
        <div class="right"><kad-switch v-model="cancelButton"></kad-switch></div>
      </div>
      <div class="demo-row">
        <div class="left">遮罩层可关闭</div>
        <div class="right"><kad-switch v-model="maskClosable"></kad-switch></div>
      </div>
      <div class="demo-row">
        <div class="left">取消按钮文字</div>
        <div class="right"><input type="text" v-model="cancelButtonText" /></div>
      </div>
      <div class="demo-row">
        <div class="left">确认按钮文字</div>
        <div class="right"><input type="text" v-model="confirmButtonText" /></div>
      </div>
      <div class="demo-row">
        <div class="left">圆角</div>
        <div class="right"><input type="text" v-model="radius" /></div>
      </div>
      <div class="demo-row">
        <div class="left">展示动画</div>
        <div class="right"><input type="text" v-model="transition" /></div>
      </div>
    </kad-demo-block>
  </div>
</template>
<script>
export default {
  data() {
    return {
      visible: false,
      title: false,
      cancelButton: true,
      maskClosable: true,
      cancelButtonText: '抗命',
      confirmButtonText: '遵旨',
      radius: '0',
      transition: 'kad-scale',
    };
  },
  computed: {
    titleText() {
      return this.title ? '这是标题' : '';
    },
  },
  methods: {
    handleCancel() {
      this.$ktoast(this.cancelButtonText);
      setTimeout(() => {
        this.$ktoast.close();
      }, 1000);
      this.visible = false;
    },
    handleConfirm() {
      this.$ktoast(this.confirmButtonText);
      setTimeout(() => {
        this.$ktoast.close();
      }, 1000);
      this.visible = false;
    },
  },
};
</script>
<style lang="less" scoped>
.demo-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid #ededed;
  padding: 16px;
  text-align: center;
  .left {
    display: block;
    flex: 1;
    text-align: left;
  }
  .right {
    display: flex;
    justify-content: flex-end;
    flex: 1;
    text-align: right;
  }
}
input {
  width: 300px;
  height: 60px;
  margin: 20px 0;
  border: 1px solid #d6d3d3;
  color: #666;
  text-align: center;
}
</style>
