import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter,Route} from "react-router-dom"
import {Provider} from "react-redux";

import App from "./App"
import Add from "./screens/Add"
import store from "./store"

ReactDOM.render(
	<Provider store={store}>
		<HashRouter>
			<Route exact path="/" component={App}/>
			<Route path="/:hours&:minutes&:seconds" component={App}/>
			<Route path="/add" component={Add}/>
		</HashRouter>
	</Provider>
	,document.getElementById("root"))
