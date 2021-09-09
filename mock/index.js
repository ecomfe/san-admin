const fs = require('fs');
const path = require('path');
const Mock = require('mockjs');
const JSON5 = require('json5');
const glob = require('glob');

const getUserInfo = require('./user');
const {getTableList} = require('./table');

const filesPath = glob.sync(path.resolve(__dirname, '../src/pages/**/*/_mock.js'));

module.exports = function(app) {
    // 获取用户信息
    app.get('/user/info', (req, res) => {
        res.json(getUserInfo());
    });

    app.post('/api/forms', (req, res) => {
        res.json({message: 'ok'});
    });

    app.get('/table/list', (req, res) => {
        res.json(getTableList());
    });

    filesPath.forEach(file => {
        require(file)(app);
    });
};
