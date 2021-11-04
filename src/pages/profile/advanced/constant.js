export const operationTabList = [
    {
        key: '1',
        tab: '操作日志一'
    },
    {
        key: '2',
        tab: '操作日志二'
    },
    {
        key: '3',
        tab: '操作日志三'
    }
];

export const operationColumns = [
    {
        title: '操作类型',
        dataIndex: 'type',
        key: 'type'
    },
    {
        title: '操作人',
        dataIndex: 'name',
        key: 'name'
    },
    {
        title: '执行结果',
        dataIndex: 'status',
        key: 'status',
        scopedSlots: { customRender: 'status' }
    },
    {
        title: '操作时间',
        dataIndex: 'updatedAt',
        key: 'updatedAt'
    },
    {
        title: '备注',
        dataIndex: 'remark',
        key: 'remark'
    }
];

export const operation1 = [
    {
        key: 'op1',
        type: '订购关系生效',
        name: '张丽',
        status: 'agree',
        updatedAt: '2017-10-03  19:23:12',
        remark: '-'
    },
    {
        key: 'op2',
        type: '财务复审',
        name: '王五',
        status: 'reject',
        updatedAt: '2017-10-03  19:23:12',
        remark: '不通过原因'
    },
    {
        key: 'op3',
        type: '部门初审',
        name: '展展',
        status: 'agree',
        updatedAt: '2017-10-03  19:23:12',
        remark: '-'
    },
    {
        key: 'op4',
        type: '提交订单',
        name: '小四',
        status: 'agree',
        updatedAt: '2017-10-03  19:23:12',
        remark: '很棒'
    },
    {
        key: 'op5',
        type: '创建订单',
        name: '林峰',
        status: 'agree',
        updatedAt: '2017-10-03  19:23:12',
        remark: '-'
    }
];

export const operation2 = [
    {
        key: 'op2',
        type: '财务复审',
        name: '付小小',
        status: 'reject',
        updatedAt: '2017-10-03  19:23:12',
        remark: '不通过原因'
    },
    {
        key: 'op3',
        type: '部门初审',
        name: '周周',
        status: 'agree',
        updatedAt: '2017-10-03  19:23:12',
        remark: '-'
    },
    {
        key: 'op4',
        type: '提交订单',
        name: '庆东',
        status: 'agree',
        updatedAt: '2017-10-03  19:23:12',
        remark: '很棒'
    }
];

export const operation3 = [
    {
        key: 'op2',
        type: '财务复审',
        name: '陈晓飞',
        status: 'reject',
        updatedAt: '2017-10-03  19:23:12',
        remark: '不通过原因'
    },
    {
        key: 'op3',
        type: '部门初审',
        name: '周周',
        status: 'agree',
        updatedAt: '2017-10-03  19:23:12',
        remark: '-'
    }
];
