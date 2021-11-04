const responseBody = {
    message: '',
    timestamp: 0,
    result: null,
    errno: 0
};

export const builder = (data, message, errno = 0, headers = {}) => {
    responseBody.result = data;
    if (message !== undefined && message !== null) {
        responseBody.message = message;
    }
    if (errno !== undefined && errno !== 0) {
        responseBody.errno = errno;
        responseBody._status = errno;
    }
    if (headers !== null && typeof headers === 'object' && Object.keys(headers).length > 0) {
        responseBody._headers = headers;
    }
    responseBody.timestamp = new Date().getTime();
    return responseBody;
};

export const getQueryParameters = (options) => {
    const url = options.url;
    const search = url.split('?')[1];
    if (!search) {
        return {};
    }
    return JSON.parse('{"' + decodeURIComponent(search)
        .replace(/"/g, '\\"')
        .replace(/&/g, '","')
        .replace(/=/g, '":"') + '"}');
};

export const getBody = (options) => {
    return options.body && JSON.parse(options.body);
};
