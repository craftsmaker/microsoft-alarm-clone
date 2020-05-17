import React from 'react';
import "./style.css";
import store from "./store"
import {HashRouter,Route,Redirect} from "react-router-dom"
import {Provider} from "react-redux";
import Add from "./screens/Add"
import Stopwatch from "./screens/Stopwatch"
import Clock from "./screens/Clock"
import Alarm from "./screens/Alarm"
import Timer from "./screens/Timer"

export default function App() {
  return (
   <Provider store={store}>
		<HashRouter basename="/">
			<Route exact path="/">
				<Redirect to="/Timer"/>
			</Route>
			<Route path="/Timer" component={Timer}/>
			<Route path="/Clock" component={Clock}/>
			<Route path="/Stopwatch" component={Stopwatch}/>
			<Route path="/Alarm" component={Alarm}/>
			<Route path="/Add" component={Add}/>
		</HashRouter>
	</Provider>
  );
}
