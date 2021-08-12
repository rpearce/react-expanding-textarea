module.exports = {
  clearMocks: true,
  collectCoverage: true,
  collectCoverageFrom: ['<rootDir>/source/index.tsx'],
  coveragePathIgnorePatterns: ['/node_modules/'],
  moduleNameMapper: {},
  preset: 'ts-jest',
  setupFilesAfterEnv: [],
  testEnvironment: 'jsdom',
  verbose: true,
}
