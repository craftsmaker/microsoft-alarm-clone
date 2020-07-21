import React from "react";
import { useDispatch } from "react-redux";
import { MdPlayArrow, MdRefresh } from "react-icons/md";
import { IoMdResize } from "react-icons/io";
import {TimerWrapper,ButtonsWrapper} from "./styles";
import AnimatedCheckbox from './AnimatedCheckbox';
import {changeModal,activateTimer,deactivateTimer,resetCounter} from "../../../store/timerActions";

export default function ({ timer, identifier, style, checkedTimerIDs, isRunning }) {

  const checked = checkedTimerIDs.some((id) => identifier === id);

  return (
    <TimerWrapper>
      <AnimatedCheckbox style={style} identifier={identifier} checked={checked}/>
      <TimerView hours={timer.hours} minutes={timer.minutes} seconds={timer.seconds} isRunning={isRunning} identifier={identifier}/>
    </TimerWrapper>
  );
};

const TimerView = React.memo(function ({hours,minutes,seconds,isRunning,identifier}){
  return(
    <div style={{ display: "flex", flexDirection: "column" }}>
        <p>
          {hours}:{minutes}:{seconds}
        </p>
        <Buttons isRunning={isRunning} identifier={identifier}/>
      </div>
  )
})


const Buttons = React.memo(function ({isRunning,identifier}) {
  const dispatch = useDispatch();

  const handleRefresh = () => {
    dispatch(resetCounter(identifier));
  };

  const handlePlay = () => {
    isRunning
      ? dispatch(deactivateTimer(identifier))
      : dispatch(activateTimer(identifier));
  };
  
  return(
    <ButtonsWrapper>
      <ButtonRefresh onClick={handleRefresh} />
      <PlayButton onClick={handlePlay} />
      <ResizeButton onClick={() => dispatch(changeModal([true, {}, identifier]))}/>
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