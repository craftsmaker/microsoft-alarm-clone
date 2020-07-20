import React from "react";
import {useDispatch,useSelector} from "react-redux";
import {RiArrowUpSLine,RiArrowDownSLine} from "react-icons/ri";

export default React.forwardRef(({location},ref) => {
	const dispatch = useDispatch();
	const store = useSelector(state => state);
	
	const type = location === "/Timer" ? "SET_PLACEHOLDER" : "SET_ALARM_PLACEHOLDER";
	const reducer = location === "/Timer" ? store.timer.placeholderTimer : store.alarm.placeholderAlarm;
	
	const intHours = parseInt(reducer.hours);
	let i = 0,hoursList = [];
	const exibited = 10;

	function handleHours(value){
		const {minutes,seconds} = reducer;

		if (value >= 0 && value <= 60)
			dispatch({type,hours: String(value).padStart(2,"0"),minutes,seconds});
		else if(value === 61)
			dispatch({type,hours: String(0).padStart(2,"0"),minutes,seconds});
		else
			dispatch({type,hours: String(60),minutes,seconds});;
	}

	for (i = intHours - exibited; i < intHours + exibited; i++){
		if (i <= 60 && i >= 0)
			hoursList.push(i);
		else if(i < 0)
			hoursList.push(61+i);
		else
			hoursList.push(i-60);
		if (i === 60)
			hoursList.push(0);
    }

	function pointerOver(e){
				
		let hoursArrowUp = document.getElementById("hoursArrowUp");
		let hoursArrowDown = document.getElementById("hoursArrowDown");

		let newStyle = {
			backgroundColor: "rgba(40,40,40,1)",
			color: "rgba(255,255,255,1)",
		}
		
		if (e.target.id === "hoursArrowUp"){
			Object.assign(hoursArrowDown.style,newStyle)
			Object.assign(e.target.style,newStyle);	
		}else{
			Object.assign(hoursArrowUp.style,newStyle)
			Object.assign(e.target.style,newStyle);	
		}
	}

	function pointerOut(e){
				
		let hoursArrowUp = document.getElementById("hoursArrowUp");
		let hoursArrowDown = document.getElementById("hoursArrowDown");

		let newStyle = {
			backgroundColor: "rgba(30,30,30,0)",
			color: "rgba(255,255,255,0)",
		}
		
		if (e.target.id === "hoursArrowUp"){
			Object.assign(hoursArrowDown.style,newStyle)
			Object.assign(e.target.style,newStyle);	
		}else{
			Object.assign(hoursArrowUp.style,newStyle)
			Object.assign(e.target.style,newStyle);	
		}
	}

	return(
		<div>
			<RiArrowUpSLine id="hoursArrowUp" className="arrowUp" onClick={() => handleHours(intHours-1)} onPointerOver={pointerOver} onPointerOut={pointerOut}/>
			<div>
				{hoursList.map(value => {
					const stringValue = String(value);
					if (stringValue === String(intHours)){
						return <p ref={ref} key={"0"+stringValue} id={"0"+stringValue}>{stringValue}</p>
					}
					return <p key={"0"+stringValue} id={"0"+stringValue}>{stringValue}</p>
				})}
			</div>
			<div className="middle-bar"/>
			<RiArrowDownSLine id="hoursArrowDown" className="arrowDown" onClick={() => handleHours(intHours+1)} onPointerOver={pointerOver} onPointerOut={pointerOut}/>
		</div>
	)
})