<template>
  <div>
    <l-demo-block title="无图片" full>
      <l-graphic v-for="(item, index) in 2" :key="index" title="导致阳痿早泄的原因及医疗措施" label="阳痿 性功能勃起障碍" />
    </l-demo-block>
    <l-demo-block title="图片左" full>
      <l-graphic v-for="(item, index) in 2" :key="index" theme="left" title="导致阳痿早泄的原因及医疗措施" label="阳痿 性功能勃起障碍" image="https://image.360kad.com/group2/M00/C9/B5/CgAgFV16Br6ACheEAAKaMeormcw292.jpg" />
    </l-demo-block>
    <l-demo-block title="图片右" full>
      <l-graphic v-for="(item, index) in 2" :key="index" theme="right" title="导致阳痿早泄的原因及医疗措施" label="阳痿 性功能勃起障碍" image="https://image.360kad.com/group2/M00/C9/B5/CgAgFV16Br6ACheEAAKaMeormcw292.jpg" />
    </l-demo-block>
    <l-demo-block title="图片上" full>
      <l-graphic v-for="(item, index) in 2" :key="index" theme="top" title="导致阳痿早泄的原因及医疗措施" label="阳痿 性功能勃起障碍" image="https://image.360kad.com/group2/M00/C9/B5/CgAgFV16Br6ACheEAAKaMeormcw292.jpg" />
    </l-demo-block>
    <l-demo-block title="图片下" full>
      <l-graphic v-for="(item, index) in 2" :key="index" theme="bottom" title="导致阳痿早泄的原因及医疗措施" label="阳痿 性功能勃起障碍" image="https://image.360kad.com/group2/M00/C9/B5/CgAgFV16Br6ACheEAAKaMeormcw292.jpg" />
    </l-demo-block>
    <l-demo-block title="图片下" full>
      <l-graphic v-for="(item, index) in 2" :key="index" theme="bottom" title="导致阳痿早泄的原因及医疗措施" label="阳痿 性功能勃起障碍" image="https://image.360kad.com/group2/M00/C9/B5/CgAgFV16Br6ACheEAAKaMeormcw292.jpg" />
    </l-demo-block>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
/deep/ .l-doc-demo-block__content {
  padding: 0 !important;
}
</style>
