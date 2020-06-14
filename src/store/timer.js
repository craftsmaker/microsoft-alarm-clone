import {transformListOfStringfiedObjectsIntoArray} from "../utils";

const TIMER_STATE = {
	activeClocksIDs: [],
	placeholderTimer: {
		hours: "00",
		minutes: "00",
		seconds: "00",
		millisecondsbyten: "00"
	},
	clocks: [],
	modal: [false,{},0]
}

export default function(state = TIMER_STATE,action){
	let activeClocksIDs = [...state.activeClocksIDs];
	let identifier = action.identifier;
	let clocks = [...state.clocks];

	switch(action.type)
	{
		case "CHANGE_MODAL":
			return {...state, modal: action.modal, identifier: action.identifier};
		case "ADD_TIMER":
			const timer = {...state.placeholderTimer,millisecondsbyten: "00"};

			let timers = transformListOfStringfiedObjectsIntoArray(localStorage.getItem("timers"));

			if (!timers){
				localStorage.setItem("timers",  JSON.stringify(timer));
			}
			else{
				
				timers.push(timer);
				let newTimers = timers.map(timer => JSON.stringify(timer));

				localStorage.setItem("timers",  newTimers.join());
			}
			

			return {
				...state,
				clocks: [...state.clocks, timer]
			}
		case "ACTIVATE_TIMER":
			return {...state, activeClocksIDs: [...state.activeClocksIDs,action.identifier]}
		case "DEACTIVATE_TIMER":
			identifier = activeClocksIDs.findIndex(id => id === identifier);
			if (identifier !== -1)
				activeClocksIDs.splice(identifier,identifier + 1);

			return {...state, activeClocksIDs}
		case "ADD_CLOCKS":
			console.log("ADD CLOCKS")
			return {...state, clocks: action.clocks}
		case "DECREMENT_COUNTER":			
			clocks.forEach((timer,clockID) => {
				if(activeClocksIDs.some(ID => clockID === ID)){
					let hasEnded= false;
					
					let millisecondsbytenInt = parseInt(timer.millisecondsbyten);
					let secondInt = parseInt(timer.seconds);
					let minuteInt = parseInt(timer.minutes);
					let hourInt = parseInt(timer.hours);
					// 1hr 60min 60s
					// console.log(`hours:${hourInt} minutes:${minuteInt} seconds:${secondInt} millisecondsbyten: ${millisecondsbytenInt}`);
					if(millisecondsbytenInt > 0)
						--millisecondsbytenInt;
					else{
						if(secondInt > 0){
							--secondInt;
							millisecondsbytenInt = 100;
						}
						else{
							
							if (minuteInt > 0){
								--minuteInt
								secondInt = 60;
							}
							else{
								if (hourInt > 0){
									--hourInt
									minuteInt = 60;
								}else
									hasEnded = true;
							}
						}
						
					}
					
					if (hasEnded){
						identifier = activeClocksIDs.findIndex(ID => ID === clockID);
						if(identifier !== -1){
							activeClocksIDs.splice(identifier,identifier + 1);
							Object.assign(timer,JSON.parse(localStorage.getItem(clockID)));
						}
					} else{
						timer.hours = String(hourInt).padStart(2,"0");
						timer.minutes = String(minuteInt).padStart(2,"0");
						timer.seconds = String(secondInt).padStart(2,"0");
						timer.millisecondsbyten = String(millisecondsbytenInt).padStart(2,"0");
					}
				}
			})
			
			// console.log(`The final clocks state:`,clocks)
			return {...state, clocks,activeClocksIDs};
		case "RESET_COUNTER":
			// let id = clocks.findIndex((clock,clockID) => clockID === identifier);
			clocks[action.identifier] = transformListOfStringfiedObjectsIntoArray(localStorage.getItem("timers"))[action.identifier];
			return {...state, clocks};
		case "SET_PLACEHOLDER":
			return {...state, placeholderTimer: {
				hours: action.hours,
				minutes: action.minutes,
				seconds: action.seconds
			}}
		default:
			return {...state,timer: {}, clocks: [...state.clocks]};
	}
}