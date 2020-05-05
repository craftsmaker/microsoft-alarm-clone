import React,{useState} from "react";
import Menu from "./Menu";
import Footer from "./Footer";
import {Link,useHistory} from "react-router-dom";
import {connect} from "react-redux";

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
			<Menu/>
			<main>
				<form onSubmit={handleSubmit}>
					<input type="text" placeholder="Hora" value={hours} onChange={e => setHours(e.target.value)}/>
					<input type="text" placeholder="Minuto" value={minutes} onChange={e => setMinutes(e.target.value)}/>
					<input type="text" placeholder="Seconds" value={seconds} onChange={e =>setSeconds(e.target.value)}/>
					<button type="submit">Submit</button>
				</form>
				<Link to="/">Back</Link>
			</main>
			<Footer/>
		</div>
	)
}

export default connect(state=>({
	modules: state
}))(Add)