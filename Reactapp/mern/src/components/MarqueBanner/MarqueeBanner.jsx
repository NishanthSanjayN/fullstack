import React from 'react';
import './MarqueeBanner.css';

const MarqueeBanner = () => {
  return (
    <header className="marquee-header">
      <div className="marquee-wrapper">
        <div className="marquee-content">
          <span className="mx-6">🔥 Get Extra 10% Off* on Your 1st Order 🤯</span>
          <span className="mx-6">🚚 FREE* SHIPPING above ₹495 for all orders - BUY NOW</span>
          <span className="mx-6">❤️ Enjoy Same Day Delivery* across Thoraipakkam!</span>
          <span className="mx-6">50 % Off* on Your 1st Order 🤯</span>
        </div>
      </div>
    </header>
  );
};

export default MarqueeBanner;