import React, { useState } from 'react';
import './PrivacySettings.css';

const PrivacySettings = () => {
  const [showProfile, setShowProfile] = useState(true);
  const [showCourses, setShowCourses] = useState(true);

  const handleSave = () => {
    // Logic to save preferences (e.g., API call)
    alert('Preferences saved!');
  };

  return (
    <div className="privacy-container">
      <aside className="sidebar">
        <div className="profile-initial">M</div>
        <h2>Manjari</h2>
        <ul>
          <li>View public profile</li>
          <li>Profile</li>
          <li>Photo</li>
          <li>Account Security</li>
          <li>Subscriptions</li>
          <li>Payment methods</li>
          <li className="active">Privacy</li>
          <li>Notification Preferences</li>
          <li>Academic Details</li>
          <li>Close account</li>
        </ul>
      </aside>

      <main className="privacy-content">
        <h1>Privacy</h1>
        <p>Modify your privacy settings here.</p>

        <div className="checkbox-group">
            <div>
          <label>
            <input
              type="checkbox"
              checked={showProfile}
              onChange={() => setShowProfile(!showProfile)}
            />
            Show your profile to logged-in users
          </label>
          </div>
          <div>
             <label>
            <input
              type="checkbox"
              checked={showCourses}
              onChange={() => setShowCourses(!showCourses)}
            />
            Show courses you're taking on your profile page
          </label>
          </div>
        </div>

        <button onClick={handleSave}>Save</button>
      </main>
    </div>
  );
};

export default PrivacySettings;
