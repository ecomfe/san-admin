const responseBody = {
    message: '',
    timestamp: 0,
    result: null,
    errno: 0
};

const builder = (data, message, errno = 0, headers = {}) => {
    responseBody.result = data;
    if (message !== undefined && message !== null) {
        responseBody.message = message;
    }
    if (errno !== undefined && errno !== 0) {
        responseBody.errno = errno;
        responseBody._status = errno;
    }
    if (headers !== null && typeof headers === 'object' && Object.keys(headers).length > 0) {
        responseBody._headers = headers;
    }
    responseBody.timestamp = new Date().getTime();
    return responseBody;
};

const getUserInfo =  options => {
    const userInfo = {
        id: '4291d7da9005377ec9aec4a71ea837f',
        cname: '天野远子',
        username: 'admin',
        password: '',
        avatar: 'https://b.bdstatic.com/searchbox/icms/other/img/sanadmin/avatar0.png',
        status: 1,
        telephone: '',
        lastLoginIp: '27.154.74.117',
        lastLoginTime: 1534837621348,
        creatorId: 'admin',
        createTime: 1497160610259,
        merchantCode: 'TLif2btpzg079h15bk',
        deleted: 0,
        roleId: 'admin',
        role: {}
    };
    // role
    const roleObj = {
        id: 'admin',
        name: '管理员',
        describe: '拥有所有权限',
        status: 1,
        creatorId: 'system',
        createTime: 1497160610259,
        deleted: 0,
        permissions: [
            {
                roleId: 'admin',
                permissionId: 'dashboard',
                permissionName: '仪表盘',
                actions:
          '[{"action":"add","defaultCheck":false,"describe":"新增"},{"action":"query","defaultCheck":false,"describe":"查询"},{"action":"get","defaultCheck":false,"describe":"详情"},{"action":"update","defaultCheck":false,"describe":"修改"},{"action":"delete","defaultCheck":false,"describe":"删除"}]',
                actionEntitySet: [
                    {
                        action: 'add',
                        describe: '新增',
                        defaultCheck: false
                    },
                    {
                        action: 'query',
                        describe: '查询',
                        defaultCheck: false
                    },
                    {
                        action: 'get',
                        describe: '详情',
                        defaultCheck: false
                    },
                    {
                        action: 'update',
                        describe: '修改',
                        defaultCheck: false
                    },
                    {
                        action: 'delete',
                        describe: '删除',
                        defaultCheck: false
                    }
                ],
                actionList: null,
                dataAccess: null
            },
            {
                roleId: 'admin',
                permissionId: 'exception',
                permissionName: '异常页面权限',
                actions:
          '[{"action":"add","defaultCheck":false,"describe":"新增"},{"action":"query","defaultCheck":false,"describe":"查询"},{"action":"get","defaultCheck":false,"describe":"详情"},{"action":"update","defaultCheck":false,"describe":"修改"},{"action":"delete","defaultCheck":false,"describe":"删除"}]',
                actionEntitySet: [
                    {
                        action: 'add',
                        describe: '新增',
                        defaultCheck: false
                    },
                    {
                        action: 'query',
                        describe: '查询',
                        defaultCheck: false
                    },
                    {
                        action: 'get',
                        describe: '详情',
                        defaultCheck: false
                    },
                    {
                        action: 'update',
                        describe: '修改',
                        defaultCheck: false
                    },
                    {
                        action: 'delete',
                        describe: '删除',
                        defaultCheck: false
                    }
                ],
                actionList: null,
                dataAccess: null
            },
            {
                roleId: 'admin',
                permissionId: 'result',
                permissionName: '结果权限',
                actions:
          '[{"action":"add","defaultCheck":false,"describe":"新增"},{"action":"query","defaultCheck":false,"describe":"查询"},{"action":"get","defaultCheck":false,"describe":"详情"},{"action":"update","defaultCheck":false,"describe":"修改"},{"action":"delete","defaultCheck":false,"describe":"删除"}]',
                actionEntitySet: [
                    {
                        action: 'add',
                        describe: '新增',
                        defaultCheck: false
                    },
                    {
                        action: 'query',
                        describe: '查询',
                        defaultCheck: false
                    },
                    {
                        action: 'get',
                        describe: '详情',
                        defaultCheck: false
                    },
                    {
                        action: 'update',
                        describe: '修改',
                        defaultCheck: false
                    },
                    {
                        action: 'delete',
                        describe: '删除',
                        defaultCheck: false
                    }
                ],
                actionList: null,
                dataAccess: null
            },
            {
                roleId: 'admin',
                permissionId: 'profile',
                permissionName: '详细页权限',
                actions:
          '[{"action":"add","defaultCheck":false,"describe":"新增"},{"action":"query","defaultCheck":false,"describe":"查询"},{"action":"get","defaultCheck":false,"describe":"详情"},{"action":"update","defaultCheck":false,"describe":"修改"},{"action":"delete","defaultCheck":false,"describe":"删除"}]',
                actionEntitySet: [
                    {
                        action: 'add',
                        describe: '新增',
                        defaultCheck: false
                    },
                    {
                        action: 'query',
                        describe: '查询',
                        defaultCheck: false
                    },
                    {
                        action: 'get',
                        describe: '详情',
                        defaultCheck: false
                    },
                    {
                        action: 'update',
                        describe: '修改',
                        defaultCheck: false
                    },
                    {
                        action: 'delete',
                        describe: '删除',
                        defaultCheck: false
                    }
                ],
                actionList: null,
                dataAccess: null
            },
            {
                roleId: 'admin',
                permissionId: 'table',
                permissionName: '表格权限',
                actions:
          '[{"action":"add","defaultCheck":false,"describe":"新增"},{"action":"import","defaultCheck":false,"describe":"导入"},{"action":"get","defaultCheck":false,"describe":"详情"},{"action":"update","defaultCheck":false,"describe":"修改"}]',
                actionEntitySet: [
                    {
                        action: 'add',
                        describe: '新增',
                        defaultCheck: false
                    },
                    {
                        action: 'import',
                        describe: '导入',
                        defaultCheck: false
                    },
                    {
                        action: 'get',
                        describe: '详情',
                        defaultCheck: false
                    },
                    {
                        action: 'update',
                        describe: '修改',
                        defaultCheck: false
                    }
                ],
                actionList: null,
                dataAccess: null
            },
            {
                roleId: 'admin',
                permissionId: 'form',
                permissionName: '表单权限',
                actions:
          '[{"action":"add","defaultCheck":false,"describe":"新增"},{"action":"get","defaultCheck":false,"describe":"详情"},{"action":"query","defaultCheck":false,"describe":"查询"},{"action":"update","defaultCheck":false,"describe":"修改"},{"action":"delete","defaultCheck":false,"describe":"删除"}]',
                actionEntitySet: [
                    {
                        action: 'add',
                        describe: '新增',
                        defaultCheck: false
                    },
                    {
                        action: 'get',
                        describe: '详情',
                        defaultCheck: false
                    },
                    {
                        action: 'query',
                        describe: '查询',
                        defaultCheck: false
                    },
                    {
                        action: 'update',
                        describe: '修改',
                        defaultCheck: false
                    },
                    {
                        action: 'delete',
                        describe: '删除',
                        defaultCheck: false
                    }
                ],
                actionList: null,
                dataAccess: null
            },
            {
                roleId: 'admin',
                permissionId: 'list',
                permissionName: '列表权限',
                actions:
          '[{"action":"add","defaultCheck":false,"describe":"新增"},{"action":"get","defaultCheck":false,"describe":"详情"},{"action":"query","defaultCheck":false,"describe":"查询"},{"action":"update","defaultCheck":false,"describe":"修改"},{"action":"delete","defaultCheck":false,"describe":"删除"}]',
                actionEntitySet: [
                    {
                        action: 'add',
                        describe: '新增',
                        defaultCheck: false
                    },
                    {
                        action: 'get',
                        describe: '详情',
                        defaultCheck: false
                    },
                    {
                        action: 'query',
                        describe: '查询',
                        defaultCheck: false
                    },
                    {
                        action: 'update',
                        describe: '修改',
                        defaultCheck: false
                    },
                    {
                        action: 'delete',
                        describe: '删除',
                        defaultCheck: false
                    }
                ],
                actionList: null,
                dataAccess: null
            },
        ]
    };

    roleObj.permissions.push({
        roleId: 'admin',
        permissionId: 'support',
        permissionName: '超级模块',
        actions:
      '[{"action":"add","defaultCheck":false,"describe":"新增"},{"action":"import","defaultCheck":false,"describe":"导入"},{"action":"get","defaultCheck":false,"describe":"详情"},{"action":"update","defaultCheck":false,"describe":"修改"},{"action":"delete","defaultCheck":false,"describe":"删除"},{"action":"export","defaultCheck":false,"describe":"导出"}]',
        actionEntitySet: [
            {
                action: 'add',
                describe: '新增',
                defaultCheck: false
            },
            {
                action: 'import',
                describe: '导入',
                defaultCheck: false
            },
            {
                action: 'get',
                describe: '详情',
                defaultCheck: false
            },
            {
                action: 'update',
                describe: '修改',
                defaultCheck: false
            },
            {
                action: 'delete',
                describe: '删除',
                defaultCheck: false
            },
            {
                action: 'export',
                describe: '导出',
                defaultCheck: false
            }
        ],
        actionList: null,
        dataAccess: null
    });

    userInfo.role = roleObj;

    return builder(userInfo);
};

module.exports = getUserInfo;
