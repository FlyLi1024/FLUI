# 使用方法

---

### 按需引入

```js
import { Image } from 'kad-design';
Vue.use(Image);
```

## 案例展示

### 基本类型&形状

传入`radius`设置图片的形状，当传入`round`时可设置为圆形。

::: demo

```html
<template>
  <div class="image-doc">
    <kad-image :src="src" width="200px" height="200px"></kad-image>
    <kad-image radius="100px 0 100px 0" :src="src" width="200px" height="200px"></kad-image>
    <kad-image radius="0 100px 0 100px" :src="src" width="200px" height="200px"></kad-image>
    <kad-image radius="100px 0 0 100px" :src="src" width="200px" height="200px"></kad-image>
    <kad-image radius="0 100px 100px 0" :src="src" width="200px" height="200px"></kad-image>
    <kad-image round :src="src" width="200px" height="200px"></kad-image>
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
```

:::

### 自定义宽高(不能用%)

传入`width`、`height` 来设置图片的大小。

::: demo

```html
<template>
  <div class="image-doc">
    <kad-image :src="src" width="300px" height="200px"></kad-image>
    <kad-image :src="src" width="200px" height="auto"></kad-image>
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
```

:::

### 加载中

传入`<template v-slot:loading>自定义loading</template>` 来设置图片加载的文字或者图片。

::: demo

```html
<template>
  <div class="image-doc">
    <kad-image :src="src" width="200px" height="200px">
      <template v-slot:loading>图片加载中</template>
    </kad-image>
    <kad-image :src="src" width="200px" height="200px">
      <template v-slot:loading>
        <l-icon icon="image" size="80px"></l-icon>
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
```

:::

## 参数

| 参数           | 说明         | 类型    | 默认值 |
| -------------- | ------------ | ------- | ------ |
| src            | 地址链接     | string  | -      |
| width          | 宽度         | string  | -      |
| height         | 高度         | string  | -      |
| round          | 圆形         | boolean | false  |
| radius         | 圆角角度     | string  | -      |
| v-slot:loading | 加载 loading | boolean | false  |
