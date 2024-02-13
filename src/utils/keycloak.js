import Keycloak from 'keycloak-js';

const keycloak = new Keycloak({
  url: process.env.REACT_APP_AUTH_SERVER_URL,
  realm: process.env.REACT_APP_REALM,
  clientId: process.env.REACT_APP_RESOURCE,
});

export default keycloak;

