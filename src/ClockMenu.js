import React, {useState,useEffect} from "react";

export default function ClockMenu() {
	const [clocks,setClocks] = useState([]);

	useEffect(() => {
		if (clocks){
			let arrayO = []
			for (let i = 1; i < localStorage.length+1 ; i++){
				arrayO.push(JSON.parse(localStorage[i]))
			}

			setClocks(arrayO);
		}
	},[])

	function handleClick(){
		const object = {
			id: (clocks.length + 1).toString(),
			timer: parseInt((Math.random() * 100).toString(),10)
		}

		setClocks(clocks.concat(object))
		localStorage.setItem(object.id, JSON.stringify(object));
	}

	return (
		<div className="clocks">
			{clocks.map(clock => (
				<Clock timer={clock.timer}/>
			))}
			<button onClick={handleClick}>Criar</button>
		</div>
	);
}

function Clock(props){
	const timer = props.timer // minutes

	function handlePlay(){

	}

	function handleResize(){

	}

	function handleReboot(){

	}

	return(
		<div className="clock">
			<p>{timer}</p>
			<ul>
				<li>Reboot</li>
				<li>Play</li>
				<li>Resize</li>
			</ul>
		</div>
	);
}