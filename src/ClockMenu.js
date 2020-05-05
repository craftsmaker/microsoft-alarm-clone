import React, {useState,useEffect} from "react";
import {useHistory} from "react-router-dom";
import {connect} from "react-redux";


function ClockMenu({modules,dispatch}) {
	// const [clocks,setClocks] = useState([]);
	// const [isUpdated, setIsUpdated] = useState(false);

	console.log("ClockMenu Reload:",modules);
	const history = useHistory();

	useEffect(() => {
		if (localStorage.length > Object.keys(modules.clocks).length){
			// function getDataFromlocalStorage
			let clocks = Object.keys(localStorage).map((value,index) => {return {id: index + 1, timer: JSON.parse(localStorage[index + 1])}});
			dispatch({type: "ADD_CLOCKS", clocks: clocks})
		}
		// Compare modules.clock with values in storage
	})

	// if (!isUpdated){
	// 		let arrayO = []
	// 		for (let i = 1; i < localStorage.length + 1 ; i++){
	// 			arrayO.push(JSON.parse(localStorage[i]))
	// 		}

	// 		setClocks(arrayO);
	// 		setIsUpdated(true);
	// 	}


	// function handleClick(){
	// 	if(Object.keys(modules.timer).length !== 0){
	// 		const object = {
	// 			id: String(Object.keys(modules.clocks).length + 1),
	// 			timer: modules.timer
	// 		}
	// 		//setClocks([...clocks,object])
	// 		console.log("BEFORE",object);
	// 		localStorage.setItem(object.id, JSON.stringify(object));
	// 		dispatch({type: "ADD_TIMER", timer: modules.timer})
	// 		console.log("AFTER")
	// 		dispatch({type: "RESET_TIMER"})
	// 	}
	// }

	if (Object.keys(modules.clocks).length !== 0){
		return (
			<div className="clocks">
				<ul>
					{modules.clocks.map((clock) => 
						<li key={clock.id}><Clock  timer={clock.timer}/></li>
					)}
				</ul>
			</div>
		);
	}

	return (
		<div className="clocks">

		</div>
	);
}

function Clock(props){
	const timer = props.timer // object {hours,minutes,seconds}
	// console.log(timer)
	// function handlePlay(){

	// }

	// function handleResize(){

	// }

	// function handleReboot(){

	// }

	return(
		<div className="clock">
			<p>{timer.hours}:{timer.minutes}:{timer.seconds}</p>
			<ul>
				<li><i className="material-icons" style={{position:"relative",top:15}}>replay</i></li>
				<li><i className="material-icons" style={{fontSize: 60, color: "white", borderRadius: "100%"}}>play_circle_filled</i></li>
				<li><i className="material-icons" style={{position:"relative",top:15}}>fullscreen</i></li>
			</ul>
		</div>
	);
}

export default connect(state => ({
	modules: state
}))(ClockMenu)