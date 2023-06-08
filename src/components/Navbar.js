import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import '../navbar.css';
import cartItem from '../assets/shopping-bag.png';

const Navbar = () => {
  const [scroll, setScroll] = useState(false);
  const cartItems = useSelector((state) => state.cart.items);
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const handleKeyDown = (event) => {
    if (event.keyCode === 13 || event.keyCode === 32) {
      toggleMenu();
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScroll(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`navbar ${scroll ? 'navbar-scroll' : ''}`}>
      <div className="cart-container">
        <Link to="/cart" className="cart-icon-link">
          <img src={cartItem} alt="Cart" className="cart-icon" />
          {cartItems.length > 0 && <span className="cart-item-count">{cartItems.length}</span>}
        </Link>
      </div>

      <div className="links-container">
        <Link className="link-item" to="/">Home</Link>
        <Link className="link-item" to="/member">Member</Link>
        <Link className="link-item" to="/about">About</Link>
      </div>

      <ul className={`navbar-links ${menuOpen ? 'navbar-links-open' : ''}`}>
        <li><a href="#">Home</a></li>
        <li><a href="#">Member</a></li>
        <li><a href="#">About</a></li>
      </ul>

      <div
        className="navbar-hamburger-menu"
        role="button"
        aria-expanded={menuOpen}
        onClick={toggleMenu}
        onKeyDown={handleKeyDown}
        tabIndex="0">
        <span> </span>
        <span> </span>
        <span> </span>
      </div>
    </div>
  );
};

export default Navbar;

