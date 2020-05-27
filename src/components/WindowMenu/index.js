import React from "react";
import {remote} from "electron";
import "./styles.css";

const WindowMenu = () => {
	let mainWindow = remote.getCurrentWindow();

	const handleMaximizeAndMinimize = () => {
		mainWindow.isMaximized() ?
		mainWindow.restore():
		mainWindow.maximize()
	}

	return ( 
		<div id="window-menu">
			<div>
				<p>Alarmes e Relógio</p>
			</div>
			<ul>
				<li><button className="button" onClick={() => mainWindow.minimize()}><p>__</p></button></li>
				<li><button className="button" onClick={handleMaximizeAndMinimize}>max</button></li>
				<li><button className="button" id="close" onClick={() => remote.app.quit()}>X</button></li>
			</ul>	
		</div>
	)
}

export default WindowMenu;