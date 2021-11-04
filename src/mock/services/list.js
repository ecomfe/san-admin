import Mock from 'mockjs2';
import {builder, getQueryParameters} from '../util';

const totalCount = 5701;

const titles = [
    'Webpack',
    'Alipay',
    'Angular',
    'Santd',
    'San Admin',
    'Bootstrap',
    'React',
    'Vue'
];

const avatars = [
    'https://b.bdstatic.com/searchbox/icms/searchbox/img/alipay.png', // Alipay
    'https://b.bdstatic.com/searchbox/icms/searchbox/img/angular.png', // Angular
    'https://b.bdstatic.com/searchbox/icms/searchbox/img/angular.png', // Ant Design
    'https://b.bdstatic.com/searchbox/icms/searchbox/img/antDesign.png', // Ant Design Pro
    'https://b.bdstatic.com/searchbox/icms/searchbox/img/bootstrap.png', // Bootstrap
    'https://b.bdstatic.com/searchbox/icms/searchbox/img/react.png', // React
    'https://b.bdstatic.com/searchbox/icms/searchbox/img/vue.png', // Vue
    'https://b.bdstatic.com/searchbox/icms/searchbox/img/angular.png', // Angular
    'https://b.bdstatic.com/searchbox/icms/searchbox/img/webpack.png', // Webpack
];

const desc = [
    '失败乃是成功之母',
    '前端工程化是前端开发领域非常重要的一环',
    '白日依山尽',
    '天使之团',
    '谁是谁的谁',
];

const user = [
    '张力',
    '王小狗',
    '陈天桥',
    '周展',
    '星星',
    '黄马褂',
    '鱼头',
    'F4',
    '林肯',
    '王二麻子',
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
          '前端工程化是前端开发领域非常重要的一环',
            activeUser: Math.ceil(Math.random() * 100000) + 100000,
            newUser: Math.ceil(Math.random() * 1000) + 1000,
            star: Math.ceil(Math.random() * 100) + 100,
            like: Math.ceil(Math.random() * 100) + 100,
            message: Math.ceil(Math.random() * 10) + 10,
            content:
          '提供跨段解决方案。',
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
            description: '给它写段描述吧',
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
