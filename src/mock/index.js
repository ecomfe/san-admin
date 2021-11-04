import { isIE } from '@/utils/util';
// 这里主要借鉴了ant-design-vue-pro项目的实现方式来实现数据mock
// 判断环境不是 prod 或者 preview 是 true 时，加载 mock 服务
if (process.env.NODE_ENV !== 'production' || process.env.SAN_APP_PREVIEW === 'true') {
    if (isIE()) {
        // eslint-disable-next-line no-console
        console.error('[San Admin] ERROR: `mockjs` NOT SUPPORT `IE` PLEASE DO NOT USE IN `production` ENV.');
    }
    // 使用同步加载依赖
    // 防止 vuex 中的 GetInfo 早于 mock 运行，导致无法 mock 请求返回结果
    // eslint-disable-next-line no-console
    console.log('[San Admin] mock mounting');
    const Mock = require('mockjs2');
    require('./services/user');
    require('./services/account');
    require('./services/article');
    require('./services/list');

    Mock.setup({
        timeout: 800 // setter delay time
    });
    // eslint-disable-next-line no-console
    console.log('[San Admin] mock mounted');
}
