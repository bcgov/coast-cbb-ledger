import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Keycloak from 'keycloak-js';
import { KeycloakProvider } from '@react-keycloak/web';

const keycloak = Keycloak({
  url: 'http://localhost:8080/auth',
  realm: 'myrealm',
  clientId: 'myclient',
});

keycloak.init({ onLoad: 'login-required' }).then((authenticated) => {
  if (authenticated) {
    console.log('User is authenticated');
  } else {
    console.log('User is not authenticated');
  }

  ReactDOM.render(
    <React.StrictMode>
      <KeycloakProvider keycloak={keycloak}>
        <App />
      </KeycloakProvider>
    </React.StrictMode>,
    document.getElementById('root')
  );
});
