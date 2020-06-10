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
	let sizeOfClocks = String([...state.clocks].length + 1)
	let activeClocksIDs = [...state.activeClocksIDs];
	let identifier = action.identifier;
	let clocks = [...state.clocks];

	switch(action.type)
	{
		case "CHANGE_MODAL":
			return {...state, modal: action.modal, identifier: action.identifier};
		case "ADD_TIMER":
			const timer = {...state.placeholderTimer,millisecondbyten: "00"};
			const parsedClocks = 
			[
				...state.clocks,
				{
					id: sizeOfClocks ,
					timer: timer
				}
			];
			
			localStorage.setItem(sizeOfClocks,JSON.stringify(timer))

			return {
				...state,
				timer: timer,
				clocks: parsedClocks
			}
		case "ACTIVATE_TIMER":
			return {...state, activeClocksIDs: [...state.activeClocksIDs,action.identifier]}
		case "DEACTIVATE_TIMER":
			identifier = activeClocksIDs.findIndex(id => id === identifier);
			if (identifier !== -1)
				activeClocksIDs.splice(identifier,identifier + 1);

			return {...state, activeClocksIDs}
		case "ADD_CLOCKS":
			return {...state, timer: {}, clocks: action.clocks}
		case "DECREMENT_COUNTER":			
			clocks.map(clock => {
				if(activeClocksIDs.some(ID => clock?.id === ID)){
					let hasEnded= false;
					let {timer} = clock;
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
						identifier = activeClocksIDs.findIndex(ID => ID === clock.id);
						if(identifier !== -1){
							activeClocksIDs.splice(identifier,identifier + 1);
							Object.assign(timer,JSON.parse(localStorage.getItem(clock.id)));
						}
					} else{
						timer.hours = String(hourInt).padStart(2,"0");
						timer.minutes = String(minuteInt).padStart(2,"0");
						timer.seconds = String(secondInt).padStart(2,"0");
						timer.millisecondsbyten = String(millisecondsbytenInt).padStart(2,"0");
					}
				}
				return clock;
			})
			
			console.log(`The final clocks state:`,clocks)
			return {...state, clocks,activeClocksIDs};
		case "RESET_COUNTER":
			let id = clocks.findIndex(clock => clock.id === identifier);
			clocks[id] = {id: identifier,timer: JSON.parse(localStorage.getItem(identifier))}
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