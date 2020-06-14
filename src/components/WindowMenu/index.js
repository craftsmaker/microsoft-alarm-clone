import React from "react";
import maximizeIcon from "../../assets/maximize.svg";
import {remote} from "electron"; 
import "./styles.css";

const WindowMenu = ({transparent = false}) => {
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
				<li><button className="button" onClick={handleMaximizeAndMinimize}><img src={maximizeIcon} width={10} alt="Maximize button"/></button></li>
				<li><button className="button" id="close" onClick={() => remote.app.quit()}>X</button></li>
			</ul>	
		</div>
	)
}

export default WindowMenu;