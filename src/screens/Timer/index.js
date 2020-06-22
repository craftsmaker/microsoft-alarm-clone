import React,{useEffect} from "react";
import {useDispatch,useSelector} from "react-redux";
import Notification from "../../components/Notification";
import Modal from "./Modal";
import styles from "./styles.module.css";
import {useSprings} from "react-spring";
import {transformListOfStringfiedObjectsIntoArray} from "../../utils";
import TimerItem from "./TimerItem";

export default () => {
	const dispatch = useDispatch();
	let {timer: {clocks, activeClocksIDs,modal,checkedTimerIDs}} = useSelector(state => state);
	const [toggleAnimations,setToggleAnimations] = useSprings(clocks?.length || 0, () => ({position: "absolute", left: "-100px"}))
	console.log("this is the main entrance")


	useEffect(()=>{
		dispatch({type: "SET_TIMER_TOGGLER", setter: (isVisible = false) => {
			isVisible
			? (() => {
				setToggleAnimations(() => ({left: "-100px"}))
			})()
			: (() => {
				setToggleAnimations(() => ({left: "5px"}))
			})()
		}})

	},[dispatch,setToggleAnimations])

	useEffect(() => {
		// Compare timer.clock with values in storage
		if (clocks?.length > 0 && activeClocksIDs?.length > 0){
			setTimeout(() => {
				dispatch({type: "DECREMENT_COUNTER"});
			},10)
		}
	})

	let storedTimers = localStorage.getItem("timers");

	useEffect(() => {
		let newClocks =  transformListOfStringfiedObjectsIntoArray(storedTimers);;
		if (!newClocks)
			newClocks = []
		dispatch({type: "ADD_CLOCKS", clocks: newClocks})
	},[storedTimers,dispatch])

	if(!modal[0]){
		if (clocks?.length !== 0){
			return (
				<main>
					<Notification/>
					<div className={styles.clocks}>
						{clocks?.map((timer,index) => 
							<TimerItem 
								key={index}
								identifier={index}
								checkedTimerIDs={checkedTimerIDs} 
								style={toggleAnimations[index]} 
								timer={timer} 
								setClock={(timer,identifier) => dispatch({type: "CHANGE_MODAL", modal: [true,timer,identifier]})}
							/>
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