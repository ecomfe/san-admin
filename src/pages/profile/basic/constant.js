export const goodsColumns = [
    {
        title: '商品编号',
        dataIndex: 'id',
        key: 'id'
    },
    {
        title: '商品名称',
        dataIndex: 'name',
        key: 'name'
    },
    {
        title: '商品条码',
        dataIndex: 'barcode',
        key: 'barcode'
    },
    {
        title: '单价',
        dataIndex: 'price',
        key: 'price',
        align: 'right'
    },
    {
        title: '数量（件）',
        dataIndex: 'num',
        key: 'num',
        align: 'right'
    },
    {
        title: '金额',
        dataIndex: 'amount',
        key: 'amount',
        align: 'right'
    }
];

export const scheduleColumns = [
    {
        title: '时间',
        dataIndex: 'time',
        key: 'time'
    },
    {
        title: '当前进度',
        dataIndex: 'rate',
        key: 'rate'
    },
    {
        title: '状态',
        dataIndex: 'status',
        key: 'status',
        scopedSlots: { customRender: 'status' }
    },
    {
        title: '操作员ID',
        dataIndex: 'operator',
        key: 'operator'
    },
    {
        title: '耗时',
        dataIndex: 'cost',
        key: 'cost'
    }
];
