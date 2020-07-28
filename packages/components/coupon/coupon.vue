<template>
  <div class="kad-coupon" :class="theme === '1' ? 'kad-coupon-theme1' : theme === '2' ? 'kad-coupon-theme2' : ''">
    <div class="kad-coupon-left" :class="Tips === '快过期' || Tips == null ? '' : 'bg_grey'">
      <p class="price1">
        <span>￥</span>
        {{ DisAmtInt }}
        <span>.{{ DisAmtFloat }}</span>
      </p>
      <p class="price2">满{{ LimitAmt }}元可用</p>
    </div>
    <div class="kad-coupon-right">
      <div class="title" :class="Tips === '快过期' || Tips == null ? '' : 'fs_grey'">{{ Desc }}</div>
      <div class="message">{{ TermValidity }}</div>
      <div class="btn" v-if="theme === '1' && status === 0" @click="getCoupon">立即领取</div>
      <div class="btn received" v-if="theme === '1' && status === 1" @click="getCoupon">已经领取</div>
      <div class="rule" v-if="theme === '2'" :class="Tips === '快过期' || Tips == null ? '' : 'fs_grey'" @click="ToggleRule">
        <span>使用规则</span>
        <kad-icon icon="down" size="22" :class="ShowRule ? 'rotate' : ''"></kad-icon>
      </div>

      <div class="tag" v-if="theme === '2' && Tips !== null" :class="Tips === '快过期' ? '' : 'tag_grey'">
        <span>{{ Tips }}</span>
      </div>
    </div>
    <div class="rule_content" v-if="theme === '2' && ShowRule">
      <p v-if="ruleText1 != ''">{{ ruleText1 }}</p>
      <p v-if="ruleText2 != ''">{{ ruleText2 }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'KadCoupon',
  data() {
    return {
      // ShowRule: false
    };
  },
  props: {
    theme: {
      type: String,
      default: '1',
    },
    DisAmtInt: [Number, String],
    DisAmtFloat: [Number, String],
    LimitAmt: [Number, String],
    Desc: [String],
    ShowRule: [Boolean],
    TermValidity: [String],
    status: [Number],
    Tips: [String, null],
    ruleText1: [String],
    ruleText2: [String],
    // ToggleRule: Function
  },
  methods: {
    ToggleRule() {
      this.$emit('toggle');
    },
    getCoupon() {
      this.$emit('click');
    },
  },
};
</script>
