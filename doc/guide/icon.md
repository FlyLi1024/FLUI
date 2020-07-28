# 使用方法

---

### 引入 `Icon` 组件。

```js
import { Icon } from 'kad-design';
Vue.use(Icon);
```

## 案例展示

### 自定义 icon 大小

通过添加`size`属性控制图标大小。
::: demo

```html
<kad-icon icon="people" size="20px"></kad-icon>
<kad-icon icon="people" size="40px"></kad-icon>
<kad-icon icon="people" size="60px"></kad-icon>
<kad-icon icon="people" size="80px"></kad-icon>
<kad-icon icon="people" size="100px"></kad-icon>
```

:::

### 自定义 icon 颜色

通过添加`color`属性控制图标颜色。
::: demo

```html
<kad-icon icon="people" size="60px" color="#f6975f"></kad-icon>
<kad-icon icon="people" size="60px" color="#07c160"></kad-icon>
<kad-icon icon="people" size="60px" color="#1989fa"></kad-icon>
<kad-icon icon="people" color="#f44" size="60px"></kad-icon>
```

:::

### 旋转动画

通过添加`spin`属性控制图标 360 度旋转。
::: demo

```html
<kad-icon icon="loading-A" size="60px" color="#f6975f" spin></kad-icon>
<kad-icon icon="loading-B" size="60px" color="#f6975f" spin></kad-icon>
<kad-icon icon="loading-C" size="60px" color="#f6975f" spin></kad-icon>
<kad-icon icon="loading-D" size="60px" color="#f6975f" spin></kad-icon>
```

:::

### 所有 ICON

::: demo

```html
<template>
  <div class="icon-box">
    <div class="item" v-for="(item, index) in IconList" :key="index">
      <div class="icon">
        <kad-icon :icon="item" size="60px"></kad-icon>
      </div>
      <div class="name">{{ item }}</div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        IconList: ['kefu-outline', 'label-rt', 'label-rb', 'label-lb', 'label-lt', 'submit-success', 'clock', 'phone', 'spike', 'range-lr', 'range-tb', 'arrow-down', 'arrow-up', 'arrow-left', 'arrow-right', 'category-point', 'kefu-point', 'filter-point', 'search', 'sms', 'login', 'people', 'kefu', 'category', 'shop', 'inventory', 'location', 'dot', 'required', 'yes', 'pug', 'scanning', 'filter', 'delete', 'refresh', 'edit', 'share', 'friends-space', 'toutiao', 'dingding', 'qq', 'alipay', 'weibo', 'wechat', 'wechat-point', 'qq-space', 'favorites-point', 'favorite', 'notice', 'notice-point', 'camera-point', 'camera', 'image', 'transport-point', 'transport', 'receipt', 'locked-point', 'unlock', 'locked', 'loading-D', 'loading-C', 'loading-B', 'loading-A', 'sort', 'right-point', 'left-point', 'down-point', 'up-point', 'praise', 'praise-point', 'on', 'off', 'more-vertical', 'more', 'close-outline', 'close-point', 'close', 'radio-checked', 'radio-point-checked', 'radio', 'checkbox', 'checkbox-checked', 'heart', 'heart-point', 'cart-add', 'cart', 'play', 'pause', 'left', 'down', 'right', 'up', 'reduce-point', 'add-point', 'reduce', 'add', 'wrong', 'success', 'info', 'help']
      };
    }
  };
</script>
```

:::

## 事件

| 参数  | 说明               | 类型    |
| ----- | ------------------ | ------- |
| icon  | 图标名称           | string  |
| size  | 图标大小,单位为 px | string  |
| color | 图标颜色           | string  |
| spin  | 控制图标旋转       | boolean |
