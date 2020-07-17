import React from "react";
import { useSpring } from "react-spring";
import { Link } from "react-router-dom";
import { FaClock } from "react-icons/fa";
import { FcAlarmClock } from "react-icons/fc";
import { IoIosTimer } from "react-icons/io";
import { RiTimerLine } from "react-icons/ri";
import { useLocation } from "react-router-dom";
import {MenuWrapper,NavigationContent,AnimatedBarWrapper} from "./styles";

const Menu = () => {
  const location = useLocation();

  const screenIndex = ["/Alarm", "/Clock", "/Timer", "/Stopwatch"].indexOf(
    location.pathname
  );

  return (
    <MenuWrapper>
      <NavigationContent>
          <MenuSelection actualScreen={location.pathname}/>
          <AnimatedBar screenIndex={screenIndex}/>
      </NavigationContent>
    </MenuWrapper>
  );
};

const MenuSelection = React.memo(({actualScreen}) => {
  return(
    <>
      <ListLink
        to={{
          pathname: "/Alarm",
          state: { fromScreen: actualScreen, screenIndex: 0 },
        }}
      >
        <FaClock size={20} />
        Alarm
      </ListLink>
      <ListLink
        to={{
          pathname: "/Clock",
          state: {fromScreen: actualScreen, screenIndex: 1 },
        }}
      >
        <FcAlarmClock size={20} />
        Clock
      </ListLink>
      <ListLink
        to={{
          pathname: "/Timer",
          state: { fromScreen: actualScreen, screenIndex: 2 },
        }}
      >
        <IoIosTimer size={20} />
        Timer
      </ListLink>
      <ListLink
          to={{
            pathname: "/Stopwatch",
            state: { fromScreen: actualScreen,  screenIndex: 3 },
          }}>
          
          <RiTimerLine size={20} />
          Stopwatch
      </ListLink>
    </>
  )
})

const ListLink = ({children,to}) => {
  return(
    <li>
        <Link
          to={to}
          role="button"
          className="button"
        >
          {children}
        </Link>
      </li>
  )
}

const AnimatedBar = React.memo(({screenIndex}) => {
  let animatedChange = useSpring({ left: screenIndex, width: screenIndex });

  return(
    <AnimatedBarWrapper
      style={{
        width: animatedChange.width.interpolate({
          range: [0, 1, 2, 3],
          output: ["9.5%", "8%", "9.5%", "14%"],
        }),
        left: animatedChange.left.interpolate({
          range: [0, 1, 2, 3],
          output: ["8%", "34%", "58%", "81%"],
        }),
      }}
    />
  )
})

export default Menu;
