import React from 'react';
import "./style.css";

function App() {
  return (
    <div className="container">
    	<Menu/>
    	<main>
      		<p>Menu</p>
    	</main>
    	<Footer/>
    </div>
  );
}

function Menu(){
	return (
		<header>
			<div>
				<p>Alarmes e Relógio</p>
				<ul>
					<li><button className="button">B1</button></li>
					<li><button className="button">B2</button></li>
					<li><button className="button">B3</button></li>
				</ul>
			</div>
			<div>
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
				<li><button className="button">+</button></li>
				<li><button className="button">ST</button></li>
				<li><button className="button">Pin</button></li>
				<li><button className="button">...</button></li>
			</ul>
		</footer>
	)
}

export default App;
