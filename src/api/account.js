import request from '@/utils/request';

export async function getTeams(params) {
    return request({
        url: '/workplace/teams',
        method: 'GET',
        params,
    });
};

export async function getArticleList(params) {
    return request({
        url: '/list/article',
        method: 'GET',
        params,
    });
};
