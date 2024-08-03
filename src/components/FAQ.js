import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 py-4">
      <button
        className="flex justify-between items-center w-full text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-semibold">{question}</span>
        {isOpen ? <FaChevronUp /> : <FaChevronDown />}
      </button>
      {isOpen && <p className="mt-2 text-gray-600">{answer}</p>}
    </div>
  );
};

const FAQ = () => {
  const faqs = [
    {
      question: "What makes this coin unique?",
      answer: "The Bob Sapp Limited Edition Gold Coin is a rare collectible, combining the appeal of a sports legend with the intrinsic value of pure gold."
    },
    {
      question: "How is the coin's authenticity guaranteed?",
      answer: "Each coin comes with a Certificate of Authenticity and features advanced security measures, including NFC verification."
    },
    {
      question: "Can I resell the coin in the future?",
      answer: "Yes, you can resell the coin. Its limited edition status and potential appreciation in gold value may make it an attractive investment."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
        <div className="max-w-2xl mx-auto">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
