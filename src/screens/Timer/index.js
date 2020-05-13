import React,{useEffect} from "react";
import {useStore} from "react-redux";
import "./styles.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Notification from "../../components/Notification";

function Timer(){
	const {getState,dispatch} = useStore();
	const {timer} = getState();

	useEffect(() => {
		if (localStorage.length > timer.clocks.length){
			function getDataFromLocalStorage(){
				return Object.keys(localStorage)
					.map((value,index) => {
						return {id: index + 1, timer: JSON.parse(localStorage[index + 1])}
					})
				
			}
			let clocks = getDataFromLocalStorage();
			dispatch({type: "ADD_CLOCKS", clocks: clocks})
		}
		// Compare timer.clock with values in storage
	})
	
	if (timer.clocks.length !== 0){
		return (
			<div className="container">
				<Header/>
					<main>
						<Notification/>
						<div className="clocks">
							{timer.clocks.map(clock => 
								<Clock key={clock.id}  timer={clock.timer}/>
							)}
						</div>
					</main>
				<Footer right/>
			</div>
		);
	}

	return (
		<div className="container">
			<Header/>
			<main>
				<Notification/>
				<div className="clocks">
					
				</div>
			</main>
			<Footer right/>
		</div>
	);
}

function Clock(props){
	const timer = props.timer // object {hours,minutes,seconds}

	return(
		<div className="clock">
			<div id="clock-childContainer">
				<p style={{textAlign: "center"}}>{timer.hours}:{timer.minutes}:{timer.seconds}</p>
				<ul>
					<li><i className="material-icons" style={{position:"relative",top:15}}>replay</i></li>
					<li><i className="material-icons" style={{fontSize: 60, color: "white", borderRadius: "100%"}}>play_circle_filled</i></li>
					<li><i className="material-icons" style={{position:"relative",top:15}}>fullscreen</i></li>
				</ul>
			</div>
		</div>
	);
}


export default Timer;