const Marquee = () => {
    const messages = [
      "🔥 Get Extra 10% Off* on Your 1st Order 🤯",
      "🚚 FREE* SHIPPING above ₹495 for all orders - BUY NOW",
      "❤️ Enjoy Same Day Delivery* across Thoraipakkam!",
      "50 % Off* on Your 1st Order 🤯"
    ];
  
    return (
      <header className="marquee-wrapper">
        <div className="marquee-content">
          {messages.map((message, index) => (
            <span key={index} className="mx-6">{message}</span>
          ))}
        </div>
      </header>
    );
  };
  
  export default Marquee;