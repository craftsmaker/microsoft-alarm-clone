import React,{useState} from "react";
import Notification from "../../components/Notification";
import {Switch} from "@material-ui/core";
import styles from "./styles.module.css";
import {useSpring,animated} from "react-spring";
import {useSelector,useDispatch} from "react-redux";
import {transformListOfStringfiedObjectsIntoArray} from "../../utils";
import CustomCheckbox from "../../components/Checkbox";

export default function(){
	const {alarms,checkedAlarmIDs} = useSelector(state => state.alarm);
	const dispatch = useDispatch();

	const [checkboxAnimation,setCheckboxAnimation] = useSpring(() => ({position: "relative",left: "-38px"}));

	React.useEffect(() => {
		dispatch({type: "SET_TOGGLER", setter: (isVisible = false) => {
			isVisible
			? (() => {
				setCheckboxAnimation({left: "-38px"});
			})()
			: (() => {
				setCheckboxAnimation({left: "0px"});
			})()
		}})	
	},[dispatch,setCheckboxAnimation])

	let storedAlarms = localStorage.getItem("alarms");

	React.useEffect(() => {
		dispatch({type: "ADD_ALARMS", alarms: transformListOfStringfiedObjectsIntoArray(storedAlarms) || []})
	},[storedAlarms,dispatch])

	if(!alarms){		
		return(
			<main>
				<Notification/>
				<div>

				</div>
			</main>
		)
	}
		
	return(
		<main style={{paddingLeft: 0,paddingRight: 0}}>
			<Notification/>
			<animated.div style={checkboxAnimation}>
				<div style={{display: "flex",flex:1,flexDirection: "column"}}>
					{alarms.map((alarm,index) => (
						<Alarm key={index} alarm={alarm} identifier={index} checkedAlarmIDs={checkedAlarmIDs}/>
					))}
				</div>
			</animated.div>
		</main>
	)
}

function Alarm({alarm,identifier,checkedAlarmIDs}) {	
	let alarmTime = alarm.hours + ":" + alarm.minutes;
	let alarmName = "Hello Honey";
	let alarmFrequency = "Everyday";
	const dispatch = useDispatch();
	// let alarmRepetition = "10 minutes";
	// let alarmSound = "Alarmes";
	const checked = checkedAlarmIDs.some(id => identifier === id);
	const [switcherChecked,setSwitcherChecked] = useState(false)
	
	let alarmNameColor = "white";
	if (switcherChecked)
		alarmNameColor = "blue";

	return(
		<div className={styles.alarm} style={{backgroundColor: checked ? "#004881" : "black"}}>
			<CustomCheckbox checked={checked} onClick={e => dispatch({type: "TOGGLE_ALARM_CHECK",identifier})}/>
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