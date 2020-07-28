<template>
  <transition name="kad-fade">
    <div class="kad-popup" v-show="visible" @click="handleClose" @touchmove.prevent>
      <transition :name="transitionStr">
        <div class="kad-popup__panel" :class="['kad-popup__' + position]" v-show="visible" :style="styles" @click.stop>
          <slot></slot>
        </div>
      </transition>
    </div>
  </transition>
</template>
<script>
export default {
  name: 'kadPopup',
  props: {
    // 自定义样式
    styles: [Object, Array],
    // 是否显示弹框
    visible: {
      type: Boolean,
      default: false,
    },
    // 弹出动画
    transition: String,
    // 显示位置
    position: {
      type: String,
      default: 'center',
    },
    // 遮罩层是否可以关闭
    maskClose: {
      type: Boolean,
      default: true,
    },
  },
  computed: {
    transitionStr() {
      return this.transition && this.transition !== '' ? this.transition : 'kad-slide-' + this.position;
    },
  },
  methods: {
    handleClose() {
      this.maskClose && this.$emit('update:visible', false);
    },
  },
};
</script>
