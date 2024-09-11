import React, { useState, useEffect } from 'react';
import axios from 'axios';

function MaintenanceAlert() {
  const [alerts, setAlerts] = useState([]);

  useEffect(() => {
    axios.get('/api/maintenance-alerts')
      .then(response => setAlerts(response.data))
      .catch(error => console.error('Error fetching maintenance alerts:', error));
  }, []);

  return (
    <div>
      <h2>Maintenance Alerts</h2>
      <ul>
        {alerts.map(alert => (
          <li key={alert.id}>
            Fan ID: {alert.id} - {alert.message}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MaintenanceAlert;