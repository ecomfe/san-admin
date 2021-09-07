import checkPermission from './permission';
import {parseOpenKeys} from '@/utils/util';

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
            e.resume();

            if (config) {
                updateMenu(store, config.rule);
                document.title = config.name;
            }
        });
    });

    checkPermission()
        .then(() => {
            if (router.locator.current === '/') {
                router.locator.redirect('/dashboard/analysis');
            }
            router.start();
        });
}

export default ({router, store}) => initRouter({router, store});

