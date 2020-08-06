<template>
  <div>
    <a href="https://www.baidu.com">链接</a>
    <div id="box" class="item">box</div>
    <!-- <div @click="visible = true">点击输入{{ number }}</div>
    <l-keyboard :visible="visible" :number="number"></l-keyboard> -->
  </div>
</template>
<script>
export default {
  data() {
    return {
      visible: false,
      number: 1.0
    };
  },
  mounted() {
    const box = document.querySelector('#box');
    // box.style.backgroundColor = '#ddd';
    // box.style.fontSize = '30px';
    box.addEventListener('touchend', (evt) => {
      evt.target.style.display = 'none';
      // evt.target.style.backgroundColor = '#ddd';
    });
    // box.addEventListener('touchmove', (evt) => {
    //   console.log(evt.targetTouches[0].pageX);
    // });
    // box.addEventListener('touchend', (evt) => {
    //   evt.target.style.backgroundColor = '';
    // });
  }
};
</script>
<style lang="less" scoped>
#box {
  position: absolute;
  left: 0;
  top: 0;
  width: 100px;
  height: 100px;
  background: rgba(0, 0, 0, 0.5);
}
</style>
