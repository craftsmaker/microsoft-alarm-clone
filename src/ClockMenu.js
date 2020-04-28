import React, {useState,useEffect} from "react";

export default function ClockMenu(props) {
	const [clocks,setClocks] = useState([]);
	const [isUpdated, setIsUpdated] = useState(false);
	let info = props.value;
	let setInfo = props.onChange;

	useEffect(() => {
		if (info.type === "handleClick"){
			handleClick();
			console.log("Clicked")
			setInfo({})
		}
	
	})

	if (!isUpdated){
			let arrayO = []
			for (let i = 1; i < localStorage.length + 1 ; i++){
				arrayO.push(JSON.parse(localStorage[i]))
			}

			setClocks(arrayO);
			setIsUpdated(true);
		}


	function handleClick(){
		const object = {
			id: (clocks.length + 1).toString(),
			timer: {
				hours: parseInt((Math.random() * 24).toString(),10),
				minutes: parseInt((Math.random() * 60).toString(),10),
				seconds: parseInt((Math.random() * 60).toString(),10)
			}
		}

		setClocks([...clocks,object])
		localStorage.setItem(object.id, JSON.stringify(object));
	}

	if (clocks.length > 0){
		return (
			<div className="clocks">
				<ul>
					{clocks.map(clock => 
						<li key={clock.id}><Clock  timer={clock.timer}/></li>
					)}
				</ul>
			</div>
		);
	}

	return (
		<div className="clocks">

		</div>
	);
}

function Clock(props){
	const timer = props.timer // object {hours,minutes,seconds}

	function handlePlay(){

	}

	function handleResize(){

	}

	function handleReboot(){

	}

	return(
		<div className="clock">
			<p>{timer.hours}:{timer.minutes}:{timer.seconds}</p>
			<ul>
				<li><i className="material-icons" style={{position:"relative",top:15}}>replay</i></li>
				<li><i className="material-icons" style={{fontSize: 60, color: "white", borderRadius: "100%"}}>play_circle_filled</i></li>
				<li><i className="material-icons" style={{position:"relative",top:15}}>fullscreen</i></li>
			</ul>
		</div>
	);
}