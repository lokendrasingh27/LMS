import React, { useState, useEffect } from 'react';

const PhotoPage = ({ profileData, handleChange, handleSave }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(profileData.profilePicture);

  useEffect(() => {
    if (selectedFile) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewUrl(reader.result);
      };
      reader.readAsDataURL(selectedFile);
    } else {
      setPreviewUrl(profileData.profilePicture);
    }
  }, [selectedFile, profileData.profilePicture]);

  const handleFileChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setSelectedFile(event.target.files[0]);
    } else {
      setSelectedFile(null);
    }
  };

  const handleUploadImage = () => {
    if (selectedFile) {
      // In a real application, you would upload the file to a server
      // and then update the profileData.profilePicture with the new URL.
      // For this example, we'll just use the preview URL as the new profile picture.
      handleChange({ target: { name: 'profilePicture', value: previewUrl } });
      alert('Image uploaded and saved!');
    } else {
      alert('Please select a file to upload.');
    }
  };

  return (
    <div className="p-6 sm:p-8">
      <h2 className="text-3xl font-bold text-[#002147] mb-6">Photo</h2>
      <p className="text-gray-600 mb-8">Add a nice photo of yourself for your profile.</p>

      <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
        <h3 className="text-xl font-semibold text-[#002147] mb-4">Image preview</h3>
        <div className="flex justify-center items-center w-48 h-48 sm:w-64 sm:h-64 border-2 border-dashed border-gray-300 rounded-lg overflow-hidden mx-auto mb-6">
          {previewUrl ? (
            <img src={previewUrl} alt="Image Preview" className="w-full h-full object-cover" />
          ) : (
            <svg
              className="w-24 h-24 text-gray-400"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          )}
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <input
            type="file"
            id="profileImageUpload"
            accept="image/*"
            onChange={handleFileChange}
            className="block w-full text-sm text-gray-500
                       file:mr-4 file:py-2 file:px-4
                       file:rounded-full file:border-0
                       file:text-sm file:font-semibold
                       file:bg-[#A6B1E1] file:text-[#002147]
                       hover:file:bg-[#8e9acf] cursor-pointer"
          />
          <button
            onClick={handleUploadImage}
            className="px-6 py-2 bg-[#002147] text-white font-semibold rounded-full shadow-md hover:bg-[#1a3a6b] transition duration-300 ease-in-out transform hover:scale-105"
          >
            Upload Image
          </button>
        </div>
      </div>
    </div>
  );
};

export default PhotoPage;