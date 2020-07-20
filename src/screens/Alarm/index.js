import React from "react";
import { useSpring } from "react-spring";
import { useSelector, useDispatch } from "react-redux";
import Notification from "../../components/Notification";
import { transformListOfStringfiedObjectsIntoArray } from "../../utils";
import Main from "../../components/Main";
import Alarm from "./AlarmItem";
import { Alarms } from "./styles";
import {setToggler,addAlarms} from "../../store/alarmActions";

export default function () {
  const { alarms, checkedAlarmIDs } = useSelector((state) => state.alarm);
  const dispatch = useDispatch();

  const [checkboxAnimation, setCheckboxAnimation] = useSpring(() => ({ left: "-38px" }));

  React.useEffect(() => {
    dispatch(setToggler(
      (isVisible = false) => {
        isVisible
          ? (() => {
            setCheckboxAnimation({ left: "-38px" });
          })()
          : (() => {
            setCheckboxAnimation({ left: "0px" });
          })();
      },
    ))
  }, [dispatch, setCheckboxAnimation]);

  let storedAlarms = localStorage.getItem("alarms");

  React.useEffect(() => {
    dispatch(addAlarms(transformListOfStringfiedObjectsIntoArray(storedAlarms) || []));
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
            hours={alarm.hours}
            minutes={alarm.minutes}
            identifier={index}
            checked={checkedAlarmIDs.indexOf(index) !== -1? true : false}
          />
        ))}
      </Alarms>
    </Main>
  );
}
