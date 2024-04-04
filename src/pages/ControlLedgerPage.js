// src/pages/ControlLedgerPage.js

import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Navbar from '../components/Navbar';

const ControlLedgerPage = () => {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    fetch('http://your-backend-url/api/ledger_entries')
      .then(response => response.json())
      .then(data => setEntries(data));
  }, []);

  return (
    <div>
      <Header />
      <Navbar />
      <div>
        <h1>Control Ledger</h1>
        <table>
          <thead>
            <tr>
              <th>Entry Type</th>
              <th>Timber Mark</th>
              <th>Issue Date</th>
              {/* Add more headers for other columns as needed */}
            </tr>
          </thead>
          <tbody>
            {entries.map(entry => (
              <tr key={entry.id}>
                <td>{entry.entry_type}</td>
                <td>{entry.timber_mark}</td>
                <td>{entry.issue_date}</td>
                {/* Add more columns for other data as needed */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ControlLedgerPage;

