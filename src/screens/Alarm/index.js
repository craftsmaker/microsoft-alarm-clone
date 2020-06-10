import React,{useState} from "react";
import Notification from "../../components/Notification";
import {Switch} from "@material-ui/core";
import styles from "./styles.module.css";
import {useSelector} from "react-redux";

export default function Clock(){
	const {alarms} = useSelector(state => state.alarm);
	
	return(
		<main>
			<Notification/>
			<div id="alarm-list" style={{display: "flex",flex:1,flexDirection: "column"}}>
				{alarms.map((alarm,index) => (
					<Alarm key={index} alarm={alarm}/>
				))}
			</div>
		</main>
	)
}

function Alarm({alarm}) {	
	let alarmTime = alarm.hours + ":" + alarm.minutes;
	let alarmName = "Hello Honey";
	let alarmFrequency = "Everyday";
	// let alarmRepetition = "10 minutes";
	// let alarmSound = "Alarmes";
	const [switcherChecked,setSwitcherChecked] = useState(false)

	let alarmNameColor = "white";
	if (switcherChecked)
		alarmNameColor = "blue";

	return(
		<div className={styles.alarm}>
			<div className={styles.alarmInformation}>
				<h1 className={styles.informationHeader}>{alarmTime}</h1>
				<p style={{color: alarmNameColor, fontSize: "0.8em"}}>{alarmName}</p>
				<p>{alarmFrequency}</p>
			</div>
			<div className={styles.alarmFuncionalities}>
				<Switch checked={switcherChecked} onChange={() => setSwitcherChecked(prev => !prev)} color="default"/>
				{
					switcherChecked?
					<p>Ativado</p>:
					<p>Desativado</p>
				}
			</div>
		</div>
	);
}