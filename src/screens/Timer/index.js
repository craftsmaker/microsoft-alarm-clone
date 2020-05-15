import React,{useEffect} from "react";
import {useDispatch,useSelector} from "react-redux";
import "./styles.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Notification from "../../components/Notification";
import {MdPlayArrow,MdRefresh} from "react-icons/md";
import {IoMdResize} from "react-icons/io";

function Timer(){
	const dispatch = useDispatch();
	const {timer} = useSelector(state => state);
	// const {timer} = getState();
	
	// console.log(timer)
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

	useEffect(() => {
		// Check every element of timer list
		// setInterval to decrement every 10 ms
		// who is running
		if (timer.clocks.length > 0 && timer.activeClocksIDs.length > 0){
			setTimeout(() => {
				dispatch({type: "DECREMENT_COUNTER"});
			},10)
		}
	})
	
	if (timer.clocks.length !== 0){
		return (
			<div className="container">
				<Header/>
				<main>
					<Notification/>
					<div className="clocks">
						{timer.clocks.map(clock => 
							<Clock key={clock.id} identifier={clock.id} timer={clock.timer}/>
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

function Clock({timer, identifier}){
	// dispathc (type:decrement_clock,id:1,hour,second,minute,micro)
	const {activeClocksIDs} = useSelector(state => state.timer);
	const dispatch = useDispatch();
	let isRunning = false;
	// console.log(activeClocksIDs)
	for (let x of activeClocksIDs){
		if (x.id === identifier){
			isRunning = true;
		}
	}

	const handleRefresh = () => {
		dispatch({type: "RESET_COUNTER", identifier: identifier});
	}

	const handlePlay = () => {
		// console.log(isRunning);
		isRunning?
		dispatch({type: "DEACTIVATE_TIMER", identifier}):
		dispatch({type: "ACTIVATE_TIMER", identifier})
	}

	return(
		<div className="clock">
			<div id="clock-childContainer">
				<p>{timer.hours}:{timer.minutes}:{timer.seconds}</p>
				<ul>
					<li><MdRefresh onClick={handleRefresh} style={{position:"relative",top:0, padding: 20}}/></li>
					<li><MdPlayArrow onClick={handlePlay} style={{fontSize: 60, color: "white", borderRadius: "100%", marginLeft: 50, marginRight: 50}}/></li>
					<li><IoMdResize style={{position:"relative",top:0, padding: 20}}/></li>
				</ul>
			</div>
		</div>
	);
}


export default Timer;