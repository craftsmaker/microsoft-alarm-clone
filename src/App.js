import React from 'react';
import "./main.css";
import store from "./store"
import {HashRouter,Route,Redirect,useLocation,Switch,useHistory,Link} from "react-router-dom"
import {useTransition,animated} from "react-spring";
import {Provider,useDispatch,useSelector} from "react-redux";
import Add from "./screens/Add"
import Stopwatch from "./screens/Stopwatch"
import Clock from "./screens/Clock"
import Alarm from "./screens/Alarm"
import Timer from "./screens/Timer"
import Footer from "./Footers";
import Header from "./Headers";
import "./responsive.css";

const ORDER = ["/Alarm","/Clock","/Timer","/Stopwatch"]

export default function App() {
  return(
   		<Provider store={store}> 
			<HashRouter>
				<AnimatedRoute/>
			</HashRouter>
		</Provider>
	)
}

function AnimatedRoute(){
	let location = useLocation();

	let toScreenIndex = location?.state?.screenIndex;
	let fromScreen = location?.state?.actualScreen;

	let fromScreenIndex = 0;
	ORDER.forEach((value,index) => {
		if (value === fromScreen){
			fromScreenIndex = index;
		}
	})

	const transitionLeft = {
		from: {transform: "translate3d(0%,0%,0)"}, // primeira transição
		enter: {transform: "tranlate3d(0%,0%,0)"},
		leave: {transform: "translate3d(-100%,0%,0)"} 
	};

	const transitionRight = {
		from: {transform: "translate3d(0%,0%,0)"}, // primeira transição
		enter: {transform: "translate3d(0%,0%,0)"}, // natural state
		leave: {transform: "translate3d(100%,0%,0)"} // fim da transição
	}
	let transitionConfig = transitionLeft;

	if (toScreenIndex < fromScreenIndex)
		transitionConfig = transitionRight;

	const transitions = useTransition(location, location => location.pathname, transitionConfig);
	return(
		<div className="container">
			<Header/>
			<div >
				{
					location.pathname !== "/Add" ?
					transitions.map(({item:location,props,key}) => (
						<animated.div key={key} style={props}>
							<Switch location={location}>
								<Route exact path="/">
									<Redirect to="/Timer"/>
								</Route>
								<Route path="/Timer" component={Timer}/>
								<Route path="/Clock" component={Clock}/>
								<Route path="/Stopwatch" component={Stopwatch}/>
								<Route path="/Alarm" component={Alarm}/>							
							</Switch>
						</animated.div>
				)):
				<Switch>
					<Route path="/Add" component={Add}/>
				</Switch>
				}
				
			</div>
			<Footer/>
		</div>
	)
}