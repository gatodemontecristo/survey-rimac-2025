module.exports = {
    extends: ['@commitlint/config-conventional'],
    rules: {
      'header-max-length': [2, 'always', 250],
      'type-enum': [2, 'always', ['feat']],
      'subject-case': [2, 'always', 'lower-case'],
    },
  };