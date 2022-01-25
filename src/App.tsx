import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import DashboardAdm from './pages/DashboardAdm';

function App() {
  return (
    <Router>
      {/* <AuthContextProvider> */}
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard_adm" element={<DashboardAdm />} />
        </Routes>
      {/* </AuthContextProvider> */}
    </Router>
  );
}

export default App;
