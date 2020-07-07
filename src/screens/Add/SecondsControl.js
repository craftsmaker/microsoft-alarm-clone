import React from "react";
import {useDispatch,useSelector} from "react-redux";
import {RiArrowUpSLine,RiArrowDownSLine} from "react-icons/ri";


export default React.forwardRef((props,ref) => {
    const dispatch = useDispatch();

	const store = useSelector(state => state.timer);

	function handleSeconds(value){
		const {hours,minutes} = store.placeholderTimer;
		
		if (value >= 0 && value <= 60)
			dispatch({type: "SET_PLACEHOLDER",hours,minutes,seconds: String(value).padStart(2,"0")});
		else if(value === 61)
			dispatch({type: "SET_PLACEHOLDER",hours,minutes,seconds: String(0).padStart(2,"0")});
		else
			dispatch({type: "SET_PLACEHOLDER",hours,minutes,seconds: String(60)});;
	}

	function pointerOver(e){
		let secondsArrowDown = document.getElementById("secondsArrowDown");
		let secondsArrowUp = document.getElementById("secondsArrowUp");

		let newStyle = {
			backgroundColor: "rgba(40,40,40,1)",
			color: "rgba(255,255,255,1)",
		}

		switch(e.target.id){
			case "secondsArrowUp":
				Object.assign(secondsArrowDown.style,newStyle)				
				Object.assign(e.target.style,newStyle)
				break;
			case "secondsArrowDown":
				Object.assign(secondsArrowUp.style,newStyle);
				Object.assign(e.target.style,newStyle);
				break;
			default:
				break;
		}
	}

	function pointerOut(e){
		if (!(e.clientX < 450 || e.clientX > 460))
			return;
		
		let secondsArrowDown = document.getElementById("secondsArrowDown");
		let secondsArrowUp = document.getElementById("secondsArrowUp");
		

		let newStyle = {
			backgroundColor: "rgba(30,30,30,0)",
			color: "rgba(255,255,255,0)",
		}

        if(e.target.id === "secondsArrowUp"){
            Object.assign(secondsArrowDown.style, newStyle)
			Object.assign(e.target.style, newStyle)
        }else{
            Object.assign(secondsArrowUp.style, newStyle);
			Object.assign(e.target.style, newStyle);
        }
	}
	
	let i = 0, secondsList = [];
	const exibited = 10;

	
	const intSeconds = parseInt(store.placeholderTimer.seconds);

    for (i = intSeconds - exibited; i < intSeconds + exibited; i++){
		if (i <= 60 && i >= 0)
			secondsList.push(i)
		else if(i < 0)
			secondsList.push(61+i)
		else
			secondsList.push(i-60)
		if (i === 60)
			secondsList.push(0);
    }

    

	return (
		<div>
            <RiArrowUpSLine id="secondsArrowUp" className="arrowUp" onClick={() => handleSeconds(intSeconds-1)} onPointerOver={pointerOver} onPointerOut={pointerOut} />
            <div>
                {secondsList.map(value => {
                    const stringValue = String(value);
                    if(stringValue === String(intSeconds)){
                        return <p  ref={ref} key={"1"+ stringValue} id={"2"+stringValue}>{stringValue}</p>
                    }
                    return <p key={"2"+stringValue} id={"2"+stringValue}>{stringValue}</p>
                })}
            </div>
            <div className="middle-bar"/>
            <RiArrowDownSLine id="secondsArrowDown" className="arrowDown" onClick={() => handleSeconds(intSeconds + 1)} onPointerOver={pointerOver} onPointerOut={pointerOut}/>
        </div>
	)
})