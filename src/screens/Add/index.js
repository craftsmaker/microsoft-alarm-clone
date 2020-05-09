import React,{useState, useRef, useEffect} from "react";
import {Link,useHistory} from "react-router-dom";
import {connect} from "react-redux";
import {RiArrowUpSLine,RiArrowDownSLine} from "react-icons/ri";
import "./styles.css";

function Add({modules,dispatch}){
	const [hours,setHours] = useState(5);
	const [minutes,setMinutes] = useState(5);
	const [seconds,setSeconds] = useState(5);

	let hoursReference = useRef(null)	
	useEffect(() => {

		hoursReference.current.scrollIntoView({block: "center", inline: "nearest"})
		// minutesReference.current.scrollIntoView({block: "center", inline: "nearest"})
		// secondsReference.current.scrollIntoView({block: "center", inline: "nearest"})
		// if (minutesReference !== null){
		// 	minutesReference.current.scrollIntoView({block: "center", inline: "nearest"})
		// }

		// console.log(hours);
		// document.getElementById("0" + String(hours)).scrollIntoView({block: "center", inline: "nearest"});
	})

	function handleMouse(e){
		if (e.clientY > 115 && e.clientY < 358){
			const distance = e.clientY - 115;

			const number = parseInt(String(distance / e.target.offsetHeight)) - 6

			const value = hours+number;
			if (value >= 0)
			{
				setHours(value);
			}
			else{
				setHours(60);
			}
		}
	}

	function handleHours(value){
		if (value >= 0 && value < 60)
		{
			setHours(value);
		}
		else{
			setHours(60);
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

	console.log("Hours:",hours);
	
	let i = 0,hourList = [], TIME = [];
	const exibited = 10; // valor atual + 5 de hora ou minuto ou segundo

	// SIZE OF LIST
	// AMOUNT OF ITEMS EXIBITIONED
	// STATE VALUE
	// SUBIR E DESCER

	// Valor em hora

	for (i = hours - exibited; i < hours + exibited; i++){
	    if (i <= 60 && i >= 0)
	    {
	    	hourList.push(i)
	    } else if(i < 0){
	    	hourList.push(61+i)
	    } else {
	    	hourList.push(i-60)
	    }
    }

    for (i = 0; i < 30; i++){
	    TIME.push(i);
    }

	// for (; x >= 60; x--){

	// }

	// for (; i <= (LIST_SIZE-n); i++){ //4 - 5 = -1
	// 	if (i < 0){
	// 		let x = 60;
	// 		for (; x >= 0; x--){
	// 			TIME.unshift(x);
	// 		}
	// 	}
	// 	if (i > 0){
	// 		TIME.push(i);
	// 	}
	// }

	const history = useHistory();

	function handleSubmit(e){
		e.preventDefault();
		console.log("Submited");
		
		
		dispatch({type:"ADD_TIMER", timer: {hours,seconds,minutes}});
		history.push(`/`);
	}

	// todo p, é exibido de maneira linear, obedencendo a ordem do array dado
	// a cada negativa na 'barra de seleção', o valor troca com o seu equivalente na posição final
	// <- 4 = -> 0 -><- 60
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
					<div id="timer-childContainer">

						<form onSubmit={handleSubmit} onClick={handleMouse}>
							<div>
								<RiArrowUpSLine id="hoursArrowUp" className="arrowUp" onClick={() => handleHours(hours-1)} onPointerOver={pointerOver} onPointerOut={pointerOut}/>
								<div>
									{hourList.map((value) => {

										if (String(value) === String(hours)){
											console.log("AV:",value)
											return <p ref={hoursReference} key={"0"+	value} id={"0"+value}>{value}</p>
										}
										return <p key={"0"+value} id={"0"+value}>{value}</p>
									})}
								</div>
								<div className="middle-bar"/>
								<RiArrowDownSLine id="hoursArrowDown" className="arrowDown" onClick={() => handleHours(hours+1)} onPointerOver={pointerOver} onPointerOut={pointerOut}/>
							</div>
							<div>
								<RiArrowUpSLine id="minutesArrowUp" className="arrowUp" onClick={() => handleMinutes(minutes - 1)} onPointerOver={pointerOver} onPointerOut={pointerOut}/>
								<div>
									{TIME.map((value,index) =>{
										if (String(value) === String(minutes)){
											return <p key={"1" + index} id={"1"+index} >{value}</p>
										}
										return (<p key={"1" + index} id={"1"+index}>{value}</p>)
									})}
								</div>
								<div id="minutesMiddleBar" className="middle-bar" onClick={() => console.log("HELLO")}/>
								<RiArrowDownSLine id="minutesArrowDown" className="arrowDown" onClick={() => handleMinutes(minutes + 1)} onPointerOver={pointerOver} onPointerOut={pointerOut}	/>
							</div>
							<div>
								<RiArrowUpSLine id="secondsArrowUp" className="arrowUp" onClick={() => handleSeconds(seconds - 1)} onPointerOver={pointerOver} onPointerOut={pointerOut} />
								<div>
									{TIME.map((value,index) => {
										if(String(value) === String(seconds)){
											return <p key={"1"+index} id={"2"+index}>{value}</p>
										}
										return <p key={"1"+index} id={"2"+index}>{value}</p>
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