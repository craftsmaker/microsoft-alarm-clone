import React from 'react';
import "./style.css";
import store from "./store"
import {HashRouter,Route,Redirect,useLocation,Switch,useHistory,Link} from "react-router-dom"
import {useTransition,animated} from "react-spring";
import {Provider,useDispatch} from "react-redux";
import Add from "./screens/Add"
import Stopwatch from "./screens/Stopwatch"
import Clock from "./screens/Clock"
import Alarm from "./screens/Alarm"
import Timer from "./screens/Timer"
import Header from "./components/Header";
import Footer from "./components/Footer";
import WindowMenu from "./components/WindowMenu";
import {FaPlay,FaShareSquare} from "react-icons/fa";
import {AiFillPushpin} from "react-icons/ai";
import {MdClose} from "react-icons/md";
import {BsListCheck} from "react-icons/bs";

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
			{
				location.pathname === "/Add"?
				<header>
					<WindowMenu/>
				</header>:
				<Header/>
			}
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
			<InFooter/>
		</div>
	)
}

function InFooter(){
	const dispatch = useDispatch();
	const location = useLocation();
	const history = useHistory();

	let fromScreen = location?.state?.fromScreen;
	
	if(!fromScreen)
		fromScreen = "/Timer"

	switch(location.pathname){
		case "/Add":
			return(
				<Footer right>
					<FaPlay className="button" size={12} onClick={() => {
						if(fromScreen === "/Timer")
							dispatch({type: "ADD_TIMER"})
						history.push(fromScreen,{fromScreen: "/Timer"});
					}}/>
					<MdClose className="button" color="white" onClick={() => history.push(fromScreen)}/>
					<button className="button">...</button>
				</Footer>
			)
		case "/Stopwatch":
			return(
				<Footer right>
					<AiFillPushpin className="button" color="white"/>
					<FaShareSquare className="button" color="white"/>
					<button className="button">...</button>
				</Footer>
			)
		case "/Alarm":
			return(
				<Footer right>
					<Link  id="plus" to={{pathname:"/Add", state:{fromScreen: location.pathname}}}><button className="button"><p>+</p></button></Link>
					<BsListCheck className="button"/>
					<button className="button">...</button>
				</Footer>
			)
		case "/Clock":
			return(
				<Footer right>
					<button id="plus" className="button"><p>+</p></button>
					<BsListCheck className="button"/>
					<button className="button">...</button>
				</Footer>
			)
		default:
			return(
				<Footer right/>
			)
	}
}