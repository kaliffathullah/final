import React, { useState, useEffect } from 'react';
import axios from 'axios';

function FanController() {
  const [status, setStatus] = useState('off');
  const [controlStatus, setControlStatus] = useState('');

  const handleToggle = () => {
    const newStatus = status === 'off' ? 'on' : 'off';
    axios.post('/api/fan/control', { status: newStatus })
      .then(() => setStatus(newStatus))
      .catch(error => console.error('Error controlling fan:', error));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      axios.get('/api/fan/status')
        .then(response => setControlStatus(response.data.status))
        .catch(error => console.error('Error fetching fan status:', error));
    }, 5000); // Check every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h2>Fan Controller</h2>
      <button onClick={handleToggle}>
        Turn {status === 'off' ? 'On' : 'Off'}
      </button>
      <p>Current status: {controlStatus}</p>
    </div>
  );
}

export default FanController;