import React from "react";

const ForecastSlider = ({ forecasts }) => {
  return (
    <div className="flex space-x-4 overflow-x-auto">
      {forecasts.map((forecast) => (
        <div
          key={forecast.date}
          className="p-4 rounded-lg bg-gray-800 text-white"
        >
          <p>{forecast.date}</p>
          <p>{forecast.temp}°</p>
        </div>
      ))}
    </div>
  );
};

export default ForecastSlider;
