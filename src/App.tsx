import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import DashboardAdm from './pages/DashboardAdm';

function App() {
  return (
    <BrowserRouter>
      {/* <AuthContextProvider> */}
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/dashboard_adm" component={DashboardAdm} />
        </Switch>
      {/* </AuthContextProvider> */}
    </BrowserRouter>
  );
}

export default App;
