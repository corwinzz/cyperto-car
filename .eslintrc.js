module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    "indent": ["off", 2],
    "space-before-function-paren": 0,
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    "@typescript-eslint/no-explicit-any": ["off"],
    "@typescript-eslint/camelcase":0,
    "@typescript-eslint/type-annotation-spacing":0,
    "prefer-const":0,
    "@typescript-eslint/no-inferrable-types":0,
    "@typescript-eslint/no-unused-vars":0,
    "@typescript-eslint/interface-name-prefix":0,
    "@typescript-eslint/member-delimiter-style":0,
    "@typescript-eslint/no-multiple-empty-lines":0,
    "@typescript-eslint/no-trailing-spaces":0,
    "@typescript-eslint/arrow-spacing":0,
    "@typescript-eslint/space-before-blocks":0,
    "@typescript-eslint/space-infix-ops":0,
    "@typescript-eslint/key-spacing":0,
    "@typescript-eslint/space-in-parens":0,
    
  }
}
