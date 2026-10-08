"use client";

import { useEffect, useState } from "react";

type CurrentWeather = {
  time: string;
  interval: number;
  temperature_2m: number;
  wind_speed_10m: number;
};

type WeatherData = {
  current: CurrentWeather;
};
const cities = [
  { name: "Tehran", latitude: 35.69, longitude: 51.39 },
  { name: "Los Angeles", latitude: 34.05, longitude: -118.24 },
  { name: "Barcelona", latitude: 41.39, longitude: 2.17 },
  { name: "London", latitude: 51.51, longitude: -0.13 },
];
const Weather = () => {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [lastUpdated, setLastUpdated] = useState<string | null>(null);
  const [city, setCity] = useState("Tehran");
  const fetchWeather = () => {
    setLoading(true);
    setError(null);
    const selected = cities.find((c) => c.name === city) ?? cities[0];
    fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${selected.latitude}&longitude=${selected.longitude}&current=temperature_2m,wind_speed_10m`
    )
      .then((res) => {
        if (!res.ok) throw new Error(`server error (${res.status})`);
        return res.json();
      })
      .then((body) => {
        setWeather(body);
        setLastUpdated(new Date().toLocaleTimeString());
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  };
  useEffect(() => {
    fetchWeather();
  }, [city]);

  return (
    <div className="bg-blue-300 px-5">
      <select
        className="text-2xl hover:cursor-pointer bg-amber-50 my-3 px-3 border-0 rounded-3xl"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      >
        {cities.map((c) => (
          <option key={c.name} value={c.name}>
            {c.name}
          </option>
        ))}
      </select>
      {loading && <p>Loading...</p>}

      {error && <p>Failed to load weather</p>}
      {weather && !loading && !error && (
        <div>
          <p className="text-2xl text-blue-800">time:{weather.current.time}</p>
          <p className="text-2xl text-green-600">
            interval:{weather.current.interval}
          </p>
          <p className="text-2xl text-yellow-600">
            temperature:{weather.current.temperature_2m}
          </p>
          <p className="text-2xl text-purple-800">
            wind speed:{weather.current.wind_speed_10m}
          </p>
          <p className="text-3xl">Last updated: {lastUpdated}</p>
        </div>
      )}

      <button
        className="border-4 hover:cursor-pointer border-black rounded-4xl bg-amber-200  py-4 my-4 px-3"
        onClick={fetchWeather}
      >
        Refresh Weather
      </button>
    </div>
  );
};
export default Weather;
