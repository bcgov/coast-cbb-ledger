import React, { useState } from 'react';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/pages/ControlLedgerPage.css';

const ControlLedgerPage = () => {
  const [entries, setEntries] = useState([]);
  const [searchEntryType, setSearchEntryType] = useState('');
  const [searchTimberMark, setSearchTimberMark] = useState('');
  const [searchAdminOrg, setSearchAdminOrg] = useState('');
  const [searchMinistryEmail, setSearchMinistryEmail] = useState('');
  const [searchLicenseeEmail, setSearchLicenseeEmail] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [testData, setTestData] = useState([
    {
      id: 1,
      entry_type: 'Test Entry 1',
      timber_mark: 'Test Timber Mark 1',
      admin_org: 'Test Admin Org 1',
      ministry_contact_email: 'test1@example.com',
      licensee_contact_email: 'test1@example.com',
      issue_date: '2024-04-03',
      expiry_date: '2024-04-10',
      net_cruise_volume: 100.0,
      total_merchantable_area: 200.0,
      last_calculation_date: '2024-04-01',
      previous_hectares_reported: 150.0,
      current_calculation_date: '2024-04-03',
      total_hectares_logged: 300.0,
      percent_completed: 50.0,
      next_report_due: '2024-04-15',
      ledger_comment: 'Test Comment 1',
      hbs_billed_m3: 50.0,
      percent_billed: 50.0,
      scale_site: 'Test Scale Site 1',
      tenure_type_code: 'Test Tenure Type 1',
      lump_sum_bonus_offer: 500.0,
      rebilling_required: true,
      markholder_client: 'Test Markholder Client 1',
      client_number: '123456',
      licence_cp: 'CP123',
      edrms: 'Y'
    },
    {
      id: 2,
      entry_type: 'Test Entry 2',
      timber_mark: 'Test Timber Mark 2',
      admin_org: 'Test Admin Org 2',
      ministry_contact_email: 'test2@example.com',
      licensee_contact_email: 'test2@example.com',
      issue_date: '2024-04-04',
      expiry_date: '2024-04-11',
      net_cruise_volume: 150.0,
      total_merchantable_area: 250.0,
      last_calculation_date: '2024-04-02',
      previous_hectares_reported: 160.0,
      current_calculation_date: '2024-04-04',
      total_hectares_logged: 310.0,
      percent_completed: 55.0,
      next_report_due: '2024-04-16',
      ledger_comment: 'Test Comment 2',
      hbs_billed_m3: 60.0,
      percent_billed: 60.0,
      scale_site: 'Test Scale Site 2',
      tenure_type_code: 'Test Tenure Type 2',
      lump_sum_bonus_offer: 600.0,
      rebilling_required: false,
      markholder_client: 'Test Markholder Client 2',
      client_number: '654321',
      licence_cp: 'CP321',
      edrms: 'N'
    },
    {
      id: 3,
      entry_type: 'Test Entry 3',
      timber_mark: 'Test Timber Mark 3',
      admin_org: 'Test Admin Org 3',
      ministry_contact_email: 'test3@example.com',
      licensee_contact_email: 'test3@example.com',
      issue_date: '2024-04-05',
      expiry_date: '2024-04-12',
      net_cruise_volume: 200.0,
      total_merchantable_area: 300.0,
      last_calculation_date: '2024-04-03',
      previous_hectares_reported: 170.0,
      current_calculation_date: '2024-04-05',
      total_hectares_logged: 320.0,
      percent_completed: 60.0,
      next_report_due: '2024-04-17',
      ledger_comment: 'Test Comment 3',
      hbs_billed_m3: 70.0,
      percent_billed: 70.0,
      scale_site: 'Test Scale Site 3',
      tenure_type_code: 'Test Tenure Type 3',
      lump_sum_bonus_offer: 700.0,
      rebilling_required: true,
      markholder_client: 'Test Markholder Client 3',
      client_number: '987654',
      licence_cp: 'CP987',
      edrms: 'Y'
    }
  ]);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredTestData = testData.filter(entry => {
    return Object.values(entry).some(value =>
      value.toString().toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  return (
    <div className='header-nav'>
      <Header />
      <Navbar />
      <div className='control-ledger'>
        <h1>Control Ledger</h1>
        <div className='search-bar'>
          <input
            type='text'
            placeholder='Search Entry Type'
            value={searchEntryType}
            onChange={e => setSearchEntryType(e.target.value)}
          />
          <input
            type='text'
            placeholder='Search Timber Mark'
            value={searchTimberMark}
            onChange={e => setSearchTimberMark(e.target.value)}
          />
          <input
            type='text'
            placeholder='Search Admin Org'
            value={searchAdminOrg}
            onChange={e => setSearchAdminOrg(e.target.value)}
          />
          <input
            type='text'
            placeholder='Search Ministry Email Contact'
            value={searchMinistryEmail}
            onChange={e => setSearchMinistryEmail(e.target.value)}
          />
          <input
            type='text'
            placeholder='Search Licensee Email Contact'
            value={searchLicenseeEmail}
            onChange={e => setSearchLicenseeEmail(e.target.value)}
          />
        </div>
        <table>
          <thead>
            <tr>
              <th>Entry Type</th>
              <th>Timber Mark</th>
              <th>Admin Org</th>
              <th>Ministry Contact Email</th>
              <th>Licensee Contact Email</th>
              <th>Issue Date</th>
              <th>Expiry Date</th>
              <th>Net Cruise Volume</th>
              <th>Total Merchantable Area</th>
              <th>Last Calculation Date</th>
              <th>Previous Hectares Reported</th>
              <th>Current Calculation Date</th>
              <th>Total Hectares Logged</th>
              <th>Percent Completed</th>
              <th>Next Report Due</th>
              <th>Ledger Comment</th>
              <th>HBS Billed m3</th>
              <th>Percent Billed</th>
              <th>Scale Site</th>
              <th>Tenure Type Code</th>
              <th>Lump Sum Bonus Offer</th>
              <th>Rebilling Required</th>
              <th>Markholder Client</th>
              <th>Client Number</th>
              <th>Licence CP</th>
              <th>EDRMS</th>
            </tr>
          </thead>
          <tbody>
            {filteredTestData.map(entry => (
              <tr key={entry.id}>
                <td>{entry.entry_type}</td>
                <td>{entry.timber_mark}</td>
                <td>{entry.admin_org}</td>
                <td>{entry.ministry_contact_email}</td>
                <td>{entry.licensee_contact_email}</td>
                <td>{entry.issue_date}</td>
                <td>{entry.expiry_date}</td>
                <td>{entry.net_cruise_volume}</td>
                <td>{entry.total_merchantable_area}</td>
                <td>{entry.last_calculation_date}</td>
                <td>{entry.previous_hectares_reported}</td>
                <td>{entry.current_calculation_date}</td>
                <td>{entry.total_hectares_logged}</td>
                <td>{entry.percent_completed}</td>
                <td>{entry.next_report_due}</td>
                <td>{entry.ledger_comment}</td>
                <td>{entry.hbs_billed_m3}</td>
                <td>{entry.percent_billed}</td>
                <td>{entry.scale_site}</td>
                <td>{entry.tenure_type_code}</td>
                <td>{entry.lump_sum_bonus_offer}</td>
                <td>{entry.rebilling_required ? 'Yes' : 'No'}</td>
                <td>{entry.markholder_client}</td>
                <td>{entry.client_number}</td>
                <td>{entry.licence_cp}</td>
                <td>{entry.edrms}</td>
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

