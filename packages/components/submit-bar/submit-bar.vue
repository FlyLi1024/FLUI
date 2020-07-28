<template>
  <div class="kad-submit-bar">
    <div class="kad-submit-bar__bar">
      <div class="kad-submit-bar__left">全选</div>
      <div class="kad-submit-bar__right">
        <div class="kad-submit-bar__text">
          <div>
            <span class="kad-submit-bar__label">{{ leftLabel }}</span>
            <span class="kad-submit-bar__label">：</span>
            <span class="kad-submit-bar__currency">¥</span>
            <span class="kad-submit-bar__price">{{ price }}</span>
          </div>
          <div class="kad-submit-bar__postage">{{ buttomLabel }}</div>
        </div>
        <kad-button type="danger" class="kad-submit-bar__button">{{ buttonText }}({{ quantity }})</kad-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'KadSubmitBar',
  props: {
    price: {
      type: [Number, String],
      default: 0
    },
    leftLabel: {
      type: String,
      default: '总计'
    },
    buttonText: {
      type: String,
      default: '去结算'
    },
    quantity: {
      type: [Number, String],
      default: 0
    },
    buttomLabel: {
      type: String,
      default: '不含运费'
    }
  },
  methods: {}
};
</script>
