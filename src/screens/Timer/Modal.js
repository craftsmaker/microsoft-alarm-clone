import React from "react";
import {MdPlayArrow,MdRefresh} from "react-icons/md";
import {FiMinimize2} from "react-icons/fi";
import {useDispatch,useSelector} from "react-redux";
import styles from "./modal.module.css";

export default function Modal({identifier}){
    const {activeClocksIDs,clocks} = useSelector(state => state.timer);
	const dispatch = useDispatch();
	let isRunning = false;  

    const timer = clocks[identifier];

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
        <main className={styles.main}>
            <p className={styles.mainParagraph}>
                {timer.hours}:{timer.minutes}:{timer.seconds}
            </p>
            <div className={styles.mainClock}>
                <h2 style={{alignItems: "flex-end"}}>Temporizador(7)</h2>
                <ul className={styles.clockButtons}>
                    <li>
                        <MdRefresh
                            className={styles.clockButtonRefresh}
                            onClick={handleRefresh}
                        />
                    </li>
                    <li>
                        <MdPlayArrow  
                            className={styles.clockButtonPlay}
                            onClick={handlePlay}
                        />
                    </li>
                    <li>
                        <FiMinimize2 
                            className={styles.clockButtonMinimize}
                            onClick={() => dispatch({type: "CHANGE_MODAL", modal: [false,{}]})}
                        />
                    </li>
                </ul>
            </div>
        </main>
    )
}