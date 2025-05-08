import React from "react";

const AQICard = ({ aqi }) => {
  return (
    <div className="p-5 rounded-lg bg-blue-500 text-white">
      <h3>AQI: {aqi}</h3>
    </div>
  );
};

export default AQICard;
