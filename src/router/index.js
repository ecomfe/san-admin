import {router} from 'san-router';
import {constantRouterMap} from '@/config/routes';

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

constantRouterMap.forEach(item => {
    addRoute(item);
});

export default router;
