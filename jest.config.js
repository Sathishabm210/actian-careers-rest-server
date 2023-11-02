module.exports = {
    testEnvironment: 'node',
    coverageReporters: ['text', 'lcov', 'clover', 'html'],
    collectCoverageFrom: ['**/*.js'],
    coverageDirectory: 'coverage',
  };