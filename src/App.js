import React from 'react';
import { BrowserRouter,Router,Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import FanController from './components/FanController';
import AddNewFan from './components/AddNewFan';
import MaintenanceAlert from './components/MaintenanceAlert';
import Login from './components/Login';
import Register from './components/Register';

/*/import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import FanController from './components/FanController';
import AddNewFan from './components/AddNewFan';
import MaintenanceAlert from './components/MaintenanceAlert';
import Login from './components/Login';
import Register from './components/Register';/*/

function App() {
  return (
        <BrowserRouter>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/fan-controller" element={<FanController />} />
          <Route path="/add-new-fan" element={<AddNewFan />} />
          <Route path="/maintenance-alert" element={<MaintenanceAlert />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Login />} />
        </Routes>
        </BrowserRouter>
  );
}

export default App;
