module.exports = {
  testEnvironment: 'node',
  transform: {
    '^.+\\.[t|j]s?$': require.resolve('@sucrase/jest-plugin'),
  },
};
