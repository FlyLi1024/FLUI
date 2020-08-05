<template>
  <div class="l-tab-pane" v-show="visible">
    <slot v-if="!isLoading"></slot>
    <div class="l-tab-pane__loading" v-if="isLoading">
      <l-loading :type="loading" color="#666"></l-loading>
    </div>
  </div>
</template>

<script>
export default {
  name: 'lTabPane',
  data() {
    return {
      visible: false
    };
  },
  props: {
    title: {
      type: [String, Number],
      required: true
    },
    loading: {
      type: String,
      default: 'rotate'
    },
    loadingColor: {
      type: String,
      default: '#666'
    }
  },
  computed: {
    aIndex() {
      return this.$parent.aIndex;
    },
    isLoading() {
      return this.$parent.loading;
    }
  },
  mounted() {
    this.$parent.getNavList();
  }
};
</script>
