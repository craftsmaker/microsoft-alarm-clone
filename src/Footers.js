import React from "react";
import {FaPlay,FaShareSquare} from "react-icons/fa";
import {AiFillPushpin} from "react-icons/ai";
import {MdClose} from "react-icons/md";
import {BsListCheck} from "react-icons/bs";
import Footer from "./components/Footer";
import {useSelector,useDispatch} from "react-redux";
import {useLocation,useHistory,Link} from "react-router-dom";

export default function(){
	const dispatch = useDispatch();
	const location = useLocation();
	const history = useHistory();
	const {timer: {modal}} = useSelector(state => state);

	let fromScreen = location?.state?.fromScreen;
	
	if(!fromScreen)
		fromScreen = "/Timer"

	if (modal[0])
		return null;
	
	switch(location.pathname){
		case "/Add":
			return(
				<Footer right>
					<FaPlay className="button" size={12} onClick={() => {
						if(fromScreen === "/Timer")
							dispatch({type: "ADD_TIMER"})
						if(fromScreen === "/Alarm")
							dispatch({type: "ADD_ALARM"})
						history.push(fromScreen,{fromScreen: "/Add"});
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
					<BsListCheck className="button" onClick={() => dispatch({type: "TOGGLE_DELETE_LIST"})}/>
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
