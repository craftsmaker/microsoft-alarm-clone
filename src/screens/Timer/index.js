import React,{useEffect} from "react";
import {useDispatch,useSelector} from "react-redux";
import Notification from "../../components/Notification";
import {MdPlayArrow,MdRefresh} from "react-icons/md";
import {IoMdResize} from "react-icons/io";
import Modal from "./Modal";
import styles from "./styles.module.css";

function Timer(){
	const dispatch = useDispatch();
	const {timer: {clocks, activeClocksIDs,modal}} = useSelector(state => state);

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
					<div className={styles.clocks}>
						{clocks.map(clock => 
							<ClockItem key={clock.id} identifier={clock.id} timer={clock.timer} setClock={(timer,identifier) => dispatch({type: "CHANGE_MODAL", modal: [true,timer,identifier]})}/>
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
			<Modal identifier={modal[2]}/>
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
		<div className={styles.clock}>
			<p className={styles.clockParagraph}>{timer.hours}:{timer.minutes}:{timer.seconds}</p>
			<ul className={styles.clockButtons}>
				<li className={styles.listButton}>
					<MdRefresh onClick={handleRefresh} className={styles.clockRefreshButton} />
				</li>
				<li className={styles.listButton}>
					<MdPlayArrow className={styles.clockPlayButton} onClick={handlePlay}/>
				</li>
				<li className={styles.listButton}>
					<IoMdResize className={styles.clockResizeButton} onClick={() => setClock(timer,identifier)} />
				</li>
			</ul>
		</div>
	);
}


export default Timer;