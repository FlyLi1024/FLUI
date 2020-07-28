# 使用方法

---

## 全局引入

```js
import kadDesign from 'kad-design';
import 'kad-design/lib/theme-chalk/index.css';

Vue.use(kadDesign);
```

## 按需引入

安装 `babel-plugin-component` 插件

```js
yarn add babel-plugin-component -D
```

配置 `babel.config.js`，（全局引入务必要去掉这里的配置）

```js
plugins: [
  [
    'component',
    {
      libraryName: 'kad-design',
      styleLibraryName: 'theme-chalk'
    }
  ]
];
```

## 配置 rem

在`main.js/ts` 引入 rem 适配

```bash
import 'kad-design/packages/utils/rem.js';
```
