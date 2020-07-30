# 使用方法

---

### 按需加载引入

```js
import { Button } from 'kad-design';
Vue.use(Button);
```

### 使用图标需要引入`Icon`组件

```js
import { Button, Icon } from 'kad-design';
Vue.use(Button).use(Icon);
```

## 案例展示

### 按钮类型

通过设置`type`属性为`default`、`success`、`error`、`warning`来创建不同样式的 Button，样式默认为`default`

:::demo

```html
<l-button>无边框按钮</l-button>
<l-button type="default">默认按钮</l-button>
<l-button type="primary">主要按钮</l-button>
<l-button type="info">信息按钮</l-button>
<l-button type="danger">危险按钮</l-button>
<l-button type="warning">警告按钮</l-button>
```

:::

### 朴素按钮

添加 `plain` 属性来设置按钮类型为朴素按钮

:::demo

```html
<l-button type="default" plain>默认按钮</l-button>
<l-button type="primary" plain>主要按钮</l-button>
<l-button type="info" plain>信息按钮</l-button>
<l-button type="danger" plain>危险按钮</l-button>
<l-button type="warning" plain>警告按钮</l-button>
```

:::

### 圆角按钮

添加 `round` 属性来设置按钮圆角

::: demo

```html
<l-button type="default" round>默认按钮</l-button>
<l-button type="primary" round>主要按钮</l-button>
<l-button type="info" round>信息按钮</l-button>
<l-button type="danger" round>危险按钮</l-button>
<l-button type="warning" round>警告按钮</l-button>
```

:::

### 按钮大小

添加 `size` 属性来设置按钮大小

::: demo

```html
<l-button type="primary" size="mini">迷你按钮</l-button>
<l-button type="primary" size="small">小型按钮</l-button>
<l-button type="primary">普通按钮</l-button>
<l-button type="primary" size="large">大号按钮</l-button>
```

:::

### 自定义颜色按钮

添加 `color` 属性来设置按钮颜色

::: demo

```html
<l-button color="#FF719A">自定义颜色</l-button>
<l-button color="linear-gradient(-225deg, #FFE29F 0%, #FFA99F 48%, #FF719A 100%)">线性渐变</l-button>
<l-button color="radial-gradient(#FFE29F, #FFA99F,#FF719A)">径向渐变</l-button>
```

:::

### 带有图标按钮

添加 `icon` 属性来设置按钮图标，具体图标请看`icon`组件

::: demo

```html
<l-button type="primary" icon="delete">删除</l-button>
```

:::

### loading 效果按钮

添加 `loading` 属性来设置按钮旋转，图标设置有`loading-A`、`loading-B`、`loading-C`、`loading-D`

::: demo

```html
<l-button type="primary" loading icon="loading-A">加载中</l-button>
<l-button type="primary" loading icon="loading-B">加载中</l-button>
<l-button type="primary" loading icon="loading-C">加载中</l-button>
<l-button type="primary" loading icon="loading-D">加载中</l-button>
```

:::

### 100%宽度按钮

添加 `full` 属性来设置按钮为 100%宽度

::: demo

```html
<l-button type="primary" full>默认按钮</l-button>
```

:::

### 禁用状态

添加 `disabled` 属性来禁用按钮，禁用状态下按钮不可点击

::: demo

```html
<l-button type="default" disabled>默认按钮</l-button>
<l-button type="primary" disabled>主要按钮</l-button>
<l-button type="info" disabled>信息按钮</l-button>
<l-button type="danger" disabled plain>危险按钮</l-button>
<l-button type="warning" disabled round>警告按钮</l-button>
```

:::

## 参数

| 参数     | 说明                                      | 类型    | 默认值  | 可选值                            |
| -------- | ----------------------------------------- | ------- | ------- | --------------------------------- |
| type     | 按钮类型                                  | string  | default | primary、 info 、warning、 danger |
| loading  | 是否显示为加载状态                        | boolean | false   | -                                 |
| disabled | 是否禁用按钮                              | boolean | false   | -                                 |
| round    | 是否为圆形按钮                            | boolean | false   | -                                 |
| plain    | 是否为朴素按钮                            | boolean | false   | -                                 |
| full     | 是否 100% 宽度                            | boolean | false   | -                                 |
| size     | 尺寸                                      | string  | normal  | large 、small、mini               |
| icon     | 左侧图标名称或图片链接                    | string  | -       | -                                 |
| color    | 按钮颜色，支持传入 linear-gradient 渐变色 | string  | -       | -                                 |

## 事件

| 事件名 | 说明                               | 回调参数     |
| ------ | ---------------------------------- | ------------ |
| click  | 点击按钮，且按钮状态不为禁用时触发 | event: Event |
