import React,{useRef, useEffect} from "react";
import {useLocation} from "react-router-dom";
import {useDispatch,useSelector} from "react-redux";
import {RiArrowUpSLine,RiArrowDownSLine} from "react-icons/ri";
import Notification from "../../components/Notification";
import "./styles.css";

function Add(){
	const dispatch = useDispatch();
	const {state} = useLocation();

	let hoursReference = useRef(null)	
	let minutesReference = useRef(null)
	let secondsReference = useRef(null)
	// everytime a new value is selected, the redux get it
	// the 'play' button will only make it official
	const store = useSelector(state => state.timer);
	console.log(store);

	useEffect(() => {
		hoursReference.current.scrollIntoView({block: "center", inline: "nearest"})
		minutesReference.current.scrollIntoView({block: "center", inline: "nearest"})

		if (state?.screen === "/Timer")
			secondsReference.current.scrollIntoView({block: "center", inline: "nearest"})	
	})

	function handleHours(value){
		const {hours,minutes,seconds} = store.placeholderTimer;

		console.log("HandleHours:",hours)
		if (value >= 0 && value <= 60)
			dispatch({type: "SET_PLACEHOLDER",hours: String(value).padStart(2,"0"),minutes,seconds});
		else if(value === 61)
			dispatch({type: "SET_PLACEHOLDER",hours: String(0).padStart(2,"0"),minutes,seconds});
		else
			dispatch({type: "SET_PLACEHOLDER",hours: String(60),minutes,seconds});;
	}

	function handleMinutes(value){
		const {hours,seconds} = store.placeholderTimer;

		if (value >= 0 && value <= 60)
			dispatch({type: "SET_PLACEHOLDER",hours,minutes: String(value).padStart(2,"0"),seconds});
		else if(value === 61)
			dispatch({type: "SET_PLACEHOLDER",hours,minutes: String(0).padStart(2,"0"),seconds});
		else
			dispatch({type: "SET_PLACEHOLDER",hours,minutes:  String(60),seconds});;
	}

	function handleSeconds(value){
		const {hours,minutes} = store.placeholderTimer;
		
		if (value >= 0 && value <= 60)
			dispatch({type: "SET_PLACEHOLDER",hours,minutes,seconds: String(value).padStart(2,"0")});
		else if(value === 61)
			dispatch({type: "SET_PLACEHOLDER",hours,minutes,seconds: String(0).padStart(2,"0")});
		else
			dispatch({type: "SET_PLACEHOLDER",hours,minutes,seconds: String(60)});;
	}

	function pointerOver(e){
		let secondsArrowDown = document.getElementById("secondsArrowDown");
		let secondsArrowUp = document.getElementById("secondsArrowUp");
		
		let hoursArrowUp = document.getElementById("hoursArrowUp");
		let hoursArrowDown = document.getElementById("hoursArrowDown");
		
		let minutesArrowDown = document.getElementById("minutesArrowDown");
		let minutesArrowUp = document.getElementById("minutesArrowUp");

		let newStyle = {
			backgroundColor: "rgba(40,40,40,1)",
			color: "rgba(255,255,255,1)",
		}
		switch(e.target.id){
			case "secondsArrowUp":
				Object.assign(secondsArrowDown.style,newStyle)				
				Object.assign(e.target.style,newStyle)
				break;
			case "secondsArrowDown":
				Object.assign(secondsArrowUp.style,newStyle);
				Object.assign(e.target.style,newStyle);
				break;
			case "minutesArrowUp":
				Object.assign(minutesArrowUp.style,newStyle);
				Object.assign(e.target.style,newStyle);		
				break;
			case "minutesArrowDown":
				Object.assign(minutesArrowUp.style,newStyle);
				Object.assign(e.target.style,newStyle);	
				break;
			case "hoursArrowUp":
				Object.assign(hoursArrowDown.style,newStyle)
				Object.assign(e.target.style,newStyle);		
				break;
			case "hoursArrowDown":
				Object.assign(hoursArrowUp.style,newStyle)
				Object.assign(e.target.style,newStyle);				
				break;
			case "minutesMiddleBar":
				Object.assign(minutesArrowDown.style,newStyle);
				Object.assign(minutesArrowUp.style,newStyle);
				break;
			default:
				break;
		}
	}

	function pointerOut(e){
		if (!(e.clientX < 450 || e.clientX > 460))
			return;
		
		let secondsArrowDown = document.getElementById("secondsArrowDown");
		let secondsArrowUp = document.getElementById("secondsArrowUp");
		
		let hoursArrowUp = document.getElementById("hoursArrowUp");
		let hoursArrowDown = document.getElementById("hoursArrowDown");
		
		let minutesArrowDown = document.getElementById("minutesArrowDown");
		let minutesArrowUp = document.getElementById("minutesArrowUp");

		let newStyle = {
			backgroundColor: "rgba(30,30,30,0)",
			color: "rgba(255,255,255,0)",
		}
		switch(e.target.id){
			case "secondsArrowUp":
				Object.assign(secondsArrowDown.style, newStyle)
				Object.assign(e.target.style, newStyle)
				break;
			case "secondsArrowDown":
				Object.assign(secondsArrowUp.style, newStyle);
				Object.assign(e.target.style, newStyle);
				break;
			case "minutesArrowUp":
				Object.assign(minutesArrowDown.style, newStyle);
				Object.assign(e.target.style, newStyle);			
				break;
			case "minutesArrowDown":
				Object.assign(minutesArrowUp.style, newStyle);
				Object.assign(e.target.style, newStyle);	
				break;
			case "hoursArrowUp":
				Object.assign(hoursArrowDown.style, newStyle)
				Object.assign(e.target.style, newStyle);		
				break;
			case "hoursArrowDown":
				Object.assign(hoursArrowUp.style,newStyle)
				Object.assign(e.target.style, newStyle);				
				break;
			default:
				break;
		}
	}
	
	let i = 0,hoursList = [], minutesList = [], secondsList = [];
	const exibited = 10;

	const intHours = parseInt(store.placeholderTimer.hours);
	const intMinutes = parseInt(store.placeholderTimer.minutes);
	const intSeconds = parseInt(store.placeholderTimer.seconds);

	for (i = intMinutes - exibited; i < intMinutes + exibited; i++){
		if (i <= 60 && i >= 0)
			minutesList.push(i)
		else if(i < 0)
			minutesList.push(61+i)
		else
			minutesList.push(i-60)
		if (i === 60)
			minutesList.push(0);
    }

    for (i = intSeconds - exibited; i < intSeconds + exibited; i++){
		if (i <= 60 && i >= 0)
			secondsList.push(i)
		else if(i < 0)
			secondsList.push(61+i)
		else
			secondsList.push(i-60)
		if (i === 60)
			secondsList.push(0);
    }

    for (i = intHours - exibited; i < intHours + exibited; i++){
		if (i <= 60 && i >= 0)
			hoursList.push(i);
		else if(i < 0)
			hoursList.push(61+i);
		else
			hoursList.push(i-60);
		if (i === 60)
			hoursList.push(0);
    }

	return (
		<main id="add-container">
				<Notification/>
				<div id="timer-container">
					<h1>NEW TIMER</h1>
					<div id="timer-childContainer">
						<div>
							<RiArrowUpSLine id="hoursArrowUp" className="arrowUp" onClick={() => handleHours(intHours-1)} onPointerOver={pointerOver} onPointerOut={pointerOut}/>
							<div>
								{hoursList.map(value => {
									const stringValue = String(value);
									if (stringValue === String(intHours)){
										return <p ref={hoursReference} key={"0"+stringValue} id={"0"+stringValue}>{stringValue}</p>
									}
									return <p key={"0"+stringValue} id={"0"+stringValue}>{stringValue}</p>
								})}
							</div>
							<div className="middle-bar"/>
							<RiArrowDownSLine id="hoursArrowDown" className="arrowDown" onClick={() => handleHours(intHours+1)} onPointerOver={pointerOver} onPointerOut={pointerOut}/>
						</div>
						<div>
							<RiArrowUpSLine id="minutesArrowUp" className="arrowUp" onClick={() => handleMinutes(intMinutes-1)} onPointerOver={pointerOver} onPointerOut={pointerOut}/>
							<div>
								{minutesList.map(value =>{
									const stringValue = String(value);
									if (stringValue=== String(intMinutes)){
										return <p ref={minutesReference} key={"1" + stringValue} id={"1"+stringValue} >{stringValue}</p>
									}
									return (<p key={"1" + stringValue} id={"1"+stringValue}>{stringValue}</p>)
								})}
							</div>
							<div id="minutesMiddleBar" className="middle-bar" onClick={() => console.log("HELLO")}/>
							<RiArrowDownSLine id="minutesArrowDown" className="arrowDown" onClick={() => handleMinutes(intMinutes+1)} onPointerOver={pointerOver} onPointerOut={pointerOut}	/>
						</div>
						{
							state?.screen === "/Timer" &&
							<div>
								<RiArrowUpSLine id="secondsArrowUp" className="arrowUp" onClick={() => handleSeconds(intSeconds-1)} onPointerOver={pointerOver} onPointerOut={pointerOut} />
								<div>
									{secondsList.map(value => {
										const stringValue = String(value);
										if(stringValue === String(intSeconds)){
											return <p  ref={secondsReference} key={"1"+ stringValue} id={"2"+stringValue}>{stringValue}</p>
										}
										return <p key={"2"+stringValue} id={"2"+stringValue}>{stringValue}</p>
									})}
								</div>
								<div className="middle-bar"/>
								<RiArrowDownSLine id="secondsArrowDown" className="arrowDown" onClick={() => handleSeconds(intSeconds + 1)} onPointerOver={pointerOver} onPointerOut={pointerOut}/>
							</div>
						}	
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

export default Add;