import globals from 'globals';
import pluginJs from '@eslint/js';

export default [
    { files: ['**/*.{js,mjs,cjs,jsx}'] },
    pluginJs.configs.recommended,
    {
        rules: {
            'quotes': ['error', 'single'],
            'react/react-in-jsx-scope': 'off',
            'react/prop-types': 'off',
            'semi': 'error',
            'require-await': 'error',
            'prefer-const': 'error',
            'no-var': 'error',
            'no-unused-expressions': 'error',
            'no-unneeded-ternary': 'error',
            'no-undef-init': 'error',
            'no-new-wrappers': 'error'
        },
        languageOptions: {
            globals: globals.node
        }
    },
    {
        files: [
            'test/**/*'
        ],
        languageOptions: {
            globals: {
                expect: true,
                test: true
            }
        }
    }
];