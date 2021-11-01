const path = require('path');
const webpack = require('webpack');
const createThemeColorReplacerPlugin = require('./config/themePluginConfig.js');

const resolve = pathname => path.resolve(__dirname, pathname);

const outputDir = 'dist';
const isProduction = process.env.NODE_ENV === 'production';
const { proxy, theme } = require('./config');
const updateThemeSetting = require('./config/updateSetting');

module.exports = {
    assetsDir: 'static',
    publicPath: '/',
    outputDir,
    filenameHashing: isProduction,
    pages: {
        index: {
            title: 'San Admin',
            entry: './src/main.js',
            // eslint-plugin-san 会处理全局所有的template字段里面的内容，所以需要跳过eslint-plugin-san规则
            // eslint-disable-next-line san/no-multiple-template-root
            template: './public/index.ejs',
            filename: 'index.html',
            chunks: ['vendors', 'commons', 'index']
        }
    },

    css: {
        loaderOptions: {
            less: {
                modifyVars: {
                    'primary-color': theme['primary-color']
                },
                javascriptEnabled: true
            }
        },
        sourceMap: isProduction,
        cssPreprocessor: 'less'
    },

    alias: {
        '@': resolve('src'),
        '@store': resolve('src/lib/Store.js')
    },

    devServer: {
        before: (app) => {
            updateThemeSetting(app);
        },
        contentBase: `${outputDir}/`,
        proxy,
        watchOptions: {
            poll: true
        }
    },

    loaderOptions: {
        babel: {
            plugins: [
                ['import', {
                    libraryName: 'santd',
                    libraryDirectory: 'es',
                    style: true
                }],
                '@babel/plugin-transform-modules-commonjs'
            ]
        },
        html: {
            minimize: {
                minifyCSS: false,
                caseSensitive: true,
                collapseBooleanAttributes: false
            }
        }
    },

    chainWebpack: config => {
        if (isProduction) {
            config.output
                .publicPath('/san-admin/');
        }

        config.plugin('contextReplacement')
            .use(new webpack.ContextReplacementPlugin(
                /dayjs[\/\\]locale$/,
                /zh-cn|en/
            ));

        config.plugin('definePlugin')
            .use(new webpack.DefinePlugin({
                'process.env': {
                    NODE_ENV: JSON.stringify(process.env.NODE_ENV),
                    MOCK: JSON.stringify(process.env.MOCK)
                }
            }));

        config.plugin('createThemeColorReplacerPlugin')
            .use(createThemeColorReplacerPlugin());
    },

    splitChunks: {
        chunks: 'all',
        name: false,
        cacheGroups: {
            vendors: {
                name: 'vendors',
                test: /[\\/]node_modules[\\/]/,
                priority: 10
            },
            commons: {
                name: 'commons',
                test: resolve('src/components'),
                minChunks: 2,
                priority: 5,
                reuseExistingChunk: true
            }
        }
    },
};
