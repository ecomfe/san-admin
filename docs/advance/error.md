---
title: 错误处理
lang: zh-CN
---
# 错误处理

在用户使用过程中，可能遇到各种异常情况，比如页面404，申请结果失败，请求的返回异常等等，这篇文档会按照报错形式的不同，分别介绍下相应的处理建议。

## 页面级报错 

### 应用场景一

- 路由直接引导到报错页面，比如你输入的网址没有匹配到任何页面，可以由路由引导到预设的 404 页面。
- 代码控制跳转到报错页面，比如根据请求返回的数据，将没有权限的用户引导到 403 页面。

### 实现

针对页面级的报错，我们提供了两类页面供你选择，可以很方便地实现一个报错页面：

* Exception 异常页，目前有 [404](https://github.com/ecomfe/san-admin/blob/master/src/pages/exception/404.san)，[403](https://github.com/ecomfe/san-admin/blob/master/src/pages/exception/403.san)，[500](https://github.com/ecomfe/san-admin/blob/master/src/pages/exception/500.san)三种错误类型页面可以选择。
* Result 结果页，目前有[成功页](https://github.com/ecomfe/san-admin/blob/master/src/pages/result/success/index.san)，[失败页](https://github.com/ecomfe/san-admin/blob/master/src/pages/result/fail/index.san)两种页面可以选择，也可自定义文案等内容。

如 403 页面：

```html
<template>
    <s-result
        status="403"
        title="403"
        subTitle="Sorry, you don't have access to this page."
    >
        <s-button type="primary" on-click="goBack" slot="extra">Back Home</s-button>
    </s-result>
</template>

<script>
import {Result, Button} from 'santd';
import {router} from 'san-router';

export default {
    components: {
        's-result': Result,
        's-button': Button
    },
    goBack() {
        router.locator.redirect('/');
    }
};
</script>
```

### 应用场景二

- 表单项校验报错。
- 操作反馈。
- 网络请求错误。

### 实现

关于表单项报错，请参考 [San Admin Form](https://github.com/ecomfe/san-admin/tree/master/src/pages/form) 中的实现。对于操作反馈和网络请求错误提示，有一些组件可能会用到：

* [Alert](https://ecomfe.github.io/santd/#/components/alert)
* [Message](https://ecomfe.github.io/santd/#/components/message)
* [Notification](https://ecomfe.github.io/santd/#/components/notification)

在单页应用中，最常见的需求就是处理网络错误信息，我们可以利用 message 和 notification 来吐出响应的接口/网络/业务数据错误。

`San Admin`中 封装了 [request.js](https://github.com/ecomfe/san-admin/blob/master/src/utils/request.js) 统一处理请求，提供了加载响应拦截器，你如果有需求可以在响应拦截器中使用[Notification](https://ecomfe.github.io/santd/#/components/notification)等组件来添加默认的错误处理以及提示。

```js
/**
 * 加载 axios 拦截器
 * @param interceptors
 * @param options
 */
function loadInterceptors(interceptors, options) {
    const {request, response} = interceptors;

    request.forEach(item => {
        let {onFulfilled, onRejected} = item;
        if (!onFulfilled || typeof onFulfilled !== 'function') {
            onFulfilled = config => config;
        }
        if (!onRejected || typeof onRejected !== 'function') {
            onRejected = error => Promise.reject(error);
        }
        axios.interceptors.request.use(
            config => onFulfilled(config, options),
            error => onRejected(error, options)
        );
    });

    // 加载响应拦截器
    response.forEach(item => {
        let {onFulfilled, onRejected} = item;
        if (!onFulfilled || typeof onFulfilled !== 'function') {
            onFulfilled = response => response;
        }
        if (!onRejected || typeof onRejected !== 'function') {
            // 你可以在这里添加错误提示，根据具体错误类型，使用 Message 
            // 或者 Notification 将错误展现出来
            onRejected = error => Promise.reject(error);
        }
        axios.interceptors.response.use(
            response => onFulfilled(response, options),
            error => onRejected(error, options)
        );
    });
}
```

