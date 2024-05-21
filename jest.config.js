module.exports = {
  testEnvironment: "jsdom",
  setupFiles: ["<rootDir>/jest.setup.js"],
  moduleNameMapper: {
    '\\.(css|less)$': '<rootDir>/__mocks__/styleMock.js',
  },
};
