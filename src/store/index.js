import {createStore,combineReducers} from "redux";

const STOPWATCH_STATE = {
	isActivated: false,
	hour: "00",
	minute: "00",
	second: "00",
	millisecondbyten: "00",
	marks: []
}

function stopWatch(state = STOPWATCH_STATE,action){
	// console.log(action.type);
	switch(action.type)
	{
		case "INCREMENT_HOUR":
			return {...state,hour: action.hour};
		case "INCREMENT_MINUTE":
			return {...state,minute: action.minute,second: "00",millisecondbyten: "00"};
		case "INCREMENT_SECOND":
			return {...state,second: action.second, minute: "00",millisecondbyten: "00"};
		case "INCREMENT_MILLISECONDBYTEN":
			return {...state,millisecondbyten: action.millisecondbyten};
		case "RESET_STOPWATCH":
			return STOPWATCH_STATE;
		case "ADD_MARK":
			return {...state, marks: [...state.marks,{hour:state.hour,minute:state.minute,second:state.second,millisecondbyten:state.millisecondbyten}]}
		case "ACTIVATE":
			return {...state, isActivated: true};
		case "DEACTIVATE":
			return {...state, isActivated: false};
		default:
			return state;
	}
}

const TIMER_STATE = {
	activeClocksIDs: [],
	placeholderTimer: {
		hours: "00",
		minutes: "00",
		seconds: "00",
		millisecondbytens: "00"
	},
	timer: {},
	clocks: [],
}

function timer(state = TIMER_STATE,action){
	
	let sizeOfClocks = String([...state.clocks].length + 1)
	switch(action.type)
	{
		case "ADD_TIMER":
			console.log(state.placeholderTimer)
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
		case "RESET_TIMER":
			return {...state,timer: {}, clocks: [...state.clocks]};
		case "ACTIVATE_TIMER":
			//Ad id in list
			return {...state, activeClocksIDs: [...state.activeClocksIDs,{id:action.identifier}]}
		case "DEACTIVATE_TIMER":
			// remove spefic id from list
			let activeClocksIDs = [...state.activeClocksIDs],newCopy = [],x = 0;
			const identifier = action.identifier;
			// console.log("DEACTIVATED:",activeClocksIDs)
			for (x of activeClocksIDs){
				if (x.id !== identifier){
					newCopy.push(x)
				}
			}
			return {...state, activeClocksIDs: [...newCopy]}
		case "ADD_CLOCKS":
			return {...state, timer: {}, clocks: action.clocks}
		case "DECREMENT_COUNTER":
			let clocks = [...state.clocks];

			clocks.map(clock => {
				if([...state.activeClocksIDs].some(value => clock?.id === value?.id)){
					let {timer} = clock;
					if(timer.millisecondbyten === "00" && !(timer.hours === "00" && timer.minutes === "00" && timer.seconds === "00")){
						let secondInt = parseInt(timer.seconds);
						let hourInt = parseInt(timer.hours);
						let minuteInt = parseInt(timer.minutes);
						const {log} = console;
						log(`${hourInt}:${minuteInt}:${secondInt}`)

						if (secondInt < 1 && minuteInt > 0){
							secondInt = 60;

							if (minuteInt < 1 && hourInt > 0){
								minuteInt = 60

								if (hourInt < 1)
									hourInt = 24;

								timer.hours = String(--hourInt).padStart(2,"0");
							}


							timer.minutes = String(--minuteInt).padStart(2, "0");

						}
						else if (secondInt !== 0)
							timer.seconds = String(--secondInt).padStart(2,"0");

						timer.millisecondbyten = "100";
					}
					else if (!(timer.hours === "00" && timer.minutes === "00" && timer.seconds === "00")){
						let millisecondbytenInt = parseInt(timer.millisecondbyten);
						timer.millisecondbyten = String(--millisecondbytenInt).padStart(2,"0");
					}
					else{
						let copy = [...state.clocks];
						for (let value of copy){
							if (value.hours === "00" && value.minutes === "00" && value.seconds === "00" && value.millisecondbyten === "00"){
								return {timer: JSON.parse(localStorage.getItem(value.id))};
							}
						}
					}
				}
				return clock;
			})
			return {...state, clocks};
		case "RESET_COUNTER":
			const copy = [...state.clocks]

			if (action?.identifier){
				copy.map(clock => {
					if (clock.id === action.identifier){
						clock.timer = JSON.parse(localStorage.getItem(action.identifier))
						let secondsInt = parseInt(clock.timer.seconds);
						clock.timer.seconds = String(--secondsInt).padStart(2,"0");
						clock.timer.millisecondbyten = "100";
					}
					return clock;
				})
			}
			return {...state, clocks: copy};
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


const store = createStore(combineReducers({timer,stopWatch}),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;