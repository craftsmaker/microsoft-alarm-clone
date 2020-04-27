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
			timer: parseInt((Math.random() * 100).toString(),10)
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
				<li><i className="fas fa-clock" style={{color: "white"}}></i></li>
				<li>Resize</li>
			</ul>
		</div>
	);
}