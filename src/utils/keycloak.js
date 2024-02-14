import Keycloak from 'keycloak-js';
import keycloakConfig from './src/config/coast cbb ledger-installation-dev.json';

const keycloak = new Keycloak(keycloakConfig);

export default keycloak;