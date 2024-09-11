import React from 'react';
import { BrowserRouter as Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import FanController from './components/FanController';
import AddNewFan from './components/AddNewFan';
import MaintenanceAlert from './components/MaintenanceAlert';
import Login from './components/Login';
import Register from './components/Register';

function App() {
  return (
    <Routes>
      <div className="container">
        <Route>
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/fan-controller" component={FanController} />
          <Route path="/add-new-fan" component={AddNewFan} />
          <Route path="/maintenance-alert" component={MaintenanceAlert} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/" component={Login} />
        </Route>
      </div>
    </Routes>
  );
}

export default App;