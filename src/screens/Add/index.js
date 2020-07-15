import React,{useRef, useEffect} from "react";
import {useLocation} from "react-router-dom";
import {useSelector} from "react-redux";
import Notification from "../../components/Notification";
import HoursControl from "./HoursControl";
import MinutesControl from "./MinutesControl";
import SecondsControl from "./SecondsControl";
import {AddWrapper,TimeControllerWrapper,TimeControllerFooter,TargetNameWrapper,TimerControllerControlls} from "./styles";

function Add(){
	return (
		<AddWrapper>
			<Notification/>
			<TimeController/>
			<TargetInformation/>
		</AddWrapper>
	)
}

function TimeController() {
	useSelector(state => state);
	const {state} = useLocation();
	
	let hoursReference = useRef(null)	
	let minutesReference = useRef(null)
	let secondsReference = useRef(null)

	useEffect(() => {
		hoursReference.current.scrollIntoView({block: "center", inline: "nearest"})
		minutesReference.current.scrollIntoView({block: "center", inline: "nearest"})

		if (state?.fromScreen === "/Timer")
			secondsReference.current.scrollIntoView({block: "center", inline: "nearest"})	
	})
	
	return(
		<TimeControllerWrapper>
			<h1>NEW TIMER</h1>
			<TimerControllerControlls>
				<HoursControl ref={hoursReference} location={state?.fromScreen}/>
				<MinutesControl ref={minutesReference} location={state?.fromScreen}/>
				{
					state?.fromScreen === "/Timer"
					?<SecondsControl ref={secondsReference}/>
					:null
				}	
			</TimerControllerControlls>
			<Footer state={state}/>
		</TimeControllerWrapper>
	)
}

const Footer = React.memo(function ({state}){
	return(
		<TimeControllerFooter>
			<li>hours</li>
			<li>minutes</li>
			{
				state?.fromScreen === "/Timer"
				?<li>seconds</li>
				:null
			}
		</TimeControllerFooter>
	)
})

function TargetInformation(){
	return(
		<>
			<TargetNameWrapper>
				<h2>Timer name</h2>
				<h1>Timer (x)</h1>
			</TargetNameWrapper>
			<div style={{height: "180px"}}/>
		</>
	)
}

export default Add;