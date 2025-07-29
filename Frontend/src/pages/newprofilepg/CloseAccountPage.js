import React from 'react';

const CloseAccountPage = () => (
  <div className="p-6 sm:p-8">
    <h2 className="text-3xl font-bold text-[#002147] mb-6">Close Account</h2>
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <p className="text-red-600 font-semibold mb-4">
        Warning: If you close your account, you will be unsubscribed from all of your courses and will lose access to your account and data associated with your account forever, even if you choose to create a new account using the same email address in the future.
      </p>
      <p className="text-gray-700 mb-6">
        Please note, if you want to reinstate your account after submitting a deletion request, you will have 14 days after the initial submission date to reach out to support@example.com to cancel this request.
      </p>
      <button
        onClick={() => {
          // Using a custom modal/message box instead of window.confirm
          const confirmClose = window.confirm('Are you sure you want to close your account? This action cannot be undone.');
          if (confirmClose) {
            alert('Account closure initiated. You will receive an email with further instructions.');
            // In a real app, send request to backend to close account
          }
        }}
        className="px-6 py-2 bg-red-600 text-white font-semibold rounded-full shadow-md hover:bg-red-700 transition duration-300 ease-in-out transform hover:scale-105"
      >
        Close account
      </button>
    </div>
  </div>
);

export default CloseAccountPage;