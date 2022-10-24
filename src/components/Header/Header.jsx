import "./Header.css";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import { FaShoppingBag } from 'react-icons/fa';


const Header = () => {
  const [click, setClick] = useState(false);
  const [showDropBox, setShowDropBox] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  return (
    <div className="header-container">
      <nav className="nav_lists">
        <ul className="header-ul">
          <Link to="/">
            <li>
              <i className="fa-brands fa-apple fa-xl"></i>
            </li>
          </Link>

          <Link to="/store">
            <li>Store</li>
          </Link>

          <Link to="/macpage">
            <li>Mac</li>
          </Link>

          <Link to="/ipad">
            <li>iPad</li>
          </Link>

          <Link to="/iphone">
            <li>iPhone</li>
          </Link>

          <Link to="/watch">
            <li>Watch</li>
          </Link>

          <Link to="/airpods">
            <li>AirPods</li>
          </Link>

          <Link to="/tvandhome">
            <li>TV & Home</li>
          </Link>

          <Link to="/onlyonapples">
            <li>Only on Apple</li>
          </Link>

          <Link to="/accessories">
            <li>Accessories</li>
          </Link>

          <Link to="/support">
            <li>Support</li>
          </Link>

          <li>
            <i className="fa-solid fa-magnifying-glass"></i>
          </li>

          <li className="shopping_bag">
            <FaShoppingBag
              onClick={() => setShowDropBox(!showDropBox)}
              className="shopping_bag"
            />

            {showDropBox && (
              <div className="header_dropbox">
                <h3>Your bag is empty.</h3>
                <div className="header_dropbox_wrapper">
                  <ul
                    className="header_dropbox_lists"
                    onClick={() => setShowDropBox(!showDropBox)}
                  >
                    <li>Bag</li>
                    <li>Saved Items</li>
                    <li>Orders</li>
                    <li>Accout</li>
                    <li>Sign in</li>
                  </ul>
                </div>
              </div>
            )}
          </li>
        </ul>
      </nav>

      {/* ********This Section is for mobile screen******* */}
      <nav className={click ? "navbar-for-mobile-active" : "navbar-for-mobile"}>
        <div className="barIcon" onClick={handleClick}>
          {click ? (
            <i className="fa-solid fa-xmark fa-xl" />
          ) : (
            <i className="fa-solid fa-bars " />
          )}
        </div>

        <Link to="/">
          <i
            className="fa-brands fa-apple fa-xl"
            onClick={() => setClick(false)}
          ></i>
        </Link>

        <FaShoppingBag
          className={click ? "mobile-cart" : "shopping_cart_icon_on_mobile"}
        onClick={handleClick}
        />
      </nav>

      {click && (
        <ul onClick={handleClick} className="ul-for-mobile">
          <div className="mobile-search-screen">
            <i className="fa-solid fa-magnifying-glass"></i>
            <input type="text" placeholder="Search apple.com" />
          </div>

          <Link to="/store">
            <li>Store</li>
          </Link>

          <Link to="/macpage">
            <li>Mac</li>
          </Link>

          <Link to="/ipad">
            <li>iPad</li>
          </Link>

          <Link to="/iphone">
            <li>iPhone</li>
          </Link>

          <Link to="/watch">
            <li>Watch</li>
          </Link>

          <Link to="/airpods">
            <li>AirPods</li>
          </Link>

          <Link to="/tvandhome">
            <li>TV & Home</li>
          </Link>

          <Link to="/onlyonapples">
            <li>Only on Apple</li>
          </Link>

          <Link to="/accessories">
            <li>Accessories</li>
          </Link>

          <Link to="/support">
            <li>Support</li>
          </Link>
        </ul>
      )}
    </div>
  );
};

export default Header;
