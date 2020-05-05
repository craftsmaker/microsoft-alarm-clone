import React from "react";
import {Link} from "react-router-dom";

const Footer = ({modules, dispatch }) => {
	return (
		<footer>
			<ul>
				<li><Link  id="plus" to="/add"><button className="button"><p>+</p></button></Link></li>
				<li><button className="button">ST</button></li>
				<li><button className="button">Pin</button></li>
				<li><button className="button">...</button></li>
			</ul>
		</footer>
	)
}

export default Footer;