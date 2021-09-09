import request from '@/utils/request';
import {USER_INFO} from '@/services/api';

/**
 * 获取用户信息
 * @returns {Promise<AxiosResponse<T>>}
 */
export async function getUserInfo() {
    return request({
        url: USER_INFO,
        method: 'GET'
    });
};

export default {
    getUserInfo
};
