const DEV_TARGET_URL = 'https://baidu.com';
const TEST_TARGET_URL = 'https://baidu.com';
const PRE_TARGET_URL = 'your pre url';

module.exports = {
    dev: {
        '/api/': {
            target: DEV_TARGET_URL,
            changeOrigin: true,
            pathRewrite: {
                '^': ''
            }
        }
    },
    test: {
        '/api/': {
            target: TEST_TARGET_URL,
            changeOrigin: true,
            pathRewrite: {
                '^': ''
            }
        }
    },
    pre: {
        '/api/': {
            target: PRE_TARGET_URL,
            changeOrigin: true,
            pathRewrite: {
                '^': ''
            }
        }
    }
};
