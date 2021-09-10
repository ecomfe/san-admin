---
title: 路由和菜单
lang: zh-CN
---
# 路由和菜单

路由和菜单是组织起一个应用的关键骨架，San Admin 中的路由为了方便管理，使用了**中心化**的方式，在 `config/routes.js` 统一配置和管理（另外，我们计划后期会提供完全动态从后端加载的解决方案）。开始进行之前，请先阅读 [san-router](https://github.com/baidu/san-router)

## 基本结构

在这一部分，脚手架通过结合一些配置文件、基本算法及工具函数，搭建好了路由和菜单的基本框架，主要涉及以下几个模块/功能：

- `路由管理` 通过约定的语法根据在 `config/routes.js` 中配置路由。
- `菜单生成` 根据路由配置来生成菜单。菜单项名称，嵌套路径与路由高度耦合。
- `面包屑` 组件 PageContainer 中内置的面包屑也可由配置信息自动生成。

### 路由

目前脚手架中所有的路由都通过 `config/routes.js`来统一管理，在 `router` 的配置中我们增加了一些参数，如 `hideInMenu`,`name`,`icon`，来辅助生成菜单。其中：

- `hideInMenu` 用于隐藏不需要在菜单中展示的路由。
- `name` 和 `icon`分别代表生成菜单项的文本和图标，icon 列表具体可以查看 [santd](https://ecomfe.github.io/santd/#/components/icon)。

### 菜单

菜单暂时根据 `config/route.js` 生成，后期我们还会增加权限管理 / 动态菜单的功能。

### 新增布局

在 San Admin 中我们通过嵌套路由来实现布局模板。`routes.js`是一个数组，其中第一级数据就是我们的布局，如果你需要新增布局可以再直接增加一个新的一级数据。

```js
const routes = [
  {
    rule: '/new-router',
    name: 'NewRouter',
    icon: 'star',
    hideInMenu: false,
    children: [
      {
        rule: '/new-router/new',
        Component: () => import('/src/pages/dashboard/analysis'),
        name: '新增页面',
        root: '首页',
      }
    ]
  },
]
```

