import {builder} from 'san-update';

export const common = {
    initData: data => ({
        collapsed: false,
        selectKey: '/',
        openKeys: ['/form']
    }),
    action: {
        ['common:toggleCollapsed'](data, a) {
            return builder().set('common.collapsed', data);
        },
        ['common:updateMenuKey'](config) {
            return builder().set('common.selectKey', config);
        },
        ['common:updateOpenKeys'](list) {
            return builder().set('common.openKeys', list);
        },
        ['common:changeLayoutCollapsed'](collapsed) {
            return builder().set('common.collapsed', collapsed);
        }
    }
};
