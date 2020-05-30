import React from "react";
import {Link,useLocation} from "react-router-dom";
import {AiFillPushpin} from "react-icons/ai";
import {BsListCheck} from "react-icons/bs";
import "./styles.css";

const Footer = ({right,children }) => {
	let position = "left";

	if (right){
		position = "flex-end";
	}

	const {pathname} = useLocation();
	
	if (!children){
		return (
			<footer style={{position: "absolute", bottom: "0"}}>
				<ul style={{justifyContent: position}}>
					<li><Link className="button" id="plus" role="button" to={{pathname:"/Add", state:{screen: pathname}}}><p style={{margin:0,padding:0}}>+</p></Link></li>
					<li><BsListCheck className="button"/></li>
					<li><AiFillPushpin className="button"/></li>
					<li><button className="button">...</button></li>
				</ul>
			</footer>
		)
	}

	return(
		<footer style={{position: "absolute", bottom: "0"}}>
			<ul style={{justifyContent: position}}>
				{
					children.lenght ? 
					children.map((value,index) => (<li key={index}>{value}</li>)):
					children
				}
			</ul>
		</footer>
	)
}

export default Footer;