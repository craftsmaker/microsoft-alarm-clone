import React from "react";
import WindowMenu from "../WindowMenu";
import Menu from "../Menu";
import {HeaderWrapper} from "./styles";

function Header({children}){
  if (children){
    return(
      <HeaderWrapper>
        {children}
      </HeaderWrapper>
    )
  }
  return (
    <HeaderWrapper>
      <WindowMenu />
      <Menu />
    </HeaderWrapper>
  );
};

export default Header;
