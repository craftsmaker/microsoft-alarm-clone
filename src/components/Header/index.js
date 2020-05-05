import React from "react";
import {Link} from "react-router-dom";

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
					<li><button className="button"><i className="fas fa-clock" style={{color: "white"}}></i> Alarme</button></li>
					<li><button className="button"><i className="material-icons" style={{fontSize: 18, position: "absolute", top: 13, left: "0px"}}>alarm</i>Relógio</button></li>
					<li><Link to="/"><button style={{color: "white"}} className="button">Timer</button></Link></li>
					<li><button className="button">Cronômetro</button></li>
				</ul>
			</div>
		</header>
	)
}

export default Menu;