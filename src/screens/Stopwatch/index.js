import React,{useState,useEffect} from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import {FaPlay} from "react-icons/fa";
import {IoMdResize,IoMdRefresh} from "react-icons/io";
import {useStore,useSelector,useDispatch} from "react-redux";
import {AiFillFlag} from "react-icons/ai";

import "./styles.css";

export default function Clock(){
	const [time,setTime] = useState({hour:"00",minute:"00",second:"00",microsecond: "00"});
	// const [isEnabled,setIsEnabled] = useState(false);
	// const {getState} = useStore();
	const dispatch = useDispatch();
	// const {stopWatch} = getState();
	const stopWatch = useSelector(state => state.stopWatch);

	console.log(stopWatch);
	
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
			console.log("UEF")
			setTimeout(() => {
				const [intMicrosecond,stringMicrosecond] = parseNumberAndString(stopWatch.microsecond);

				if (intMicrosecond === 100){
					const [intSecond,stringSecond] = parseNumberAndString(stopWatch.second);

					if (intSecond === 60){
						const [intMinute,stringMinute] = parseNumberAndString(stopWatch.minute);

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