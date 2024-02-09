// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Home from './pages/Home';
import ControlLedger from './pages/ControlLedger';
import DeckedCruiseBilling from './pages/DeckedCruiseBilling';
import MlcOilandGas from './pages/MlcOilandGas';
import PipelineMarks from './pages/PipelineMarks';
import TimberMarkReportLookupPage from './pages/TimberMarkReportLookupPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/control-ledger">Control Ledger</Link>
            </li>
            <li>
              <Link to="/decked-cruise-billing">Decked Cruise Billing</Link>
            </li>
            <li>
              <Link to="/mlc-oil-and-gas">Mlc Oil and Gas</Link>
            </li>
            <li>
              <Link to="/pipeline-marks">Pipeline Marks</Link>
            </li>
            <li>
              <Link to="/timber-mark-report-lookup">Timber Mark Report Lookup</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/control-ledger" component={ControlLedger} />
          <Route path="/decked-cruise-billing" component={DeckedCruiseBilling} />
          <Route path="/mlc-oil-and-gas" component={MlcOilandGas} />
          <Route path="/pipeline-marks" component={PipelineMarks} />
          <Route path="/timber-mark-report-lookup" component={TimberMarkReportLookupPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
