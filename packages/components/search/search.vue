<template>
  <div class="search" @touchmove.prevent>
    <div class="search__header">
      <l-icon icon="left" class="left" color="#ffffff" @click="handleBlack" />
      <div class="search__inner" @touchmove.prevent>
        <l-icon icon="search" class="search" size="30" color="#C1C1C1" />
        <input type="text" :placeholder="placeholder" @input="handleInput" @keyup.13="handleKeyup" @focus="hanldeFocus" @blur="hanldeBlur" :value="value" />
        <l-icon icon="close" class="close" color="#E1E1E1" v-if="showClose" @click="hanldeClear" />
      </div>
      <div class="search__btn" @click="handleSearch(value)" v-if="!showSwitch">搜索</div>
      <div class="search__switch" @click="handleSwitch" v-if="showSwitch">
        <img :src="'//res.360kad.com/kad_design/m/images/search_switch' + switchValue + '.png'" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'KadSearch',
  props: {
    value: {
      type: String,
      default: ''
    },
    showSwitch: {
      type: Boolean,
      default: false
    },
    placeholder: {
      type: String,
      default: '三七粉限时秒杀包邮'
    }
  },
  data() {
    return {
      showClose: false,
      switchValue: 1
    };
  },
  watch: {
    value(newVal) {
      this.value !== '' ? (this.showClose = true) : (this.showClose = false);
    }
  },
  methods: {
    // 点击搜索按钮
    handleSearch(value, event) {
      this.$emit('search', value, event);
    },
    // 键盘回车事件
    handleKeyup(value, event) {
      this.$emit('keyup', value, event);
    },
    // 输入框内容变化时触发
    handleInput(event) {
      this.$emit('input', event.target.value);
    },
    // 输入框获得焦点时触发
    hanldeFocus(event) {
      this.$emit('focus', event);
    },
    // 输入框失去焦点时触发
    hanldeBlur(event) {
      this.$emit('blur', event);
    },
    // 点击清除按钮后触发
    hanldeClear(event) {
      this.$emit('clear', event);
    },
    // 切换列表类型
    handleSwitch() {
      if (this.switchValue === 1) {
        this.switchValue = 2;
      } else {
        this.switchValue = 1;
      }
      this.$emit('switch', this.switchValue);
    },
    handleBlack() {
      this.$emit('black', event);
    }
  }
};
</script>
