import React from 'react';

const SubscriptionsPage = () => (
  <div className="p-6 sm:p-8">
    <h2 className="text-3xl font-bold text-[#002147] mb-6">Subscriptions</h2>
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <p className="text-gray-700">You currently have no active subscriptions.</p>
      <button
        onClick={() => alert('Browse subscriptions functionality not implemented.')}
        className="mt-6 px-6 py-2 bg-[#002147] text-white font-semibold rounded-full shadow-md hover:bg-[#1a3a6b] transition duration-300 ease-in-out transform hover:scale-105"
      >
        Browse Subscriptions
      </button>
    </div>
  </div>
);

export default SubscriptionsPage;