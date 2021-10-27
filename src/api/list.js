import request from '@/utils/request';

/** 获取列表数据 GET /api/fake_list */
export async function queryFakeList(params) {
    return request({
        url: '/api/fake_list',
        method: 'GET',
        params,
    });
}

/** 删除特定数据 GET /api/basic/delete */
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

/** 添加列表数据 GET /api/basic/add */
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

/** 更新列表数据 GET /api/basic/update */
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

/** 获取规则列表 GET /api/rule */
export async function rule(params) {
    return request({
        url: '/api/rule',
        method: 'GET',
        params
    });
}

/** 新建规则 PUT /api/rule */
export async function updateRule(data, options) {
    return request({
        url: '/api/rule',
        data,
        method: 'PUT',
        ...(options || {}),
    });
}

/** 新建规则 POST /api/rule */
export async function addRule(data, options) {
    return request({
        url: '/api/rule',
        data,
        method: 'POST',
        ...(options || {}),
    });
}

/** 删除规则 DELETE /api/rule */
export async function removeRule(data, options) {
    return request({
        url: '/api/rule',
        data,
        method: 'DELETE',
        ...(options || {}),
    });
}
