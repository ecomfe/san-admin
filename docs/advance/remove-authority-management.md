---
title: 去除权限控制
lang: zh-CN
---
# 去除权限控制

当你要开发一个小系统，或一个完全不需要权限控制的，开放后台任意访问的管理面板。

## 去除路由监听 

改写`src/bootstrap/index.js`中的initRouter函数

改写前：
```js
function initRouter({router, store}) {
    // 监听路由
    router.listen((e, config) => {
        e.suspend();
        checkPermission(e).then(invalid => {
            e.resume();
            if (config) {
                updateMenu(store, config.rule);
                document.title = config.name;
            }
        });
    });

    checkPermission()
        .then(() => {
            if (router.locator.current === '/') {
                router.locator.redirect('/dashboard/analysis');
            }
            router.start();
        });
}
```

改写后：
```js
function initRouter({router, store}) {
    // 监听路由
    router.listen((e, config) => {
        e.suspend();
        if (config) {
            updateMenu(store, config.rule);
            document.title = config.name;
        }
    });

    if (router.locator.current === '/') {
        router.locator.redirect('/dashboard/analysis');
    }
    router.start();
}
```


### 路由注册

修改 `src/router/index.js`,  将静态路由配置 constantRouterMap 和 动态路由配置 asyncRouterMap 合并后直接 `router.add` 添加就行

代码如下：
```js
改写前
import {router} from 'san-router';
import {constantRouterMap} from '@/config/routes';

export const addRoute = (item) => {
    if (item.children) {
        item.children.forEach(child => {
            router.add({
                target: '#content',
                parent: item,
                ...child
            });
        });
    }
    else {
        router.add({
            target: '#content',
            ...item
        });
    }
};

constantRouterMap.forEach(item => {
    addRoute(item);
});

export default router;
```

```js
// 改写后
import {router} from 'san-router';
import {constantRouterMap, asyncRouterMap} from '@/config/routes';

export const addRoute = (item) => {
    if (item.children) {
        item.children.forEach(child => {
            router.add({
                target: '#content',
                parent: item,
                ...child
            });
        });
    }
    else {
        router.add({
            target: '#content',
            ...item
        });
    }
};

const routes = constantRouterMap.concat(asyncRouterMap);
routes.concat(asyncRouterMap).forEach(item => {
    addRoute(item);
});

export default router;
```

### 菜单生成

没有权限的系统，`src/layouts/BasicLayout.san` 菜单直接引用 去除掉 rule为'/'的情况下 asyncRouterMap 即可

代码如下：
```js
import { asyncRouterMap } from '@/config/router.config.js'`

// ...

initData() {
    return {
        routes: asyncRouterMap,
       //  ...
    }
}
```

::: tip
记得删除 `routes: 'permission.routes'`
:::
