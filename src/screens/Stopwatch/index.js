import React,{useEffect} from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import {FaPlay} from "react-icons/fa";
import {IoMdResize,IoMdRefresh} from "react-icons/io";
import {useSelector,useDispatch} from "react-redux";
import {AiFillFlag} from "react-icons/ai";

import "./styles.css";

export default function Clock(){
	const dispatch = useDispatch();
	const stopWatch = useSelector(state => state.stopWatch);	
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
		if (stopWatch.isActivated) {
			setTimeout(() => {
				const [intMicrosecond,stringMicrosecond] = parseNumberAndString(stopWatch.microsecond);

				if (intMicrosecond === 100){
					const [intSecond,stringSecond] = parseNumberAndString(stopWatch.second);

					if (intSecond === 60){
						const [,stringMinute] = parseNumberAndString(stopWatch.minute);

						// setTime({...time, minute: stringMinute,second: "00", microsecond: "00"})
						dispatch({type:"INCREMENT_MINUTE", minute:stringMinute})
					}
					else{
						// setTime({...time, second: stringSecond, microsecond: "00"})	
						dispatch({type:"INCREMENT_SECOND", second: stringSecond})
					}
					
				}
				else{
					// setTime({...time, microsecond: stringMicrosecond})
					dispatch({type:"INCREMENT_MICROSECOND", microsecond: stringMicrosecond})
				}
				
			}, 10)
		}
	})

	const handleMark = () => {
		dispatch({type: "ADD_MARK"})
	}

	const handlePlay = () => {
		stopWatch.isActivated ? dispatch({type: "DEACTIVATE"}) : dispatch({type: "ACTIVATE"})
		
	}

	const stopPlay = () => {
		dispatch({type: "RESET_STOPWATCH"})
	}
	
	return(
		<div className="container">
			<Header/>
			<main>
				<div id="stopwatch-container">
					<div id="stopwatch-selection">
						<div id="stopwatch">
							<h1>{stopWatch.hour}:{stopWatch.minute}:{stopWatch.second}<p>,{stopWatch.microsecond}</p></h1>
							<div id="stopwatch-buttons">
								{
									stopWatch.isActivated ?
									<AiFillFlag onClick={handleMark}/> :
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
							{[...stopWatch.marks].reverse().map((mark,index,array) => (
								<div key={array.length - index} id="stopwatch-stop">
									<h3>{array.length - index}</h3>
									<div>
										<p>00:00:01</p>
										<p>{mark.hour}:{mark.minute}:{mark.second},{mark.microsecond}</p>
									</div>
								</div>			
							))}
							
						</div>
					</div>
				</div>
			</main>
			<Footer right/>
		</div>
	)
}