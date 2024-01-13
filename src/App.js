// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Login from './components/Login';
import Navigation from './components/Navigation';
import Home from './components/HomePage';
import ControlLedger from './components/ControlLedger';
import DeckedCruiseBilling from './components/DeckedCruiseBilling';
import PipelineMarks from './components/PipelineMarks';
import MlcOilAndGas from '././components/MlcOilAndGas';
import TimberMarkReportLookup from './components/TimberMarkReportLookup';

const App = () => {
  return (
    <Router>
      <Header />
      <Navigation />
      <Routes>
        <Route path="/login" element={<Login />} /> {/* Add a route for Login */}
        <Route path="/" element={<Home />} />
        <Route path="/control-ledger" element={<ControlLedger />} />
        <Route path="/decked-cruise-billing" element={<DeckedCruiseBilling />} />
        <Route path="/pipeline-marks" element={<PipelineMarks />} />
        <Route path="/mlc-oil-and-gas" element={<MlcOilAndGas />} />
        <Route path="/timber-mark-report-lookup" element={<TimberMarkReportLookup />} />
      </Routes>
    </Router>
  );
};

export default App;

