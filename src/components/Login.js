import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
//import { loginUser } from '../api/api';

const Login = ({ onLoginSuccess }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await loginUser({ username, password });
      localStorage.setItem('token', data.token);
      onLoginSuccess();
      navigate('/add-fan'); // Redirect to fan dashboard after login
    } catch (error) {
      alert('Login failed!');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>

      {/* Button to navigate to Register page */}
      <button onClick={() => navigate('/register')}>Register</button>
    </div>
  );
};

export default Login;
