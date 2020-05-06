import React,{useState} from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import {Link,useHistory} from "react-router-dom";
import {connect} from "react-redux";
import "./styles.css";

function Add({modules,dispatch}){
	const [hours,setHours] = useState("");
	const [minutes,setMinutes] = useState("");
	const [seconds,setSeconds] = useState("");

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
				<div id="time-container">
					<h1>NEW TIMER</h1>
					<form onSubmit={handleSubmit}>
						<input type="text" placeholder="Hora" value={hours} onChange={e => setHours(e.target.value)}/>
						<input type="text" placeholder="Minuto" value={minutes} onChange={e => setMinutes(e.target.value)}/>
						<input type="text" placeholder="Seconds" value={seconds} onChange={e =>setSeconds(e.target.value)}/>
						<button type="submit">Submit</button>
					</form>
					<Link to="/">Back</Link>
				</div>
				<div id="name-container">
					<h2>TIMER NAME</h2>
					<h1>Timer (x)</h1>
				</div>
			</main>
			<Footer/>
		</div>
	)
}

export default connect(state => ({
	modules: state
}))(Add)