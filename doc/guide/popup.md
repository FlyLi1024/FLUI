# 使用方法

---

### 按需引入

```js
import { Popup } from 'kad-design';
Vue.use(Popup);
```

## 案例展示

### 弹出位置

添加`position`属性来控制弹出层的位置，当前位置有`top`、`right`、`bottom`、`left`、`center`。

::: demo

```html
<template>
  <div class="popup-demo">
    <l-button type="primary" @click="visible0 = true">中心弹出</l-button>
    <l-button type="primary" @click="visible1 = true">顶部弹出</l-button>
    <l-button type="primary" @click="visible2 = true">右侧弹出</l-button>
    <l-button type="primary" @click="visible3 = true">底部弹出</l-button>
    <l-button type="primary" @click="visible4 = true">左侧弹出</l-button>

    <kad-popup :visible.sync="visible0" position="center">
      <div class="popup-demo-item" v-for="(item, index) in 3" :key="index">
        内容
      </div>
    </kad-popup>
    <kad-popup :visible.sync="visible1" position="top">
      <div class="popup-demo-item" v-for="(item, index) in 3" :key="index">
        内容
      </div>
    </kad-popup>
    <kad-popup :visible.sync="visible2" position="right">
      <div class="popup-demo-item" v-for="(item, index) in 3" :key="index">
        内容
      </div>
    </kad-popup>
    <kad-popup :visible.sync="visible3" position="bottom">
      <div class="popup-demo-item" v-for="(item, index) in 3" :key="index">
        内容
      </div>
    </kad-popup>
    <kad-popup :visible.sync="visible4" position="left">
      <div class="popup-demo-item" v-for="(item, index) in 3" :key="index">
        内容
      </div>
    </kad-popup>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        visible0: false,
        visible1: false,
        visible2: false,
        visible3: false,
        visible4: false
      };
    }
  };
</script>
```

:::

### 自定义样式

通过设置`styles`来设定弹窗内容区域的样式。

:::demo

```html
<template>
  <div class="popup-demo">
    <l-button type="primary" @click="visible5 = true">中心弹出</l-button>
    <l-button type="primary" @click="visible6 = true">底部弹出</l-button>
    <l-button type="primary" @click="visible7 = true">左侧弹出</l-button>

    <kad-popup :visible.sync="visible5" :scroll="true" position="center" :styles="{ width: '400px', height: '500px' }">
      <div class="popup-demo-item" v-for="(item, index) in 20" :key="index">
        内容
      </div>
    </kad-popup>
    <kad-popup :visible.sync="visible6" :scroll="true" position="bottom" :styles="{ height: '400px' }">
      <div class="popup-demo-item" v-for="(item, index) in 20" :key="index">
        内容
      </div>
    </kad-popup>
    <kad-popup :visible.sync="visible7" :scroll="true" position="left" :styles="{ width: '400px' }">
      <div class="popup-demo-item" v-for="(item, index) in 20" :key="index">
        内容
      </div>
    </kad-popup>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        visible5: false,
        visible6: false,
        visible7: false
      };
    }
  };
</script>
```

:::

### 自定义弹出动画

通过设置`transition`来设定弹窗展示的动画。

:::demo

```html
<template>
  <div class="popup-demo">
    <l-button type="primary" @click="visible8 = true">kad-fold</l-button>
    <l-button type="primary" @click="visible9 = true">kad-scale</l-button>
    <l-button type="primary" @click="visible10 = true">kad-spin</l-button>
    <l-button type="primary" @click="visible11 = true">kad-flipX</l-button>
    <l-button type="primary" @click="visible12 = true">kad-pop</l-button>
    <l-button type="primary" @click="visible13 = true">kad-fade</l-button>

    <kad-popup :visible.sync="visible8" transition="kad-fold">
      <div class="popup-demo-item" v-for="(item, index) in 3" :key="index">
        内容
      </div>
    </kad-popup>
    <kad-popup :visible.sync="visible9" transition="kad-scale">
      <div class="popup-demo-item" v-for="(item, index) in 3" :key="index">
        内容
      </div>
    </kad-popup>
    <kad-popup :visible.sync="visible10" transition="kad-spin">
      <div class="popup-demo-item" v-for="(item, index) in 3" :key="index">
        内容
      </div>
    </kad-popup>
    <kad-popup :visible.sync="visible11" transition="kad-flipX">
      <div class="popup-demo-item" v-for="(item, index) in 3" :key="index">
        内容
      </div>
    </kad-popup>
    <kad-popup :visible.sync="visible12" transition="kad-pop">
      <div class="popup-demo-item" v-for="(item, index) in 3" :key="index">
        内容
      </div>
    </kad-popup>
    <kad-popup :visible.sync="visible13" transition="kad-fade">
      <div class="popup-demo-item" v-for="(item, index) in 3" :key="index">
        内容
      </div>
    </kad-popup>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        visible8: false,
        visible9: false,
        visible10: false,
        visible11: false,
        visible12: false,
        visible13: false
      };
    }
  };
</script>
```

:::

## 参数

| 参数         | 说明       | 类型           | 默认值   | 可选值                           |
| ------------ | ---------- | -------------- | -------- | -------------------------------- |
| visible.sync | 显示隐藏   | boolean        | false    | -                                |
| styles       | 自定义样式 | string、object | -        | -                                |
| position     | 位置       | string         | -        | left、right、top、bottom、center |
| transition   | 展示动画   | string         | kad-fade | fade、scale、fold、spin、pop     |
