import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

//action
import { fetchWeather } from "./actions/fetchWeather";

import "./App.css";

function App() {
  //set city
  const [city, setCity] = useState("");

  const weatherSelector = useSelector(state => state);
  const dispatch = useDispatch();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const getWeatherInfoAction = city => dispatch(fetchWeather(city));

  useEffect(() => {
    getWeatherInfoAction("paris");
  }, [getWeatherInfoAction]);

  const getWeatherInfo = e => {
    e.preventDefault();
    if (city === "") {
      console.log("No City to Search");
    } else {
      getWeatherInfoAction(city);
      console.log(weatherSelector.weatherinfo);
    }
  };

  let details = "";
  if (weatherSelector.weatherinfo) {
    details = (
      <div className="details">
        <h4>Weather Details</h4>
        <p>
          {weatherSelector.weatherinfo.location.name}
          <span>{weatherSelector.weatherinfo.location.country}</span>
        </p>
        <p>{weatherSelector.weatherinfo.current.temp_c}*C</p>
        <img
          src={weatherSelector.weatherinfo.current.condition.icon}
          alt="icon"
        />
        <p>{weatherSelector.weatherinfo.current.condition.text}</p>
      </div>
    );
  } else {
    details = <p>You need to type a city</p>;
  }

  return (
    <React.Fragment>
      <div className="centerHeading">
        <header>
          <h1>Weather App</h1>
        </header>
      </div>

      <main className="center">
        <form onSubmit={getWeatherInfo}>
          <div className="control">
            <input
              type="text"
              name="name"
              placeholder="City to Check the Weather"
              onChange={e => setCity(e.target.value)}
            />
          </div>
          <button type="submit" value="Check Weather" variant="primary">
            Click Here
          </button>
        </form>
        {details}
      </main>
    </React.Fragment>
  );
}

export default App;
