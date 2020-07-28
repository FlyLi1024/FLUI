<template>
  <div class="kad-swipecell">
    <div class="kad-swipecell__body" @touchstart="touchStart" @touchmove="touchMove" @touchend="touchEnd" :style="deleteSlider">
      <kad-cell :title="title" :label="label" :icon="icon" :size="size" :showIcon="showIcon" @IconClick="edit" />
    </div>
    <div class="remove active" ref="remove" @click="remove">删除</div>
  </div>
</template>
<script>
export default {
  name: 'KadSwipeCell',
  props: {
    propE: {
      type: Object,
      default: function () {},
    },
    // 左侧内容,不输入内容不显示
    title: {
      type: String,
      default: '',
    },
    // 描述,不输入内容不显示
    label: {
      type: String,
      default: '',
    },
    // 显示右侧icon
    showIcon: {
      type: Boolean,
      default: true,
    },
    // 右侧icon类型
    icon: {
      type: String,
      default: 'edit',
    },
    // 右侧icon大小
    size: {
      type: String,
      default: '40px',
    },
  },
  data() {
    return {
      startX: 0, // 触摸位置
      endX: 0, // 结束位置
      moveX: 0, // 滑动时的位置
      disX: 0, // 移动距离
      deleteSlider: '', // 滑动时的效果,使用v-bind:style="deleteSlider"
      isIcon: true,
    };
  },

  methods: {
    remove(v) {
      this.$emit('remove', this.val);
      this.deleteSlider = 'transform:translateX(0px)';
      this.isIcon = true;
    },
    edit() {
      this.$emit('edit');
    },
    touchStart(ev) {
      ev = ev || event;
      if (ev.touches.length === 1) {
        // 记录开始位置
        this.startX = ev.touches[0].clientX;
      }
    },

    touchMove(ev) {
      ev = ev || event;
      // 获取删除按钮的宽度，此宽度为滑块左滑的最大距离
      let wd = this.$refs.remove.offsetWidth;
      if (ev.touches.length === 1) {
        // 滑动时距离浏览器左侧实时距离
        this.moveX = ev.touches[0].clientX;
        // 起始位置减去 实时的滑动的距离，得到手指实时偏移距离
        this.disX = this.startX - this.moveX;
        // 如果是向右滑动或者不滑动，不改变滑块的位置
        if (this.disX < 0 || this.disX === 0) {
          this.deleteSlider = 'transform:translateX(0px)';
          // 大于0，表示左滑了，此时滑块开始滑动
        } else if (this.disX > 0) {
          // 具体滑动距离我取的是 手指偏移距离*5。
          this.deleteSlider = 'transform:translateX(-' + this.disX * 5 + 'px)';
          // 最大也只能等于删除按钮宽度
          if (this.disX * 5 >= wd) {
            this.deleteSlider = 'transform:translateX(-' + wd + 'px)';
          }
        }
      }
    },
    touchEnd(ev) {
      ev = ev || event;
      let wd = this.$refs.remove.offsetWidth;
      if (ev.changedTouches.length === 1) {
        let endX = ev.changedTouches[0].clientX;

        this.disX = this.startX - endX;
        // 如果距离小于删除按钮一半,强行回到起点

        if (this.disX * 5 < wd / 2) {
          this.deleteSlider = 'transform:translateX(0px)';
          this.isIcon = true;
        } else {
          // 大于一半 滑动到最大值
          this.deleteSlider = 'transform:translateX(-' + wd + 'px)';
          this.isIcon = false;
        }
      }
    },
  },
};
</script>
