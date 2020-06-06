import React,{useEffect, memo} from "react";
import {FaPlay} from "react-icons/fa";
import {IoMdResize,IoMdRefresh} from "react-icons/io";
import {useSelector,useDispatch} from "react-redux";
import {AiFillFlag} from "react-icons/ai";

import "./styles.css";

export default function StopWatchView(){
	const stopWatch = useSelector(state => state.stopWatch);	
	return(
		<main id="stopwatch-container">
			<div id="stopwatch-selection">
				<StopWatchControl/>
				<StopsList marks={stopWatch.marks}/>
			</div>
		</main>
	)
}
function StopWatchControl(){
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
	

	return(
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
	)
}

const StopsList = memo( ({marks}) =>{
	const reversedStopwatch =[[...marks].reverse(),[]];
	console.log(reversedStopwatch)
	// make the math (content: object)
	reversedStopwatch[0].forEach((content,index,array) => {
		let hour = parseInt(content.hour);
		let minute = parseInt(content.minute);
		let second = parseInt(content.second);
		let millisecondbyten = parseInt(content.millisecondbyten);
		let next = array[index + 1];
		
		if (next){
			millisecondbyten -= next.millisecondbyten;
			if (millisecondbyten < 0){
				--second;
				millisecondbyten = 100 + millisecondbyten;
			}

			second -= next.second;

			if(second < 0){
				--minute;
				second = 60 + second;
			}

			minute -= next.minute;
			
			if(minute < 0){
				--hour;
				minute = 60 + minute;
			}
			
			hour -= next.hour;


		}

		reversedStopwatch[1].push( {
			hour: String(hour).padStart(2,"0"),
			minute: String(minute).padStart(2,"0"),
			second: String(second).padStart(2,"0"),
			millisecondbyten: String(millisecondbyten).padStart(2,"0")
		});
	})

	return(
		<div id="stopwatch-stops">
			<div id="stopwatch-stops-header">
				<h1>Voltas</h1>
				<h2>Parciais</h2>
			</div>
			{reversedStopwatch[0].map((mark,index,array) => (

				<div key={array.length - index} id="stopwatch-stop">
					<h3>{array.length - index}</h3>
					<div>
						<p>00:00:{reversedStopwatch[1][index].second},<span style={{display: "inline"}}>{reversedStopwatch[1][index].millisecondbyten}</span></p>
						<p>{mark.hour}:{mark.minute}:{mark.second}<span style={{fontSize: "0.8em", display: "inline"}}>,{mark.millisecondbyten}</span></p>
					</div>
				</div>			
			))}						
		</div>
	)
})