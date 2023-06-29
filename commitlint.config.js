/**
 * feat：新功能
 * update：更新某功能
 * fix：修补某功能的bug
 * refactor：重构某个功能
 * style：仅样式改动
 * docs：仅文档新增/改动
 * chore：构建过程或辅助工具的变动
 * build
 */
module.exports = {
  ignores: [(commit) => commit.includes('init')],
  extends: ['@commitlint/config-conventional'],
  rules: {
    'body-leading-blank': [2, 'always'],
    'footer-leading-blank': [1, 'always'],
    'header-max-length': [2, 'always', 108],
    'subject-empty': [2, 'never'],
    'type-empty': [2, 'never'],
    'subject-case': [0],
    'type-enum': [
      2,
      'always',
      [
        'init',
        'feat',
        'fix',
        'perf',
        'style',
        'update',
        'docs',
        'test',
        'refactor',
        'build',
        'ci',
        'chore',
        'revert',
        'types',
        'release',
      ],
    ],
  },
};
