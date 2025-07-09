import React from "react";
import { Link } from "react-router-dom";
import "../styles/Sidebar.scss";

export default function Sidebar() {
  return (
    <>
      {/* Sidebar */}
      <aside className="sidebar">
        <nav className="sidebar-nav">
          <ul className="sidebar-list">
            <li className="sidebar-item">
              <Link to="/home" className="sidebar-link">
                <span className="sidebar-icon">🏠</span> Home
              </Link>
            </li>
            <li className="sidebar-item">
              <Link to="/inventory" className="sidebar-link">
                <span className="sidebar-icon">📋</span> Inventory
              </Link>
            </li>
            <li className="sidebar-item">
              <Link to="/employee" className="sidebar-link">
                <span className="sidebar-icon">👥</span> Employees
              </Link>
            </li>
            <li className="sidebar-item">
              <Link to="/transaction" className="sidebar-link">
                <span className="sidebar-icon">📄</span> Transactions
              </Link>
            </li>
          </ul>
        </nav>
      </aside>
    </>
  );
}
