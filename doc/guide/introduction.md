# 文档编写注意事项

---

## 组件编写

1. 所有组件必须用`px`作为单位，可省略但不可用 rem 作为单位，包括 props 传入的，具体转换参考`icon`组件。
2. 新增的组件须在`types/component.d.ts`添加组件类型，不然 ts 引入无法找到模块。
3. 新增的组件样式须在`packages/style/component.less`中导入，否则无法生效。
4. 每次打包会改动`config/config.json`文件，不用理会，不用提交同步到 gitlab。

## 文档编写

1. 右侧导航需要用 `###` 作为标题才显示。
2. 左侧导航组件根据 `src/module.js` 配置。
3. 文档 mardown 语法可以参考 `button.md` 组件的语法。
4. 文档命名必须与左侧导航名称一致，否则找不到页面。
5. 需要控制文档里的布局样式可以在`doc/style/index.less`中编写，作好哪个组件备注。
6. 文档中可使用组件库中所有的组件，也可使用 vue 部分语法运算，例如<span v-pre>`{{1+2}}`</span>。

# 自定义 mardown 语法

---

## 新增 emjoy 图标

:star: :+1: :open_umbrella: :shamrock:
<a href="https://github.com/markdown-it/markdown-it-emoji/blob/master/lib/data/full.json" target="_blank">所有图标在这里</a>

## 新增以及美化 TodoList

- [ ] ~~支持以 PDF 格式导出文稿~~
- [ ] 改进 Cmd 渲染算法，使用局部渲染技术提高渲染效率
- [x] 新增 Todo 列表功能
- [x] 修复 LaTex 公式渲染问题
- [x] 新增 LaTex 公式编号功能

## 自定义引用

> 鹅鹅鹅，曲项向天歌。白毛浮绿水，红掌拨清波。

## 自定义内容块

::: tip tip
鹅鹅鹅，曲项向天歌。白毛浮绿水，红掌拨清波。
:::

::: warning warning
鹅鹅鹅，曲项向天歌。白毛浮绿水，红掌拨清波。
:::
::: info info
鹅鹅鹅，曲项向天歌。白毛浮绿水，红掌拨清波。
:::

::: success success
鹅鹅鹅，曲项向天歌。白毛浮绿水，红掌拨清波。
:::

::: danger danger
鹅鹅鹅，曲项向天歌。白毛浮绿水，红掌拨清波。
:::

- 可嵌套代码块展示

::: tip 嵌套代码

```html
<kad-button type="default" round>默认按钮</kad-button>
<kad-button type="primary" round>主要按钮</kad-button>
<kad-button type="info" round>信息按钮</kad-button>
<kad-button type="danger" round>危险按钮</kad-button>
<kad-button type="warning" round>警告按钮</kad-button>
```

:::

## 自定义代码块

`这是一个小的代码块`、`code`

```html
<kad-button type="default" round>默认按钮</kad-button>
<kad-button type="primary" round>主要按钮</kad-button>
<kad-button type="info" round>信息按钮</kad-button>
<kad-button type="danger" round>危险按钮</kad-button>
<kad-button type="warning" round>警告按钮</kad-button>
```

```css
body {
  transition: all 1s ease-in-out;
  background-color: salmon;
  color: skyblue;
  transform: rotate(45deg);
}
```

## 自定义表格

| 参数    | 说明               | 类型    | 默认值  |
| ------- | ------------------ | ------- | ------- |
| type    | 类型               | string  | default |
| loading | 是否显示为加载状态 | boolean | false   |
| loading | 是否显示为加载状态 | boolean | false   |

## 自定义 demo 展示

:::demo

```html
<template>
  <kad-button @click="ToastAnim('kad-fade')">kad-fade</kad-button>
  <kad-button type="default" @click="ToastAnim('kad-pop')">kad-pop</kad-button>
  <kad-button type="primary" @click="ToastAnim('kad-flipX')">kad-flipX</kad-button>
  <kad-button type="info" @click="ToastAnim('kad-spin')">kad-spin</kad-button>
  <kad-button type="danger" @click="ToastAnim('kad-fold')">kad-fold</kad-button>
  <kad-button type="warning" @click="ToastAnim('kad-scale')">kad-scale</kad-button>
</template>
<script>
  export default {
    methods: {
      ToastAnim(anim) {
        this.$ktoast({
          content: '自定义显示动画',
          anim
        });
      }
    }
  };
</script>
```

:::
