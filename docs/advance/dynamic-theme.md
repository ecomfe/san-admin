---
order: 5
title: 动态主题
type: 开发
---

# 动态主题

简单几步可以实现 San Admin 动态主题。

## 主题定制 

我们基于 Santd 进行开发，完全支持官方提供的 less 变量定制功能. 你可以在脚手架目录中找到 san.config.js 代码类似这样:

```js
css: {
  loaderOptions: {
    less: {
      modifyVars: {
        'primary-color': '#F5222D',
        'link-color': '#F5222D',
        'border-radius-base': '4px'
      },
      javascriptEnabled: true
    }
  }
}
```
当修改完毕后，重启环境，即可生效 ( yarn run serve 或 npm run serve )

更多方式可以参考官方文档：定制主题。

## 样式覆盖 

Ant Design 的通用样式变量可能无法满足所有定制需求，你需要全局覆盖默认的组件样式。我们可以参照 样式 章节来覆盖样式。 

### 全局覆盖组件

比如新建全局覆盖样式表 `src/global.less` 并修改所有标签的字体大小。

```less
.ant-tag {
  font-size: 12px;
}
```
并将样式表引入到 src/core/use.js 或者 src/core/lazy.lib.js 即可

### 单独覆盖指定组件
```less
// sample.less
.customTag {
  font-size: 18px;
}
```

```html
<template>
  <s-tag class="customTag">定制标签</s-tag>
</template>

<style lang="less" scoped>
@import './sample.less';
</style>
```
## 单独覆盖指定组件

Admin 中提供了一个可以在线切换主题和布局的 设置抽屉，使用这个抽屉可以很方便的查看更换主题的效果，无需重启脚手架。

为了方便预览，设置中的配置项会被保存在localStorage中，你可以将其拷贝给他人，分享效果。

您一旦确定了这个配置，可以点击 拷贝代码 按钮将其拷贝，并在 `src/config/defaultSetting.js` 中覆盖默认设置。这样您可以将该主题发布和部署

`src/config/defaultSetting.js` 内容如下：

```js
module.exports = {
  navTheme: 'dark', // 菜单的主题
  primaryColor: '#1890FF', // santd 的主色调
  layout: 'sidemenu', // 菜单的布局，值为 sidemenu 菜单显示在左侧，值为 topmenu 菜单显示在顶部
  contentWidth: 'Fluid', // 内容的布局 Fixed 为定宽到1200px ，Fluid 为流式布局。
  fixedHeader: false, // 固定页头
  autoHideHeader: false, // 下滑时自动隐藏页头
  fixSiderbar: false, // 固定菜单
};
```

