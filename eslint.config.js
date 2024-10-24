import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tsEslint from 'typescript-eslint'
import react from 'eslint-plugin-react'
import prettierConfig from 'eslint-config-prettier'

export default tsEslint.config(
    { ignores: ['dist'] },
    {
        settings: { react: { version: '18.3' } },
        extends: [
            js.configs.recommended,
            ...tsEslint.configs.recommendedTypeChecked,
            ...tsEslint.configs.stylisticTypeChecked,
            prettierConfig,
        ],
        files: ['**/*.{ts,tsx}'],
        languageOptions: {
            ecmaVersion: 2020,
            globals: globals.browser,
            parserOptions: {
                project: ['./tsconfig.node.json', './tsconfig.app.json'],
                tsconfigRootDir: import.meta.dirname,
            },
        },
        plugins: {
            'react-hooks': reactHooks,
            'react-refresh': reactRefresh,
            react,
        },
        rules: {
            ...reactHooks.configs.recommended.rules,
            'react-refresh/only-export-components': [
                'warn',
                { allowConstantExport: true },
            ],
            'arrow-body-style': ['error', 'as-needed'],
            curly: ['error', 'all'],
            eqeqeq: 'error',
            'linebreak-style': ['error', 'unix'],
            'no-console': 'off',
            'padding-line-between-statements': [
                'error',
                {
                    blankLine: 'always',
                    next: '*',
                    prev: ['const'],
                },
                {
                    blankLine: 'any',
                    next: ['const'],
                    prev: ['const'],
                },
                {
                    blankLine: 'always',
                    next: 'return',
                    prev: '*',
                },
            ],
            'prefer-destructuring': [
                'error',
                {
                    array: true,
                    object: true,
                },
            ],
            quotes: [
                'error',
                'single',
                {
                    avoidEscape: true,
                    allowTemplateLiterals: false,
                },
            ],
            'sort-imports': [
                'error',
                {
                    ignoreCase: true,
                    ignoreDeclarationSort: false,
                    ignoreMemberSort: false,
                    memberSyntaxSortOrder: [
                        'none',
                        'all',
                        'multiple',
                        'single',
                    ],
                    allowSeparatedGroups: true,
                },
            ],
            ...react.configs.recommended.rules,
            ...react.configs['jsx-runtime'].rules,
        },
    },
)
