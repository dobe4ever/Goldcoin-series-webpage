import React from 'react';
import { FaWeightHanging, FaRulerCombined, FaCertificate } from 'react-icons/fa';

const ProductDetails = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Product Details</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <FaWeightHanging className="text-4xl mb-4 mx-auto text-yellow-500" />
            <h3 className="text-xl font-semibold mb-2">Weight</h3>
            <p>1 oz (31.1 grams)</p>
          </div>
          <div className="text-center">
            <FaCertificate className="text-4xl mb-4 mx-auto text-yellow-500" />
            <h3 className="text-xl font-semibold mb-2">Purity</h3>
            <p>99.99% Pure Gold</p>
          </div>
          <div className="text-center">
            <FaRulerCombined className="text-4xl mb-4 mx-auto text-yellow-500" />
            <h3 className="text-xl font-semibold mb-2">Dimensions</h3>
            <p>40mm diameter</p>
          </div>
        </div>
        <div className="mt-12 text-center">
          <p className="text-xl font-semibold mb-4">Limited Edition: Only 1,000 minted</p>
          <blockquote className="italic text-gray-600">
            "This coin represents the pinnacle of my career and the legacy I want to leave behind." - Bob Sapp
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
