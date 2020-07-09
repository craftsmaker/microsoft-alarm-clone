import React from "react";
import { FaPlay } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import Footer from "./index";
import { useDispatch } from "react-redux";
import { useLocation, useHistory } from "react-router-dom";

export default function AddFooter() {
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();
  let fromScreen = location?.state?.fromScreen;

  if (!fromScreen) fromScreen = "/Timer";

  return (
    <Footer right>
      <FaPlay
        className="button"
        size={12}
        onClick={() => {
          if (fromScreen === "/Timer") dispatch({ type: "ADD_TIMER" });
          if (fromScreen === "/Alarm") dispatch({ type: "ADD_ALARM" });
          history.push(fromScreen, { fromScreen: "/Add" });
        }}
      />
      <MdClose
        className="button"
        color="white"
        onClick={() => history.push(fromScreen)}
      />
      <button className="button">...</button>
    </Footer>
  );
}
