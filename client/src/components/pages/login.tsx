import React from 'react';
import '../../res/css/forms.css';

export const LoginPage: React.FC = () => {
  return (
    <div className="form-div">
      <form action="" id="login-form">
        <h2>Login</h2>
        <label htmlFor="email">Email</label>
        <br />
        <input type="email" size={50} name="email" required />
        <br />

        <label htmlFor="Password">Password</label>
        <br />
        <input type="password" size={50} name="password" required />
        <br />

        <button type="submit" form="login-form">
          Login
        </button>
      </form>
    </div>
  );
};
