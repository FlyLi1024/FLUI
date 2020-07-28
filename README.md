### 1. 全局引入

```js
import FLUI from 'flui';
import 'flui/lib/theme-chalk/index.css';

Vue.use(FLUI);
```

### 2. 按需引入

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
      libraryName: 'flui',
      styleLibraryName: 'theme-chalk'
    }
  ]
];
```

配置 `main.js/ts` ，(具体所需组件引入请前往文档查看)

```js
import { Button, Icon } from 'flui';

Vue.use(Button).use(Icon);
```

### 3. 配置 rem

`main.js` 引入 js 适配

```js
import 'flui/packages/utils/rem.js';
```
