import React, { useState } from 'react';
import './signup.css';

const LoginForm = () => {
  const [role, setRole] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const login = () => {
    // You can handle login logic here
    console.log('Role:', role);
    console.log('Username:', username);
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
        <label htmlFor="username">Username:</label>
        <input
          id="username"
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>

      <div className="input">
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="input">
        <label htmlFor="password">Password:</label>
        <input
          id="password"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <button className="button" onClick={login}>Log in</button>

      <span><a href="forgotpassword.html">Forgot Password?</a></span>

      <div >
         

      <button className="button" onClick={handleSubmit}>
        Sign Up
      </button>

      <a href="/login">Already a user</a>
    
      </div>
    </div>
  );
};

export default LoginForm;
