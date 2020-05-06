import React from "react";
import {Link} from "react-router-dom";
import {FaClock} from "react-icons/fa";
import {FcAlarmClock} from "react-icons/fc";
import {IoIosTimer} from "react-icons/io";
import {RiTimerLine} from "react-icons/ri";
import "./styles.css";

const Menu = () => {
	return (
		<header>
			<div id="window-menu">
				<div>
					<p>Alarmes e Relógio</p>
				</div>
				<ul>
					<li><button className="button"><p>__</p></button></li>
					<li><button className="button">max</button></li>
					<li><button className="button" id="close">X</button></li>
				</ul>
			</div>
			<div id="alarm-menu">
				<ul>
					<li>
						<Link to="/Alarm" role="button" className="button">
							<FaClock size={20}/>
						 	Alarm
						 </Link>
					</li>
					<li>
						<Link to="/Clock" role="button" className="button">
							<FcAlarmClock size={20}/>
								Clock
						</Link>
					</li>
					<li>
						<Link to="/" role="button" style={{color: "white"}} className="button">
							<IoIosTimer size={20}/>
							Timer
						</Link>
					</li>
					<li>
						<Link to="/Stopwatch" role="button" className="button">
							<RiTimerLine size={20}/>
							Stopwatch
						</Link>
					</li>
				</ul>
				<div id="alarm-menu-placeholder">
				
				</div>
			</div>
		</header>
	)
}

export default Menu;