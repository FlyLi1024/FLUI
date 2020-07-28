<template>
  <div class="kad-tabbar-item" :value="value" @click="onChange(value)">
    <div class="kad-tabbar-item__icon">
      <kad-icon :icon="icon" :size="size" :color="tabbarColor" />
      <div v-if="info && info !== ''" class="kad-tabbar-item__info">{{ info }}</div>
    </div>
    <span :style="{ color: tabbarColor }">{{ label }}</span>
  </div>
</template>

<script>
export default {
  name: 'kadTabbarItem',
  data() {
    return {
      isActive: false,
    };
  },
  computed: {
    tabbarColor() {
      if (!this.isActive) {
        return this.$parent.plain_color;
      } else {
        return this.$parent.active_color;
      }
    },
  },
  props: {
    //   必填,作为匹配的标识符
    value: {
      type: String,
      default: '1',
    },
    //   图标
    icon: {
      type: String,
      default: 'home',
    },
    // 大小
    size: {
      type: String,
      default: '40px',
    },
    // 文本
    label: {
      type: String,
      default: '首页',
    },
    info: {
      type: String,
      default: '',
    },
  },
  methods: {
    onChange() {
      this.$parent.setActive(this.value);
      this.$emit('click', this.value);
    },
  },
};
</script>
