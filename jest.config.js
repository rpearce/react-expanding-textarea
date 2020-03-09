module.exports = {
  clearMocks: true,
  collectCoverage: true,
  collectCoverageFrom: ['<rootDir>/source/**/*.{ts,tsx}'],
  coveragePathIgnorePatterns: ['/node_modules/'],
  moduleNameMapper: {},
  preset: 'ts-jest',
  setupFilesAfterEnv: [],
  verbose: true
}
