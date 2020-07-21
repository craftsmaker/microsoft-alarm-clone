import React from "react";
import {MdPlayArrow,MdRefresh} from "react-icons/md";
import {FiMinimize2} from "react-icons/fi";
import {useDispatch,useSelector} from "react-redux";
import {Container,FooterWrapper,Buttons} from "./styles";
import {changeModal,activateTimer,deactivateTimer,resetCounter} from "../../../store/timerActions";

export default function Modal({identifier}){
    const {activeClocksIDs,clocks} = useSelector(state => state.timer);
	let isRunning = false;  
    
    if (activeClocksIDs.findIndex(ID => ID === identifier) !== -1)
        isRunning = true;
    
    const timer = clocks[identifier];	

    return(
        <Container>
            <p>
                {timer.hours}:{timer.minutes}:{timer.seconds}
            </p>
            <Footer isRunning={isRunning} identifier={identifier}/>
        </Container>
    )
}


const Footer = React.memo(function ({isRunning,identifier}){
    const dispatch = useDispatch();

	const handleRefresh = () => {
		dispatch(resetCounter(identifier));
	}

	const handlePlay = () => {
		// console.log(isRunning);
		isRunning
		?dispatch(deactivateTimer(identifier))
		:dispatch(activateTimer(identifier))
	}
    
    return(
        <FooterWrapper>
                <h2 style={{alignItems: "flex-end"}}>Temporizador(7)</h2>
                <Buttons>
                    <li>
                        <MdRefresh
                            className="refreshButton"
                            onClick={handleRefresh}
                        />
                    </li>
                    <li>
                        <MdPlayArrow  
                            className="playButton"
                            onClick={handlePlay}
                        />
                    </li>
                    <li>
                        <FiMinimize2 
                            className="minimizeButton"
                            onClick={() => dispatch(changeModal([false,{}]))}
                        />
                    </li>
                </Buttons>
        </FooterWrapper>
    )
})