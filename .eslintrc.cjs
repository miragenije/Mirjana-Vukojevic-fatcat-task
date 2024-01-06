module.exports = {
    root: true,
    env: { browser: true, es2020: true },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react-hooks/recommended',
    ],
    "settings": {
        "react": {
            "version": "detect"
        },
        "import/resolver": {
            "node": {
                "extensions": [".ts", ".tsx"],
                "moduleDirectory": ["src", "node_modules"]
            }
        }
    },
    ignorePatterns: ['dist', '.eslintrc.cjs'],
    parser: '@typescript-eslint/parser',
    plugins: ['react-refresh'],
    rules: {
        "@typescript-eslint/no-explicit-any": "off",
        'react-refresh/only-export-components': [
            'warn',
            { allowConstantExport: true },
        ],
    },
}
