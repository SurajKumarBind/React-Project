import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [city, setCity] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    if (city.trim()) {
      onSearch(city); // Pass the city name to the parent component
    }
  };

  return (
    <div className="flex justify-center my-4">
      <form onSubmit={handleSearch} className="flex items-center">
        <input
          type="text"
          placeholder="Enter city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="p-2 rounded-l-lg border border-gray-300"
        />
        <button
          type="submit"
          className="p-2 bg-blue-500 text-white rounded-r-lg hover:bg-blue-700"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
