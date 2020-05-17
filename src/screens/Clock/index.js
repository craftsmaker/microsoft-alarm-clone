import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import {Link,useLocation} from "react-router-dom";
import {BsListCheck} from "react-icons/bs";

export default function Clock(){
	return(
		<div className="container">
			<Header/>
			<main>
				<p>Clock Screen</p>
			</main>
			<Footer right>
				<button id="plus" className="button"><p>+</p></button>
				<BsListCheck className="button"/>
				<button className="button">...</button>
			</Footer>
		</div>
	)
}