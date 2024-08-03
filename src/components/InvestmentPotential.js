import React from 'react';
import { FaChartLine } from 'react-icons/fa';

const InvestmentPotential = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Investment Potential</h2>
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <FaChartLine className="text-6xl text-green-500 mb-4" />
            <h3 className="text-2xl font-semibold mb-4">Historical Performance</h3>
            <p className="text-gray-600">
              Similar collectible coins have shown an average annual growth of 8-12% over the past decade.
            </p>
          </div>
          <div className="md:w-1/2 md:pl-8">
            <blockquote className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-lg mb-4">
                "The Bob Sapp Limited Edition Gold Coin represents a unique opportunity for investors to diversify their portfolio with a tangible asset that combines precious metal value with collectible appeal."
              </p>
              <footer className="text-gray-600">
                - John Doe, Numismatic Expert
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestmentPotential;
