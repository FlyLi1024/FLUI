<template>
  <div class="kad-notice-bar" :class="'kad-notice-bar' + theme">
    <div class="notice-pic">
      <img :src="FixedImg" />
    </div>
    <div class="notice-content">
      <transition-group class="notice-list" enter-active-class="animated fadeInUp" leave-active-class="animated fadeOutUp">
        <div class="item" v-for="(item, index) in messageList" :key="item + index" v-show="currentIndex === index" @click="hanleClick(index)">
          <div class="item-text">{{ item.text }}</div>
          <img class="item-img" :src="item.pic" />
        </div>
      </transition-group>
    </div>
  </div>
</template>

<script>
export default {
  name: 'kadNoticeBar',
  data() {
    return {
      timer: null,
      messageList: [],
      currentIndex: 0,
    };
  },
  props: {
    sendVal: {
      type: Array,
    },
    theme: {
      type: String,
      default: '',
    },
    FixedImg: {
      type: String,
      default: '',
    },
    src: {
      type: String,
      default: '',
    },
  },
  mounted() {
    this.autoPlay();
  },
  methods: {
    autoPlay() {
      this.messageList = this.sendVal;
      let lengths = this.messageList.length;
      if (this.currentIndex >= lengths) {
        this.currentIndex = 0;
        this.autoPlay();
      } else {
        setTimeout(() => {
          this.currentIndex++;
          this.autoPlay();
        }, 3000);
      }
    },
    hanleClick(index) {
      this.$emit('click', index);
    },
  },
};
</script>
