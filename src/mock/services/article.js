import Mock from 'mockjs2';
import { builder, getQueryParameters } from '../util';

const titles = [
    'Webpack',
    'Vue',
    'Alipay',
    'Angular',
    'Ant Design',
    'Ant Design Pro',
    'Bootstrap',
    'React'
];

const avatar = [
    'https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png',
    'https://gw.alipayobjects.com/zos/rmsportal/zOsKZmFRdUtvpqCImOVY.png',
    'https://gw.alipayobjects.com/zos/rmsportal/dURIMkkrRFpPgTuzkwnB.png',
    'https://gw.alipayobjects.com/zos/rmsportal/sfjbOqnsXXJgNCjCzDBL.png',
    'https://gw.alipayobjects.com/zos/rmsportal/siCrBXXhmvTQGWPNLBow.png'
];

const owner = [
    '王二小',
    '鲁迅的弟弟',
    '张三',
    '陈晓飞',
    '展展'
];

const description = '在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的组件会被抽离成一套标准规范。';
const href = 'https://ecomfe.github.io/santd/';

const article = (options) => {
    const queryParameters = getQueryParameters(options);
    // eslint-disable-next-line no-console
    console.log('queryParameters', queryParameters);
    if (queryParameters && !queryParameters.count) {
        queryParameters.count = 5;
    }
    const data = [];
    for (let i = 0; i < queryParameters.count; i++) {
        const tmpKey = i + 1;
        const num = parseInt(Math.random() * (4 + 1), 10);
        data.push({
            id: tmpKey,
            avatar: avatar[num],
            owner: owner[num],
            content: content,
            star: Mock.mock('@integer(1, 999)'),
            percent: Mock.mock('@integer(1, 999)'),
            like: Mock.mock('@integer(1, 999)'),
            message: Mock.mock('@integer(1, 999)'),
            description: description,
            href: href,
            title: titles[ i % 8 ],
            updatedAt: Mock.mock('@datetime'),
            members: [
                {
                    avatar: 'https://b.bdstatic.com/searchbox/icms/other/img/sanadmin/avatar0.png',
                    name: '陈晓飞',
                    id: 'member1'
                },
                {
                    avatar: 'https://b.bdstatic.com/searchbox/icms/other/img/sanadmin/avatar0.png',
                    name: '詹詹',
                    id: 'member2'
                },
                {
                    avatar: 'https://b.bdstatic.com/searchbox/icms/other/img/sanadmin/avatar0.png',
                    name: '章三',
                    id: 'member3'
                }
            ],
            activeUser: Math.ceil(Math.random() * 100000) + 100000,
            newUser: Math.ceil(Math.random() * 1000) + 1000,
        });
    }
    return builder(data);
};

Mock.mock(/\/list\/article/, 'get', article);
