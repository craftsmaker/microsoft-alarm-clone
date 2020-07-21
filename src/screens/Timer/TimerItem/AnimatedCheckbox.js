import React from "react";
import { animated } from "react-spring";
import Checkbox from "../../../components/Checkbox";
import { useDispatch } from "react-redux";
import {toggleTimerCheck} from "../../../store/timerActions";

export default React.memo(function({style, identifier, checked}){
    const dispatch = useDispatch();
    return(
        <animated.div style={style}>
          <Checkbox
            onClick={(e) => dispatch(toggleTimerCheck(identifier))}
            checked={checked}
          />
        </animated.div>
    )
  })