---
order: 1
title: 业务图标
type: 开发
---

# 业务图标

通常情况下，你可以通过 Ant Design Vue 提供的 <s-icon /> 图标组件来使用 Ant Design 官方图标。基本使用方式如下：

```html
<template>
    <a-icon type="heart" style="{ fontSize: '16px', color: 'hotpink' }" />
</template>
```
如果你没有在 Ant Design Vue 官方图标中找到需要的图标，可以到 iconfont.cn 上采集并生成自己的业务图标库，再进行使用。



## 一、生成图标库代码

首先，搜索并找到你需要的图标，将它采集到你的购物车里，在购物车里，你可以将选中的图标添加到项目中（没有的话，新建一个），后续生成的资源/代码都是以项目为维度的。

> 如果你已经有了设计稿，只是需要生成相关代码，可以上传你的图标后，再进行上面的操作。

<img src="../assets/biz-icon.png" alt="biz_icon"  />

来到刚才选中的项目页，点击『生成代码』的链接，会在下方生成不同引入方式的代码，下面会分别介绍。

<img src="../assets/biz-icon2.png" alt="biz_icon"  />

## 二、引入

有三种引入方式供你选择：SVG Symbol、Unicode 及 Font class。我们推荐在现代浏览器下使用 SVG Symbol 方式引入。

SVG 符号引入是现代浏览器未来主流的图标引入方式。其方法是预先加载符号，在合适的地方引入并渲染为矢量图形。有如下特点：

支持多色图标，不再受到单色图标的限制
通过一些技巧，支持像字体那样，通过 font-size、color 来调整样式
支持IE 9+ 及现代浏览器

一般使用步骤如下：

1. 切换到 Symbol 页签，复制项目生成的地址代码：
```js
// at.alicdn.com/t/font_405362_lyhvoky9rc7ynwmi.js
```
2. 加入图标样式代码，如果没有特殊的要求，你可以直接复用 Ant Design 图标的样式
```css
.icon {
    width: 1em;
    height: 1em;
    fill: currentColor;
    vertical-align: -.125em;
}
```
3. 挑选相应图标并获取类名，应用于页面
```html
<svg class="icon" aria-hidden="true">
   <use xlink:href="#icon-ali-pay"></use>
</svg>
```
你也可以通过使用 Ant Design Vue 图标组件提供的 Icon.createFromIconfontCN({...}) 方法来更加方便地使用图标，使用方式如下

```html
<template>
    <my-icon type="icon-example" />
</template>

<script>
const MyIcon = Icon.createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js', // 在 iconfont.cn 上生成
})

export default {
    components: {
        MyIcon
    },
    data () {
        return {

        }
    }
}
</script>
```

### Unicode 

这是最原始的方式，需要三步来完成引入：

1. 拷贝项目生成的字体库代码，你可以新建一个样式文件来放置图标相关的样式。

```js
@font-face {
    font-family: 'iconfont';
    src: url('//at.alicdn.com/t/font_405362_lyhvoky9rc7ynwmi.eot');
    src: url('//at.alicdn.com/t/font_405362_lyhvoky9rc7ynwmi.eot?#iefix') format('embedded-opentype'),
    url('//at.alicdn.com/t/font_405362_lyhvoky9rc7ynwmi.woff') format('woff'),
    url('//at.alicdn.com/t/font_405362_lyhvoky9rc7ynwmi.ttf') format('truetype'),
    url('//at.alicdn.com/t/font_405362_lyhvoky9rc7ynwmi.svg#iconfont') format('svg');
}
```

2. 加入图标样式代码，如果没有特殊的要求，你可以直接复用 Ant Design 图标的样式。

```css
.iconfont {
    display: inline-block;
    font-style: normal;
    vertical-align: baseline;
    text-align: center;
    text-transform: none;
    line-height: 1;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    &:before {
        display: block;
        font-family: "iconfont" !important;  /* 注意与 font-face 中的匹配 */
    }
}
```

3. 在项目中鼠标移动到要用的图标上，点击『复制代码』，就得到了图标对应的字体编码，现在可以直接引入了：

```js
<i class="iconfont">&#xe66b;</i>
```

### Font Class 
这种方式只是在上一种方式的基础上，给每个图标对应设置了一个语义化的类名，方便使用及后期维护。

1. 切换到 Font class 页签，在页面头部引入下面生成的 css 代码：

```js
//at.alicdn.com/t/font_405362_lyhvoky9rc7ynwmi.css
```
> 如果不喜欢标签引入的方式，也可以直接拷贝上面链接中的代码到你的样式文件中。如果不喜欢网站默认生成的类名，自己重写这部分代码即可，比如：

```
 - .icon-ali-pay:before { content: "\e66b"; }              // 修改前
 + .monitor-icon-alipay:before { content: "\e66b"; }       // 修改后
```

2. 这时你可以选择拷贝图标对应代码（就是类名，如果类名被重写过，这里记得用修改后的），直接使用：

```html
<i class="iconfont icon-ali-pay"></i>
```
不过我们更推荐将它封装一下：

```html
<template>
    <i class="iconfont icon-{{type}}"></i>
</template>

<script>
export default {

}
</script>
```

现在可以更加方便地使用：

```html
<template>
     <biz-icon type="ali-pay" />
 </template>
```

Unicode 和 Font Class 本质上就是字体，你可以通过一些字体的样式属性去控制这种图标的展现，同时浏览器兼容性很好，但不支持多色图标。

### 自定义 SVG 图标

可参考 Santd 官方文档：https://ecomfe.github.io/santd/#/components/icon

```html
<template>
    <div>
        <s-icon component="{{MessageSvg}}"/>
    </div>
</template>

<script>
import MessageSvg from 'path/to/message.svg?inline'; // path to your '*.svg' file.

export default {
    initailData() {
        return {
            MessageSvg
        }
    }
}
</script>
```
