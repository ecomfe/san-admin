import {request} from '@/utils/request';
import {TABLE_LIST} from '@/services/api';

/**
 * 获取列表数据
 * @returns {Promise<AxiosResponse<T>>}
 */
export async function getTableList(params) {
    return request({
        url: TABLE_LIST,
        method: 'GET',
        params
    });
};

export default {
    getTableList
};