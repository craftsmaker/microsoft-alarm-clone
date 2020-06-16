import React,{useState} from "react";
import Notification from "../../components/Notification";
import {Switch} from "@material-ui/core";
import styles from "./styles.module.css";
import {useSpring,animated} from "react-spring";
import {useSelector,useDispatch} from "react-redux";
import {transformListOfStringfiedObjectsIntoArray} from "../../utils";

export default function(){
	const {alarms} = useSelector(state => state.alarm);
	const dispatch = useDispatch();

	const [checkboxAnimation,setCheckboxAnimation,stopCheckboxAnimation] = useSpring(() => ({position: "relative",left: "-48px"}));

	React.useEffect(() => {
		dispatch({type: "SET_TOGGLER", setter: (isVisible = false) => {
			isVisible
			? (() => {
				setCheckboxAnimation({left: "-48px"});
				stopCheckboxAnimation();}
			)()
			: (() => {
				setCheckboxAnimation({left: "5px"});
				stopCheckboxAnimation();
			})()
		}})	
	},[dispatch])

	let storedAlarms = localStorage.getItem("alarms");

	React.useEffect(() => {
		dispatch({type: "ADD_ALARMS", alarms: transformListOfStringfiedObjectsIntoArray(storedAlarms)})
	},[storedAlarms,dispatch])

	return(
		<main>
			<Notification/>
			<animated.div style={checkboxAnimation}>
				<div style={{display: "flex",flex:1,flexDirection: "column"}}>
					{alarms.map((alarm,index) => (
						<Alarm key={index} alarm={alarm}/>
					))}
				</div>
			</animated.div>
		</main>
	)
}

function Alarm({alarm}) {	
	const dispatch = useDispatch();
	let alarmTime = alarm.hours + ":" + alarm.minutes;
	let alarmName = "Hello Honey";
	let alarmFrequency = "Everyday";
	// let alarmRepetition = "10 minutes";
	// let alarmSound = "Alarmes";
	const [switcherChecked,setSwitcherChecked] = useState(false)
	const [checked,setChecked] = useState(false);

	let alarmNameColor = "white";
	if (switcherChecked)
		alarmNameColor = "blue";

	console.log(checked)
	return(
		<div className={styles.alarm}>
			<div style={{display: "flex",flexGrow:0,alignItems: "center"}} onClick={e => setChecked(checked => !checked)}>
				<input type="checkbox" className={styles.checkboxInput} defaultChecked={checked}/>
				<span className={styles.checkboxCustomizedInput}>
					<span className={styles.check} style={{
						display: checked? "block": "none",
					}}>

					</span>
				</span>
			</div>
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