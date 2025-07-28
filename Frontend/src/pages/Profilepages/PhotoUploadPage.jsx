import React, { useState } from 'react';
import './PhotoUploadPage.css'; // import the custom CSS

const PhotoUploadPage = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleUpload = () => {
    alert('Image uploaded (functionality not implemented)');
  };

  const handleSave = () => {
    alert('Saved (functionality not implemented)');
  };

  return (
    <div className="photo-page">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="profile-block">
          <div className="avatar-circle">M</div>
          <h2>Manjari</h2>
        </div>
        <nav>
          <ul className="menu">
            <li>View public profile</li>
            <li>Profile</li>
            <li className="active">Photo</li>
            <li>Account Security</li>
            <li>Subscriptions</li>
            <li>Payment methods</li>
            <li>Privacy</li>
            <li>Notification Preferences</li>
            <li>Academic Details</li>
            <li>Close account</li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        <h1>Photo</h1>
        <p className="description">Add a nice photo of yourself for your profile.</p>

        <div className="image-box">
          <h2>Image preview</h2>
          <div className="image-preview">
            <svg className="placeholder-icon" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0M12 12v.01" />
            </svg>
          </div>

          <div className="file-input">
            <label>Add / Change Image</label>
            <input type="file" onChange={handleFileChange} />
          </div>

          <button className="upload-btn" onClick={handleUpload}>Upload image</button>
        </div>

        <button className="save-btn" onClick={handleSave}>Save</button>
      </main>
    </div>
  );
};

export default PhotoUploadPage;
