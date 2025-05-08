import React, { useState } from "react";

const Navbar = ({ toggleTheme }) => {
  return (
    <nav className="p-4 flex justify-between items-center shadow-lg">
      <h1 className="text-3xl font-semibold text-white">Weatherly</h1>
      <button
        onClick={toggleTheme}
        className="text-white p-2 rounded-lg bg-transparent border-2 border-white hover:bg-white hover:text-gray-800 transition-colors"
      >
        Toggle Theme
      </button>
    </nav>
  );
};

export default Navbar;
