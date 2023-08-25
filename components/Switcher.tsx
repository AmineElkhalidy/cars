"use client";

import React, { useState } from "react";
import useDarkMode from "@/hooks/useDarkMode";
import { DarkModeSwitch } from "react-toggle-dark-mode";

const Switcher = () => {
  const [colorTheme, setTheme] = useDarkMode();
  const [darkMode, setDarkMode] = useState(
    colorTheme === "light" ? true : false
  );

  const toggleDarkMode = (checked) => {
    setTheme(colorTheme);
    setDarkMode(checked);
  };

  return (
    <>
      <DarkModeSwitch checked={darkMode} onChange={toggleDarkMode} size={28} />
    </>
  );
};

export default Switcher;
