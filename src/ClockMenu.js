import React, {useState} from "react";

export default function ClockMenu() {
	return (
		<div>
			<Clock/>
		</div>
	);
}

function Clock(){
	const [timer,setTimer] = useState(1) // minutes

	function handlePlay(){

	}

	function handleResize(){

	}

	function handleReboot(){

	}

	return(
		<div>
			<p>{timer}</p>
			<ul>
				<li>Reboot</li>
				<li>Play</li>
				<li>Resize</li>
			</ul>
		</div>
	);
}