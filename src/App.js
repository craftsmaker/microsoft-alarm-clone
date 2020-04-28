import React,{useState} from 'react';
import "./style.css";
import ClockMenu from "./ClockMenu";

function App() {
  const [timer,setTimer] = useState({});
  console.log("timer:",timer)
 
  return (
    <div className="container">
    	<Menu/>
    	<main>
      		<ClockMenu value={timer} onChange={setTimer}/>
    	</main>
    	<Footer onChange={setTimer}/>
    </div>
  );
}

function Menu(){
	return (
		<header>
			<div id="window-menu">
				<p>Alarmes e Relógio</p>
				<ul>
					<li><button className="button"><p>__</p></button></li>
					<li><button className="button">max</button></li>
					<li><button className="button" id="close">X</button></li>
				</ul>
			</div>
			<div id="alarm-menu">
				<ul>
					<li><button className="button"><i className="fas fa-clock" style={{color: "white"}}></i> Alarme</button></li>
					<li><button className="button"><i className="material-icons" style={{fontSize: 18, position: "absolute", top: 13, left: "0px"}}>alarm</i>Relógio</button></li>
					<li><button style={{color: "white"}} className="button">Temporizador</button></li>
					<li><button className="button">Cronômetro</button></li>
				</ul>
			</div>
		</header>
	)
}

function Footer(props){
	const setTimer = props.onChange;
	return (
		<footer>
			<ul>
				<li><button className="button" id="plus" onClick={() => setTimer({type:"handleClick"})}><p>+</p></button></li>
				<li><button className="button">ST</button></li>
				<li><button className="button">Pin</button></li>
				<li><button className="button">...</button></li>
			</ul>
		</footer>
	)
}

export default App;
