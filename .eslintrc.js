const eslintrc = require.resolve('@box/frontend/eslint/eslintrc.js');

module.exports = {
    extends: [eslintrc],
    globals: {
        __: false,
        __I18N__: false,
        ActiveXObject: false,
        DocumentTouch: false,
        Assert: false,
        fixture: false,
        PDFJS: false,
        sinon: false,
    },
    rules: {
        'class-methods-use-this': 0, // fixme
        'import/no-cycle': 0, // fixme
        'import/no-extraneous-dependencies': 0, // fixme
        'no-underscore-dangle': 0, // fixme
        'prefer-destructuring': ['error', { object: true, array: false }], // fixme
    },
};