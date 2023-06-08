import React, { useEffect, useState } from 'react';
import HamburgerMenu from 'react-hamburger-menu';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import '../navbar.css';
import cartItem from '../assets/shopping-bag.png'

const Navbar = () => {
  const [scroll, setScroll] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const cartItems = useSelector((state) => state.cart.items);

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

  const handleMenuClick = () => {
    setIsOpen(!isOpen); // Toggle isOpen state
  };

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
      <HamburgerMenu
        isOpen={isOpen}
        menuClicked={handleMenuClick}
        width={32}
        height={24}
        strokeWidth={3}
        rotate={0}
        color="black"
        borderRadius={0}
        animationDuration={0.5} />

      {/* Menu items */}
      {isOpen && (
        <div className="menu-items">
          <Link className="menu-item" to="/">Home</Link>
          <Link className="menu-item" to="/member">Member</Link>
          <Link className="menu-item" to="/about">About</Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;