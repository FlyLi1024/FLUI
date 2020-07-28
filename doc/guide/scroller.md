# 使用方法

---

### 按需引入

```js
import { Scroller } from 'kad-design';
Vue.use(Scroller);
```

## 案例展示

### 横向滚动

::: demo

```html
<template>
  <div class="scroller-doc">
    <p>当前位置：x：{{ x }}</p>
    <p>是否滚动结束：{{ isEnd }}</p>
    <kad-scroller :scrollX="true" :scrollY="false" @scroll="scroll" @scrollEnd="scrollEnd">
      <div class="slide-item horizontal" v-for="(item, index) in 50" :key="index">
        {{ index + 1 }}
      </div>
    </kad-scroller>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        x: '0',
        y: '0',
        isEnd: false
      };
    },
    methods: {
      scroll(pos) {
        this.x = pos.x;
        this.y = pos.y;
        this.isEnd = false;
      },
      scrollEnd(pos) {
        this.x = pos.x;
        this.y = pos.y;
        this.isEnd = true;
      }
    }
  };
</script>
```

:::

### 纵向滚动

::: demo

```html
<template>
  <div class="scroller-doc">
    <p>当前位置：y：{{ y }}</p>
    <p>是否滚动结束：{{ isEnd }}</p>
    <kad-scroller style="height: 250px;" @scroll="scroll" @scrollEnd="scrollEnd" :bounce="false">
      <div class="slide-item" v-for="(item, index) in 20" :key="index">
        {{ index + 1 }}
      </div>
    </kad-scroller>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        y: '0',
        isEnd: false
      };
    },
    methods: {
      scroll(pos) {
        this.y = pos.y;
        this.isEnd = false;
      },
      scrollEnd(pos) {
        this.y = pos.y;
        this.isEnd = true;
      }
    }
  };
</script>
```

:::

## 参数

| 参数   | 说明     | 类型           | 默认值 |
| ------ | -------- | -------------- | ------ |
| style  | 定义样式 | string、object | -      |
| bounce | 回弹效果 | boolean        | false  |

## 事件
