import React from "react";

const Temperature = ({ temperature }) => {
  return (
    <div className="text-6xl font-bold text-gray-800 transition-transform transform duration-500">
      {temperature}°C
    </div>
  );
};

export default Temperature;
