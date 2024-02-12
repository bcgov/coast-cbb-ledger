import Keycloak from 'keycloak-js';
import config from './Coast CBB Ledger-installation-dev.json';

const keycloak = Keycloak({
  url: config['auth-server-url'],
  realm: config['realm'],
  clientId: config['resource'],
});

export default keycloak;
