import React, { useState } from 'react';
import './login.css';

const LoginForm = () => {
  const [role, setRole] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const login = () => {
    // You can handle login logic here
    console.log('Role:', role);
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className="container">
      <h2><b>LOG IN</b></h2>

      <div className="roles">
        <label>
          Admin
          <input
            type="radio"
            name="role"
            value="admin"
            checked={role === 'admin'}
            onChange={() => setRole('admin')}
          />
        </label>
        <label>
          User
          <input
            type="radio"
            name="role"
            value="user"
            checked={role === 'user'}
            onChange={() => setRole('user')}
          />
        </label>
      </div>

      <div className="input">
        <label htmlFor="email">Email:</label>
        <input
          type="text"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="input">
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <button className="button" onClick={login}>Log in</button>

      <span><a href="forgotpassword.html">Forgot Password?</a></span>

      <div className="signup-line">
        <span>Don't have an account?</span>
        <span><a href="signup.html">Sign Up</a></span>
      </div>
    </div>
  );
};

export default LoginForm;
