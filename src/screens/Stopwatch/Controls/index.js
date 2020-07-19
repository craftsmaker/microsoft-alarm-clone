import React,{useEffect} from "react";
import {FaPlay} from "react-icons/fa";
import {IoMdResize,IoMdRefresh} from "react-icons/io";
import {useSelector,useDispatch} from "react-redux";
import {AiFillFlag} from "react-icons/ai";
import {ButtonsWrapper,Stopwatch} from "./styles";

export default function Controls(){
	const stopWatch = useSelector(state => state.stopWatch);
	const dispatch = useDispatch();

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

	return(
		<Stopwatch>
			<h1>{stopWatch.hour}:{stopWatch.minute}:{stopWatch.second}<p style={{fontSize: "0.5em", display: "inline"}}>,{stopWatch.millisecondbyten}</p></h1>
			<Buttons isActivated={stopWatch.isActivated}/>
		</Stopwatch>
	)
}


const Buttons = React.memo(({isActivated}) => {
	const dispatch = useDispatch();
	
	const handleMark = () => {
		dispatch({type: "ADD_MARK"})
	}

	const handlePlay = () => {
		isActivated ? dispatch({type: "DEACTIVATE"}) : dispatch({type: "ACTIVATE"})
		
	}

	const stopPlay = () => {
		dispatch({type: "RESET_STOPWATCH"})
	}

	return(
		<ButtonsWrapper>
			{	
				isActivated ?
				<AiFillFlag onClick={handleMark}/> :
				<IoMdRefresh onClick={stopPlay}/>
			}
			<FaPlay size={30} onClick={handlePlay}/>
			<IoMdResize/>
		</ButtonsWrapper>
	)
})