import React, { useState } from 'react';
import axios from 'axios';

function AddNewFan() {
  const [fanId, setFanId] = useState('');
  const [runtime, setRuntime] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/api/fans', { id: fanId, runtime })
      .then(response => {
        alert('Fan added successfully');
        setFanId('');
        setRuntime('');
      })
      .catch(error => console.error('Error adding new fan:', error));
  };

  return (
    <div>
      <h2>Add New Fan</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="fanId">Fan ID</label>
          <input
            type="text"
            id="fanId"
            value={fanId}
            onChange={(e) => setFanId(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="runtime">Runtime</label>
          <input
            type="number"
            id="runtime"
            value={runtime}
            onChange={(e) => setRuntime(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="button">Add Fan</button>
      </form>
    </div>
  );
}

export default AddNewFan;