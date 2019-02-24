module.exports = {
  clearMocks: true,
  collectCoverageFrom: [
    '<rootDir>/source/**/*.js'
  ],
  setupFilesAfterEnv: [
    'react-testing-library/cleanup-after-each'
  ],
  snapshotSerializers: []
}
