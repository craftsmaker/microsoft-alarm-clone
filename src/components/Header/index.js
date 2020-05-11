import React from "react";
import WindowMenu from "../WindowMenu";
import Menu from "../Menu";
import "./styles.css";

const Header = () => {
	return (
		<header>
			<WindowMenu/>
			<Menu/>
		</header>
	)
}

export default Header;