import React from "react";
import Sidebar from "../components/Sidebar";
import "../styles/ProfilePage.scss"; // Assuming you have a CSS file for styles
import "../scss/_themes.scss";
import ThemeSwitcher from "./ThemeSwitcher";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

// const colors = [
//   { name: "Blue", value: "#2563eb" },
//   { name: "Green", value: "#16a34a" },
//   { name: "Red", value: "#dc2626" },
//   { name: "Yellow", value: "#eab308" },
//   { name: "Purple", value: "#7c3aed" },
// ];

export default function ProfilePage() {
  // const handleThemeChange = (color) => {
  //   document.documentElement.style.setProperty("--primary", color);
  // };
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    const result = await logout();
    if (result.success) {
      navigate("/");
    }
  };

  return (
    <>
      <div className="profile-container">
        {/* Sidebar */}
        <Sidebar />
        {/* Profile Section */}
        {/* <div className="profile-main"> */}
        <main className="profile-content">
          <h2 className="profile-title">Profile</h2>
          <section className="profile-info">
            {/* Profile Image Placeholder */}
            <div
              className="profile-avatar"
              aria-label="Profile picture placeholder"
              role="img"
            />
            {/* Profile Info */}
            <div className="profile-details">
              <p className="profile-username">{user?.name}</p>
              <p className="profile-email">{user?.email}</p>
              <p className="profile-meta">Owner: {user.shopName}</p>
            </div>

            {/* Edit button */}
            <button className="edit-button" aria-label="Edit profile">
              Edit
            </button>
            <button onClick={handleLogout} className="edit-button" aria-label="Logout">
              Logout
            </button>
          </section>

          {/* Theme Section */}
          <section className="theme-section">
            <h3 className="theme-title">Choose Theme Color:</h3>
            <ThemeSwitcher />
          </section>
        </main>
      </div>
      {/* </div> */}
    </>
  );
}
