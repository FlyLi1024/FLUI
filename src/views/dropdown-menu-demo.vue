<template>
  <div>
    <h2 class="title">基础用法</h2>
    <div class="menu1">
      <kad-dropdown-menu name="1">
        <kad-dropdown-menu-item value="1" :options="options" title="全部选项" />
        <kad-dropdown-menu-item value="2" :options="options2" title="全部列表" />
        <kad-dropdown-menu-item value="a" @click="handleClick" title="自定义内容">
          <div class="menubox">自定义内容</div>
        </kad-dropdown-menu-item>
      </kad-dropdown-menu>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      options: [
        {
          title: '全部选项',
          value: '0',
        },
        {
          title: '选项二',
          value: '0',
        },
        {
          title: '选项三',
          value: '0',
        },
      ],
      options2: [
        {
          title: '全部列表',
          value: 'a',
        },
        {
          title: '列表二',
          value: 'b',
        },
        {
          title: '列表三',
          value: 'c',
        },
      ],
    };
  },
  methods: {
    handleClick(val) {
      console.log(val);
    },
  },
};
</script>
<style lang="less" scoped>
.menubox {
  height: 200px;
  line-height: 200px;
  text-align: center;
  background: #fff;
}
.title {
  margin: 0;
  color: rgba(69, 90, 100, 0.6);
  font-weight: normal;
  font-size: 28px;
  padding: 30px;
}
.menu1 .kad-dropdown-item {
  top: 276px !important;
}
.menu2 .kad-dropdown-item {
  top: 450px !important;
}
</style>
