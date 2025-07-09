import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/inventory1.png";
import "../styles/Header.scss";

export default function Header() {
  return (
    <>
      {/* routing to be hided */}
      {/* <header>
        <nav>
          <Link to="/">| Login</Link> |<Link to="/home">| Home</Link> |
          <Link to="/employee">| Employee</Link> |
          <Link to="/inventory">| Inventory</Link> |
          <Link to="/transaction">| Transactions</Link> |
          <Link to="/profile">| Profile</Link> |
          <Link to="/register">| Register</Link> |
        </nav>
      </header> */}

      {/* Navbar */}
      <nav className="header-nav">
        {/* Logo */}
        <div className="header-logo">
          <Link to="/profile">
            <img src={logo} alt="Logo" className="logo-img" />
          </Link>
        </div>

        {/* Search and Blanks */}
        <div className="header-controls">
          <div className="bar bar-long"></div>
          <div className="bar bar-short"></div>
          <div className="bar bar-short"></div>
          <div className="bar bar-long"></div>
          <button aria-label="search" className="search-btn">
            <svg
              className="search-icon"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
          </button>
        </div>
      </nav>
    </>
  );
}
