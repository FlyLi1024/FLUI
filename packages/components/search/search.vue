<template>
  <div class="l-search">
    <div class="l-search__input">
      <i class="l-icon l-icon-search" v-if="hasSearchIcon && hasSearchText"></i>
      <input type="text" :placeholder="placeholder" :value="value" :class="{ noicon: !hasSearchIcon || !hasSearchText }" @input="$emit('input', $event.target.value)" />
      <i class="l-icon l-icon-close-outline" :class="{ show: value.length > 0 }" @click="clearValue"></i>
    </div>
    <div class="l-search__btn" v-if="hasSearchButton" @click="handleSubmit">
      <div v-if="hasSearchText">搜索</div>
      <i class="l-icon l-icon-search" v-else></i>
    </div>
  </div>
</template>

<script>
export default {
  name: 'lSearch',
  model: {
    prop: 'value',
    event: 'input'
  },
  props: {
    value: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: '请输入关键字'
    },
    hasSearchIcon: {
      type: Boolean,
      default: true
    },
    hasSearchButton: {
      type: Boolean,
      default: true
    },
    hasSearchText: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    clearValue() {
      this.$emit('input', '');
    },
    handleSubmit() {
      this.$ltoast(`关键字为：${this.value}`);
    }
  }
};
</script>
