import React from "react";
import { animated } from "react-spring";
import Checkbox from "../../../components/Checkbox";
import { useDispatch } from "react-redux";

export default React.memo(function({style, identifier, checked}){
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