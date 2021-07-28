import {builder} from 'san-update';
import { addFakeList, queryFakeList, fakeSubmitForm, removeFakeList, updateFakeList } from './service';

const BasicList = {
    initData: data => ({
        list: []
    }),
    action: {
        ['card-list:updateList'](list) {
            return builder().set('basic-list.list', list);
        },

        ['card-list:fetchList'](params, {dispatch}) {
            alert(1);
            return queryFakeList(params)
                .then(res => {
                    dispatch('basic-list:updateList', res);
                });
        },

        ['card-list:submit'](payload, {dispatch}) {
            let callback;

            if (payload.id) {
                callback = Object.keys(payload).length === 1 ? removeFakeList : updateFakeList;
            } else {
                callback = addFakeList;
            }

            return callback(payload)
                .then(res => {
                    dispatch('card-list:updateList', res);
                });
        },
    }
};

export default BasicList;


