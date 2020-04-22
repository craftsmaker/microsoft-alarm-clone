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
					<li>B1</li>
					<li>B2</li>
					<li>B3</li>
				</ul>
			</div>
			<div>
				<ul>
					<li>B1</li>
					<li>B2</li>
					<li>B3</li>
					<li>B4</li>
				</ul>
			</div>
		</header>
	)
}

function Footer(){
	return (
		<footer>
			<ul>
				<li><button>B1</button></li>
				<li><button>B2</button></li>
				<li><button>B3</button></li>
				<li><button>B4</button></li>
			</ul>
		</footer>
	)
}

export default App;
