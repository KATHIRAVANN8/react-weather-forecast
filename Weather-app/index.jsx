import React, { useState, useEffect } from "react";
import axios from "axios";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./GlobalStyle";
import SearchBar from "./SearchBar";
import WeatherCard from "./WeatherCard";
import Toggle from "./ToggleButton";
import { useGeolocated } from "react-geolocated";

const lightTheme = {
  background: "#74b9ff",
  text: "#333",
};

const darkTheme = {
  background: "#2d3436",
  text: "#fff",
};

const index = () => {
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [darkMode, setDarkMode] = useState(false);
  const { coords } = useGeolocated({
    positionOptions: { enableHighAccuracy: true },
  });

  const API_KEY = "YOUR_API-KEY";

  const fetchWeather = async (city) => {
    try {
      const resWeather = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
      );
      const resForecast = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${API_KEY}`
      );
      setWeather(resWeather.data);
      setForecast(resForecast.data);
    } catch {
      alert("City not found.");
    }
  };

  useEffect(() => {
    if (coords) {
      const fetchByLocation = async () => {
        const resWeather = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?lat=${coords.latitude}&lon=${coords.longitude}&units=metric&appid=${API_KEY}`
        );
        const resForecast = await axios.get(
          `https://api.openweathermap.org/data/2.5/forecast?lat=${coords.latitude}&lon=${coords.longitude}&units=metric&appid=${API_KEY}`
        );
        setWeather(resWeather.data);
        setForecast(resForecast.data);
      };
      fetchByLocation();
    }
  }, [coords]);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <GlobalStyle />
      <div className="container">
        <Toggle toggle={() => setDarkMode(!darkMode)} darkMode={darkMode} />
        <SearchBar onSearch={fetchWeather} />
        {weather && <WeatherCard data={weather} forecast={forecast} />}
      </div>
    </ThemeProvider>
  );
};

export default index;
