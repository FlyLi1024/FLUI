<template>
  <div class="l-keyboard" v-if="visible">
    <div class="l-keyboard__header">
      <div class="l-keyboard__close" @click="$emit('update:visible', false)">确认</div>
    </div>
    <div class="l-keyboard__body" @click.stop="handleClick">
      <div class="keyboard-row">
        <div class="keyboard-cell" data-num="1">1</div>
        <div class="keyboard-cell" data-num="2">2</div>
        <div class="keyboard-cell" data-num="3">3</div>
      </div>
      <div class="keyboard-row">
        <div class="keyboard-cell" data-num="4">4</div>
        <div class="keyboard-cell" data-num="5">5</div>
        <div class="keyboard-cell" data-num="6">6</div>
      </div>
      <div class="keyboard-row">
        <div class="keyboard-cell" data-num="7">7</div>
        <div class="keyboard-cell" data-num="8">8</div>
        <div class="keyboard-cell" data-num="9">9</div>
      </div>
      <div class="keyboard-row">
        <div class="keyboard-cell" data-num=".">.</div>
        <div class="keyboard-cell" data-num="0">0</div>
        <div class="keyboard-cell" data-num="D">删除</div>
      </div>
    </div>
  </div>
</template>
<script>
import Popup from '../popup/popup';
export default {
  name: 'lKeyboard',
  data() {
    return {};
  },
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    number: {
      type: [Number, String],
      default: ''
    }
  },
  components: {
    Popup
  },
  computed: {},
  methods: {
    handleClick(evt) {
      console.log(evt.target.dataset.num);
      // this.$emit('click', evt);
    }
  }
};
</script>
