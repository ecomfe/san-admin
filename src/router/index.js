import {router} from 'san-router';
import routes from '@/config/routes';

routes.forEach(item => {
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
});

export default router;
