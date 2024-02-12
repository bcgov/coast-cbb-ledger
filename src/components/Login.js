import React, { useEffect } from 'react';
import Keycloak from 'keycloak-js';

const Login = () => {
  useEffect(() => {
    const keycloak = Keycloak('config/keycloak.js');

    keycloak.init({ onLoad: 'login-required' }).then((authenticated) => {
      if (authenticated) {
        // User is authenticated, redirect to home page or protected route
        window.location.href = '/home'; // Redirect to the home page
      } else {
        console.log('Authentication failed');
      }
    });
  }, []);

  return (
    <div>
      <p>Redirecting to login page...</p>
    </div>
  );
};

export default Login;
