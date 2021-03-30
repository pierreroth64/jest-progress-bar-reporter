module.exports = {
  verbose: false,
  testPathIgnorePatterns: ['/node_modules/', '/coverage/'],
  reporters: [
    '../lib/jest-progress-bar-reporter.js', // replace this line with 'jest-progress-bar-reporter.js' in your real world config
  ],
};
