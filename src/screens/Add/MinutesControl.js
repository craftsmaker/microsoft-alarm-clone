import React from "react";
import {useDispatch,useSelector} from "react-redux";
import {RiArrowUpSLine,RiArrowDownSLine} from "react-icons/ri";

export default React.forwardRef(({location},ref) => {

	const dispatch = useDispatch();
	// everytime a new value is selected, the redux get it
	// the 'play' button will only make it official
	const store = useSelector(state => state);

	const type = location === "/Timer" ? "SET_PLACEHOLDER" : "SET_ALARM_PLACEHOLDER";

	const reducer = location === "/Timer" ? store.timer.placeholderTimer : store.alarm.placeholderAlarm;
	
	function handleMinutes(value){
		const {hours,seconds} = reducer;

		if (value >= 0 && value <= 60)
			dispatch({type,hours,minutes: String(value).padStart(2,"0"),seconds});
		else if(value === 61)
			dispatch({type,hours,minutes: String(0).padStart(2,"0"),seconds});
		else
			dispatch({type,hours,minutes:  String(60),seconds});;
	}


	function pointerOver(e){
		
		let minutesArrowDown = document.getElementById("minutesArrowDown");
		let minutesArrowUp = document.getElementById("minutesArrowUp");

		let newStyle = {
			backgroundColor: "rgba(40,40,40,1)",
			color: "rgba(255,255,255,1)",
		}

		if(e.target.id){
			Object.assign(minutesArrowDown.style, newStyle);
			Object.assign(e.target.style, newStyle);	
		}else{
			Object.assign(minutesArrowUp.style, newStyle);
			Object.assign(e.target.style, newStyle);	
		}
	}

	function pointerOut(e){
		if (!(e.clientX < 450 || e.clientX > 460))
			return;

		
		let minutesArrowDown = document.getElementById("minutesArrowDown");
		let minutesArrowUp = document.getElementById("minutesArrowUp");

		let newStyle = {
			backgroundColor: "rgba(30,30,30,0)",
			color: "rgba(255,255,255,0)",
		}

		if(e.target.id){
			Object.assign(minutesArrowDown.style, newStyle);
			Object.assign(e.target.style, newStyle);	
		}else{
			Object.assign(minutesArrowUp.style, newStyle);
			Object.assign(e.target.style, newStyle);	
		}
	}
	
	let i = 0, minutesList = [];
	const exibited = 10;

	
	const intMinutes = parseInt(reducer.minutes);

	for (i = intMinutes - exibited; i < intMinutes + exibited; i++){
		if (i <= 60 && i >= 0)
			minutesList.push(i)
		else if(i < 0)
			minutesList.push(61+i)
		else
			minutesList.push(i-60)
		if (i === 60)
			minutesList.push(0);
    }



	return(
		<div>
			<RiArrowUpSLine id="minutesArrowUp" className="arrowUp" onClick={() => handleMinutes(intMinutes-1)} onPointerOver={pointerOver} onPointerOut={pointerOut}/>
			<div>
				{minutesList.map(value =>{
					const stringValue = String(value);
					if (stringValue=== String(intMinutes)){
						return <p ref={ref} key={"1" + stringValue} id={"1"+stringValue} >{stringValue}</p>
					}
					return (<p key={"1" + stringValue} id={"1"+stringValue}>{stringValue}</p>)
				})}
			</div>
			<div id="minutesMiddleBar" className="middle-bar" onClick={() => console.log("HELLO")}/>
			<RiArrowDownSLine id="minutesArrowDown" className="arrowDown" onClick={() => handleMinutes(intMinutes+1)} onPointerOver={pointerOver} onPointerOut={pointerOut}	/>
		</div>
	)
})