import request from '@/utils/request';

export async function queryFakeList(params) {
    return request({
        url: '/api/fake_list',
        params,
    });
}

export async function removeFakeList(params) {
    const { count = 5, ...restParams } = params;
    return request({
        url: '/api/basic/delete',
        method: 'POST',
        params: {
            count,
        },
        data: { ...restParams, method: 'delete' },
    });
}

export async function addFakeList(params) {
    const { count = 5, ...restParams } = params;
    return request({
        url: '/api/basic/add',
        method: 'POST',
        params: {
            count,
        },
        data: { ...restParams, method: 'post' },
    });
}

export async function updateFakeList(params) {
    const { count = 5, ...restParams } = params;
    return request({
        url: '/api/basic/update',
        method: 'POST',
        params: {
            count,
        },
        data: { ...restParams, method: 'update' },
    });
}
