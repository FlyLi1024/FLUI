<template>
  <div class="sku-demo">
    <kad-demo-block title="疗程优惠">
      <kad-button type="info" @click="visible1 = true">疗程优惠</kad-button>
      <kad-sku :visible.sync="visible1">
        <template slot="sku-header">
          <div class="plan">
            <kad-image width="98px" height="98px" src="http://image.360kad.com/group1/M00/41/27/CgAgEFeaLPmAN-SUAAJ6gFKUeK073.jpeg"></kad-image>
          </div>
          <div class="selected-price">¥16-42</div>
          <div class="selected-text">请选择：疗程优惠</div>
        </template>
        <template slot="sku-list">
          <div class="sku-list">
            <div class="sku-list__title">疗程优惠</div>
            <div class="sku-list__item">
              <span>【1盒装】</span>
              <span class="disabled">【3盒优惠装】 立省6元</span>
              <span class="checked">【10盒优惠装】立省25元</span>
              <span>【20盒优惠装】立省50元</span>
            </div>
          </div>
        </template>
        <template slot="sku-num">
          <div class="sku-num">
            <div>购买数量</div>
            <div class="sku-num__opt">
              <div class="reduce end">
                <kad-icon icon="reduce"></kad-icon>
              </div>
              <div class="quantity">1</div>
              <div class="add">
                <kad-icon icon="add"></kad-icon>
              </div>
            </div>
          </div>
        </template>
        <template slot="sku-other">
          <div style="color: red; line-height: 50px;">此处新增需要自定义添加的布局</div>
        </template>
        <template slot="sku-actions">
          <kad-button color="#05A5F9" full @click="addCart">加入购物车</kad-button>
          <kad-button color="#FF423F" full>立即购买</kad-button>
        </template>
      </kad-sku>
    </kad-demo-block>
    <kad-demo-block title="隐形眼镜">
      <kad-button type="info" @click="visible2 = true">隐形眼镜</kad-button>
      <kad-sku :visible.sync="visible2">
        <template slot="sku-header">
          <div class="plan">
            <kad-image width="98px" height="98px" src="http://image.360kad.com/group1/M00/41/27/CgAgEFeaLPmAN-SUAAJ6gFKUeK073.jpeg"></kad-image>
          </div>
          <div class="selected-price">¥16-42</div>
          <div class="selected-text">请选择：颜色度数</div>
        </template>
        <template slot="sku-list">
          <div class="sku-list">
            <div class="sku-list__title">颜色</div>
            <div class="sku-list__item">
              <span>神秘黑</span>
              <span class="disabled">冷艳灰</span>
              <span class="checked">清纯蓝</span>
            </div>
          </div>
          <div class="sku-list">
            <div class="sku-list__title">度数</div>
            <div class="sku-list__item">
              <span class="checked">100</span>
              <span>150</span>
              <span class="disabled">200</span>
              <span>250</span>
              <span>300</span>
              <span>350</span>
              <span>400</span>
              <span>450</span>
              <span>500</span>
              <span>550</span>
              <span>600</span>
              <span>650</span>
              <span>700</span>
              <span>750</span>
              <span>800</span>
              <span>850</span>
              <span>900</span>
              <span>950</span>
              <span>1000</span>
            </div>
          </div>
        </template>
        <template slot="sku-num">
          <div class="sku-num">
            <div>购买数量</div>
            <div class="sku-num__opt">
              <div class="reduce end">
                <kad-icon icon="reduce"></kad-icon>
              </div>
              <div class="quantity">1</div>
              <div class="add">
                <kad-icon icon="add"></kad-icon>
              </div>
            </div>
          </div>
        </template>
        <template slot="sku-other">
          <div style="color: red; line-height: 50px;">此处新增需要自定义添加的布局</div>
        </template>
        <template slot="sku-actions">
          <kad-button color="#FF7624" full>到货通知</kad-button>
        </template>
      </kad-sku>
    </kad-demo-block>
  </div>
</template>

<script>
export default {
  data() {
    return {
      visible1: false,
      visible2: false,
    };
  },
  methods: {
    addCart() {
      this.$loadingStart({
        content: '正在加入购物车',
        anim: 'kad-scale',
      }),
        setTimeout(() => {
          this.$loadingEnd();
          this.$ktoast('加入购物车成功');
        }, 2000);
    },
  },
};
</script>
