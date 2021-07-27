import {store} from '../lib/Store';
import stores from './stores';

const machine = Object.keys(stores).reduce(
    (pre, cur) => {
        return {
            initData: {
                ...pre.initData,
                [cur]: stores[cur].initData()
            },
            actions: {
                ...pre.actions,
                ...stores[cur].action
            }
        };
    },
    {initData: {}, actions: {}}
);
// eslint-disable-next-line no-console
store.initData(machine.initData).addActions(machine.actions);

export default store;
