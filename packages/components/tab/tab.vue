<template>
  <div class="kad-tab">
    <div class="kad-tab-nav" :style="{ 'border-bottom': border ? border : '1px solid #F0F0F0' }">
      <div class="item" :class="{ actv: index === aIndex }" :style="[setBorder, { color: index === aIndex ? activeColor : '#131313', 'border-right': index === navList.length - 1 ? '0' : border }]" ref="item" v-for="(item, index) in navList" :key="index" @click="handleClick(item.title, index)">
        <span>{{ item.title }}</span>
      </div>
      <div class="line" :style="[lineStyle, { background: activeColor }]" v-show="navList.length > 0"></div>
    </div>
    <div class="kad-tab-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'KadTab',
  data() {
    return {
      navList: [],
      aIndex: 0,
      lineStyle: {
        width: 0,
        left: 0,
      },
    };
  },
  props: {
    value: {
      type: [String, Number],
      default: 0,
    },
    animated: {
      type: Boolean,
      default: false,
    },
    loading: {
      type: Boolean,
      default: false,
    },
    activeColor: {
      type: String,
      default: '#3F99FF',
    },
    border: {
      type: String,
      default: '',
    },
  },
  computed: {
    setBorder() {
      return { 'border-right': this.border ? this.border : '0', 'border-top': this.border ? this.border : '0' };
    },
  },
  mounted() {
    this.$nextTick(() => {
      const _index = this.$refs.item
        .map((item, index) => {
          return item.innerText;
        })
        .indexOf(this.value);
      this.aIndex = _index < 0 ? 0 : _index;
      this.setBarStyle(this.aIndex, true);
      window.addEventListener(
        'resize',
        () => {
          this.setBarStyle(this.aIndex, true);
        },
        false
      );
    });
  },
  beforeDestroy() {
    window.removeEventListener(
      'resize',
      () => {
        this.setBarStyle(this.aIndex, true);
      },
      false
    );
  },
  methods: {
    getNavList() {
      this.navList = this.$children;
    },
    handleClick(val, index) {
      this.aIndex = index;
      this.setBarStyle(index, false);
      this.$emit('input', val);
    },
    setBarStyle(index, isFirst) {
      if (!isFirst && this.animated) {
        this.lineStyle.transition = '0.2s linear'; // cubic-bezier(.51,1.65,.37,.66)
      }
      this.$children.map((item) => {
        item.visible = false;
      });
      this.$children[index].visible = true;
      this.lineStyle.width = this.$refs.item[index].clientWidth + 'px';
      this.lineStyle.left = this.$refs.item[index].offsetLeft + 'px';
    },
  },
};
</script>
