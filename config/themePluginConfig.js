const ThemeColorReplacer = require('webpack-theme-color-replacer');
const generate = require('@ant-design/colors').generate;
// 默认主题色
const mainThemeColor = '#1890ff';

const getAntdSerials = (color) => {
    const lightens = new Array(9).fill().map((t, i) => {
        return ThemeColorReplacer.varyColor.lighten(color, i / 10);
    });
    const colorPalettes = generate(color);
    const rgb = ThemeColorReplacer.varyColor.toNum3(color.replace('#', '')).join(',');
    return lightens.concat(colorPalettes).concat(rgb);
};

const themePluginOption = {
    fileName: 'css/theme-colors-[contenthash:8].css',
    matchColors: getAntdSerials(mainThemeColor), // 主色系列
};

const createThemeColorReplacerPlugin = () => new ThemeColorReplacer(themePluginOption);

module.exports = createThemeColorReplacerPlugin;
