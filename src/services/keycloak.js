// keycloak.js

import Keycloak from 'keycloak-js';

const keycloakConfig = {
  url: process.env.REACT_APP_SSO_AUTH_SERVER_URL,
  realm: process.env.REACT_APP_SSO_REALM,
  clientId: process.env.REACT_APP_SSO_CLIENT_ID,
  "ssl-required": process.env.REACT_APP_SSL_REQUIRED,
  "confidential-port": process.env.REACT_APP_CONFIDENTIAL_PORT,
  "public-client": true,
  "resource": process.env.REACT_APP_SSO_CLIENT_ID,
};

const _kc = new Keycloak(keycloakConfig);

const loginOptions = {
  redirectUri: window.location.origin,
};

export const initializeKeycloak = async () => {
  try {
    _kc.onTokenExpired = () => {
      _kc.updateToken(5).then(refreshed => {
        if (refreshed) {
          console.log('Token was successfully refreshed');
        } else {
          console.log('Token is still valid');
        }
      }).catch(() => {
        console.error('Failed to refresh the token, or the session has expired');
      });
    };

    const auth = await _kc.init({
      pkceMethod: 'S256',
      checkLoginIframe: false,
      onLoad: 'check-sso',
    });

    if (auth) {
      return _kc;
    } else {
      _kc.login(loginOptions);
    }
  } catch (err) {
    console.error(err);
  }
};

export const logout = () => {
  window.location.href = `https://logon7.gov.bc.ca/clp-cgi/logoff.cgi?retnow=1&returl=${encodeURIComponent(
    `${process.env.REACT_APP_SSO_AUTH_SERVER_URL}/realms/${process.env.REACT_APP_SSO_REALM}/protocol/openid-connect/logout?post_logout_redirect_uri=` +
    window.location.origin +
    '&id_token_hint=' +
    _kc.idToken,
  )}`;
  
  _kc.clearToken();
  _kc.clearRefreshToken();
  _kc.clearAuthz();
};

console.log('Keycloak URL:', process.env.REACT_APP_SSO_AUTH_SERVER_URL);
console.log('Realm:', process.env.REACT_APP_SSO_REALM);
console.log('Client ID:', process.env.REACT_APP_SSO_CLIENT_ID);
console.log('Redirect URI:', window.location.origin);
