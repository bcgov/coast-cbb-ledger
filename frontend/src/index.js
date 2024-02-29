import React from 'react';
import { createRoot } from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} /> 
      </Switch>
    </Router>
  );
}

createRoot(document.getElementById('root')).render(<App />);
