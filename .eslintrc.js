module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  extends: 'standard',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // add your custom rules here
  'rules': {
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'no-irregular-whitespace': ['error', {
      'skipComments': true,
      'skipTemplates': true
    }],
    'no-unused-vars': ['warn'],
    // 行末分号（启用）
    'semi': ['warn', 'always'],
    // 函数名后的空格（禁用）
    'space-before-function-paren': ['error', 'never'],
    // 缩进规范（两个空格，一倍缩进）
    'vue/script-indent': ['error', 2, {'baseIndent': 1}],
  },
  overrides: [
    {
      'files': ['*.vue'],
      'rules': {
        'indent': 'off'
      }
    }
  ]
};
