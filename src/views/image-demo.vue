<template>
  <div class="image-demo">
    <l-demo-block title="基本类型&形状">
      <l-image :src="src" width="100px" height="100px"></l-image>
      <l-image radius="25px 0 25px 0" :src="src" width="100px" height="100px"></l-image>
      <l-image radius="0 25px 0 25px" :src="src" width="100px" height="100px"></l-image>
      <l-image radius="25px 0 0 25px" :src="src" width="100px" height="100px"></l-image>
      <l-image radius="0 25px 25px 0" :src="src" width="100px" height="100px"></l-image>
      <l-image round :src="src" width="100px" height="100px"></l-image>
    </l-demo-block>
    <l-demo-block title="自定义宽高(不能用%)">
      <l-image :src="src" width="150px" height="100px"></l-image>
      <l-image :src="src" width="100px" height="auto"></l-image>
    </l-demo-block>
    <l-demo-block title="加载中">
      <l-image :src="src" width="100px" height="100px">
        <template v-slot:loading>图片加载中</template>
      </l-image>
      <l-image :src="src" width="100px" height="100px">
        <template v-slot:loading>
          <l-icon icon="image" size="30px"></l-icon>
        </template>
      </l-image>
      <l-image :src="src" width="100px" height="100px">
        <template v-slot:loading>
          <l-loading type="rotate" color="#999"></l-loading>
        </template>
      </l-image>
      <l-image :src="src" width="100px" height="100px">
        <template v-slot:loading>
          <l-loading type="scale" color="#999"></l-loading>
        </template>
      </l-image>
      <l-image :src="src" width="100px" height="100px">
        <template v-slot:loading>
          <l-loading type="ball-rotate" color="#999"></l-loading>
        </template>
      </l-image>
      <l-image :src="src" width="100px" height="100px">
        <template v-slot:loading>
          <l-loading type="jelly" color="#999"></l-loading>
        </template>
      </l-image>
      <l-image radius="10px" :src="src" width="100px" height="100px">
        <template v-slot:loading>
          <l-loading type="ball-rotate" color="#999"></l-loading>
        </template>
      </l-image>
      <l-image round :src="src" width="100px" height="100px">
        <template v-slot:loading>
          <l-loading type="ball-rotate" color="#999"></l-loading>
        </template>
      </l-image>
    </l-demo-block>
    <l-demo-block title="加载失败">
      <l-image :src="src" width="100px" height="100px">
        <template v-slot:error>加载失败</template>
      </l-image>
      <l-image :src="src" width="100px" height="100px">
        <template v-slot:error>
          <l-icon icon="wrong" size="25px"></l-icon>
        </template>
      </l-image>
    </l-demo-block>
    <l-demo-block title="无图状态&加载图片错误">
      <l-image src="111" width="100px" height="100px"></l-image>
    </l-demo-block>
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
  .l-image {
    background: #ddd;
    margin-right: 15px;
    margin-bottom: 15px;
  }
}
</style>
