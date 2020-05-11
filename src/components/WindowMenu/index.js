import React from "react";
import "./styles.css";

const WindowMenu = () => {
	return (
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
	)
}

export default WindowMenu;