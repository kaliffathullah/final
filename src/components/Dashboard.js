import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Dashboard() {
  const [fanData, setFanData] = useState([]);

  useEffect(() => {
    axios.get('/api/fans')
      .then(response => setFanData(response.data))
      .catch(error => console.error('Error fetching fan data:', error));
  }, []);

  return (
    <div>
      <h2>Dashboard</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Runtime</th>
            <th>Last Maintenance</th>
          </tr>
        </thead>
        <tbody>
          {fanData.map(fan => (
            <tr key={fan.id}>
              <td>{fan.id}</td>
              <td>{fan.runtime}</td>
              <td>{fan.lastMaintenance}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Dashboard;