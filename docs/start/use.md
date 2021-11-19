---
title: 开始使用
lang: zh-CN
---
# 开始使用

## 写在前面

San Admin 是一个基于[San](https://baidu.github.io/san/)的企业级中后台前端/设计解决方案，我们致力于在设计规范和基础组件的基础上，继续向上构建，提炼出典型模板/业务组件/配套设计资源，进一步提升企业级中后台产品设计研发过程中的『用户』和『设计者』的体验。随着『设计者』的不断反馈，我们将持续迭代，逐步沉淀和总结出更多设计模式和相应的代码实现，阐述中后台产品模板/组件/业务场景的最佳实践，也十分期待你的参与和共建。

> **本项目默认你有一定的 San 基础和 Santd 使用经验,如果你对这些还不熟悉，我们建议你先查阅相关文档** 
>
> [San](https://baidu.github.io/san/)、[Santd](https://ecomfe.github.io/santd/#/docs/introduce)

我们基于上述目标和提供了以下的典型模板，它可以帮助你快速搭建企业级中后台产品原型。

```
- Dashboard
  - 分析页
  - 监控页
  - 工作台
- 表单页
  - 基础表单页
  - 分步表单页
  - 高级表单页
- 列表页
  - 查询表格
  - 标准列表
  - 卡片列表
- 详情页
  - 基础详情页
  - 高级详情页
- 结果
  - 成功页
  - 失败页
- 异常
  - 403 无权限
  - 404 找不到
  - 500 服务器出错
- 个人页
  - 个人中心
  - 个人设置
```

## 前期准备

你的本地环境需要安装 [node](http://nodejs.org/) 和 [git](https://git-scm.com/)。我们的技术栈基于 [ES2015+](http://es6.ruanyifeng.com/)、[San](https://baidu.github.io/san/)、[Santd](https://ecomfe.github.io/santd/#/docs/introduce)、[San-cli](https://ecomfe.github.io/san-cli/#/create-project)、[Echarts](https://echarts.apache.org/zh/index.html)，提前了解和学习这些知识会非常有帮助。

## 安装

从 GitHub 仓库中直接安装最新的代码。

```bash
$ git clone https://github.com/ecomfe/san-admin.git
$ cd san-admin
```

## 目录结构

我们已经为你生成了一个完整的开发框架，提供了涵盖中后台开发的各类功能和坑位，下面是整个项目的目录结构。

```
├── public
│   ├── favicon.ico            
│   ├── index.ejs                 # html模版文件
├── mock                          # mock数据
│   ├── list
│   │   └── table-list.json5      # 列表数据
│   ├── user
│   │   └── user-info.json        # 用户相关数据
│   └── index.js                  # mock server配置
├── config                        # 项目编译相关配置文件
│   └── index.js                  # 配置入口
│   └── proxy.js                  # 代理配置
│   └── themePluginConfig.js      # 主题更新逻辑
│   └── updateSetting.js          # Setting更新逻辑
├── src
│   ├── assets                    # 公共资源
│   ├── components                # 公共UI组件
│   │   ├── BasicLayout           # 布局相关的所有组件
│   │   │   ├── GlobalFooter      # 全局的Footer组件
│   │   │   ├── GlobalHeader      # 全局的Header组件
│   │   │   ├── PageContainer     # 包含面包屑的布局组件
│   │   │   ├── SettingDrawer     # 抽屉组件，用于可视化配置页面布局
│   │   │   ├── SiderMenu         # 侧边栏组件
│   │   │   ├── TopNavHeader      # Nav组件
│   │   │   ├── Header            # Header
│   │   │   ├── Footer            # Footer
│   │   │   ├── BasicLayout       # 包含SiderMunu，Header,Footer组件的一个重型布局组件
│   │   │   ├── index.js          # 组件入口，用户批量导出组件
│   │   └── ...
│   ├── lib                       # lib 库
│   │   ├── App.js                # 实例化根组件类
│   │   ├── Store.js              # san-store封装类
│   │   └── utils                 # 工具库
│   │       ├── util.js           # 常用工具方法
│   │       ├── request.js        # 封装的axios
│   │       └── ...
│   └── pages                     # 页面
│       ├── list                  # 列表模块
│       │   ├── card-list         # 卡片列表页面
│       │   ├── basic-list        # 基础列表页面
│       │   ├── ...               
│       └── form                  # 表单模块
│           └── ...
├── .browserslistrc               # 目标浏览器版本
├── .gitignore                    # git忽略目录及文件的配置文件
├── .npmrc                        # npm源配置文件
├── .prettierrc                   # Prettier插件的格式化配置文件
├── .stylelintrc                  # stylelint的格式化检测配置文件，需配合插件和npm包
├── package.json
├── README.md
├── san.config.js                 # san-cli配置
├── stylelint.config.js           # stylelint配置
└── yarn.lock                     # yarn版本锁定
```

## 本地开发

安装依赖。

```bash
$ yarn install
```

> 如果网络状况不佳，可以使用 [tyarn](https://www.npmjs.com/package/tyarn) 进行加速

```bash
$ yarn run start
```

启动完成后会自动打开浏览器访问 [http://localhost:8899](http://localhost:8899/)，接下来你可以修改代码进行业务开发了，我们内建了典型业务模板、常用业务组件、全局路由等等各种实用的功能辅助开发，你可以继续阅读和探索左侧的其他文档。

