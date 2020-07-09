import React from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import Footer from "./components/Footer";
import AddFooter from "./components/Footer/AddFooter";
import ClockFooter from "./components/Footer/ClockFooter";
import StopwatchFooter from "./components/Footer/StopwatchFooter";
import ToggledAlarmFooter from "./components/Footer/ToggledAlarmFooter";
import ToggledTimerFooter from "./components/Footer/ToggledTimerFooter";
import UntoggledAlarmFooter from "./components/Footer/UntoggledAlarmFooter";
import UntoggledTimerFooter from "./components/Footer/UntoggledTimerFooter";

export default function () {
  const location = useLocation();

  const {
    timer: { modal, toggleDeleteTimers },
    alarm,
  } = useSelector((state) => state);

  let fromScreen = location?.state?.fromScreen;

  if (!fromScreen) fromScreen = "/Timer";

  if (modal[0]) return null;

  switch (location.pathname) {
    case "/Add":
      return <AddFooter />;
    case "/Stopwatch":
      return <StopwatchFooter />;
    case "/Alarm":
      if (alarm.toggleDeleteList.isVisible) {
        return <ToggledAlarmFooter />;
      } else {
        return <UntoggledAlarmFooter />;
      }
    case "/Clock":
      return <ClockFooter />;
    case "/Timer":
      if (toggleDeleteTimers.isVisible) {
        return <ToggledTimerFooter />;
      }
      return <UntoggledTimerFooter />;
    default:
      return <Footer right />;
  }
}
