import React,{useRef, useEffect} from "react";
import {useLocation} from "react-router-dom";
import {useSelector} from "react-redux";
import Notification from "../../components/Notification";
import HoursControl from "./HoursControl";
import MinutesControl from "./MinutesControl";
import SecondsControl from "./SecondsControl";
import "./styles.css";

function Add(){
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


	return (
		<main id="add-container">
				<Notification/>
				<div id="timer-container">
					<h1>NEW TIMER</h1>
					<div id="timer-childContainer">
						<HoursControl ref={hoursReference} location={state?.fromScreen}/>
						<MinutesControl ref={minutesReference} location={state?.fromScreen}/>
						{
							state?.fromScreen === "/Timer"
							?<SecondsControl ref={secondsReference}/>
							:null
						}	
					</div>
					<ul id="timer-footer">
						<li>hours</li>
						<li>minutes</li>
						{
							state?.fromScreen === "/Timer"
							?<li>seconds</li>
							:null
						}
					</ul>
				</div>
				<div id="name-container">
					<h2>Timer name</h2>
					<h1>Timer (x)</h1>
				</div>
				<div style={{height: "180px"}}/>
			</main>
	)
}

export default Add;