// config/__mocks__/keycloak.js

// Mock keycloak module
const keycloak = jest.fn().mockImplementation(() => ({
  init: jest.fn().mockReturnValue(Promise.resolve(true))
}));

export default keycloak;
