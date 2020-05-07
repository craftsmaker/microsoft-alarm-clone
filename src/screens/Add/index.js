import React,{useState} from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import {Link,useHistory} from "react-router-dom";
import {connect} from "react-redux";
import {RiArrowUpSLine,RiArrowDownSLine} from "react-icons/ri";
import "./styles.css";

function Add({modules,dispatch}){
	const [hours,setHours] = useState("");
	const [minutes,setMinutes] = useState("");
	const [seconds,setSeconds] = useState("");


	let i = 0,TIME = [];
	for (; i <= 60; i++){
		TIME.push(i);
	}

	const history = useHistory();

	function handleSubmit(e){
		e.preventDefault();
		console.log("Submited");
		
		
		dispatch({type:"ADD_TIMER", timer: {hours,seconds,minutes}});
		history.push(`/`);
	}

	return (
		<div className="container">
			<Header/>
			<main id="add-container">
				<div id="notifications-container">
					<p>
						The notifications will only show up if the computer is active.
						<a href="#">More info</a>
					</p>
				</div>
				<div id="timer-container">
					<h1>NEW TIMER</h1>
					<div>
						<form onSubmit={handleSubmit}>
							<div>
								<RiArrowUpSLine className="arrowUp"/>
								<div>
									{TIME.map((value,index) => (
										<p key={index}>{value}</p>
									))}
								</div>
								<RiArrowDownSLine className="arrowDown"/>
							</div>
							<div>
								<RiArrowUpSLine className="arrowUp"/>
								<div>
									{TIME.map((value,index) => (
										<p key={index}>{value}</p>
									))}
								</div>
								<RiArrowDownSLine className="arrowDown"/>
							</div>
							<div>
								<RiArrowUpSLine className="arrowUp"/>
								<div>
									{TIME.map((value,index) => (
										<p key={index}>{value}</p>
									))}
								</div>
								<RiArrowDownSLine className="arrowDown"/>
							</div>
						</form>
					</div>
					<Link to="/">Back</Link>
				</div>
				<div id="name-container">
					<h2>TIMER NAME</h2>
					<h1>Timer (x)</h1>
				</div>
				<div style={{height: "180px"}}/>
			</main>
			<Footer/>
		</div>
	)
}

export default connect(state => ({
	modules: state
}))(Add)