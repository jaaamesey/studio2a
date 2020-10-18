import React from 'react';
import axios from 'axios';
import '../../res/css/forms.css';
import { login } from '../../user';

export const RegistrationPage: React.FC = () => {
  const [message, setMessage] = React.useState('');
  const [username, setUsername] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');

  const isUsernameValid = () => {
    const regex = /^([a-zA-Z0-9]{1,32})$/;
    return regex.test(email);
  };
  const isEmailValid = () => {
    const regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(email);
  };
  const tryRegister = async () => {
    if (
      username == '' ||
      email == '' ||
      password == '' ||
      confirmPassword == ''
    ) {
      setMessage('Please fill all fields.');
    } else if (!isEmailValid) {
      setMessage('Email is invalid.');
    } else if (!isUsernameValid) {
      setMessage('Username should be only up to alphanumeric characters.');
    } else if (password != confirmPassword) {
      setPassword('');
      setConfirmPassword('');
      setMessage('Passwords do not match.');
    } else {
      const registerAttempt = await axios.post(
        'http://127.0.0.1:9000/user/register',
        {
          user: {
            username,
            email,
            password,
          },
        },
      );
      if (!registerAttempt.data.isSuccess) {
        setMessage('Invalid entry. The provided username may already exist.');
        return;
      }
      setMessage('Logging in to your new account...');
      try {
        await login(username, password);
        setMessage('Logged in successfully.');
      } catch (e) {
        setMessage(
          e + ' (Your account was created successfully - try logging in later)',
        );
      }
    }
  };
  return (
    <div className="form-div">
      <h2>Sign up</h2>
      <div>
        <label htmlFor="username">Username</label>
        <br />
        <input
          type="text"
          maxLength={32}
          size={50}
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </div>

      <br />

      <div>
        <label htmlFor="email">Email</label>
        <br />
        <input
          type="email"
          maxLength={100}
          size={50}
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>

      <br />

      <div>
        <label htmlFor="Password">Password</label>
        <br />
        <input
          type="password"
          maxLength={64}
          size={50}
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>

      <br />

      <div>
        <label htmlFor="confirm_password">Confirm Password</label>
        <br />
        <input
          type="password"
          maxLength={64}
          size={50}
          name="confirm_password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
      </div>
      <br />

      <button onClick={() => tryRegister()}>Sign Up</button>

      {message != '' && <label>{message}</label>}
    </div>
  );
};
