import React from "react";
import "../styles/ThemeSwitcher.scss";

const themes = [
  { name: "theme-blue", color: "#2563eb" },
  { name: "theme-green", color: "#16a34a" },
  { name: "theme-red", color: "#dc2626" },
  { name: "theme-yellow", color: "#eab308" },
  { name: "theme-purple", color: "#7c3aed" },
];

export default function ThemeSwitcher() {
  const setTheme = (themeClass) => {
    document.documentElement.className = themeClass;
  };

  return (
    <>
      <div className="theme-options">
        {themes.map((theme) => (
          <button
            key={theme.name}
            className="theme-button"
            style={{ backgroundColor: theme.color }}
            onClick={() => setTheme(theme.name)}
            aria-label={`Switch to ${theme.name}`}
          />
        ))}
      </div>
    </>
  );
}
