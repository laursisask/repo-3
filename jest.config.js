module.exports = {
  preset: 'ts-jest',
  transform: {
    '^.+\\.ts$': 'ts-jest',
  },
  rootDir: '.',
  moduleFileExtensions: ['ts', 'js', 'json'],
  collectCoverage: true,
  collectCoverageFrom: ['**/src/**/*.ts'],
  coverageReporters: ['lcov', 'text-summary'],
  restoreMocks: true,
  verbose: true,
  modulePathIgnorePatterns: ['<rootDir>/lib'],
};
