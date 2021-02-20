module.exports = {
  testEnvironment: 'jest-environment-node',
  "transform": {
    "^.+\\.jsx?$": "babel-jest"
  },
  // If the test path matches any of the patterns, it will be skipped.
  testPathIgnorePatterns: ['<rootDir>/node_modules/'],

  // If the file path matches any of the patterns, coverage information will be skipped.
  coveragePathIgnorePatterns: ['<rootDir>/node_modules/'],

  // The pattern Jest uses to detect test files.
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.jsx?$'
}