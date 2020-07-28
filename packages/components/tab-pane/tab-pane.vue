<template>
  <div class="kad-tab-pane" v-show="visible">
    <slot v-if="!isLoading"></slot>
    <div class="kad-tab-pane__loading" v-if="isLoading">
      <kad-loading :type="loading" color="#666"></kad-loading>
    </div>
  </div>
</template>

<script>
export default {
  name: 'KadTabPane',
  data() {
    return {
      visible: false,
    };
  },
  props: {
    title: {
      type: [String, Number],
      required: true,
    },
    loading: {
      type: String,
      default: 'rotate',
    },
    loadingColor: {
      type: String,
      default: '#666',
    },
  },
  computed: {
    aIndex() {
      return this.$parent.aIndex;
    },
    isLoading() {
      return this.$parent.loading;
    },
  },
  mounted() {
    this.$parent.getNavList();
  },
};
</script>
