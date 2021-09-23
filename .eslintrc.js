module.exports = {
    'root': true,
    'env': {
        'browser': true,
        'es6': true,
    },
    'extends': ['plugin:san/essential'],
    'parserOptions': {
        'parser': 'babel-eslint',
        'ecmaVersion': 6,
        'sourceType': 'module'
    },
    'rules': {
        'indent': ['error', 4, { SwitchCase: 1 }],
        'quotes': ['error', 'single'],
        'space-before-function-paren': ['error', 'never'],
        'no-trailing-spaces': 'error',
        'keyword-spacing': ['error', { 'before': true }],
        'no-console': 'error',
        'semi': ['error', 'always'],
        'space-infix-ops': ['error', {'int32Hint': false}],
        'eol-last': ["error", "always"],
    }
};
