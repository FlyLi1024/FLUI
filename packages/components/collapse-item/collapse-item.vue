<template>
  <div class="l-collapse-item" ref="collapseItem">
    <l-cell :title="title" :label="label" :value="value" :showIcon="showIcon" :icon="icon" :showBorder="showBorder" :rotate="showWrapper" @click="toggle" />
    <div class="l-collapse-item__panel" :style="{ height: showWrapper ? offHeight : 0 }">
      <div ref="wrapper">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'lCollapseItem',
  data() {
    return {
      showWrapper: false,
      isAccordion: false
    };
  },
  props: {
    // 左侧内容
    title: {
      type: String,
      default: ''
    },
    // 描述
    label: {
      type: String,
      default: ''
    },
    // 右侧内容
    value: {
      type: String,
      default: ''
    },
    // 显示右侧icon
    showIcon: {
      type: Boolean,
      default: true
    },
    // 右侧icon类型
    icon: {
      type: String,
      default: 'down'
    },
    // 右侧icon大小
    size: {
      type: String,
      default: '13px'
    },
    // 是否显示下边框
    showBorder: {
      type: Boolean,
      default: true
    },
    name: {
      type: String,
      default: ''
    },
    accordion: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    offHeight() {
      return this.$refs.wrapper.offsetHeight + 'px';
    }
  },
  methods: {
    setAccordion() {
      this.isAccordion = true;
    },
    // 切换选项
    toggle(flag) {
      if (!this.isAccordion) {
        this.showWrapper = !this.showWrapper;
      } else {
        this.$parent.$children.map((item) => {
          if (item.name === this.name) {
            item.showWrapper = !item.showWrapper;
          } else {
            item.showWrapper = false;
          }
        });
      }
    }
  }
};
</script>
