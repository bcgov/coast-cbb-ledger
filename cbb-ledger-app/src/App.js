// App.jsx

import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { Router, Route, Switch } from 'react-router-dom';
import ControlLedgerPage from './pages/ControlLedgerPage';
import DeckedCruiseBillingPage from './pages/DeckedCruiseBillingPage';
import LandingPage from './pages/LandingPage';
import MlcOilandGasPage from './pages/MlcOilAndGasPage';
import PipelineMarksPage from './pages/PipelineMarksPage';
import TimberMarkReportLookupPage from './pages/TimberMarkReportLookupPage';

const App = ({ store, history }) => (
  <Provider store={store}>
    <Router history={history}>
      <div className='container'>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/" component={ControlLedgerPage} />
          <Route exact path="/" component={DeckedCruiseBillingPage} />
          <Route exact path="/" component={MlcOilandGasPage} />
          <Route exact path="/" component={PipelineMarksPage} />
          <Route exact path="/" component={TimberMarkReportLookupPage} />
        </Switch>
      </div>
    </Router>
  </Provider>
);

App.PropTypes = {
  history: PropTypes.any.isRequired,
  store: PropTypes.any.isRequired
};
