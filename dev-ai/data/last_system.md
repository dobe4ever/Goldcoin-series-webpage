`File Tree`
```txt
Goldcoin-series-webpage
├── dev-ai
│   └── data
│       └── last_system.md
├── generate_codebase.py
├── package.json
├── package-lock.json
├── postcss.config.js
├── public
│   ├── favicon.svg
│   ├── images
│   │   ├── bob-sapp-coin.jpg
│   │   ├── logo.png
│   │   └── unboxing.jpg
│   └── index.html
├── README.md
├── replit.nix
├── src
│   ├── App.css
│   ├── App.js
│   ├── components
│   │   ├── FAQ.js
│   │   ├── Footer.js
│   │   ├── Header.js
│   │   ├── Hero.js
│   │   ├── HowToPurchase.js
│   │   ├── InvestmentPotential.js
│   │   ├── ProductDetails.js
│   │   └── UnboxingExperience.js
│   ├── index.css
│   └── index.js
├── tailwind.config.js
└── tsconfig.json

7 directories, 26 files
```

`src/App.css`
```css
main {
}
```

`src/App.js`
```js
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductDetails from './components/ProductDetails';
import InvestmentPotential from './components/InvestmentPotential';
import UnboxingExperience from './components/UnboxingExperience';
import HowToPurchase from './components/HowToPurchase';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans">
      <Header />
      <Hero />
      <ProductDetails />
      <InvestmentPotential />
      <UnboxingExperience />
      <HowToPurchase />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
```

`src/index.js`
```js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

```

`src/index.css`
```css
@import 'tailwindcss/base';
@import 'tailwindcss/components';
@import 'tailwindcss/utilities';

body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

```

`src/components/Header.js`
```js
import React from 'react';
import { FaBars } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <img src="/images/logo.png" alt="Mentora Logo" className="h-10" />
        <nav className="hidden md:flex space-x-4">
          <a href="#" className="hover:text-gray-300">Home</a>
          <a href="#" className="hover:text-gray-300">About</a>
          <a href="#" className="hover:text-gray-300">Coin Series</a>
          <a href="#" className="hover:text-gray-300">Investment</a>
          <a href="#" className="hover:text-gray-300">Contact</a>
        </nav>
        <button className="md:hidden">
          <FaBars className="text-2xl" />
        </button>
      </div>
    </header>
  );
};

export default Header;

```

`src/components/Hero.js`
```js
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

```

`src/components/ProductDetails.js`
```js
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

```

`src/components/InvestmentPotential.js`
```js
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

```

`src/components/UnboxingExperience.js`
```js
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

```

`src/components/HowToPurchase.js`
```js
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

```

`src/components/FAQ.js`
```js
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

```

`src/components/Footer.js`
```js
import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <p>Email: info@mentora.com</p>
            <p>Phone: +1 (123) 456-7890</p>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-2xl hover:text-gray-300"><FaFacebook /></a>
              <a href="#" className="text-2xl hover:text-gray-300"><FaTwitter /></a>
              <a href="#" className="text-2xl hover:text-gray-300"><FaInstagram /></a>
            </div>
          </div>
          <div className="w-full md:w-1/3">
            <h3 className="text-xl font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-gray-300">Terms of Service</a></li>
              <li><a href="#" className="hover:text-gray-300">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-gray-300">Refund Policy</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; 2023 Mentora. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

```

`public/index.html`
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <meta
      name="description"
      content="Bob Sapp Limited Edition Gold Coin - A Knockout Investment Opportunity"
    />
    <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
    <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
    <title>Bob Sapp Gold Coin | Mentora</title>
  </head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
  </body>
</html>

```

`tsconfig.json`
```json
{
  "compilerOptions": {
    "target": "ESNext",
    "useDefineForClassFields": true,
    "lib": ["DOM", "DOM.Iterable", "ESNext"],
    "allowJs": false,
    "skipLibCheck": true,
    "esModuleInterop": false,
    "allowSyntheticDefaultImports": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "module": "ESNext",
    "moduleResolution": "Node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx"
  },
  "include": ["src"]
}

```

`package.json`
```json
{
  "name": "goldcoin-series-webpage",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "@testing-library/jest-dom": "^5.17.0",
    "@testing-library/react": "^13.4.0",
    "@testing-library/user-event": "^13.5.0",
    "autoprefixer": "^10.4.20",
    "postcss": "^8.4.40",
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "react-icons": "^5.2.1",
    "react-markdown": "^9.0.1",
    "react-scripts": "^5.0.1",
    "tailwindcss": "^3.4.7",
    "web-vitals": "^2.1.4"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest"
    ]
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  }
}

```

`postcss.config.js`
```js
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}

```

`tailwind.config.js`
```js
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false,
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

```

