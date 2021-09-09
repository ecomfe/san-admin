const respComm = {
    onFulfilled(response, options) {
        const {data} = response;
        if (data.errno === 0) {
            return response.data;
        }
        return response;
    }
};

const reqCommon = {
    /**
   * 发送请求之前做些什么
   * @param config axios config
   * @param options 应用配置 包含: {router, store, message}
   * @returns {*}
   */
    onFulfilled(config, options) {
        return config;
    },
    /**
   * 请求出错时做点什么
   * @param error 错误对象
   * @param options 应用配置 包含:  {router, store, message}
   * @returns {Promise<never>}
   */
    onRejected(error, options) {
        const {message} = options;
        message.error(error.message);
        return Promise.reject(error);
    }
};

export default {
    request: [reqCommon], // 请求拦截
    response: [respComm] // 响应拦截
};
