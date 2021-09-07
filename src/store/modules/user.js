import {builder} from 'san-update';
import {getUserInfo} from '@/services/user';

export const user = {
    initData: data => ({
        userInfo: null,
        roles: []
    }),
    action: {
        ['user:updateUserInfo'](userInfo) {
            return builder().set('user.userInfo', userInfo);
        },
        ['user:updateRoles'](roles) {
            return builder().set('user.roles', roles);
        },
        ['user:getUserInfo'](data, {dispatch}) {
            return new Promise((resolve, reject) => {
                getUserInfo().then(res => {
                    const result = res.result;
                    if (result.role && result.role.permissions.length > 0) {
                        const role = result.role;
                        role.permissions = result.role.permissions;
                        role.permissions.map(per => {
                            if (per.actionEntitySet != null && per.actionEntitySet.length > 0) {
                                const action = per.actionEntitySet.map(action => {
                                    return action.action;
                                });
                                per.actionList = action;
                            }
                        });
                        role.permissionList = role.permissions.map((permission) => {
                            return permission.permissionId;
                        });
                        dispatch('user:updateUserInfo', result);
                        dispatch('user:updateRoles', result.role);
                    } else {
                        reject(new Error('getInfo: roles must be a non-null array !'));
                    }
                    resolve(res);
                }).catch(error => {
                    reject(error);
                });
            });
        }
    }
};


