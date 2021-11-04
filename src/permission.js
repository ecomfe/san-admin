import store from './store';
import {addRoute} from './router';
import {notification} from 'santd';

const checkPermission = (e) => {
    return new Promise((resolve, reject) => {
        if (store.getState().user.roles.length === 0) {
            store
                .dispatch('user:getUserInfo')
                .then(res => {
                    const roles = res.result && res.result.role;
                    // generate dynamic router
                    store.dispatch('permission:generateRoutes', { roles }).then(() => {
                        // 根据roles权限生成可访问的路由表
                        store.getState().permission.addRouters.forEach(r => {
                            addRoute(r);
                        });

                        resolve();
                    });
                })
                .catch((err) => {
                    notification.error({
                        message: '错误',
                        description: '请求用户信息失败，请重试'
                    });
                    reject(err);
                });
        } else {
            resolve();
        }
    });
};

export default checkPermission;
