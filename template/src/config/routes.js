const Welcome = () => import('/src/pages/welcome/index.san');

const routes = [
    {
        rule: '/',
        hideInMenu: true,
        Component: Welcome,
        name: '欢迎',
        icon: 'smile'
    },
    {
        rule: '/welcome',
        Component: Welcome,
        name: '欢迎',
        icon: 'smile',
        root: '首页',
    },
    {
        rule: '/form',
        name: '表单页',
        icon: 'form',
        children: [
            {
                rule: '/form/basic-form',
                name: 'basic-form',
                Component: () => import('/src/pages/form/basic-form'),
                name: '基础表单',
                root: '首页',
            },
            {
                rule: '/form/step-form',
                name: 'step-form',
                Component: () => import('/src/pages/form/step-form'),
                name: '分步表单',
                root: '首页',
            },
            {
                rule: '/form/advanced-form',
                name: 'advanced-form',
                Component: () => import('/src/pages/form/advanced-form'),
                name: '高级表单',
                root: '首页',
            },
        ]
    },
    {
        rule: '/list',
        name: '列表页',
        icon: 'table',
        children: [
            {
                rule: '/list/table-list',
                name: 'table-list',
                name: '查询列表',
                Component: () => import('/src/pages/list/table-list'),
                root: '首页',
            },
            {
                rule: '/list/basic-list',
                Component: () => import('/src/pages/list/basic-list'),
                name: '标准列表',
                root: '首页',
            },
            {
                rule: '/list/card-list',
                Component: () => import('/src/pages/list/card-list'),
                name: '卡片列表',
                root: '首页',
            }
        ]
    },
    {
        rule: '/exception',
        name: '异常页',
        icon: 'warning',
        children: [
            {
                rule: '/exception/403',
                Component: () => import('/src/pages/exception/403.san'),
                name: '403',
                root: '首页',
            },
            {
                rule: '/exception/404',
                name: '404',
                Component: () => import('/src/pages/exception/404.san'),
                root: '首页',
            },
            {
                rule: '/exception/500',
                name: '500',
                Component: () => import('/src/pages/exception/500.san'),
                root: '首页',
            }
        ]
    },
    {
        rule: '/result',
        name: '结果页',
        icon: 'check-circle',
        children: [
            {
                rule: '/result/success',
                Component: () => import('/src/pages/result/success'),
                name: '成功页',
                root: '首页',
            },
            {
                rule: '/result/fail',
                name: '失败页',
                Component: () => import('/src/pages/result/fail'),
                root: '首页',
            },
        ]
    },
];

export default routes;
