import React, { useState } from 'react';
import './EditProfilePage.css';

const EditProfilePage = () => {
  const [formData, setFormData] = useState({
    firstName: 'Manjari',
    lastName: '',
    headline: '',
    biography: '',
    language: 'English (US)',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="profile-container">
      <aside className="sidebar">
        <div className="profile-info">
          <div className="avatar">M</div>
          <h2>Manjari</h2>
        </div>
        <ul className="menu">
          <li>View public profile</li>
          <li className="highlighted">Profile</li>
          <li>Photo</li>
          <li>Account Security</li>
          <li>Subscriptions</li>
          <li>Payment methods</li>
          <li>Privacy</li>
          <li>Notification Preferences</li>
          <li>Academic Details</li>
          <li>Close account</li>
        </ul>
      </aside>

      <main className="profile-form">
        <h1>Public profile</h1>
        <p>Add information about yourself</p>

        <label>Basics:</label>
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={formData.firstName}
          onChange={handleChange}
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={handleChange}
        />
        <input
          type="text"
          name="headline"
          placeholder="Headline"
          maxLength={60}
          value={formData.headline}
          onChange={handleChange}
        />
        <small>Add a professional headline like "Instructor at LMS" or "Developer"</small>

        <label>Biography</label>
        <textarea
          name="biography"
          placeholder="Biography"
          rows="5"
          value={formData.biography}
          onChange={handleChange}
        ></textarea>
        <small>Links and coupon codes are not permitted in this section.</small>

        <label>Language</label>
        <select name="language" value={formData.language} onChange={handleChange}>
          <option>English (US)</option>
          <option>English (UK)</option>
          <option>Hindi</option>
          <option>Spanish</option>
        </select>
      </main>
    </div>
  );
};

export default EditProfilePage;
