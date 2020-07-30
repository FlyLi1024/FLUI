<template>
  <div class="card-demo">
    <kad-demo-block title="主题四" full>
      <kad-card v-for="(item, index) in 2" :key="index" theme="4" thumb="http://image.360kad.com/group2/M00/85/06/CgAgFVtae82ATXOUAAHhVCKnkEY492.jpg_180x180.jpg" title="江中 健胃消食片 0.8g*8片*4板" factory="厂家：江西药都樟树制药有限公司江西药都樟树制药有限公司" label-pic="https://res.360kad.com/theme/mobile/img/iconimg/list/producticon_6.png" @click="ToDetail">
        <template slot="price">
          <span class="rmb">&yen;</span>
          <span>43.</span>
          <span class="rmb">6</span>
          <span class="qi">起</span>
          <span class="promotion">多买优惠</span>
        </template>
        <template slot="mark">
          <span>手机专享</span>
          <span>疗程优惠</span>
        </template>
        <!-- <template slot="stock">
          <span>商品无货</span>
        </template> -->
        <template slot="btn">
          <div class="icon kefu">
            <l-icon icon="wechat" size="32px"></l-icon>
          </div>
          <div class="icon cart">
            <l-icon icon="cart-add" size="32px"></l-icon>
          </div>
        </template>
      </kad-card>
    </kad-demo-block>

    <kad-demo-block title="主题五" full>
      <kad-card v-for="(item, index) in 2" :key="index" theme="5" thumb="http://image.360kad.com/group2/M00/85/06/CgAgFVtae82ATXOUAAHhVCKnkEY492.jpg_180x180.jpg" title="白云山中一 障眼明片（薄膜衣片）0.42g*50片" factory="厂家：江西药都樟树制药有限公司江西药都樟树制药有限公司" label-pic="https://res.360kad.com/theme/mobile/img/iconimg/list/producticon_6.png" @click="ToDetail">
        <template slot="price">
          <span class="rmb">&yen;</span>
          <span>43.</span>
          <span class="rmb">00</span>
          <span class="qi">起</span>
          <span class="promotion">多买优惠</span>
        </template>
        <!-- <template slot="mark">
          <span>手机专享</span>
          <span>疗程优惠</span>
        </template> -->
        <template slot="stock">
          <span>商品无货</span>
        </template>
        <template slot="btn">
          <div class="icon kefu">
            <l-icon icon="wechat" size="32px"></l-icon>
          </div>
          <div class="icon cart">
            <l-icon icon="cart-add" size="32px"></l-icon>
          </div>
        </template>
      </kad-card>
    </kad-demo-block>

    <kad-demo-block title="主题一" full>
      <kad-card v-for="(item, index) in 2" :key="index" theme="1" thumb="http://image.360kad.com/group2/M00/85/06/CgAgFVtae82ATXOUAAHhVCKnkEY492.jpg_180x180.jpg" title="江中 健胃消食片 0.8g*8片*4板" price="43.00起" origin-price="20.00" @click="ToDetail"></kad-card>
    </kad-demo-block>
    <kad-demo-block title="主题二" full>
      <kad-card v-for="(item, index) in 3" :key="index" theme="2" thumb="http://image.360kad.com/group2/M00/85/06/CgAgFVtae82ATXOUAAHhVCKnkEY492.jpg_180x180.jpg" title="白云山中一 障眼明片白云山中一 障眼明片白云山中一 障眼明片（薄膜衣片）0.42g*50片" factory="厂家：江西药都樟树制药有限公司江西药都樟树制药有限公司" price="43.00" @click="ToDetail">
        <template slot="btn">
          <div class="icon cart" @click="btnEvent">
            <l-icon icon="add" size="34px"></l-icon>
          </div>
        </template>
      </kad-card>
    </kad-demo-block>
    <kad-demo-block title="主题三" full>
      <kad-card v-for="(item, index) in 3" :key="index" theme="3" thumb="http://image.360kad.com/group2/M00/85/06/CgAgFVtae82ATXOUAAHhVCKnkEY492.jpg_180x180.jpg" title="白云山中一 障眼明片（薄膜衣片）0.42g*50片" price="43.00" num="6" @click="ToDetail"></kad-card>
    </kad-demo-block>
  </div>
</template>
<script>
export default {
  methods: {
    ToDetail() {
      this.$ktoast('点击进入商品详情');
    },

    btnEvent() {
      this.$loadingStart({
        content: '正在加入购物车',
        anim: 'kad-scale'
      });
      setTimeout(() => {
        this.$loadingEnd();
        this.$ktoast('加入购物车成功');
      }, 3000);
    }
  }
};
</script>

<style lang="less" scoped>
.card-demo {
  position: absolute;
  left: 0;
  top: 88px;
  right: 0;
  bottom: 0;
  background: #efefef;
  overflow: auto;
  .kad-card-theme1 {
    margin-left: 20px;
    margin-bottom: 20px;
  }
  .kad-card-theme4 {
    margin-left: 20px;
    margin-bottom: 20px;
  }
}
</style>
