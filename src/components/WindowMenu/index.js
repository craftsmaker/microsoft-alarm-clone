import React from "react";
import "./styles.css";

const WindowMenu = () => {
	window.Window
	return (
		<div id="window-menu">
			<div>
				<p>Alarmes e Relógio</p>
			</div>
			<ul>
				<li><button className="button"><p>__</p></button></li>
				<li><button className="button" onClick={() => window.resizeBy(window.outerWidth,window.outerHeight)}>max</button></li>
				<li><button className="button" id="close" onClick={() => window.close()}>X</button></li>
			</ul>
		</div>
	)
}

export default WindowMenu;