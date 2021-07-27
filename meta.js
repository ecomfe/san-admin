const fs = require('fs');
const path = require('path');

module.exports = {
    delimiters: ['{%=', '%}'],
    complete(data, {chalk, logger}) {
        const {tpl, destDirName} = data;

        if (tpl === 'simple') {
            const simple = fs.readFileSync(path.join(destDirName, '/src/config/simple-routes.js'), 'utf-8');
            fs.writeFileSync(path.join(destDirName, '/src/config/routes.js'), simple);
        }
        console.log(
            logger.boxen(
                `        San CLI
Start with ${chalk.bold('yarn/npm start')}`,
                {padding: 1, borderStyle: 'round'}
            )
        );

        fs.unlinkSync(path.join(destDirName, '/src/config/simple-routes.js'));
    },
    helpers: {
        /* eslint-disable fecs-camelcase */
        if_or(v1, v2, options) {
            /* eslint-enable fecs-camelcase */
            if (v1 || v2) {
                return options.fn(this);
            }
            return options.inverse(this);
        }
    },
    filters: {
        'doc/**': '1',
        'src/pages/list/**': 'tpl === "simple"',
        'src/pages/form/**': 'tpl === "simple"',
        'src/pages/exception/**': 'tpl === "simple"'
    },
    prompts: {
        tpl: {
            type: 'list',
            message: 'Select the templete type (Use arrow keys)',
            choices: [
                {
                    title: 'simple',
                    value: 'simple'
                },
                {
                    title: 'complete',
                    value: 'complete'
                }
            ]
        },
    }
};