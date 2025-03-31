import { useState } from "react";
import { FaShoppingBasket, FaBars, FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";
import "./Header.css"; // Ensure you have the necessary styles

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <header className="header">
      <a href="#" className="logo">
        <FaShoppingBasket /> Foodie
      </a>
      <nav className={`navbar ${menuOpen ? "active" : ""}`}>
        <a href="#home">Home</a>
        <a href="aboutus.html">About Us</a>
        <a href="contact.html">Contact</a>
        <a href="terms.html">Terms & Conditions</a>
        <a href="#Refund">Refund</a>
        <a href="reviews.html">Reviews</a>
        <a href="questions.html">Questions</a>
      </nav>
      <div className="icons">
        <FaBars id="menu-btn" onClick={() => setMenuOpen(!menuOpen)} />
        <FaSearch id="search-btn" onClick={() => setSearchOpen(!searchOpen)} />
        <FaShoppingCart id="cart-btn" />
        <FaUser id="login-btn" />
      </div>
      {searchOpen && (
        <form action="" className="search-form">
          <input type="search" id="search-box" placeholder="Search here..." />
          <label htmlFor="search-box">
            <FaSearch />
          </label>
        </form>
      )}
    </header>
  );
};

export default Navigation;

// CSS styles (Header.css)

:root {
    --orange: #ff9800;
    --box-shadow: 0 .5rem 1rem rgba(0, 0, 0, 0.1);
}

.header {
    color: var(--orange);
}

@media (max-width: 991px) {
    html {
        font-size: 55%;
    }
    .header {
        padding: 2rem;
    }
}

@media (max-width: 768px) {
    .header .navbar {
        position: absolute;
        top: 110%;
        right: -110%;
        width: 30rem;
        box-shadow: var(--box-shadow);
        border-radius: .5rem;
        background: #fff;
    }
    .header .navbar a {
        font-size: 2rem;
        margin: 2rem 2.5rem;
        display: block;
    }
}

@media (max-width: 450px) {
    html {
        font-size: 50%;
    }
}
