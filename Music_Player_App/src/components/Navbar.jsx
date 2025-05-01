import React from "react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-gradient-to-r from-purple-900 via-black to-indigo-900 text-white shadow-lg p-2.5 flex flex-col sm:flex-row justify-between items-center z-50">
      <div className="text-2xl font-bold text-yellow-400 mb-2 sm:mb-0">
        SunTune<span className="text-pink-500">X</span>
      </div>
      <p className="text-sm italic text-blue-300 text-center sm:text-left">
        🎵 Your vibe. Your sound. SunTuneX. Feel every beat, live the music. 🎶
      </p>
      <input
        type="text"
        placeholder="Search song..."
        className="mt-2 sm:mt-0 sm:ml-4 px-3 py-1 rounded bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-pink-500"
      />
    </nav>
  );
};

export default Navbar;
