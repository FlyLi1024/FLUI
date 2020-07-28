<template>
  <div class="kad-tabbar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'kadTabbar',
  props: {
    //   基本颜色
    plain_color: {
      type: String,
      default: '#5C5C5C'
    },
    // 触发颜色
    active_color: {
      type: String,
      default: '#3392F4'
    }
  },
  methods: {
    setActive(value) {
      this.$children.map((item) => {
        if (item.value === value) {
          item.isActive = true;
        } else {
          item.isActive = false;
        }
      });
    }
  },
  mounted() {
    this.$children[0].isActive = true;
  }
};
</script>
