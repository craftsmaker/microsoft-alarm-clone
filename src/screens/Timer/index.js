import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSprings } from "react-spring";
import Notification from "../../components/Notification";
import Modal from "./Modal";
import { transformListOfStringfiedObjectsIntoArray } from "../../utils";
import TimerItem from "./TimerItem";
import Main from "../../components/Main";
import {TimerList} from "./styles";

export default () => {
  const dispatch = useDispatch();
  let {
    timer: { clocks, activeClocksIDs, modal, checkedTimerIDs },
  } = useSelector((state) => state);
  const [toggleAnimations, setToggleAnimations] = useSprings(
    clocks?.length || 0,
    () => ({ position: "absolute", left: "-100px" })
  );

  useEffect(() => {
    dispatch({
      type: "SET_TIMER_TOGGLER",
      setter: (isVisible = false) => {
        isVisible
          ? (() => {
              setToggleAnimations(() => ({ left: "-100pax" }));
            })()
          : (() => {
              setToggleAnimations(() => ({ left: "5px" }));
            })();
      },
    });
  }, [dispatch, setToggleAnimations]);

  useEffect(() => {
    // Compare timer.clock with values in storage
    if (clocks?.length > 0 && activeClocksIDs?.length > 0) {
      setTimeout(() => {
        dispatch({ type: "DECREMENT_COUNTER" });
      }, 10);
    }
  });

  let storedTimers = localStorage.getItem("timers");

  useEffect(() => {
    let newClocks = transformListOfStringfiedObjectsIntoArray(storedTimers);
    if (!newClocks) newClocks = [];
    dispatch({ type: "ADD_CLOCKS", clocks: newClocks });
  }, [storedTimers, dispatch]);

  if (!modal[0]) {
    if (clocks?.length !== 0) {
      return (
        <Main>
          <Notification />
          <TimerList>
            {clocks?.map((timer, index) => (
                <TimerItem
                  key={index}
                  identifier={index}
                  checkedTimerIDs={checkedTimerIDs}
                  style={toggleAnimations[index]}
                  isRunning={activeClocksIDs.indexOf(index) !== -1? true : false}
                  timer={timer}
                />
              ))}
          </TimerList>
        </Main>
      );
    }

    return (
      <Main>
        <Notification />
        <div className="clocks" />
      </Main>
    );
  }

  return <Modal identifier={modal[2]} />;
};
