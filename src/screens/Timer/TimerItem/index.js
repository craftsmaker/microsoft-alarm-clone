import React from "react";
import {animated} from "react-spring";
import Checkbox from "../../../components/Checkbox";
import {useDispatch,useSelector} from "react-redux";
import {MdPlayArrow,MdRefresh} from "react-icons/md";
import {IoMdResize} from "react-icons/io";
import styles from "./styles.module.css";

export default ({timer, identifier,setClock,style,checkedTimerIDs}) => {
    console.log("This is the dock entrances")
    const {activeClocksIDs} = useSelector(state => state.timer);
	const dispatch = useDispatch();
	let isRunning = false;

	const checked = checkedTimerIDs.some(id => identifier === id);

	if (activeClocksIDs.findIndex(ID => ID === identifier) !== -1)
		isRunning = true;

	const handleRefresh = () => {
		dispatch({type: "RESET_COUNTER", identifier});
	}

	const handlePlay = () => {
		// console.log(isRunning);
		isRunning
		?dispatch({type: "DEACTIVATE_TIMER", identifier})
		:dispatch({type: "ACTIVATE_TIMER", identifier})
	}

	return(
		<div className={styles.clock}>
			<animated.div style={style}>
				<Checkbox onClick={e => dispatch({type: "TOGGLE_TIMER_CHECK",identifier})} checked={checked}/>
			</animated.div>
			<div style={{display: "flex",flexDirection: "column"}}>
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
		</div>
	)
}