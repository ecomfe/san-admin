import request from '@/utils/request';

export async function fakeSubmitForm(params) {
    return request({
        url: '/api/forms',
        method: 'POST',
        data: params
    });
}