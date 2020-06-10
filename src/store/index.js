import {createStore,combineReducers} from "redux";
import stopWatch from "./stopWatch";
import timer from "./timer";
import alarm from "./alarm";

const store = createStore(combineReducers({timer,stopWatch,alarm}));

export default store;