import React,{useState, useRef, useEffect} from "react";
import {Link,useHistory} from "react-router-dom";
import {connect} from "react-redux";
import {RiArrowUpSLine,RiArrowDownSLine} from "react-icons/ri";
import "./styles.css";

function Add({modules,dispatch}){
	const [hours,setHours] = useState(5);
	const [minutes,setMinutes] = useState(5);
	const [seconds,setSeconds] = useState(5);

	let hoursReference = useRef(null);
	let minutesReference = useRef(null);
	let secondsReference = useRef(null);

	useEffect(() => {
		hoursReference.current.scrollIntoView()
		minutesReference.current.scrollIntoView()
		secondsReference.current.scrollIntoView()
		// if (minutesReference !== null){
		// 	minutesReference.current.scrollIntoView()
		// }
	})

	function handleHours(value){
		if (!(value < 0) && !(value > 60))
		{
			setHours(value);
		}
	}

	function handleMinutes(value){
		if (!(value < 0) && !(value > 60))
		{
			setMinutes(value);
		}
	}

	function handleSeconds(value){
		if (!(value < 0) && !(value > 60))
		{
			setSeconds(value);
		}
	}

	function pointerOver(e){
		console.log(`Place: (${e.tiltX},${e.tiltY})`);
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
		
	}

	function pointerOut(e){
		console.log(e.clientX);
		if (e.target.id === "secondsArrowUp" && (e.clientX < 550 || e.clientX > 560)){
			let secondsArrowDown = document.getElementById("secondsArrowDown");
			secondsArrowDown.style.backgroundColor = "rgba(30,30,30,0)";
			secondsArrowDown.style.color = "rgba(255,255,255,0)";
			e.target.style.backgroundColor = "rgba(30,30,30,0)";
			e.target.style.color = "rgba(255,255,255,0)";
		}

		if (e.target.id === "secondsArrowDown" && (e.clientX < 550 || e.clientX > 560)){
			let secondsArrowUp = document.getElementById("secondsArrowUp");
			secondsArrowUp.style.backgroundColor = "rgba(30,30,30,0)";
			secondsArrowUp.style.color = "rgba(255,255,255,0)";
			e.target.style.backgroundColor = "rgba(30,30,30,0)";
			e.target.style.color = "rgba(255,255,255,0)";
		}
		
	}

	let i = 0,TIME = [];
	for (; i <= 60; i++){
		TIME.push(i);
	}

	const history = useHistory();

	function handleSubmit(e){
		e.preventDefault();
		console.log("Submited");
		
		
		dispatch({type:"ADD_TIMER", timer: {hours,seconds,minutes}});
		history.push(`/`);
	}

	return (
		<div className="container">
			<main id="add-container">
				<div id="notifications-container">
					<p>
						The notifications will only show up if the computer is active.
						<a href="#">More info</a>
					</p>
				</div>
				<div id="timer-container">
					<h1>NEW TIMER</h1>
					<div>
						<form onSubmit={handleSubmit}>
							<div>
								<RiArrowUpSLine className="arrowUp" onClick={() => handleHours(hours - 1)}/>
								<div>
									{TIME.map((value,index) => {
										if (String(value) === String(hours)){
											return <p ref={hoursReference} key={index} id={"0"+index}>{value}</p>
										}
										return <p key={index} id={"0"+index}>{value}</p>
									})}
								</div>
								<div className="middle-bar"/>
								<RiArrowDownSLine className="arrowDown" onClick={() => handleHours(hours + 1)}/>
							</div>
							<div>
								<RiArrowUpSLine className="arrowUp" onClick={() => handleMinutes(minutes - 1)}/>
								<div>
									{TIME.map((value,index) =>{
										if (String(value) === String(minutes)){
											return <p ref={minutesReference} key={index} id={"1"+index}>{value}</p>
										}
										return (<p key={index} id={"1"+index}>{value}</p>)
									})}
								</div>
								<div className="middle-bar"/>
								<RiArrowDownSLine className="arrowDown" onClick={() => handleMinutes(minutes + 1)}/>
							</div>
							<div>
								<RiArrowUpSLine id="secondsArrowUp" className="arrowUp" onClick={() => handleSeconds(seconds - 1)} onPointerOver={pointerOver} onPointerOut={pointerOut} />
								<div>
									{TIME.map((value,index) => {
										if(String(value) === String(seconds)){
											return <p ref={secondsReference} key={index} id={"2"+index}>{value}</p>
										}
										return <p key={index} id={"2"+index}>{value}</p>
									})}
								</div>
								<div className="middle-bar"/>
								<RiArrowDownSLine id="secondsArrowDown" className="arrowDown" onClick={() => handleSeconds(seconds + 1)} onPointerOver={pointerOver} onPointerOut={pointerOut}/>
							</div>
						</form>
					</div>
					<Link to="/">Back</Link>
				</div>
				<div id="name-container">
					<h2>TIMER NAME</h2>
					<h1>Timer (x)</h1>
				</div>
				<div style={{height: "180px"}}/>
			</main>
			<Footer/>
		</div>
	)
}

function Footer(){
	return (
		<div/>
	)
}

export default connect(state => ({
	modules: state
}))(Add)