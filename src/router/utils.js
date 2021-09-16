import checkPermission from '@/permission';
import {parseOpenKeys} from '@/utils/util';
import {router} from 'san-router';

const updateMenu = (store, currentRoute) => {
    const list = parseOpenKeys(currentRoute);
    store.dispatch('common:updateMenuKey', currentRoute);
    store.dispatch('common:updateOpenKeys', list);
};

export const addRoute = (item) => {
    if (item.children) {
        item.children.forEach(child => {
            router.add({
                target: '#content',
                parent: item,
                ...child
            });
        });
    }
    else {
        router.add({
            target: '#content',
            ...item
        });
    }
};

export const initRouter = ({router, store}) => {
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
};


