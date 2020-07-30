<template>
  <div>
    <transition name="kad-fade" v-if="mask">
      <kad-overlay v-if="visible" :opacity="opacity" :zIndex="8888"></kad-overlay>
    </transition>
    <transition :name="anim">
      <div class="kad-toast" v-if="visible">
        <div class="content" :class="{ horizontal: horizontal }">
          <div class="icon" v-if="icon">
            <l-icon class="l-icon" :size="horizontal ? '16px' : '30px'" :icon="icon" :spin="loading"></l-icon>
          </div>
          <div class="text">{{ content }}</div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'KadToast',
  data() {
    return {
      visible: false,
      loading: false,
      content: '',
      icon: '',
      mask: true,
      horizontal: false,
      anim: 'kad-fade',
      duration: 2000,
      opacity: 0
    };
  }
};
</script>
