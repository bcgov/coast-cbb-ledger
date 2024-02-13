// App.js

import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import keycloak from './utils/keycloak';
import Home from './pages/Home'; // Import your Home component or any other components

const App = () => {
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    // Initialize Keycloak instance
    keycloak.init({ onLoad: 'login-required' })
      .then((authenticated) => {
        setAuthenticated(authenticated);
      })
      .catch((error) => {
        console.error('Authentication failed: ', error);
      });
  }, []);

  if (!authenticated) {
    return <div>Loading...</div>; // You can display a loading indicator while authentication is in progress
  }

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} /> {/* Display Login component for the root URL */}
        <Route path="/home" component={Home} /> {/* Display Home component for the '/home' URL */}
        {/* Add more routes for other pages/components as needed */}
      </Switch>
    </Router>
  );
};

export default App;
