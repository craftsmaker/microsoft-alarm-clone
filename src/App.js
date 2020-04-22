import React from 'react';
import { Link } from "react-router-dom"
import logo from './logo.svg';

function App() {
  return (
    <div className="App">
      <p>Alarm APP made from zero</p>
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
