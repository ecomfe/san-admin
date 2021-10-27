import Mock from 'mockjs2';
import {builder, getQueryParameters} from '../util';

const totalCount = 5701;

const titles = [
    'Alipay',
    'Angular',
    'Santd',
    'San Admin',
    'Bootstrap',
    'React',
    'Vue',
    'Webpack',
];

const avatars = [
    'https://b.bdstatic.com/searchbox/icms/searchbox/img/alipay.png', // Alipay
    'https://b.bdstatic.com/searchbox/icms/searchbox/img/angular.png', // Angular
    'https://b.bdstatic.com/searchbox/icms/searchbox/img/angular.png', // Ant Design
    'https://b.bdstatic.com/searchbox/icms/searchbox/img/antDesign.png', // Ant Design Pro
    'https://b.bdstatic.com/searchbox/icms/searchbox/img/bootstrp.png', // Bootstrap
    'https://b.bdstatic.com/searchbox/icms/searchbox/img/react.png', // React
    'https://b.bdstatic.com/searchbox/icms/searchbox/img/vue.png', // Vue
    'https://b.bdstatic.com/searchbox/icms/searchbox/img/angular.png', // Angular
    'https://b.bdstatic.com/searchbox/icms/searchbox/img/webpack.png', // Webpack
];

const desc = [
    '生命是可以延续的，你可以做个好人',
    '成功乃是失败之母',
    '坚持就是胜利',
    '婀娜多姿',
    '好事多磨',
];

const user = [
    '付小小',
    '曲丽丽',
    '林东东',
    '周星星',
    '吴加好',
    '朱偏右',
    '鱼酱',
    '乐哥',
    '谭小仪',
    '仲尼',
];

let sourceData = [];

function fakeList(count) {
    const list = [];
    for (let i = 0; i < count; i += 1) {
        list.push({
            id: `fake-list-${i}`,
            owner: user[i % 10],
            title: titles[i % 8],
            avatar: avatars[i % 8],
            cover: '',
            status: ['active', 'exception'][i % 2],
            percent: Math.ceil(Math.random() * 50) + 50,
            logo: avatars[i % 8],
            href: 'https://ecomfe.github.io/santd',
            updatedAt: new Date(new Date().getTime() - 1000 * 60 * 60 * 2 * i).getTime(),
            createdAt: new Date(new Date().getTime() - 1000 * 60 * 60 * 2 * i).getTime(),
            subDescription: desc[i % 5],
            description:
          '在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的组件会被抽离成一套标准规范。',
            activeUser: Math.ceil(Math.random() * 100000) + 100000,
            newUser: Math.ceil(Math.random() * 1000) + 1000,
            star: Math.ceil(Math.random() * 100) + 100,
            like: Math.ceil(Math.random() * 100) + 100,
            message: Math.ceil(Math.random() * 10) + 10,
            content:
          '段落示意：提供跨越设计与开发的体验解决方案。',
        });
    }
    return list;
}

function getFakeList(options) {
    const params = getQueryParameters(options);
    const count = params.count * 1 || 20;
    const result = fakeList(count);
    sourceData = result;
    return builder(result);
}

function serverList(options) {
    const params = getQueryParameters(options);

    const result = [];
    const pageNo = parseInt(params.pageNo);
    const pageSize = parseInt(params.pageSize);
    const totalPage = Math.ceil(totalCount / pageSize);
    const key = (pageNo - 1) * pageSize;
    const next = (pageNo >= totalPage ? (totalCount % pageSize) : pageSize) + 1;

    for (let i = 1; i < next; i++) {
        const tmpKey = key + i;
        result.push({
            key: tmpKey,
            id: tmpKey,
            no: 'No ' + tmpKey,
            description: '这是一段描述',
            callNo: Mock.mock('@integer(1, 999)'),
            status: Mock.mock('@integer(0, 3)'),
            updatedAt: Mock.mock('@datetime'),
            editable: false
        });
    }

    return builder({
        pageSize: pageSize,
        pageNo: pageNo,
        totalCount: totalCount,
        totalPage: totalPage,
        data: result
    });
};

Mock.mock(/\/api\/rule/, 'get', serverList);
Mock.mock(/\/api\/fake_list/, 'get', getFakeList);
