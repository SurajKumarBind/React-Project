import React from "react";
import { formatTemp } from "../uti/formatTemp";

const WeatherCard = ({ weatherData }) => {
  if (!weatherData || !weatherData.weather || !weatherData.weather[0]) {
    return <p className="text-center text-white">Loading...</p>;
  }

  const { main, weather, wind } = weatherData;

  return (
    <div className="bg-white p-6 rounded-lg shadow-xl max-w-sm mx-auto my-6 transform transition-all hover:scale-105 hover:shadow-2xl">
      <h2 className="text-2xl font-semibold text-center text-gray-800">
        {weatherData.name}
      </h2>
      <p className="text-center text-gray-600">{weather[0].description}</p>
      <div className="flex justify-between mt-4 items-center">
        <div className="text-5xl font-bold text-gray-800">
          {formatTemp(main.temp)}°C
        </div>
        <img
          src={`http://openweathermap.org/img/wn/${weather[0].icon}.png`}
          alt={weather[0].description}
          className="w-16 h-16 animate-bounce"
        />
      </div>
      <div className="mt-4 text-center text-gray-600">
        <p>Wind: {wind.speed} m/s</p>
      </div>
    </div>
  );
};

export default WeatherCard;
