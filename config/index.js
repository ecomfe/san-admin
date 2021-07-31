const proxy = require('./proxy');
const {SAN_APP_ENV} = process.env;

module.exports = {
    title: 'San Admin',
    hash: true,
    theme: {
        'primary-color': '#1890ff'
    },
    ignoreMomentLocale: true,
    proxy: proxy[SAN_APP_ENV || 'dev']
};
