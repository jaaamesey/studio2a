import React from 'react';
import '../../res/css/forms.css';

export const RegistrationPage: React.FC = () => {
  return (
    <div className="form-div">
      <form action="" id="registration-form">
        <h2>Sign up</h2>
        <div className="firstname-div">
          <label htmlFor="first_name">First Name</label>
          <br />
          <input type="text" size={20} name="first_name" required />
        </div>

        <div className="lastname-div">
          <label htmlFor="last_name">Last Name</label>
          <br />
          <input type="text" size={20} name="last_name" required />
        </div>
        <br />

        <label htmlFor="email">Email</label>
        <br />
        <input type="email" size={50} name="email" required />
        <br />

        <label htmlFor="Password">Password</label>
        <br />
        <input type="password" size={50} name="password" required />
        <br />

        <label htmlFor="confirm_password">Confirm Password</label>
        <br />
        <input type="password" size={50} name="confirm_password" required />
        <br />

        <button type="submit" form="registration-form">
          Sign Up
        </button>
      </form>
    </div>
  );
};
