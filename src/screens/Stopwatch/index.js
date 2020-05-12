import React,{useState} from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import {FaPlay} from "react-icons/fa";
import {IoMdResize,IoMdRefresh} from "react-icons/io";
import {AiFillFlag} from "react-icons/ai";

import "./styles.css";

export default function Clock(){
	const [time,setTime] = useState({hour:0,minute:0,second:"00"});

	const handlePlay = (e) => {
		console.log(e)
	}

	return(
		<div className="container">
			<Header/>
			<main>
				<div id="stopwatch-container">
					<div id="stopwatch-selection">
						<div id="stopwatch">
							<h1>{time.hour}:{time.minute}:{time.second}</h1>
							<div id="stopwatch-buttons">
								<IoMdRefresh/>
								<FaPlay size={30} onClick={handlePlay}/>
								<IoMdResize/>
							</div>
						</div>
						<div id="stopwatch-stops">
							<div id="stopwatch-stops-header">
								<h1>Voltas</h1>
								<h2>Parciais</h2>
							</div>
							<div id="stopwatch-stop">
								<h3>3</h3>
								<div>
									<p>00:00:01</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</main>
			<Footer right/>
		</div>
	)
}