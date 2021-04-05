module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
        sourceType: 'module'
    },
    extends: [
        'eslint:recommended',
        'plugin:import/errors',
        'plugin:import/warnings',
        'plugin:@typescript-eslint/recommended',
        'plugin:react/recommended',
        'plugin:prettier/recommended',
        'plugin:jest/recommended'
    ],
    plugins: ['@typescript-eslint', 'react', 'prettier'],
    ignorePatterns: [
        'node_modules/',
        '.storybook/',
        '.idea/',
        '**/__test__/**',
        '**/stories/**'
    ],
    env: {
        browser: true,
        jest: true,
        node: true,
        es6: true
    },
    settings: {
        react: {
            version: 'detect'
        },
        'import/resolver': {
            node: {
                extensions: ['.js', '.jsx', '.ts', '.tsx']
            }
        }
    },
    rules: {
        'react/jsx-props-no-spreading': 'off',
        'prettier/prettier': 'error',
        'react/react-in-jsx-scope': 'off',
        'react/jsx-no-literals': 'off',
        'react/forbid-component-props': 'off',
        'no-console': 0,
        'no-empty-function': ['error', { allow: ['functions'] }],
        semi: ['error', 'never'],
        'react/jsx-filename-extension': [1, { extensions: ['.tsx', '.ts'] }]
    },

    globals: {
        React: 'writable'
    }
}
