import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <>
      <header style={{ backgroundColor: '#036', borderBottom: '2px solid #fcba19', padding: '0 30px', color: '#fff', display: 'flex', height: '65px', top: 0, position: 'fixed', width: '100%', boxShadow: '0 6px 8px -4px #b3b1b3' }}>
        <div className="banner" style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', margin: '0 10px 0 0' }}>
          <img src="https://developer.gov.bc.ca/static/BCID_H_rgb_rev-20eebe74aef7d92e02732a18b6aa6bbb.svg" alt="Go to the Government of British Columbia website" height="50px" />
          <h1>Hello British Columbia</h1>
        </div>
        <div className="other" style={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
          <button className="nav-btn" onClick={toggleNav} style={{ display: 'block', width: 'auto', margin: '0 0 0 auto', cursor: 'pointer' }}>
            <FontAwesomeIcon icon={faBars} id="menu" />
          </button>
        </div>
      </header>
      {isNavOpen && (
        <nav className="navigation-main" style={{ display: 'block', position: 'fixed', top: '65px', color: '#fcba19', backgroundColor: '#38598a', width: '100%', boxShadow: '0 6px 8px -4px #b3b1b3' }}>
          <div className="container" style={{ padding: '10px 0' }}>
            <ul style={{ display: 'flex', flexDirection: 'column', margin: 0, color: '#fff', listStyle: 'none', marginLeft: '-25px' }}>
              <li style={{ margin: '5px 0' }}>
                <a href="sample.html" className="active" style={{ display: 'flex', fontSize: '0.813em', fontWeight: 'normal', color: '#fff', padding: '0 15px', textDecoration: 'none' }}>
                  Link 1
                </a>
              </li>
              <li style={{ margin: '5px 0' }}>
                <a href="." style={{ display: 'flex', fontSize: '0.813em', fontWeight: 'normal', color: '#fff', padding: '0 15px', textDecoration: 'none' }}>
                  Link 2
                </a>
              </li>
              <li style={{ margin: '5px 0' }}>
                <a href="." style={{ display: 'flex', fontSize: '0.813em', fontWeight: 'normal', color: '#fff', padding: '0 15px', textDecoration: 'none' }}>
                  Link 3
                </a>
              </li>
              <li style={{ margin: '5px 0' }}>
                <a href="." style={{ display: 'flex', fontSize: '0.813em', fontWeight: 'normal', color: '#fff', padding: '0 15px', textDecoration: 'none' }}>
                  Link 4
                </a>
              </li>
              <li style={{ margin: '5px 0' }}>
                <a href="." style={{ display: 'flex', fontSize: '0.813em', fontWeight: 'normal', color: '#fff', padding: '0 15px', textDecoration: 'none' }}>
                  Link 5
                </a>
              </li>
              <li style={{ margin: '5px 0' }}>
                <a href="." style={{ display: 'flex', fontSize: '0.813em', fontWeight: 'normal', color: '#fff', padding: '0 15px', textDecoration: 'none' }}>
                  Link 6
                </a>
              </li>
            </ul>
          </div>
        </nav>
      )}
    </>
  );
};

export default Header;
