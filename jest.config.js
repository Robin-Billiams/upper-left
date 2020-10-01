module.exports = {
  clearMocks: true,
  collectCoverageFrom: ['client/src/**/*.{js,jsx,mjs}'],
  coverageDirectory: 'coverage',
  moduleFileExtensions: ['js', 'json', 'jsx'],
  setupFiles: ['<rootDir>/enzyme.config.js'],
  testEnvironment: 'node',
  testMatch: ['**/test/**/*.js?(x)'],
  testPathIgnorePatterns: ['\\\\node_modules\\\\'],
  testURL: 'http://localhost:3001',
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
  verbose: true,
};