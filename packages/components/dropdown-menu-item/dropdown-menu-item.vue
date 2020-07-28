<template>
  <div class="kad-dropdown-menu-item">
    <div class="kad-dropdown-menu-item__content" @click="open">
      <span class="kad-dropdown-menu-item__title" ref="title" :style="{ color: showPopup ? active_color : '#000' }">
        {{ title }}
      </span>
      <kad-icon :icon="icon1" :size="size" color="#000" :class="showPopup ? 'kad-dropdown-menu-item__rotate' : ''"></kad-icon>
    </div>
    <transition name="kad-fade">
      <div class="kad-dropdown-item" v-if="showPopup" ref="dropdown">
        <div class="kad-dropdown-item__content" v-if="options && options.length > 0">
          <div class="kad-dropdown-item__option" v-for="(item, index) in options" :key="index" @click="selectClick(item.title, index)">
            <span :style="{ color: ActiveVal === index ? active_color : '#000' }">{{ item.title }}</span>
            <kad-icon :icon="icon2" :size="size" :color="active_color" v-if="ActiveVal === index"></kad-icon>
          </div>
        </div>
        <div class="kad-dropdown-item__custom" v-if="!options">
          <slot></slot>
        </div>
        <kad-overlay :show="overlay" :clickOverlay="clickOverlay" @click="closePopup" v-if="showPopup" />
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'kadDropdownMenuItem',
  data() {
    return {
      showPopup: false,
      ActiveVal: 0,
    };
  },
  props: {
    // 必填，不可重复
    value: [Number, String],
    // 选项数组
    options: Array,
    // 是否显示遮罩层
    overlay: {
      type: Boolean,
      default: true,
    },
    // 是否点击遮罩层关闭
    clickOverlay: {
      type: Boolean,
      default: true,
    },
    // 选项标题
    title: {
      type: String,
      default: '全部商品',
    },
    // 主选项icon
    icon1: {
      type: String,
      default: 'down',
    },
    // 子选项icon
    icon2: {
      type: String,
      default: 'checked-empty',
    },
    // icon大小
    size: {
      type: String,
      default: '30px',
    },
    // 触发类颜色
    active_color: {
      type: String,
      default: '#1989fa',
    },
  },
  methods: {
    // 菜单切换
    toggle(flag = !this.showPopup) {
      if (flag === this.showPopup) {
        return;
      }
      this.showPopup = flag;
    },
    // 菜单点击触发
    open(value) {
      this.$parent.toggleItem(this.value);
    },
    // 遮罩层点击触发
    closePopup() {
      this.showPopup = false;
    },
    // 选项点击触发
    selectClick(title, index) {
      this.showPopup = false;
      this.ActiveVal = index;
      this.$refs.title.innerText = title;
    },
  },
};
</script>
