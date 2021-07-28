/**
 * @file 基于express中间件，用于保存页面配置更新
 *
 * // 默认项目配置
 *
 * module.exports = {
 *     navTheme: 'dark',
 *     primaryColor: '#1890ff',
 *     layout: 'side',
 *     contentWidth: 'Fluid',
 *     fixedHeader: false,
 *     fixSiderbar: true,
 *     splitMenus: false,
 *     colorWeak: false,
 *     sidebarWitdh: 208
 * };
*/

const path = require('path');
const fs = require('fs');
const postUrl = '/___updating_theme_setting___';
const settingPath = path.resolve(__dirname, '../src/config/defaultSetting.js');

module.exports = (app) => {
    app.use(require('express').urlencoded({
        extended: true
    }));

    app.post(postUrl, (req, res) => {
        try {
            const {settings} = req.body || {};
            let settingContent = JSON.stringify(JSON.parse(settings), null, 2);
            settingContent =
`
module.exports = ${settingContent};
`;

            fs.writeFileSync(settingPath, settingContent);

            res.json({
                errno: 0,
                settings
            });
        }
        catch (e) {
            res.json({
                errno: 1,
                errmsg: e
            });
        }
    });
};
