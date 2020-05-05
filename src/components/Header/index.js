import React from "react";
import {Link} from "react-router-dom";
import "./styles.css";

const Menu = () => {
	return (
		<header>
			<div id="window-menu">
				<p>Alarmes e Relógio</p>
				<ul>
					<li><button className="button"><p>__</p></button></li>
					<li><button className="button">max</button></li>
					<li><button className="button" id="close">X</button></li>
				</ul>
			</div>
			<div id="alarm-menu">
				<ul>
					<li><Link to="/Alarm">
						<button className="button">
						<i className="fas fa-clock" style={{color: "white"}}></i>
						 Alarm
						 </button>
						 </Link>
					</li>
					<li>
						<Link to="/Clock">
						<button className="button">
						<i className="material-icons" style={{fontSize: 18, position: "absolute", top: 13, left: "0px"}}>alarm</i>
						Clock
						</button>
						</Link>
					</li>
					<li><Link to="/"><button style={{color: "white"}} className="button">Timer</button></Link></li>
					<li><Link to="/Stopwatch"><button className="button">Stopwatch</button></Link></li>
				</ul>
			</div>
		</header>
	)
}

export default Menu;