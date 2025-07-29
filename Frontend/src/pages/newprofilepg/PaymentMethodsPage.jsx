import React from 'react';

const PaymentMethodsPage = () => (
  <div className="p-6 sm:p-8">
    <h2 className="text-3xl font-bold text-[#002147] mb-6">Payment methods</h2>
    <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
      <label htmlFor="showSavedMethods" className="flex items-center cursor-pointer mb-4">
        <input
          type="checkbox"
          id="showSavedMethods"
          className="form-checkbox h-5 w-5 text-[#002147] rounded focus:ring-[#002147]"
          defaultChecked
        />
        <span className="ml-2 text-gray-700">Show my saved payment methods on the checkout step.</span>
      </label>
      <h3 className="text-xl font-semibold text-[#002147] mb-4">Your saved payment methods</h3>
      <div className="border-2 border-dashed border-gray-300 p-8 text-center text-gray-500 rounded-lg">
        You don't have any saved payment method
      </div>
      <button
        onClick={() => alert('Add payment method functionality not implemented.')}
        className="mt-6 px-6 py-2 bg-[#002147] text-white font-semibold rounded-full shadow-md hover:bg-[#1a3a6b] transition duration-300 ease-in-out transform hover:scale-105"
      >
        Add Payment Method
      </button>
    </div>
  </div>
);

export default PaymentMethodsPage;