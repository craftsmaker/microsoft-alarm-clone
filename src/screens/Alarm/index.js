import React from "react";
import { useSpring, animated } from "react-spring";
import { useSelector, useDispatch } from "react-redux";
import Notification from "../../components/Notification";
import { transformListOfStringfiedObjectsIntoArray } from "../../utils";
import Main from "../../components/Main";
import Alarm from "./AlarmItem";
import { Alarms } from "./styles";

export default function () {
  const { alarms, checkedAlarmIDs } = useSelector((state) => state.alarm);
  const dispatch = useDispatch();

  const [checkboxAnimation, setCheckboxAnimation] = useSpring(() => ({ left: "-38px" }));

  React.useEffect(() => {
    dispatch({
      type: "SET_TOGGLER",
      setter: (isVisible = false) => {
        isVisible
          ? (() => {
            setCheckboxAnimation({ left: "-38px" });
          })()
          : (() => {
            setCheckboxAnimation({ left: "0px" });
          })();
      },
    });
  }, [dispatch, setCheckboxAnimation]);

  let storedAlarms = localStorage.getItem("alarms");

  React.useEffect(() => {
    dispatch({
      type: "ADD_ALARMS",
      alarms: transformListOfStringfiedObjectsIntoArray(storedAlarms) || [],
    });
  }, [storedAlarms, dispatch]);

  if (!alarms) {
    return (
      <Main>
        <Notification />
      </Main>
    );
  }

  return (
    <Main style={{ paddingLeft: 0, paddingRight: 0 }}>
      <Notification />
      <Alarms style={checkboxAnimation}>
        {alarms.map((alarm, index) => (
          <Alarm
            key={index}
            alarm={alarm}
            identifier={index}
            checkedAlarmIDs={checkedAlarmIDs}
          />
        ))}
      </Alarms>
    </Main>
  );
}
