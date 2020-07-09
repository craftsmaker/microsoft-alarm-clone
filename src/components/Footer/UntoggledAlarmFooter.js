import React from "react";
import { BsListCheck } from "react-icons/bs";
import Footer from "./index";
import { useDispatch } from "react-redux";
import { useLocation, Link } from "react-router-dom";

export default function UntoggledAlarmFooter() {
  const dispatch = useDispatch();
  const location = useLocation();
  return (
    <Footer right>
      <Link
        id="plus"
        to={{
          pathname: "/Add",
          state: { fromScreen: location.pathname },
        }}
      >
        <button className="button">
          <p>+</p>
        </button>
      </Link>
      <BsListCheck
        className="button"
        onClick={() => dispatch({ type: "TOGGLE_DELETE_LIST" })}
      />
      <button className="button">...</button>
    </Footer>
  );
}
