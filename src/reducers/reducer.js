import { combineReducers } from "redux";
import weatherInfo from "./weatherReducer";

//combine reducers(for scalability)
const rootReducer = combineReducers({
  WeatherInfo: weatherInfo
});

export default rootReducer;
