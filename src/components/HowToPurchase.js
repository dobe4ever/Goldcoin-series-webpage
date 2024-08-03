import React from 'react';
import { FaShoppingCart, FaCreditCard, FaShippingFast } from 'react-icons/fa';

const HowToPurchase = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">How to Purchase</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <FaShoppingCart className="text-4xl mb-4 text-blue-500" />
            <h3 className="text-xl font-semibold mb-2">1. Select Your Coin</h3>
            <p className="text-gray-600">Choose your desired quantity (limit 5 per customer)</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <FaCreditCard className="text-4xl mb-4 text-green-500" />
            <h3 className="text-xl font-semibold mb-2">2. Secure Payment</h3>
            <p className="text-gray-600">Pay with credit card, bank transfer, or cryptocurrency</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <FaShippingFast className="text-4xl mb-4 text-red-500" />
            <h3 className="text-xl font-semibold mb-2">3. Shipping & Insurance</h3>
            <p className="text-gray-600">Free insured shipping on all orders</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowToPurchase;
