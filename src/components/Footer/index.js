import React from "react";
import {Link} from "react-router-dom";
import {AiFillPushpin} from "react-icons/ai";
import {BsListCheck} from "react-icons/bs";
import "./styles.css";

const Footer = ({modules, dispatch,right,children }) => {
	let position = "left";

	if (right){
		position = "flex-end";
	}

	if (!children){
		return (
			<footer>
				<ul style={{justifyContent: position}}>
					<li><Link  id="plus" to="/add"><button className="button"><p>+</p></button></Link></li>
					<li><BsListCheck className="button"/></li>
					<li><AiFillPushpin className="button"/></li>
					<li><button className="button">...</button></li>
				</ul>
			</footer>
		)
	}

	return(
		<footer>
			<ul style={{justifyContent: position}}>
				{children.map((value,index) => (
					<li key={index}>{value}</li>
				))}
			</ul>
		</footer>
	)
}

export default Footer;