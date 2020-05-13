import React,{useState,useEffect} from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import {FaPlay} from "react-icons/fa";
import {IoMdResize,IoMdRefresh} from "react-icons/io";
import {useStore} from "react-redux";
import {AiFillFlag} from "react-icons/ai";

import "./styles.css";

export default function Clock(){
	const [time,setTime] = useState({hour:"00",minute:"00",second:"00",microsecond: "00"});
	const [isEnabled,setIsEnabled] = useState(false);
	const {getState} = useStore();
	
	const parseNumberAndString = (string) => {
		let newNumber = parseInt(string);
		newNumber++;
		let newString = "00";
		if (newNumber < 10){
			newString = "0" + String(newNumber);
		}
		else {
			newString = String(newNumber);
		}

		return [newNumber,newString];
	}

	useEffect(() => {
		if (isEnabled) {
			setTimeout(() => {
				const [intMicrosecond,stringMicrosecond] = parseNumberAndString(time.microsecond);

				if (intMicrosecond === 100){
					const [intSecond,stringSecond] = parseNumberAndString(time.second);

					if (intSecond === 60){
						const [intMinute,stringMinute] = parseNumberAndString(time.minute);

						setTime({...time, minute: stringMinute,second: "00", microsecond: "00"})
					}
					else{
						setTime({...time, second: stringSecond, microsecond: "00"})	
					}
					
				}
				else{
					setTime({...time, microsecond: stringMicrosecond})
				}
				
			}, 10)
		}
	}, [isEnabled,time])

	const handlePlay = () => {
		setIsEnabled(!isEnabled);
	}

	const stopPlay = () => {
		setTime({...time, hour: "00", second: "00", microsecond: "00"})
	}

	return(
		<div className="container">
			<Header/>
			<main>
				<div id="stopwatch-container">
					<div id="stopwatch-selection">
						<div id="stopwatch">
							<h1>{time.hour}:{time.minute}:{time.second}<p>,{time.microsecond}</p></h1>
							<div id="stopwatch-buttons">
								{
									isEnabled ?
									<AiFillFlag/> :
									<IoMdRefresh onClick={stopPlay}/>
								}
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