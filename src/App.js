// App.js

import React, { createContext } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import { useState, useEffect, useCallback } from 'react';
// import { initializeKeycloak } from './services/keycloak';
import HomePage from './pages/HomePage.js';
import DashboardPage from './pages/DashboardPage';

export const AuthenticationContext = createContext('authentication');

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={ <HomePage />} />
        <Route path="/dashboard" element={ <DashboardPage />} />
      </Routes>
    </Router>
  );
}

export default App;


// *******KEYCLOAK INTEGRATION- commenting out until working on backend
// export const AuthenticationContext = createContext('authentication');

// function App() {
//   const [keycloak, setKeycloak] = useState(null);
//   const [isAuthenticated, setIsAuthenticated] = useState(false);

//   const initKeycloak = useCallback(async () => {
//     const _keycloak = await initializeKeycloak();
//     setIsAuthenticated(_keycloak.authenticated);
//     setKeycloak(_keycloak);
//   }, []);

//   useEffect(() => {
//     initKeycloak();
//   }, [initKeycloak]);

//   return (
//     <>
//       {isAuthenticated && ( 
//         <AuthenticationContext.Provider value={keycloak}>
//           <Router>
//             <Routes>
//               <Route path="/" element={<HomePage />} />
//               <Route path="/dashboard" element={<DashboardPage />} />
//             </Routes>
//           </Router>
//         </AuthenticationContext.Provider>
//       )} 
//     </>
//   );
// }

// export default App;