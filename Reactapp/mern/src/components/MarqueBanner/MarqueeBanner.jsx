const Marquee = () => {
  return (
    <header className="bg-gradient-to-br from-orange-600 to-orange-400 h-10 w-full fixed top-0 z-50">
      <div className="marquee-wrapper flex items-center text-white font-medium text-sm py-2">
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

export default Marquee;