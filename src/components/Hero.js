import React from 'react';

const Hero = () => {
  return (
    <section className="bg-gray-100 py-20">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <img src="/images/bob-sapp-coin.jpg" alt="Bob Sapp Gold Coin" className="rounded-lg shadow-lg" />
        </div>
        <div className="md:w-1/2 md:pl-8">
          <h1 className="text-4xl font-bold mb-4">Introducing the Bob Sapp Limited Edition Gold Coin</h1>
          <p className="text-xl mb-6">A Knockout Investment Opportunity</p>
          <button className="bg-yellow-500 text-gray-900 font-bold py-3 px-6 rounded-full hover:bg-yellow-400 transition duration-300">
            Reserve Your Coin Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
