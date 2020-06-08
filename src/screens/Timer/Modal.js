import React from "react";
import {MdPlayArrow,MdRefresh} from "react-icons/md";
import {FiMinimize2} from "react-icons/fi";
import {useDispatch} from "react-redux";
import styles from "./modal.module.css";

export default function Modal({timer}){
    const dispatch = useDispatch();
    return(
        <main className={styles.main}>
            <p className={styles.mainParagraph}>
                {timer.hours}:{timer.minutes}:{timer.seconds}
            </p>
            <div className={styles.mainClock}>
                <h2 style={{alignItems: "flex-end"}}>Temporizador(7)</h2>
                <ul  style={{display: "flex",alignItems: "flex-start",justifyContent: "center",paddingTop: "10px"}}>
                    <li>
                        <MdRefresh className={styles.clockButton} style={{
                                position:"relative",
                                fontSize: "25px",
                                top:0,
                                padding: 20
                            }}
                        />
                    </li>
                    <li>
                        <MdPlayArrow  className={styles.clockButton} style={{
                                color: "white",
                                borderRadius: "100%",
                                padding: 20,
                                margin: "0 15px",
                                border: "1px solid gray"
                            }}
                        />
                    </li>
                    <li>
                        <FiMinimize2 
                            className={styles.clockButton}
                            style={{
                                fontSize: "25px",
                                position:"relative",
                                top:0,
                                padding: 20
                            }}
                            onClick={() => dispatch({type: "CHANGE_MODAL", modal: [false,{}]})}
                        />
                    </li>
                </ul>
            </div>
        </main>
    )
}