import React, { useEffect, useState } from "react";
import facade from "../apiFacade";

const Weather = ({ user }) => {
  const [data, setData] = useState("Loading...");

  useEffect(() => {
    const url = user.roles.split(",").includes("user")
      ? "/api/weather/user"
      : "/api/weather";
    facade.fetchData(url).then(res => {
      console.log(res);
      setData(
        `City: ${res.name} Temperature: ${res.temp}°C, Conditions: ${res.humidity} feelsLike: ${res.feelsLike}°C`
      );
    });
  }, []);

  return (
    <div>
      <h1>{data}</h1>
    </div>
  );
};

export default Weather;
