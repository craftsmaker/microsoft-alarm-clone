import React,{useEffect} from "react";
import {useDispatch,useSelector} from "react-redux";
import "./styles.css";
import Notification from "../../components/Notification";
import {MdPlayArrow,MdRefresh} from "react-icons/md";
import {IoMdResize} from "react-icons/io";
import Modal from "./Modal";

function Timer(){
	const dispatch = useDispatch();
	const {timer: {clocks, activeClocksIDs,modal}} = useSelector(state => state);

	console.log(modal);
	useEffect(() => {
		if (localStorage.length > clocks.length){
			function getDataFromLocalStorage(){
				return Object.keys(localStorage)
					.map((value,index) =>
						({id: index + 1, timer: JSON.parse(localStorage[index + 1])})
					)		
			}
			let newClocks = getDataFromLocalStorage();
			dispatch({type: "ADD_CLOCKS", clocks: newClocks})
		}
		// Compare timer.clock with values in storage
		if (clocks.length > 0 && activeClocksIDs.length > 0){
			setTimeout(() => {
				dispatch({type: "DECREMENT_COUNTER"});
			},10)
		}
	})

	if(!modal[0]){
		if (clocks.length !== 0){
			return (
				<main>
					<Notification/>
					<div className="clocks">
						{clocks.map(clock => 
							<ClockItem key={clock.id} identifier={clock.id} timer={clock.timer} setClock={timer => dispatch({type: "CHANGE_MODAL", modal: [true,timer]})}/>
						)}
					</div>
				</main>
			);
		}
	
		return (
			<main>
				<Notification/>
				<div className="clocks"/>
			</main>
		);
	}else{
		return(
			<Modal timer={modal[1]}/>
		)
	}
}

function ClockItem({timer, identifier,setClock}){
	const {activeClocksIDs} = useSelector(state => state.timer);
	const dispatch = useDispatch();
	let isRunning = false;

	if (activeClocksIDs.findIndex(ID => ID === identifier) !== -1)
		isRunning = true;

	const handleRefresh = () => {
		dispatch({type: "RESET_COUNTER", identifier: identifier});
	}

	const handlePlay = () => {
		// console.log(isRunning);
		isRunning
		?dispatch({type: "DEACTIVATE_TIMER", identifier})
		:dispatch({type: "ACTIVATE_TIMER", identifier})
	}

	return(
		<div className="clock">
			<p>{timer.hours}:{timer.minutes}:{timer.seconds}</p>
			<ul>
				<li><MdRefresh onClick={handleRefresh} style={{
					position:"relative",
					top:0,
					padding: 20
				}}/></li>
				<li><MdPlayArrow onClick={handlePlay} style={{
					color: "white",
					borderRadius: "100%",
					padding: 20,
					border: "1px solid gray"
				}}/></li>
				<li>
					<IoMdResize style={{
							position:"relative",
							top:0,
							padding: 20
						}}
						onClick={() => setClock(timer)}
					/>
				</li>
			</ul>
		</div>
	);
}


export default Timer;