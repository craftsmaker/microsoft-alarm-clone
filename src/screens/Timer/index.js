import React,{useEffect} from "react";
import {connect} from "react-redux";
import "./styles.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

function Timer({modules,dispatch}){
	useEffect(() => {
		if (localStorage.length > modules.clocks.length){
			function getDataFromLocalStorage(){
				return Object.keys(localStorage)
					.map((value,index) => {
						return {id: index + 1, timer: JSON.parse(localStorage[index + 1])}
					})
				
			}
			let clocks = getDataFromLocalStorage();
			dispatch({type: "ADD_CLOCKS", clocks: clocks})
		}
		// Compare modules.clock with values in storage
	})
	
	if (modules.clocks.length !== 0){
		return (
			<div className="container">
				<Header/>
					<main>
						<div className="clocks">
							<ul>
								{modules.clocks.map((clock) => 
									<li key={clock.id}><Clock  timer={clock.timer}/></li>
								)}
							</ul>
						</div>
					</main>
				<Footer/>
			</div>
		);
	}

	return (
		<div className="container">
			<Header/>
			<main>
				<div className="clocks">
					
				</div>
			</main>
			<Footer/>
		</div>
	);
}

function Clock(props){
	const timer = props.timer // object {hours,minutes,seconds}

	return(
		<div className="clock">
			<p>{timer.hours}:{timer.minutes}:{timer.seconds}</p>
			<ul>
				<li><i className="material-icons" style={{position:"relative",top:15}}>replay</i></li>
				<li><i className="material-icons" style={{fontSize: 60, color: "white", borderRadius: "100%"}}>play_circle_filled</i></li>
				<li><i className="material-icons" style={{position:"relative",top:15}}>fullscreen</i></li>
			</ul>
		</div>
	);
}


export default connect(state => ({
	modules: state
}))(Timer)