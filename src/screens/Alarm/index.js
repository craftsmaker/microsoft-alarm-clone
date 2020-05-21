import React from "react";
import Notification from "../../components/Notification";

import "./styles.css";

export default function Clock(){

	return(
		<main>
			<Notification/>
			<div id="alarm-list" style={{display: "flex",flex:1,flexDirection: "column"}}>
				<Alarm/>
				<Alarm/>
			</div>
		</main>
	)
}


function Alarm() {
	let alarmTime = "20:00";
	let alarmName = "Hello Honey";
	let alarmFrequency = "Everyday";
	// let alarmRepetition = "10 minutes";
	// let alarmSound = "Alarmes";
	let alarmState = true;

	let alarmNameColor = "white";
	if (alarmState)
		alarmNameColor = "blue";

	return(
		<div className="alarm" style={{display:"flex",flex:1, maxHeight: "100px",flexBasis: "200px"}}>
			<div style={{display: "flex", flexDirection: "column" ,flex:1, justifyContent: "center",paddingLeft: "10px"}}>
				<h1 style={{fontSize: "1.6em", marginBottom: "3px"}}>{alarmTime}</h1>
				<p style={{color: alarmNameColor, fontSize: "0.8em"}}>{alarmName}</p>
				<p>{alarmFrequency}</p>
			</div>
			<div style={{display: "flex", flex:1, alignItems: "center", paddingRight: "40%"}}>
				{
					alarmState?
					<p>Ativado</p>:
					<p>Desativado</p>
				}
			</div>
		</div>
	);
}