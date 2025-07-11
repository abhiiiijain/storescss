import React, { useEffect } from "react";

const themes = [
  { name: "blue", color: "#2563eb" },
  { name: "green", color: "#16a34a" },
  { name: "red", color: "#dc2626" },
  { name: "yellow", color: "#eab308" },
  { name: "purple", color: "#7c3aed" },
];

export default function ThemeSwitcher() {
  const handleThemeChange = (theme) => {
    document.body.className = `theme-${theme}`;
    localStorage.setItem("theme", theme);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "blue";
    document.body.className = `theme-${savedTheme}`;
  }, []);

  return (
    <>
      <div>
        {themes.map((t) => (
          <button
            key={t.name}
            className={`theme-button theme-${t.name}`}
            style={{ backgroundColor: t.color }}
            onClick={() => handleThemeChange(t.name)}
            title={t.name}
          />
        ))}
      </div>
    </>
  );
}
