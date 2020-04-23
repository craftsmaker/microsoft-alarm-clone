import React from 'react';
import "./style.css";
import ClockMenu from "./ClockMenu";

function App() {
  return (
    <div className="container">
    	<Menu/>
    	<main>
      		<ClockMenu/>
    	</main>
    	<Footer/>
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
					<li><button className="button">Alarme</button></li>
					<li><button className="button">Temporizador</button></li>
					<li><button className="button">Relógio</button></li>
					<li><button className="button">Cronômetro</button></li>
				</ul>
			</div>
		</header>
	)
}

function Footer(){
	return (
		<footer>
			<ul>
				<li><button className="button" id="plus"><p>+</p></button></li>
				<li><button className="button">ST</button></li>
				<li><button className="button">Pin</button></li>
				<li><button className="button">...</button></li>
			</ul>
		</footer>
	)
}

export default App;
