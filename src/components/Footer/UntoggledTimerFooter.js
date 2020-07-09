import React from "react";
import { AiFillPushpin } from "react-icons/ai";
import { BsListCheck } from "react-icons/bs";
import Footer from "./index";
import { useDispatch } from "react-redux";
import { useLocation, Link } from "react-router-dom";

export default function UntoggledTimerFooter() {
  const dispatch = useDispatch();
  const location = useLocation();
  return (
    <Footer right>
      <Link
        className="button"
        id="plus"
        role="button"
        to={{
          pathname: "/Add",
          state: { fromScreen: location.pathname },
        }}
      >
        <p
          style={{
            margin: 0,
            padding: 0,
            position: "absolute",
            top: "20%",
          }}
        >
          +
        </p>
      </Link>
      <BsListCheck
        className="button"
        onClick={() => dispatch({ type: "TOGGLE_TIMER_DELETE_LIST" })}
      />
      <AiFillPushpin className="button" />
      <button className="button">...</button>
    </Footer>
  );
}
