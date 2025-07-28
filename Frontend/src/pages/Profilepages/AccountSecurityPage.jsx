import React, { useState } from 'react';
import './AccountSecurityPage.css';

const AccountSecurityPage = () => {
  const [email] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handlePasswordChange = () => {
    if (newPassword !== confirmPassword) {
      alert("Passwords do not match");
    } else {
      alert("Password changed (functionality not implemented)");
    }
  };

  return (
    <div className="account-page">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="sidebar-header">
          <div className="avatar">M</div>
          <h2 className="username">Manjari</h2>
        </div>
        <ul className="menu">
          <li>View public profile</li>
          <li>Profile</li>
          <li>Photo</li>
          <li className="active">Account Security</li>
          <li>Subscriptions</li>
          <li>Payment methods</li>
          <li>Privacy</li>
          <li>Notification Preferences</li>
          <li>Academic Details</li>
          <li>Close account</li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        <h1 className="title">Account</h1>
        <p className="subtitle">Edit your account settings and change your password here.</p>

        {/* Email */}
        <div className="card">
          <label>Email:</label>
          <div className="email-section">
            <input
              type="email"
              value={`Your email address is ${email}`}
              readOnly
              className="email-input"
            />
            <button className="edit-btn">✎</button>
          </div>
        </div>

        {/* Password Section */}
        <div className="card">
          <label>New password</label>
          <input
            type="password"
            placeholder="Enter new password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />

          <label>Confirm new password</label>
          <input
            type="password"
            placeholder="Re-type new password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

          <button className="submit-btn" onClick={handlePasswordChange}>Change password</button>
        </div>
      </main>
    </div>
  );
};

export default AccountSecurityPage;
