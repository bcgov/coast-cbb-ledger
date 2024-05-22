// App.js

import React, { createContext, useState, useEffect, useCallback } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { initializeKeycloak } from './services/keycloak';
import HomePage from './pages/HomePage.js';
import DashboardPage from './pages/DashboardPage';
import ControlLedgerPage from './pages/ControlLedgerPage';
import DeckedCruiseBillingPage from './pages/DeckedCruiseBillingPage';
import PipelineMarksPage from './pages/PipelineMarksPage';
import MLCOilandGasPage from './pages/MLCOilandGasPage';
import TimberMarkReportLookupPage from './pages/TimberMarkReportLookupPage';
import ContactForm from './components/ContactForm';

export const AuthenticationContext = createContext('authentication');

function App() {
  const [keycloak, setKeycloak] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const initKeycloak = useCallback(async () => {
    const _keycloak = await initializeKeycloak();
    setKeycloak(_keycloak);
    if (_keycloak) {
      setIsAuthenticated(_keycloak.authenticated);
    }
  }, []);

  useEffect(() => {
    initKeycloak();
  }, [initKeycloak]);

  return (
    <>
      {isAuthenticated && (
        <AuthenticationContext.Provider value={keycloak}>
          <Router>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/dashboard" element={<DashboardPage />} />
              <Route path="/control-ledger" element={<ControlLedgerPage />} />
              <Route path="/decked-cruise-billing" element={<DeckedCruiseBillingPage />} />
              <Route path="/pipeline-marks" element={<PipelineMarksPage />} />
              <Route path="/mlc-oil-and-gas" element={<MLCOilandGasPage />} />
              <Route path="/timber-mark-report-lookup" element={<TimberMarkReportLookupPage />} />
              <Route path="/contactform" element={<ContactForm />} />
            </Routes>
          </Router>
        </AuthenticationContext.Provider>
      )}
    </>
  );
}

export default App;