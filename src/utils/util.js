/**
 * 此方法用来解析hash, 将hash转换成数组类型，例如: /welcome/index 转换成 ['/welcome', 'welcome/index']
 *
 * @param {string} path /welcome/index
 * @returns {array | string}  只有path是'/'的时候，返回的才是string
 */

export const parseOpenKeys = (path) => {
    if (!path || path === '/') {
        return ['/'];
    }
    let list = path.split('/');
    let arr = [];
    let str = '';
    for (let i = 1; i < list.length; i++) {
        str += `/${list[i]}`;
        arr.push(str);
    }
    return arr;
};
