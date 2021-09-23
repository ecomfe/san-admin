/*eslint-disable*/
const path = require('path');
const webpack = require('webpack');
const createThemeColorReplacerPlugin = require('./config/themePluginConfig.js');

// 静态文件域名
const CDN = 'https://s.bdstatic.com/';
const resolve = pathname => path.resolve(__dirname, pathname);

const outputDir = 'dist';
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
            filename: 'index.html',
            chunks: ['vendors', 'commons', 'index']
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
    },

    chainWebpack: config => {
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
        
        // 取消 san-cli4.0 内置高版本(1.3.2) html-loader 压缩功能
        // 原因是压缩后的 template 中的自闭合标签不能被 san 识别: https://github.com/ecomfe/san-loader#template
        config.module.rule('html').uses
            .store.get('html')
            .store.delete('options')
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

    sourceMap: isProduction
};
