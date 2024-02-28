// frontend/src/index.js

// frontend/src/index.js

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} /> 
      </Switch>
    </Router>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
