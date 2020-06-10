import React from "react";
import {useSelector} from "react-redux";
import {useLocation} from "react-router-dom";
import Header from "./components/Header";
import WindowMenu from "./components/WindowMenu";

export default function(){
	const {timer: {modal}} = useSelector(state => state);
	const location = useLocation();
	if (location.pathname === "/Add"){
		return(
			<header>
				<WindowMenu/>
			</header>
		)
	}else if(modal[0]){
		return (
			<header style={{backgroundColor: "unset"}}>
				<WindowMenu/>
			</header>
		);
	} else{
		return(
			<Header/>
		)
	}
}