import Mock from 'mockjs2';
import { builder, getQueryParameters } from '../util';

const totalCount = 5701;

const serverList = (options) => {
    const parameters = getQueryParameters(options);

    const result = [];
    const pageNo = parseInt(parameters.pageNo);
    const pageSize = parseInt(parameters.pageSize);
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

const projects = () => {
    return builder({
        'data': [{
            id: 1,
            cover: 'https://b.bdstatic.com/searchbox/icms/other/img/san-admin/alipay.png',
            title: 'Alipay',
            description: '付出总有收获',
            status: 1,
            updatedAt: '2018-07-26 00:00:00'
        },
        {
            id: 2,
            cover: 'https://b.bdstatic.com/searchbox/icms/other/img/san-admin/angular.png',
            title: 'Angular',
            description: '失败乃是成功之母',
            status: 1,
            updatedAt: '2018-07-26 00:00:00'
        },
        {
            id: 3,
            cover: 'https://b.bdstatic.com/searchbox/icms/other/img/san-admin/antDesign.png',
            title: 'Ant Design',
            description: '书山有路勤为径',
            status: 1,
            updatedAt: '2018-07-26 00:00:00'
        },
        {
            id: 4,
            cover: 'https://b.bdstatic.com/searchbox/icms/other/img/san-admin/antDesign.png',
            title: 'Ant Design Pro',
            description: '一花一木一世界',
            status: 1,
            updatedAt: '2018-07-26 00:00:00'
        },
        {
            id: 5,
            cover: 'https://b.bdstatic.com/searchbox/icms/other/img/san-admin/bootstrap.png',
            title: 'Bootstrap',
            description: '青青河边草',
            status: 1,
            updatedAt: '2018-07-26 00:00:00'
        },
        {
            id: 6,
            cover: 'https://b.bdstatic.com/searchbox/icms/other/img/san-admin/vue.png',
            title: 'Vue',
            description: 'Vue开发工具',
            status: 1,
            updatedAt: '2018-07-26 00:00:00'
        }
        ],
        'pageSize': 10,
        'pageNo': 0,
        'totalPage': 6,
        'totalCount': 53
    });
};

const teams = () => {
    return builder([{
        id: 1,
        name: '烈火',
        avatar: 'https://b.bdstatic.com/searchbox/icms/other/img/sanadmin/avatar0.png'
    },
    {
        id: 2,
        name: '金木水土',
        avatar: 'https://b.bdstatic.com/searchbox/icms/other/img/sanadmin/avatar0.png'
    },
    {
        id: 1,
        name: '顶呱呱',
        avatar: 'https://b.bdstatic.com/searchbox/icms/other/img/sanadmin/avatar0.png'
    },
    {
        id: 1,
        name: '中二少女团',
        avatar: 'https://b.bdstatic.com/searchbox/icms/other/img/sanadmin/avatar0.png'
    },
    {
        id: 1,
        name: '谁是谁的谁',
        avatar: 'https://b.bdstatic.com/searchbox/icms/other/img/sanadmin/avatar0.png'
    }
    ]);
};

Mock.mock(/\/service/, 'get', serverList);
Mock.mock(/\/list\/search\/projects/, 'get', projects);
Mock.mock(/\/workplace\/teams/, 'get', teams);
