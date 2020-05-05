import React from "react";
import {Link} from "react-router-dom";

import {connect} from "react-redux";

function Footer({modules, dispatch }){
	function addTimer() {
		dispatch({
			type:"ADD_TIMER",
			timer: {
				hours:"10",
				minutes:"20",
				seconds:"40"
			}
		})
	}

	return (
		<footer>
			<ul>
				<li><button className="button" id="plus" onClick={addTimer}><p>+</p></button></li>
				<li><Link className="button" to="/add"><p>Add</p></Link></li>
				<li><button className="button">ST</button></li>
				<li><button className="button">Pin</button></li>
				<li><button className="button">...</button></li>
			</ul>
		</footer>
	)
}

export default connect(state => ({
	modules: state,
}))(Footer);