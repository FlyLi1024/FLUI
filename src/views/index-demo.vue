<template>
  <div class="demo">
    <div class="preview-header">
      <span @click="ToHome">
        <l-icon icon="left" size="20px"></l-icon>
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
    }
  },
  methods: {
    ToHome() {
      this.$router.push({ path: '/' });
    }
  }
};
</script>
<style lang="less" scoped>
.h88 {
  height: 44px;
}
.preview-header {
  position: fixed;
  left: 0;
  top: 0;
  z-index: 10;
  width: 100%;
  height: 44px;
  line-height: 44px;
  background: #474a4f;
  color: #fff;
  text-align: center;
  font-size: 18px;
  span {
    position: absolute;
    left: 0;
    top: 0;
    display: block;
    height: 44px;
    width: 44px;
  }
}
</style>
