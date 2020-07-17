import React from "react";
import { animated, useSpring } from "react-spring";
import { Link } from "react-router-dom";
import { FaClock } from "react-icons/fa";
import { FcAlarmClock } from "react-icons/fc";
import { IoIosTimer } from "react-icons/io";
import { RiTimerLine } from "react-icons/ri";
import { useLocation } from "react-router-dom";
import {MenuWrapper,NavigationContent} from "./styles";

const Menu = () => {
  const location = useLocation();

  const screenIndex = ["/Alarm", "/Clock", "/Timer", "/Stopwatch"].indexOf(
    location.pathname
  );

  return (
    <MenuWrapper>
      <NavigationContent>
          <MenuSelection/>
          <AnimatedBar screenIndex={screenIndex}/>
      </NavigationContent>
    </MenuWrapper>
  );
};

const MenuSelection = React.memo(() => {
  return(
    <>
      <li>
        <Link
          to={{
            pathname: "/Alarm",
            state: {  screenIndex: 0 },
          }}
          role="button"
          className="button"
        >
          <FaClock size={20} />
          Alarm
        </Link>
      </li>
      <li>
        <Link
          to={{
            pathname: "/Clock",
            state: {  screenIndex: 1 },
          }}
          role="button"
          className="button"
        >
          <FcAlarmClock size={20} />
          Clock
        </Link>
      </li>
      <li>
        <Link
          to={{
            pathname: "/Timer",
            state: {  screenIndex: 2 },
          }}
          role="button"
          style={{ color: "white" }}
          className="button"
        >
          <IoIosTimer size={20} />
          Timer
        </Link>
      </li>
      <li>
        <Link
          to={{
            pathname: "/Stopwatch",
            state: {  screenIndex: 3 },
          }}
          role="button"
          className="button"
        >
          <RiTimerLine size={20} />
          Stopwatch
        </Link>
      </li>
    </>
  )
})


const AnimatedBar = React.memo(({screenIndex}) => {
  let animatedChange = useSpring({ left: screenIndex, width: screenIndex });

  return(
    <animated.div
      style={{
        position: "absolute",
        width: animatedChange.width.interpolate({
          range: [0, 1, 2, 3],
          output: ["9.5%", "8%", "9.5%", "14%"],
        }), // 15 -> 12 -> 10 -> 18
        height: "4px",
        backgroundColor: "#0078D7",
        bottom: "5px",
        left: animatedChange.left.interpolate({
          range: [0, 1, 2, 3],
          output: ["8%", "34%", "58%", "81%"],
        }), // 5 - > 30 -> 55 -> 78
      }}
    />
  )
})

export default Menu;
