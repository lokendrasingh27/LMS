import React from 'react';
import './CloseAccount.css';

const ProfilePage = () => {
  return (
    <div className="container">
      <aside className="sidebar">
        <div className="profile-info">
          <div className="avatar">M</div>
          <h2>Manjari</h2>
        </div>
        <ul className="menu">
          <li>View public profile</li>
          <li>Photo</li>
          <li>Account Security</li>
          <li>Subscriptions</li>
          <li>Payment methods</li>
          <li>Privacy</li>
          <li>Notification Preferences</li>
          <li>Academic Detail</li>
          <li>Close account</li>
          <li className="highlighted">Close account</li>
        </ul>
      </aside>

      <main className="main-content">
        <h1>Close Account</h1>
        <p className="subheading">Close your account permanently.</p>
        <p className="warning">
          <strong>Warning:</strong> If you close your account, you will be unsubscribed from all your
          courses and will lose access to your account and data associated with it forever, even if
          you create a new account with the same email in the future.
        </p>
        <p>
          You have 14 days after submission to reinstate your account by contacting{' '}
          <a href="https://gradex.com">gradex.com</a>.
        </p>
        <button className="close-btn">Close account</button>
      </main>
    </div>
  );
};

export default ProfilePage;
