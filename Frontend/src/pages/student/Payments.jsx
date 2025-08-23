import React, { useState } from 'react';
import { FaCreditCard, FaMobileAlt, FaLock, FaCheck } from 'react-icons/fa';

const Payments = () => {
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [cardNumber, setCardNumber] = useState('');
  const [cardName, setCardName] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvv, setCvv] = useState('');
  const [upiId, setUpiId] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const course = {
    title: "Advanced React Development",
    price: 89.99,
    instructor: "Jane Smith"
  };

  const handlePayment = (e) => {
    e.preventDefault();
    setIsProcessing(true);
    
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
    }, 2000);
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-2">
        <div className="bg-white rounded-lg shadow-md p-4 max-w-sm text-center">
          <FaCheck className="text-green-600 text-3xl mb-2" />
          <h2 className="text-lg font-bold text-gray-800">Payment Successful!</h2>
          <p className="text-gray-600">You've enrolled in {course.title}</p>
          <button 
            onClick={() => setIsSuccess(false)}
            className="mt-4 w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700"
          >
            Start Learning
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-2">
      <div className="bg-white rounded-lg shadow-md w-full max-w-sm">
        <div className="bg-indigo-600 text-white p-4">
          <h1 className="text-lg font-bold">Gradix LMS</h1>
          <p className="text-sm">Secure Payment Gateway</p>
        </div>

        <div className="p-4 border-b">
          <h2 className="text-md font-bold">Enrolling in:</h2>
          <p className="text-gray-600">{course.title}</p>
          <p className="text-sm text-gray-500">Instructor: {course.instructor}</p>
          <div className="flex justify-between mt-2">
            <span>Total Amount:</span>
            <span className="text-lg font-bold text-indigo-600">${course.price}</span>
          </div>
        </div>

        <div className="p-4">
          <div className="flex space-x-2 mb-4">
            <button
              onClick={() => setPaymentMethod('card')}
              className={`flex-1 p-2 rounded border ${
                paymentMethod === 'card' 
                  ? 'border-indigo-600 bg-indigo-50 text-indigo-700' 
                  : 'border-gray-300 text-gray-600'
              }`}
            >
              <FaCreditCard className="mr-1" /> Card
            </button>
            <button
              onClick={() => setPaymentMethod('upi')}
              className={`flex-1 p-2 rounded border ${
                paymentMethod === 'upi' 
                  ? 'border-indigo-600 bg-indigo-50 text-indigo-700' 
                  : 'border-gray-300 text-gray-600'
              }`}
            >
              <FaMobileAlt className="mr-1" /> UPI
            </button>
          </div>

          <form onSubmit={handlePayment}>
            {paymentMethod === 'card' ? (
              <div className="space-y-2">
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded"
                  placeholder="Card Number"
                  value={cardNumber}
                  onChange={(e) => setCardNumber(e.target.value)}
                  required
                />
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded"
                  placeholder="Cardholder Name"
                  value={cardName}
                  onChange={(e) => setCardName(e.target.value)}
                  required
                />
                <div className="flex space-x-2">
                  <input
                    type="text"
                    className="flex-1 p-2 border border-gray-300 rounded"
                    placeholder="MM/YY"
                    value={expiry}
                    onChange={(e) => setExpiry(e.target.value)}
                    required
                  />
                  <input
                    type="text"
                    className="flex-1 p-2 border border-gray-300 rounded"
                    placeholder="CVV"
                    value={cvv}
                    onChange={(e) => setCvv(e.target.value)}
                    required
                  />
                </div>
              </div>
            ) : (
              <div className="space-y-2">
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded"
                  placeholder="UPI ID"
                  value={upiId}
                  onChange={(e) => setUpiId(e.target.value)}
                  required
                />
                <p className="text-sm text-gray-600">
                  You will be redirected to your UPI app to complete the payment.
                </p>
              </div>
            )}

            <button
              type="submit"
              disabled={isProcessing}
              className="w-full bg-indigo-600 text-white py-2 rounded mt-4 flex items-center justify-center"
            >
              {isProcessing ? (
                <span>Processing...</span>
              ) : (
                <>
                  <FaLock className="mr-1" /> Pay ${course.price}
                </>
              )}
            </button>
          </form>

          <div className="flex items-center justify-center mt-2 text-sm text-gray-500">
            <FaLock className="mr-1 text-gray-400" />
            <span>Secure and encrypted payment</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payments;