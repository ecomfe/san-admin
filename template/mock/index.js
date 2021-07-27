const fs = require('fs');
const path = require('path');
const Mock = require('mockjs');
const JSON5 = require('json5');
const glob = require('glob');


const filesPath = glob.sync(path.resolve(__dirname, '../src/pages/**/*/_mock.js'));

function getJsonFile(filePath) { // 读取json文件
    let json = fs.readFileSync(path.join(__dirname, filePath), 'utf-8'); // 读取指定json文件
    return JSON5.parse(json); // 解析并返回
}

module.exports = function(app) {
    app.get('/user/info', (req, res) => { // 发送http请求
        // 每次响应时读取mock可以随机生成的json文件
        // getJsonFile方法定义了如何读取json文件并解析成数据对象
        let json = getJsonFile('./userInfo.json5');
        res.json(Mock.mock(json));
    });

    app.post('/api/forms', (req, res) => {
        res.json({message: 'ok'});
    });

    app.get('/table/list', (req, res) => { // 发送http请求
        // 每次响应时读取mock可以随机生成的json文件
        // getJsonFile方法定义了如何读取json文件并解析成数据对象
        let json = getJsonFile('./dataInformation.json5');
        res.json(Mock.mock(json));
    });

    filesPath.forEach(file => {
        require(file)(app);
    });
};