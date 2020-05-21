import React,{useState, useRef, useEffect} from "react";
import {useHistory,useLocation} from "react-router-dom";
import {connect} from "react-redux";
import {RiArrowUpSLine,RiArrowDownSLine} from "react-icons/ri";
import Notification from "../../components/Notification";
import "./styles.css";

function Add({modules,dispatch}){
	const {log} = console;
	const {state} = useLocation();

	if (state?.screen)
		log(`This is Add with state:${state.screen}`)	

	const [hours,setHours] = useState(5);
	const [minutes,setMinutes] = useState(5);
	const [seconds,setSeconds] = useState(5);

	let hoursReference = useRef(null)	
	let minutesReference = useRef(null)
	let secondsReference = useRef(null)
	useEffect(() => {

		hoursReference.current.scrollIntoView({block: "center", inline: "nearest"})
		minutesReference.current.scrollIntoView({block: "center", inline: "nearest"})
		if (state?.screen === "/Timer")
			secondsReference.current.scrollIntoView({block: "center", inline: "nearest"})
	})

	function handleMouse(e){
		// if (e.clientY > 115 && e.clientY < 358){
		// 	const distance = e.clientY - 115;

		// 	const number = parseInt(String(distance / e.target.offsetHeight)) - 6

		// 	const value = hours+number;
		// 	if (value >= 0)
		// 	{
		// 		setHours(value);
		// 	}
		// 	else{
		// 		setHours(60);
		// 	}
		// }
	}

	function handleHours(value){
		if (value >= 0 && value <= 60){
			setHours(value);
		}else if(value === 61){
			setHours(0);
		}else{
			setHours(60);
		}
	}

	function handleMinutes(value){
		if (value >= 0 && value <= 60){
			setMinutes(value);
		}else if(value === 61){
			setMinutes(0);
		}else{
			setMinutes(60);
		}
	}

	function handleSeconds(value){
		if (value >= 0 && value <= 60){
			setSeconds(value);
		}else if(value === 61){
			setSeconds(0);
		}else{
			setSeconds(60);
		}
	}

	function pointerOver(e){
		
		if (e.target.id === "secondsArrowUp"){
			let secondsArrowDown = document.getElementById("secondsArrowDown");
			secondsArrowDown.style.backgroundColor = "rgba(40,40,40,1)";
			secondsArrowDown.style.color = "rgba(255,255,255,1)";
			e.target.style.backgroundColor = "rgba(40,40,40,1)";
			e.target.style.color = "rgba(255,255,255,1)";
		}

		if (e.target.id === "secondsArrowDown"){
			let secondsArrowUp = document.getElementById("secondsArrowUp");
			secondsArrowUp.style.backgroundColor = "rgba(40,40,40,1)";
			secondsArrowUp.style.color = "rgba(255,255,255,1)";
			e.target.style.backgroundColor = "rgba(40,40,40,1)";
			e.target.style.color = "rgba(255,255,255,1)";
		}

		if (e.target.id === "minutesArrowUp"){
			let minutesArrowDown = document.getElementById("minutesArrowDown");
			minutesArrowDown.style.backgroundColor = "rgba(40,40,40,1)";
			minutesArrowDown.style.color = "rgba(255,255,255,1)";
			e.target.style.backgroundColor = "rgba(40,40,40,1)";
			e.target.style.color = "rgba(255,255,255,1)";
		}

		if (e.target.id === "minutesArrowDown"){
			let minutesArrowUp = document.getElementById("minutesArrowUp");
			minutesArrowUp.style.backgroundColor = "rgba(40,40,40,1)";
			minutesArrowUp.style.color = "rgba(255,255,255,1)";
			e.target.style.backgroundColor = "rgba(40,40,40,1)";
			e.target.style.color = "rgba(255,255,255,1)";
		}

		if (e.target.id === "hoursArrowUp"){
			let hoursArrowDown = document.getElementById("hoursArrowDown");
			hoursArrowDown.style.backgroundColor = "rgba(40,40,40,1)";
			hoursArrowDown.style.color = "rgba(255,255,255,1)";
			e.target.style.backgroundColor = "rgba(40,40,40,1)";
			e.target.style.color = "rgba(255,255,255,1)";
		}

		if (e.target.id === "hoursArrowDown"){
			let hoursArrowUp = document.getElementById("hoursArrowUp");
			hoursArrowUp.style.backgroundColor = "rgba(40,40,40,1)";
			hoursArrowUp.style.color = "rgba(255,255,255,1)";
			e.target.style.backgroundColor = "rgba(40,40,40,1)";
			e.target.style.color = "rgba(255,255,255,1)";
		}

		if (e.target.id === "minutesMiddleBar"){
			let minutesArrowDown = document.getElementById("minutesArrowDown");
			minutesArrowDown.style.backgroundColor = "rgba(40,40,40,1)";
			minutesArrowDown.style.color = "rgba(255,255,255,1)";
			let minutesArrowUp = document.getElementById("minutesArrowUp");
			minutesArrowUp.style.backgroundColor = "rgba(40,40,40,1)";
			minutesArrowUp.style.color = "rgba(255,255,255,1)";
		}
	}

	function pointerOut(e){
		if (e.target.id === "secondsArrowUp" && (e.clientX < 450 || e.clientX > 460)){
			let secondsArrowDown = document.getElementById("secondsArrowDown");
			secondsArrowDown.style.backgroundColor = "rgba(30,30,30,0)";
			secondsArrowDown.style.color = "rgba(255,255,255,0)";
			e.target.style.backgroundColor = "rgba(30,30,30,0)";
			e.target.style.color = "rgba(255,255,255,0)";
		}

		if (e.target.id === "secondsArrowDown" && (e.clientX < 450 || e.clientX > 460)){
			let secondsArrowUp = document.getElementById("secondsArrowUp");
			secondsArrowUp.style.backgroundColor = "rgba(30,30,30,0)";
			secondsArrowUp.style.color = "rgba(255,255,255,0)";
			e.target.style.backgroundColor = "rgba(30,30,30,0)";
			e.target.style.color = "rgba(255,255,255,0)";
		}

		if (e.target.id === "minutesArrowUp" && (e.clientX < 450 || e.clientX > 460)){
			let minutesArrowDown = document.getElementById("minutesArrowDown");
			minutesArrowDown.style.backgroundColor = "rgba(30,30,30,0)";
			minutesArrowDown.style.color = "rgba(255,255,255,0)";
			e.target.style.backgroundColor = "rgba(30,30,30,0)";
			e.target.style.color = "rgba(255,255,255,0)";
		}

		if (e.target.id === "minutesArrowDown" && (e.clientX < 450 || e.clientX > 460)){
			let minutesArrowUp = document.getElementById("minutesArrowUp");
			minutesArrowUp.style.backgroundColor = "rgba(30,30,30,0)";
			minutesArrowUp.style.color = "rgba(255,255,255,0)";
			e.target.style.backgroundColor = "rgba(30,30,30,0)";
			e.target.style.color = "rgba(255,255,255,0)";
		}

		if (e.target.id === "hoursArrowUp" && (e.clientX < 450 || e.clientX > 460)){
			let hoursArrowDown = document.getElementById("hoursArrowDown");
			hoursArrowDown.style.backgroundColor = "rgba(30,30,30,0)";
			hoursArrowDown.style.color = "rgba(255,255,255,0)";
			e.target.style.backgroundColor = "rgba(30,30,30,0)";
			e.target.style.color = "rgba(255,255,255,0)";
		}

		if (e.target.id === "hoursArrowDown" && (e.clientX < 450 || e.clientX > 460)){
			let hoursArrowUp = document.getElementById("hoursArrowUp");
			hoursArrowUp.style.backgroundColor = "rgba(30,30,30,0)";
			hoursArrowUp.style.color = "rgba(255,255,255,0)";
			e.target.style.backgroundColor = "rgba(30,30,30,0)";
			e.target.style.color = "rgba(255,255,255,0)";
		}
	}
	
	let i = 0,hoursList = [], minutesList = [], secondsList = [];
	const exibited = 10;

	for (i = minutes - exibited; i < minutes + exibited; i++){
	    if (i <= 60 && i >= 0){
	    	minutesList.push(i)
	    } else if(i < 0){
	    	minutesList.push(61+i)
	    } else {
	    	minutesList.push(i-60)
	    }
	    if (i === 60){
    		minutesList.push(0);
    	}
    }

    for (i = seconds - exibited; i < seconds + exibited; i++){
	    if (i <= 60 && i >= 0){
	    	secondsList.push(i)
	    } else if(i < 0){
	    	secondsList.push(61+i)
	    } else {
	    	secondsList.push(i-60)
	    }

	    if (i === 60){
    		secondsList.push(0);
    	}
    }

    for (i = hours - exibited; i < hours + exibited; i++){
	    if (i <= 60 && i >= 0){
	    	hoursList.push(i);
	    } else if(i < 0){
	    	hoursList.push(61+i);
	    } else {
	    	hoursList.push(i-60);
	    }
	    if (i === 60){
    		hoursList.push(0);
    	}
    }

	const history = useHistory();

	function handleSubmit(e){
		e.preventDefault();
		console.log("Submited");

		let newHours = String(hours);
		let newMinutes = String(minutes);
		let newSeconds = String(seconds);

		if (hours < 10){
			newHours = newHours.padStart(2, "0");
		}

		if (minutes < 10){
			newMinutes = newMinutes.padStart(2, "0");
		}

		if (seconds < 10){
			newSeconds = newSeconds.padStart(2, "0");
		}

		dispatch({type:"ADD_TIMER", timer: {hours: newHours,minutes: newMinutes,seconds: newSeconds}});
		history.push(`/Timer`);
	}

	return (
		<main id="add-container">
				<Notification/>
				<div id="timer-container">
					<h1>NEW TIMER</h1>
					<div id="timer-childContainer">

						<form onSubmit={handleSubmit} onClick={handleMouse}>
							<div>
								<RiArrowUpSLine id="hoursArrowUp" className="arrowUp" onClick={() => handleHours(hours-1)} onPointerOver={pointerOver} onPointerOut={pointerOut}/>
								<div>
									{hoursList.map(value => {
										const stringValue = String(value);
										if (stringValue === String(hours)){
											return <p ref={hoursReference} key={"0"+stringValue} id={"0"+stringValue}>{stringValue}</p>
										}
										return <p key={"0"+stringValue} id={"0"+stringValue}>{stringValue}</p>
									})}
								</div>
								<div className="middle-bar"/>
								<RiArrowDownSLine id="hoursArrowDown" className="arrowDown" onClick={() => handleHours(hours+1)} onPointerOver={pointerOver} onPointerOut={pointerOut}/>
							</div>
							<div>
								<RiArrowUpSLine id="minutesArrowUp" className="arrowUp" onClick={() => handleMinutes(minutes-1)} onPointerOver={pointerOver} onPointerOut={pointerOut}/>
								<div>
									{minutesList.map(value =>{
										const stringValue = String(value);
										if (stringValue=== String(minutes)){
											return <p ref={minutesReference} key={"1" + stringValue} id={"1"+stringValue} >{stringValue}</p>
										}
										return (<p key={"1" + stringValue} id={"1"+stringValue}>{stringValue}</p>)
									})}
								</div>
								<div id="minutesMiddleBar" className="middle-bar" onClick={() => console.log("HELLO")}/>
								<RiArrowDownSLine id="minutesArrowDown" className="arrowDown" onClick={() => handleMinutes(minutes+1)} onPointerOver={pointerOver} onPointerOut={pointerOut}	/>
							</div>
							{
								state?.screen === "/Timer" &&
								<div>
									<RiArrowUpSLine id="secondsArrowUp" className="arrowUp" onClick={() => handleSeconds(seconds-1)} onPointerOver={pointerOver} onPointerOut={pointerOut} />
									<div>
										{secondsList.map(value => {
											const stringValue = String(value);
											if(stringValue === String(seconds)){
												return <p  ref={secondsReference} key={"1"+ stringValue} id={"2"+stringValue}>{stringValue}</p>
											}
											return <p key={"2"+stringValue} id={"2"+stringValue}>{stringValue}</p>
										})}
									</div>
									<div className="middle-bar"/>
									<RiArrowDownSLine id="secondsArrowDown" className="arrowDown" onClick={() => handleSeconds(seconds + 1)} onPointerOver={pointerOver} onPointerOut={pointerOut}/>
								</div>
							}
							
						</form>
					</div>
					<ul id="timer-footer">
						<li>hours</li>
						<li>minutes</li>
						<li>seconds</li>
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

export default connect(state => ({
	modules: state
}))(Add)