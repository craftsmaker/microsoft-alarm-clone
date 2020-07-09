import React from "react";
import { MdClose } from "react-icons/md";
import { BsFillTrashFill } from "react-icons/bs";
import Footer from "./index";
import { useDispatch } from "react-redux";

export default function ToggledTimerFooter() {
  const dispatch = useDispatch();

  return (
    <Footer right>
      <BsFillTrashFill
        className="button"
        onClick={() => dispatch({ type: "DELETE_SELECTED_TIMERS" })}
      />
      <MdClose
        className="button"
        onClick={() => dispatch({ type: "TOGGLE_TIMER_DELETE_LIST" })}
      />
      <button className="button">...</button>
    </Footer>
  );
}
