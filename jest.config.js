module.exports = {
  roots: ['<rootDir>/src'],
  transform: {
    '^.+\\.tsx?$': 'babel-jest',
  },
  setupFilesAfterEnv: [
    '@testing-library/jest-dom',
    '@testing-library/jest-dom/extend-expect',
  ],
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  moduleNameMapper: {
    '\\.(scss|sass|css)$': 'identity-obj-proxy',
  },
  //moduleDirectories: ['node_modules', 'src'],
  //setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  //testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
}
