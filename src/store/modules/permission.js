import {builder} from 'san-update';
import { asyncRouterMap, constantRouterMap } from '@/config/routes';
import cloneDeep from 'lodash.clonedeep';

/**
 * 过滤账户是否拥有某一个权限，并将菜单从加载列表移除
 *
 * @param permission
 * @param route
 * @returns {boolean}
 */
function hasPermission(permission, route) {
    if (route.meta && route.meta.permission) {
        let flag = false;
        for (let i = 0, len = permission.length; i < len; i++) {
            flag = route.meta.permission.includes(permission[i]);
            if (flag) {
                return true;
            }
        }
        return false;
    }
    return true;
}

/**
 * 单账户多角色时，使用该方法可过滤角色不存在的菜单
 *
 * @param roles
 * @param route
 * @returns {*}
 */
function hasRole(roles, route) {
    if (route.meta && route.meta.roles) {
        return route.meta.roles.includes(roles.id);
    } else {
        return true;
    }
}

function filterAsyncRouter(routerMap, roles) {
    const accessedRouters = routerMap.filter(route => {
        if (hasPermission(roles.permissionList, route)) {
            if (route.children && route.children.length) {
                route.children = filterAsyncRouter(route.children, roles);
            }
            return true;
        }
        return false;
    });
    return accessedRouters;
}

export const permission = {
    initData: () => ({
        routes: constantRouterMap,
        addRouters: []
    }),
    action: {
        ['permission:updateRouters'](data) {
            return builder().set('permission.routes', data);
        },

        ['permission:addRouters'](data) {
            return builder().set('permission.addRouters', data);
        },

        ['permission:generateRoutes'](data, {dispatch}) {
            return new Promise((resove, reject) => {
                const { roles } = data;
                const routerMap = cloneDeep(asyncRouterMap);
                const accessedRouters = filterAsyncRouter(routerMap, roles);

                dispatch('permission:updateRouters', routerMap);
                dispatch('permission:addRouters', accessedRouters);
                resove();
            });
        }
    }
};
