import {checkPermission} from './permission';
import {parseOpenKeys} from '@/utils/util.js';

function updateMenu(store, currentRoute) {
    const list = parseOpenKeys(currentRoute);
    store.dispatch('common:updateMenuKey', currentRoute);
    store.dispatch('common:updateOpenKeys', list);
};

function initRouter({router, store}) {
    // 监听路由
    router.listen((e, config) => {
        e.suspend();
        checkPermission(e).then(invalid => {
            if (invalid) {
                e.stop();
                this.locator.redirect('/');
                return;
            }

            e.resume();

            if (config) {
                updateMenu(store, config.rule);
            }
        });
    });

    const current = router.locator.current === '/'
        ? '/welcome'
        : router.locator.current;
    updateMenu(store, current);
}

function bootstrap({router, store}) {
    // start router
    initRouter({router, store});
}

export default bootstrap;


