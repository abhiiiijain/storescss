import React from "react";
import Sidebar from "../components/Sidebar";
import "../styles/ProfilePage.scss"; // Assuming you have a CSS file for styles

const colors = [
  { name: "Blue", value: "#2563eb" },
  { name: "Green", value: "#16a34a" },
  { name: "Red", value: "#dc2626" },
  { name: "Yellow", value: "#eab308" },
  { name: "Purple", value: "#7c3aed" },
];

export default function ProfilePage() {
  const handleThemeChange = (color) => {
    document.documentElement.style.setProperty("--primary", color);
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
              <p className="profile-username">User Name</p>
              <p className="profile-email">example@example.com</p>
              <p className="profile-meta">M 12 yrs</p>
            </div>

            {/* Edit button */}
            <button className="edit-button" aria-label="Edit profile">
              Edit
            </button>
          </section>

          {/* Theme Section */}
          <section className="theme-section">
            <h3 className="theme-title">Choose Theme Color:</h3>
            <div className="theme-options">
              {colors.map((color) => (
                <button
                  key={color.name}
                  onClick={() => handleThemeChange(color.value)}
                  className="theme-button"
                  style={{ backgroundColor: color.value }}
                  title={color.name}
                />
              ))}
            </div>
          </section>
        </main>
      </div>
      {/* </div> */}
    </>
  );
}
