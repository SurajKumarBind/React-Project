import React, { useState, useEffect } from "react";
import { getWeatherData } from "../services/weatherApi";
import WeatherCard from "../components/WeatherCard";
import SearchBar from "../components/SearchBar"; // Import SearchBar component

const Home = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Function to fetch weather data for a specific city
  const fetchWeather = async (city) => {
    setLoading(true);
    setError("");
    try {
      const data = await getWeatherData(city);
      if (data) {
        setWeatherData(data);
      } else {
        setError("City not found");
      }
    } catch (err) {
      setError("Error fetching weather data");
    }
    setLoading(false);
  };

  // Default fetch when component mounts (e.g., for 'Delhi')
  useEffect(() => {
    fetchWeather("Delhi");
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-200 to-blue-500">
      {/* Add Search Bar */}
      <SearchBar onSearch={fetchWeather} />

      {/* Show error message if any */}
      {error && <p className="text-center text-red-500">{error}</p>}

      {/* Show loading spinner while fetching data */}
      {loading ? (
        <p className="text-center text-white">Loading...</p>
      ) : (
        // Display weather card when data is fetched
        weatherData && <WeatherCard weatherData={weatherData} />
      )}
    </div>
  );
};

export default Home;
