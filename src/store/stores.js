// 获取store modules下面所有的文件
const modulesFiles = require.context('./modules/', false, /\.js$/);
const modules = modulesFiles.keys().reduce((modules, modulePath) => {
    const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1');
    const value = modulesFiles(modulePath);
    modules[moduleName] = value[moduleName];
    return modules;
}, {});

// 获取store modules下面所有的文件
const viewsFiles = require.context('../pages/', true, /model.js$/);
const views = viewsFiles.keys().reduce((modules, modulePath) => {
    let moduleName = modulePath.replace(/\.\/(.*)\/model\.js$/, '$1');
    moduleName = moduleName.split('/')[moduleName.split('/').length - 1];
    const value = viewsFiles(modulePath);
    modules[moduleName] = value.default;
    return modules;
}, {});

export default {
    ...modules,
    ...views
};






