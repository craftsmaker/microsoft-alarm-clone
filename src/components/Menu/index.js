import React from "react";
import {animated,useSpring} from "react-spring";
import {Link} from "react-router-dom";
import {FaClock} from "react-icons/fa";
import {FcAlarmClock} from "react-icons/fc";
import {IoIosTimer} from "react-icons/io";
import {RiTimerLine} from "react-icons/ri";
import {useLocation} from "react-router-dom";	
import "./styles.css";

const Menu = ({left,center,right}) => {
	let position = "flex-start";
	let marginLeft = 0;
	let marginRight = "50%";

	if (center){
		position = "center";
		marginLeft = "25%";
		marginRight = "25%";
	}
	else if (right){
		position = "flex-end";
		marginLeft = "50%";
		marginRight = "0";
	}
	
	const location = useLocation();

	const screenIndex = ["/Alarm", "/Clock", "/Timer", "/Stopwatch"].indexOf(location.pathname);
	let animatedChange = useSpring({left: screenIndex,width: screenIndex});

	return (
		<div id="alarm-menu">
				<ul style={{
					justifyContent: position,
					marginLeft: marginLeft,
					marginRight: marginRight,
					position: "relative"
				}}>
					<li>
						<Link to={{pathname: "/Alarm",state: {actualScreen: location.pathname,screenIndex: 0}}} role="button" className="button">
							<FaClock size={20}/>
						 	Alarm
						 </Link>
					</li>
					<li>
						<Link to={{pathname: "/Clock",state: {actualScreen: location.pathname,screenIndex: 1}}} role="button" className="button">
							<FcAlarmClock size={20}/>
								Clock
						</Link>
					</li>
					<li>
						<Link to={{pathname: "/Timer",state: {actualScreen: location.pathname,screenIndex: 2}}} role="button" style={{color: "white"}} className="button">
							<IoIosTimer size={20}/>
							Timer
						</Link>
					</li>
					<li>
						<Link to={{pathname:"/Stopwatch",state: {actualScreen: location.pathname,screenIndex: 3}}} role="button" className="button">
							<RiTimerLine size={20}/>
							Stopwatch
						</Link>
					</li>
					<animated.li style={{
						position: "absolute",
						width: animatedChange.width.interpolate({
							range: [0,1,2,3],
							output: ["15%","13%","13%","20%"]
						}), // 15 -> 12 -> 10 -> 18
						height: "2px",
						backgroundColor: "blue",
						bottom: "5px",
						left: animatedChange.left.interpolate({
							range: [0,1,2,3],
							output: ["5%","29%","52%","76%"]
						}), // 5 - > 30 -> 55 -> 78
					}}/>
				</ul>
			</div>
	)
}

export default Menu;