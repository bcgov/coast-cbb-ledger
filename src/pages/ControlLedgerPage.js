// src/pages/ControlLedgerPage.js

import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import TextInput from '../components/TextInput';
import Dropdown from '../components/Dropdown';
import '../styles/pages/ControlLedgerPage.css'; 

const ControlLedgerPage = () => {
  const [entries, setEntries] = useState([]);
  const [searchFilters, setSearchFilters] = useState({
    entryType: '',
    timberMark: '',
    adminOrg: '',
    ministryContactEmail: '',
    licenseeContactEmail: ''
  });

  useEffect(() => {
    const fetchEntries = async () => {
      try {
        const response = await fetch('/api/entries');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setEntries(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchEntries();
  }, []);

  const handleSearch = (event, field) => {
    setSearchFilters({
      ...searchFilters,
      [field]: event.target.value
    });
  };

  const filteredEntries = entries.filter(entry => {
    return Object.entries(searchFilters).every(([key, value]) => {
      if (value.trim() === '') return true;
      return entry[key].toString().toLowerCase().includes(value.toLowerCase());
    });
  });

  return (
    <div className='header-nav'>
      <Header />
      <Navbar />
      <div className='control-ledger'>
        <h1>Control Ledger</h1>
        {/* Search bars */}
        <div className='search-bar'>
          <TextInput
            label="Entry Type:"
            value={searchFilters.entryType}
            onChange={(e) => handleSearch(e, 'entryType')}
          />
          <TextInput
            label="Timber Mark:"
            value={searchFilters.timberMark}
            onChange={(e) => handleSearch(e, 'timberMark')}
          /> 
           <Dropdown
            label="Admin Org:"
            options={["", "DCK", "DCR", "DNI", "DQC", "DSC", "DSI", "DSQ"]}
            value={searchFilters.adminOrg}
            onChange={(e) => handleSearch(e, 'adminOrg')}
          />
        </div>
        <table>
          <thead>
            <tr>
              {/* Add table headers here */}
            </tr>
          </thead>
          <tbody>
            {filteredEntries.map(entry => (
              <tr key={entry.id}>
                {/* Render table data here */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Footer />
    </div>
  );
};

export default ControlLedgerPage;