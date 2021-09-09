const responseBody = {
    message: '',
    timestamp: 0,
    result: null,
    errno: 0
};

const builder = (data, message, errno = 0, headers = {}) => {
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

module.exports = {
    responseBody,
    builder
};
