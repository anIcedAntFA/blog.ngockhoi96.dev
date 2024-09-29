/** @type {import('cz-git').UserConfig} */
module.exports = {
  rules: {
    // @see: https://commitlint.js.org/#/reference-rules
  },
  prompt: {
    alias: { fd: 'docs: fix typos' },
    messages: {
      type: "Select the type of change that you're committing:",
      scope: 'Denote the SCOPE of this change (optional):',
      customScope: 'Denote the SCOPE of this change:',
      subject: 'Write a SHORT, IMPERATIVE tense description of the change:\n',
      body: 'Provide a LONGER description of the change (optional). Use "|" to break new line:\n',
      breaking:
        'List any BREAKING CHANGES (optional). Use "|" to break new line:\n',
      footerPrefixesSelect:
        'Select the ISSUES type of changeList by this change (optional):',
      customFooterPrefix: 'Input ISSUES prefix:',
      footer: 'List any ISSUES by this change. E.g.: #31, #34:\n',
      generatingByAI: 'Generating your AI commit subject...',
      generatedSelectByAI: 'Select suitable subject by AI generated:',
      confirmCommit: 'Are you sure you want to proceed with the commit above?',
    },
    types: [
      {
        value: 'init',
        name: 'init:         🎉  Begin a project.',
        emoji: ':tada:',
      },
      {
        value: 'feat',
        name: 'feat:         ✨  A new feature',
        emoji: ':sparkles:',
      },
      {
        value: 'fix',
        name: 'fix:          🐛  A bug fix',
        emoji: ':bug:',
      },
      {
        value: 'simple-fix',
        name: 'simple-fix:   🩹  Simple fix for a non-critical issue.',
        emoji: ':adhesive_bandage:',
      },
      {
        value: 'hotfix',
        name: 'hotfix:       🚑️  Critical hotfix.',
        emoji: ':bug:',
      },
      {
        value: 'docs',
        name: 'docs:         📝  Documentation only changes',
        emoji: ':memo:',
      },
      {
        value: 'style',
        name: 'style:        💄  Changes that do not affect the meaning of the code',
        emoji: ':lipstick:',
      },
      {
        value: 'refactor',
        name: 'refactor:     ♻️   A code change that neither fixes a bug nor adds a feature',
        emoji: ':recycle:',
      },
      {
        value: 'remove',
        name: 'remove:       🔥  Remove code or files.',
        emoji: ':fire:',
      },
      {
        value: 'perf',
        name: 'perf:         ⚡️  A code change that improves performance',
        emoji: ':mag:',
      },
      {
        value: 'seo',
        name: 'seo:          🔍️  Improve SEO.',
        emoji: ':zap:',
      },
      {
        value: 'test',
        name: 'test:         ✅  Adding missing tests or correcting existing tests',
        emoji: ':white_check_mark:',
      },
      {
        value: 'ignore',
        name: 'ignore:       🙈  Add or update a .gitignore file.',
        emoji: ':see_no_evil:',
      },
      {
        value: 'build',
        name: 'build:        📦️  Changes that affect the build system or external dependencies',
        emoji: ':package:',
      },
      {
        value: 'ci',
        name: 'ci:           🎡  Changes to our CI configuration files and scripts',
        emoji: ':ferris_wheel:',
      },
      {
        value: 'chore',
        name: "chore:        🔨  Other changes that don't modify src or test files",
        emoji: ':hammer:',
      },
      {
        value: 'revert',
        name: 'revert:       ⏪️  Reverts a previous commit',
        emoji: ':rewind:',
      },
      {
        value: 'deploy',
        name: 'deploy:       🚀  Deploy stuff.',
        emoji: ':rocket:',
      },
    ],
    useEmoji: true,
    emojiAlign: 'left',
    useAI: false,
    aiNumber: 1,
    themeColorCode: '',
    scopes: [],
    allowCustomScopes: true,
    allowEmptyScopes: true,
    customScopesAlign: 'bottom',
    customScopesAlias: 'custom',
    emptyScopesAlias: 'empty',
    upperCaseSubject: false,
    markBreakingChangeMode: false,
    allowBreakingChanges: ['feat', 'fix'],
    breaklineNumber: 100,
    breaklineChar: '|',
    skipQuestions: [],
    issuePrefixes: [
      { value: 'closed', name: 'closed:   ISSUES has been processed' },
    ],
    customIssuePrefixAlign: 'top',
    emptyIssuePrefixAlias: 'skip',
    customIssuePrefixAlias: 'custom',
    allowCustomIssuePrefix: true,
    allowEmptyIssuePrefix: true,
    confirmColorize: true,
    scopeOverrides: undefined,
    defaultBody: '',
    defaultIssues: '',
    defaultScope: '',
    defaultSubject: '',
  },
};
