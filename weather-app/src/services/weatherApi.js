const baseUrl = "https://api.openweathermap.org/data/2.5/weather";
const apiKey = import.meta.env.VITE_WEATHER_API_KEY; // Your API key from .env

export const getWeatherData = async (city) => {
  try {
    const res = await fetch(
      `${baseUrl}?q=${city}&appid=${apiKey}&units=metric`
    );
    const data = await res.json();
    return data;
  } catch (err) {
    console.error("Weather API error:", err);
    return null;
  }
};
