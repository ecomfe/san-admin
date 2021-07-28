import {builder} from 'san-update';

export const user = {
    initData: data => ({
        userInfo: null
    }),
    action: {
        ['user:updateUserInfo'](data) {
            return builder().set('user.userInfo', data);
        }
    }
};

