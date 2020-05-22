import React,{useState} from "react";
import Notification from "../../components/Notification";
import {Switch} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import "./styles.css";

const useStyles = makeStyles({
	root:{
		backgroundColor: "blue"
	}
})

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
	const [alarmState,setAlarmState] = useState(false);

	let alarmNameColor = "white";
	if (alarmState)
		alarmNameColor = "blue";

	const classes = useStyles();
	return(
		<div className="alarm" style={{display:"flex",flex:1, maxHeight: "100px",flexBasis: "200px"}}>
			<div style={{display: "flex", flexDirection: "column" ,flex:1, justifyContent: "center",paddingLeft: "10px"}}>
				<h1 style={{fontSize: "1.6em", marginBottom: "3px"}}>{alarmTime}</h1>
				<p style={{color: alarmNameColor, fontSize: "0.8em"}}>{alarmName}</p>
				<p>{alarmFrequency}</p>
			</div>
			<div style={{display: "flex", flex:1, alignItems: "center", paddingRight: "40%"}}>
				<Switch onChange={() => setAlarmState(!alarmState)} classes={{thumb: classes.root}}/>
				{
					alarmState?
					<p>Ativado</p>:
					<p>Desativado</p>
				}
			</div>
		</div>
	);
}