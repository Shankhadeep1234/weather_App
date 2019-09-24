export function fetchWeather(city) {
  return function(dispatch) {
    fetch(
      `http://api.weatherstack.com/current?access_key=b3033f1047684c275a63d75fde5c03df&query=${city}`
    )
      .then(res => {
        res.json();
      })
      .then(JSONres => {
        //dispatch the action
        dispatch({ type: "FETCH_WEATHER", payload: JSONres });
      })
      .catch(err => console.log(err));
  };
}
