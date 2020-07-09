import React from "react";
import WindowMenu from "../WindowMenu";
import Menu from "../Menu";
import "./styles.css";

const Header = React.memo(() => {
  return (
    <header>
      <WindowMenu />
      <Menu />
    </header>
  );
});

export default Header;
