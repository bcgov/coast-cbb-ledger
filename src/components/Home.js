import React, { useContext, useEffect, useState } from 'react';
import { AuthenticationContext } from '../App';
import { logout } from '../services/keycloak.js';
import * as moment from 'moment';

const formatDate = (unixTime) => {
  return moment(unixTime * 1000).format('dddd, MMMM Do, YYYY h:mm A');
};

function HomePage() {
  const keycloak = useContext(AuthenticationContext);
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    if (keycloak) {
      setAuthenticated(keycloak.authenticated);
    }
  }, [keycloak]);

  const handleLogout = () => {
    logout();
  };

  return (
    <div>
      {authenticated ? (
        <>
          <h1>Welcome to Your App!</h1>
          <p>{`Id token expires at ` + formatDate(keycloak.idTokenParsed.exp)}</p>
          <p>{`Access token expires at ` + formatDate(keycloak.tokenParsed.exp)}</p>
          <p>{`Refresh token expires at ` + formatDate(keycloak.refreshTokenParsed.exp)}</p>
          <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <p>You are not logged in.</p>
      )}
    </div>
  );
}

export default HomePage;
