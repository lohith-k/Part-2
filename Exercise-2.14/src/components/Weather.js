import React, { useState, useEffect } from "react";
import axios from "axios";



function WeatherDetails({filteredcountry}) {
  const WEATHER_API = {
    key: process.env.REACT_APP_API_KEY,
    base: "http://api.weatherstack.com/current",
    city  : filteredcountry.capital.toLowerCase()
  
  };
  const [weather, setWeather] = useState({});
  useEffect(() => {
    axios
      .get(
        `${WEATHER_API.base}?access_key=90a65874cc0a212298008db64df294d6&query=${WEATHER_API.city}`
      )
      .then((response) => setWeather(response.data.current));
  }, []);

  return (


    <div>
    <h2>Weather in {filteredcountry.capital}</h2>
        {
            weather ?
            <>
                <p><strong>Temperature:</strong> {weather.temperature} celcius</p>
                <img src={weather.weather_icons} alt='Weather icon' />
                    <p><strong>Wind:</strong> {weather.wind_speed} mph, direction {weather.wind_dir}</p>
                  </>
            :
            <p>Loading weather data...</p>
        }
    </div>
);
};

export default WeatherDetails;