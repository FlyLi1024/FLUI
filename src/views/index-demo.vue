<template>
  <div class="demo">
    <div class="preview-header">
      <span @click="ToHome">
        <kad-icon icon="left" size="40px"></kad-icon>
      </span>
      {{ RouterName }}
    </div>
    <div class="h88"></div>
    <router-view />
  </div>
</template>

<script>
export default {
  computed: {
    RouterName() {
      return this.$route.query.cname;
    },
  },
  methods: {
    ToHome() {
      this.$router.push({ path: '/' });
    },
  },
};
</script>
<style lang="less" scoped>
.h88 {
  height: 88px;
}
.preview-header {
  position: fixed;
  left: 0;
  top: 0;
  z-index: 10;
  width: 100%;
  height: 88px;
  line-height: 88px;
  background: #474a4f;
  color: #fff;
  text-align: center;
  font-size: 36px;
  span {
    position: absolute;
    left: 0;
    top: 0;
    display: block;
    height: 88px;
    width: 88px;
  }
}
</style>
