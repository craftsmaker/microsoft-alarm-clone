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
				const [intMillisecondbyten,stringMillisecondbyten] = parseNumberAndString(stopWatch.millisecondbyten);

				if (intMillisecondbyten === 100){
					const [intSecond,stringSecond] = parseNumberAndString(stopWatch.second);

					if (intSecond === 60){
						const [,stringMinute] = parseNumberAndString(stopWatch.minute);

						// setTime({...time, minute: stringMinute,second: "00", Millisecondbyten: "00"})
						dispatch({type:"INCREMENT_MINUTE", minute:stringMinute})
					}
					else{
						// setTime({...time, second: stringSecond, Millisecondbyten: "00"})	
						dispatch({type:"INCREMENT_SECOND", second: stringSecond})
					}
					
				}
				else{
					// setTime({...time, Millisecondbyten: stringMillisecondbyten})
					dispatch({type:"INCREMENT_MILLISECONDBYTEN", millisecondbyten: stringMillisecondbyten})
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
	const reversedStopwatch =[...stopWatch.marks].reverse();
	return(
		<div className="container">
			<Header/>
			<main>
				<div id="stopwatch-container">
					<div id="stopwatch-selection">
						<div id="stopwatch">
							<h1>{stopWatch.hour}:{stopWatch.minute}:{stopWatch.second}<p style={{fontSize: "0.5em", display: "inline"}}>,{stopWatch.millisecondbyten}</p></h1>
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
							{reversedStopwatch.map((mark,index,array) => (
								<div key={array.length - index} id="stopwatch-stop">
									<h3>{array.length - index}</h3>
									<div>
										{console.log(array[index-1])}
										{
											reversedStopwatch[index-1]?
											<p>{reversedStopwatch[index-1].hour}:{reversedStopwatch[index-1].minute}:{reversedStopwatch[index-1].second} </p>:
											<p>00:00:11</p>

										}
										<p>{mark.hour}:{mark.minute}:{mark.second}<p style={{fontSize: "0.8em", display: "inline"}}>,{mark.millisecondbyten}</p></p>
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