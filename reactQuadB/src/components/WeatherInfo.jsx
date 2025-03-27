import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchWeather } from "../redux/slices/weatherSlice";

const WeatherInfo = ({ city }) => {
  const dispatch = useDispatch();
  const weather = useSelector((state) => state.weather.data);

  useEffect(() => {
    dispatch(fetchWeather(city));
  }, [city, dispatch]);

  return (
    <div>
      {weather ? <p>Current Temp: {weather.current.temp_c}°C</p> : <p>Loading...</p>}
    </div>
  );
};

export default WeatherInfo;
