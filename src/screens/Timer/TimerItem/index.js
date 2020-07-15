import React from "react";
import { animated } from "react-spring";
import Checkbox from "../../../components/Checkbox";
import { useDispatch } from "react-redux";
import { MdPlayArrow, MdRefresh } from "react-icons/md";
import { IoMdResize } from "react-icons/io";
import {TimerWrapper,ButtonsWrapper} from "./styles";

export default function Timer({ timer, identifier, style, checkedTimerIDs, isRunning }) {

  console.log("TimerChild")

  const checked = checkedTimerIDs.some((id) => identifier === id);

  return (
    <TimerWrapper>
      <AnimatedCheckbox style={style} identifier={identifier} checked={checked}/>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <p>
          {timer.hours}:{timer.minutes}:{timer.seconds}
        </p>
        <Buttons isRunning={isRunning} identifier={identifier}/>
      </div>
    </TimerWrapper>
  );
};

const AnimatedCheckbox = React.memo(function({style, identifier, checked}){
  console.log("THIS IS ACB")
  const dispatch = useDispatch();
  return(
      <animated.div style={style}>
        <Checkbox
          onClick={(e) => dispatch({ type: "TOGGLE_TIMER_CHECK", identifier })}
          checked={checked}
        />
      </animated.div>
  )
})


const Buttons = React.memo(function ({isRunning,identifier}) {
  const dispatch = useDispatch();

  const handleRefresh = () => {
    dispatch({ type: "RESET_COUNTER", identifier });
  };

  const handlePlay = () => {
    isRunning
      ? dispatch({ type: "DEACTIVATE_TIMER", identifier })
      : dispatch({ type: "ACTIVATE_TIMER", identifier });
  };
  
  return(
    <ButtonsWrapper>
      <ButtonRefresh onClick={handleRefresh} />
      <PlayButton onClick={handlePlay} />
      <ResizeButton onClick={() => dispatch({type: "CHANGE_MODAL",modal: [true, {}, identifier]})}/>
    </ButtonsWrapper>
  )
})

const ButtonRefresh = React.memo(({ onClick }) => {
  return (
    <li className="buttonWrapper">
      <MdRefresh className="refreshButton" onClick={onClick} />
    </li>
  );
});

const PlayButton = React.memo(({ onClick }) => {
  return (
    <li className="buttonWrapper">
      <MdPlayArrow className="playButton" onClick={onClick} />
    </li>
  );
});

const ResizeButton = React.memo(({ onClick }) => {
  return (
    <li className="buttonWrapper">
      <IoMdResize className="resizeButton" onClick={onClick} />
    </li>
  );
})