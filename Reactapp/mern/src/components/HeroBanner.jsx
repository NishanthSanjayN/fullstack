const HeroBanner = () => {
    return (
      <section className="main-banner relative pt-32 pb-16" id="home">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 mb-12 lg:mb-0">
              <div className="banner-text">
                <h1 className="text-5xl font-bold mb-6">
                  Welcome to <span className="text-orange-600">Foodie</span>
                </h1>
                <p className="text-lg mb-8 text-gray-600">
                  An E-commerce Food Website is an online platform that allows users to browse, order, and purchase food products, 
                  including groceries, restaurant meals, or specialty items, for delivery or pickup. These websites provide a 
                  seamless digital shopping experience, enabling customers to explore a variety of food options from different vendors or brands.
                </p>
                <div className="banner-btn">
                  <a href="#menu" className="bg-orange-600 text-white px-8 py-3 rounded-full inline-block hover:bg-orange-700 transition">
                    Check our Menu
                  </a>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="banner-img-wp">
                <div 
                  className="banner-img h-96 rounded-lg shadow-xl bg-cover bg-center"
                  style={{ backgroundImage: "url(/assets/images/main-b.jpg)" }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default HeroBanner;