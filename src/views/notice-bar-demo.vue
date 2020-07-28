<template>
  <div>
    <kad-demo-block title="基础用法">
      <kad-notice-bar FixedImg="//res.360kad.com/theme/mobile/img/m_index_2019/jiankangtoutiao.png" :sendVal="tilieText" :src="tilieText.pic" @click="click"></kad-notice-bar>
    </kad-demo-block>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tilieText: [
        {
          text: '据药监局规定',
          pic: 'http://image.360kad.com/group2/M00/D3/14/CgAgFV2yTGaAMIVPAABZOCV8_DY386.jpg',
        },
      ],
    };
  },
  methods: {
    click(index) {
      this.$ktoast({
        content: `点击了第一张图片${index + 1}`,
        duration: 1000,
      });
    },
  },
};
</script>
