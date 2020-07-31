<template>
  <transition name="l-fade">
    <div class="l-popup" v-show="visible" @click="handleClose" @touchmove.prevent>
      <transition :name="transitionStr">
        <div class="l-popup__panel" :class="['l-popup__' + position]" v-show="visible" :style="styles" @click.stop>
          <slot></slot>
        </div>
      </transition>
    </div>
  </transition>
</template>
<script>
export default {
  name: 'lPopup',
  props: {
    // 自定义样式
    styles: [Object, Array],
    // 是否显示弹框
    visible: {
      type: Boolean,
      default: false
    },
    // 弹出动画
    transition: String,
    // 显示位置
    position: {
      type: String,
      default: 'center'
    },
    // 遮罩层是否可以关闭
    maskClose: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    transitionStr() {
      return this.transition && this.transition !== '' ? this.transition : 'l-slide-' + this.position;
    }
  },
  methods: {
    handleClose() {
      this.maskClose && this.$emit('update:visible', false);
    }
  }
};
</script>
