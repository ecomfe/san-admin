/*eslint-disable*/
const path = require('path');
const webpack = require('webpack');
const createThemeColorReplacerPlugin = require('./config/themePluginConfig.js');

// 静态文件域名
const CDN = 'https://s.bdstatic.com/';
const resolve = pathname => path.resolve(__dirname, pathname);

const outputDir = 'output';
const isProduction = process.env.NODE_ENV === 'production';
const isMock = process.env.MOCK;

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
            template: './public/index.ejs',
            filename: 'index.html'
        }
    },

    css: {
        loaderOptions: {
            less: {
                modifyVars: {
                    "primary-color": theme['primary-color']
                },
                javascriptEnabled: true
            }
        },
        sourceMap: isProduction,
        cssPreprocessor: 'less'
    },

    alias: {
        '@': resolve('src'),
        '@assets': resolve('src/assets'),
        '@components': resolve('src/components'),
        '@store': resolve('src/lib/Store.js'),
        '@views': resolve('src/views'),
        '@lib': resolve('src/lib')
    },

    devServer: {
        before: (app) => {
            if (isMock) {
                require('./mock/index.js')(app);
            }
            updateThemeSetting(app);
        },
        contentBase: `${outputDir}/`,
        proxy
    },

    loaderOptions: {
        babel: {
            plugins: [
                ['import', {
                    libraryName: 'santd',
                    libraryDirectory: 'es',
                    style: true
                }]
            ]
        },
    },

    chainWebpack: config => {
        config.plugin('contextReplacement')
            .use(new webpack.ContextReplacementPlugin(
                /moment[\/\\]locale$/,
                /zh-cn/
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
        name: true,
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

    sourceMap: isProduction
};