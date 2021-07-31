const Welcome = () => import('/src/pages/welcome/index.san');

const routes = [
    {
        rule: '/',
        hideInMenu: true,
        Component: Welcome,
        name: '欢迎',
        icon: 'smile',
        root: '首页',
    },
    {
        rule: '/welcome',
        Component: Welcome,
        name: '欢迎',
        icon: 'smile',
        root: '首页',
    }
];

export default routes;
