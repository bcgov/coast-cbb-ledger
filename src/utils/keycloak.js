import Keycloak from 'keycloak-js';
import keycloakConfig from 'Coast CBB Ledger-installation-dev.json';

const keycloak = new Keycloak(keycloakConfig);

export default keycloak;