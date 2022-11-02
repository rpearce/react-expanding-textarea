// module.exports = {
//   clearMocks: true,
//   collectCoverage: true,
//   collectCoverageFrom: ['<rootDir>/source/index.tsx'],
//   coveragePathIgnorePatterns: ['/node_modules/'],
//   moduleNameMapper: {},
//   preset: 'ts-jest',
//   setupFilesAfterEnv: [],
//   testEnvironment: 'jsdom',
//   verbose: true,
// }

export default {
  collectCoverageFrom: ['<rootDir>/source/**/*.{ts,tsx}'],
  preset: 'ts-jest',
  setupFilesAfterEnv: [
    '@testing-library/jest-dom/extend-expect',
    // '<rootDir>/jest.setup.ts',
  ],
  verbose: true,
}
