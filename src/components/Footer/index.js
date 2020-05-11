import React from "react";
import {Link} from "react-router-dom";
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
					<li><button className="button">ST</button></li>
					<li><button className="button">Pin</button></li>
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