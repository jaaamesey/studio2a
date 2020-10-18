import React from 'react';
import axios from 'axios';
import '../../res/css/forms.css';

import { login } from '../../user';

export const LoginPage: React.FC = () => {
  const [message, setMessage] = React.useState('');
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  return (
    <div className="form-div">
      <div>
        <h2>Login</h2>
        <label htmlFor="username">Username</label>
        <br />
        <input
          type="username"
          size={50}
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </div>

      <br />

      <div>
        <label htmlFor="Password">Password</label>
        <br />
        <input
          type="password"
          size={50}
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>

      <br />

      <button
        onClick={async () => {
          try {
            setMessage('Logging in...');
            await login(username, password);
            setMessage('Logged in successfully.');
          } catch (e) {
            setMessage(e);
          }
        }}
      >
        Login
      </button>

      {message != '' && <label>{message}</label>}
    </div>
  );
};
