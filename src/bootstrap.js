import {checkPermission} from './permission';
import {parseOpenKeys} from '@/utils/util';

function updateMenu(store, currentRoute) {
    const list = parseOpenKeys(currentRoute);
    store.dispatch('common:updateMenuKey', currentRoute);
    store.dispatch('common:updateOpenKeys', list);
};

function getCurrentRouterConfig(router) {
    const {routes = [], locator} = router;
    const rule = locator.current;
    let config = null;

    routes.forEach(route => {
        if (route.config.rule === rule) {
            config = route.config;
        }
    });

    return config;
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
                document.title = config.name;
            }
        });
    });

    const current = router.locator.current === '/'
        ? '/dashboard/analysis'
        : router.locator.current;
    updateMenu(store, current);

    let currentRuteConfig = getCurrentRouterConfig(router);
    currentRuteConfig && (document.title = currentRuteConfig.name);
}

function bootstrap({router, store}) {
    // start router
    initRouter({router, store});
}

export default bootstrap;

