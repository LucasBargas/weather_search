module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'plugin:vue/vue3-essential',
    'airbnb-base',
    'plugin:prettier/recommended',
    'plugin:vue/recommended',
    'plugin:prettier-vue/recommended',
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['vue', 'prettier'],
  rules: {
    'no-unused-vars': 'off',
    'consistent-return': 'off',
    'no-plusplus': 'off',
    'no-return-assign': 'off',
    'vue/no-multiple-template-root': 'off',
    'vue/attribute-hyphenation': 'off',
    'vue/require-default-prop': 'off',
    'vue/no-v-html': 'off',
    'no-param-reassign': 'off',
    'vue/no-mutating-props': 'off',
  },
};
