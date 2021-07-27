import {builder} from 'san-update';
import {fakeSubmitForm} from './service';

const stepForm = {
    initData: data => ({
        current: 0,
        step: {
            payAccount: 'ant-design@alipay.com',
            receiverAccount: 'test@example.com',
            receiverName: 'Alex',
            amount: '500',
        },
    }),
    action: {
        ['step-form:saveStepFormData'](data) {
            return builder().set('step-form.step', data);
        },
        ['step-form:saveCurrentStep'](current) {
            return builder().set('step-form.current', current);
        },
        ['step-form:submitStepForm'](params, {dispatch}) {
            return fakeSubmitForm(params)
                .then(res => {
                    dispatch('step-form:saveStepFormData', params);
                    dispatch('step-form:saveCurrentStep', 2);
                });
        },
    }
};

export default stepForm;
