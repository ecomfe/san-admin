import {router} from 'san-router';
import {constantRouterMap} from '@/config/routes';
import {addRoute} from './utils';
export * from './utils';

constantRouterMap.forEach(item => {
    addRoute(item);
});

export default router;
