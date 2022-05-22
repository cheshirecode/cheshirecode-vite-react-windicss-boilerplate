require('@rushstack/eslint-patch/modern-module-resolution');

// Add your "extends" boilerplate here, for example:
module.exports = {
  extends: ['@fieryeagle/eslint-config-react'],
  parserOptions: { tsconfigRootDir: __dirname },
  settings: {
    'import/core-modules': [
      'windi.css',
      'virtual:windi-base.css',
      'virtual:windi-components.css',
      'virtual:windi-utilities.css',
      'virtual:windi-devtools'
    ]
  },
  rules: {
    '@typescript-eslint/no-non-null-assertion': 'warn'
  }
};
