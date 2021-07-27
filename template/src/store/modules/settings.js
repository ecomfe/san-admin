import {builder} from 'san-update';
import defaultSettings from '@/config/defaultSetting';

export const settings = {
    initData: () => ({
        settings: defaultSettings
    }),
    action: {
        ['settings:changeSetting'](payload, {getState}) {
            return builder().set('settings.settings', {
                ...getState('settings.settings'),
                ...payload
            });
        }
    }
};