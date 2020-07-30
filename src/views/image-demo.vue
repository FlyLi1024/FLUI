<template>
  <div class="image-demo">
    <kad-demo-block title="基本类型&形状">
      <kad-image :src="src" width="200px" height="200px"></kad-image>
      <kad-image radius="50px 0 50px 0" :src="src" width="200px" height="200px"></kad-image>
      <kad-image radius="0 50px 0 50px" :src="src" width="200px" height="200px"></kad-image>
      <kad-image radius="50px 0 0 50px" :src="src" width="200px" height="200px"></kad-image>
      <kad-image radius="0 50px 50px 0" :src="src" width="200px" height="200px"></kad-image>
      <kad-image round :src="src" width="200px" height="200px"></kad-image>
    </kad-demo-block>
    <kad-demo-block title="自定义宽高(不能用%)">
      <kad-image :src="src" width="372px" height="200px"></kad-image>
      <kad-image :src="src" width="200px" height="auto"></kad-image>
    </kad-demo-block>
    <kad-demo-block title="加载中">
      <kad-image :src="src" width="200px" height="200px">
        <template v-slot:loading>图片加载中</template>
      </kad-image>
      <kad-image :src="src" width="200px" height="200px">
        <template v-slot:loading>
          <l-icon icon="image" size="50px"></l-icon>
        </template>
      </kad-image>
      <kad-image :src="src" width="200px" height="200px">
        <template v-slot:loading>
          <kad-loading type="rotate" color="#999"></kad-loading>
        </template>
      </kad-image>
      <kad-image :src="src" width="200px" height="200px">
        <template v-slot:loading>
          <kad-loading type="scale" color="#999"></kad-loading>
        </template>
      </kad-image>
      <kad-image :src="src" width="200px" height="200px">
        <template v-slot:loading>
          <kad-loading type="ball-rotate" color="#999"></kad-loading>
        </template>
      </kad-image>
      <kad-image :src="src" width="200px" height="200px">
        <template v-slot:loading>
          <kad-loading type="jelly" color="#999"></kad-loading>
        </template>
      </kad-image>
      <kad-image radius="10px" :src="src" width="200px" height="200px">
        <template v-slot:loading>
          <kad-loading type="ball-rotate" color="#999"></kad-loading>
        </template>
      </kad-image>
      <kad-image round :src="src" width="200px" height="200px">
        <template v-slot:loading>
          <kad-loading type="ball-rotate" color="#999"></kad-loading>
        </template>
      </kad-image>
    </kad-demo-block>
    <kad-demo-block title="加载失败">
      <kad-image :src="src" width="200px" height="200px">
        <template v-slot:error>加载失败</template>
      </kad-image>
      <kad-image :src="src" width="200px" height="200px">
        <template v-slot:error>
          <l-icon icon="wrong" size="50px"></l-icon>
        </template>
      </kad-image>
    </kad-demo-block>
    <kad-demo-block title="无图状态&加载图片错误">
      <kad-image src="111" width="200px" height="200px"></kad-image>
    </kad-demo-block>
  </div>
</template>

<script>
export default {
  data() {
    return {
      src: 'https://image.360kad.com/group2/M00/D0/B8/CgAgFV2m0hmATaUxAABjSAy_3n8902.png'
    };
  }
};
</script>

<style lang="less" scoped>
.image-demo {
  padding-bottom: 40px;
  .kad-image {
    background: #ddd;
    margin-right: 30px;
    margin-bottom: 30px;
  }
}
</style>
