import React from 'react';
import { FaPlay } from 'react-icons/fa';

const UnboxingExperience = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Unboxing Experience</h2>
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <div className="relative">
              <img src="/images/unboxing.jpg" alt="Unboxing Experience" className="rounded-lg shadow-lg" />
              <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white text-gray-900 rounded-full p-4">
                <FaPlay className="text-2xl" />
              </button>
            </div>
          </div>
          <div className="md:w-1/2 md:pl-8">
            <h3 className="text-2xl font-semibold mb-4">High-Tech Packaging</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>Premium wood exterior with velvet interior</li>
              <li>Interactive LED lighting</li>
              <li>NFC-enabled authenticity verification</li>
              <li>Augmented reality experience via smartphone app</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UnboxingExperience;
