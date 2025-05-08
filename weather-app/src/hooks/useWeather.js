import { useState, useEffect } from "react";
import { fetchWeather, fetchForecast, fetchAQI } from "../services/weatherApi";

export const useWeather = (city = "London") => {
  const [weather, setWeather] = useState({});
  const [forecasts, setForecasts] = useState([]);
  const [aqi, setAqi] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getWeatherData = async () => {
      try {
        setLoading(true);
        const weatherData = await fetchWeather(city);
        const forecastData = await fetchForecast(city);
        const aqiData = await fetchAQI(
          weatherData.coord.lat,
          weatherData.coord.lon
        );

        setWeather({
          city: weatherData.name,
          temp: weatherData.main.temp,
          description: weatherData.weather[0].description,
        });
        setForecasts(forecastData.list);
        setAqi(aqiData.list[0].main.aqi);
        setLoading(false);
      } catch (error) {
        setError("Failed to load weather data");
        setLoading(false);
      }
    };

    getWeatherData();
  }, [city]);

  return { weather, forecasts, aqi, loading, error };
};
