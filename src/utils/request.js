import axios from 'axios';
import interceptors from '@/utils/axios-interceptors';
import {message} from 'santd';
import {router} from 'san-router';
// 跨域认证信息 header 名
const xsrfHeaderName = 'Authorization';

axios.defaults.timeout = 5000;
axios.defaults.withCredentials = true;
axios.defaults.xsrfHeaderName = xsrfHeaderName;
axios.defaults.xsrfCookieName = xsrfHeaderName;

/**
 * axios请求
 * @param url 请求地址
 * @param method {METHOD} http method
 * @param params 请求参数
 * @returns {Promise<AxiosResponse<T>>}
 */
async function request({url, method = 'GET', params = {}, config = {}}) {
    switch (method) {
        case 'GET':
            return axios.get(url, {params, ...config});
        case 'POST':
            return axios.post(url, params, config);
        default:
            return axios.get(url, {params, ...config});
    }
}

/**
 * 加载 axios 拦截器
 * @param interceptors
 * @param options
 */
function loadInterceptors(interceptors, options) {
    const {request, response} = interceptors;

    request.forEach(item => {
        let {onFulfilled, onRejected} = item;
        if (!onFulfilled || typeof onFulfilled !== 'function') {
            onFulfilled = config => config;
        }
        if (!onRejected || typeof onRejected !== 'function') {
            onRejected = error => Promise.reject(error);
        }
        axios.interceptors.request.use(
            config => onFulfilled(config, options),
            error => onRejected(error, options)
        );
    });

    // 加载响应拦截器
    response.forEach(item => {
        let {onFulfilled, onRejected} = item;
        if (!onFulfilled || typeof onFulfilled !== 'function') {
            onFulfilled = response => response;
        }
        if (!onRejected || typeof onRejected !== 'function') {
            onRejected = error => Promise.reject(error);
        }
        axios.interceptors.response.use(
            response => onFulfilled(response, options),
            error => onRejected(error, options)
        );
    });
}

loadInterceptors(interceptors, {message, router});

export default request;


