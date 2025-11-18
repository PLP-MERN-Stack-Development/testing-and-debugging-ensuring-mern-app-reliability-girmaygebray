module.exports = {
  testEnvironment: 'node',
  // Look for files ending with .test.js or .spec.js inside the tests folder
  testMatch: ['**/tests/**/*.test.js'],
  collectCoverageFrom: ['src/**/*.js'],
  coverageDirectory: 'coverage',
  // Setup file for connecting/disconnecting MongoDB Memory Server
  globalSetup: './tests/setup.js', 
  globalTeardown: './tests/teardown.js',
};