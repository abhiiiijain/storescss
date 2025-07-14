import React from "react";

export default function ThemeSwitcher() {
  const setTheme = (themeClass) => {
    document.documentElement.className = themeClass;
  };

  return (
    <>
      <div>
        <button onClick={() => setTheme("theme-blue")}>Blue</button>
        <button onClick={() => setTheme("theme-green")}>Blue</button>
        <button onClick={() => setTheme("theme-red")}>Blue</button>
        <button onClick={() => setTheme("theme-yellow")}>Blue</button>
        <button onClick={() => setTheme("theme-purple")}>Blue</button>
      </div>
    </>
  );
}
