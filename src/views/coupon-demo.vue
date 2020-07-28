<template>
  <div>
    <kad-demo-block title="主题一 ">
      <kad-coupon v-for="(item, index) in couponList1" :key="index" :DisAmtInt="item.DisAmtInt" :DisAmtFloat="item.DisAmtFloat" :LimitAmt="item.LimitAmt" :Desc="item.Desc" :TermValidity="item.TermValidity" :status="item.status" @click="getCoupon(index)" />
    </kad-demo-block>

    <kad-demo-block title="主题二">
      <kad-coupon v-for="(item, index) in couponList2" :key="index" theme="2" :DisAmtInt="item.DisAmtInt" :DisAmtFloat="item.DisAmtFloat" :LimitAmt="item.LimitAmt" :Desc="item.Desc" :TermValidity="item.TermValidity" :Tips="item.Tips" />
    </kad-demo-block>
  </div>
</template>

<script>
export default {
  data() {
    return {
      couponList1: [
        {
          DisAmtInt: '100',
          DisAmtFloat: '00',
          LimitAmt: '899',
          Desc: '仅可购买母婴用品部分商品',
          TermValidity: '有效期7天内使用',
          status: 0,
        },
        {
          DisAmtInt: '48',
          DisAmtFloat: '11',
          LimitAmt: '1000',
          Desc: '仅可购买母婴用品部分商品',
          TermValidity: '有效期4天内使用',
          status: 0,
        },
      ],
      couponList2: [
        {
          DisAmtInt: '100',
          DisAmtFloat: '00',
          LimitAmt: '899',
          Desc: '仅可购买母婴用品部分商品',
          TermValidity: '有效期7天内使用',
          Tips: null,
        },
        {
          DisAmtInt: '100',
          DisAmtFloat: '00',
          LimitAmt: '899',
          Desc: '仅可购买母婴用品部分商品',
          TermValidity: '有效期7天内使用',
          Tips: '快过期',
        },
        {
          DisAmtInt: '48',
          DisAmtFloat: '11',
          LimitAmt: '1000',
          Desc: '仅可购买母婴用品部分商品',
          TermValidity: '有效期4天内使用',
          Tips: '已使用',
        },
        {
          DisAmtInt: '48',
          DisAmtFloat: '11',
          LimitAmt: '1000',
          Desc: '仅可购买母婴用品部分商品',
          TermValidity: '有效期4天内使用',
          Tips: '已过期',
        },
      ],
    };
  },
  methods: {
    getCoupon(index) {
      this.couponList1[index].status = 1;
    },
  },
};
</script>
