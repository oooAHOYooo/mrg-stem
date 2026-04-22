import js from '@eslint/js'
import pluginVue from 'eslint-plugin-vue'

export default [
  {
    ignores: ['dist', 'node_modules'],
  },
  {
    files: ['src/**/*.{js,vue}'],
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
      parserOptions: {
        ecmaVersion: 2020,
      },
    },
    rules: js.configs.recommended.rules,
  },
  ...pluginVue.configs['flat/recommended'],
  {
    files: ['src/**/*.vue'],
    rules: {
      'vue/multi-word-component-names': 'off',
      'vue/no-v-html': 'warn',
      // Prevent overly complex templates
      'vue/max-attributes-per-line': ['warn', { singleline: 3, multiline: 1 }],
      'vue/no-bare-strings-in-template': 'warn',
    },
  },
]
