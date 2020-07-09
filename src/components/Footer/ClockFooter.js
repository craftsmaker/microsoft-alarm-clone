import React from "react";
import { MdClose } from "react-icons/md";
import { BsFillTrashFill } from "react-icons/bs";
import Footer from "./index";

export default function ClockFooter() {
  return (
    <Footer right>
      <BsFillTrashFill className="button" />
      <MdClose className="button" />
      <button className="button">...</button>
    </Footer>
  );
}
