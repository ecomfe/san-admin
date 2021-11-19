---
title: 和服务端交互
lang: zh-CN
---
# 和服务端交互

San Admin 是一套基于 San 技术栈的单页面应用，我们提供的是前端代码和 `mock` 模拟数据的开发模式，
通过 API 的形式和任何技术栈的服务端应用一起工作。下面将简单介绍和服务端交互的基本写法。

## 前端请求流程

在 San Admin 中，一个完整的前端 UI 交互到服务端处理流程是这样的：

1. UI 组件交互操作；
2. 调用统一管理的 api service 请求函数；
3. 使用封装的 request.js 发送请求；
4. 获取服务端返回；
5. 更新 data。

从上面的流程可以看出，为了方便管理维护，统一的请求处理都放在 `@/src/services` 文件夹中，并且一般按照维度进行拆分文件，如：

```
services/
  api.js
  index.js
  user.js
  list.js
  ...
```

其中请求的路径统一放在 `api.js`中，如：

```js
module.exports = {
    USER_INFO: '/user/info',
    TABLE_LIST: '/table/list'
};
```

例如在 `services/user.js` 中的一个请求用户信息的例子：

```js
import {request} from '@/utils/request';
import {USER_INFO} from '@/services/api';

/**
 * 获取用户信息
 * @returns {Promise<AxiosResponse<T>>}
 */
export async function getUserInfo() {
    return request({
        url: USER_INFO,
        method: 'GET'
    });
};

export default {
    getUserInfo
};
```

在`index.js`中又将请求方法做了集中处理：

```js
import userService from './user';
import listService from './list';

export {
    userService,
    listService
};
```

如果想要使用时，只需直接从 `index.js` 中引入即可：

```js
import {userService} from '@/services';
const { getUserInfo } = userService;

export default {
    async getUserInfo() {
        const res = await getUserInfo();
        // ...
    }
};
```

## request 方法

`@/src/utils/request.js` 是基于 [axios](https://github.com/axios/axios) 的封装，便于统一处理 POST，GET 等请求参数，请求头，以及错误提示信息等。具体可以参看 [request.js](https://github.com/ecomfe/san-admin/blob/master/src/utils/request.js)。 它封装了全局 request 拦截器、response 拦截器、统一的错误处理、检查认证信息设置等。

## Mock

Mock 数据是前端开发过程中必不可少的一环，是分离前后端开发的关键链路。通过预先跟服务器端约定好的接口，模拟请求数据甚至逻辑，能够让前端开发独立自主，不会被服务端的开发进程所阻塞。

### 如何新增 mock 接口

如果你想添加 mock 数据，只要在根目录下找到 mock 文件，添加对应的接口，对其进行拦截和模拟数据。

例如在 mock 文件夹内新建 `userInfo.json5` 文件模拟用户信息的数据：

```json
{
    errNo: 0,
    data: {
        id: "@id", //获取随机的id对象
        cname: "@cname()", //随机生成中文名称
        date: "@date", //随机生成日期
        avatar: "@image('20*20','red','#fff','avatar')", //生成图片且含参数
        description: "@paragraph()", //生成内容描述
        ip: "@ip", //IP地址
        email: "@email()", //email
    }
}
```

然后在 `mock/index.js` 中设置拦截操作，这样如果接口匹配到 mock，则会优先使用 mock 进行响应，如：

```js
module.exports = function(app) {
    app.get('/user/info', (req, res) => {
        let json = getJsonFile('./userInfo.json5');
        res.json(Mock.mock(json));
    });
};
```

