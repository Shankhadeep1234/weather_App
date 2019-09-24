import thunk from "redux-thunk";
import { applyMiddleware, createStore } from "redux";

//reducers
import rootReducer from "./reducers/reducer";

//middleware
const middleware = applyMiddleware(thunk);
//store
const store = createStore(rootReducer, middleware);

export default store;
