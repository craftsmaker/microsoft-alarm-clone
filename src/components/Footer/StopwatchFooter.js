import React from "react";
import { FaShareSquare } from "react-icons/fa";
import { AiFillPushpin } from "react-icons/ai";
import Footer from "./index";

export default function StopwatchFooter() {
  return (
    <Footer right>
      <AiFillPushpin className="button" color="white" />
      <FaShareSquare className="button" color="white" />
      <button className="button">...</button>
    </Footer>
  );
}
