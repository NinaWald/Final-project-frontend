import React, { useEffect, useState } from 'react';
import { slide as Menu } from 'react-burger-menu';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import '../navbar.css';
import cartItem from '../assets/shopping-bag.png'

const Navbar = () => {
  const [scroll, setScroll] = useState(false);
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

      <Menu right>
        <a className="burger-menu-item" href="/">Home</a>
        <a className="burger-menu-item" href="/member">Member</a>
        <a className="burger-menu-item" href="/about">About</a>
      </Menu>
    </div>
  );
};

export default Navbar;