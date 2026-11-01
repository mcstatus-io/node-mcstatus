import globals from 'globals';
import pluginJs from '@eslint/js';
import parserTypeScript from '@typescript-eslint/parser';

export default [
    { files: ['**/*.{js,mjs,cjs,ts}'] },
    { ignores: ['dist/**/*'] },
    pluginJs.configs.recommended,
    {
        rules: {
            'quotes': ['error', 'single'],
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
        files: ['src/**/*.ts'],
        languageOptions: {
            parser: parserTypeScript
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